<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'

const props = defineProps<{
  activeIndex?: number
  zoomProgress?: number
}>()

const containerRef = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let animFrameId: number | null = null

let sphereGroup: THREE.Group | null = null
let coreSphere: THREE.Mesh | null = null
let wireSphere: THREE.Mesh | null = null
let satellites: THREE.Mesh[] = []
let laserLines: THREE.LineSegments | null = null
let particles: THREE.Points | null = null

let targetRotationY = 0
let currentRotationY = 0
let targetCameraZ = 7.5
let currentCameraZ = 7.5

watch(
  () => props.activeIndex,
  (newIdx) => {
    if (newIdx !== undefined) {
      targetRotationY = -(newIdx * (Math.PI * 2)) / 6
      // Highlight active satellite
      satellites.forEach((sat, i) => {
        const mat = sat.material as THREE.MeshStandardMaterial
        if (i === newIdx) {
          mat.color.setHex(0x00f3ff)
          mat.emissive.setHex(0x00f3ff)
          mat.emissiveIntensity = 1.0
          sat.scale.set(1.4, 1.4, 1.4)
        } else {
          mat.color.setHex(0x0096ff)
          mat.emissive.setHex(0x003366)
          mat.emissiveIntensity = 0.4
          sat.scale.set(1.0, 1.0, 1.0)
        }
      })
    }
  }
)

watch(
  () => props.zoomProgress,
  (zp) => {
    if (zp !== undefined) {
      if (zp < 0.15) {
        // Unzoom from close (3.0) to 7.5
        const t = zp / 0.15
        targetCameraZ = 3.0 + 4.5 * t
      } else if (zp > 0.85) {
        // Zoom dive into tech sphere core from 7.5 to 1.5!
        const t = (zp - 0.85) / 0.15
        targetCameraZ = 7.5 - 6.0 * (t * t)
      } else {
        targetCameraZ = 7.5
      }
    }
  }
)

function initThree() {
  if (!containerRef.value) return
  const width = containerRef.value.clientWidth || 500
  const height = containerRef.value.clientHeight || 500

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.z = 7.5

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)

  sphereGroup = new THREE.Group()

  // 1. Central Wireframe Geodesic Tech Sphere
  const geo = new THREE.IcosahedronGeometry(1.5, 2)
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x00f3ff,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  })
  wireSphere = new THREE.Mesh(geo, wireMat)
  sphereGroup.add(wireSphere)

  // Inner Solid Emissive Core
  const coreGeo = new THREE.SphereGeometry(1.0, 32, 32)
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x0a192f,
    emissive: 0x00a8e8,
    emissiveIntensity: 0.5,
    metalness: 0.8,
    roughness: 0.2,
  })
  coreSphere = new THREE.Mesh(coreGeo, coreMat)
  sphereGroup.add(coreSphere)

  // 2. 6 Orbiting Satellites (1 for each tech category)
  const satGeo = new THREE.OctahedronGeometry(0.25)
  const linePositions: number[] = []

  satellites = []
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6
    const radius = 2.4
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius
    const y = Math.sin(angle * 2) * 0.4

    const satMat = new THREE.MeshStandardMaterial({
      color: 0x0096ff,
      emissive: 0x003366,
      emissiveIntensity: 0.4,
      metalness: 0.8,
    })
    const sat = new THREE.Mesh(satGeo, satMat)
    sat.position.set(x, y, z)
    satellites.push(sat)
    sphereGroup.add(sat)

    // Laser connection from center to satellite
    linePositions.push(0, 0, 0)
    linePositions.push(x, y, z)
  }

  // Laser lines connecting center to satellites
  const lineGeo = new THREE.BufferGeometry()
  lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
  const lineMat = new THREE.LineBasicMaterial({
    color: 0x00f3ff,
    transparent: true,
    opacity: 0.45,
  })
  laserLines = new THREE.LineSegments(lineGeo, lineMat)
  sphereGroup.add(laserLines)

  // 3. Orbiting Data Sparks
  const pCount = 100
  const pPos: number[] = []
  for (let p = 0; p < pCount; p++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)
    const r = 2.0 + Math.random() * 1.5
    pPos.push(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi))
  }
  const pGeo = new THREE.BufferGeometry()
  pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPos, 3))
  const pMat = new THREE.PointsMaterial({
    color: 0x00f3ff,
    size: 0.04,
    transparent: true,
    opacity: 0.7,
  })
  particles = new THREE.Points(pGeo, pMat)
  sphereGroup.add(particles)

  // Lights
  const light = new THREE.PointLight(0x00f3ff, 3, 20)
  light.position.set(0, 0, 5)
  scene.add(light)

  const amb = new THREE.AmbientLight(0x0a192f, 2)
  scene.add(amb)

  scene.add(sphereGroup)

  let clock = new THREE.Clock()

  function animate() {
    const delta = clock.getDelta()
    currentRotationY += (targetRotationY - currentRotationY) * 0.08

    if (sphereGroup) {
      sphereGroup.rotation.y = currentRotationY
      sphereGroup.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.15
    }

    if (wireSphere) {
      wireSphere.rotation.z += delta * 0.1
    }

    satellites.forEach((sat) => {
      sat.rotation.x += delta * 0.8
      sat.rotation.y += delta * 0.8
    })

    if (particles) {
      particles.rotation.y += delta * 0.15
    }

    currentCameraZ += (targetCameraZ - currentCameraZ) * 0.08
    if (camera) {
      camera.position.z = currentCameraZ
    }

    if (renderer && scene && camera) {
      renderer.render(scene, camera)
    }

    animFrameId = requestAnimationFrame(animate)
  }

  animFrameId = requestAnimationFrame(animate)
}

function disposeScene() {
  if (animFrameId !== null) {
    cancelAnimationFrame(animFrameId)
    animFrameId = null
  }
  if (renderer) {
    renderer.dispose()
    const dom = renderer.domElement
    if (dom && dom.parentNode) dom.parentNode.removeChild(dom)
    renderer = null
  }
}

onMounted(() => {
  initThree()
})

onBeforeUnmount(() => {
  disposeScene()
})
</script>

<template>
  <div ref="containerRef" class="w-full h-full min-h-[340px] pointer-events-none" />
</template>
