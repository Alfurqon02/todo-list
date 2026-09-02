<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const containerRef = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let animFrameId: number | null = null

let starGeo: THREE.BufferGeometry | null = null
let stars: THREE.Points | null = null
let positions: Float32Array | null = null
let velocities: Float32Array | null = null

const starCount = 350
let scrollVelocity = 0
let lastScrollY = 0

function onScroll() {
  const currentScrollY = window.scrollY
  const delta = Math.abs(currentScrollY - lastScrollY)
  scrollVelocity = Math.min(delta * 0.08, 12)
  lastScrollY = currentScrollY
}

function initThree() {
  if (!containerRef.value) return
  const width = window.innerWidth
  const height = window.innerHeight

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000)
  camera.position.z = 1

  renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  containerRef.value.appendChild(renderer.domElement)

  // Cyber Warp Tunnel Stars
  starGeo = new THREE.BufferGeometry()
  positions = new Float32Array(starCount * 3)
  velocities = new Float32Array(starCount)

  for (let i = 0; i < starCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 800
    positions[i * 3 + 1] = (Math.random() - 0.5) * 800
    positions[i * 3 + 2] = Math.random() * 800 - 400
    velocities[i] = 0.5 + Math.random() * 1.5
  }

  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const starMat = new THREE.PointsMaterial({
    color: 0x00f3ff,
    size: 2.2,
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending,
  })

  stars = new THREE.Points(starGeo, starMat)
  scene.add(stars)

  function animate() {
    scrollVelocity *= 0.94 // Smooth decay

    if (positions && starGeo) {
      const baseSpeed = 0.4 + scrollVelocity * 1.8
      for (let i = 0; i < starCount; i++) {
        positions[i * 3 + 2] += velocities![i] * baseSpeed

        // Wrap around when past camera
        if (positions[i * 3 + 2] > 200) {
          positions[i * 3 + 2] = -600
          positions[i * 3] = (Math.random() - 0.5) * 800
          positions[i * 3 + 1] = (Math.random() - 0.5) * 800
        }
      }
      starGeo.attributes.position.needsUpdate = true
    }

    if (stars) {
      stars.rotation.z += 0.0008
      const mat = stars.material as THREE.PointsMaterial
      mat.opacity = 0.25 + Math.min(scrollVelocity * 0.1, 0.6)
      mat.size = 2.0 + Math.min(scrollVelocity * 0.4, 3.5)
    }

    if (renderer && scene && camera) {
      renderer.render(scene, camera)
    }

    animFrameId = requestAnimationFrame(animate)
  }

  animFrameId = requestAnimationFrame(animate)
}

function onResize() {
  if (!renderer || !camera) return
  const w = window.innerWidth
  const h = window.innerHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
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
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  disposeScene()
})
</script>

<template>
  <div ref="containerRef" class="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
</template>
