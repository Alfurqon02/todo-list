import { onMounted, onBeforeUnmount, watch } from 'vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useExperienceStore } from '@/stores/experienceStore'

gsap.registerPlugin(ScrollTrigger)

let lenis: Lenis | null = null

export function getLenis(): Lenis | null {
  return lenis
}

type ScrollCallback = (data: { scroll: number; velocity: number; progress: number }) => void
const scrollCallbacks = new Set<ScrollCallback>()

export function onSmoothScroll(cb: ScrollCallback) {
  scrollCallbacks.add(cb)
  return () => {
    scrollCallbacks.delete(cb)
  }
}

export function useSmoothScroll() {
  const store = useExperienceStore()
  const tick = (time: number) => lenis?.raf(time * 1000)
  let mounted = false

  const onWindowScroll = () => {
    if (!lenis) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scroll = window.scrollY
      const progress = docHeight > 0 ? scroll / docHeight : 0
      scrollCallbacks.forEach((cb) => cb({ scroll, velocity: 0, progress }))
    }
  }

  const configure = () => {
    lenis?.destroy()
    lenis = null
    if (!mounted || !store.animationsEnabled || store.mode === 'clean') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches

    lenis = new Lenis({
      lerp: isTouchDevice ? 0.12 : 0.08,
      wheelMultiplier: 0.9,
      touchMultiplier: isTouchDevice ? 1.0 : 1.5,
      smoothWheel: true,
      syncTouch: false,
      infinite: false,
      prevent: (node) => {
        if (node.closest('textarea, input, select')) return true
        const panel = node.closest<HTMLElement>('[data-journey-details]')
        if (panel && panel.scrollHeight > panel.clientHeight + 1) return true
        const dialog = node.closest('dialog')
        return !!dialog
      },
    })

    // Sync Lenis with GSAP ScrollTrigger and notify active subscribers
    lenis.on('scroll', (e) => {
      ScrollTrigger.update()
      scrollCallbacks.forEach((cb) => cb({ scroll: e.scroll, velocity: e.velocity, progress: e.progress }))
    })
    gsap.ticker.lagSmoothing(0)
  }

  watch(() => [store.animationsEnabled, store.mode], configure)

  onMounted(() => {
    mounted = true
    configure()
    window.addEventListener('scroll', onWindowScroll, { passive: true })
    gsap.ticker.add(tick)
  })

  onBeforeUnmount(() => {
    mounted = false
    window.removeEventListener('scroll', onWindowScroll)
    gsap.ticker.remove(tick)
    if (lenis) {
      lenis.destroy()
      lenis = null
    }
  })

  function scrollTo(target: string | number | HTMLElement) {
    if (lenis) {
      lenis.scrollTo(target, {
        duration: typeof target === 'number' ? Math.min(12, Math.max(3.8, Math.abs(target - lenis.animatedScroll) / window.innerHeight * 1.35)) : 1.2,
        easing: (t: number) => typeof target === 'number' ? t * t * (3 - 2 * t) : 1 - Math.pow(1 - t, 3.5),
        offset: typeof target === 'number' ? 0 : -90,
      })
      return
    }
    if (typeof target === 'number') window.scrollTo({ top: target, behavior: 'instant' })
    else {
      const el = typeof target === 'string' ? document.querySelector(target) : target
      el?.scrollIntoView({ behavior: 'instant', block: 'start' })
    }
  }

  return { scrollTo }
}
