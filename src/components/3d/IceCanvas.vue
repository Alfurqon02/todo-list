<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useExperienceStore } from '@/stores/experienceStore'
import * as THREE from 'three'

const store = useExperienceStore()
const containerRef = ref<HTMLDivElement | null>(null)

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let animationId: number | null = null
let crystals: THREE.Mesh[] = []
let particles: THREE.Points | null = null
let orbitRing: THREE.Line | null = null
let glowSpheres: THREE.Mesh[] = []
let mouseX = 0
let mouseY = 0
let scrollY = 0
let targetScrollY = 0

// =============================================
// RULE 2.1: Full WebGL cleanup on unmount/mode switch
// =============================================
function disposeScene() {
  if (animationId !== null) {
    cancelAnimationFrame(animationId)
    animationId = null
  }

  const disposeMesh = (mesh: THREE.Mesh | THREE.Line | THREE.Points) => {
    mesh.geometry.dispose()
    if (Array.isArray(mesh.material)) {
      mesh.material.forEach((m) => m.dispose())
    } else {
      (mesh.material as THREE.Material).dispose()
    }
    // Also dispose children
    mesh.children.forEach((child) => {
      if ((child as any).geometry) {
        (child as any).geometry.dispose()
      }
      if ((child as any).material) {
        const mat = (child as any).material
        if (Array.isArray(mat)) mat.forEach((m: THREE.Material) => m.dispose())
        else mat.dispose()
      }
    })
  }

  crystals.forEach(disposeMesh)
  crystals = []

  glowSpheres.forEach(disposeMesh)
  glowSpheres = []

  if (particles) { disposeMesh(particles); particles = null }
  if (orbitRing) { disposeMesh(orbitRing); orbitRing = null }

  if (renderer) {
    renderer.dispose()
    renderer.forceContextLoss()
    if (renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
    renderer = null
  }

  scene = null
  camera = null
  store.stopFpsMonitor()
}

function initScene() {
  if (!containerRef.value) return

  const width = window.innerWidth
  const height = window.innerHeight

  // Scene
  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(store.isDark ? 0x070f1e : 0xeaf2f8, 0.025)

  // Camera
  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 200)
  camera.position.set(0, 0, 12)

  // Renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.4
  containerRef.value.appendChild(renderer.domElement)

  // Lights — richer multi-point setup
  const ambientLight = new THREE.AmbientLight(0x90e0ef, 0.4)
  scene.add(ambientLight)

  const pointLight1 = new THREE.PointLight(0x00d2ff, 3, 30)
  pointLight1.position.set(8, 6, 8)
  scene.add(pointLight1)

  const pointLight2 = new THREE.PointLight(0x90e0ef, 2, 25)
  pointLight2.position.set(-8, -4, 5)
  scene.add(pointLight2)

  const pointLight3 = new THREE.PointLight(0x0077b6, 1.5, 30)
  pointLight3.position.set(0, 5, -8)
  scene.add(pointLight3)

  // Directional for specular highlights
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.3)
  dirLight.position.set(3, 8, 5)
  scene.add(dirLight)

  createCrystals()
  createParticles()
  createOrbitRing()
  createGlowSpheres()

  animate()
  store.startFpsMonitor()
}

function createCrystals() {
  if (!scene) return

  const crystalConfigs = [
    // Main hero crystal (large, center)
    { size: 2.2, pos: [0, 0.5, 0], rotSpeed: 0.002, detail: 1, floatAmp: 0.4 },
    // Secondary crystals — orbit around
    { size: 0.9, pos: [-4, 2, -3], rotSpeed: 0.004, detail: 0, floatAmp: 0.6 },
    { size: 0.7, pos: [4.5, -1, -2], rotSpeed: 0.005, detail: 0, floatAmp: 0.5 },
    { size: 0.55, pos: [-3, -2.5, -4], rotSpeed: 0.006, detail: 0, floatAmp: 0.7 },
    { size: 0.8, pos: [3, 3, -3], rotSpeed: 0.003, detail: 0, floatAmp: 0.45 },
    { size: 0.45, pos: [5.5, 1, -4], rotSpeed: 0.007, detail: 0, floatAmp: 0.8 },
    { size: 0.35, pos: [-5, 0, -5], rotSpeed: 0.005, detail: 0, floatAmp: 0.55 },
    // Deep background crystals
    { size: 0.25, pos: [-7, 3, -8], rotSpeed: 0.008, detail: 0, floatAmp: 0.3 },
    { size: 0.3, pos: [7, -3, -7], rotSpeed: 0.006, detail: 0, floatAmp: 0.35 },
    { size: 0.2, pos: [0, -5, -6], rotSpeed: 0.009, detail: 0, floatAmp: 0.4 },
  ]

  crystalConfigs.forEach((config, idx) => {
    const geometry = new THREE.IcosahedronGeometry(config.size, config.detail)

    const material = new THREE.MeshPhysicalMaterial({
      color: idx === 0 ? 0xa0e7e5 : 0x90e0ef,
      metalness: 0.0,
      roughness: 0.02,
      transmission: 0.92,
      thickness: config.size * 0.8,
      ior: 1.31,
      envMapIntensity: 1.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transparent: true,
      opacity: idx === 0 ? 0.9 : 0.8,
      side: THREE.DoubleSide,
      // Emissive for inner glow
      emissive: 0x00d2ff,
      emissiveIntensity: idx === 0 ? 0.05 : 0.02,
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(config.pos[0], config.pos[1], config.pos[2])
    mesh.userData = {
      rotSpeed: config.rotSpeed,
      originalPos: [...config.pos],
      floatOffset: Math.random() * Math.PI * 2,
      floatAmp: config.floatAmp,
      isMain: idx === 0,
      orbitAngle: (idx / crystalConfigs.length) * Math.PI * 2,
      orbitSpeed: 0.0003 + Math.random() * 0.0003,
      orbitRadius: idx === 0 ? 0 : Math.sqrt(config.pos[0] ** 2 + config.pos[2] ** 2),
    }

    // Wireframe overlay — more visible on main
    const wireGeometry = new THREE.IcosahedronGeometry(config.size * 1.003, config.detail)
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d2ff,
      wireframe: true,
      transparent: true,
      opacity: idx === 0 ? 0.18 : 0.1,
    })
    mesh.add(new THREE.Mesh(wireGeometry, wireMaterial))

    // Inner glow sphere for main crystal
    if (idx === 0) {
      const glowGeo = new THREE.SphereGeometry(config.size * 0.4, 16, 16)
      const glowMat = new THREE.MeshBasicMaterial({
        color: 0x00d2ff,
        transparent: true,
        opacity: 0.08,
      })
      mesh.add(new THREE.Mesh(glowGeo, glowMat))
    }

    scene!.add(mesh)
    crystals.push(mesh)
  })
}

function createParticles() {
  if (!scene) return

  const count = 800
  const positions = new Float32Array(count * 3)
  const velocities = new Float32Array(count * 3) // For dynamic movement

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 40
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30
    velocities[i * 3] = (Math.random() - 0.5) * 0.002
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.002
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.userData = { velocities }

  const material = new THREE.PointsMaterial({
    color: store.isDark ? 0xa0e7e5 : 0x0077b6,
    size: 0.05,
    transparent: true,
    opacity: 0.7,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
  })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)
}

function createOrbitRing() {
  if (!scene) return

  const ringGeometry = new THREE.RingGeometry(5, 5.05, 128)
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x00d2ff,
    transparent: true,
    opacity: 0.06,
    side: THREE.DoubleSide,
  })
  orbitRing = new THREE.Mesh(ringGeometry, ringMaterial) as any
  orbitRing!.rotation.x = Math.PI * 0.4
  scene.add(orbitRing as any)
}

function createGlowSpheres() {
  if (!scene) return

  // Ambient floating glow orbs
  const glowConfigs = [
    { pos: [-6, 4, -6], size: 0.8, color: 0x00d2ff, opacity: 0.04 },
    { pos: [6, -3, -5], size: 1.2, color: 0x90e0ef, opacity: 0.03 },
    { pos: [0, 6, -8], size: 0.6, color: 0x00b4d8, opacity: 0.05 },
    { pos: [-8, -2, -3], size: 1.0, color: 0xa0e7e5, opacity: 0.03 },
  ]

  glowConfigs.forEach((config) => {
    const geo = new THREE.SphereGeometry(config.size, 16, 16)
    const mat = new THREE.MeshBasicMaterial({
      color: config.color,
      transparent: true,
      opacity: config.opacity,
      blending: THREE.AdditiveBlending,
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.position.set(config.pos[0], config.pos[1], config.pos[2])
    mesh.userData.floatOffset = Math.random() * Math.PI * 2
    scene!.add(mesh)
    glowSpheres.push(mesh)
  })
}

function animate() {
  if (!renderer || !scene || !camera) return

  animationId = requestAnimationFrame(animate)

  const time = Date.now() * 0.001

  // Smooth scroll interpolation
  scrollY += (targetScrollY - scrollY) * 0.05
  const scrollNorm = scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)

  // ========== CRYSTAL ANIMATIONS ==========
  crystals.forEach((crystal, idx) => {
    const ud = crystal.userData

    // Base rotation — accelerates slightly on scroll
    const scrollBoost = 1 + scrollNorm * 2
    crystal.rotation.x += ud.rotSpeed * scrollBoost
    crystal.rotation.y += ud.rotSpeed * 0.7 * scrollBoost

    // Float animation
    crystal.position.y =
      ud.originalPos[1] +
      Math.sin(time * 0.8 + ud.floatOffset) * ud.floatAmp

    // Orbit secondary crystals around center on scroll
    if (!ud.isMain && ud.orbitRadius > 0) {
      ud.orbitAngle += ud.orbitSpeed + scrollNorm * 0.002
      const orbitInfluence = Math.min(scrollNorm * 3, 1) // 0 to 1 as user scrolls
      const newX = ud.originalPos[0] + Math.sin(ud.orbitAngle) * orbitInfluence * 2
      const newZ = ud.originalPos[2] + Math.cos(ud.orbitAngle) * orbitInfluence * 1.5
      crystal.position.x += (newX - crystal.position.x) * 0.02
      crystal.position.z += (newZ - crystal.position.z) * 0.02
    }

    // Main crystal — subtle scale pulse based on scroll
    if (ud.isMain) {
      const scaleBase = 1 + Math.sin(time * 0.5) * 0.03
      const scrollScale = 1 - scrollNorm * 0.15 // Shrinks slightly as you scroll down
      const s = scaleBase * scrollScale
      crystal.scale.set(s, s, s)

      // Emissive pulse
      const mat = crystal.material as THREE.MeshPhysicalMaterial
      mat.emissiveIntensity = 0.03 + Math.sin(time * 1.5) * 0.02 + scrollNorm * 0.04
    }

    // Mouse proximity reaction — crystals lean toward cursor
    if (!ud.isMain) {
      crystal.rotation.z += mouseX * 0.001
    }
  })

  // ========== ORBIT RING ==========
  if (orbitRing) {
    (orbitRing as any).rotation.z += 0.001
    // Expand ring as user scrolls
    const ringScale = 1 + scrollNorm * 0.5
    orbitRing.scale.set(ringScale, ringScale, 1)
    ;(orbitRing.material as THREE.MeshBasicMaterial).opacity = 0.06 + scrollNorm * 0.04
  }

  // ========== PARTICLE DYNAMICS ==========
  if (particles) {
    const posArr = particles.geometry.getAttribute('position') as THREE.BufferAttribute
    const velocities = particles.geometry.userData.velocities as Float32Array

    for (let i = 0; i < posArr.count; i++) {
      // Apply velocity
      posArr.array[i * 3] += velocities[i * 3]
      posArr.array[i * 3 + 1] += velocities[i * 3 + 1]
      posArr.array[i * 3 + 2] += velocities[i * 3 + 2]

      // Subtle mouse repulsion
      const dx = posArr.array[i * 3] - mouseX * 5
      const dy = posArr.array[i * 3 + 1] - (-mouseY * 5)
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 3) {
        const force = (3 - dist) * 0.0005
        posArr.array[i * 3] += dx * force
        posArr.array[i * 3 + 1] += dy * force
      }

      // Boundary wrap
      if (Math.abs(posArr.array[i * 3]) > 20) velocities[i * 3] *= -1
      if (Math.abs(posArr.array[i * 3 + 1]) > 15) velocities[i * 3 + 1] *= -1
      if (Math.abs(posArr.array[i * 3 + 2]) > 15) velocities[i * 3 + 2] *= -1
    }
    posArr.needsUpdate = true

    // Global particle rotation
    particles.rotation.y += 0.0002
    particles.rotation.x += 0.00005

    // Scroll-reactive particle spread
    const particleScale = 1 + scrollNorm * 0.3
    particles.scale.set(particleScale, particleScale, particleScale)
  }

  // ========== GLOW SPHERES ==========
  glowSpheres.forEach((glow) => {
    glow.position.y += Math.sin(time * 0.3 + glow.userData.floatOffset) * 0.003
    const mat = glow.material as THREE.MeshBasicMaterial
    mat.opacity = 0.03 + Math.sin(time * 0.5 + glow.userData.floatOffset) * 0.02
  })

  // ========== CAMERA 3D WAYPOINTS ==========
  // Interpolate camera position and target across 5 distinct 3D waypoints based on scrollNorm
  let camX = 0
  let camY = 0
  let camZ = 10
  let lookY = 0
  let lookX = 0

  if (scrollNorm < 0.25) {
    const t = scrollNorm / 0.25
    camX = THREE.MathUtils.lerp(0, -6, t)
    camY = THREE.MathUtils.lerp(0, 2.5, t)
    camZ = THREE.MathUtils.lerp(10, 8, t)
    lookX = THREE.MathUtils.lerp(0, -2, t)
    lookY = THREE.MathUtils.lerp(0, 1, t)
  } else if (scrollNorm < 0.6) {
    const t = (scrollNorm - 0.25) / 0.35
    camX = THREE.MathUtils.lerp(-6, 7, t)
    camY = THREE.MathUtils.lerp(2.5, -2, t)
    camZ = THREE.MathUtils.lerp(8, 6.5, t)
    lookX = THREE.MathUtils.lerp(-2, 3, t)
    lookY = THREE.MathUtils.lerp(1, -1, t)
  } else if (scrollNorm < 0.85) {
    const t = (scrollNorm - 0.6) / 0.25
    camX = THREE.MathUtils.lerp(7, 0, t)
    camY = THREE.MathUtils.lerp(-2, 7, t)
    camZ = THREE.MathUtils.lerp(6.5, 7.5, t)
    lookX = THREE.MathUtils.lerp(3, 0, t)
    lookY = THREE.MathUtils.lerp(-1, 0, t)
  } else {
    const t = (scrollNorm - 0.85) / 0.15
    camX = THREE.MathUtils.lerp(0, 0, t)
    camY = THREE.MathUtils.lerp(7, -0.5, t)
    camZ = THREE.MathUtils.lerp(7.5, 4.8, t)
    lookX = 0
    lookY = THREE.MathUtils.lerp(0, -0.5, t)
  }

  // Add mouse parallax
  camX += mouseX * 1.5
  camY += -mouseY * 1.0

  camera.position.x += (camX - camera.position.x) * 0.04
  camera.position.y += (camY - camera.position.y) * 0.04
  camera.position.z += (camZ - camera.position.z) * 0.04
  camera.lookAt(lookX, lookY, 0)

  // Update fog based on theme
  if (scene.fog) {
    const fogColor = store.isDark ? 0x070f1e : 0xeaf2f8
    ;(scene.fog as THREE.FogExp2).color.setHex(fogColor)
  }

  renderer.render(scene, camera)
}

function handleMouseMove(e: MouseEvent) {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1
  mouseY = (e.clientY / window.innerHeight) * 2 - 1
}

function handleScroll() {
  targetScrollY = window.scrollY
  store.updateScrollProgress()
}

function handleResize() {
  if (!camera || !renderer) return
  const width = window.innerWidth
  const height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

onMounted(() => {
  if (store.mode === 'immersive') {
    initScene()
  }
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  disposeScene()
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
})

watch(
  () => store.mode,
  (newMode) => {
    if (newMode === 'immersive') {
      setTimeout(() => initScene(), 100)
    } else {
      disposeScene()
    }
  }
)
</script>

<template>
  <div
    v-if="store.mode === 'immersive'"
    ref="containerRef"
    class="ice-canvas-container"
    aria-hidden="true"
  />
</template>
