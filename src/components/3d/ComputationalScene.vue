<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { portfolioJourney } from '@/composables/usePortfolioJourney'
import { useExperienceStore } from '@/stores/experienceStore'

const emit = defineEmits<{ ready: []; unavailable: [] }>()
const host = ref<HTMLDivElement | null>(null)
const store = useExperienceStore()
let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let sculpture: THREE.Group | null = null
let mesh: THREE.InstancedMesh | null = null
let material: THREE.MeshPhysicalMaterial | null = null
let connections: THREE.LineSegments | null = null
let environment: THREE.WebGLRenderTarget | null = null
let frame = 0
let previousTime = 0
let elapsed = 0
let pointerX = 0
let pointerY = 0
let easedX = 0
let easedY = 0
let smoothProgress = 0
let hasRendered = false
let width = 1
let height = 1
const uniforms = {
  uProgress: { value: 0 },
  uTime: { value: 0 },
  uLight: { value: 0 },
}
const clamp = (n: number) => Math.max(0, Math.min(1, n))
const ease = (n: number) => { const t = clamp(n); return t * t * t * (t * (t * 6 - 15) + 10) }

function resize() {
  if (!renderer || !camera || !host.value) return
  width = host.value.clientWidth
  height = host.value.clientHeight
  camera.aspect = width / Math.max(1, height)
  camera.updateProjectionMatrix()
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, width < 800 ? 1.3 : 1.75))
  renderer.setSize(width, height)
}

function theme() {
  if (!material) return
  uniforms.uLight.value = store.isDark ? 0 : 1
  material.color.set(store.isDark ? 0xb7c5c6 : 0x536568)
  material.roughness = store.isDark ? 0.29 : 0.38
  if (connections) (connections.material as THREE.LineBasicMaterial).color.set(store.isDark ? 0xbcefb9 : 0x305a43)
}

function pointer(e: PointerEvent) {
  if (e.pointerType === 'touch') return
  pointerX = e.clientX / width * 2 - 1
  pointerY = e.clientY / height * 2 - 1
}
function resetPointer() { pointerX = 0; pointerY = 0 }
function contextLost(e: Event) {
  e.preventDefault()
  cancelAnimationFrame(frame)
  emit('unavailable')
}

function init() {
  if (!host.value) return
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(37, 1, 0.1, 80)
  camera.position.set(0, 4.4, 10.6)
  camera.lookAt(0, 0, 0)
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
  renderer.setClearColor(0x000000, 0)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.12
  host.value.appendChild(renderer.domElement)
  renderer.domElement.addEventListener('webglcontextlost', contextLost)
  resize()

  const room = new RoomEnvironment()
  const pmrem = new THREE.PMREMGenerator(renderer)
  environment = pmrem.fromScene(room, 0.04)
  scene.environment = environment.texture
  room.dispose()
  pmrem.dispose()
  scene.add(new THREE.HemisphereLight(0xe9f5ed, 0x172322, 2.2))
  const key = new THREE.DirectionalLight(0xffffff, 3.2)
  key.position.set(-3, 7, 4)
  scene.add(key)
  const rim = new THREE.DirectionalLight(0xc7f5cf, 2.5)
  rim.position.set(4, 2, -4)
  scene.add(rim)

  sculpture = new THREE.Group()
  scene.add(sculpture)
  const size = 28
  const count = size * size
  const geometry = new RoundedBoxGeometry(0.19, 0.22, 0.19, 2, 0.022)
  const home = new Float32Array(count * 3)
  const system = new Float32Array(count * 3)
  const learning = new Float32Array(count * 3)
  const seeds = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    const x = (i % size - (size - 1) / 2) * 0.215
    const z = (Math.floor(i / size) - (size - 1) / 2) * 0.215
    // A sampled field: discrete units trace a continuous, folded surface.
    const y = Math.sin(x * 0.75 + z * 0.45) * 0.72 + Math.cos(z * 0.85) * 0.3
    home.set([x, y, z], i * 3)
    const layer = Math.floor(i / 112)
    const col = i % 14
    const row = Math.floor(i / 14) % 8
    // The same data resolves into seven stacked architectural layers.
    system.set([(col - 6.5) * 0.255, (layer - 3) * 0.52, (row - 3.5) * 0.285], i * 3)
    // Feature planes: connected layers, rather than an unrelated rotating orb.
    learning.set([(layer - 3) * 0.78, (row - 3.5) * 0.34, (col - 6.5) * 0.25], i * 3)
    seeds[i] = (Math.sin(i * 127.1) * 43758.5453) % 1
  }
  geometry.setAttribute('aHome', new THREE.InstancedBufferAttribute(home, 3))
  geometry.setAttribute('aSystem', new THREE.InstancedBufferAttribute(system, 3))
  geometry.setAttribute('aLearning', new THREE.InstancedBufferAttribute(learning, 3))
  geometry.setAttribute('aSeed', new THREE.InstancedBufferAttribute(seeds, 1))

  material = new THREE.MeshPhysicalMaterial({
    color: 0xb7c5c6, metalness: 0.54, roughness: 0.29,
    clearcoat: 0.45, clearcoatRoughness: 0.25,
  })
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms)
    shader.vertexShader = `
      attribute vec3 aHome;
      attribute vec3 aSystem;
      attribute vec3 aLearning;
      attribute float aSeed;
      uniform float uProgress;
      uniform float uTime;
      varying float vSignal;
      float smoother(float x) { x = clamp(x, 0., 1.); return x*x*x*(x*(x*6.-15.)+10.); }
    ` + shader.vertexShader
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `
      float first = smoother((uProgress - 0.12 - aSeed * 0.04) / 0.83);
      float second = smoother((uProgress - 1.12 - aSeed * 0.04) / 0.83);
      vec3 place = mix(mix(aHome, aSystem, first), aLearning, second);
      float wave = sin(aHome.x * 1.25 + aHome.z * 0.75 + uTime * 0.32);
      place.y += wave * 0.075 * (1. - first);
      vec3 dimensions = mix(vec3(1., 1.2 + (aHome.y + 1.) * 0.5, 1.), vec3(1.12, 0.48, 1.12), first);
      dimensions = mix(dimensions, vec3(0.47), second);
      vec3 transformed = position * dimensions + place;
      vSignal = smoothstep(0.93, 1., sin(aHome.x * 0.9 + aHome.z * 0.7 - uTime * 0.24));
    `)
    shader.fragmentShader = 'varying float vSignal;\nuniform float uLight;\n' + shader.fragmentShader
    shader.fragmentShader = shader.fragmentShader.replace('#include <color_fragment>', `
      #include <color_fragment>
      vec3 accent = mix(vec3(0.65, 0.89, 0.49), vec3(0.19, 0.39, 0.26), uLight);
      diffuseColor.rgb = mix(diffuseColor.rgb, accent, vSignal * 0.68);
    `)
  }
  mesh = new THREE.InstancedMesh(geometry, material, count)
  const identity = new THREE.Matrix4()
  const color = new THREE.Color()
  for (let i = 0; i < count; i++) {
    mesh.setMatrixAt(i, identity)
    const shade = 0.65 + Math.abs(seeds[i]) * 0.35
    mesh.setColorAt(i, color.setRGB(shade, shade, shade))
  }
  mesh.frustumCulled = false
  sculpture.add(mesh)

  const edges: number[] = []
  for (let layer = 0; layer < 6; layer++) {
    for (let node = 0; node < 14; node++) {
      const from = (layer * 112 + node * 8) * 3
      const to = ((layer + 1) * 112 + ((node * 8 + 29) % 112)) * 3
      edges.push(learning[from], learning[from + 1], learning[from + 2], learning[to], learning[to + 1], learning[to + 2])
    }
  }
  connections = new THREE.LineSegments(
    new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(edges, 3)),
    new THREE.LineBasicMaterial({ color: 0xbcefb9, transparent: true, opacity: 0, depthWrite: false }),
  )
  sculpture.add(connections)
  theme()
  render(performance.now())
  emit('ready')
}

function render(time: number) {
  if (!renderer || !scene || !camera || !sculpture) return
  const dt = Math.min(0.04, Math.max(0, (time - (previousTime || time)) / 1000))
  previousTime = time
  elapsed += dt

  const rawP = portfolioJourney.progress
  if (!hasRendered) {
    smoothProgress = rawP
    hasRendered = true
  } else {
    const pDamp = 1 - Math.exp(-18 * dt)
    smoothProgress += (rawP - smoothProgress) * pDamp
  }

  const p = Math.min(2, smoothProgress)
  const first = ease(p)
  const second = ease(p - 1)
  const exit = ease((smoothProgress - 2.25) / 0.75)
  easedX += (pointerX - easedX) * (1 - Math.exp(-3 * dt))
  easedY += (pointerY - easedY) * (1 - Math.exp(-3 * dt))
  uniforms.uTime.value = elapsed
  uniforms.uProgress.value = p
  const mobile = width < 800
  sculpture.position.set(mobile ? 0 : 2.45, (mobile ? -0.5 : -0.12) + Math.sin(elapsed * 0.32) * 0.035 - exit * 0.8, 0)
  const scale = (mobile ? 0.68 : 1) * (1 - exit * 0.12)
  sculpture.scale.setScalar(scale)
  sculpture.rotation.set(
    -0.06 + first * 0.05 + second * 0.1 + easedY * 0.025,
    -0.5 + first * 0.16 - second * 0.2 + easedX * 0.065,
    -0.14 + first * 0.12 + second * 0.05,
  )
  if (connections) (connections.material as THREE.LineBasicMaterial).opacity = ease((p - 1.65) / 0.35) * 0.24
  // CSS owns the final stage fade, leaving the mesh opaque for correct depth.
  if (host.value) host.value.style.opacity = String(1 - exit)
  if (!document.hidden && exit < 0.999) renderer.render(scene, camera)
  frame = requestAnimationFrame(render)
}

watch(() => store.isDark, theme)
onMounted(() => {
  try { init() } catch (error) {
    console.warn('The interactive sculpture could not be initialized.', error)
    emit('unavailable')
  }
  window.addEventListener('resize', resize, { passive: true })
  window.addEventListener('pointermove', pointer, { passive: true })
  document.addEventListener('pointerleave', resetPointer)
})
onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('resize', resize)
  window.removeEventListener('pointermove', pointer)
  document.removeEventListener('pointerleave', resetPointer)
  renderer?.domElement.removeEventListener('webglcontextlost', contextLost)
  scene?.traverse((object) => {
    const item = object as THREE.Mesh
    item.geometry?.dispose()
    if (item.material) (Array.isArray(item.material) ? item.material : [item.material]).forEach((m) => m.dispose())
  })
  environment?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()
  scene = null
  renderer = null
})
</script>

<template>
  <div ref="host" class="computational-scene" aria-hidden="true" />
</template>
