import { computed, onMounted, onBeforeUnmount, watch } from 'vue'
import type { Ref } from 'vue'
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
  {
    id: 'journey-experience', hold: 0.62, dwell: 13.0, lateralX: 0, lateralY: 0,
    section: '#experience',
  },
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
  { id: 'journey-orgs', hold: 1.0, dwell: 9.0, lateralX: 0, lateralY: 0, section: '#community' },
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
 * ── THE CAMERA DOLLY ──
 *
 * Shared with the canvas so the copy can be driven off the very same move.
 * The camera pushes in until DOLLY_IN_END, then pulls back out onto the next
 * artifact over DOLLY_OUT_SPAN.
 */
export const DOLLY_IN_END = 0.45
export const DOLLY_OUT_SPAN = 0.41
export const NEAR_Z_FACTOR = 0.45
export const NEAR_Z_MIN = 2.6

export const stationDwell = (i: number) =>
  JOURNEY_STATIONS[Math.min(Math.max(i, 0), JOURNEY_STATIONS.length - 1)]?.dwell ?? 9

/** Closest the camera gets while flying out of station `i`. */
export function flightNearZ(i: number): number {
  const next = Math.min(i + 1, JOURNEY_STATIONS.length - 1)
  return Math.max(NEAR_Z_MIN, Math.min(stationDwell(i), stationDwell(next)) * NEAR_Z_FACTOR)
}

/** Camera distance at raw flight position `x` out of station `i`. */
export function flightCameraZ(i: number, x: number): number {
  const next = Math.min(i + 1, JOURNEY_STATIONS.length - 1)
  const near = flightNearZ(i)
  return x < DOLLY_IN_END
    ? lerp(stationDwell(i), near, smooth01(x / DOLLY_IN_END))
    : lerp(near, stationDwell(next), smooth01((x - DOLLY_IN_END) / DOLLY_OUT_SPAN))
}

/**
 * Progress through a section's own content, as a 0..1 that completes just
 * before the section starts collapsing.
 *
 * Takes the JOURNEY position, not the section's own pin progress. Those two are
 * no longer the same length: a journey segment runs all the way to where the
 * next one starts, so it is a few hundred pixels longer than the pin. Driving
 * the carousel off the pin meant it finished 594px early and then sat frozen on
 * its last item while the page kept scrolling — which reads exactly like the
 * cylinder having stopped working.
 */
export const contentProgress = (i: number, journeyProgress: number) =>
  clamp01((journeyProgress - i) / (journeyHold(i) * 0.92))

/** Where the closing section's copy starts leaving, shared with the canvas. */
export const FINAL_EXIT_START = 0.5
export const FINAL_EXIT_SPAN = 0.42

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
 * Choreography for one section's HTML copy.
 *
 * The copy does not merely fade: it is put through the same move the camera is
 * making. Its scale IS the camera's magnification at that instant, so departing
 * copy swells at exactly the rate the camera pushes into the artifact, and
 * arriving copy settles back to 1:1 exactly as the camera reaches its parked
 * distance. Blur follows the same envelope, so the words resolve out of and
 * back into focus alongside the artifact resolving out of and back into points.
 *
 * With animation switched off it collapses to plain, always-visible content.
 */
export interface JourneyPhase {
  /** 0 = parked, 1 = being consumed, -1 = being emitted. */
  dir: -1 | 0 | 1
  /** Raw position within the flight that owns this section right now. */
  x: number
  /** Which station's flight that is. */
  owner: number
  /** True for the closing section, which has no next station to fly to. */
  final: boolean
}

/**
 * Which flight owns section `index` at journey position `p`, and how far into
 * it we are. Shared by the copy and the shards so the two cannot disagree.
 */
export function journeyPhase(index: number, p: number): JourneyPhase {
  const l = p - index
  const isFinal = index === JOURNEY_STATIONS.length - 1
  if (l >= 0) {
    // The closing section leaves on the same ramp the debris uses to rise out.
    if (isFinal) {
      const e = smooth01((clamp01(l) - FINAL_EXIT_START) / FINAL_EXIT_SPAN)
      return { dir: e > 0.0005 ? 1 : 0, x: e, owner: index, final: true }
    }
    const hold = JOURNEY_STATIONS[index]?.hold ?? 0.65
    if (l <= hold) return { dir: 0, x: 0, owner: index, final: false }
    return { dir: 1, x: clamp01((l - hold) / (1 - hold)), owner: index, final: false }
  }
  const prevHold = JOURNEY_STATIONS[index - 1]?.hold ?? 0.65
  const x = l <= -1 ? 0 : clamp01((l + 1 - prevHold) / (1 - prevHold))
  return { dir: -1, x, owner: index - 1, final: false }
}

/**
 * Scale the whole copy block sits at during a change.
 *
 * It recedes rather than swells. Tying it to the camera's own magnification
 * made the copy rush toward the lens on the way out, which fought the thing it
 * is supposed to be doing — being drawn into the artifact. Pulling back instead
 * reads as the artifact taking it, and the blocks inside are shrinking toward
 * the artifact on the same beat.
 *
 * Emission is the exact mirror: the copy comes back out of the artifact small
 * and grows into place.
 */
export const STAGE_RECEDE = 0.32

export function stageMagnification(_index: number, ph: JourneyPhase): number {
  if (ph.dir === 0) return 1
  if (ph.final) return 1 - ph.x * STAGE_RECEDE
  const t =
    ph.dir === 1
      ? smooth01(clamp01(ph.x / 0.5)) // consumed over 0 -> 0.50
      : 1 - smooth01(clamp01((ph.x - 0.66) / 0.34)) // emitted over 0.66 -> 1.00
  return 1 - t * STAGE_RECEDE
}

/**
 * How far through being consumed a given block is.
 * 0 = sitting in its layout position, 1 = drawn all the way into the artifact.
 *
 * Windows are matched to the artifact itself: blocks are swallowed over
 * 0 -> 0.50, exactly while the artifact is coming apart, and are emitted again
 * over 0.66 -> 1.00, exactly while the next artifact re-forms. Nothing is
 * emitted during the loose-swarm stretch in between, so the order really is
 * consume, morph, rebuild.
 */
export function shardPull(ph: JourneyPhase, stagger: number): number {
  if (ph.dir === 0) return 0
  if (ph.final) return smooth01(clamp01((ph.x - stagger * 0.3) / 0.7))
  if (ph.dir === 1) return smooth01(clamp01((ph.x - stagger * 0.22) / 0.28))
  return 1 - smooth01(clamp01((ph.x - (0.66 + stagger * 0.14)) / 0.2))
}

export function useJourneyStage(index: number) {
  const store = useExperienceStore()

  const raw = computed(() => store.journeyProgress - index)
  const live = computed(() => store.animationsEnabled && store.mode === 'immersive')
  const phase = computed(() => journeyPhase(index, store.journeyProgress))

  /** 0 -> not here, 1 -> fully present. */
  const presence = computed(() => {
    const { dir, x, final } = phase.value
    if (dir === 0) return 1
    // Closing section: x is already the eased exit ramp.
    if (final) return 1 - x
    // Leaving: matched to the outgoing artifact, both gone at 0.50.
    if (dir === 1) return 1 - smooth01((x - 0.05) / 0.45)
    // Arriving: matched to the incoming artifact rebuilding, 0.68 -> 1.00.
    if (raw.value <= -1) return 0
    return smooth01((x - 0.68) / 0.32)
  })

  const opacity = computed(() => (live.value ? presence.value : 1))

  /** Recedes into the artifact on the way out, grows back out of it on the way in. */
  const scale = computed(() => (live.value ? stageMagnification(index, phase.value) : 1))

  const shift = computed(() => {
    if (!live.value) return 0
    const { dir, x, final } = phase.value
    // Closing section drifts up, echoing the debris rising out of frame.
    if (final) return -x * 60
    const a = presence.value
    return dir === -1 ? (1 - a) * 22 : (1 - a) * -28
  })

  /** Peak blur, in px, at the point where the copy is fully dispersed. */
  const blur = computed(() => (live.value ? (1 - presence.value) * 7 : 0))

  const transform = computed(
    () => `translate3d(0, ${shift.value.toFixed(1)}px, 0) scale(${scale.value.toFixed(3)})`
  )

  // 'none' rather than blur(0) so a parked section costs no rasterisation.
  const filter = computed(() =>
    blur.value > 0.15 ? `blur(${blur.value.toFixed(2)}px)` : 'none'
  )

  return { opacity, scale, shift, blur, transform, filter, presence }
}

/**
 * ── SHARDS ──
 *
 * The artifact eats the copy, then hands the next section's copy back out.
 *
 * Each block of text is drawn in toward wherever the artifact actually sits on
 * screen, shrinking and spinning as it goes, until it disappears into it. On
 * the far side of the morph the next section's blocks are emitted from that
 * same point and settle into their layout positions. Blocks are staggered, so
 * the artifact swallows and releases them one after another rather than all at
 * once.
 *
 * Timing is taken from `shardPull`, which is matched to the artifact: swallowed
 * over 0 -> 0.50 while it comes apart, emitted over 0.66 -> 1.00 while the next
 * one re-forms, and nothing emitted during the loose swarm between the two.
 *
 * Positions come from offsetLeft/offsetTop rather than getBoundingClientRect,
 * because the container is under a scroll-driven transform and offset geometry
 * ignores transforms — so a block can be measured correctly at any moment.
 * The travel is divided by the container's own magnification, otherwise the
 * container scaling up would carry the blocks past the artifact.
 */
export function useJourneyShards(index: number, container: Ref<HTMLElement | null>) {
  const store = useExperienceStore()

  interface Shard {
    el: HTMLElement
    /** This block's own centre, in absolute layout pixels. */
    kx: number
    ky: number
    spin: number
    stagger: number
  }
  let shards: Shard[] = []
  /** The artifact's centre and the transformed container's centre. */
  let target: { x: number; y: number } | null = null
  let origin: { x: number; y: number } | null = null
  /** The ancestor carrying the scroll-driven transform, once found. */
  let scaled: HTMLElement | null = null
  /**
   * Cleared every time the section parks, so each flight measures the layout
   * afresh. All of this geometry comes from offsetLeft/offsetTop and is
   * therefore transform-free, which makes it safe to read at any moment —
   * and caching it for the life of the component was not safe, because a
   * viewport change that does not raise a resize event left it stale and the
   * blocks flew at a point hundreds of pixels off the artifact.
   */
  let geomReady = false

  function layoutCentre(el: HTMLElement) {
    let x = 0
    let y = 0
    let n: HTMLElement | null = el
    while (n) {
      x += n.offsetLeft
      y += n.offsetTop
      n = n.offsetParent as HTMLElement | null
    }
    return { x: x + el.offsetWidth / 2, y: y + el.offsetHeight / 2 }
  }

  /** Where the artifact is, in the same absolute layout space. */
  function artifactCentre(): { x: number; y: number } | null {
    const cfg = JOURNEY_STATIONS[index]
    if (cfg?.frame) {
      const f = document.querySelector(cfg.frame) as HTMLElement | null
      // offsetWidth 0 means the frame is hidden (the mobile layout drops it),
      // in which case the artifact is a centred backdrop instead.
      if (f && f.offsetWidth > 1) return layoutCentre(f)
    }
    const secSel = cfg?.section
    const sec = secSel ? (document.querySelector(secSel) as HTMLElement | null) : null
    if (!sec) return null
    const c = layoutCentre(sec)
    // Unframed artifacts sit in the middle of the viewport, not the section.
    return { x: c.x, y: window.scrollY + window.innerHeight / 2 }
  }

  /**
   * The ancestor that useJourneyStage is scaling. Its transform has to be
   * undone for the blocks to land on the artifact rather than being carried
   * past it, and reading the applied value is safer than recomputing it.
   */
  function findScaled(): HTMLElement | null {
    if (scaled && scaled.isConnected) return scaled
    let n: HTMLElement | null = container.value
    while (n) {
      if ((n.style.transform || '').includes('scale(')) {
        scaled = n
        return n
      }
      n = n.parentElement
    }
    return null
  }

  function collect() {
    const root = container.value
    if (!root) return
    let kids = Array.from(root.children) as HTMLElement[]
    // One or two blocks give no stagger to speak of; drop a level so there is
    // something to actually feed in.
    if (kids.length < 3) {
      const deeper = kids.flatMap((k) => Array.from(k.children) as HTMLElement[])
      if (deeper.length >= 3) kids = deeper
    }
    const last = Math.max(1, kids.length - 1)
    shards = kids.map((el, k) => ({
      el,
      kx: 0,
      ky: 0,
      spin: (k % 2 === 0 ? 1 : -1) * (18 + (k % 3) * 9),
      stagger: kids.length > 1 ? k / last : 0,
    }))
    geomReady = false
  }

  /** Re-reads every layout position this effect depends on. */
  function measureGeometry(box: HTMLElement) {
    target = artifactCentre()
    origin = layoutCentre(box)
    for (const s of shards) {
      const c = layoutCentre(s.el)
      s.kx = c.x
      s.ky = c.y
    }
    geomReady = true
  }

  function reset() {
    for (const s of shards) {
      s.el.style.transform = ''
      s.el.style.opacity = ''
    }
  }

  function apply() {
    if (!shards.length) return
    if (!store.animationsEnabled || store.mode !== 'immersive') return reset()

    const ph = journeyPhase(index, store.journeyProgress)
    if (ph.dir === 0) {
      // Parked is the one moment the layout is definitely settled, so this is
      // where the next flight's measurements get invalidated.
      geomReady = false
      return reset()
    }

    const box = findScaled()
    // Nothing to undo yet: the container is not being transformed this frame.
    if (!box) return
    if (!geomReady) measureGeometry(box)
    if (!target || !origin) return

    // The container is scaled about its own centre and nudged vertically, so a
    // block's on-screen centre is  origin + shift + m * ((block - origin) + t).
    // Solving that for the t which puts the block on the artifact gives the
    // offsets below. Read off the applied transform rather than recomputed, so
    // the two can never disagree.
    const applied = (box && box.style.transform) || ''
    const m = parseFloat((/scale\(([\d.]+)\)/.exec(applied) || ['', '1'])[1]) || 1
    const sy = parseFloat((/translate3d\([^,]+,\s*(-?[\d.]+)px/.exec(applied) || ['', '0'])[1]) || 0

    for (const s of shards) {
      const pull = shardPull(ph, s.stagger)
      if (pull < 0.001) {
        s.el.style.transform = ''
        s.el.style.opacity = ''
        continue
      }
      const fullX = (target.x - origin.x) / m - (s.kx - origin.x)
      const fullY = (target.y - origin.y - sy) / m - (s.ky - origin.y)
      s.el.style.transform =
        `translate3d(${(fullX * pull).toFixed(1)}px, ${(fullY * pull).toFixed(1)}px, 0) ` +
        `rotate(${(s.spin * pull).toFixed(2)}deg) ` +
        `scale(${(1 - pull * 0.88).toFixed(3)})`
      // Only a partial dip; the container owns the rest of the fade.
      s.el.style.opacity = (1 - pull * 0.82).toFixed(3)
    }
  }

  function remeasure() {
    scaled = null
    target = null
    origin = null
    geomReady = false
    collect()
    apply()
  }

  onMounted(() => {
    remeasure()
    window.addEventListener('resize', remeasure, { passive: true })
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', remeasure)
    reset()
  })

  // flush: 'post' matters. The container's transform is written by
  // useJourneyStage during the same reactive tick, and this reads it back to
  // undo it — on the default pre-flush it would see the previous frame's value,
  // which on the first frame of a flight is no transform at all, and the blocks
  // would be measured against the wrong element entirely.
  watch(() => store.journeyProgress, apply, { flush: 'post' })
  watch(() => [store.animationsEnabled, store.mode], remeasure, { flush: 'post' })
}
