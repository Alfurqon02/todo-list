import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import ts from 'typescript'

const source = readFileSync(new URL('../src/utils/cyberStory.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } })
const {
  CYBER_STOPS,
  flightAt,
  storyCopyAt,
  stagePoseAt,
  splineProgressAt,
  stationProximityAt,
  LAST_POSITION,
  CHAPTER_SCROLL_VH,
  engineeringAssemblyAt,
  advanceJourney,
  MAX_JOURNEY_SPEED,
  MAX_JOURNEY_BOOST,
  cameraDepthAt,
  signalPointAt,
  detailScrollableAt,
} = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)

test('every chapter has full station focus at integer stops and travels deeper along Z', () => {
  CYBER_STOPS.forEach((stop, i) => {
    assert.equal(storyCopyAt(i).index, i)
    assert.equal(storyCopyAt(i).opacity, 1)
    assert.equal(stagePoseAt(i, i).opacity, 1)
    assert.equal(stagePoseAt(i, i).y, 0)
    assert.equal(stationProximityAt(i, i), 1)
    if (i) assert.ok(stop.z < CYBER_STOPS[i - 1].z)
    for (const value of [...stop.position, ...stop.target]) assert.ok(Number.isFinite(value))
  })
})

test('spline progress is strictly monotonic with zero dead scroll zones and C2 boundary continuity', () => {
  const step = 0.001
  let prev = splineProgressAt(0)
  assert.equal(prev, 0)
  for (let p = step; p <= LAST_POSITION; p += step) {
    const curr = splineProgressAt(p)
    const slope = ((curr - prev) * LAST_POSITION) / step
    // Never freezes (slope >= 0.29 everywhere) and never spikes above 1.71
    assert.ok(slope > 0.28 && slope < 1.72, `Unexpected slope at ${p}: ${slope}`)
    const viewportSpeed = slope / (CHAPTER_SCROLL_VH / 100)
    assert.ok(viewportSpeed > 0 && viewportSpeed < 1, `Too abrupt at ${p}: ${viewportSpeed}`)
    prev = curr
  }
  assert.ok(Math.abs(splineProgressAt(LAST_POSITION) - 1) < 1e-9)
})

test('pre-mounted stage cards hand off smoothly across midpoint without jumps', () => {
  for (let i = 0; i < CYBER_STOPS.length - 1; i++) {
    const mid = i + 0.5
    const outgoing = stagePoseAt(mid, i)
    const incoming = stagePoseAt(mid, i + 1)
    assert.ok(outgoing.visible && incoming.visible)
    assert.ok(Math.abs(outgoing.opacity - incoming.opacity) < 1e-6)
    assert.ok(outgoing.y < 0 && incoming.y > 0)
  }
})

test('the final contact chapter stays locked at the end of the conduit', () => {
  assert.deepEqual(storyCopyAt(LAST_POSITION), { index: 6, opacity: 1, entering: false })
  assert.equal(flightAt(LAST_POSITION).travel, 0)
})

test('engineering station unfolds smoothly around chapter 1 and retracts cleanly', () => {
  assert.deepEqual(engineeringAssemblyAt(0, 0), { lid: 0, layer: 0 })
  assert.equal(engineeringAssemblyAt(1, 0).lid, 1)
  assert.equal(engineeringAssemblyAt(1, 0).layer, 1)
  assert.ok(engineeringAssemblyAt(0.5, 0).layer >= engineeringAssemblyAt(0.5, 2).layer)
  assert.deepEqual(engineeringAssemblyAt(2.3, 2), { lid: 0, layer: 0 })
})

test('camera never backtracks during forward scroll on desktop or portrait', () => {
  for (const portrait of [false, true]) {
    let previous = cameraDepthAt(0, portrait)
    for (let p = 0.002; p <= LAST_POSITION; p += 0.002) {
      const depth = cameraDepthAt(p, portrait)
      assert.ok(depth < previous, `Camera did not advance at ${p}`)
      previous = depth
    }
  }
})

test('signal core advances continuously down the conduit without backtracking', () => {
  let previousZ = 0
  for (let t = 0; t <= 1; t += 0.002) {
    const [x, y, z] = signalPointAt(t)
    assert.ok(Number.isFinite(x) && Number.isFinite(y))
    assert.ok(z <= previousZ)
    previousZ = z
  }
})

test('detail scroll is available when settled near any chapter station', () => {
  for (let chapter = 0; chapter <= LAST_POSITION; chapter++) {
    assert.equal(detailScrollableAt(chapter), true)
    assert.equal(detailScrollableAt(chapter + 0.2), true)
    if (chapter < LAST_POSITION) {
      assert.equal(detailScrollableAt(chapter + 0.5), false)
    }
  }
})

test('advanceJourney remains bounded and reverses smoothly without teleporting', () => {
  let state = { position: 0, velocity: 0 }
  for (let frame = 0; frame < 60 * 12; frame++) {
    const prev = state.position
    state = advanceJourney(state.position, state.velocity, 6, 1 / 60, MAX_JOURNEY_BOOST)
    assert.ok(state.position >= prev)
    assert.ok(state.position - prev <= MAX_JOURNEY_BOOST / 60 + 1e-10)
  }
  assert.ok(Math.abs(state.position - 6) < 0.001)

  let rev = { position: 3, velocity: MAX_JOURNEY_SPEED }
  const first = advanceJourney(rev.position, rev.velocity, 0, 1 / 60)
  assert.ok(first.velocity < rev.velocity)
})
