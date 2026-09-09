import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import ts from 'typescript'

const source = readFileSync(new URL('../src/utils/portfolioTimeline.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } })
const { readJourneyAnchors, positionOnJourney } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)

test('nested editorial sections stay in document coordinates after a restored scroll', () => {
  const scroll = 1900
  const sections = [0, 900, 1800, 2900].map((top) => ({
    offsetTop: 0, // A section may be the first child of a positioned wrapper.
    getBoundingClientRect: () => ({ top: top - scroll }),
  }))
  assert.deepEqual(readJourneyAnchors(sections, scroll, 800), [0, 780, 1680, 2580])
})

test('every chapter boundary is continuous in both scroll directions', () => {
  const anchors = [0, 780, 1680, 2580]
  anchors.slice(1, -1).forEach((anchor, i) => {
    assert.equal(positionOnJourney(anchor, anchors), i + 1)
    assert.ok(Math.abs(positionOnJourney(anchor - 0.001, anchors) - (i + 1)) < 0.00001)
    assert.ok(Math.abs(positionOnJourney(anchor + 0.001, anchors) - (i + 1)) < 0.00001)
  })
  const samples = [0, 390, 780, 1230, 1680, 2130, 2580]
  assert.deepEqual(samples.map((y) => positionOnJourney(y, anchors)), [0, 0.5, 1, 1.5, 2, 2.5, 3])
  assert.deepEqual(samples.toReversed().map((y) => positionOnJourney(y, anchors)), [3, 2.5, 2, 1.5, 1, 0.5, 0])
})

test('overscroll and the long experience index cannot move beyond the sculpture timeline', () => {
  assert.equal(positionOnJourney(-200, [0, 780, 1680, 2580]), 0)
  assert.equal(positionOnJourney(12000, [0, 780, 1680, 2580]), 3)
})
