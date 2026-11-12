export const CYBER_STOPS = [
  {
    id: 'hero',
    label: 'Origin',
    title: 'Follow the signal.',
    next: 'Open the systems stack',
    align: 'left',
    position: [6.2, 3.8, 11.5],
    target: [-1.2, 1.4, 0],
    z: 0,
  },
  {
    id: 'work',
    label: 'Systems',
    title: 'Engineered for production.',
    next: 'Route into the neural pipeline',
    align: 'right',
    position: [-6.8, 3.2, -9.5],
    target: [1.8, 1.1, -18],
    z: -18,
  },
  {
    id: 'research',
    label: 'Intelligence',
    title: 'From dual views to language.',
    next: 'Connect across domains',
    align: 'left',
    position: [6.4, 3.0, -27.5],
    target: [-1.6, 1.2, -36],
    z: -36,
  },
  {
    id: 'about',
    label: 'Domains',
    title: 'Four domains. One standard.',
    next: 'Enter the 11-role archive',
    align: 'right',
    position: [-6.2, 4.8, -45.0],
    target: [1.6, 1.0, -54],
    z: -54,
  },
  {
    id: 'experience',
    label: 'Experience',
    title: 'Eleven roles in sequence.',
    next: 'Assemble the technical stack',
    align: 'left',
    position: [5.8, 2.8, -63.0],
    target: [-1.4, 1.1, -72],
    z: -72,
  },
  {
    id: 'skills',
    label: 'Toolkit',
    title: 'Six technical clusters.',
    next: 'Complete the connection',
    align: 'right',
    position: [-6.4, 3.4, -81.0],
    target: [1.6, 1.2, -90],
    z: -90,
  },
  {
    id: 'contact',
    label: 'Channel',
    title: 'Signal locked. Let’s build.',
    next: 'Return to origin',
    align: 'center',
    position: [0, 2.6, -98.5],
    target: [0, 1.5, -108],
    z: -108,
  },
] as const

export const CHAPTER_SCROLL_VH = 220
export const LAST_POSITION = CYBER_STOPS.length - 1
export const MAX_JOURNEY_SPEED = 0.85
export const MAX_JOURNEY_ACCELERATION = 2.4
export const MAX_JOURNEY_BOOST = 2.2

export const clamp01 = (value: number) => Math.max(0, Math.min(1, value))

export function smooth(value: number) {
  const t = clamp01(value)
  return t * t * t * (t * (t * 6 - 15) + 10)
}

/**
 * Igloo.inc-style C2-continuous chapter glide curve:
 * - Never freezes (minimum slope 0.30 at station centers u=0 and u=1, so every wheel tick moves the 3D scene)
 * - Smoothly accelerates to 1.70 slope at midpoint u=0.5 between stations
 * - Value, 1st derivative, and 2nd derivative match across all integer chapter boundaries
 */
export function chapterGlide(u: number): number {
  const t = clamp01(u)
  return t - (0.7 / (2 * Math.PI)) * Math.sin(2 * Math.PI * t)
}

/** Normalized [0..1] spline progress along the entire 7-station 3D conduit. */
export function splineProgressAt(position: number): number {
  const clamped = Math.max(0, Math.min(LAST_POSITION, position))
  const index = Math.min(CYBER_STOPS.length - 1, Math.floor(clamped))
  if (index >= CYBER_STOPS.length - 1) return 1
  const local = clamped - index
  return (index + chapterGlide(local)) / LAST_POSITION
}

/** Continuous flight state for any scroll position in [0 .. LAST_POSITION]. */
export function flightAt(position: number) {
  const clamped = Math.max(0, Math.min(LAST_POSITION, position))
  const index = Math.min(CYBER_STOPS.length - 1, Math.floor(clamped))
  const local = Math.max(0, clamped - index)
  const travel = index >= CYBER_STOPS.length - 1 ? 0 : chapterGlide(local)
  return { index, local, travel }
}

/** Continuous station proximity [0..1] used to mechanically unfold each 3D station as the camera approaches. */
export function stationProximityAt(position: number, stationIndex: number, radius = 1.15): number {
  const dist = Math.abs(position - stationIndex)
  return smooth(1 - dist / radius)
}

/**
 * Pose for each pre-mounted HUD chapter card so departing and incoming chapters
 * smoothly cross-glide in 3D space without DOM re-creation or visibility jumps.
 */
export function stagePoseAt(position: number, stageIndex: number) {
  const clamped = Math.max(0, Math.min(LAST_POSITION, position))
  const delta = clamped - stageIndex
  const abs = Math.abs(delta)
  const radius = 0.66
  if (abs >= radius) {
    return {
      visible: false,
      interactive: false,
      opacity: 0,
      y: delta > 0 ? -48 : 48,
      scale: 0.95,
      delta,
    }
  }
  const normalized = 1 - abs / radius
  const opacity = smooth(normalized)
  const y = delta === 0 ? 0 : -delta * 62
  const scale = 1 - abs * 0.045
  return {
    visible: opacity > 0.005,
    interactive: abs < 0.42,
    opacity,
    y,
    scale,
    delta,
  }
}

/** Active stop & opacity summary for HUD indicators and tests. */
export function storyCopyAt(position: number) {
  const clamped = Math.max(0, Math.min(LAST_POSITION, position))
  const nearest = Math.min(CYBER_STOPS.length - 1, Math.max(0, Math.round(clamped)))
  const pose = stagePoseAt(clamped, nearest)
  return {
    index: nearest,
    opacity: pose.opacity,
    entering: clamped < nearest,
  }
}

/** Signal core position along the central conduit [0 .. 1]. */
export function signalPointAt(progress: number): [number, number, number] {
  const t = clamp01(progress)
  const z = -108 * t
  const y = 1.15 + Math.sin(t * Math.PI * 6) * 0.18
  const x = Math.sin(t * Math.PI * 6) * 0.35
  return [x, y, z]
}

export function cameraDepthAt(position: number, portrait = false) {
  const { index, travel } = flightAt(position)
  const from = CYBER_STOPS[index].position[2]
  const to = CYBER_STOPS[Math.min(index + 1, CYBER_STOPS.length - 1)].position[2]
  return from + (to - from) * travel + (portrait ? 3.2 : 0)
}

export function engineeringAssemblyAt(position: number, layer: number) {
  const open = stationProximityAt(position, 1, 0.98)
  const stagger = clamp01((open - layer * 0.08) / Math.max(0.2, 1 - layer * 0.08))
  return {
    lid: open,
    layer: smooth(stagger),
  }
}

export function detailScrollableAt(position: number) {
  const nearest = Math.round(Math.max(0, Math.min(LAST_POSITION, position)))
  return Math.abs(position - nearest) <= 0.36
}

/** Bounded timeline helper for programmatic simulations. */
export function advanceJourney(
  position: number,
  velocity: number,
  target: number,
  seconds: number,
  maxSpeed: number = MAX_JOURNEY_SPEED,
) {
  const speed = Math.max(MAX_JOURNEY_SPEED, Math.min(MAX_JOURNEY_BOOST, maxSpeed))
  const dt = Math.max(0, Math.min(1 / 30, seconds))
  if (!dt) return { position, velocity }
  const error = target - position
  if (Math.abs(error) < 0.00001 && Math.abs(velocity) < 0.001) return { position: target, velocity: 0 }
  const desired = Math.max(-speed, Math.min(speed, error * 4.5))
  const change = MAX_JOURNEY_ACCELERATION * (speed / MAX_JOURNEY_SPEED) * dt
  const nextVelocity = velocity + Math.max(-change, Math.min(change, desired - velocity))
  const movement = nextVelocity * dt
  if (Math.abs(movement) >= Math.abs(error) && movement * error >= 0) return { position: target, velocity: 0 }
  const next = Math.max(0, Math.min(LAST_POSITION, position + movement))
  return { position: next, velocity: next === position + movement ? nextVelocity : 0 }
}
