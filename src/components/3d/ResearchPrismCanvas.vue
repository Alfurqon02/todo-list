<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'

const props = defineProps<{
  progress?: number
}>()

const containerRef = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let animFrameId: number | null = null

let prismGroup: THREE.Group | null = null
let cubeMesh: THREE.Mesh | null = null
let wireGrid: THREE.LineSegments | null = null
let particles: THREE.Points | null = null

let targetRotation = 0
let currentRotation = 0
let targetCameraZ = 6
let currentCameraZ = 6

watch(
  () => props.progress,
  (newProgress) => {
    if (newProgress !== undefined) {
      targetRotation = newProgress * Math.PI

      if (newProgress < 0.15) {
        // Unzoom from close (2.5) to normal (6)
        const t = newProgress / 0.15
        targetCameraZ = 2.5 + 3.5 * t
      } else if (newProgress > 0.85) {
        // Zoom dive into core from 6 down to 1.5!
        const t = (newProgress - 0.85) / 0.15
        targetCameraZ = 6 - 4.5 * (t * t)
      } else {
        targetCameraZ = 6
      }
    }
  }
)

function initThree() {
  if (!containerRef.value) return
  const width = containerRef.value.clientWidth || 400
  const height = containerRef.value.clientHeight || 400

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.z = 6

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)

  prismGroup = new THREE.Group()

  // 1. Central 3D Blueprint Octahedron
  const geo = new THREE.OctahedronGeometry(1.8, 1)
  const mat = new THREE.MeshStandardMaterial({
    color: 0x00f3ff,
    emissive: 0x003366,
    roughness: 0.2,
    metalness: 0.9,
    wireframe: true,
  })
  cubeMesh = new THREE.Mesh(geo, mat)
  prismGroup.add(cubeMesh)

  // Inner Solid Core
  const innerGeo = new THREE.OctahedronGeometry(1.2, 0)
  const innerMat = new THREE.MeshStandardMaterial({
    color: 0x0096ff,
    emissive: 0x00a8e8,
    emissiveIntensity: 0.5,
  })
  const innerMesh = new THREE.Mesh(innerGeo, innerMat)
  prismGroup.add(innerMesh)

  // 2. Blueprint Coordinate Grid
  const gridPositions: number[] = []
  for (let i = -3; i <= 3; i++) {
    gridPositions.push(i, -2, -3, i, -2, 3)
    gridPositions.push(-3, -2, i, 3, -2, i)
  }
  const gridGeo = new THREE.BufferGeometry()
  gridGeo.setAttribute('position', new THREE.Float32BufferAttribute(gridPositions, 3))
  const gridMat = new THREE.LineBasicMaterial({
    color: 0x00f3ff,
    transparent: true,
    opacity: 0.25,
  })
  wireGrid = new THREE.LineSegments(gridGeo, gridMat)
  prismGroup.add(wireGrid)

  // 3. Orbiting Data Sparks
  const pCount = 80
  const pPos: number[] = []
  for (let p = 0; p < pCount; p++) {
    const theta = Math.random() * Math.PI * 2
    const y = (Math.random() - 0.5) * 4
    const r = 2.2 + Math.random() * 1.0
    pPos.push(Math.cos(theta) * r, y, Math.sin(theta) * r)
  }
  const pGeo = new THREE.BufferGeometry()
  pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPos, 3))
  const pMat = new THREE.PointsMaterial({
    color: 0x00f3ff,
    size: 0.04,
    transparent: true,
    opacity: 0.75,
  })
  particles = new THREE.Points(pGeo, pMat)
  prismGroup.add(particles)

  // Lights
  const light = new THREE.PointLight(0x00f3ff, 3, 20)
  light.position.set(0, 0, 4)
  scene.add(light)

  scene.add(prismGroup)

  let clock = new THREE.Clock()

  function animate() {
    const delta = clock.getDelta()
    currentRotation += (targetRotation - currentRotation) * 0.08

    if (prismGroup) {
      prismGroup.rotation.y = currentRotation
      prismGroup.rotation.x = Math.sin(clock.getElapsedTime() * 0.4) * 0.15 + 0.1
    }

    if (cubeMesh) {
      cubeMesh.rotation.z += delta * 0.1
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
  <div ref="containerRef" class="w-full h-full min-h-[320px] pointer-events-none" />
</template>
