<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'

const props = defineProps<{
  scrollProgress?: number
}>()

const containerRef = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let animFrameId: number | null = null

let coreGroup: THREE.Group | null = null
let ringX: THREE.Mesh | null = null
let ringY: THREE.Mesh | null = null
let ringZ: THREE.Mesh | null = null

let mouseX = 0
let mouseY = 0
let targetMouseX = 0
let targetMouseY = 0
let targetCameraZ = 8
let currentCameraZ = 8

watch(
  () => props.scrollProgress,
  (sp) => {
    if (sp !== undefined) {
      const t = Math.min(1, Math.max(0, sp))
      targetCameraZ = 8 - 5.8 * (t * t)
    }
  }
)

function onMouseMove(e: MouseEvent) {
  const w = window.innerWidth
  const h = window.innerHeight
  targetMouseX = (e.clientX - w / 2) / (w / 2)
  targetMouseY = (e.clientY - h / 2) / (h / 2)
}

function initThree() {
  if (!containerRef.value) return
  const width = containerRef.value.clientWidth || 500
  const height = containerRef.value.clientHeight || 500

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.z = 8

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)

  coreGroup = new THREE.Group()

  // 1. Inner Holographic Core (Icosahedron)
  const icoGeo = new THREE.IcosahedronGeometry(1.6, 1)
  const icoMat = new THREE.MeshBasicMaterial({
    color: 0x00f3ff,
    wireframe: true,
    transparent: true,
    opacity: 0.7,
  })
  const innerIcosahedron = new THREE.Mesh(icoGeo, icoMat)
  coreGroup.add(innerIcosahedron)

  // Inner Solid Glow
  const solidGeo = new THREE.IcosahedronGeometry(1.2, 0)
  const solidMat = new THREE.MeshStandardMaterial({
    color: 0x0096ff,
    emissive: 0x00f3ff,
    emissiveIntensity: 0.6,
    roughness: 0.3,
    metalness: 0.9,
  })
  const solidMesh = new THREE.Mesh(solidGeo, solidMat)
  coreGroup.add(solidMesh)

  // 2. Concentric Gyroscope Rings
  const createRing = (radius: number, color: number) => {
    const ringGeo = new THREE.TorusGeometry(radius, 0.03, 16, 64)
    const ringMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.8,
    })
    return new THREE.Mesh(ringGeo, ringMat)
  }

  ringX = createRing(2.3, 0x00f3ff)
  ringY = createRing(2.7, 0x0096ff)
  ringZ = createRing(3.1, 0x00f3ff)

  coreGroup.add(ringX)
  coreGroup.add(ringY)
  coreGroup.add(ringZ)

  // 3. Orbiting Data Sparks
  const particleCount = 120
  const pGeo = new THREE.BufferGeometry()
  const pPos: number[] = []
  for (let i = 0; i < particleCount; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)
    const r = 2.0 + Math.random() * 2.0
    pPos.push(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi))
  }
  pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPos, 3))
  const pMat = new THREE.PointsMaterial({
    color: 0x00f3ff,
    size: 0.05,
    transparent: true,
    opacity: 0.8,
  })
  const particles = new THREE.Points(pGeo, pMat)
  coreGroup.add(particles)

  // Lights
  const pLight = new THREE.PointLight(0x00f3ff, 3, 20)
  pLight.position.set(0, 0, 4)
  scene.add(pLight)

  scene.add(coreGroup)

  function animate() {
    mouseX += (targetMouseX - mouseX) * 0.05
    mouseY += (targetMouseY - mouseY) * 0.05

    if (coreGroup) {
      coreGroup.rotation.y += 0.008
      coreGroup.rotation.x = mouseY * 0.4
      coreGroup.rotation.z = -mouseX * 0.4
    }

    if (ringX) ringX.rotation.x += 0.015
    if (ringY) ringY.rotation.y += 0.012
    if (ringZ) ringZ.rotation.z += 0.018
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
  window.addEventListener('mousemove', onMouseMove, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  disposeScene()
})
</script>

<template>
  <div ref="containerRef" class="w-full h-full min-h-[380px] pointer-events-none" />
</template>
