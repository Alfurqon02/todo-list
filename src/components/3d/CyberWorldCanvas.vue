<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { buildCyberWorld } from '@/utils/buildCyberWorld'
import {
  CYBER_STOPS,
  splineProgressAt,
  stationProximityAt,
  engineeringAssemblyAt,
  clamp01,
} from '@/utils/cyberStory'
import { cyberJourney, onCyberFrame } from '@/composables/useCyberJourney'
import { useExperienceStore } from '@/stores/experienceStore'

const emit = defineEmits<{ ready: []; unavailable: [] }>()
const host = ref<HTMLDivElement | null>(null)
const store = useExperienceStore()

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let environment: THREE.WebGLRenderTarget | null = null
let world: ReturnType<typeof buildCyberWorld> | null = null
let resizeObserver: ResizeObserver | null = null
let stopFrameListener: (() => void) | null = null

let elapsed = 0
let pointerX = 0
let pointerY = 0
let mouseX = 0
let mouseY = 0
let width = 1
let height = 1
let cameraRoll = 0

// Smooth 3D Catmull-Rom splines for camera position and lookAt target (zero whip-pan!)
const cameraSpline = new THREE.CatmullRomCurve3(
  CYBER_STOPS.map((s) => new THREE.Vector3(s.position[0], s.position[1], s.position[2])),
  false,
  'centripetal',
  0.5,
)
const targetSpline = new THREE.CatmullRomCurve3(
  CYBER_STOPS.map((s) => new THREE.Vector3(s.target[0], s.target[1], s.target[2])),
  false,
  'centripetal',
  0.5,
)

const vPosition = new THREE.Vector3()
const vTarget = new THREE.Vector3()

function updateTheme() {
  if (!scene || !renderer) return
  const background = store.isDark ? 0x050a11 : 0xe8eff2
  ;(scene.background as THREE.Color).setHex(background)
  ;(scene.fog as THREE.FogExp2).color.setHex(background)
  renderer.toneMappingExposure = store.isDark ? 1.12 : 0.96
  scene.environmentIntensity = store.isDark ? 0.92 : 1.1
}
watch(() => store.isDark, updateTheme)

function resize() {
  if (!host.value || !renderer || !camera) return
  width = Math.max(1, host.value.clientWidth)
  height = Math.max(1, host.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, width < 800 ? 1.25 : 1.5))
  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

function pointer(event: PointerEvent) {
  if (event.pointerType === 'touch') return
  pointerX = (event.clientX / width) * 2 - 1
  pointerY = (event.clientY / height) * 2 - 1
}

function resetPointer() {
  pointerX = 0
  pointerY = 0
}

function contextLost(e: Event) {
  e.preventDefault()
  stopFrameListener?.()
  emit('unavailable')
}

function init() {
  if (!host.value) return
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x050a11)
  scene.fog = new THREE.FogExp2(0x050a11, 0.019)
  camera = new THREE.PerspectiveCamera(45, 1, 0.1, 95)
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
    stencil: false,
  })
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.12
  host.value.appendChild(renderer.domElement)
  renderer.domElement.addEventListener('webglcontextlost', contextLost)

  const studio = new RoomEnvironment()
  const pmrem = new THREE.PMREMGenerator(renderer)
  environment = pmrem.fromScene(studio, 0.04)
  scene.environment = environment.texture
  scene.environmentIntensity = 0.92
  studio.dispose()
  pmrem.dispose()

  scene.add(new THREE.HemisphereLight(0x95d4f5, 0x0c1422, 2.2))
  const key = new THREE.DirectionalLight(0xdaf0ff, 3.4)
  key.position.set(5, 10, 7)
  scene.add(key)
  const rim = new THREE.DirectionalLight(0x28b5ff, 2.3)
  rim.position.set(-6, 4, -9)
  scene.add(rim)

  world = buildCyberWorld()
  scene.add(world.group)

  updateTheme()
  resize()
  renderFrame(cyberJourney.position, 0, 0.016)
  stopFrameListener = onCyberFrame((pos, vel, dt) => {
    renderFrame(pos, vel, dt)
  })
  emit('ready')
}

function renderFrame(p: number, velocity: number, dt: number) {
  if (!world || !camera || !renderer || !scene || document.hidden) return
  if (store.animationsEnabled) elapsed += dt

  // 1. Evaluate smooth 3D Catmull-Rom splines (zero dead zones, zero whip-pan)
  const splineT = splineProgressAt(p)
  cameraSpline.getPoint(splineT, vPosition)
  targetSpline.getPoint(splineT, vTarget)

  // Smooth pointer parallax
  const ptrAlpha = 1 - Math.exp(-6 * dt)
  mouseX += (pointerX - mouseX) * ptrAlpha
  mouseY += (pointerY - mouseY) * ptrAlpha
  vPosition.x += mouseX * 0.35
  vPosition.y -= mouseY * 0.22

  // Responsive portrait framing
  if (width < 860) {
    vPosition.x *= 0.45
    vPosition.y += 1.65
    vPosition.z += 3.2
    vTarget.x *= 0.45
    vTarget.y += 0.65
  }

  camera.position.copy(vPosition)
  camera.lookAt(vTarget)

  // Igloo.inc subtle velocity banking & dynamic lens breathing
  const targetRoll = THREE.MathUtils.clamp(-velocity * 0.016 - mouseX * 0.015, -0.055, 0.055)
  cameraRoll += (targetRoll - cameraRoll) * (1 - Math.exp(-10 * dt))
  camera.rotation.z += cameraRoll

  const speedBoost = Math.min(4.5, Math.abs(velocity) * 2.1)
  const targetFov = (width < 860 ? 53 : 45) + speedBoost
  if (Math.abs(camera.fov - targetFov) > 0.02) {
    camera.fov += (targetFov - camera.fov) * (1 - Math.exp(-8 * dt))
    camera.updateProjectionMatrix()
  }

  // 2. Travelling Signal Core & Waveguide Rings
  world.signalPath.getPointAt(clamp01(splineT), world.signal.position)
  world.signal.rotation.y = elapsed * 0.85
  world.signal.rotation.z = elapsed * 0.45
  const pulse = 1 + Math.sin(elapsed * 3.4) * 0.09
  world.signal.scale.setScalar(pulse)

  world.conduitRings.forEach((ring, i) => {
    const ringT = i / 36
    const proximity = Math.max(0, 1 - Math.abs(splineT - ringT) * 9)
    ring.scale.setScalar(1 + proximity * 0.65)
    ring.rotation.z = elapsed * 0.4 + i * 0.25
  })

  // Subtle ambient drift on volumetric particle field
  world.particleField.rotation.z = Math.sin(elapsed * 0.12) * 0.025

  // 3. Station 00 (ORIGIN): Crystalline core & 8 radial shards unfold as you scroll
  const open0 = 1 - stationProximityAt(p, 0, 0.95) * 0.65
  world.originCore.rotation.y = elapsed * 0.35
  world.originCore.rotation.x = Math.sin(elapsed * 0.5) * 0.2
  world.originRings.forEach((ring, i) => {
    ring.rotation.x += dt * (0.28 + i * 0.12) * (i % 2 === 0 ? 1 : -1)
    ring.rotation.y += dt * (0.34 - i * 0.08)
  })
  for (const panel of world.shellPanels) {
    const [dx, dz] = panel.userData.direction
    const radius = 1.45 + open0 * 1.15
    panel.position.set(dx * radius, Math.sin(elapsed * 1.4 + panel.userData.angle) * 0.12, dz * radius)
    panel.rotation.z = -dx * open0 * 0.45
    panel.rotation.x = dz * open0 * 0.35
  }

  // 4. Station 01 (SYSTEMS): 7-Blade Production Rack unfolds & highlights selected system
  const sysOpen = stationProximityAt(p, 1, 1.25)
  world.engineeringLid.position.y = 1.65 + sysOpen * 0.95
  world.engineeringLid.rotation.y = elapsed * 0.22
  world.computeBlades.forEach((blade, i) => {
    const reveal = engineeringAssemblyAt(p, i % 3).layer
    const isSelected = i === store.activeSystemIndex
    const targetX = isSelected ? 0.52 : 0
    const targetZ = blade.userData.restZ + reveal * 0.24 + (isSelected ? 0.28 : 0)
    const targetY = blade.userData.restY + (i - 3) * reveal * 0.09
    blade.position.x += (targetX - blade.position.x) * (1 - Math.exp(-10 * dt))
    blade.position.y += (targetY - blade.position.y) * (1 - Math.exp(-10 * dt))
    blade.position.z += (targetZ - blade.position.z) * (1 - Math.exp(-10 * dt))
  })
  world.systemPorts.forEach((led, i) => {
    const isSelected = i === store.activeSystemIndex
    led.material = isSelected
      ? i % 2 === 0
        ? world!.cyanEmissive
        : world!.amberEmissive
      : world!.dimPortMat
    led.scale.y = isSelected ? 1.35 : 1.0
  })

  // 5. Station 02 (INTELLIGENCE): Dual X-Ray Scan & 5-Stage Neural Optical Prism
  const resOpen = stationProximityAt(p, 2, 1.25)
  world.inputFrames.forEach((frameGrp, i) => {
    frameGrp.rotation.y = (i === 0 ? 1 : -1) * (0.14 + resOpen * 0.16)
    const scanBar = frameGrp.getObjectByName('scanBar')
    if (scanBar) {
      scanBar.position.y = Math.sin(elapsed * 2.2 + i * 1.4) * 0.72
    }
  })
  world.neuralLayers.forEach((layer, i) => {
    const scale = 0.55 + resOpen * 0.45
    layer.scale.setScalar(scale)
    layer.rotation.z = elapsed * (0.25 + i * 0.06) * (i % 2 === 0 ? 1 : -1)
  })
  world.dataPackets.forEach((packet, i) => {
    const t = (elapsed * 0.26 + i / world!.dataPackets.length) % 1
    packet.position.set(
      2.4 + Math.cos(t * Math.PI * 4 + i) * (1 - t * 0.65) * 1.35,
      1.15 + Math.sin(t * Math.PI * 3 + i) * 0.55,
      -33.5 - t * 5.2,
    )
    packet.scale.setScalar(0.65 + Math.sin(t * Math.PI) * 0.55)
  })

  // 6. Station 03 (DOMAINS): 4-Arena Orbital Nexus
  const domOpen = stationProximityAt(p, 3, 1.25)
  world.nexusCore.rotation.y = elapsed * 0.45
  world.nexusCore.rotation.x = elapsed * 0.25
  world.mapNodes.forEach((node, i) => {
    const isSelected = i === store.activeDomainIndex
    const radialScale = 0.78 + domOpen * 0.28 + (isSelected ? 0.08 : 0)
    const targetX = node.userData.baseX * radialScale
    const targetZ = node.userData.baseZ * radialScale
    const targetY = -0.35 + domOpen * 0.55 + (isSelected ? 0.38 : 0) + Math.sin(elapsed * 1.8 + i) * 0.06
    node.position.x += (targetX - node.position.x) * (1 - Math.exp(-9 * dt))
    node.position.y += (targetY - node.position.y) * (1 - Math.exp(-9 * dt))
    node.position.z += (targetZ - node.position.z) * (1 - Math.exp(-9 * dt))
  })

  // 7. Station 04 (EXPERIENCE): 11-Node Helical Archive Vault
  const expOpen = stationProximityAt(p, 4, 1.3)
  world.archiveCards.forEach((card, i) => {
    const isSelected = i === store.activeNodeIndex
    const targetX = card.userData.restX * (0.75 + expOpen * 0.25) - (isSelected ? 0.65 : 0)
    const targetY = card.userData.restY + (isSelected ? 0.12 : 0)
    card.position.x += (targetX - card.position.x) * (1 - Math.exp(-9 * dt))
    card.position.y += (targetY - card.position.y) * (1 - Math.exp(-9 * dt))
    card.scale.setScalar(isSelected ? 1.1 : 0.96)
  })

  // 8. Station 05 (TOOLKIT): 6-Cluster Gyroscopic Matrix
  const skillOpen = stationProximityAt(p, 5, 1.25)
  world.matrixCore.rotation.y = -elapsed * 0.38
  world.matrixCore.rotation.z = elapsed * 0.24
  world.skillRings.forEach((cassette, i) => {
    const isSelected = i === store.activeSkillIndex
    const angle = cassette.userData.angle + elapsed * 0.14
    const radius = 1.65 + skillOpen * 0.85 + (isSelected ? 0.32 : 0)
    const targetX = Math.cos(angle) * radius
    const targetY = Math.sin(angle) * (1.1 + skillOpen * 0.45) + (isSelected ? 0.25 : 0)
    const targetZ = Math.sin(angle * 2) * 0.55 + (isSelected ? 0.4 : 0)
    cassette.position.x += (targetX - cassette.position.x) * (1 - Math.exp(-9 * dt))
    cassette.position.y += (targetY - cassette.position.y) * (1 - Math.exp(-9 * dt))
    cassette.position.z += (targetZ - cassette.position.z) * (1 - Math.exp(-9 * dt))
  })

  // 9. Station 06 (CHANNEL): Direct Uplink Beacon
  world.beaconCrystal.rotation.y = elapsed * 0.5
  world.beaconCrystal.rotation.z = Math.sin(elapsed * 0.8) * 0.22
  world.beaconRings.forEach((ring, i) => {
    ring.rotation.x = elapsed * (0.32 + i * 0.14) * (i % 2 === 0 ? 1 : -1)
    ring.rotation.y = elapsed * (0.24 + i * 0.1)
  })

  renderer.render(scene, camera)
}

onMounted(() => {
  try {
    init()
  } catch (error) {
    console.warn('Interactive world unavailable.', error)
    emit('unavailable')
  }
  if (host.value) {
    resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(host.value)
  }
  window.addEventListener('resize', resize, { passive: true })
  window.addEventListener('pointermove', pointer, { passive: true })
  document.addEventListener('pointerleave', resetPointer)
})

onBeforeUnmount(() => {
  stopFrameListener?.()
  resizeObserver?.disconnect()
  window.removeEventListener('resize', resize)
  window.removeEventListener('pointermove', pointer)
  document.removeEventListener('pointerleave', resetPointer)
  renderer?.domElement.removeEventListener('webglcontextlost', contextLost)
  world?.dispose()
  environment?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()
})
</script>

<template>
  <div ref="host" class="cyber-world-canvas" aria-hidden="true" />
</template>
