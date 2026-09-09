import { onBeforeUnmount, onMounted, reactive } from 'vue'
import gsap from 'gsap'
import { positionOnJourney, readJourneyAnchors } from '@/utils/portfolioTimeline'
import { onSmoothScroll, getLenis } from '@/composables/useSmoothScroll'

// Scroll, typography, and the sculpture share one clock and one position.
export const portfolioJourney = reactive({ progress: 0, scroll: 0 })

export function usePortfolioJourney() {
  let anchors = [0, 1, 2, 3]
  let observer: ResizeObserver | null = null
  let mounted = false
  let unsubscribeSmoothScroll: (() => void) | null = null

  const measure = () => {
    const y = getLenis()?.animatedScroll ?? window.scrollY
    anchors = readJourneyAnchors(
      ['hero', 'work', 'research', 'about'].map((id) => document.getElementById(id)),
      y,
      window.innerHeight,
    )
  }

  const updateFromScroll = (y: number) => {
    portfolioJourney.scroll = y
    portfolioJourney.progress = positionOnJourney(y, anchors)
  }

  const tick = () => {
    const y = getLenis()?.animatedScroll ?? window.scrollY
    updateFromScroll(y)
  }

  onMounted(() => {
    mounted = true
    measure()
    observer = new ResizeObserver(measure)
    observer.observe(document.body)
    window.addEventListener('resize', measure, { passive: true })
    document.fonts?.ready.then(() => { if (mounted) measure() })

    unsubscribeSmoothScroll = onSmoothScroll(({ scroll }) => {
      updateFromScroll(scroll)
    })

    gsap.ticker.add(tick)
    tick()
  })

  onBeforeUnmount(() => {
    mounted = false
    gsap.ticker.remove(tick)
    unsubscribeSmoothScroll?.()
    observer?.disconnect()
    window.removeEventListener('resize', measure)
  })

  return portfolioJourney
}
