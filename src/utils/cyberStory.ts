export const CYBER_STOPS = [
  { id: 'hero', label: 'Origin', title: 'Follow the signal.', next: 'Open the processor', position: [10, 11, 17], target: [0, 3, 0], z: 0 },
  { id: 'work', label: 'Engineering', title: 'Build the system.', next: 'Follow the data', position: [-8, 5, -9], target: [2.5, 0, -16], z: -16 },
  { id: 'research', label: 'Intelligence', title: 'Give data meaning.', next: 'Connect the perspectives', position: [0, 3, -25], target: [0, 1, -36], z: -36 },
  { id: 'about', label: 'Perspective', title: 'Made across borders.', next: 'Enter the archive', position: [0, 18, -48], target: [0, 0, -55], z: -55 },
  { id: 'experience', label: 'Experience', title: 'Built over time.', next: 'Explore the toolkit', position: [-7, 3.1, -65], target: [2, 0, -74], z: -74 },
  { id: 'skills', label: 'Toolkit', title: 'Choose the right tools.', next: 'Complete the connection', position: [8, 7, -84], target: [-2, 1, -94], z: -94 },
  { id: 'contact', label: 'Next', title: 'Your idea starts here.', next: 'Back to the beginning', position: [0, 3.5, -103], target: [0, 3.1, -112], z: -112 },
] as const

export const FLIGHT_START = 0.44
export const FLIGHT_END = 1
export const CHAPTER_SCROLL_VH = 280
export const LAST_POSITION = CYBER_STOPS.length - 1 + 0.38
export const MAX_JOURNEY_SPEED = 0.32
export const MAX_JOURNEY_ACCELERATION = 0.65
/** One bounded timeline for camera, signal, models and copy. Never teleport on input spikes. */
export function advanceJourney(position: number, velocity: number, target: number, seconds: number) {
  const dt = Math.max(0, Math.min(1 / 30, seconds))
  if (!dt) return { position, velocity }
  const error = target - position
  // Finish imperceptible settling exactly, so an arrived chapter can unlock its panel.
  if (Math.abs(error) < 0.00001 && Math.abs(velocity) < 0.001) return { position: target, velocity: 0 }
  const desired = Math.max(-MAX_JOURNEY_SPEED, Math.min(MAX_JOURNEY_SPEED, error * 4))
  const change = MAX_JOURNEY_ACCELERATION * dt
  const nextVelocity = velocity + Math.max(-change, Math.min(change, desired - velocity))
  const movement = nextVelocity * dt
  if (Math.abs(movement) >= Math.abs(error) && movement * error >= 0) return { position: target, velocity: 0 }
  const next = Math.max(0, Math.min(LAST_POSITION, position + movement))
  return { position: next, velocity: next === position + movement ? nextVelocity : 0 }
}
export const clamp01 = (value: number) => Math.max(0, Math.min(1, value))
export function smooth(value: number) {
  const t = clamp01(value)
  return t * t * t * (t * (t * 6 - 15) + 10)
}
/** Clear the processor before descending; dock in front of the terminal chassis. */
export function signalPointAt(progress: number): [number, number, number] {
  const z = -109 * clamp01(progress)
  const y = 0.8 - 1.65 * smooth((-z - 5) / 4)
  return [0, y, z]
}
export function cameraDepthAt(position: number, portrait = false) {
  const { index, travel } = flightAt(position)
  const from = CYBER_STOPS[index].position[2]
  const to = CYBER_STOPS[Math.min(index + 1, CYBER_STOPS.length - 1)].position[2]
  return from + (to - from) * travel + (portrait ? 3.2 : 0)
}
export function flightAt(position: number) {
  const index = Math.min(CYBER_STOPS.length - 1, Math.max(0, Math.floor(position)))
  const local = Math.max(0, position - index)
  const t = clamp01((local - FLIGHT_START) / (FLIGHT_END - FLIGHT_START))
  // A lower peak velocity than the quintic asset easing, with soft endpoints.
  return { index, local, travel: index === CYBER_STOPS.length - 1 ? 0 : t * t * (3 - 2 * t) }
}
/** Join the center lane, follow the signal, then ease into the chapter view. */
export function centerFollowAt(travel: number) {
  if (travel <= 0 || travel >= 1) return 0
  return smooth(travel / 0.2) * (1 - smooth((travel - 0.8) / 0.2))
}
export function engineeringAssemblyAt(position: number, layer: number) {
  const close = 1 - smooth((position - 1.43) / 0.4)
  return {
    lid: smooth((position - 0.78) / 0.4) * close,
    layer: smooth((position - 0.9 - layer * 0.045) / 0.4) * close,
  }
}
export function storyCopyAt(position: number) {
  const { index, local } = flightAt(position)
  if (index === CYBER_STOPS.length - 1) return { index, opacity: 1, entering: false }
  if (local >= 0.8) return { index: index + 1, opacity: smooth((local - 0.8) / 0.2), entering: true }
  return { index, opacity: 1 - smooth((local - 0.33) / 0.17), entering: false }
}
export function detailScrollableAt(position: number) {
  const phase = flightAt(position)
  const copy = storyCopyAt(position)
  // Native scroll positions round to pixels, so an arrival may settle just
  // below the chapter boundary. Allow only an imperceptible numerical remainder.
  return copy.opacity >= 0.999999 && (phase.travel <= 0.000001 || phase.travel >= 0.999999)
}
