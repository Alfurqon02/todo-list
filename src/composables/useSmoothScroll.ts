import { onMounted, onBeforeUnmount } from 'vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenis: Lenis | null = null

export function useSmoothScroll() {
  onMounted(() => {
    // Check reduced motion or touch primary devices where native touch scroll is optimal
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches

    lenis = new Lenis({
      duration: isTouchDevice ? 0.8 : 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: isTouchDevice ? 1.0 : 1.5,
      infinite: false,
    })

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time: number) => {
      lenis?.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)
  })

  onBeforeUnmount(() => {
    if (lenis) {
      lenis.destroy()
      lenis = null
    }
  })

  function scrollTo(target: string | number | HTMLElement) {
    lenis?.scrollTo(target, { duration: 1.5 })
  }

  return { scrollTo }
}
