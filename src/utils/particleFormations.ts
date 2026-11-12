// Deterministic point-cloud formations for the 3D particle journey.
export type Formation = { positions: Float32Array; accent: Float32Array; anchors: [number, number, number][] }

type P = { x: number; y: number; z: number; a: number }

function rng(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function finish(points: P[], count: number, rand: () => number, anchors: [number, number, number][] = []): Formation {
  const positions = new Float32Array(count * 3)
  const accent = new Float32Array(count)
  // Shuffle so any prefix is spatially representative before padding to exact count.
  for (let i = points.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[points[i], points[j]] = [points[j], points[i]]
  }
  for (let i = 0; i < count; i++) {
    const src = points[i < points.length ? i : Math.floor(rand() * points.length)]
    const jitter = i < points.length ? 0 : 0.02
    positions[i * 3] = src.x + (rand() - 0.5) * jitter
    positions[i * 3 + 1] = src.y + (rand() - 0.5) * jitter
    positions[i * 3 + 2] = src.z + (rand() - 0.5) * jitter
    accent[i] = src.a
  }
  return { positions, accent, anchors }
}

function line(out: P[], a: number[], b: number[], n: number, accent = 0, spread = 0.01, rand = Math.random) {
  for (let i = 0; i < n; i++) {
    const t = rand()
    out.push({
      x: a[0] + (b[0] - a[0]) * t + (rand() - 0.5) * spread,
      y: a[1] + (b[1] - a[1]) * t + (rand() - 0.5) * spread,
      z: a[2] + (b[2] - a[2]) * t + (rand() - 0.5) * spread,
      a: accent,
    })
  }
}

function ball(out: P[], c: number[], r: number, n: number, accent = 0, rand = Math.random, shell = false) {
  for (let i = 0; i < n; i++) {
    const u = rand() * 2 - 1
    const th = rand() * Math.PI * 2
    const rr = shell ? r : r * Math.cbrt(rand())
    const s = Math.sqrt(1 - u * u)
    out.push({ x: c[0] + rr * s * Math.cos(th), y: c[1] + rr * u, z: c[2] + rr * s * Math.sin(th), a: accent })
  }
}

// 00: Origin signal core wrapped in a harmonic shell and three orbits.
function core(count: number): Formation {
  const rand = rng(11)
  const pts: P[] = []
  const shell = Math.floor(count * 0.52)
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < shell; i++) {
    const y = 1 - (i / (shell - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const th = golden * i
    const n = 1.55 + 0.12 * Math.sin(th * 3 + y * 6) + 0.06 * Math.sin(th * 9 - y * 4)
    pts.push({ x: Math.cos(th) * r * n, y: y * n, z: Math.sin(th) * r * n, a: 0.1 })
  }
  ball(pts, [0, 0, 0], 0.55, Math.floor(count * 0.16), 1, rand)
  const rings = [
    [2.25, 0.35, 0.1],
    [2.6, -0.5, 0.9],
    [2.0, 1.1, -0.6],
  ]
  for (const [radius, tiltX, tiltZ] of rings) {
    const n = Math.floor(count * 0.1)
    for (let i = 0; i < n; i++) {
      const th = rand() * Math.PI * 2
      const rr = radius + (rand() - 0.5) * 0.05
      let x = Math.cos(th) * rr
      let y = 0
      let z = Math.sin(th) * rr
      const cy = Math.cos(tiltX)
      const sy = Math.sin(tiltX)
      ;[y, z] = [y * cy - z * sy, y * sy + z * cy]
      const cz = Math.cos(tiltZ)
      const sz = Math.sin(tiltZ)
      ;[x, y] = [x * cz - y * sz, x * sz + y * cz]
      pts.push({ x, y, z, a: rand() < 0.04 ? 1 : 0.35 })
    }
  }
  return finish(pts, count, rand)
}

// 01: Engineering isometric processor with die, pins, and traces.
function chip(count: number): Formation {
  const rand = rng(23)
  const pts: P[] = []
  const flat: P[] = []
  for (let i = 0; i < count * 0.22; i++) flat.push({ x: (rand() - 0.5) * 3, y: (rand() - 0.5) * 3, z: 0, a: 0.05 })
  for (let i = 0; i < count * 0.18; i++) {
    flat.push({ x: (rand() - 0.5) * 1.1, y: (rand() - 0.5) * 1.1, z: 0.12 + rand() * 0.06, a: 0.9 })
  }
  for (let k = -4; k <= 4; k++) {
    line(flat, [-0.55, k * 0.13, 0.19], [0.55, k * 0.13, 0.19], 40, 1, 0.004, rand)
    line(flat, [k * 0.13, -0.55, 0.19], [k * 0.13, 0.55, 0.19], 40, 1, 0.004, rand)
  }
  for (let k = 0; k < 16; k++) {
    const o = -1.35 + k * 0.18
    for (const [a, b] of [
      [[o, 1.5, 0], [o, 1.82, 0]],
      [[o, -1.5, 0], [o, -1.82, 0]],
      [[1.5, o, 0], [1.82, o, 0]],
      [[-1.5, o, 0], [-1.82, o, 0]],
    ]) {
      line(flat, a, b, 18, 0.5, 0.01, rand)
    }
  }
  for (let k = 0; k < 28; k++) {
    const side = k % 4
    const o = -1.2 + rand() * 2.4
    const start = side === 0 ? [o * 0.4, 0.55] : side === 1 ? [o * 0.4, -0.55] : side === 2 ? [0.55, o * 0.4] : [-0.55, o * 0.4]
    const end = side === 0 ? [o, 1.5] : side === 1 ? [o, -1.5] : side === 2 ? [1.5, o] : [-1.5, o]
    const mid = side < 2 ? [start[0], (start[1] + end[1]) / 2] : [(start[0] + end[0]) / 2, start[1]]
    const mid2 = side < 2 ? [end[0], mid[1]] : [mid[0], end[1]]
    line(flat, [start[0], start[1], 0.02], [mid[0], mid[1], 0.02], 30, 0.45, 0.006, rand)
    line(flat, [mid[0], mid[1], 0.02], [mid2[0], mid2[1], 0.02], 30, 0.45, 0.006, rand)
    line(flat, [mid2[0], mid2[1], 0.02], [end[0], end[1], 0.02], 30, 0.45, 0.006, rand)
  }
  const ax = -0.95
  const az = 0.62
  for (const p of flat) {
    let { x, y, z } = p
    const cz = Math.cos(az)
    const sz = Math.sin(az)
    ;[x, y] = [x * cz - y * sz, x * sz + y * cz]
    const cx = Math.cos(ax)
    const sx = Math.sin(ax)
    ;[y, z] = [y * cx - z * sx, y * sx + z * cx]
    pts.push({ x: x * 1.05, y: y * 1.05, z, a: p.a })
  }
  return finish(pts, count, rand)
}

// 02: Intelligence dual-view plates feeding hidden layers and caption tokens.
function neural(count: number): Formation {
  const rand = rng(37)
  const pts: P[] = []
  const layers: number[][][] = []
  const xs = [-2.3, -1.1, 0, 1.1, 2.3]
  layers.push([
    [xs[0], 0.62, 0],
    [xs[0], -0.62, 0],
  ])
  for (const [, y] of layers[0]) {
    for (let i = 0; i < count * 0.07; i++) {
      pts.push({
        x: xs[0] + (rand() - 0.5) * 0.08,
        y: y + (rand() - 0.5) * 0.9,
        z: (rand() - 0.5) * 0.9,
        a: 0.25 + 0.5 * Math.abs(Math.sin((y + rand()) * 9)),
      })
    }
  }
  const sizes = [7, 6, 5]
  sizes.forEach((n, li) => {
    const layer: number[][] = []
    for (let k = 0; k < n; k++) {
      const t = n === 1 ? 0 : k / (n - 1) - 0.5
      layer.push([xs[li + 1], t * 2.6, Math.sin(k * 1.7) * 0.4])
    }
    layers.push(layer)
    for (const c of layer) ball(pts, c, 0.12, Math.floor(count * 0.008), 1, rand)
  })
  const tokens: number[][] = []
  for (let k = 0; k < 5; k++) tokens.push([xs[4] + 0.15, 0.9 - k * 0.45, 0])
  layers.push(tokens)
  for (const c of tokens) {
    for (let i = 0; i < count * 0.012; i++) {
      pts.push({
        x: c[0] + (rand() - 0.5) * 0.7,
        y: c[1] + (rand() - 0.5) * 0.12,
        z: c[2] + (rand() - 0.5) * 0.05,
        a: 0.8,
      })
    }
  }
  const edgeBudget = count - pts.length
  const pairs: [number[], number[]][] = []
  for (let l = 0; l < layers.length - 1; l++) {
    for (const a of layers[l]) for (const b of layers[l + 1]) pairs.push([a, b])
  }
  const per = Math.max(4, Math.floor(edgeBudget / pairs.length))
  for (const [a, b] of pairs) line(pts, [a[0] + 0.12, a[1], a[2]], [b[0] - 0.12, b[1], b[2]], per, 0.15, 0.01, rand)
  return finish(pts, count, rand)
}

const LOCATIONS: { code: string; lat: number; lon: number }[] = [
  { code: 'ID', lat: -7.3, lon: 110.4 },
  { code: 'TW', lat: 24.0, lon: 121.0 },
  { code: 'JP', lat: 36.2, lon: 138.3 },
]

function latLon(lat: number, lon: number, r: number, centerLon = 122, tilt = -0.32): [number, number, number] {
  const phi = ((90 - lat) * Math.PI) / 180
  const th = ((lon - centerLon) * Math.PI) / 180
  const x = r * Math.sin(phi) * Math.sin(th)
  let y = r * Math.cos(phi)
  let z = r * Math.sin(phi) * Math.cos(th)
  const c = Math.cos(tilt)
  const s = Math.sin(tilt)
  ;[y, z] = [y * c - z * s, y * s + z * c]
  return [x, y, z]
}

// 03: Perspective globe facing Asia with Indonesia, Taiwan, and Japan linked.
function globe(count: number): Formation {
  const rand = rng(41)
  const pts: P[] = []
  const R = 1.9
  for (let lat = -60; lat <= 60; lat += 20) {
    for (let i = 0; i < count * 0.018; i++) {
      const lon = rand() * 360
      const [x, y, z] = latLon(lat, lon, R)
      pts.push({ x, y, z, a: 0.12 })
    }
  }
  for (let lon = 0; lon < 360; lon += 20) {
    for (let i = 0; i < count * 0.011; i++) {
      const lat = rand() * 180 - 90
      const [x, y, z] = latLon(lat, lon, R)
      pts.push({ x, y, z, a: 0.12 })
    }
  }
  for (let i = 0; i < count * 0.12; i++) {
    const u = rand() * 2 - 1
    const lon = rand() * 360
    const [x, y, z] = latLon((Math.asin(u) * 180) / Math.PI, lon, R * (0.99 + rand() * 0.02))
    pts.push({ x, y, z, a: 0.05 })
  }
  const anchors: [number, number, number][] = []
  for (const l of LOCATIONS) {
    const c = latLon(l.lat, l.lon, R)
    anchors.push(c)
    ball(pts, c, 0.08, Math.floor(count * 0.012), 1, rand)
  }
  const arcs: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 2],
  ]
  for (const [a, b] of arcs) {
    const A = LOCATIONS[a]
    const B = LOCATIONS[b]
    const n = Math.floor(count * 0.035)
    for (let i = 0; i < n; i++) {
      const t = rand()
      const lat = A.lat + (B.lat - A.lat) * t
      const lon = A.lon + (B.lon - A.lon) * t
      const lift = 1 + 0.18 * Math.sin(Math.PI * t)
      const [x, y, z] = latLon(lat, lon, R * lift)
      pts.push({ x, y, z, a: 0.55 })
    }
  }
  return finish(pts, count, rand, anchors)
}

// 04: Experience rising double helix with one anchor node per role.
function helix(count: number, roles: number): Formation {
  const rand = rng(53)
  const pts: P[] = []
  const H = 4.2
  const turns = 2.25
  const R = 1.15
  const at = (t: number, phase: number): [number, number, number] => {
    const a = t * turns * Math.PI * 2 + phase
    return [Math.cos(a) * R, -H / 2 + t * H, Math.sin(a) * R]
  }
  for (let i = 0; i < count * 0.5; i++) {
    const t = rand()
    const s = rand() < 0.5 ? 0 : Math.PI
    const [x, y, z] = at(t, s)
    pts.push({ x: x + (rand() - 0.5) * 0.05, y, z: z + (rand() - 0.5) * 0.05, a: 0.2 })
  }
  for (let k = 0; k < 34; k++) {
    const t = k / 33
    line(pts, at(t, 0), at(t, Math.PI), Math.floor(count * 0.004), 0.08, 0.01, rand)
  }
  const anchors: [number, number, number][] = []
  for (let k = 0; k < roles; k++) {
    const t = 1 - (k + 0.5) / roles
    const c = at(t, 0)
    anchors.push(c)
    ball(pts, c, 0.1, Math.floor(count * 0.012), 1, rand)
  }
  return finish(pts, count, rand, anchors)
}

// 05: Capabilities six constellations, one per skill category.
function constellations(count: number, groups: number[]): Formation {
  const rand = rng(67)
  const pts: P[] = []
  const anchors: [number, number, number][] = []
  groups.forEach((items, g) => {
    const ang = (g / groups.length) * Math.PI * 2 + Math.PI / 6
    const c: [number, number, number] = [Math.cos(ang) * 1.9, Math.sin(ang) * 1.55, Math.sin(ang * 2) * 0.4]
    anchors.push(c)
    ball(pts, c, 0.55, Math.floor(count * 0.06), 0.06, rand)
    const stars: number[][] = []
    for (let k = 0; k < items; k++) {
      const a = (k / items) * Math.PI * 2 + g
      const r = 0.28 + (k % 2) * 0.16
      stars.push([c[0] + Math.cos(a) * r, c[1] + Math.sin(a) * r, c[2] + Math.sin(a * 3) * 0.12])
    }
    for (const s of stars) ball(pts, s, 0.045, Math.floor(count * 0.004), 1, rand)
    for (let k = 0; k < stars.length; k++) {
      line(pts, stars[k], stars[(k + 1) % stars.length], Math.floor(count * 0.003), 0.4, 0.006, rand)
    }
    line(pts, [0, 0, 0], c, Math.floor(count * 0.004), 0.12, 0.01, rand)
  })
  ball(pts, [0, 0, 0], 0.22, Math.floor(count * 0.02), 0.9, rand)
  return finish(pts, count, rand, anchors)
}

// 06: Connection points sampled from rendered typography.
function text(count: number, label: string): Formation {
  const rand = rng(79)
  const pts: P[] = []
  const canvas = document.createElement('canvas')
  const W = 1400
  const Hh = 360
  canvas.width = W
  canvas.height = Hh
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, W, Hh)
  ctx.fillStyle = '#fff'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = '700 230px "Plus Jakarta Sans", "Segoe UI", Arial, sans-serif'
  ctx.fillText(label, W / 2, Hh / 2 + 8)
  const data = ctx.getImageData(0, 0, W, Hh).data
  const filled: [number, number][] = []
  for (let y = 0; y < Hh; y += 3) {
    for (let x = 0; x < W; x += 3) {
      if (data[(y * W + x) * 4] > 128) filled.push([x, y])
    }
  }
  const scale = 5.6 / W
  const textCount = Math.floor(count * 0.82)
  for (let i = 0; i < textCount && filled.length; i++) {
    const [x, y] = filled[Math.floor(rand() * filled.length)]
    pts.push({
      x: (x - W / 2) * scale + (rand() - 0.5) * 0.01,
      y: -(y - Hh / 2) * scale + (rand() - 0.5) * 0.01,
      z: (rand() - 0.5) * 0.12,
      a: 0.7,
    })
  }
  for (let i = 0; i < count * 0.18; i++) {
    const t = rand() * Math.PI * 2
    const r = 2.4 + rand() * 1.6
    pts.push({ x: Math.cos(t) * r * 1.25, y: Math.sin(t) * r * 0.45, z: -0.6 - rand() * 1.2, a: 0.04 })
  }
  return finish(pts, count, rand)
}

export function buildFormations(count: number, roles: number, skillGroups: number[]): Formation[] {
  return [
    core(count),
    chip(count),
    neural(count),
    globe(count),
    helix(count, roles),
    constellations(count, skillGroups),
    text(count, "LET'S TALK"),
  ]
}
