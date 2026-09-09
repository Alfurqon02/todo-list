<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { buildCyberWorld } from '@/utils/buildCyberWorld'
import { CYBER_STOPS, flightAt, smooth, clamp01, centerFollowAt, engineeringAssemblyAt, cameraDepthAt } from '@/utils/cyberStory'
import { cyberJourney } from '@/composables/useCyberJourney'
import { useExperienceStore } from '@/stores/experienceStore'

const emit = defineEmits<{ ready: []; unavailable: [] }>()
const host = ref<HTMLDivElement | null>(null)
const store = useExperienceStore()
let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let composer: EffectComposer | null = null
let bloom: UnrealBloomPass | null = null
let environment: THREE.WebGLRenderTarget | null = null
let world: ReturnType<typeof buildCyberWorld> | null = null
let frame = 0
let last = 0
let elapsed = 0
let pointerX = 0
let pointerY = 0
let mouseX = 0
let mouseY = 0
let width = 1
let height = 1
const vPosition = new THREE.Vector3()
const vTarget = new THREE.Vector3()
const followPosition = new THREE.Vector3()
const followTarget = new THREE.Vector3()
const nextPosition = new THREE.Vector3()
const nextTarget = new THREE.Vector3()
const followOffset = new THREE.Vector3(0, 2.6, 5.5)


function updateTheme() {
  if (!scene || !renderer) return
  const background = store.isDark ? 0x050a11 : 0xe8eff2
  ;(scene.background as THREE.Color).setHex(background)
  ;(scene.fog as THREE.FogExp2).color.setHex(background)
  renderer.toneMappingExposure = store.isDark ? 1.05 : 0.92
  scene.environmentIntensity = store.isDark ? 0.85 : 1.1
  if (bloom) bloom.strength = store.isDark ? 0.32 : 0.12
}
watch(() => store.isDark, updateTheme)

function resize() {
  if (!host.value || !renderer || !camera) return
  width = host.value.clientWidth
  height = Math.max(1, host.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, width < 800 ? 1.15 : 1.5))
  renderer.setSize(width, height)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  composer?.setPixelRatio(renderer.getPixelRatio())
  composer?.setSize(width, height)
  if (bloom) bloom.enabled = width >= 800
}
function pointer(event: PointerEvent) {
  if (event.pointerType === 'touch') return
  pointerX = event.clientX / width * 2 - 1
  pointerY = event.clientY / height * 2 - 1
}
function resetPointer() { pointerX = 0; pointerY = 0 }
function contextLost(e: Event) { e.preventDefault(); cancelAnimationFrame(frame); emit('unavailable') }

function init() {
  if (!host.value) return
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x050a11)
  scene.fog = new THREE.FogExp2(0x050a11, 0.023)
  camera = new THREE.PerspectiveCamera(44, 1, 0.08, 85)
  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  host.value.appendChild(renderer.domElement)
  renderer.domElement.addEventListener('webglcontextlost', contextLost)
  const studio = new RoomEnvironment()
  const pmrem = new THREE.PMREMGenerator(renderer)
  environment = pmrem.fromScene(studio, 0.04)
  scene.environment = environment.texture
  scene.environmentIntensity = 0.85
  studio.dispose()
  pmrem.dispose()
  scene.add(new THREE.HemisphereLight(0x95c6e4, 0x10101e, 2.1))
  const key = new THREE.DirectionalLight(0xd4eaff, 3.5)
  key.position.set(4, 9, 6)
  scene.add(key)
  const rim = new THREE.DirectionalLight(0x24a6fa, 2)
  rim.position.set(-5, 3, -8)
  scene.add(rim)
  world = buildCyberWorld()
  scene.add(world.group)
  composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.32, 0.45, 0.82)
  composer.addPass(bloom)
  composer.addPass(new OutputPass())
  updateTheme()
  resize()
  render(performance.now())
  emit('ready')
}

function render(time: number) {
  if (!world || !camera || !renderer || !scene) return
  const dt = Math.min(0.035, Math.max(0, (time - (last || time)) / 1000))
  last = time
  elapsed += dt

  const p = cyberJourney.position
  const { index, travel } = flightAt(p)
  const stop = CYBER_STOPS[index]
  const next = CYBER_STOPS[Math.min(index + 1, CYBER_STOPS.length - 1)]
  // The signal and camera use the same scroll sample, in both directions.
  const follow = centerFollowAt(travel)
  const routeZ = THREE.MathUtils.lerp(stop.z, next.z, travel)
  world.signalPath.getPointAt(clamp01(-routeZ / 112), world.signal.position)
  followTarget.copy(world.signal.position).y += 0.15
  followPosition.copy(followTarget).add(followOffset)
  vPosition.fromArray(stop.position).lerp(nextPosition.fromArray(next.position), travel)
  vTarget.fromArray(stop.target).lerp(nextTarget.fromArray(next.target), travel)
  // Only height and lateral framing blend into the follow rig. Depth always
  // advances between chapter endpoints, so entering/leaving the rig cannot reverse it.
  vPosition.z = cameraDepthAt(p, width < 800)
  followPosition.z = vPosition.z
  vPosition.lerp(followPosition, follow)
  vTarget.lerp(followTarget, follow)
  // Smooth out mouse look
  const response = 1 - Math.exp(-4 * dt)
  mouseX += (pointerX - mouseX) * response
  mouseY += (pointerY - mouseY) * response
  const settled = 1 - follow
  vPosition.x += mouseX * 0.16 * settled
  vPosition.y -= mouseY * 0.1 * settled
  if (width < 800) {
    // Pull back and aim lower in portrait, reserving the upper screen for copy.
    vPosition.y += 3.4 * settled
    vTarget.x = vTarget.x * (1 - settled)
    const engineeringFraming = THREE.MathUtils.lerp(index === 1 ? -2.65 : 0, index + 1 === 1 ? -2.65 : 0, travel)
    vTarget.x += engineeringFraming * settled
    vTarget.y += 2.5 * settled
  }

  // Progress is already damped above; damping the rig separately would make
  // its look target lag behind the box and drift away from screen center.
  camera.position.copy(vPosition)
  camera.lookAt(vTarget)
  const lenses = [44, 48, 55, 48, 42, 48, 44]
  const fov = THREE.MathUtils.lerp(lenses[index], lenses[Math.min(index + 1, 6)], travel) + Math.sin(Math.PI * travel) * 4 + (width < 800 ? 9 : 0)
  if (Math.abs(camera.fov - fov) > 0.005) { camera.fov = fov; camera.updateProjectionMatrix() }

  const opened = smooth((p - 0.17) / 0.55)
  for (const panel of world.shellPanels) {
    const [x, z] = panel.userData.direction
    panel.position.set(x * (1.88 + opened * 2.05), 0.1 + opened * 1.6, z * (1.88 + opened * 0.6))
    panel.rotation.z = -x * opened * 0.68
    panel.rotation.x = z * opened * 0.2
  }
  world.signal.rotation.y = elapsed * 0.25
  const pulse = 1 + Math.sin(elapsed * 2.4) * 0.1
  world.signal.scale.setScalar(pulse)
  world.inputFrames.forEach((input, i) => { input.rotation.y = (i ? -1 : 1) * smooth((p - 1.6) / 0.7) * 0.18 })
  world.neuralLayers.forEach((layer, i) => {
    const activated = smooth((p - 1.85 - i * 0.055) / 0.16)
    layer.scale.y = 0.15 + activated * 0.85
    layer.rotation.z = (1 - activated) * (i % 2 ? -0.65 : 0.65)
  })
  world.computeBlades.forEach((blade, i) => {
    const reveal = engineeringAssemblyAt(p, i).layer
    blade.position.z = blade.userData.restZ + reveal * 0.25
    blade.position.y = blade.userData.restY + reveal * (0.15 + i * 0.55)
  })
  world.engineeringLid.position.y = 1.23 + engineeringAssemblyAt(p, 0).lid * 2.15
  world.mapNodes.forEach((node, i) => {
    node.position.y = -0.9 + smooth((p - 2.7 - i * 0.08) / 0.4) * 1.7
  })
  world.dataPackets.forEach((packet, i) => {
    const t = (elapsed * 0.23 + i / world!.dataPackets.length) % 1
    packet.position.set(Math.sin(t * Math.PI * 4 + i) * (1 - t) * 2.6, 0.6 + Math.sin(t * Math.PI * 3 + i) * 0.7, -31 - t * 11)
    packet.scale.setScalar(0.55 + Math.sin(t * Math.PI) * 0.45)
  })
  world.archiveCards.forEach((card, i) => {
    const target = card.userData.restX - Math.sign(card.userData.restX) * (i === store.activeNodeIndex ? 0.55 : 0)
    card.position.x += (target - card.position.x) * (1 - Math.exp(-5 * dt))
  })
  world.skillRings.forEach((cassette, i) => {
    const assemble = smooth((p - 4.72) / 0.4) * (1 - smooth((p - 5.48) / 0.35))
    const angle = i / world!.skillRings.length * Math.PI * 2
    cassette.position.x = THREE.MathUtils.lerp(cassette.userData.restX, Math.cos(angle) * 3.6, assemble)
    cassette.position.z = THREE.MathUtils.lerp(cassette.userData.restZ, -94 + Math.sin(angle) * 2.3, assemble)
    cassette.rotation.z = Math.sin(angle) * assemble * 0.14
    const target = 0.1 + assemble * (2 + Math.sin(angle) * 1.1) + (i === store.activeSkillIndex ? 0.8 : 0)
    cassette.position.y += (target - cassette.position.y) * (1 - Math.exp(-5 * dt))
  })
  if (!document.hidden) composer ? composer.render() : renderer.render(scene, camera)
  frame = requestAnimationFrame(render)
}

onMounted(() => {
  try { init() } catch (error) { console.warn('Interactive world unavailable.', error); emit('unavailable') }
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
  world?.dispose()
  environment?.dispose()
  composer?.passes.forEach((pass) => pass.dispose())
  composer?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()
})
</script>

<template><div ref="host" class="cyber-world-canvas" aria-hidden="true" /></template>
