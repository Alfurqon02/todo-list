<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { useExperienceStore } from '@/stores/experienceStore'
import { experiences } from '@/data/portfolioData'
import { samplePoints } from '@/utils/sampleGeometry'
import {
  JOURNEY_STATIONS,
  clamp01,
  computeJourneyProgress,
  flightRaw,
  lerp,
  smooth01,
} from '@/composables/useJourney'

const store = useExperienceStore()
const containerRef = ref<HTMLDivElement | null>(null)

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let headlight: THREE.PointLight | null = null
let animFrameId: number | null = null
let resizeObserver: ResizeObserver | null = null

// Measured off the container rather than the window: at mount the window can
// still report 0 (a tab restored in the background), and since that recovers
// without ever firing a resize event the canvas would stay 0x0 forever.
let viewW = 0
let viewH = 0

/** Every artifact shares this one stage; only its lateral offset changes. */
let stageGroup: THREE.Group | null = null

// Artifact Groups
let gyroGroup: THREE.Group | null = null
let knotGroup: THREE.Group | null = null
let towerGroup: THREE.Group | null = null
let latticeGroup: THREE.Group | null = null
let archiveGroup: THREE.Group | null = null
let voidGroup: THREE.Group | null = null

// Sub-meshes for specialized animation
let gyroInnerIco: THREE.Mesh | null = null
let gyroRings: THREE.Mesh[] = []

let knotOuter: THREE.Mesh | null = null
let knotCore: THREE.Mesh | null = null

let towerCore: THREE.Mesh | null = null
let towerRings: THREE.Group[] = []

/** Six axis nodes on the lattice, one per skill category. */
let latticeNodes: THREE.Mesh[] = []

/** Five plates of the archive stack, one highlighted at a time. */
let archivePlates: THREE.Group[] = []
let currentArchiveSpin = 0

// ── The morph ──
// One particle set, sampled off every artifact's own surface. A section change
// runs: camera zooms in -> the current artifact breaks apart into these points
// -> the swarm drifts -> it packs back down onto the next artifact's surface
// -> the camera pulls out onto it. The next shape has zero opacity until the
// swarm has almost finished building it, so it is never sitting there in
// advance waiting to be zoomed at.
const MORPH_COUNT = 5600
let morphPoints: THREE.Points | null = null
let morphGeo: THREE.BufferGeometry | null = null
let morphPos: Float32Array | null = null
/** 6 per particle: leave-stagger, return-stagger, radius, theta, phi, spin. */
let morphSeed: Float32Array | null = null
/** Per-station sample sets, held in the artifact's own local space. */
let morphTargets: Float32Array[] = []
/** Largest half-extent of each station's samples, used to fit it to its frame. */
let morphExtents: number[] = []

/**
 * Where each station's artifact should sit and how big it should be, read off
 * the empty framed box its section reserves for it. Null until that section's
 * frame has been found and measured, in which case the station's fixed
 * dwell/lateral numbers are used instead.
 */
interface FrameFit {
  /** Camera distance that makes the artifact span the frame. */
  dwell: number
  /** Stage offset that centres the artifact on the frame. */
  x: number
  y: number
}
let frameFits: (FrameFit | null)[] = []

// Ambient dust: streaks that stretch with how fast the journey is moving.
const DUST_COUNT = 260
const DUST_DEPTH = 90
const DUST_SPREAD = 34
let dust: THREE.LineSegments | null = null
let dustGeo: THREE.BufferGeometry | null = null
let dustVerts: Float32Array | null = null
let dustSeed: Float32Array | null = null
let dustSpeed = 0

// Camera / stage state
let currentJourneyProgress = 0
let prevJourneyProgress = 0
let camZ = 9
let stageX = 0
let stageY = 0

// Mouse parallax
let mouseX = 0
let mouseY = 0
let targetMouseX = 0
let targetMouseY = 0

const vA = new THREE.Vector3()
const vB = new THREE.Vector3()
const vS = new THREE.Vector3()

function onMouseMove(e: MouseEvent) {
  const w = window.innerWidth
  const h = window.innerHeight
  targetMouseX = (e.clientX - w / 2) / (w / 2)
  targetMouseY = (e.clientY - h / 2) / (h / 2)
}

// ─────────────────────────────────────────────────────────────
// EASING HELPERS
// ─────────────────────────────────────────────────────────────

/** Frame-rate independent exponential approach. */
const approach = (current: number, target: number, rate: number, dt: number) =>
  current + (target - current) * (1 - Math.exp(-rate * dt))

// ─────────────────────────────────────────────────────────────
// BUILD 3D ARTIFACTS
//
// Five deliberately unlike silhouettes, so the morph reads as a real change of
// shape rather than one ringed ball turning into another: a ringed sphere, a
// woven knot, a tall column, a boxy grid, and a stack of flat plates.
//
// Each is built to a bounding extent that its station's `dwell` distance is
// tuned against — see JOURNEY_STATIONS for the framing each one targets.
// ─────────────────────────────────────────────────────────────

/** 00 — HERO: gyroscope. Round core inside three tilted rings. Extent ~1.86. */
function buildGyroCore(): THREE.Group {
  const g = new THREE.Group()

  const icoMat = new THREE.MeshBasicMaterial({
    color: 0x00f3ff,
    wireframe: true,
    transparent: true,
    opacity: 0.75,
  })
  gyroInnerIco = new THREE.Mesh(new THREE.IcosahedronGeometry(0.95, 1), icoMat)
  g.add(gyroInnerIco)

  const solidMat = new THREE.MeshStandardMaterial({
    color: 0x0096ff,
    emissive: 0x00f3ff,
    emissiveIntensity: 0.6,
    roughness: 0.3,
    metalness: 0.9,
  })
  g.add(new THREE.Mesh(new THREE.IcosahedronGeometry(0.62, 0), solidMat))

  const ringConfigs = [
    { r: 1.35, c: 0x00f3ff, rot: [Math.PI / 4, 0, 0] },
    { r: 1.6, c: 0x0096ff, rot: [0, Math.PI / 3, 0] },
    { r: 1.86, c: 0x00f3ff, rot: [0, 0, Math.PI / 6] },
  ]
  gyroRings = ringConfigs.map((cfg) => {
    const ringGeo = new THREE.TorusGeometry(cfg.r, 0.022, 12, 56)
    const ringMat = new THREE.MeshBasicMaterial({
      color: cfg.c,
      transparent: true,
      opacity: 0.8,
    })
    const mesh = new THREE.Mesh(ringGeo, ringMat)
    mesh.rotation.set(cfg.rot[0], cfg.rot[1], cfg.rot[2])
    g.add(mesh)
    return mesh
  })

  const sparkGeo = new THREE.BufferGeometry()
  const sparkPos: number[] = []
  for (let i = 0; i < 90; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)
    const r = 1.1 + Math.random() * 0.8
    sparkPos.push(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    )
  }
  sparkGeo.setAttribute('position', new THREE.Float32BufferAttribute(sparkPos, 3))
  g.add(
    new THREE.Points(
      sparkGeo,
      new THREE.PointsMaterial({ color: 0x00f3ff, size: 0.04, transparent: true, opacity: 0.75 })
    )
  )

  return g
}

/**
 * 01 — ABOUT: neural knot. A single woven (2,3) torus knot, no rings at all,
 * so it cannot be mistaken for the hero core. Extent ~1.78.
 */
function buildNeuralKnot(): THREE.Group {
  const g = new THREE.Group()
  // Fixed pose, baked into the morph samples: the weave is only legible as a
  // weave when it is not square-on to the camera. Static on purpose — the
  // morph cloud tracks the station group's matrix, so anything that animates
  // below that level would drift away from the points.
  const pose = new THREE.Group()
  pose.rotation.set(-0.5, 0, 0.32)
  g.add(pose)

  knotOuter = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1.1, 0.13, 128, 10, 2, 3),
    new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    })
  )
  pose.add(knotOuter)

  knotCore = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1.1, 0.06, 96, 8, 2, 3),
    new THREE.MeshStandardMaterial({
      color: 0x0096ff,
      emissive: 0x00f3ff,
      emissiveIntensity: 0.9,
      roughness: 0.35,
      metalness: 0.8,
      transparent: true,
      opacity: 0.9,
    })
  )
  pose.add(knotCore)

  // Loose synapse motes drifting around the weave.
  const moteGeo = new THREE.BufferGeometry()
  const motes: number[] = []
  for (let i = 0; i < 70; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)
    const r = 1.3 + Math.random() * 0.55
    motes.push(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi) * 0.5
    )
  }
  moteGeo.setAttribute('position', new THREE.Float32BufferAttribute(motes, 3))
  pose.add(
    new THREE.Points(
      moteGeo,
      new THREE.PointsMaterial({ color: 0x00f3ff, size: 0.045, transparent: true, opacity: 0.7 })
    )
  )

  return g
}

/**
 * 02 — EXPERIENCE: the tower. Deliberately the largest artifact of the five —
 * it is the only one staged dead centre and it should dominate the frame.
 * Half-height 5.0, radius 2.85.
 */
function buildTower(): THREE.Group {
  const g = new THREE.Group()

  const coreGeo = new THREE.CylinderGeometry(1.5, 1.5, 10, 32, 1, true)
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x0096ff,
    emissive: 0x00f3ff,
    emissiveIntensity: 0.8,
    transparent: true,
    opacity: 0.75,
    side: THREE.DoubleSide,
  })
  towerCore = new THREE.Mesh(coreGeo, coreMat)
  g.add(towerCore)

  const cageGeo = new THREE.CylinderGeometry(2.6, 2.6, 10, 8, 14, true)
  const cageMat = new THREE.MeshBasicMaterial({
    color: 0x00f3ff,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  })
  g.add(new THREE.Mesh(cageGeo, cageMat))

  // One ring per role in the carousel, so the tower is a readout of the same
  // data the cards are showing rather than generic decoration.
  const roleCount = Math.max(2, experiences.length)
  towerRings = []
  for (let i = 0; i < roleCount; i++) {
    const ringG = new THREE.Group()
    ringG.position.y = -4.4 + (i / (roleCount - 1)) * 8.8
    const tGeo = new THREE.TorusGeometry(2.85, 0.04, 10, 40)
    const tMat = new THREE.MeshBasicMaterial({ color: 0x0096ff, transparent: true, opacity: 0.55 })
    const ringMesh = new THREE.Mesh(tGeo, tMat)
    ringMesh.rotation.x = Math.PI / 2
    ringG.add(ringMesh)
    g.add(ringG)
    towerRings.push(ringG)
  }

  const lineCount = 12
  const linePoints: THREE.Vector3[] = []
  for (let i = 0; i < lineCount; i++) {
    const angle = (i / lineCount) * Math.PI * 2
    const x = Math.cos(angle) * 2.6
    const z = Math.sin(angle) * 2.6
    linePoints.push(new THREE.Vector3(x, -5, z), new THREE.Vector3(x, 5, z))
  }
  const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints)
  const lineMat = new THREE.LineBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.6 })
  g.add(new THREE.LineSegments(lineGeo, lineMat))

  return g
}

/**
 * 03 — SKILLS: circuit board. A wide, shallow 4x2x4 grid of cells wired
 * together and tilted back, so it reads as a flat board in perspective rather
 * than as another ball the size of the hero core. Six edge nodes, one per skill
 * category, drive the active-category highlight. Extent ~1.9 wide, ~1.3 tall.
 */
function buildCircuitLattice(): THREE.Group {
  const g = new THREE.Group()
  // Baked pose (see buildNeuralKnot): a board square-on to the camera would
  // read as a thin line, and a board that animates below the station group
  // would drift away from its morph points.
  const pose = new THREE.Group()
  pose.rotation.set(-0.42, 0, 0)
  g.add(pose)

  const STEP = 0.9
  const LAYER = 0.45
  const cols = [-1.5, -0.5, 0.5, 1.5]
  const cellGeo = new THREE.BoxGeometry(0.24, 0.24, 0.24)
  const cellMat = new THREE.MeshBasicMaterial({
    color: 0x0096ff,
    wireframe: true,
    transparent: true,
    opacity: 0.5,
  })

  for (const cx of cols) {
    for (const cz of cols) {
      for (const cy of [-1, 1]) {
        const cell = new THREE.Mesh(cellGeo, cellMat)
        cell.position.set(cx * STEP, cy * LAYER, cz * STEP)
        pose.add(cell)
      }
    }
  }

  // Bus lines: traces across each layer, plus vias between them.
  const busPoints: THREE.Vector3[] = []
  const edge = 1.5 * STEP
  for (const c of cols) {
    for (const cy of [-1, 1]) {
      busPoints.push(
        new THREE.Vector3(-edge, cy * LAYER, c * STEP),
        new THREE.Vector3(edge, cy * LAYER, c * STEP),
        new THREE.Vector3(c * STEP, cy * LAYER, -edge),
        new THREE.Vector3(c * STEP, cy * LAYER, edge)
      )
    }
    busPoints.push(
      new THREE.Vector3(c * STEP, -LAYER, c * STEP),
      new THREE.Vector3(c * STEP, LAYER, c * STEP)
    )
  }
  const busGeo = new THREE.BufferGeometry().setFromPoints(busPoints)
  pose.add(
    new THREE.LineSegments(
      busGeo,
      new THREE.LineBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.28 })
    )
  )

  // Six nodes ringing the board edge, one per skill category.
  latticeNodes = []
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x0096ff,
      emissive: 0x002244,
      emissiveIntensity: 0.4,
      metalness: 0.8,
      roughness: 0.2,
    })
    const node = new THREE.Mesh(new THREE.OctahedronGeometry(0.24, 0), nodeMat)
    node.position.set(Math.cos(angle) * 1.85, 0, Math.sin(angle) * 1.85)
    latticeNodes.push(node)
    pose.add(node)
  }

  return g
}

/**
 * 04 — RESEARCH: archive stack. One hexagonal plate per publication, posted
 * together on a spine — flat and layered where everything else is round or
 * tall. Keep PUBLICATION_COUNT in step with researchProjects in
 * CyberResearchSection.vue. Extent ~1.9 wide, ~0.6 tall.
 */
const PUBLICATION_COUNT = 2

function buildArchiveStack(): THREE.Group {
  const g = new THREE.Group()

  const corners: THREE.Vector3[][] = []
  archivePlates = []

  for (let i = 0; i < PUBLICATION_COUNT; i++) {
    const plateG = new THREE.Group()
    const radius = 1.9 - i * 0.15
    plateG.position.y = -0.45 + i * 0.9
    plateG.rotation.y = i * 0.5

    plateG.add(
      new THREE.Mesh(
        new THREE.CylinderGeometry(radius, radius, 0.06, 6, 1, false),
        new THREE.MeshBasicMaterial({
          color: 0x00f3ff,
          wireframe: true,
          transparent: true,
          opacity: 0.85,
        })
      )
    )

    plateG.add(
      new THREE.Mesh(
        new THREE.CylinderGeometry(radius * 0.9, radius * 0.9, 0.02, 6, 1, false),
        new THREE.MeshStandardMaterial({
          color: 0x0096ff,
          emissive: 0x00f3ff,
          emissiveIntensity: 0.35,
          transparent: true,
          opacity: 0.22,
          side: THREE.DoubleSide,
        })
      )
    )

    const ring: THREE.Vector3[] = []
    for (let c = 0; c < 6; c++) {
      const angle = (c / 6) * Math.PI * 2 + Math.PI / 6 + plateG.rotation.y
      ring.push(new THREE.Vector3(Math.cos(angle) * radius, plateG.position.y, Math.sin(angle) * radius))
    }
    corners.push(ring)

    g.add(plateG)
    archivePlates.push(plateG)
  }

  // Posts joining the plates, so the stack has volume rather than reading as
  // two loose discs.
  const postPoints: THREE.Vector3[] = []
  for (let i = 0; i + 1 < corners.length; i++) {
    for (let c = 0; c < 6; c++) postPoints.push(corners[i][c], corners[i + 1][c])
  }
  if (postPoints.length) {
    g.add(
      new THREE.LineSegments(
        new THREE.BufferGeometry().setFromPoints(postPoints),
        new THREE.LineBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.4 })
      )
    )
  }

  g.add(
    new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 1.7, 8, 1, true),
      new THREE.MeshStandardMaterial({
        color: 0x0096ff,
        emissive: 0x00f3ff,
        emissiveIntensity: 0.9,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
      })
    )
  )

  return g
}

function buildDust(): THREE.LineSegments {
  dustGeo = new THREE.BufferGeometry()
  dustVerts = new Float32Array(DUST_COUNT * 6)
  dustSeed = new Float32Array(DUST_COUNT * 3)

  for (let i = 0; i < DUST_COUNT; i++) {
    dustSeed[i * 3] = (Math.random() - 0.5) * DUST_SPREAD * 2
    dustSeed[i * 3 + 1] = (Math.random() - 0.5) * DUST_SPREAD * 2
    dustSeed[i * 3 + 2] = -Math.random() * DUST_DEPTH
  }

  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustVerts, 3))
  const mat = new THREE.LineBasicMaterial({
    color: 0x00f3ff,
    transparent: true,
    opacity: 0.25,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })

  const seg = new THREE.LineSegments(dustGeo, mat)
  seg.frustumCulled = false
  return seg
}

function buildMorphCloud(): THREE.Points {
  morphGeo = new THREE.BufferGeometry()
  morphPos = new Float32Array(MORPH_COUNT * 3)
  morphSeed = new Float32Array(MORPH_COUNT * 6)

  for (let i = 0; i < MORPH_COUNT; i++) {
    const s = i * 6
    morphSeed[s] = Math.random() // when this particle lets go
    morphSeed[s + 1] = Math.random() // when it starts packing back down
    morphSeed[s + 2] = 1.5 + Math.random() * 4.0 // scatter radius
    morphSeed[s + 3] = Math.random() * Math.PI * 2 // scatter theta
    morphSeed[s + 4] = Math.acos(Math.random() * 2 - 1) // scatter phi
    morphSeed[s + 5] = 0.4 + Math.random() * 1.6 // swarm spin rate
  }

  morphGeo.setAttribute('position', new THREE.BufferAttribute(morphPos, 3))
  const mat = new THREE.PointsMaterial({
    color: 0x00f3ff,
    size: 0.03,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })

  const pts = new THREE.Points(morphGeo, mat)
  pts.frustumCulled = false
  return pts
}

// ─────────────────────────────────────────────────────────────
// STATIONS
// ─────────────────────────────────────────────────────────────

interface MatRef {
  mat: THREE.Material & { opacity: number }
  base: number
  /** Authored colours, kept so the theme can be re-derived rather than stacked. */
  color?: THREE.Color
  emissive?: THREE.Color
}

interface Station {
  group: THREE.Group
  mats: MatRef[]
  detail?: (t: number) => void
}

let stations: Station[] = []

const LIGHT_INK = new THREE.Color(0x0b3d52)
const themedScratch = new THREE.Color()

/** Same tint the theme pass applies, for colours picked at runtime. */
function themed(c: THREE.Color) {
  if (store.isDark) return c
  return themedScratch.copy(c).multiplyScalar(0.42).lerp(LIGHT_INK, 0.25)
}
const NODE_COLOR = [new THREE.Color(0x0096ff), new THREE.Color(0x00f3ff)]
const NODE_EMISSIVE = [new THREE.Color(0x002244), new THREE.Color(0x00f3ff)]

function collectMats(group: THREE.Group): MatRef[] {
  const out: MatRef[] = []
  group.traverse((obj) => {
    const raw = (obj as THREE.Mesh).material
    if (!raw) return
    const list = Array.isArray(raw) ? raw : [raw]
    list.forEach((m) => {
      const mat = m as THREE.Material & { opacity: number }
      mat.transparent = true
      const tinted = mat as unknown as { color?: THREE.Color; emissive?: THREE.Color }
      out.push({
        mat,
        base: mat.opacity ?? 1,
        color: tinted.color?.clone(),
        emissive: tinted.emissive?.clone(),
      })
    })
  })
  return out
}

/**
 * Retints the whole scene for the active theme.
 *
 * Neon cyan additive-blended onto a pale background is invisible, so the light
 * theme darkens every authored colour and switches the point clouds to normal
 * blending. Colours are always re-derived from the authored originals, never
 * from the current values, so toggling back and forth does not drift.
 */
function applyCanvasTheme() {
  const dark = store.isDark
  const tint = (c: THREE.Color | undefined, target: THREE.Color | undefined) => {
    if (!c || !target) return
    target.copy(c)
    if (!dark) {
      // Pull toward a deep teal-blue that holds up against a light ground.
      target.multiplyScalar(0.42)
      target.lerp(LIGHT_INK, 0.25)
    }
  }

  for (const st of stations) {
    for (const ref of st.mats) {
      const tinted = ref.mat as unknown as { color?: THREE.Color; emissive?: THREE.Color }
      tint(ref.color, tinted.color)
      tint(ref.emissive, tinted.emissive)
    }
  }

  if (scene) {
    scene.fog = new THREE.FogExp2(dark ? 0x030712 : 0xf4f7fb, dark ? 0.014 : 0.02)
  }
  if (headlight) {
    headlight.color.set(dark ? 0x00f3ff : 0x2b6f8f)
    headlight.intensity = dark ? 4.0 : 2.2
  }

  for (const pts of [morphPoints, dust]) {
    if (!pts) continue
    const mat = pts.material as THREE.PointsMaterial | THREE.LineBasicMaterial
    mat.blending = dark ? THREE.AdditiveBlending : THREE.NormalBlending
    mat.color.set(dark ? 0x00f3ff : 0x0f5f7d)
    mat.needsUpdate = true
  }
}

function buildStations() {
  stations = [
    // 00 — HERO: gyroscopic mecha core
    {
      group: gyroGroup!,
      mats: collectMats(gyroGroup!),
      detail: () => {
        if (!gyroGroup) return
        gyroGroup.rotation.y += 0.008
        if (gyroInnerIco) gyroInnerIco.rotation.x += 0.01
        if (gyroRings[0]) gyroRings[0].rotation.x += 0.015
        if (gyroRings[1]) gyroRings[1].rotation.y += 0.012
        if (gyroRings[2]) gyroRings[2].rotation.z += 0.018
      },
    },
    // 01 — ABOUT: biometric scanner core
    {
      group: knotGroup!,
      mats: collectMats(knotGroup!),
      detail: () => {
        if (!knotGroup) return
        // Tumbles on two axes; the shell counter-rotates against the core so
        // the weave reads as woven rather than as one solid lump.
        // Only the station group turns, so the baked pose (and the morph
        // points sampled through it) stay locked together.
        knotGroup.rotation.y += 0.006
      },
    },
    // 02 — EXPERIENCE: the cylinder tower, yawed by the carousel
    {
      group: towerGroup!,
      mats: collectMats(towerGroup!),
      detail: () => {
        if (!towerGroup) return
        towerGroup.rotation.y = store.carouselRotation
        // The ring for the role on the front card lights up and widens.
        const activeRole = store.activeNodeIndex
        towerRings.forEach((ring, i) => {
          ring.rotation.y += i % 2 === 0 ? 0.008 : -0.006
          const on = i === activeRole
          const s = ring.scale.x + ((on ? 1.13 : 1.0) - ring.scale.x) * 0.12
          ring.scale.set(s, 1, s)
          const mat = (ring.children[0] as THREE.Mesh).material as THREE.MeshBasicMaterial
          mat.color.lerp(themed(NODE_COLOR[on ? 1 : 0]), 0.12)
        })
      },
    },
    // 03 — SKILLS: satellite orbit sphere
    {
      group: latticeGroup!,
      mats: collectMats(latticeGroup!),
      detail: () => {
        if (!latticeGroup) return
        latticeGroup.rotation.y += 0.005

        // Eased so selecting a category glows in rather than popping.
        const activeIdx = store.activeSkillIndex
        latticeNodes.forEach((node, i) => {
          const mat = node.material as THREE.MeshStandardMaterial
          const on = i === activeIdx ? 1 : 0
          const s = node.scale.x + ((on ? 1.6 : 1.0) - node.scale.x) * 0.12
          node.scale.setScalar(s)
          node.rotation.y += 0.03
          mat.emissiveIntensity += ((on ? 1.2 : 0.4) - mat.emissiveIntensity) * 0.12
          mat.emissive.lerp(themed(NODE_EMISSIVE[on]), 0.12)
          mat.color.lerp(themed(NODE_COLOR[on]), 0.12)
        })
      },
    },
    // 04 — RESEARCH: blueprint prism
    {
      group: archiveGroup!,
      mats: collectMats(archiveGroup!),
      detail: (t) => {
        if (!archiveGroup) return
        // Eased so swapping the active publication glides instead of snapping
        // a quarter turn in a single frame.
        currentArchiveSpin += (store.activeResearchIndex * 1.2 - currentArchiveSpin) * 0.06
        archiveGroup.rotation.y = t * 0.18 + currentArchiveSpin
        // The plate for the publication currently on the card lifts clear.
        archivePlates.forEach((plate, i) => {
          const on = i === store.activeResearchIndex
          const restY = -0.45 + i * 0.9
          plate.position.y += (restY + (on ? 0.22 : 0) - plate.position.y) * 0.08
          plate.rotation.y += (i * 0.5 + (on ? 0.4 : 0) - plate.rotation.y) * 0.06
        })
      },
    },
    // 05 — COMMUNITY / CONTACT: the last artifact scatters and never re-forms.
    // It hangs over the cohort-missions section as drifting debris, then rises
    // out of frame as the contact section comes up (see FINAL_EXIT_* below).
    {
      group: voidGroup!,
      mats: [],
      detail: () => {
        if (!voidGroup) return
        voidGroup.rotation.y += 0.0015
        voidGroup.rotation.x += 0.0007
      },
    },
  ]
}

// ─────────────────────────────────────────────────────────────
// THREE.JS INITIALIZATION
// ─────────────────────────────────────────────────────────────

function initThree() {
  if (!containerRef.value) return
  measureView()

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(45, viewW / viewH, 0.1, 220)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(viewW, viewH)
  containerRef.value.appendChild(renderer.domElement)

  dust = buildDust()
  scene.add(dust)

  stageGroup = new THREE.Group()
  scene.add(stageGroup)

  // Every artifact sits at the stage origin. Only one is ever visible.
  gyroGroup = buildGyroCore()
  knotGroup = buildNeuralKnot()
  towerGroup = buildTower()
  latticeGroup = buildCircuitLattice()
  archiveGroup = buildArchiveStack()
  voidGroup = new THREE.Group()

  stageGroup.add(gyroGroup, knotGroup, towerGroup, latticeGroup, archiveGroup, voidGroup)

  buildStations()
  // Sampled while every group is still unrotated, so the targets stay in each
  // artifact's own local space and can be re-oriented by its live matrix.
  morphTargets = stations.map((s) => samplePoints(s.group, MORPH_COUNT))
  morphExtents = morphTargets.map((pts) => {
    let e = 0
    for (let i = 0; i < pts.length; i += 3) {
      e = Math.max(e, Math.abs(pts[i]), Math.abs(pts[i + 1]))
    }
    return e
  })
  measureFrames()

  for (const st of stations) {
    st.group.visible = false
    for (const m of st.mats) m.mat.opacity = 0
  }

  morphPoints = buildMorphCloud()
  stageGroup.add(morphPoints)

  headlight = new THREE.PointLight(0x00f3ff, 4.0, 60)
  scene.add(headlight)
  scene.add(new THREE.AmbientLight(0x001122, 1.2))

  applyCanvasTheme()

  // Start from wherever the page was restored rather than replaying the whole
  // journey on every reload.
  currentJourneyProgress = computeJourneyProgress()
  prevJourneyProgress = currentJourneyProgress
  const startIdx = Math.min(JOURNEY_STATIONS.length - 1, Math.floor(currentJourneyProgress))
  camZ = frameFits[startIdx]?.dwell ?? JOURNEY_STATIONS[startIdx].dwell

  renderLoop()
}

function measureView() {
  const el = containerRef.value
  const w = el?.clientWidth || window.innerWidth || 0
  const h = el?.clientHeight || window.innerHeight || 0
  // Never commit a degenerate size; the observer will call back with a real one.
  if (w > 0 && h > 0) {
    viewW = w
    viewH = h
  }
  return viewW > 0 && viewH > 0
}

const TAN_HALF_FOV = Math.tan((45 / 2) * (Math.PI / 180))

/**
 * Layout position of `el` in CSS pixels.
 *
 * Deliberately offsetLeft/offsetTop rather than getBoundingClientRect: the
 * sections apply a scroll-driven scale() to the box these frames live in, and
 * offset geometry ignores transforms. That means a frame measures correctly at
 * any time, not only while its section happens to be at rest.
 */
function layoutOffset(el: HTMLElement | null) {
  let x = 0
  let y = 0
  let node: HTMLElement | null = el
  while (node) {
    x += node.offsetLeft
    y += node.offsetTop
    node = node.offsetParent as HTMLElement | null
  }
  return { x, y }
}

/**
 * Fits each artifact into the frame its section reserves for it.
 *
 * Those frames are capped at fixed pixel widths, so a fixed camera distance,
 * which holds a constant share of the viewport, drifts out of them as the
 * window grows. Measuring gives the artifact the frame's real size and centre
 * at any resolution.
 */
function measureFrames() {
  if (!viewW || !viewH) return
  frameFits = JOURNEY_STATIONS.map((cfg, i) => {
    if (!cfg.frame || !cfg.section) return null
    const frame = document.querySelector(cfg.frame) as HTMLElement | null
    const section = document.querySelector(cfg.section) as HTMLElement | null
    const extent = morphExtents[i]
    if (!frame || !section || !extent) return null

    const box = Math.min(frame.offsetWidth, frame.offsetHeight)
    if (box <= 1) return null

    // Each section pins to fill the viewport, so its own box is the screen.
    const f = layoutOffset(frame)
    const sec = layoutOffset(section)
    const cx = (f.x - sec.x + frame.offsetWidth / 2) / viewW
    const cy = (f.y - sec.y + frame.offsetHeight / 2) / viewH

    // World-to-pixel scale is isotropic, so one axis settles the distance.
    const targetHalfPx = (box * (cfg.fill ?? 0.7)) / 2
    const dwell = (extent * viewH) / (2 * TAN_HALF_FOV * targetHalfPx)
    const halfH = TAN_HALF_FOV * dwell

    return {
      dwell,
      x: (cx - 0.5) * 2 * halfH * (viewW / viewH),
      y: (0.5 - cy) * 2 * halfH,
    }
  })
}

/**
 * Where in the closing section the debris starts leaving, how long it takes,
 * and how far it travels. The scattered cloud reaches a radius of ~6.5 world
 * units and the frame half-height at that camera distance is ~3.7, so a rise
 * of 16 carries it clear with margin to spare.
 */
const FINAL_EXIT_START = 0.5
const FINAL_EXIT_SPAN = 0.42
const FINAL_EXIT_RISE = 16

/** Desktop stages the artifact beside the copy; narrow screens centre it. */
function layoutScale() {
  const isDesktop = viewW >= 1024
  return {
    lateral: isDesktop ? 1 : 0,
    dwell: isDesktop ? 1 : 1.45,
  }
}

// ─────────────────────────────────────────────────────────────
// RENDER LOOP — ZOOM IN, BREAK APART, REBUILD, ZOOM OUT
// ─────────────────────────────────────────────────────────────

let lastTime = 0
let nextFrameSweep = 0

function renderLoop(time = 0) {
  // Clamped so a backgrounded tab does not resume with one enormous step.
  const dt = Math.min(0.05, Math.max(0.001, (time - lastTime) * 0.001))
  lastTime = time
  const t = time * 0.001

  // Sections mount after this canvas, and pin-spacers and web fonts can reflow
  // the frames a beat later, so keep re-measuring over the first few seconds.
  // After that only a resize triggers it, and the DOM is left alone.
  if (time > nextFrameSweep) {
    nextFrameSweep = time + 400
    const missing = JOURNEY_STATIONS.some((cfg, i) => cfg.frame && !frameFits[i])
    if (missing || time < 6000) measureFrames()
  }

  mouseX = approach(mouseX, targetMouseX, 3.5, dt)
  mouseY = approach(mouseY, targetMouseY, 3.5, dt)

  prevJourneyProgress = currentJourneyProgress
  currentJourneyProgress = approach(currentJourneyProgress, store.journeyProgress, 7.0, dt)
  const p = currentJourneyProgress

  const lastIdx = JOURNEY_STATIONS.length - 1
  const idx = Math.min(lastIdx, Math.max(0, Math.floor(p)))
  const nextIdx = Math.min(lastIdx, idx + 1)
  // Raw flight position. Every curve below eases off this same parameter, so
  // the artifact and the section copy stay matched to each other.
  const morph = flightRaw(p, idx)
  const morphing = nextIdx !== idx && morph > 0

  const { lateral, dwell: dwellScale } = layoutScale()
  const here = JOURNEY_STATIONS[idx]
  const there = JOURNEY_STATIONS[nextIdx]
  const fitHere = frameFits[idx]
  const fitThere = frameFits[nextIdx]

  // ═════════════════════════════════════════════════════════════
  // CAMERA — push in on the artifact, then pull back out onto the next
  // ═════════════════════════════════════════════════════════════

  const dwellHere = fitHere ? fitHere.dwell : here.dwell * dwellScale
  const dwellThere = fitThere ? fitThere.dwell : there.dwell * dwellScale
  // Close enough that the loose swarm fills the frame, but still outside it —
  // pushing further in only opens a hole in the middle of the cloud.
  const nearZ = Math.max(2.6, Math.min(dwellHere, dwellThere) * 0.45)

  // Dive while the artifact is coming apart, hold closest through the loose
  // swarm, then settle onto the next artifact by 0.86. The last stretch is
  // deliberately dead air: the artifact is parked and finished while the
  // section copy fades up over it.
  const targetZ =
    morph < 0.45
      ? lerp(dwellHere, nearZ, smooth01(morph / 0.45))
      : lerp(nearZ, dwellThere, smooth01((morph - 0.45) / 0.41))

  camZ = approach(camZ, targetZ, 6.5, dt)

  if (camera) {
    camera.position.set(mouseX * 0.5, -mouseY * 0.4, camZ)
    camera.lookAt(0, 0, 0)
    // A touch of lens widening at the peak of the push, to sell the dive.
    // Tracks the dolly, so it is back to normal once the artifact is parked.
    const fov = 45 + Math.sin(Math.PI * clamp01(morph / 0.86)) * 13
    if (Math.abs(camera.fov - fov) > 0.01) {
      camera.fov = fov
      camera.updateProjectionMatrix()
    }
  }

  if (headlight) headlight.position.set(0, 2, camZ + 1)

  // ═════════════════════════════════════════════════════════════
  // STAGE — glides between the two sections' columns
  // ═════════════════════════════════════════════════════════════

  const slide = smooth01(morph)
  const xHere = fitHere ? fitHere.x : here.lateralX * lateral
  const xThere = fitThere ? fitThere.x : there.lateralX * lateral
  const yHere = fitHere ? fitHere.y : here.lateralY * lateral
  const yThere = fitThere ? fitThere.y : there.lateralY * lateral

  // On the closing station the debris does not fade out, it leaves: it lifts
  // clear of the top of the frame over the stretch where the contact section
  // is rising into view from the bottom.
  const exit =
    idx >= lastIdx
      ? smooth01((clamp01(p - lastIdx) - FINAL_EXIT_START) / FINAL_EXIT_SPAN)
      : 0

  stageX = approach(stageX, lerp(xHere, xThere, slide), 5.0, dt)
  stageY = approach(stageY, lerp(yHere, yThere, slide) + exit * FINAL_EXIT_RISE, 5.0, dt)

  if (stageGroup) {
    stageGroup.position.set(stageX, stageY, 0)
    stageGroup.rotation.x = mouseY * 0.12
    stageGroup.rotation.y = -mouseX * 0.12
  }

  // ═════════════════════════════════════════════════════════════
  // ARTIFACT SOLIDITY
  //
  // Only the current artifact is solid. The next one stays at zero opacity
  // until the swarm has all but finished rebuilding it, so it is never
  // sitting on screen in advance.
  // ═════════════════════════════════════════════════════════════

  // The outgoing artifact fades on exactly the curve its section copy uses to
  // leave (see useJourneyStage), so the shape and the words go together rather
  // than the 3D snapping out well ahead of the text.
  const outgoing = 1 - smooth01((morph - 0.05) / 0.45) // gone at 0.50
  // Rebuilds over 0.68 -> 1.00, the exact window its section copy fades in
  // over (see useJourneyStage), so the shape and the words finish together.
  const incoming = smooth01((morph - 0.68) / 0.32)

  for (let i = 0; i < stations.length; i++) {
    const st = stations[i]
    const active = i === idx || (morphing && i === nextIdx)

    // The closing station has no mesh at all, only the scattered cloud, but it
    // still needs its idle motion ticked.
    if (!st.mats.length) {
      if (active) st.detail?.(t)
      continue
    }

    let alpha = 0
    if (i === idx) alpha = morphing ? outgoing : 1
    else if (i === nextIdx && morphing) alpha = incoming

    st.group.visible = alpha > 0.004
    if (!st.group.visible) continue

    for (let m = 0; m < st.mats.length; m++) {
      st.mats[m].mat.opacity = st.mats[m].base * alpha
    }
    st.detail?.(t)
  }

  // ═════════════════════════════════════════════════════════════
  // THE MORPH — the outgoing artifact's own surface points let go,
  // drift as a swarm, then pack down onto the next artifact
  // ═════════════════════════════════════════════════════════════

  if (morphPos && morphSeed && morphGeo && morphPoints && scene) {
    scene.updateMatrixWorld(true)
    const mFrom = stations[idx].group.matrix
    const mTo = stations[nextIdx].group.matrix
    const from = morphTargets[idx]
    const to = morphTargets[nextIdx]

    for (let i = 0; i < MORPH_COUNT; i++) {
      const k = i * 3
      const s = i * 6

      // Staggered so the shape unravels and re-knits rather than sliding.
      // Departures spread across 0 .. 0.50 to match the mesh fading out, and
      // arrivals across 0.52 .. 1.00 so the last particle lands on the frame
      // the mesh finishes solidifying.
      const leave = clamp01((morph - morphSeed[s] * 0.22) / 0.28)
      const back = clamp01((morph - (0.52 + morphSeed[s + 1] * 0.16)) / 0.32)
      const d = smooth01(leave)
      const r = smooth01(back)

      vA.fromArray(from, k).applyMatrix4(mFrom)

      if (d > 0.0005) {
        // Loose swarm position: a slowly turning shell around the stage.
        const spin = t * morphSeed[s + 5] * 0.5
        const theta = morphSeed[s + 3] + spin
        const phi = morphSeed[s + 4]
        const rad = morphSeed[s + 2]
        const sp = Math.sin(phi)
        vS.set(rad * sp * Math.cos(theta), rad * Math.cos(phi), rad * sp * Math.sin(theta))
        vA.lerp(vS, d)

        if (r > 0.0005) {
          vB.fromArray(to, k).applyMatrix4(mTo)
          vA.lerp(vB, r)
        }
      }

      morphPos[k] = vA.x
      morphPos[k + 1] = vA.y
      morphPos[k + 2] = vA.z
    }

    morphGeo.attributes.position.needsUpdate = true

    // Points are a faint shimmer on a solid artifact and the whole show
    // while it is in pieces.
    // Envelope over the stretch where the artifact is genuinely just points:
    // up by 0.50, held through the dispersed phase, then handing over to the
    // mesh on the same curve the mesh uses to solidify.
    const loose = smooth01(morph / 0.5) * (1 - smooth01((morph - 0.68) / 0.32))
    const mat = morphPoints.material as THREE.PointsMaterial
    mat.size = 0.028 + loose * 0.034
    // Barely there on a solid artifact (the sub-parts spin independently of
    // the station matrix, so resting points drift a little off the geometry),
    // and the entire show once it is in pieces.
    mat.opacity = 0.16 + loose * 0.8
  }

  // ═════════════════════════════════════════════════════════════
  // DUST — streaks keyed to how fast the journey itself is moving
  // ═════════════════════════════════════════════════════════════

  if (dustVerts && dustSeed && dustGeo && dust) {
    const journeyVel = (Math.abs(p - prevJourneyProgress) / dt) * 26
    dustSpeed = approach(dustSpeed, Math.min(journeyVel, 150), 8.0, dt)
    const half = (0.4 + dustSpeed * 0.07) * 0.5
    const drift = (4 + dustSpeed * 1.6) * dt

    for (let i = 0; i < DUST_COUNT; i++) {
      const s = i * 3
      dustSeed[s + 2] += drift

      if (dustSeed[s + 2] > camZ) {
        dustSeed[s + 2] -= DUST_DEPTH
        dustSeed[s] = (Math.random() - 0.5) * DUST_SPREAD * 2
        dustSeed[s + 1] = (Math.random() - 0.5) * DUST_SPREAD * 2
      }

      const v = i * 6
      dustVerts[v] = dustSeed[s]
      dustVerts[v + 1] = dustSeed[s + 1]
      dustVerts[v + 2] = dustSeed[s + 2] - half
      dustVerts[v + 3] = dustSeed[s]
      dustVerts[v + 4] = dustSeed[s + 1]
      dustVerts[v + 5] = dustSeed[s + 2] + half
    }

    dustGeo.attributes.position.needsUpdate = true
    const mat = dust.material as THREE.LineBasicMaterial
    mat.opacity = 0.14 + Math.min(1, dustSpeed / 70) * 0.4
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }

  animFrameId = requestAnimationFrame(renderLoop)
}

function handleResize() {
  if (!renderer || !camera) return
  if (!measureView()) return
  camera.aspect = viewW / viewH
  camera.updateProjectionMatrix()
  renderer.setSize(viewW, viewH)
  measureFrames()
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
  stations = []
  morphTargets = []
  morphExtents = []
  frameFits = []
  scene = null
  camera = null
  headlight = null
  stageGroup = null
  dust = null
  dustGeo = null
  dustVerts = null
  dustSeed = null
  morphPoints = null
  morphGeo = null
  morphPos = null
  morphSeed = null
}

watch(
  () => store.isDark,
  () => applyCanvasTheme()
)

onMounted(() => {
  initThree()
  // Watches the element itself, so a viewport that only becomes non-zero after
  // mount is picked up even though no resize event is dispatched for it.
  if (containerRef.value && typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(containerRef.value)
  }
  window.addEventListener('resize', handleResize, { passive: true })
  window.addEventListener('mousemove', onMouseMove, { passive: true })
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  resizeObserver = null
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', onMouseMove)
  disposeScene()
})
</script>

<template>
  <div ref="containerRef" class="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
</template>
