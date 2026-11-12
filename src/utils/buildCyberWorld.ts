import * as THREE from 'three'
import { experiences, skills } from '@/data/portfolioData'
import { engineeringSystems, perspectiveDomains } from '@/data/portfolioEditorial'
import { signalPointAt } from '@/utils/cyberStory'

function makeLabelTexture(
  title: string,
  sub = '',
  accent = '#45d7ff',
  dark = true,
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 160
  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = dark ? 'rgba(6, 13, 22, 0.88)' : 'rgba(232, 240, 245, 0.92)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.strokeStyle = accent
  ctx.lineWidth = 3
  ctx.strokeRect(4, 4, canvas.width - 8, canvas.height - 8)

  ctx.fillStyle = accent
  ctx.fillRect(18, 22, 6, canvas.height - 44)

  ctx.font = '700 28px "JetBrains Mono", monospace'
  ctx.fillStyle = dark ? '#eef7ff' : '#0b1824'
  ctx.fillText(title.slice(0, 26), 40, sub ? 70 : 90)

  if (sub) {
    ctx.font = '500 19px "JetBrains Mono", monospace'
    ctx.fillStyle = accent
    ctx.fillText(sub.slice(0, 34), 40, 114)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 4
  return texture
}

export function buildCyberWorld() {
  const group = new THREE.Group()
  const geometries: THREE.BufferGeometry[] = []
  const materials: THREE.Material[] = []
  const textures: THREE.Texture[] = []

  const trackGeo = <T extends THREE.BufferGeometry>(g: T): T => {
    geometries.push(g)
    return g
  }
  const trackMat = <T extends THREE.Material>(m: T): T => {
    materials.push(m)
    return m
  }
  const trackTex = <T extends THREE.Texture>(t: T): T => {
    textures.push(t)
    return t
  }

  // Shared Igloo.inc-inspired Crystalline & Brushed Titanium Materials
  const darkTitanium = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x0d1724,
      metalness: 0.86,
      roughness: 0.24,
    }),
  )
  const brushedAlloy = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x1a2c40,
      metalness: 0.78,
      roughness: 0.3,
    }),
  )
  const crystalShellMat = trackMat(
    new THREE.MeshPhysicalMaterial({
      color: 0x8be4ff,
      emissive: 0x0b2c44,
      emissiveIntensity: 0.55,
      metalness: 0.15,
      roughness: 0.12,
      transmission: 0.55,
      transparent: true,
      opacity: 0.76,
      ior: 1.45,
    }),
  )
  const crystalWireMat = trackMat(
    new THREE.MeshBasicMaterial({
      color: 0x45d7ff,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
    }),
  )
  const cyanEmissive = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x45d7ff,
      emissive: 0x22b8eb,
      emissiveIntensity: 1.45,
      metalness: 0.2,
      roughness: 0.2,
    }),
  )
  const amberEmissive = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0xffa65c,
      emissive: 0xff8a30,
      emissiveIntensity: 1.35,
      metalness: 0.2,
      roughness: 0.2,
    }),
  )
  const dimPortMat = trackMat(
    new THREE.MeshStandardMaterial({
      color: 0x1e3448,
      emissive: 0x0c2233,
      emissiveIntensity: 0.35,
      metalness: 0.5,
      roughness: 0.35,
    }),
  )
  const gridLineMat = trackMat(
    new THREE.LineBasicMaterial({
      color: 0x1e4968,
      transparent: true,
      opacity: 0.26,
    }),
  )

  const addBadge = (
    parent: THREE.Object3D,
    title: string,
    sub: string,
    pos: [number, number, number],
    size: [number, number] = [2.4, 0.75],
    accent = '#45d7ff',
    rotY = 0,
  ) => {
    const tex = trackTex(makeLabelTexture(title, sub, accent))
    const mat = trackMat(
      new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        side: THREE.DoubleSide,
      }),
    )
    const mesh = new THREE.Mesh(trackGeo(new THREE.PlaneGeometry(size[0], size[1])), mat)
    mesh.position.set(...pos)
    mesh.rotation.y = rotY
    parent.add(mesh)
    return mesh
  }

  // ============================================================================
  // 1. ARCHITECTURAL FLOOR GRID & VOLUMETRIC PARTICLE FIELD
  // ============================================================================
  const floorPoints: THREE.Vector3[] = []
  for (let z = 12; z >= -120; z -= 3) {
    floorPoints.push(new THREE.Vector3(-18, -1.6, z), new THREE.Vector3(18, -1.6, z))
  }
  for (let x = -18; x <= 18; x += 3) {
    floorPoints.push(new THREE.Vector3(x, -1.6, 12), new THREE.Vector3(x, -1.6, -120))
  }
  const floorGrid = new THREE.LineSegments(
    trackGeo(new THREE.BufferGeometry().setFromPoints(floorPoints)),
    gridLineMat,
  )
  group.add(floorGrid)

  // Volumetric 3D particle dust for continuous depth perception during scroll
  const particleCount = 1050
  const particlePositions = new Float32Array(particleCount * 3)
  const particleColors = new Float32Array(particleCount * 3)
  const cCyan = new THREE.Color(0x45d7ff)
  const cAmber = new THREE.Color(0xffa65c)
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3
    particlePositions[i3] = (Math.random() - 0.5) * 30
    particlePositions[i3 + 1] = -1.2 + Math.random() * 11
    particlePositions[i3 + 2] = 14 - Math.random() * 132
    const c = i % 5 === 0 ? cAmber : cCyan
    particleColors[i3] = c.r
    particleColors[i3 + 1] = c.g
    particleColors[i3 + 2] = c.b
  }
  const particleGeo = trackGeo(new THREE.BufferGeometry())
  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
  particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3))
  const particleMat = trackMat(
    new THREE.PointsMaterial({
      size: 0.085,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  )
  const particleField = new THREE.Points(particleGeo, particleMat)
  group.add(particleField)

  // ============================================================================
  // 2. CONTINUOUS QUANTUM SIGNAL CONDUIT & TRAVELLING CRYSTALLINE CORE
  // ============================================================================
  const pathPoints = Array.from({ length: 65 }, (_, i) => {
    const [x, y, z] = signalPointAt(i / 64)
    return new THREE.Vector3(x, y, z)
  })
  const signalPath = new THREE.CatmullRomCurve3(pathPoints)

  const mainConduitMesh = new THREE.Mesh(
    trackGeo(new THREE.TubeGeometry(signalPath, 160, 0.045, 8, false)),
    cyanEmissive,
  )
  group.add(mainConduitMesh)

  // Secondary braided amber trace along the conduit
  const secondaryPoints = pathPoints.map(
    (pt, i) =>
      new THREE.Vector3(
        pt.x + Math.cos(i * 0.45) * 0.14,
        pt.y + Math.sin(i * 0.45) * 0.14,
        pt.z,
      ),
  )
  const secondaryCurve = new THREE.CatmullRomCurve3(secondaryPoints)
  const secondaryConduitMesh = new THREE.Mesh(
    trackGeo(new THREE.TubeGeometry(secondaryCurve, 160, 0.02, 6, false)),
    amberEmissive,
  )
  group.add(secondaryConduitMesh)

  // Periodic waveguide rings along the entire Z spine
  const conduitRings: THREE.Mesh[] = []
  const waveRingGeo = trackGeo(new THREE.TorusGeometry(0.42, 0.014, 8, 32))
  for (let i = 0; i <= 36; i++) {
    const t = i / 36
    const ring = new THREE.Mesh(waveRingGeo, i % 3 === 0 ? amberEmissive : cyanEmissive)
    signalPath.getPointAt(t, ring.position)
    group.add(ring)
    conduitRings.push(ring)
  }

  // Travelling Signal Core (faceted crystal + dual gimbal rings + point light)
  const signal = new THREE.Group()
  const signalCrystal = new THREE.Mesh(
    trackGeo(new THREE.OctahedronGeometry(0.32, 1)),
    crystalShellMat,
  )
  const signalWire = new THREE.Mesh(
    trackGeo(new THREE.OctahedronGeometry(0.36, 1)),
    crystalWireMat,
  )
  const signalRingOuter = new THREE.Mesh(
    trackGeo(new THREE.TorusGeometry(0.54, 0.022, 10, 36)),
    cyanEmissive,
  )
  const signalRingInner = new THREE.Mesh(
    trackGeo(new THREE.TorusGeometry(0.44, 0.018, 10, 36)),
    amberEmissive,
  )
  signalRingInner.rotation.x = Math.PI / 2
  const signalLight = new THREE.PointLight(0x45d7ff, 3.2, 11, 1.6)
  signal.add(signalCrystal, signalWire, signalRingOuter, signalRingInner, signalLight)
  signal.position.set(0, 1.15, 0)
  group.add(signal)

  // ============================================================================
  // STATION 00 (Z = 0) — ORIGIN · THE CRYSTALLINE SIGNAL MONOLITH
  // ============================================================================
  const originStation = new THREE.Group()
  originStation.position.set(2.3, 1.35, 0)
  group.add(originStation)

  // Pedestal floor ring
  const floorRingGeo = trackGeo(new THREE.RingGeometry(2.2, 2.32, 48))
  const originFloorRing = new THREE.Mesh(floorRingGeo, cyanEmissive)
  originFloorRing.rotation.x = -Math.PI / 2
  originFloorRing.position.y = -2.85
  originStation.add(originFloorRing)

  // Inner crystalline core
  const originCore = new THREE.Mesh(
    trackGeo(new THREE.IcosahedronGeometry(1.18, 1)),
    crystalShellMat,
  )
  const originCoreWire = new THREE.Mesh(
    trackGeo(new THREE.IcosahedronGeometry(1.22, 1)),
    crystalWireMat,
  )
  originStation.add(originCore, originCoreWire)

  // 3 Gyroscopic containment rings
  const originRings: THREE.Mesh[] = []
  for (let i = 0; i < 3; i++) {
    const r = new THREE.Mesh(
      trackGeo(new THREE.TorusGeometry(1.65 + i * 0.34, 0.028, 10, 48)),
      i === 1 ? amberEmissive : cyanEmissive,
    )
    r.rotation.set(i * 0.6, i * 0.8, 0)
    originStation.add(r)
    originRings.push(r)
  }

  // 8 Crystalline containment shards that radially unfold on scroll
  const shellPanels: THREE.Mesh[] = []
  const shardGeo = trackGeo(new THREE.OctahedronGeometry(0.52, 0))
  shardGeo.scale(0.85, 1.65, 0.38)
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2
    const dx = Math.cos(angle)
    const dz = Math.sin(angle)
    const shard = new THREE.Mesh(shardGeo, i % 2 === 0 ? darkTitanium : crystalShellMat)
    const edgeWire = new THREE.Mesh(shardGeo, crystalWireMat)
    shard.add(edgeWire)
    shard.userData = { direction: [dx, dz], angle }
    shard.position.set(dx * 1.55, 0, dz * 1.55)
    shard.rotation.y = -angle
    originStation.add(shard)
    shellPanels.push(shard)
  }

  addBadge(
    originStation,
    '00 // SIGNAL CORE',
    'FULL-STACK · AI · CYBERSECURITY',
    [0, 2.75, 0],
    [2.65, 0.78],
    '#45d7ff',
    -0.25,
  )

  // ============================================================================
  // STATION 01 (Z = -18) — SYSTEMS · 7-BLADE PRODUCTION RACK
  // ============================================================================
  const systemsStation = new THREE.Group()
  systemsStation.position.set(-2.5, 0.85, -18)
  group.add(systemsStation)

  // Base chassis pedestal
  const rackBase = new THREE.Mesh(
    trackGeo(new THREE.CylinderGeometry(2.1, 2.35, 0.36, 8)),
    darkTitanium,
  )
  rackBase.position.y = -2.1
  systemsStation.add(rackBase)

  // Top containment crown (engineeringLid)
  const engineeringLid = new THREE.Mesh(
    trackGeo(new THREE.CylinderGeometry(1.85, 2.05, 0.28, 8)),
    brushedAlloy,
  )
  const lidRim = new THREE.Mesh(
    trackGeo(new THREE.TorusGeometry(1.98, 0.03, 8, 32)),
    cyanEmissive,
  )
  lidRim.rotation.x = Math.PI / 2
  engineeringLid.add(lidRim)
  engineeringLid.position.y = 1.65
  systemsStation.add(engineeringLid)

  addBadge(
    systemsStation,
    '01 // PRODUCTION SYSTEMS',
    '7 DEPLOYMENTS · ENTERPRISE · GOV · SEC',
    [0, 2.85, 0.4],
    [2.9, 0.82],
    '#45d7ff',
    0.28,
  )

  // 7 Modular Server Blades representing all 7 Engineering Systems
  const computeBlades: THREE.Group[] = []
  const systemPorts: THREE.Mesh[] = []
  const bladeGeo = trackGeo(new THREE.BoxGeometry(2.65, 0.22, 1.55))
  const portGeo = trackGeo(new THREE.BoxGeometry(0.18, 0.14, 1.58))

  engineeringSystems.forEach((sys, i) => {
    const bladeGroup = new THREE.Group()
    const restY = -1.45 + i * 0.44
    const restZ = (i - 3) * 0.08
    bladeGroup.position.set(0, restY, restZ)
    bladeGroup.userData = { restY, restZ, index: i }

    const chassis = new THREE.Mesh(bladeGeo, i % 2 === 0 ? darkTitanium : brushedAlloy)
    const wire = new THREE.Mesh(bladeGeo, crystalWireMat)
    bladeGroup.add(chassis, wire)

    // Illuminated LED status bar on the right edge facing the conduit/camera
    const portLed = new THREE.Mesh(
      portGeo,
      i === 0 ? cyanEmissive : dimPortMat,
    )
    portLed.position.set(1.34, 0, 0)
    bladeGroup.add(portLed)
    systemPorts.push(portLed)

    // Compact blade label
    addBadge(
      bladeGroup,
      `${sys.code} · ${sys.experience.company.slice(0, 14).toUpperCase()}`,
      `${sys.domain} · ${sys.experience.period}`,
      [0, 0.02, 0.79],
      [2.3, 0.34],
      i % 2 === 0 ? '#45d7ff' : '#ffa65c',
      0,
    )

    systemsStation.add(bladeGroup)
    computeBlades.push(bladeGroup)
  })

  // ============================================================================
  // STATION 02 (Z = -36) — INTELLIGENCE · DENSENET-LSTM OPTICAL PRISM
  // ============================================================================
  const researchStation = new THREE.Group()
  researchStation.position.set(2.4, 1.1, -36)
  group.add(researchStation)

  addBadge(
    researchStation,
    '02 // DENSENET121 + LSTM',
    'IEEE PUBLISHED · BLEU-1 0.5625',
    [0, 2.95, 0],
    [2.85, 0.82],
    '#ffa65c',
    -0.25,
  )

  // Dual X-Ray input glass frames (Frontal & Lateral)
  const inputFrames: THREE.Group[] = []
  const xrayFrameGeo = trackGeo(new THREE.BoxGeometry(1.35, 1.75, 0.08))
  for (let i = 0; i < 2; i++) {
    const frameGroup = new THREE.Group()
    frameGroup.position.set(i === 0 ? -1.05 : 1.05, 0.2, 2.3)
    const glass = new THREE.Mesh(xrayFrameGeo, crystalShellMat)
    const border = new THREE.Mesh(xrayFrameGeo, crystalWireMat)
    const scanBar = new THREE.Mesh(
      trackGeo(new THREE.BoxGeometry(1.25, 0.04, 0.12)),
      i === 0 ? cyanEmissive : amberEmissive,
    )
    scanBar.name = 'scanBar'
    frameGroup.add(glass, border, scanBar)
    researchStation.add(frameGroup)
    inputFrames.push(frameGroup)
  }

  // 5 Cascading Neural Feature Prisms (DenseNet-121 blocks -> Attention -> LSTM)
  const neuralLayers: THREE.Group[] = []
  for (let i = 0; i < 5; i++) {
    const layerGroup = new THREE.Group()
    layerGroup.position.set(0, 0.15, 1.1 - i * 0.85)
    const radius = 1.55 - i * 0.16
    const ring = new THREE.Mesh(
      trackGeo(new THREE.TorusGeometry(radius, 0.032, 8, 6)),
      i % 2 === 0 ? cyanEmissive : amberEmissive,
    )
    const plate = new THREE.Mesh(
      trackGeo(new THREE.CylinderGeometry(radius * 0.82, radius * 0.82, 0.06, 6)),
      crystalShellMat,
    )
    plate.rotation.x = Math.PI / 2
    layerGroup.add(ring, plate)
    researchStation.add(layerGroup)
    neuralLayers.push(layerGroup)
  }

  // Streaming Synaptic Data Packets
  const dataPackets: THREE.Mesh[] = []
  const packetGeo = trackGeo(new THREE.OctahedronGeometry(0.09, 0))
  for (let i = 0; i < 20; i++) {
    const pkt = new THREE.Mesh(packetGeo, i % 2 === 0 ? cyanEmissive : amberEmissive)
    group.add(pkt)
    dataPackets.push(pkt)
  }

  // ============================================================================
  // STATION 03 (Z = -54) — DOMAINS · 4-ARENA ORBITAL NEXUS
  // ============================================================================
  const domainsStation = new THREE.Group()
  domainsStation.position.set(-2.3, 0.8, -54)
  group.add(domainsStation)

  // Central Nexus Spire
  const nexusCore = new THREE.Mesh(
    trackGeo(new THREE.OctahedronGeometry(0.85, 1)),
    crystalShellMat,
  )
  const nexusWire = new THREE.Mesh(
    trackGeo(new THREE.OctahedronGeometry(0.9, 1)),
    crystalWireMat,
  )
  const nexusRing = new THREE.Mesh(
    trackGeo(new THREE.TorusGeometry(2.45, 0.025, 10, 48)),
    cyanEmissive,
  )
  nexusRing.rotation.x = Math.PI / 2
  domainsStation.add(nexusCore, nexusWire, nexusRing)

  addBadge(
    domainsStation,
    '03 // FOUR ARENAS',
    'ENT · UNI · SEC · OPS',
    [0, 3.05, 0],
    [2.7, 0.78],
    '#45d7ff',
    0.26,
  )

  const mapNodes: THREE.Group[] = []
  const domainOffsets: [number, number][] = [
    [-1.85, 1.35],
    [1.85, 1.35],
    [-1.85, -1.35],
    [1.85, -1.35],
  ]
  perspectiveDomains.forEach((dom, i) => {
    const node = new THREE.Group()
    const [ox, oz] = domainOffsets[i] ?? [0, 0]
    node.position.set(ox, 0, oz)
    node.userData = { baseX: ox, baseZ: oz, index: i }

    const pillar = new THREE.Mesh(
      trackGeo(new THREE.CylinderGeometry(0.62, 0.74, 0.9, 6)),
      darkTitanium,
    )
    const crystalCap = new THREE.Mesh(
      trackGeo(new THREE.OctahedronGeometry(0.46, 0)),
      crystalShellMat,
    )
    crystalCap.position.y = 0.72
    const halo = new THREE.Mesh(
      trackGeo(new THREE.TorusGeometry(0.76, 0.024, 8, 24)),
      i % 2 === 0 ? cyanEmissive : amberEmissive,
    )
    halo.rotation.x = Math.PI / 2
    halo.position.y = 0.46
    node.add(pillar, crystalCap, halo)

    addBadge(
      node,
      `${dom.code} · ${dom.name.slice(0, 14).toUpperCase()}`,
      dom.meta,
      [0, 1.45, 0],
      [2.05, 0.56],
      i % 2 === 0 ? '#45d7ff' : '#ffa65c',
      0.2,
    )

    domainsStation.add(node)
    mapNodes.push(node)
  })

  // ============================================================================
  // STATION 04 (Z = -72) — EXPERIENCE · 11-NODE HELICAL ARCHIVE VAULT
  // ============================================================================
  const archiveStation = new THREE.Group()
  archiveStation.position.set(2.1, 1.15, -72)
  group.add(archiveStation)

  addBadge(
    archiveStation,
    '04 // CAREER ARCHIVE',
    '11 ROLES · HELICAL DATA VAULT',
    [0, 3.1, 2.5],
    [2.75, 0.8],
    '#45d7ff',
    -0.24,
  )

  const archiveCards: THREE.Group[] = []
  const cardGeo = trackGeo(new THREE.BoxGeometry(2.15, 0.36, 0.82))
  experiences.forEach((exp, i) => {
    const card = new THREE.Group()
    const t = i / (experiences.length - 1) - 0.5 // -0.5 .. +0.5
    const angle = t * Math.PI * 1.35
    const restX = Math.cos(angle) * 1.45
    const restY = t * -3.2
    const restZ = t * -7.2
    card.position.set(restX, restY, restZ)
    card.userData = { restX, restY, restZ, index: i }

    const body = new THREE.Mesh(cardGeo, i % 2 === 0 ? darkTitanium : brushedAlloy)
    const wire = new THREE.Mesh(cardGeo, crystalWireMat)
    const indicator = new THREE.Mesh(
      trackGeo(new THREE.BoxGeometry(0.12, 0.3, 0.86)),
      i === 0 ? cyanEmissive : amberEmissive,
    )
    indicator.position.x = -1.04
    card.add(body, wire, indicator)

    addBadge(
      card,
      `${String(i + 1).padStart(2, '0')} · ${exp.company.slice(0, 15).toUpperCase()}`,
      `${exp.role.slice(0, 20)} · ${exp.period}`,
      [0.05, 0, 0.43],
      [1.95, 0.32],
      i % 2 === 0 ? '#45d7ff' : '#ffa65c',
      -0.18,
    )

    archiveStation.add(card)
    archiveCards.push(card)
  })

  // ============================================================================
  // STATION 05 (Z = -90) — TOOLKIT · 6-CLUSTER GYROSCOPIC MATRIX
  // ============================================================================
  const skillsStation = new THREE.Group()
  skillsStation.position.set(-2.3, 1.25, -90)
  group.add(skillsStation)

  const matrixCore = new THREE.Mesh(
    trackGeo(new THREE.DodecahedronGeometry(0.95, 0)),
    crystalShellMat,
  )
  const matrixWire = new THREE.Mesh(
    trackGeo(new THREE.DodecahedronGeometry(1.0, 0)),
    crystalWireMat,
  )
  skillsStation.add(matrixCore, matrixWire)

  addBadge(
    skillsStation,
    '05 // TECHNICAL MATRIX',
    '6 CLUSTERS · 32 TECHNOLOGIES',
    [0, 3.05, 0],
    [2.75, 0.8],
    '#ffa65c',
    0.25,
  )

  const skillRings: THREE.Group[] = []
  const cassetteGeo = trackGeo(new THREE.BoxGeometry(1.85, 0.42, 0.65))
  skills.forEach((cat, i) => {
    const cassette = new THREE.Group()
    const angle = (i / skills.length) * Math.PI * 2
    const restX = Math.cos(angle) * 2.35
    const restY = Math.sin(angle) * 1.45
    const restZ = Math.sin(angle * 2) * 0.65
    cassette.position.set(restX, restY, restZ)
    cassette.userData = { restX, restY, restZ, angle, index: i }

    const hull = new THREE.Mesh(cassetteGeo, darkTitanium)
    const wire = new THREE.Mesh(cassetteGeo, crystalWireMat)
    const rim = new THREE.Mesh(
      trackGeo(new THREE.BoxGeometry(1.88, 0.06, 0.68)),
      i % 2 === 0 ? cyanEmissive : amberEmissive,
    )
    rim.position.y = 0.2
    cassette.add(hull, wire, rim)

    addBadge(
      cassette,
      `0${i + 1} · ${cat.name.slice(0, 16).toUpperCase()}`,
      cat.items.slice(0, 3).join(' · '),
      [0, 0, 0.34],
      [1.75, 0.36],
      i % 2 === 0 ? '#45d7ff' : '#ffa65c',
      0.18,
    )

    skillsStation.add(cassette)
    skillRings.push(cassette)
  })

  // ============================================================================
  // STATION 06 (Z = -108) — CHANNEL · DIRECT UPLINK BEACON
  // ============================================================================
  const contactStation = new THREE.Group()
  contactStation.position.set(0, 1.5, -108)
  group.add(contactStation)

  const beaconCrystal = new THREE.Mesh(
    trackGeo(new THREE.OctahedronGeometry(1.15, 1)),
    crystalShellMat,
  )
  const beaconWire = new THREE.Mesh(
    trackGeo(new THREE.OctahedronGeometry(1.2, 1)),
    crystalWireMat,
  )
  contactStation.add(beaconCrystal, beaconWire)

  const beaconRings: THREE.Mesh[] = []
  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(
      trackGeo(new THREE.TorusGeometry(1.7 + i * 0.48, 0.028, 10, 48)),
      i === 1 ? amberEmissive : cyanEmissive,
    )
    contactStation.add(ring)
    beaconRings.push(ring)
  }

  addBadge(
    contactStation,
    '06 // SIGNAL LOCKED',
    'DIRECT UPLINK · READY TO BUILD',
    [0, 2.95, 0],
    [2.85, 0.8],
    '#45d7ff',
    0,
  )

  const dispose = () => {
    geometries.forEach((g) => g.dispose())
    materials.forEach((m) => m.dispose())
    textures.forEach((t) => t.dispose())
  }

  return {
    group,
    signal,
    signalPath,
    conduitRings,
    particleField,
    originCore,
    originRings,
    shellPanels,
    engineeringLid,
    computeBlades,
    systemPorts,
    cyanEmissive,
    amberEmissive,
    dimPortMat,
    inputFrames,
    neuralLayers,
    dataPackets,
    nexusCore,
    mapNodes,
    archiveCards,
    matrixCore,
    skillRings,
    beaconCrystal,
    beaconRings,
    dispose,
  }
}
