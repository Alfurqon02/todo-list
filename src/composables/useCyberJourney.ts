import { onMounted, onBeforeUnmount, type Ref } from 'vue'
import { LAST_POSITION } from '@/utils/cyberStory'
import { getLenis, setLenisExternalRaf, stepLenis } from '@/composables/useSmoothScroll'

/**
 * Plain non-reactive state object updated at display refresh rate (60-144Hz).
 * Keeping this outside Vue reactivity guarantees zero VDOM dependency triggers per frame.
 */
export const cyberJourney = {
  position: 0,
  velocity: 0,
  scroll: 0,
  unit: 1400,
  start: 0,
}

type FrameCallback = (position: number, velocity: number, dt: number, now: number) => void
const frameListeners = new Set<FrameCallback>()

export function onCyberFrame(cb: FrameCallback): () => void {
  frameListeners.add(cb)
  return () => {
    frameListeners.delete(cb)
  }
}

export function boostJourney(_position?: number) {
  // Handled natively by Lenis duration curve & continuous spline damper
}

export function useCyberJourney(root: Ref<HTMLElement | null>) {
  let resizeObserver: ResizeObserver | null = null
  let rafId = 0
  let lastTime = 0
  let initialized = false
  let currentPos = 0
  let currentVel = 0

  const measure = () => {
    if (!root.value) return
    const currentY = window.scrollY
    cyberJourney.start = root.value.getBoundingClientRect().top + currentY
    cyberJourney.unit = Math.max(1, (root.value.offsetHeight - window.innerHeight) / LAST_POSITION)
  }

  const tick = (now: number) => {
    rafId = requestAnimationFrame(tick)
    if (document.querySelector('dialog[open]')) {
      lastTime = now
      return
    }
    const dt = Math.min(0.05, Math.max(0.001, (now - (lastTime || now)) / 1000))
    lastTime = now

    // Step Lenis in the exact same animation frame before reading scroll position
    stepLenis(now)

    const lenis = getLenis()
    const scrollY = lenis ? lenis.animatedScroll : window.scrollY
    const target = Math.max(0, Math.min(LAST_POSITION, (scrollY - cyberJourney.start) / cyberJourney.unit))
    cyberJourney.scroll = scrollY

    if (!initialized) {
      currentPos = target
      currentVel = 0
      initialized = true
    } else {
      const prevPos = currentPos
      const error = target - currentPos
      if (Math.abs(error) < 0.00005) {
        currentPos = target
        currentVel *= Math.exp(-18 * dt)
      } else {
        // When Lenis is active, animatedScroll is already smoothly damped;
        // apply a lightweight high-frequency polish filter without velocity clamping.
        const rate = lenis ? 18 : 9.5
        const alpha = 1 - Math.exp(-rate * dt)
        currentPos += error * alpha
        currentPos = Math.max(0, Math.min(LAST_POSITION, currentPos))
        const rawVel = (currentPos - prevPos) / dt
        currentVel += (rawVel - currentVel) * (1 - Math.exp(-14 * dt))
      }
    }

    cyberJourney.position = currentPos
    cyberJourney.velocity = currentVel

    frameListeners.forEach((fn) => fn(currentPos, currentVel, dt, now))
  }

  onMounted(() => {
    setLenisExternalRaf(true)
    measure()
    resizeObserver = new ResizeObserver(measure)
    if (root.value) resizeObserver.observe(root.value)
    window.addEventListener('resize', measure, { passive: true })
    lastTime = performance.now()
    rafId = requestAnimationFrame(tick)
  })

  onBeforeUnmount(() => {
    setLenisExternalRaf(false)
    cancelAnimationFrame(rafId)
    resizeObserver?.disconnect()
    window.removeEventListener('resize', measure)
  })

  return cyberJourney
}
