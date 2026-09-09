/** Document-space anchors work across nested, positioned section wrappers. */
export function readJourneyAnchors(
  sections: Array<Pick<Element, 'getBoundingClientRect'> | null>,
  scrollY: number,
  viewportHeight: number,
): number[] {
  return sections.map((section, i) => {
    if (i === 0) return 0
    const top = section ? section.getBoundingClientRect().top + scrollY : viewportHeight * i
    return Math.max(1, top - viewportHeight * (i === sections.length - 1 ? 0.4 : 0.15))
  })
}

/** A reversible timeline: restored positions and upward scroll take the same path. */
export function positionOnJourney(scrollY: number, anchors: number[]): number {
  for (let i = 0; i < anchors.length - 1; i++) {
    if (scrollY < anchors[i + 1]) {
      return i + Math.max(0, (scrollY - anchors[i]) / Math.max(1, anchors[i + 1] - anchors[i]))
    }
  }
  return Math.max(0, anchors.length - 1)
}
