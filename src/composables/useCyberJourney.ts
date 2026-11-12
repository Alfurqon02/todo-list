import { onMounted, onBeforeUnmount, reactive, type Ref } from 'vue'
import gsap from 'gsap'
import { LAST_POSITION, MAX_JOURNEY_BOOST, MAX_JOURNEY_SPEED, advanceJourney } from '@/utils/cyberStory'
import { getLenis } from '@/composables/useSmoothScroll'

export const cyberJourney = reactive({ position: 0, scroll: 0, unit: 1400, start: 0 })

// A navigation jump (menu, chapter track, keyboard) may fly faster than a
// wheel gesture, scaled by how far it still has to go. Any manual input
// returns control to the normal bounded follow.
let boostTarget: number | null = null
export function boostJourney(position: number) { boostTarget = position }
function cancelBoost() { boostTarget = null }

export function useCyberJourney(root: Ref<HTMLElement | null>) {
  let resizeObserver: ResizeObserver | null = null
  let lastTime = 0
  let velocity = 0
  let initialized = false

  const measure = () => {
    if (!root.value) return
    const currentY = window.scrollY
    cyberJourney.start = root.value.getBoundingClientRect().top + currentY
    cyberJourney.unit = (root.value.offsetHeight - window.innerHeight) / LAST_POSITION
  }

  const tick = () => {
    const now = performance.now()
    if (document.querySelector('dialog[open]')) { lastTime = now; return }
    const scrollY = getLenis()?.animatedScroll ?? window.scrollY
    const target = Math.max(0, Math.min(LAST_POSITION, (scrollY - cyberJourney.start) / Math.max(1, cyberJourney.unit)))
    cyberJourney.scroll = scrollY
    if (!initialized) {
      cyberJourney.position = target
      initialized = true
    } else {
      let maxSpeed = MAX_JOURNEY_SPEED
      if (boostTarget !== null) {
        const remaining = Math.abs(boostTarget - cyberJourney.position)
        if (remaining < 0.02) boostTarget = null
        else maxSpeed = Math.min(MAX_JOURNEY_BOOST, MAX_JOURNEY_SPEED + remaining * 0.32)
      }
      const next = advanceJourney(cyberJourney.position, velocity, target, (now - lastTime) / 1000, maxSpeed)
      cyberJourney.position = next.position
      velocity = next.velocity
    }
    lastTime = now
  }

  onMounted(() => {
    measure()
    resizeObserver = new ResizeObserver(measure)
    if (root.value) resizeObserver.observe(root.value)
    window.addEventListener('resize', measure, { passive: true })
    window.addEventListener('wheel', cancelBoost, { passive: true })
    window.addEventListener('touchstart', cancelBoost, { passive: true })
    gsap.ticker.add(tick)
    tick()
  })

  onBeforeUnmount(() => {
    gsap.ticker.remove(tick)
    resizeObserver?.disconnect()
    window.removeEventListener('resize', measure)
    window.removeEventListener('wheel', cancelBoost)
    window.removeEventListener('touchstart', cancelBoost)
    boostTarget = null
  })

  return cyberJourney
}
