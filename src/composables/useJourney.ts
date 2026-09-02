import { computed, onMounted, onBeforeUnmount } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useExperienceStore } from '@/stores/experienceStore'

/**
 * ── THE JOURNEY ──────────────────────────────────────────────
 *
 * The whole page is one continuous 0 .. N position, one unit per section.
 *
 * Every artifact shares a single stage, and exactly one of them is ever on
 * screen. A section change is a chained morph: the camera zooms into the
 * current artifact, that artifact breaks apart into its own surface points,
 * the swarm reassembles into the next artifact, and the camera pulls back out
 * onto it. The next shape is never visible before the swarm builds it.
 *
 * Both the 3D canvas and the HTML copy read this same position, which is what
 * keeps the text and the morph locked to each other.
 */

export interface JourneyStation {
  /** ScrollTrigger id of the section that owns this unit of the journey. */
  id: string
  /** Fraction of the unit spent parked before the morph into the next begins. */
  hold: number
  /** Camera distance from the artifact while parked. */
  dwell: number
  /** Where the stage sits relative to the view axis, in world units. */
  lateralX: number
  lateralY: number
  /**
   * CSS selectors for the section and, inside it, the empty framed box the
   * artifact is meant to sit in (the decorative ring cluster). When both
   * resolve, the artifact is positioned and scaled off that box's real layout
   * geometry instead of the fixed `dwell`/`lateral` numbers above, which keeps
   * it inside its frame at any viewport size. `dwell`/`lateral` remain the
   * fallback for a station with no frame, or before the box has been measured.
   */
  section?: string
  frame?: string
  /** Share of the frame box the artifact should span. */
  fill?: number
}

/**
 * `dwell` is tuned per artifact against its measured extent. The five are
 * deliberately NOT all the same on-screen size — varied scale is half of what
 * makes them read as different objects, and the tower is meant to dominate.
 * Percentages are of half the viewport height at a 45deg FOV.
 *
 *   gyroscope  50% tall,  h/w 1.00      neural knot    40% tall,  h/w 0.93
 *   tower      93% tall,  h/w 1.73      circuit board  36% tall,  h/w 0.54
 *   archive    50% tall,  h/w 0.74
 */
export const JOURNEY_STATIONS: JourneyStation[] = [
  // 00 — HERO: gyroscope, inside the hero's concentric ring frame
  {
    id: 'journey-hero', hold: 0.5, dwell: 9.0, lateralX: 2.9, lateralY: 0.2,
    section: '#hero', frame: '#hero .artifact-frame', fill: 0.72,
  },
  // 01 — ABOUT: neural knot, in the dossier's ring frame
  {
    id: 'journey-about', hold: 0.52, dwell: 10.6, lateralX: 3.0, lateralY: -0.4,
    section: '#about', frame: '#about .artifact-frame', fill: 0.74,
  },
  // 02 — EXPERIENCE: the tower. Deliberately unframed — it is the backdrop the
  // carousel orbits, not an inset object, and it should stay a fixed share of
  // the viewport at every size.
  { id: 'journey-experience', hold: 0.62, dwell: 13.0, lateralX: 0, lateralY: 0 },
  // 03 — SKILLS: circuit board, inside the arsenal ring frame
  {
    id: 'journey-skills', hold: 0.6, dwell: 7.5, lateralX: -3.1, lateralY: 0.3,
    section: '#skills', frame: '#skills .artifact-frame', fill: 0.66,
  },
  // 04 — RESEARCH: archive stack, inside the schematic frame
  {
    id: 'journey-research', hold: 0.58, dwell: 7.0, lateralX: -2.9, lateralY: -0.3,
    section: '#research', frame: '#research .artifact-frame', fill: 0.64,
  },
  // 05 — COMMUNITY / CONTACT: the stack scatters and does not reassemble
  { id: 'journey-orgs', hold: 1.0, dwell: 9.0, lateralX: 0, lateralY: 0 },
]

export const JOURNEY_SEGMENT_IDS = JOURNEY_STATIONS.map((s) => s.id)
export const JOURNEY_LENGTH = JOURNEY_STATIONS.length

export const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)
export const smooth01 = (v: number) => {
  const x = clamp01(v)
  return x * x * (3 - 2 * x)
}
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t

/**
 * Raw position within the morph out of station `i`: 0 while parked, 1 once the
 * next artifact has fully re-formed.
 *
 * This is the timeline every part of a section change is scheduled against —
 * the artifact coming apart, the swarm, the artifact rebuilding, the camera
 * dolly and both pieces of copy. Keeping them all on this one un-eased
 * parameter is what lets them be matched to each other; each curve applies its
 * own easing on top.
 *
 * Each half of the change is deliberately paired, so the 3D and the words are
 * never doing different things:
 *
 *   0.00 - 0.50   the outgoing artifact and its copy dissolve together
 *   0.50 - 0.68   nothing but the loose swarm
 *   0.68 - 1.00   the next artifact rebuilds AND its copy fades in, finishing
 *                 on the same frame
 */
export function flightRaw(p: number, i: number): number {
  const station = JOURNEY_STATIONS[i]
  if (!station || station.hold >= 1 || i >= JOURNEY_STATIONS.length - 1) return 0
  const f = clamp01(p - i)
  return clamp01((f - station.hold) / (1 - station.hold))
}

/** Eased flight position, for things that just want a smooth 0..1. */
export function flightProgress(p: number, i: number): number {
  return smooth01(flightRaw(p, i))
}

export const journeyHold = (i: number) => JOURNEY_STATIONS[i]?.hold ?? 0.6

/**
 * Remaps a section's own 0..1 scroll progress onto the window in which its
 * content is actually on screen.
 *
 * A section's copy holds only until `hold`, after which the morph starts and it
 * fades out. Anything that steps through items (the experience carousel, the
 * skill categories) must finish inside that window, otherwise its last items
 * scroll past while the section is already invisible.
 */
export const contentProgress = (i: number, sectionProgress: number) =>
  clamp01(sectionProgress / (journeyHold(i) * 0.9))

/**
 * Journey position read straight off the absolute scroll offset instead of
 * from each section's own scrubbed progress.
 *
 * Every segment contributes exactly 1.0 and the dead space between two pinned
 * segments holds the value flat, so the result is monotonic and gap-free no
 * matter how fast the page is flicked or where a reload restores the scroll
 * position. Per-section triggers used to each own a slice of the value, which
 * meant a fast scroll could leave a slice stale and the next one would snap in.
 */
export function computeJourneyProgress(): number {
  if (typeof window === 'undefined') return 0
  const y = window.scrollY || window.pageYOffset || 0

  // Resolved up front, because a segment has to know where the NEXT one starts,
  // not just where its own trigger ends.
  const spans: { start: number; end: number }[] = []
  for (let i = 0; i < JOURNEY_SEGMENT_IDS.length; i++) {
    const st = ScrollTrigger.getById(JOURNEY_SEGMENT_IDS[i])
    if (st) spans.push({ start: st.start, end: st.end })
  }
  if (!spans.length) return 0

  let progress = 0
  // Segments are walked as one sequence: a trigger that starts before the
  // previous one finished (the community block overlaps the pinned research
  // block) is clipped to begin where its predecessor ended, otherwise crossing
  // that boundary would teleport the journey into the middle of the next unit.
  let prevEnd = -Infinity

  for (let i = 0; i < spans.length; i++) {
    const start = Math.max(spans[i].start, prevEnd)

    // A pinned section releases a full viewport before the next one has
    // scrolled up to the top, and the journey used to sit frozen at a whole
    // number for every pixel of that — a screen-height of scrolling spent
    // staring at a finished artifact with its section still below the fold.
    // Running each segment to where the NEXT one starts folds that dead scroll
    // into the transition, so the artifact finishes rebuilding exactly as its
    // section lands instead of a screen early.
    const next = spans[i + 1]
    const end = Math.max(spans[i].end, next ? next.start : -Infinity, start + 1)
    prevEnd = end

    // Before this segment -> park here.
    if (y <= start) return i
    // Past it -> bank a full unit and keep walking forward.
    if (y >= end) {
      progress = i + 1
      continue
    }
    return i + (y - start) / (end - start)
  }

  return progress
}

/**
 * Publishes the journey position on its own animation frame.
 *
 * This deliberately lives outside the WebGL canvas: the HTML copy is
 * choreographed off the same value, so it has to keep flowing even when the
 * 3D layer is switched off.
 */
export function useJourneyDriver() {
  const store = useExperienceStore()
  let frameId: number | null = null

  const tick = () => {
    const next = computeJourneyProgress()
    if (Math.abs(next - store.journeyProgress) > 0.0005) {
      store.journeyProgress = next
    }
    frameId = requestAnimationFrame(tick)
  }

  onMounted(() => {
    store.journeyProgress = computeJourneyProgress()
    frameId = requestAnimationFrame(tick)
  })

  onBeforeUnmount(() => {
    if (frameId !== null) cancelAnimationFrame(frameId)
    frameId = null
  })
}

/**
 * Choreography for one section's HTML copy, locked to the same flight the
 * camera is on: the text rides in from depth as the camera arrives, holds
 * while parked, then rushes past the lens as the camera launches again.
 *
 * With animation switched off it collapses to plain, always-visible content.
 */
export function useJourneyStage(index: number) {
  const store = useExperienceStore()

  const raw = computed(() => store.journeyProgress - index)
  const live = computed(() => store.animationsEnabled && store.mode === 'immersive')

  /** 0 -> just arriving, 1 -> fully present, back to 0 -> fully flown past. */
  const presence = computed(() => {
    const l = raw.value
    if (l >= 0) {
      const hold = JOURNEY_STATIONS[index]?.hold ?? 0.65
      if (l <= hold) return 1
      const t = clamp01((l - hold) / (1 - hold))
      return 1 - smooth01((t - 0.05) / 0.45)
    }
    if (l <= -1) return 0
    // Arriving on the tail of the previous section's morph, over exactly the
    // window the incoming artifact rebuilds in (0.68 -> 1.00). The two land on
    // the same frame: the artifact is never left sitting there finished with no
    // copy against it, and the copy never arrives over a cloud of points.
    const prevHold = JOURNEY_STATIONS[index - 1]?.hold ?? 0.65
    const t = clamp01((l + 1 - prevHold) / (1 - prevHold))
    return smooth01((t - 0.68) / 0.32)
  })

  const opacity = computed(() => (live.value ? presence.value : 1))

  const scale = computed(() => {
    if (!live.value) return 1
    const l = raw.value
    const a = presence.value
    // Approaching copy is slightly oversized; departing copy blows past.
    return l < 0 ? lerp(1.16, 1, a) : lerp(1.5, 1, a)
  })

  const shift = computed(() => {
    if (!live.value) return 0
    const l = raw.value
    const a = presence.value
    return l < 0 ? (1 - a) * 26 : (1 - a) * -34
  })

  const transform = computed(
    () => `translate3d(0, ${shift.value.toFixed(1)}px, 0) scale(${scale.value.toFixed(3)})`
  )

  return { opacity, scale, shift, transform, presence }
}
