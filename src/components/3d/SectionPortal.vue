<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type GeoType = 'gyro' | 'bio' | 'cylinder' | 'sphere' | 'prism'

const props = defineProps<{
  from: GeoType
  to: GeoType
}>()

const portalRef = ref<HTMLElement | null>(null)
const canvasRef = ref<HTMLDivElement | null>(null)
const portalProgress = ref(0)

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let animFrameId: number | null = null
let scrollTriggerInstance: ScrollTrigger | null = null

let exitGroup: THREE.Group | null = null
let entryGroup: THREE.Group | null = null

// ─── Geometry Factories ───────────────────────────────────────────────

function createGeometry(type: GeoType): THREE.Group {
  const group = new THREE.Group()
  const NEON = 0x00f3ff
  const ELEC = 0x0096ff

  switch (type) {
    case 'gyro': {
      const ico = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.2, 1),
        new THREE.MeshBasicMaterial({ color: NEON, wireframe: true, transparent: true, opacity: 0.6 })
      )
      group.add(ico)

      const solidCore = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.8, 0),
        new THREE.MeshBasicMaterial({ color: ELEC, transparent: true, opacity: 0.25 })
      )
      group.add(solidCore)

      const ringData = [
        { r: 1.8, rot: [Math.PI / 6, 0, 0] },
        { r: 2.2, rot: [0, Math.PI / 4, 0] },
        { r: 2.6, rot: [0, 0, Math.PI / 3] },
      ]
      ringData.forEach((d, i) => {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(d.r, 0.025, 16, 64),
          new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? NEON : ELEC, transparent: true, opacity: 0.7 })
        )
        ring.rotation.set(d.rot[0], d.rot[1], d.rot[2])
        group.add(ring)
      })
      break
    }
    case 'bio': {
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 16, 16),
        new THREE.MeshBasicMaterial({ color: NEON, wireframe: true, transparent: true, opacity: 0.5 })
      )
      group.add(sphere)

      const ringData = [
        { r: 1.4, rot: [Math.PI / 4, 0, 0] },
        { r: 1.0, rot: [0, Math.PI / 3, 0] },
        { r: 1.8, rot: [Math.PI / 5, 0, Math.PI / 4] },
      ]
      ringData.forEach((d, i) => {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(d.r, 0.02, 16, 64),
          new THREE.MeshBasicMaterial({ color: i === 1 ? ELEC : NEON, transparent: true, opacity: 0.6 })
        )
        ring.rotation.set(d.rot[0], d.rot[1], d.rot[2])
        group.add(ring)
      })
      break
    }
    case 'cylinder': {
      const cyl = new THREE.Mesh(
        new THREE.CylinderGeometry(0.6, 0.6, 3.5, 16, 1, true),
        new THREE.MeshBasicMaterial({ color: NEON, wireframe: true, transparent: true, opacity: 0.5 })
      )
      group.add(cyl)

      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2
        const x = Math.cos(angle) * 0.65
        const z = Math.sin(angle) * 0.65
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(x, -1.75, z),
            new THREE.Vector3(x, 1.75, z),
          ]),
          new THREE.LineBasicMaterial({ color: NEON, transparent: true, opacity: 0.8 })
        )
        group.add(line)
      }

      ;[1.5, -1.5].forEach(y => {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(0.7, 0.02, 16, 32),
          new THREE.MeshBasicMaterial({ color: NEON, transparent: true, opacity: 0.7 })
        )
        ring.rotation.x = Math.PI / 2
        ring.position.y = y
        group.add(ring)
      })
      break
    }
    case 'sphere': {
      const mesh = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.5, 1),
        new THREE.MeshBasicMaterial({ color: ELEC, wireframe: true, transparent: true, opacity: 0.35 })
      )
      group.add(mesh)

      for (let i = 0; i < 6; i++) {
        const theta = (i / 6) * Math.PI * 2
        const node = new THREE.Mesh(
          new THREE.OctahedronGeometry(0.18, 0),
          new THREE.MeshBasicMaterial({ color: NEON, transparent: true, opacity: 0.9 })
        )
        node.position.set(
          Math.cos(theta) * 2.2,
          Math.sin(theta * 0.7) * 0.8,
          Math.sin(theta) * 2.2
        )
        group.add(node)
      }
      break
    }
    case 'prism': {
      const prism = new THREE.Mesh(
        new THREE.OctahedronGeometry(1.5, 0),
        new THREE.MeshBasicMaterial({ color: NEON, wireframe: true, transparent: true, opacity: 0.6 })
      )
      group.add(prism)

      const inner = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.8, 0),
        new THREE.MeshBasicMaterial({ color: ELEC, wireframe: true, transparent: true, opacity: 0.3 })
      )
      group.add(inner)
      break
    }
  }

  // Store original positions + scatter directions for portal animation
  group.children.forEach(child => {
    child.userData.origPos = child.position.clone()
    const mat = (child as THREE.Mesh).material
    child.userData.origOpacity = mat && 'opacity' in mat ? (mat as any).opacity : 0.5
    child.userData.scatterDir = new THREE.Vector3(
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2
    ).normalize()
  })

  return group
}

// ─── Three.js Init ────────────────────────────────────────────────────

function initThree() {
  if (!canvasRef.value) return

  const w = canvasRef.value.clientWidth || window.innerWidth
  const h = canvasRef.value.clientHeight || window.innerHeight

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 200)
  camera.position.z = 8

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(w, h)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  canvasRef.value.appendChild(renderer.domElement)

  exitGroup = createGeometry(props.from)
  entryGroup = createGeometry(props.to)
  entryGroup.visible = false

  scene.add(exitGroup)
  scene.add(entryGroup)

  const pLight = new THREE.PointLight(0x00f3ff, 2.5, 30)
  pLight.position.set(0, 0, 5)
  scene.add(pLight)

  renderLoop()
}

// ─── Render Loop ──────────────────────────────────────────────────────

function renderLoop() {
  const p = portalProgress.value
  const CROSS_START = 0.42
  const CROSS_END = 0.58

  // ── EXIT GEOMETRY (visible first half + crossfade) ──
  if (exitGroup) {
    if (p <= CROSS_END) {
      exitGroup.visible = true
      const exitT = Math.min(1, p / 0.5) // 0→1
      const eased = exitT * exitT // easeIn acceleration

      exitGroup.children.forEach(child => {
        const orig = child.userData.origPos as THREE.Vector3
        const dir = child.userData.scatterDir as THREE.Vector3
        if (orig && dir) {
          child.position.copy(orig).addScaledVector(dir, eased * 7)
        }
        const mat = (child as any).material
        if (mat && 'opacity' in mat) {
          mat.opacity = (child.userData.origOpacity ?? 0.5) * Math.max(0, 1 - exitT * 1.3)
        }
      })

      exitGroup.rotation.y += 0.006 + eased * 0.035
      exitGroup.rotation.x += eased * 0.012
    } else {
      exitGroup.visible = false
    }
  }

  // ── ENTRY GEOMETRY (visible second half + crossfade) ──
  if (entryGroup) {
    if (p >= CROSS_START) {
      entryGroup.visible = true
      const entryT = Math.min(1, Math.max(0, (p - 0.5) / 0.5)) // 0→1
      const eased = 1 - (1 - entryT) * (1 - entryT) // easeOut deceleration

      const scale = 3.5 - eased * 2.5
      entryGroup.scale.setScalar(scale)

      entryGroup.children.forEach(child => {
        const orig = child.userData.origPos as THREE.Vector3
        const dir = child.userData.scatterDir as THREE.Vector3
        if (orig && dir) {
          const scatter = (1 - eased) * (1 - eased) * 7
          child.position.copy(orig).addScaledVector(dir, scatter)
        }
        const mat = (child as any).material
        if (mat && 'opacity' in mat) {
          mat.opacity = (child.userData.origOpacity ?? 0.5) * eased
        }
      })

      entryGroup.rotation.y += 0.035 * (1 - eased) + 0.005
      entryGroup.rotation.x += 0.012 * (1 - eased)
    } else {
      entryGroup.visible = false
      entryGroup.scale.setScalar(3.5)
    }
  }

  // ── CAMERA Z: dive in first half, pull back second half ──
  if (camera) {
    if (p <= 0.5) {
      const t = p / 0.5
      camera.position.z = 8 - t * t * 6 // 8 → 2
    } else {
      const t = (p - 0.5) / 0.5
      const eased = 1 - (1 - t) * (1 - t)
      camera.position.z = 2 + eased * 6 // 2 → 8
    }
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }

  animFrameId = requestAnimationFrame(renderLoop)
}

// ─── Lifecycle ────────────────────────────────────────────────────────

function onResize() {
  if (!renderer || !camera || !canvasRef.value) return
  const w = canvasRef.value.clientWidth || window.innerWidth
  const h = canvasRef.value.clientHeight || window.innerHeight
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
    if (dom?.parentNode) dom.parentNode.removeChild(dom)
    renderer = null
  }
  scene = null
  camera = null
  exitGroup = null
  entryGroup = null
}

onMounted(async () => {
  await nextTick()
  initThree()
  window.addEventListener('resize', onResize, { passive: true })

  if (portalRef.value) {
    scrollTriggerInstance = ScrollTrigger.create({
      trigger: portalRef.value,
      start: 'top top',
      end: '+=800',
      pin: true,
      anticipatePin: 1,
      scrub: 1.2,
      onUpdate: (self) => {
        portalProgress.value = self.progress
      },
    })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
    scrollTriggerInstance = null
  }
  disposeScene()
})
</script>

<template>
  <div ref="portalRef" class="relative w-full h-screen overflow-hidden">
    <!-- Three.js Portal Canvas -->
    <div ref="canvasRef" class="absolute inset-0" />

    <!-- Warp Flash at Midpoint -->
    <div
      class="absolute inset-0 pointer-events-none"
      :style="{
        background: `radial-gradient(circle at center, rgba(0, 243, 255, ${Math.max(0, (1 - Math.abs(portalProgress - 0.5) / 0.08)).toFixed(2)}) 0%, transparent 60%)`,
        opacity: Math.abs(portalProgress - 0.5) < 0.1 ? (1 - Math.abs(portalProgress - 0.5) / 0.1).toFixed(2) : '0',
      }"
    />

    <!-- Radial Vignette -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(circle at center, transparent 25%, rgba(3, 7, 18, 0.7) 100%);"
    />
  </div>
</template>
