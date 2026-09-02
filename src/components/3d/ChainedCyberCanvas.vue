<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { useExperienceStore } from '@/stores/experienceStore'

const store = useExperienceStore()
const containerRef = ref<HTMLDivElement | null>(null)

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let animFrameId: number | null = null

// Master scene group
let masterGroup: THREE.Group | null = null

// Artifact Groups
let gyroGroup: THREE.Group | null = null
let bioGroup: THREE.Group | null = null
let pillarGroup: THREE.Group | null = null
let sphereGroup: THREE.Group | null = null
let prismGroup: THREE.Group | null = null
let warpGroup: THREE.Points | null = null

// Sub-meshes for specialized animation
let gyroInnerIco: THREE.Mesh | null = null
let gyroRings: THREE.Mesh[] = []

let bioRings: THREE.Mesh[] = []
let bioCore: THREE.Mesh | null = null

let pillarCoreCylinder: THREE.Mesh | null = null
let pillarRings: THREE.Group[] = []

let satellites: THREE.Mesh[] = []
let satelliteLines: THREE.LineSegments | null = null

let prismCube: THREE.Mesh | null = null
let prismWire: THREE.LineSegments | null = null

// Warp particles data
let warpPositions: Float32Array | null = null
let warpVelocities: Float32Array | null = null
let warpGeo: THREE.BufferGeometry | null = null
const WARP_COUNT = 320

// Camera & Position Easing
let currentCameraZ = 8.0
let targetCameraZ = 8.0
let currentMasterX = 2.4
let targetMasterX = 2.4
let currentJourneyProgress = 0.0

// Mouse parallax
let mouseX = 0
let mouseY = 0
let targetMouseX = 0
let targetMouseY = 0

function onMouseMove(e: MouseEvent) {
  const w = window.innerWidth
  const h = window.innerHeight
  targetMouseX = (e.clientX - w / 2) / (w / 2)
  targetMouseY = (e.clientY - h / 2) / (h / 2)
}

// ─────────────────────────────────────────────────────────────
// BUILD 3D ARTIFACTS
// ─────────────────────────────────────────────────────────────

function buildGyroCore(): THREE.Group {
  const g = new THREE.Group()

  // Outer wireframe icosahedron
  const icoMat = new THREE.MeshBasicMaterial({
    color: 0x00f3ff,
    wireframe: true,
    transparent: true,
    opacity: 0.75,
  })
  gyroInnerIco = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 1), icoMat)
  g.add(gyroInnerIco)

  // Inner solid glow
  const solidMat = new THREE.MeshStandardMaterial({
    color: 0x0096ff,
    emissive: 0x00f3ff,
    emissiveIntensity: 0.6,
    roughness: 0.3,
    metalness: 0.9,
  })
  const solid = new THREE.Mesh(new THREE.IcosahedronGeometry(1.0, 0), solidMat)
  g.add(solid)

  // 3 Concentric Torus Rings
  const ringConfigs = [
    { r: 2.1, c: 0x00f3ff, rot: [Math.PI / 4, 0, 0] },
    { r: 2.5, c: 0x0096ff, rot: [0, Math.PI / 3, 0] },
    { r: 2.9, c: 0x00f3ff, rot: [0, 0, Math.PI / 6] },
  ]
  gyroRings = ringConfigs.map((cfg) => {
    const ringGeo = new THREE.TorusGeometry(cfg.r, 0.03, 16, 64)
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

  // Orbiting spark particles
  const sparkGeo = new THREE.BufferGeometry()
  const sparkPos: number[] = []
  for (let i = 0; i < 90; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)
    const r = 1.8 + Math.random() * 1.5
    sparkPos.push(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi))
  }
  sparkGeo.setAttribute('position', new THREE.Float32BufferAttribute(sparkPos, 3))
  const sparkMat = new THREE.PointsMaterial({ color: 0x00f3ff, size: 0.05, transparent: true, opacity: 0.75 })
  g.add(new THREE.Points(sparkGeo, sparkMat))

  return g
}

function buildBioCore(): THREE.Group {
  const g = new THREE.Group()

  // Central biometric core sphere
  const coreGeo = new THREE.SphereGeometry(0.7, 16, 16)
  const coreMat = new THREE.MeshBasicMaterial({
    color: 0x00f3ff,
    wireframe: true,
    transparent: true,
    opacity: 0.6,
  })
  bioCore = new THREE.Mesh(coreGeo, coreMat)
  g.add(bioCore)

  // Inner nucleus
  const nucGeo = new THREE.IcosahedronGeometry(0.45, 0)
  const nucMat = new THREE.MeshStandardMaterial({
    color: 0x0096ff,
    emissive: 0x00f3ff,
    emissiveIntensity: 0.8,
  })
  g.add(new THREE.Mesh(nucGeo, nucMat))

  // Biometric scanner rings
  const ringConfigs = [
    { r: 1.3, c: 0x00f3ff, rx: Math.PI / 3 },
    { r: 1.7, c: 0x0096ff, ry: Math.PI / 4 },
    { r: 2.1, c: 0x00f3ff, rz: Math.PI / 6 },
  ]
  bioRings = ringConfigs.map((cfg) => {
    const rGeo = new THREE.TorusGeometry(cfg.r, 0.025, 16, 64)
    const rMat = new THREE.MeshBasicMaterial({ color: cfg.c, transparent: true, opacity: 0.7 })
    const mesh = new THREE.Mesh(rGeo, rMat)
    if (cfg.rx) mesh.rotation.x = cfg.rx
    if (cfg.ry) mesh.rotation.y = cfg.ry
    if (cfg.rz) mesh.rotation.z = cfg.rz
    g.add(mesh)
    return mesh
  })

  return g
}

function buildPillar(): THREE.Group {
  const g = new THREE.Group()

  // Central energy cylinder core
  const coreGeo = new THREE.CylinderGeometry(0.8, 0.8, 8.5, 32, 1, true)
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x0096ff,
    emissive: 0x00f3ff,
    emissiveIntensity: 0.8,
    transparent: true,
    opacity: 0.85,
    side: THREE.DoubleSide,
  })
  pillarCoreCylinder = new THREE.Mesh(coreGeo, coreMat)
  g.add(pillarCoreCylinder)

  // Octagonal wireframe cage
  const cageGeo = new THREE.CylinderGeometry(1.4, 1.4, 8.5, 8, 12, true)
  const cageMat = new THREE.MeshBasicMaterial({
    color: 0x00f3ff,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  })
  g.add(new THREE.Mesh(cageGeo, cageMat))

  // Accent Torus Rings (Top, Middle, Bottom)
  const ringHeights = [-3.0, 0, 3.0]
  pillarRings = ringHeights.map((y) => {
    const ringG = new THREE.Group()
    ringG.position.y = y
    const tGeo = new THREE.TorusGeometry(1.55, 0.04, 16, 48)
    const tMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.8 })
    const ringMesh = new THREE.Mesh(tGeo, tMat)
    ringMesh.rotation.x = Math.PI / 2
    ringG.add(ringMesh)
    g.add(ringG)
    return ringG
  })

  // Vertical laser conduit lines
  const lineCount = 12
  const linePoints: THREE.Vector3[] = []
  for (let i = 0; i < lineCount; i++) {
    const angle = (i / lineCount) * Math.PI * 2
    const x = Math.cos(angle) * 1.4
    const z = Math.sin(angle) * 1.4
    linePoints.push(new THREE.Vector3(x, -4.25, z), new THREE.Vector3(x, 4.25, z))
  }
  const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints)
  const lineMat = new THREE.LineBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.6 })
  g.add(new THREE.LineSegments(lineGeo, lineMat))

  return g
}

function buildSatelliteSphere(): THREE.Group {
  const g = new THREE.Group()

  // Central wireframe geodesic sphere
  const sphereGeo = new THREE.IcosahedronGeometry(1.7, 1)
  const sphereMat = new THREE.MeshBasicMaterial({
    color: 0x0096ff,
    wireframe: true,
    transparent: true,
    opacity: 0.45,
  })
  g.add(new THREE.Mesh(sphereGeo, sphereMat))

  // Inner nucleus
  const coreGeo = new THREE.SphereGeometry(0.8, 16, 16)
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0x0096ff,
    emissive: 0x00f3ff,
    emissiveIntensity: 0.8,
    wireframe: true,
  })
  g.add(new THREE.Mesh(coreGeo, coreMat))

  // 6 Orbiting Satellite Octahedrons
  satellites = []
  const satCount = 6
  const linePositions: number[] = []

  for (let i = 0; i < satCount; i++) {
    const theta = (i / satCount) * Math.PI * 2
    const r = 2.6
    const x = Math.cos(theta) * r
    const y = Math.sin(theta * 0.7) * 0.9
    const z = Math.sin(theta) * r

    const satGeo = new THREE.OctahedronGeometry(0.22, 0)
    const satMat = new THREE.MeshStandardMaterial({
      color: 0x0096ff,
      emissive: 0x00f3ff,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2,
    })
    const satMesh = new THREE.Mesh(satGeo, satMat)
    satMesh.position.set(x, y, z)
    satMesh.userData = { origPos: new THREE.Vector3(x, y, z), theta }
    satellites.push(satMesh)
    g.add(satMesh)

    // Connector line from center
    linePositions.push(0, 0, 0, x, y, z)
  }

  const lineGeo = new THREE.BufferGeometry()
  lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))
  const lineMat = new THREE.LineBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.35 })
  satelliteLines = new THREE.LineSegments(lineGeo, lineMat)
  g.add(satelliteLines)

  return g
}

function buildBlueprintPrism(): THREE.Group {
  const g = new THREE.Group()

  // Outer wireframe box
  const boxGeo = new THREE.BoxGeometry(2.4, 2.4, 2.4)
  const edges = new THREE.EdgesGeometry(boxGeo)
  prismWire = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.85 })
  )
  g.add(prismWire)

  // Inner floating octahedron
  const octGeo = new THREE.OctahedronGeometry(1.2, 0)
  const octMat = new THREE.MeshStandardMaterial({
    color: 0x0096ff,
    emissive: 0x00f3ff,
    emissiveIntensity: 0.6,
    wireframe: true,
    transparent: true,
    opacity: 0.6,
  })
  prismCube = new THREE.Mesh(octGeo, octMat)
  g.add(prismCube)

  // Scanning laser slice plane
  const planeGeo = new THREE.PlaneGeometry(2.3, 2.3)
  const planeMat = new THREE.MeshBasicMaterial({
    color: 0x00f3ff,
    transparent: true,
    opacity: 0.25,
    side: THREE.DoubleSide,
  })
  const plane = new THREE.Mesh(planeGeo, planeMat)
  plane.rotation.x = Math.PI / 2
  g.add(plane)

  return g
}

function buildWarpTunnel(): THREE.Points {
  warpGeo = new THREE.BufferGeometry()
  warpPositions = new Float32Array(WARP_COUNT * 3)
  warpVelocities = new Float32Array(WARP_COUNT)

  for (let i = 0; i < WARP_COUNT; i++) {
    warpPositions[i * 3] = (Math.random() - 0.5) * 600
    warpPositions[i * 3 + 1] = (Math.random() - 0.5) * 600
    warpPositions[i * 3 + 2] = Math.random() * 600 - 300
    warpVelocities[i] = 0.5 + Math.random() * 1.5
  }

  warpGeo.setAttribute('position', new THREE.BufferAttribute(warpPositions, 3))
  const mat = new THREE.PointsMaterial({
    color: 0x00f3ff,
    size: 2.2,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
  })

  return new THREE.Points(warpGeo, mat)
}

// ─────────────────────────────────────────────────────────────
// THREE.JS INITIALIZATION
// ─────────────────────────────────────────────────────────────

function initThree() {
  if (!containerRef.value) return
  const w = window.innerWidth
  const h = window.innerHeight

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000)
  camera.position.z = 8.0

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(w, h)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  containerRef.value.appendChild(renderer.domElement)

  // Background Warp Tunnel
  warpGroup = buildWarpTunnel()
  scene.add(warpGroup)

  // Master Group for All Chained Artifacts
  masterGroup = new THREE.Group()
  scene.add(masterGroup)

  // Build each artifact
  gyroGroup = buildGyroCore()
  bioGroup = buildBioCore()
  pillarGroup = buildPillar()
  sphereGroup = buildSatelliteSphere()
  prismGroup = buildBlueprintPrism()

  // Initially only gyro is active
  bioGroup.visible = false
  pillarGroup.visible = false
  sphereGroup.visible = false
  prismGroup.visible = false

  masterGroup.add(gyroGroup)
  masterGroup.add(bioGroup)
  masterGroup.add(pillarGroup)
  masterGroup.add(sphereGroup)
  masterGroup.add(prismGroup)

  // Lights
  const pLight = new THREE.PointLight(0x00f3ff, 3.5, 40)
  pLight.position.set(0, 2, 8)
  scene.add(pLight)

  const aLight = new THREE.AmbientLight(0x001122, 1.2)
  scene.add(aLight)

  renderLoop()
}

// ─────────────────────────────────────────────────────────────
// RENDER LOOP & CHAINED 3D TRANSITION ENGINE
// ───────────────────────────────────�  if (p < 1.0) {
    // ── SECTION 0: HERO (0.0 to 1.0) ──
    const t = Math.min(1, Math.max(0, p))
    targetMasterX = isDesktop ? 2.4 : 0

    if (t < 0.6) {
      // Normal Hero mode
      targetCameraZ = 8.0
      if (gyroGroup) {
        gyroGroup.visible = true
        gyroGroup.scale.setScalar(1.0)
        gyroRings.forEach((r) => r.scale.setScalar(1.0))
        const mat = gyroInnerIco?.material as THREE.MeshBasicMaterial
        if (mat) mat.opacity = 0.75
      }
      if (bioGroup) bioGroup.visible = false
    } else {
      // DIVE INTO GYRO CORE → REVEAL BIOMETRIC CORE
      const diveT = (t - 0.6) / 0.4 // 0 to 1

      if (diveT < 0.5) {
        const subT = diveT / 0.5 // 0 to 1
        // Camera dives into gyro core
        targetCameraZ = 8.0 - subT * 6.0 // 8 -> 2
        warpSpeedMultiplier = 1.0 + subT * 4.0

        if (gyroGroup) {
          gyroGroup.visible = true
          gyroRings.forEach((r) => r.scale.setScalar(1.0 + subT * 3.0))
          const mat = gyroInnerIco?.material as THREE.MeshBasicMaterial
          if (mat) mat.opacity = 0.75 * (1 - subT)
        }

        // Bio core emerging from inside gyro
        if (bioGroup) {
          bioGroup.visible = true
          bioGroup.scale.setScalar(0.05 + subT * 0.45)
          bioRings.forEach((r) => r.scale.setScalar(1.0))
          const mat = bioCore?.material as THREE.MeshBasicMaterial
          if (mat) mat.opacity = 0.6
        }
      } else {
        const subT = (diveT - 0.5) / 0.5 // 0 to 1
        // Camera unzooms into About
        targetCameraZ = 2.0 + subT * 4.5 // 2 -> 6.5
        warpSpeedMultiplier = 5.0 * (1 - subT) + 1.0

        if (gyroGroup) gyroGroup.visible = false

        if (bioGroup) {
          bioGroup.visible = true
          bioGroup.scale.setScalar(0.5 + subT * 0.5) // 0.5 -> 1.0
        }
      }
    }
  } else if (p < 2.0) {
    // ── SECTION 1: ABOUT (1.0 to 2.0) ──
    const t = p - 1.0 // 0 to 1
    if (gyroGroup) gyroGroup.visible = false

    if (t < 0.6) {
      // Normal About mode
      targetMasterX = isDesktop ? 2.4 : 0
      targetCameraZ = 6.5
      if (bioGroup) {
        bioGroup.visible = true
        bioGroup.scale.setScalar(1.0)
        bioRings.forEach((r) => r.scale.setScalar(1.0))
        const mat = bioCore?.material as THREE.MeshBasicMaterial
        if (mat) mat.opacity = 0.6
      }
      if (pillarGroup) pillarGroup.visible = false
    } else {
      // DIVE INTO BIOMETRIC CORE → REVEAL CYLINDER PILLAR
      const diveT = (t - 0.6) / 0.4 // 0 to 1
      targetMasterX = isDesktop ? 2.4 * (1 - diveT) : 0 // glides from right to center!

      if (diveT < 0.5) {
        const subT = diveT / 0.5
        // Camera dives into bio core
        targetCameraZ = 6.5 - subT * 4.7 // 6.5 -> 1.8
        warpSpeedMultiplier = 1.0 + subT * 4.0

        if (bioGroup) {
          bioGroup.visible = true
          bioRings.forEach((r) => r.scale.setScalar(1.0 + subT * 3.0))
          const mat = bioCore?.material as THREE.MeshBasicMaterial
          if (mat) mat.opacity = 0.6 * (1 - subT)
        }

        // Pillar emerging from inside bio core
        if (pillarGroup) {
          pillarGroup.visible = true
          pillarGroup.scale.setScalar(0.05 + subT * 0.45)
        }
      } else {
        const subT = (diveT - 0.5) / 0.5
        // Camera unzooms into Experience
        targetCameraZ = 1.8 + subT * 12.2 // 1.8 -> 14.0
        warpSpeedMultiplier = 5.0 * (1 - subT) + 1.0

        if (bioGroup) bioGroup.visible = false

        if (pillarGroup) {
          pillarGroup.visible = true
          pillarGroup.scale.setScalar(0.5 + subT * 0.5)
        }
      }
    }
  }
= diveT / 0.5
        // Camera dives into bio core
        targetCameraZ = 6.5 - subT * 5.0 // 6.5 -> 1.5
        warpSpeedMultiplier = 1.0 + subT * 4.0

        if (bioGroup) {
          bioGroup.visible = true
          bioRings.forEach((r) => r.scale.setScalar(1.0 + subT * 2.5))
          const mat = bioCore?.material as THREE.MeshBasicMaterial
          if (mat) mat.opacity = 0.6 * (1 - subT)
        }

        // Pillar emerging from inside bio core
        if (pillarGroup) {
          pillarGroup.visible = true
          pillarGroup.scale.setScalar(0.05 + subT * 0.45)
        }
      } else {
        const subT = (diveT - 0.5) / 0.5
        // Camera unzooms into Experience
        targetCameraZ = 1.5 + subT * 12.5 // 1.5 -> 14.0
        warpSpeedMultiplier = 5.0 * (1 - subT) + 1.0

        if (bioGroup) bioGroup.visible = false

        if (pillarGroup) {
          pillarGroup.visible = true
          pillarGroup.scale.setScalar(0.5 + subT * 0.5)
        }
      }
    }
  } else if (p < 3.0) {
    // ── SECTION 2: EXPERIENCE (2.0 to 3.0) ──
    const t = p - 2.0 // 0 to 1
    targetMasterX = 0 // Dead center for cylinder carousel
    if (bioGroup) bioGroup.visible = false

    if (t < 0.75) {
      // Active cylinder carousel mode
      targetCameraZ = 14.0
      if (pillarGroup) {
        pillarGroup.visible = true
        pillarGroup.scale.setScalar(1.0)
        pillarGroup.rotation.y = store.carouselRotation
      }
      if (sphereGroup) sphereGroup.visible = false
    } else {
      // DIVE INTO PILLAR SHAFT → REVEAL SATELLITE SPHERE
      const diveT = (t - 0.75) / 0.25 // 0 to 1
      targetMasterX = isDesktop ? -2.4 * diveT : 0 // moves towards Skills column

      if (diveT < 0.5) {
        const subT = diveT / 0.5
        // Camera dives into pillar core
        targetCameraZ = 14.0 - subT * 12.0 // 14 -> 2
        warpSpeedMultiplier = 1.0 + subT * 5.0

        if (pillarGroup) {
          pillarGroup.visible = true
          pillarGroup.scale.setScalar(1.0 + subT * 0.8)
        }

        if (sphereGroup) {
          sphereGroup.visible = true
          sphereGroup.scale.setScalar(0.05 + subT * 0.45)
        }
      } else {
        const subT = (diveT - 0.5) / 0.5
        // Camera unzooms into Skills
        targetCameraZ = 2.0 + subT * 5.5 // 2 -> 7.5
        warpSpeedMultiplier = 6.0 * (1 - subT) + 1.0

        if (pillarGroup) pillarGroup.visible = false

        if (sphereGroup) {
          sphereGroup.visible = true
          sphereGroup.scale.setScalar(0.5 + subT * 0.5)
        }
      }
    }
  } else if (p < 4.0) {
    // ── SECTION 3: SKILLS (3.0 to 4.0) ──
    const t = p - 3.0 // 0 to 1
    targetMasterX = isDesktop ? -2.4 : 0
    if (pillarGroup) pillarGroup.visible = false

    if (t < 0.75) {
      // Active satellite orbit mode
      targetCameraZ = 7.5
      if (sphereGroup) {
        sphereGroup.visible = true
        sphereGroup.scale.setScalar(1.0)
        // Highlight active satellite
        const activeIdx = store.activeSkillIndex
        satellites.forEach((sat, i) => {
          const mat = sat.material as THREE.MeshStandardMaterial
          if (i === activeIdx) {
            mat.color.setHex(0x00f3ff)
            mat.emissive.setHex(0x00f3ff)
            mat.emissiveIntensity = 1.2
            sat.scale.set(1.4, 1.4, 1.4)
          } else {
            mat.color.setHex(0x0096ff)
            mat.emissive.setHex(0x002244)
            mat.emissiveIntensity = 0.4
            sat.scale.set(1.0, 1.0, 1.0)
          }
        })
      }
      if (prismGroup) prismGroup.visible = false
    } else {
      // DIVE INTO SATELLITE SPHERE → REVEAL BLUEPRINT PRISM
      const diveT = (t - 0.75) / 0.25 // 0 to 1

      if (diveT < 0.5) {
        const subT = diveT / 0.5
        // Camera dives into sphere core
        targetCameraZ = 7.5 - subT * 6.0 // 7.5 -> 1.5
        warpSpeedMultiplier = 1.0 + subT * 5.0

        if (sphereGroup) {
          sphereGroup.visible = true
          // Satellites retract
          satellites.forEach((s) => s.position.lerp(new THREE.Vector3(0, 0, 0), subT * 0.2))
        }

        if (prismGroup) {
          prismGroup.visible = true
          prismGroup.scale.setScalar(0.05 + subT * 0.45)
        }
      } else {
        const subT = (diveT - 0.5) / 0.5
        // Camera unzooms into Research
        targetCameraZ = 1.5 + subT * 4.5 // 1.5 -> 6.0
        warpSpeedMultiplier = 6.0 * (1 - subT) + 1.0

        if (sphereGroup) sphereGroup.visible = false

        if (prismGroup) {
          prismGroup.visible = true
          prismGroup.scale.setScalar(0.5 + subT * 0.5)
        }
      }
    }
  } else {
    // ── SECTION 4+: RESEARCH & BEYOND (4.0 to 5.0) ──
    const t = Math.min(1, p - 4.0)
    targetMasterX = isDesktop ? -2.4 : 0
    if (sphereGroup) sphereGroup.visible = false

    if (t < 0.8) {
      targetCameraZ = 6.0
      if (prismGroup) {
        prismGroup.visible = true
        prismGroup.scale.setScalar(1.0)
        prismGroup.rotation.y = time * 0.001 + (store.activeResearchIndex * Math.PI)
      }
    } else {
      // Dissolve into particles for community/contact
      const diveT = (t - 0.8) / 0.2
      targetCameraZ = 6.0 - diveT * 3.5
      if (prismGroup) {
        prismGroup.scale.setScalar(1.0 - diveT * 0.8)
        const mat = (prismWire?.material as THREE.LineBasicMaterial)
        if (mat) mat.opacity = 0.85 * (1 - diveT)
      }
    }
  }

  // ═════════════════════════════════════════════════════════════
  // POSITION, ROTATION & PARALLAX LERP
  // ═════════════════════════════════════════════════════════════

  currentCameraZ += (targetCameraZ - currentCameraZ) * 0.08
  if (camera) camera.position.z = currentCameraZ

  currentMasterX += (targetMasterX - currentMasterX) * 0.08
  if (masterGroup) {
    masterGroup.position.x = currentMasterX
    masterGroup.rotation.x = mouseY * 0.25
    masterGroup.rotation.y = -mouseX * 0.25
  }

  // Continuous micro-rotations
  if (gyroGroup?.visible) {
    gyroGroup.rotation.y += 0.008
    if (gyroInnerIco) gyroInnerIco.rotation.x += 0.01
    if (gyroRings[0]) gyroRings[0].rotation.x += 0.015
    if (gyroRings[1]) gyroRings[1].rotation.y += 0.012
    if (gyroRings[2]) gyroRings[2].rotation.z += 0.018
  }

  if (bioGroup?.visible) {
    bioGroup.rotation.y += 0.01
    if (bioRings[0]) bioRings[0].rotation.z += 0.018
    if (bioRings[1]) bioRings[1].rotation.x += 0.014
    if (bioRings[2]) bioRings[2].rotation.y += 0.02
  }

  if (pillarGroup?.visible) {
    if (pillarRings[0]) pillarRings[0].rotation.y -= 0.01
    if (pillarRings[1]) pillarRings[1].rotation.y += 0.015
    if (pillarRings[2]) pillarRings[2].rotation.y -= 0.012
  }

  if (sphereGroup?.visible) {
    sphereGroup.rotation.y += 0.005
  }

  if (prismGroup?.visible) {
    if (prismCube) {
      prismCube.rotation.x += 0.008
      prismCube.rotation.y += 0.012
    }
  }

  // ═════════════════════════════════════════════════════════════
  // WARP TUNNEL STARS ACCELERATION
  // ═════════════════════════════════════════════════════════════

  if (warpPositions && warpGeo) {
    const baseSpeed = 0.5 * warpSpeedMultiplier
    for (let i = 0; i < WARP_COUNT; i++) {
      warpPositions[i * 3 + 2] += warpVelocities![i] * baseSpeed

      if (warpPositions[i * 3 + 2] > 200) {
        warpPositions[i * 3 + 2] = -400
        warpPositions[i * 3] = (Math.random() - 0.5) * 600
        warpPositions[i * 3 + 1] = (Math.random() - 0.5) * 600
      }
    }
    warpGeo.attributes.position.needsUpdate = true
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }

  animFrameId = requestAnimationFrame(renderLoop)
}

function handleResize() {
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
    if (dom?.parentNode) dom.parentNode.removeChild(dom)
    renderer = null
  }
  scene = null
  camera = null
}

onMounted(() => {
  initThree()
  window.addEventListener('resize', handleResize, { passive: true })
  window.addEventListener('mousemove', onMouseMove, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', onMouseMove)
  disposeScene()
})
</script>

<template>
  <div ref="containerRef" class="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
</template>
