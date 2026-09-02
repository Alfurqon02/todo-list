<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import { useExperienceStore } from '@/stores/experienceStore'

const props = defineProps<{
  rotationAngle?: number
  zoomProgress?: number
}>()

const store = useExperienceStore()
const containerRef = ref<HTMLDivElement | null>(null)

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let animFrameId: number | null = null

let pillarGroup: THREE.Group | null = null
let coreCylinder: THREE.Mesh | null = null
let wireCage: THREE.Mesh | null = null
let ringTop: THREE.Group | null = null
let ringBottom: THREE.Group | null = null
let ringMiddle: THREE.Group | null = null
let particles: THREE.Points | null = null
let conduitLines: THREE.LineSegments | null = null

let targetPillarRotation = 0
let currentPillarRotation = 0
let idleRotation = 0
let targetCameraZ = 14
let currentCameraZ = 14

// Watch external rotation angle
watch(
  () => props.rotationAngle,
  (newAngle) => {
    if (newAngle !== undefined) {
      targetPillarRotation = newAngle
    }
  }
)

watch(
  () => props.zoomProgress,
  (zp) => {
    if (zp !== undefined) {
      if (zp < 0.12) {
        // Unzoom from close (6) out to normal (14)
        const t = zp / 0.12
        targetCameraZ = 6 + 8 * t
      } else if (zp > 0.88) {
        // Zoom dive into cylinder tower from 14 down into 2.5!
        const t = (zp - 0.88) / 0.12
        targetCameraZ = 14 - 11.5 * (t * t)
      } else {
        targetCameraZ = 14
      }
    }
  }
)


// =============================================
// RULE 2.1: Full WebGL Memory Cleanup
// =============================================
function disposeScene() {
  if (animFrameId !== null) {
    cancelAnimationFrame(animFrameId)
    animFrameId = null
  }

  const disposeObject = (obj: THREE.Object3D) => {
    if ((obj as THREE.Mesh).geometry) {
      (obj as THREE.Mesh).geometry.dispose()
    }
    if ((obj as THREE.Mesh).material) {
      const mat = (obj as THREE.Mesh).material
      if (Array.isArray(mat)) {
        mat.forEach((m) => m.dispose())
      } else {
        mat.dispose()
      }
    }
    // Recursively dispose children
    while (obj.children.length > 0) {
      disposeObject(obj.children[0])
      obj.remove(obj.children[0])
    }
  }

  if (pillarGroup) {
    disposeObject(pillarGroup)
    pillarGroup = null
  }

  if (scene) {
    while (scene.children.length > 0) {
      disposeObject(scene.children[0])
      scene.remove(scene.children[0])
    }
    scene = null
  }

  if (renderer) {
    renderer.dispose()
    renderer.forceContextLoss()
    const dom = renderer.domElement
    if (dom && dom.parentNode) {
      dom.parentNode.removeChild(dom)
    }
    renderer = null
  }

  camera = null
  coreCylinder = null
  wireCage = null
  ringTop = null
  ringBottom = null
  ringMiddle = null
  particles = null
  conduitLines = null
}

function initScene() {
  if (!containerRef.value) return

  const width = containerRef.value.clientWidth || window.innerWidth
  const height = containerRef.value.clientHeight || window.innerHeight

  // 1. Scene
  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x030712, 0.035)

  // 2. Camera
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.set(0, 0, 14)

  // 3. Renderer with antialias and alpha
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0)
  containerRef.value.appendChild(renderer.domElement)

  // 4. Lights (Cyan & Electric Blue Specular)
  const ambientLight = new THREE.AmbientLight(0x0a192f, 2.5)
  scene.add(ambientLight)

  const topCyanLight = new THREE.PointLight(0x00f3ff, 4, 25)
  topCyanLight.position.set(0, 6, 4)
  scene.add(topCyanLight)

  const bottomBlueLight = new THREE.PointLight(0x0096ff, 3, 25)
  bottomBlueLight.position.set(0, -6, 4)
  scene.add(bottomBlueLight)

  const rimLight = new THREE.DirectionalLight(0x00f3ff, 1.5)
  rimLight.position.set(-8, 0, -5)
  scene.add(rimLight)

  // 5. Build Robotic Pillar Assembly
  pillarGroup = new THREE.Group()

  // Inner Core Cylinder (Luminous Energy Rod)
  const coreGeo = new THREE.CylinderGeometry(1.2, 1.2, 18, 32, 16, true)
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x00f3ff,
    emissive: 0x00a8e8,
    emissiveIntensity: 0.85,
    roughness: 0.2,
    metalness: 0.8,
    transparent: true,
    opacity: 0.85,
    wireframe: false,
    side: THREE.DoubleSide,
  })
  coreCylinder = new THREE.Mesh(coreGeo, coreMat)
  pillarGroup.add(coreCylinder)

  // Outer Wireframe Mecha Cage (Ribs & Structural Hex Lattice)
  const wireGeo = new THREE.CylinderGeometry(1.5, 1.5, 18.2, 16, 32, true)
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x00f3ff,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  })
  wireCage = new THREE.Mesh(wireGeo, wireMat)
  pillarGroup.add(wireCage)

  // Secondary Ribs / Structural Pillars (4 vertical columns)
  const colGeo = new THREE.BoxGeometry(0.12, 18.5, 0.3)
  const colMat = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    metalness: 0.9,
    roughness: 0.3,
  })
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6
    const col = new THREE.Mesh(colGeo, colMat)
    col.position.set(Math.cos(angle) * 1.6, 0, Math.sin(angle) * 1.6)
    col.rotation.y = -angle
    pillarGroup.add(col)
  }

  // Vertical Laser / Energy Conduits
  const conduitGeo = new THREE.BufferGeometry()
  const conduitPositions: number[] = []
  for (let i = 0; i < 12; i++) {
    const angle = (i * Math.PI * 2) / 12
    const r = 1.38
    const x = Math.cos(angle) * r
    const z = Math.sin(angle) * r
    conduitPositions.push(x, -9, z)
    conduitPositions.push(x, 9, z)
  }
  conduitGeo.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(conduitPositions, 3)
  )
  const conduitMat = new THREE.LineBasicMaterial({
    color: 0x00f3ff,
    transparent: true,
    opacity: 0.7,
  })
  conduitLines = new THREE.LineSegments(conduitGeo, conduitMat)
  pillarGroup.add(conduitLines)

  // Mecha Ring Creator Helper
  function createMechaRing(yPos: number, outerR: number, innerR: number, teeth: number) {
    const ring = new THREE.Group()
    ring.position.y = yPos

    // Main Torus / Ring Collar
    const ringGeo = new THREE.CylinderGeometry(outerR, outerR, 0.45, 32, 1, true)
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.95,
      roughness: 0.25,
      side: THREE.DoubleSide,
    })
    const ringMesh = new THREE.Mesh(ringGeo, ringMat)
    ring.add(ringMesh)

    // Holographic Tick Rings
    const tickGeo = new THREE.RingGeometry(innerR, outerR + 0.3, 32)
    const tickMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
      wireframe: true,
    })
    const tickMesh = new THREE.Mesh(tickGeo, tickMat)
    tickMesh.rotation.x = Math.PI / 2
    ring.add(tickMesh)

    // Gear Notches / Mecha teeth
    const toothGeo = new THREE.BoxGeometry(0.18, 0.45, 0.25)
    const toothMat = new THREE.MeshStandardMaterial({
      color: 0x0096ff,
      emissive: 0x003366,
      metalness: 0.8,
    })
    for (let t = 0; t < teeth; t++) {
      const a = (t * Math.PI * 2) / teeth
      const tooth = new THREE.Mesh(toothGeo, toothMat)
      tooth.position.set(Math.cos(a) * (outerR + 0.1), 0, Math.sin(a) * (outerR + 0.1))
      tooth.rotation.y = -a
      ring.add(tooth)
    }

    return ring
  }

  // Top Mecha Ring Collar
  ringTop = createMechaRing(4.5, 2.2, 1.5, 16)
  pillarGroup.add(ringTop)

  // Middle Mecha Ring Collar
  ringMiddle = createMechaRing(0, 2.4, 1.6, 24)
  pillarGroup.add(ringMiddle)

  // Bottom Mecha Ring Collar
  ringBottom = createMechaRing(-4.5, 2.2, 1.5, 16)
  pillarGroup.add(ringBottom)

  // Floating Cyber Particles / Telemetry Field
  const particleCount = 450
  const pGeo = new THREE.BufferGeometry()
  const pPos: number[] = []
  const pColors: number[] = []

  for (let p = 0; p < particleCount; p++) {
    // Spiral cylinder distribution
    const theta = Math.random() * Math.PI * 2
    const radius = 2.0 + Math.random() * 5.0
    const y = (Math.random() - 0.5) * 18
    pPos.push(Math.cos(theta) * radius, y, Math.sin(theta) * radius)

    // Color gradient between neon cyan and electric blue
    const isCyan = Math.random() > 0.35
    if (isCyan) {
      pColors.push(0.0, 0.95, 1.0)
    } else {
      pColors.push(0.0, 0.58, 1.0)
    }
  }

  pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPos, 3))
  pGeo.setAttribute('color', new THREE.Float32BufferAttribute(pColors, 3))

  const pMat = new THREE.PointsMaterial({
    size: 0.075,
    vertexColors: true,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
  })
  particles = new THREE.Points(pGeo, pMat)
  scene.add(particles)

  scene.add(pillarGroup)

  // Tilt pillar group slightly for dramatic mecha 3D perspective
  pillarGroup.rotation.x = 0.05
  pillarGroup.rotation.z = -0.02

  // Start Render Loop
  let clock = new THREE.Clock()

  function renderLoop() {
    const delta = clock.getDelta()
    const elapsedTime = clock.getElapsedTime()

    // Smooth sync with carousel rotation (inertia lerp)
    currentPillarRotation += (targetPillarRotation - currentPillarRotation) * 0.12
    idleRotation += delta * 0.08

    if (pillarGroup) {
      // Rotation on Y matches carousel exactly
      pillarGroup.rotation.y = currentPillarRotation + idleRotation
    }

    // Counter-rotating mecha collar gears
    if (ringTop) ringTop.rotation.y -= delta * 0.4
    if (ringMiddle) ringMiddle.rotation.y += delta * 0.6
    if (ringBottom) ringBottom.rotation.y -= delta * 0.35

    // Core pulsating energy effect
    if (coreCylinder) {
      const pulse = Math.sin(elapsedTime * 3) * 0.15 + 0.85
      ;(coreCylinder.material as THREE.MeshStandardMaterial).emissiveIntensity = pulse * 0.9
    }

    // Floating particles orbit
    if (particles) {
      particles.rotation.y = currentPillarRotation * 0.4 + elapsedTime * 0.05
    }

    currentCameraZ += (targetCameraZ - currentCameraZ) * 0.08
    if (camera) {
      camera.position.z = currentCameraZ
    }

    if (renderer && scene && camera) {
      renderer.render(scene, camera)
    }

    animFrameId = requestAnimationFrame(renderLoop)
  }

  animFrameId = requestAnimationFrame(renderLoop)
}

function handleResize() {
  if (!containerRef.value || !renderer || !camera) return
  const width = containerRef.value.clientWidth || window.innerWidth
  const height = containerRef.value.clientHeight || window.innerHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

onMounted(() => {
  initScene()
  window.addEventListener('resize', handleResize, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  disposeScene()
})
</script>

<template>
  <div
    ref="containerRef"
    class="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    aria-hidden="true"
  />
</template>

<style scoped>
/* Canvas wrapper */
div {
  will-change: transform;
}
</style>
