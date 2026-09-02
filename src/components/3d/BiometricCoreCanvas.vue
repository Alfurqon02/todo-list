<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const containerRef = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let animFrameId: number | null = null

let ringGroup: THREE.Group | null = null
let rings: THREE.Mesh[] = []
let particles: THREE.Points | null = null

function initThree() {
  if (!containerRef.value) return
  const width = containerRef.value.clientWidth || 300
  const height = containerRef.value.clientHeight || 300

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.z = 6

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)

  ringGroup = new THREE.Group()

  // Biometric Rings
  const createRing = (radius: number, color: number) => {
    const geo = new THREE.TorusGeometry(radius, 0.02, 16, 64)
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.65 })
    return new THREE.Mesh(geo, mat)
  }

  const r1 = createRing(1.8, 0x00f3ff)
  const r2 = createRing(1.4, 0x0096ff)
  const r3 = createRing(1.0, 0x00f3ff)

  r1.rotation.x = Math.PI / 4
  r2.rotation.y = Math.PI / 3
  r3.rotation.z = Math.PI / 6

  rings = [r1, r2, r3]
  rings.forEach((r) => ringGroup?.add(r))

  // Center Core
  const coreGeo = new THREE.SphereGeometry(0.5, 16, 16)
  const coreMat = new THREE.MeshBasicMaterial({
    color: 0x00f3ff,
    wireframe: true,
    transparent: true,
    opacity: 0.5,
  })
  const core = new THREE.Mesh(coreGeo, coreMat)
  ringGroup.add(core)

  // Floating sparks
  const pCount = 50
  const pPos: number[] = []
  for (let i = 0; i < pCount; i++) {
    const t = Math.random() * Math.PI * 2
    const p = Math.acos(Math.random() * 2 - 1)
    const r = 1.2 + Math.random() * 0.8
    pPos.push(r * Math.sin(p) * Math.cos(t), r * Math.sin(p) * Math.sin(t), r * Math.cos(p))
  }
  const pGeo = new THREE.BufferGeometry()
  pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pPos, 3))
  const pMat = new THREE.PointsMaterial({ color: 0x00f3ff, size: 0.04, transparent: true, opacity: 0.8 })
  particles = new THREE.Points(pGeo, pMat)
  ringGroup.add(particles)

  scene.add(ringGroup)

  let clock = new THREE.Clock()

  function animate() {
    const delta = clock.getDelta()
    if (ringGroup) {
      ringGroup.rotation.y += delta * 0.4
      ringGroup.rotation.x += delta * 0.2
    }
    if (rings[0]) rings[0].rotation.z += delta * 0.5
    if (rings[1]) rings[1].rotation.x += delta * 0.4
    if (rings[2]) rings[2].rotation.y += delta * 0.6

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
  <div ref="containerRef" class="w-full h-full min-h-[220px] pointer-events-none" />
</template>
