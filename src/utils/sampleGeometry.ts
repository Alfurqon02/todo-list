import * as THREE from 'three'

const vA = new THREE.Vector3()
const vB = new THREE.Vector3()
const vC = new THREE.Vector3()
const vD = new THREE.Vector3()
const vE = new THREE.Vector3()

// ─────────────────────────────────────────────────────────────
// GEOMETRY SAMPLING
//
// Turns a built artifact into a cloud of points lying on its own surface, so
// the morph is driven by the real shapes rather than by stand-in blobs.
// Budget is split evenly across the artifact's parts first and area-weighted
// only within a part, otherwise the solid cores would swallow every point and
// the thin rings and conduits — the bits that give each artifact its
// silhouette — would vanish from the cloud.
// ─────────────────────────────────────────────────────────────

export interface Prim {
  w: number
  /** 9 numbers for a triangle, 6 for a segment, 3 for a bare point. */
  p: number[]
}

export function collectPrims(obj: THREE.Object3D): Prim[] {
  const geo = (obj as THREE.Mesh).geometry as THREE.BufferGeometry | undefined
  const pos = geo?.attributes?.position as THREE.BufferAttribute | undefined
  if (!geo || !pos) return []

  const out: Prim[] = []
  const index = geo.index
  const m = obj.matrixWorld
  const at = (v: THREE.Vector3, i: number) => v.fromBufferAttribute(pos, i).applyMatrix4(m)
  const idx = (i: number) => (index ? index.getX(i) : i)

  if ((obj as THREE.Mesh).isMesh) {
    const n = index ? index.count : pos.count
    for (let i = 0; i + 2 < n; i += 3) {
      at(vA, idx(i))
      at(vB, idx(i + 1))
      at(vC, idx(i + 2))
      const area = vD.copy(vB).sub(vA).cross(vE.copy(vC).sub(vA)).length() * 0.5
      if (area > 1e-7) {
        out.push({ w: area, p: [vA.x, vA.y, vA.z, vB.x, vB.y, vB.z, vC.x, vC.y, vC.z] })
      }
    }
  } else if ((obj as THREE.Line).isLine) {
    const n = index ? index.count : pos.count
    const step = (obj as THREE.LineSegments).isLineSegments ? 2 : 1
    for (let i = 0; i + 1 < n; i += step) {
      at(vA, idx(i))
      at(vB, idx(i + 1))
      const len = vA.distanceTo(vB)
      if (len > 1e-5) out.push({ w: len, p: [vA.x, vA.y, vA.z, vB.x, vB.y, vB.z] })
    }
  } else if ((obj as THREE.Points).isPoints) {
    for (let i = 0; i < pos.count; i++) {
      at(vA, i)
      out.push({ w: 1, p: [vA.x, vA.y, vA.z] })
    }
  }

  return out
}

function samplePrim(prim: Prim, out: Float32Array, o: number) {
  const p = prim.p
  if (p.length === 9) {
    // Uniform barycentric point on the triangle.
    let u = Math.random()
    let v = Math.random()
    if (u + v > 1) {
      u = 1 - u
      v = 1 - v
    }
    const w = 1 - u - v
    out[o] = p[0] * w + p[3] * u + p[6] * v
    out[o + 1] = p[1] * w + p[4] * u + p[7] * v
    out[o + 2] = p[2] * w + p[5] * u + p[8] * v
  } else if (p.length === 6) {
    const u = Math.random()
    out[o] = p[0] + (p[3] - p[0]) * u
    out[o + 1] = p[1] + (p[4] - p[1]) * u
    out[o + 2] = p[2] + (p[5] - p[2]) * u
  } else {
    out[o] = p[0]
    out[o + 1] = p[1]
    out[o + 2] = p[2]
  }
}

export function samplePoints(root: THREE.Object3D, count: number): Float32Array {
  root.updateMatrixWorld(true)

  const parts: Prim[][] = []
  root.traverse((obj) => {
    if (obj === root) return
    const prims = collectPrims(obj)
    if (prims.length) parts.push(prims)
  })

  const out = new Float32Array(count * 3)
  if (!parts.length) {
    // No geometry (the closing station): disperse into a soft sphere so the
    // last artifact has somewhere to scatter to.
    //
    // Kept tight on purpose. Spread wide, most of the cloud sits outside the
    // frame and what is left on screen reads as a handful of stray dots rather
    // than debris; this radius keeps the bulk of it in view.
    for (let i = 0; i < count; i++) {
      vA.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
        .normalize()
        .multiplyScalar(1.2 + Math.random() * 5.3)
      out[i * 3] = vA.x
      out[i * 3 + 1] = vA.y
      out[i * 3 + 2] = vA.z
    }
    return out
  }

  let written = 0
  for (let pi = 0; pi < parts.length; pi++) {
    const prims = parts[pi]
    // Even split across parts, remainder going to the last one.
    const share =
      pi === parts.length - 1
        ? count - written
        : Math.floor(count / parts.length)

    const cdf = new Float64Array(prims.length)
    let total = 0
    for (let i = 0; i < prims.length; i++) {
      total += prims[i].w
      cdf[i] = total
    }

    for (let s = 0; s < share; s++) {
      const r = Math.random() * total
      let lo = 0
      let hi = prims.length - 1
      while (lo < hi) {
        const mid = (lo + hi) >> 1
        if (cdf[mid] < r) lo = mid + 1
        else hi = mid
      }
      samplePrim(prims[lo], out, (written + s) * 3)
    }
    written += share
  }

  return out
}
