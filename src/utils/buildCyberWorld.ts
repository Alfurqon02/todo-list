import * as THREE from 'three'

import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'

import { experiences, skills } from '@/data/portfolioData'

import { signalPointAt } from '@/utils/cyberStory'



/** A continuous, explorable machine. Districts share the same floor and signal. */

export function buildCyberWorld() {

  const group = new THREE.Group()

  const shellPanels: THREE.Group[] = []

  const inputFrames: THREE.Group[] = []

  const neuralLayers: THREE.Group[] = []

  const mapNodes: THREE.Group[] = []

  const archiveCards: THREE.Group[] = []

  const skillRings: THREE.Group[] = []

  const computeBlades: THREE.Group[] = []

  const dataPackets: THREE.Mesh[] = []

  const textures: THREE.Texture[] = []

  const metal = new THREE.MeshStandardMaterial({ color: 0x223843, roughness: 0.32, metalness: 0.8 })

  const dark = new THREE.MeshStandardMaterial({ color: 0x08121b, roughness: 0.42, metalness: 0.65 })

  const ceramic = new THREE.MeshStandardMaterial({ color: 0x79919d, roughness: 0.3, metalness: 0.55 })

  const cyan = new THREE.MeshBasicMaterial({ color: 0x38d9ff, toneMapped: false })

  const amber = new THREE.MeshBasicMaterial({ color: 0xffa65c, toneMapped: false })

  const glass = new THREE.MeshPhysicalMaterial({ color: 0x1a6076, metalness: 0.5, roughness: 0.15, transparent: true, opacity: 0.2, depthWrite: false })

  const unitBox = new THREE.BoxGeometry(1, 1, 1)

  const rounded = new RoundedBoxGeometry(1, 1, 1, 1, 0.06)

  type Box = { p: number[]; s: number[] }

  const batches = new Map<THREE.Material, Box[]>()

  const box = (mat: THREE.Material, p: number[], s: number[]) => {

    const list = batches.get(mat) ?? []

    list.push({ p, s })

    batches.set(mat, list)

  }

  const movingBox = (parent: THREE.Group, mat: THREE.Material, p: number[], s: number[], round = false) => {

    const mesh = new THREE.Mesh(round ? rounded : unitBox, mat)

    mesh.position.set(p[0], p[1], p[2])

    mesh.scale.set(s[0], s[1], s[2])

    parent.add(mesh)

    return mesh

  }

  const lines: number[] = []

  const line = (...points: number[][]) => {

    for (let i = 0; i < points.length - 1; i++) lines.push(...points[i], ...points[i + 1])

  }

  function label(parent: THREE.Group, title: string, subtitle: string, p: number[], w = 2.5, h = 0.68) {

    const canvas = document.createElement('canvas')

    canvas.width = 768

    canvas.height = 192

    const ctx = canvas.getContext('2d')!

    ctx.fillStyle = '#07151f'

    ctx.fillRect(0, 0, 768, 192)

    ctx.fillStyle = '#40d8ff'

    ctx.fillRect(0, 0, 5, 192)

    ctx.font = '500 32px monospace'

    ctx.fillText(title.toUpperCase().slice(0, 34), 30, 73)

    ctx.fillStyle = '#8ba4b2'

    ctx.font = '25px monospace'

    ctx.fillText(subtitle.slice(0, 44), 30, 135)

    const texture = new THREE.CanvasTexture(canvas)

    texture.colorSpace = THREE.SRGBColorSpace

    textures.push(texture)

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide }))

    mesh.position.set(p[0], p[1], p[2])

    parent.add(mesh)

    return mesh

  }



  // Continuous foundation, segmented enough to read as an engineered assembly.

  for (let z = 2; z > -119; z -= 4) {

    box(dark, [0, -1.75, z], [10, 0.38, 3.94])

    box(metal, [-4.8, -1.42, z], [0.16, 0.28, 3.88])

    box(metal, [4.8, -1.42, z], [0.16, 0.28, 3.88])

    line([-4.5, -1.535, z + 1.9], [-4.5, -1.535, z - 1.9])

    line([4.5, -1.535, z + 1.9], [4.5, -1.535, z - 1.9])

    for (const x of [-3.9, 3.9]) box(ceramic, [x, -1.52, z + 1.3], [0.16, 0.05, 0.16])

  }



  // 00. A designed processor housing: its four lid panels physically open.

  box(metal, [0, -1.25, 0], [7.1, 0.55, 7.1])

  box(ceramic, [0, -0.92, 0], [5.7, 0.15, 5.7])

  box(dark, [0, -0.69, 0], [3.1, 0.3, 3.1])

  box(cyan, [0, -0.51, 0], [2.75, 0.025, 2.75])

  box(dark, [0, -0.48, 0], [2.5, 0.08, 2.5])

  const coreLabel = label(group, 'FURQON', 'SOFTWARE / INTELLIGENCE', [0, -0.425, 0], 2.35, 0.7)

  coreLabel.rotation.x = -Math.PI / 2

  for (const x of [-1, 1]) for (const z of [-1, 1]) {

    const panel = new THREE.Group()

    panel.position.set(x * 1.88, 0.1, z * 1.88)

    panel.userData.direction = [x, z]

    movingBox(panel, metal, [0, 0, 0], [3.42, 0.44, 3.42], true)

    movingBox(panel, dark, [0, 0.235, 0], [2.83, 0.035, 2.83])

    movingBox(panel, ceramic, [-0.87, 0.29, 0], [0.18, 0.07, 2.3])

    for (let i = 0; i < 6; i++) movingBox(panel, dark, [0.1 + i * 0.19, 0.29, 0], [0.09, 0.08, 2.15])

    movingBox(panel, cyan, [0, 0.24, z * 1.48], [2.3, 0.035, 0.025])

    group.add(panel)

    shellPanels.push(panel)

  }

  for (let i = 0; i < 22; i++) {

    const t = -2.8 + i * 0.267

    for (const sign of [-1, 1]) {

      box(ceramic, [sign * 3.6, -0.99, t], [0.52, 0.13, 0.105])

      box(ceramic, [t, -0.99, sign * 3.6], [0.105, 0.13, 0.52])

      line([sign * 3.6, -1.53, t], [sign * 4.3, -1.53, t], [sign * 4.3, -1.53, -6])

    }

  }



  // 01. An exploded software appliance: interface, services, persistence.

  // Purpose-built geometry keeps the machined edge radius consistent at every size.

  const engineering = new THREE.Group()

  engineering.position.set(-2.65, 0, -16)

  group.add(engineering)

  const alloy = new THREE.MeshStandardMaterial({ color: 0x8da8b3, metalness: 0.85, roughness: 0.26 })

  const graphite = new THREE.MeshStandardMaterial({ color: 0x142129, metalness: 0.65, roughness: 0.34 })

  const boardMaterial = new THREE.MeshStandardMaterial({ color: 0x0c353d, metalness: 0.45, roughness: 0.38 })

  const copper = new THREE.MeshStandardMaterial({ color: 0xb9814f, metalness: 0.8, roughness: 0.3 })

  function precisionBox(parent: THREE.Group, mat: THREE.Material, pos: number[], size: number[], radius = 0.045) {

    const mesh = new THREE.Mesh(new RoundedBoxGeometry(size[0], size[1], size[2], 3, Math.min(radius, Math.min(...size) / 3)), mat)

    mesh.position.fromArray(pos)

    parent.add(mesh)

    return mesh

  }

  precisionBox(engineering, graphite, [0, -1.23, 0], [3.45, 0.52, 3.9], 0.12)

  precisionBox(engineering, alloy, [0, -0.94, 0], [3.25, 0.09, 3.65])

  precisionBox(engineering, cyan, [0, -1.18, 1.958], [2.45, 0.025, 0.018])

  label(engineering, 'MEIWA / SYSTEMS', 'INVENTORY · LEAVE · INTERNAL PORTAL', [0, -1.3, 1.965], 2.85, 0.32)

  for (const x of [-1.48, 1.48]) for (const z of [-1.65, 1.65]) {

    precisionBox(engineering, alloy, [x, 0.26, z], [0.065, 2.35, 0.065], 0.015)

    const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.1, 20), graphite)

    foot.position.set(x, -1.52, z)

    engineering.add(foot)

  }

  const layerNames = ['PERSISTENCE', 'APPLICATION SERVICES', 'INTERFACE']

  const layerNotes = ['RECORDS / DATA INTEGRITY', 'BUSINESS LOGIC / WORKFLOWS', 'INVENTORY / LEAVE / PORTAL']

  for (let layer = 0; layer < 3; layer++) {

    const tray = new THREE.Group()

    tray.position.y = -0.67 + layer * 0.64

    tray.userData.restY = tray.position.y

    tray.userData.restZ = 0

    engineering.add(tray)

    computeBlades.push(tray)

    precisionBox(tray, graphite, [0, 0, 0], [3.08, 0.16, 3.38])

    precisionBox(tray, boardMaterial, [0, 0.105, 0], [2.87, 0.055, 3.15])

    // A central processor, milled heatsink, memory banks and copper traces.

    precisionBox(tray, alloy, [-0.25, 0.21, -0.15], [0.95, 0.16, 1.05])

    for (let fin = 0; fin < 9; fin++) {

      precisionBox(tray, graphite, [-0.65 + fin * 0.1, 0.34, -0.15], [0.045, 0.17, 0.88], 0.01)

    }

    for (let ram = 0; ram < 3; ram++) {

      precisionBox(tray, dark, [0.85, 0.22, -0.85 + ram * 0.66], [0.35, 0.16, 0.48])

      for (let pin = 0; pin < 5; pin++) precisionBox(tray, copper, [0.64, 0.17, -1.02 + ram * 0.66 + pin * 0.08], [0.075, 0.025, 0.032], 0.005)

    }

    for (let trace = 0; trace < 6; trace++) {

      const z = -1.23 + trace * 0.43

      precisionBox(tray, copper, [-1.05, 0.142, z], [0.45, 0.008, 0.014], 0.002)

      precisionBox(tray, copper, [-0.83, 0.142, z + 0.08], [0.014, 0.008, 0.17], 0.002)

    }

    for (const x of [-1.33, 1.33]) for (const z of [-1.42, 1.42]) {

      const screw = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.035, 12), alloy)

      screw.position.set(x, 0.16, z)

      tray.add(screw)

    }

    precisionBox(tray, alloy, [0, 0.05, 1.72], [3.12, 0.29, 0.08])

    label(tray, layerNames[layer], layerNotes[layer], [-0.25, 0.06, 1.767], 2.24, 0.23)

    for (let led = 0; led < 3; led++) precisionBox(tray, led === 2 ? amber : cyan, [1.02 + led * 0.12, 0.07, 1.77], [0.035, 0.045, 0.012], 0.003)

  }

  const engineeringLid = new THREE.Group()

  engineeringLid.position.y = 1.23

  engineering.add(engineeringLid)

  precisionBox(engineeringLid, graphite, [0, 0, 0], [3.45, 0.18, 3.9], 0.065)

  precisionBox(engineeringLid, alloy, [0, 0.11, 0], [3.17, 0.04, 3.61])

  precisionBox(engineeringLid, dark, [0, 0.145, 0], [2.9, 0.035, 3.3])

  for (let vent = 0; vent < 13; vent++) precisionBox(engineeringLid, graphite, [-1.15 + vent * 0.19, 0.17, -0.4], [0.065, 0.03, 1.8], 0.008)

  const lidMark = label(engineeringLid, 'ENGINEERED TO WORK', '01 / SOFTWARE SYSTEMS', [0, 0.17, 1.05], 2.55, 0.45)

  lidMark.rotation.x = -Math.PI / 2

  // A smaller network endpoint balances the assembly while leaving the signal lane open.

  const endpoint = new THREE.Group()

  endpoint.position.set(3.2, -0.5, -17.5)

  group.add(endpoint)

  precisionBox(endpoint, graphite, [0, 0, 0], [1.45, 1.85, 2.2], 0.09)

  precisionBox(endpoint, alloy, [0, 0, 1.12], [1.26, 1.62, 0.06])

  for (let port = 0; port < 4; port++) {

    precisionBox(endpoint, dark, [0, -0.47 + port * 0.31, 1.17], [0.82, 0.17, 0.07])

    precisionBox(endpoint, cyan, [0.46, -0.47 + port * 0.31, 1.215], [0.045, 0.045, 0.02])

  }

  label(endpoint, 'NETWORK', 'CONNECTED / ONLINE', [0, 1.16, 0], 1.6, 0.4)

  for (const z of [-15, -17]) {

    line([-1, -1.5, z], [0, -1.5, z], [3.2, -1.5, z], [3.2, -1.5, -17.5])

  }



  // Keep the flight corridor open: floor traces connect the rooms without

  // overhead crossbars that can intersect the camera's changing elevation.



  // 02. Two inputs feed persistent feature layers and a language decoder.

  for (const side of [-1, 1]) {

    const input = new THREE.Group()

    input.position.set(side * 3.1, 0.2, -31)

    movingBox(input, metal, [0, 0, 0], [2, 2.9, 0.22], true)

    movingBox(input, dark, [0, 0, 0.13], [1.82, 2.68, 0.03])

    for (let i = 0; i < 9; i++) {

      movingBox(input, i % 3 === 0 ? cyan : ceramic, [0, -1 + i * 0.235, 0.16], [1.45 - Math.sin(i * 0.8) * 0.35, 0.04, 0.025])

    }

    label(input, 'INPUT', 'IMAGE DATA', [0, 1.78, 0], 2.1, 0.52)

    group.add(input)

    inputFrames.push(input)

    line([side * 3.1, -1.5, -31], [side * 1.8, -1.5, -33], [side * 1.8, -1.5, -41])

  }

  for (let layer = 0; layer < 5; layer++) {

    const plane = new THREE.Group()

    plane.position.z = -34 - layer * 1.65

    movingBox(plane, metal, [-1.8, 0.45, 0], [0.06, 3.8, 0.12])

    movingBox(plane, metal, [1.8, 0.45, 0], [0.06, 3.8, 0.12])

    movingBox(plane, cyan, [0, 2.35, 0], [3.65, 0.018, 0.12])

    for (const side of [-1, 1]) for (let n = 0; n < 5; n++) {

      movingBox(plane, n % 2 ? ceramic : cyan, [side * 1.4, -0.8 + n * 0.57, 0], [0.13, 0.13, 0.13])

      if (layer < 4) line([side * 1.4, -0.8 + n * 0.57, plane.position.z], [side * 1.4, -0.8 + ((n + 2) % 5) * 0.57, plane.position.z - 1.65])

    }

    group.add(plane)

    neuralLayers.push(plane)

  }

  label(group, 'DENSENET → LSTM', 'FEATURES BECOME LANGUAGE', [0, 3, -38], 3.8, 0.95)

  for (let i = 0; i < 32; i++) {

    const packet = new THREE.Mesh(new THREE.IcosahedronGeometry(0.075, 0), i % 4 === 0 ? amber : cyan)

    group.add(packet)

    dataPackets.push(packet)

  }



  // 03. Connected locations, intentionally a network rather than a geographic map.

  const hubs = [ { x: -3.2, z: -53, title: 'INDONESIA', sub: 'FOUNDATIONS' }, { x: -3.2, z: -58, title: 'JAPAN', sub: 'ENGINEERING' }, { x: 3.2, z: -53, title: 'TAIWAN', sub: 'SECURITY' } ]

  for (const hub of hubs) {

    const node = new THREE.Group()

    node.position.set(hub.x, -0.9, hub.z)

    movingBox(node, metal, [0, 0, 0], [1.7, 0.6, 1.7], true)

    movingBox(node, cyan, [0, 0.33, 0], [1.5, 0.035, 1.5])

    movingBox(node, dark, [0, 0.4, 0], [1.3, 0.1, 1.3])

    movingBox(node, ceramic, [0, 1, 0], [0.06, 1.1, 0.06])

    label(node, hub.title, hub.sub, [0, 1.7, 0], 2.25, 0.58)

    group.add(node)

    mapNodes.push(node)

    line([hub.x, -1.5, hub.z], [0, -1.5, -55])

  }

  line([-3.2, -1.51, -53], [-3.2, -1.51, -58], [3.2, -1.51, -53])



  // 04. Eleven cartridges correspond one-to-one to the actual career record.

  experiences.forEach((role, i) => {

    const side = i % 2 ? 1 : -1

    const cartridge = new THREE.Group()

    cartridge.position.set(side * 3.35, 0.25, -69 - Math.floor(i / 2) * 2.25)

    cartridge.userData.restX = cartridge.position.x

    movingBox(cartridge, metal, [0, 0, 0], [1.75, 2.9, 1.7], true)

    movingBox(cartridge, dark, [0, 0, 0.88], [1.6, 2.7, 0.045])

    movingBox(cartridge, cyan, [-0.67, 0, 0.92], [0.025, 2.42, 0.02])

    label(cartridge, `${String(i + 1).padStart(2, '0')} / ${role.company}`, role.period, [0, 0.75, 0.925], 1.46, 0.42)

    for (let k = 0; k < 6; k++) movingBox(cartridge, ceramic, [0.1, 0.15 - k * 0.18, 0.93], [1.03, 0.055, 0.02])

    group.add(cartridge)

    archiveCards.push(cartridge)

  })



  // 05. Tool cassettes attach to the same central bus as the career archive.

  skills.forEach((skill, i) => {

    const x = i % 2 ? 3.1 : -3.1, z = -91 - Math.floor(i / 2) * 3.1

    const cassette = new THREE.Group()

    cassette.position.set(x, 0.1, z)

    cassette.userData.restX = x

    cassette.userData.restZ = z

    movingBox(cassette, metal, [0, 0, 0], [2.15, 2.45, 0.65], true)

    movingBox(cassette, glass, [0, 0, 0.38], [1.95, 2.2, 0.035])

    for (let n = 0; n < 9; n++) {

      movingBox(cassette, n === i ? amber : ceramic, [((n % 3) - 1) * 0.5, (Math.floor(n / 3) - 1) * 0.45, 0.39], [0.27, 0.2, 0.1])

    }

    label(cassette, skill.name, skill.items.slice(0, 2).join(' / '), [0, 1.7, 0], 2.4, 0.6)

    group.add(cassette)

    skillRings.push(cassette)

    line([x, -1.5, z], [0, -1.5, z])

  })



  // 06. The signal arrives at a real communications endpoint.

  const terminal = new THREE.Group()

  terminal.position.set(0, 0, -112)

  movingBox(terminal, metal, [0, -0.9, 0], [3.6, 1.2, 2.3], true)

  movingBox(terminal, ceramic, [0, -0.27, 0.1], [3.8, 0.13, 2.5], true)

  movingBox(terminal, metal, [0, 0.9, -0.55], [3.9, 2.3, 0.28], true)

  movingBox(terminal, cyan, [0, 0.9, -0.39], [3.64, 2.07, 0.025])

  movingBox(terminal, dark, [0, 0.9, -0.36], [3.5, 1.94, 0.025])

  label(terminal, 'CONNECTION OPEN', 'LET’S BUILD SOMETHING THAT WORKS.', [0, 1.05, -0.33], 3.3, 0.95)

  movingBox(terminal, amber, [1.5, -0.17, 0.9], [0.18, 0.035, 0.18])

  for (let row = 0; row < 3; row++) for (let col = 0; col < 10; col++) {

    box(ceramic, [-1.1 + col * 0.23, -0.16, -111.9 + row * 0.23], [0.18, 0.075, 0.17])

  }

  group.add(terminal)



  class SignalRoute extends THREE.Curve<THREE.Vector3> {
    constructor() { super() }

    getPoint(t: number, target = new THREE.Vector3()) { return target.fromArray(signalPointAt(t)) }

  }

  const signalPath = new SignalRoute()

  const route = new THREE.Mesh(new THREE.TubeGeometry(signalPath, 350, 0.027, 5, false), cyan)

  group.add(route)

  const signal = new THREE.Group()

  movingBox(signal, new THREE.MeshBasicMaterial({ color: 0xecfbff, toneMapped: false }), [0, 0.15, 0], [0.28, 0.28, 0.65], true)

  const signalLight = new THREE.PointLight(0x36dfff, 4, 5, 2)

  signal.add(signalLight)

  group.add(signal)



  const dummy = new THREE.Object3D()

  batches.forEach((items, mat) => {

    const instanced = new THREE.InstancedMesh(mat === metal || mat === ceramic ? rounded : unitBox, mat, items.length)

    items.forEach((item, i) => {

      dummy.position.set(item.p[0], item.p[1], item.p[2])

      dummy.scale.set(item.s[0], item.s[1], item.s[2])

      dummy.updateMatrix()

      instanced.setMatrixAt(i, dummy.matrix)

    })

    group.add(instanced)

  })

  group.add(new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(lines, 3)), new THREE.LineBasicMaterial({ color: 0x2c829e, transparent: true, opacity: 0.5 })))



  function dispose() {

    const geometries = new Set<THREE.BufferGeometry>()

    const materials = new Set<THREE.Material>()

    group.traverse((object) => {

      const objectMesh = object as THREE.Mesh

      if (objectMesh.geometry) geometries.add(objectMesh.geometry)

      if (objectMesh.material) (Array.isArray(objectMesh.material) ? objectMesh.material : [objectMesh.material]).forEach((m) => materials.add(m))

    })

    geometries.forEach((g) => g.dispose())

    materials.forEach((m) => m.dispose())

    textures.forEach((t) => t.dispose())

  }

  return { group, shellPanels, signalPath, signal, inputFrames, neuralLayers, mapNodes, archiveCards, skillRings, computeBlades, engineeringLid, dataPackets, terminal, dispose }

}

