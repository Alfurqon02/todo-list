<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { buildCyberWorld } from '@/utils/buildCyberWorld'
import {
  CYBER_STOPS,
  FLIGHT_START,
  flightAt,
  smooth,
  clamp01,
  engineeringAssemblyAt,
  cameraDepthAt,
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
let camInitialized = false

const vPosition = new THREE.Vector3()
const vTarget = new THREE.Vector3()
const followPosition = new THREE.Vector3()
const followTarget = new THREE.Vector3()
const nextPosition = new THREE.Vector3()
const nextTarget = new THREE.Vector3()
const currentCamPos = new THREE.Vector3()
const currentCamTarget = new THREE.Vector3()
const followOffset = new THREE.Vector3(0, 2.6, 5.5)

function updateTheme() {
  if (!scene || !renderer) return
  const background = store.isDark ? 0x050a11 : 0xe8eff2
  ;(scene.background as THREE.Color).setHex(background)
  ;(scene.fog as THREE.FogExp2).color.setHex(background)
  renderer.toneMappingExposure = store.isDark ? 1.08 : 0.94
  scene.environmentIntensity = store.isDark ? 0.88 : 1.1
}
watch(() => store.isDark, updateTheme)

function resize() {
  if (!host.value || !renderer || !camera) return
  width = Math.max(1, host.value.clientWidth)
  height = Math.max(1, host.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, width < 800 ? 1.25 : 1.55))
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
  scene.fog = new THREE.FogExp2(0x050a11, 0.022)
  camera = new THREE.PerspectiveCamera(44, 1, 0.08, 85)
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
    stencil: false,
  })
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.08
  host.value.appendChild(renderer.domElement)
  renderer.domElement.addEventListener('webglcontextlost', contextLost)

  const studio = new RoomEnvironment()
  const pmrem = new THREE.PMREMGenerator(renderer)
  environment = pmrem.fromScene(studio, 0.04)
  scene.environment = environment.texture
  scene.environmentIntensity = 0.88
  studio.dispose()
  pmrem.dispose()

  scene.add(new THREE.HemisphereLight(0x95c6e4, 0x10101e, 2.15))
  const key = new THREE.DirectionalLight(0xd4eaff, 3.6)
  key.position.set(4, 9, 6)
  scene.add(key)
  const rim = new THREE.DirectionalLight(0x24a6fa, 2.1)
  rim.position.set(-5, 3, -8)
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

function renderFrame(p: number, _velocity: number, dt: number) {
  if (!world || !camera || !renderer || !scene || document.hidden) return
  if (store.animationsEnabled) elapsed += dt

  const { index, local, travel } = flightAt(p)
  const stop = CYBER_STOPS[index]
  const next = CYBER_STOPS[Math.min(index + 1, CYBER_STOPS.length - 1)]

  // Gentle sine-bell center-lane guidance instead of an abrupt whip-pan
  const follow = Math.sin(Math.PI * travel) * 0.52
  const dwellDrift = index < CYBER_STOPS.length - 1 ? clamp01(local / FLIGHT_START) * (1 - travel) : 0

  const routeZ = THREE.MathUtils.lerp(stop.z, next.z, travel) - dwellDrift * 0.85
  world.signalPath.getPointAt(clamp01(-routeZ / 112), world.signal.position)
  followTarget.copy(world.signal.position).y += 0.15
  followPosition.copy(followTarget).add(followOffset)

  vPosition.fromArray(stop.position).lerp(nextPosition.fromArray(next.position), travel)
  vTarget.fromArray(stop.target).lerp(nextTarget.fromArray(next.target), travel)
  vPosition.z = cameraDepthAt(p, width < 800) - dwellDrift * 0.9
  vPosition.x += Math.sin(dwellDrift * Math.PI * 0.5) * (stop.position[0] > 0 ? -0.35 : 0.35)
  followPosition.z = vPosition.z

  vPosition.lerp(followPosition, follow)
  vTarget.lerp(followTarget, follow)

  const response = 1 - Math.exp(-6 * dt)
  mouseX += (pointerX - mouseX) * response
  mouseY += (pointerY - mouseY) * response
  const settled = 1 - follow
  vPosition.x += mouseX * 0.18 * settled
  vPosition.y -= mouseY * 0.12 * settled

  if (width < 800) {
    vPosition.y += 3.4 * settled
    vTarget.x = vTarget.x * (1 - settled)
    const engineeringFraming = THREE.MathUtils.lerp(
      index === 1 ? -2.65 : 0,
      index + 1 === 1 ? -2.65 : 0,
      travel,
    )
    vTarget.x += engineeringFraming * settled
    vTarget.y += 2.5 * settled
  }

  if (!camInitialized) {
    currentCamPos.copy(vPosition)
    currentCamTarget.copy(vTarget)
    camInitialized = true
  } else {
    const camEase = 1 - Math.exp(-14 * dt)
    currentCamPos.lerp(vPosition, camEase)
    currentCamTarget.lerp(vTarget, camEase)
  }

  camera.position.copy(currentCamPos)
  camera.lookAt(currentCamTarget)

  const lenses = [44, 48, 54, 48, 42, 48, 44]
  const targetFov =
    THREE.MathUtils.lerp(lenses[index], lenses[Math.min(index + 1, 6)], travel) +
    Math.sin(Math.PI * travel) * 2.4 +
    (width < 800 ? 9 : 0)
  if (Math.abs(camera.fov - targetFov) > 0.02) {
    camera.fov += (targetFov - camera.fov) * (1 - Math.exp(-12 * dt))
    camera.updateProjectionMatrix()
  }

  // 00. Processor shell opens into the signal path.
  const opened = smooth((p - 0.14) / 0.52)
  for (const panel of world.shellPanels) {
    const [x, z] = panel.userData.direction
    panel.position.set(x * (1.88 + opened * 2.05), 0.1 + opened * 1.6, z * (1.88 + opened * 0.6))
    panel.rotation.z = -x * opened * 0.68
    panel.rotation.x = z * opened * 0.2
  }
  world.signal.rotation.y = elapsed * 0.28
  const pulse = 1 + Math.sin(elapsed * 2.6) * 0.1
  world.signal.scale.setScalar(pulse)

  // 01. Systems rack lid & 3 blades open in a chained sequence; active system port pulses.
  world.computeBlades.forEach((blade, i) => {
    const reveal = engineeringAssemblyAt(p, i).layer
    blade.position.z = blade.userData.restZ + reveal * 0.28
    blade.position.y = blade.userData.restY + reveal * (0.16 + i * 0.56)
  })
  world.engineeringLid.position.y = 1.23 + engineeringAssemblyAt(p, 0).lid * 2.15
  world.systemPorts.forEach((led, i) => {
    const isSelected = i === store.activeSystemIndex
    led.scale.setScalar(isSelected ? 1.55 : 1.0)
  })

  // 02. Dual inputs and 5 neural layers unfold in a cascade.
  world.inputFrames.forEach((input, i) => {
    input.rotation.y = (i ? -1 : 1) * smooth((p - 1.6) / 0.7) * 0.18
  })
  world.neuralLayers.forEach((layer, i) => {
    const activated = smooth((p - 1.82 - i * 0.055) / 0.16)
    layer.scale.y = 0.15 + activated * 0.85
    layer.rotation.z = (1 - activated) * (i % 2 ? -0.65 : 0.65)
  })
  world.dataPackets.forEach((packet, i) => {
    const t = (elapsed * 0.23 + i / world!.dataPackets.length) % 1
    packet.position.set(
      Math.sin(t * Math.PI * 4 + i) * (1 - t) * 2.6,
      0.6 + Math.sin(t * Math.PI * 3 + i) * 0.7,
      -31 - t * 11,
    )
    packet.scale.setScalar(0.55 + Math.sin(t * Math.PI) * 0.45)
  })

  // 03. Four domain hubs rise sequentially; active domain elevates further.
  world.mapNodes.forEach((node, i) => {
    const baseRise = -0.9 + smooth((p - 2.68 - i * 0.07) / 0.4) * 1.65
    const focusBoost = i === store.activeDomainIndex ? 0.32 : 0
    const targetY = baseRise + focusBoost
    node.position.y += (targetY - node.position.y) * (1 - Math.exp(-8 * dt))
  })

  // 04. Eleven career archive cartridges slide out when selected.
  world.archiveCards.forEach((card, i) => {
    const target =
      card.userData.restX - Math.sign(card.userData.restX) * (i === store.activeNodeIndex ? 0.6 : 0)
    card.position.x += (target - card.position.x) * (1 - Math.exp(-8 * dt))
  })

  // 05. Six skill cassettes assemble into an orbital ring around the bus.
  world.skillRings.forEach((cassette, i) => {
    const assemble = smooth((p - 4.72) / 0.4) * (1 - smooth((p - 5.48) / 0.35))
    const angle = (i / world!.skillRings.length) * Math.PI * 2
    cassette.position.x = THREE.MathUtils.lerp(
      cassette.userData.restX,
      Math.cos(angle) * 3.6,
      assemble,
    )
    cassette.position.z = THREE.MathUtils.lerp(
      cassette.userData.restZ,
      -94 + Math.sin(angle) * 2.3,
      assemble,
    )
    cassette.rotation.z = Math.sin(angle) * assemble * 0.14
    const target =
      0.1 + assemble * (2 + Math.sin(angle) * 1.1) + (i === store.activeSkillIndex ? 0.8 : 0)
    cassette.position.y += (target - cassette.position.y) * (1 - Math.exp(-8 * dt))
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
