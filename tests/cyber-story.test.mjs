import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import ts from 'typescript'

const source = readFileSync(new URL('../src/utils/cyberStory.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } })
const { CYBER_STOPS, flightAt, storyCopyAt, LAST_POSITION, CHAPTER_SCROLL_VH, centerFollowAt, engineeringAssemblyAt, advanceJourney, MAX_JOURNEY_SPEED, cameraDepthAt, signalPointAt, detailScrollableAt } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)

test('every chapter has a readable dwell and travels deeper into the same world', () => {
  CYBER_STOPS.forEach((stop, i) => {
    assert.equal(storyCopyAt(i).index, i)
    assert.equal(storyCopyAt(i).opacity, 1)
    assert.equal(storyCopyAt(i + 0.2).opacity, 1)
    assert.equal(flightAt(i + 0.2).travel, 0)
    if (i) assert.ok(stop.z < CYBER_STOPS[i - 1].z)
    for (const value of [...stop.position, ...stop.target]) assert.ok(Number.isFinite(value))
  })
})

test('copy hands off without a visibility jump at chapter boundaries', () => {
  for (let i = 1; i < CYBER_STOPS.length; i++) {
    const before = storyCopyAt(i - 0.000001)
    const after = storyCopyAt(i)
    assert.equal(before.index, after.index)
    assert.ok(Math.abs(before.opacity - after.opacity) < 0.00001)
    assert.ok(flightAt(i - 0.000001).travel > 0.99999)
  }
})

test('camera flights are reversible and hide departing copy during the close pass', () => {
  for (let i = 0; i < 6; i++) {
    const forward = [0.44, 0.6, 0.72, 0.85, 0.999].map((p) => flightAt(i + p).travel)
    const backward = [0.999, 0.85, 0.72, 0.6, 0.44].map((p) => flightAt(i + p).travel)
    assert.deepEqual(forward, backward.toReversed())
    assert.ok(forward.every((p, n) => n === 0 || p >= forward[n - 1]))
    assert.equal(storyCopyAt(i + 0.65).opacity, 0)
  }
})

test('the final contact chapter stays available at the bottom of the document', () => {
  assert.deepEqual(storyCopyAt(LAST_POSITION), { index: 6, opacity: 1, entering: false })
  assert.equal(flightAt(LAST_POSITION).travel, 0)
})

test('camera pacing stays below one complete flight per viewport of scrolling', () => {
  const step = 0.0001
  for (let p = 0; p < 0.999; p += 0.001) {
    const speed = (flightAt(p + step).travel - flightAt(p).travel) / step / (CHAPTER_SCROLL_VH / 100)
    assert.ok(speed >= 0 && speed < 1, `Too abrupt at ${p}: ${speed}`)
  }
  assert.ok(storyCopyAt(0.9).opacity > 0.4)
  assert.ok(flightAt(0.9).travel > 0.9)
})


test('transitions lock onto the center lane and release smoothly at chapter views', () => {
  assert.equal(centerFollowAt(0), 0)
  assert.equal(centerFollowAt(1), 0)
  for (const t of [0.2, 0.35, 0.5, 0.65, 0.8]) assert.equal(centerFollowAt(t), 1)
  for (let t = 0; t <= 1; t += 0.01) {
    assert.ok(Math.abs(centerFollowAt(t) - centerFollowAt(1 - t)) < 1e-10)
  }
  assert.ok(centerFollowAt(0.0001) < 1e-8)
  assert.ok(centerFollowAt(0.9999) < 1e-8)
})


test('engineering opens lid before boards and retracts without overshoot', () => {
  assert.deepEqual(engineeringAssemblyAt(0.7, 0), { lid: 0, layer: 0 })
  assert.ok(engineeringAssemblyAt(0.95, 0).lid > engineeringAssemblyAt(0.95, 0).layer)
  assert.ok(engineeringAssemblyAt(1.1, 0).layer > engineeringAssemblyAt(1.1, 2).layer)
  for (let p = 0; p < 2; p += 0.005) {
    for (let i = 0; i < 3; i++) {
      const pose = engineeringAssemblyAt(p, i)
      assert.ok(pose.lid >= -1e-10 && pose.lid <= 1 + 1e-10)
      assert.ok(pose.layer >= -1e-10 && pose.layer <= 1 + 1e-10)
    }
  }
  assert.deepEqual(engineeringAssemblyAt(1.9, 2), { lid: 0, layer: 0 })
})


test('large scroll jumps and resumed frames cannot teleport the scene', () => {
  for (const fps of [30, 60, 144]) {
    let state = { position: 0, velocity: 0 }
    for (let frame = 0; frame < fps * 23; frame++) {
      const previous = state.position
      state = advanceJourney(state.position, state.velocity, 6, 1 / fps)
      assert.ok(state.position >= previous)
      assert.ok(state.position - previous <= MAX_JOURNEY_SPEED / fps + 1e-10)
    }
    assert.ok(Math.abs(state.position - 6) < 0.001)
    const resumed = advanceJourney(state.position, state.velocity, 0, 15)
    assert.ok(Math.abs(resumed.position - state.position) <= MAX_JOURNEY_SPEED / 30)
  }
})

test('reversing input brakes before changing camera direction', () => {
  let state = { position: 3, velocity: MAX_JOURNEY_SPEED }
  const first = advanceJourney(state.position, state.velocity, 0, 1 / 60)
  assert.ok(first.velocity > 0)
  assert.ok(first.velocity < state.velocity)
  for (let frame = 0; frame < 90; frame++) state = advanceJourney(state.position, state.velocity, 0, 1 / 60)
  assert.ok(state.velocity < 0)
  assert.ok(state.position < 3)
})


test('camera never backtracks during forward scroll on desktop or portrait', () => {
  for (const portrait of [false, true]) {
    let previous = cameraDepthAt(0, portrait)
    for (let p = 0.001; p <= LAST_POSITION; p += 0.001) {
      const depth = cameraDepthAt(p, portrait)
      assert.ok(depth <= previous + 1e-10, `Backtrack at ${p}`)
      previous = depth
    }
    for (let chapter = 0; chapter < 6; chapter++) {
      assert.equal(cameraDepthAt(chapter, portrait), cameraDepthAt(chapter + 0.3, portrait))
    }
  }
})

test('signal clears the processor, floor and terminal with room for its full body', () => {
  const bodyRadius = 0.4
  let previous = 0
  for (let t = 0; t <= 1; t += 0.001) {
    const [x, y, z] = signalPointAt(t)
    assert.equal(x, 0)
    assert.ok(z <= previous)
    assert.ok(y - bodyRadius > -1.53)
    if (z > -4.1) assert.ok(y - bodyRadius > 0.32)
    assert.ok(z - bodyRadius > -110.75)
    previous = z
  }
})


test('detail scroll is available only after full chapter arrival', () => {
  for (let chapter = 0; chapter < 6; chapter++) {
    assert.equal(detailScrollableAt(chapter), true)
    assert.equal(detailScrollableAt(chapter + 0.2), true)
    for (const offset of [0.34, 0.5, 0.8, 0.9, 0.99]) assert.equal(detailScrollableAt(chapter + offset), false)
    assert.equal(detailScrollableAt(chapter + 0.99999), true)
    assert.equal(detailScrollableAt(chapter + 1), true)
  }
  assert.equal(detailScrollableAt(LAST_POSITION), true)
})
