import { onMounted, onBeforeUnmount, reactive, type Ref } from 'vue'
import { LAST_POSITION } from '@/utils/cyberStory'
import { getLenis } from '@/composables/useSmoothScroll'

export const cyberJourney = reactive({
  position: 0,
  scroll: 0,
  unit: 1400,
  start: 0,
})

const frameListeners = new Set<(position: number) => void>()

export function onCyberFrame(cb: (position: number) => void): () => void {
  frameListeners.add(cb)
  return () => {
    frameListeners.delete(cb)
  }
}

let boostTarget: number | null = null
export function boostJourney(position: number) {
  boostTarget = position
}
function cancelBoost() {
  boostTarget = null
}

export function useCyberJourney(root: Ref<HTMLElement | null>) {
  let resizeObserver: ResizeObserver | null = null
  let rafId = 0
  let lastTime = 0
  let initialized = false
  let currentPos = 0

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

    const scrollY = getLenis()?.animatedScroll ?? window.scrollY
    const target = Math.max(0, Math.min(LAST_POSITION, (scrollY - cyberJourney.start) / cyberJourney.unit))
    cyberJourney.scroll = scrollY

    if (!initialized) {
      currentPos = target
      initialized = true
    } else {
      const error = target - currentPos
      if (Math.abs(error) < 0.00015) {
        currentPos = target
        boostTarget = null
      } else if (boostTarget !== null) {
        const remaining = Math.abs(boostTarget - currentPos)
        if (remaining < 0.02) boostTarget = null
        const damp = 1 - Math.exp(-10 * dt)
        const maxStep = Math.max(1.35, remaining * 0.85) * dt
        const step = error * damp
        currentPos += Math.sign(step) * Math.min(Math.abs(step), maxStep)
      } else {
        // Critically damped tracking synced with Lenis sub-pixel scroll:
        // responsive to wheel/touch without double-lag, bounded against tab-restore spikes.
        const damp = 1 - Math.exp(-15 * dt)
        const maxStep = 1.8 * dt
        const step = error * damp
        currentPos += Math.sign(step) * Math.min(Math.abs(step), maxStep)
      }
      currentPos = Math.max(0, Math.min(LAST_POSITION, currentPos))
    }

    cyberJourney.position = currentPos
    frameListeners.forEach((fn) => fn(currentPos))
  }

  onMounted(() => {
    measure()
    resizeObserver = new ResizeObserver(measure)
    if (root.value) resizeObserver.observe(root.value)
    window.addEventListener('resize', measure, { passive: true })
    window.addEventListener('wheel', cancelBoost, { passive: true })
    window.addEventListener('touchstart', cancelBoost, { passive: true })
    lastTime = performance.now()
    rafId = requestAnimationFrame(tick)
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(rafId)
    resizeObserver?.disconnect()
    window.removeEventListener('resize', measure)
    window.removeEventListener('wheel', cancelBoost)
    window.removeEventListener('touchstart', cancelBoost)
    boostTarget = null
  })

  return cyberJourney
}
