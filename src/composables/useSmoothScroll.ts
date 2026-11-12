import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import { useExperienceStore } from '@/stores/experienceStore'

let lenisInstance: Lenis | null = null
let rafId: number | null = null
let subscribers = 0
const scrollListeners = new Set<(scroll: number, velocity: number) => void>()

export function getLenis(): Lenis | null {
  return lenisInstance
}

export function onSmoothScroll(cb: (scroll: number, velocity: number) => void): () => void {
  scrollListeners.add(cb)
  return () => {
    scrollListeners.delete(cb)
  }
}

export function useSmoothScroll() {
  const store = useExperienceStore()

  function initLenis() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !store.animationsEnabled) {
      return
    }

    if (lenisInstance) return

    lenisInstance = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      syncTouch: false,
      autoRaf: false,
    })

    lenisInstance.on('scroll', (e: { scroll: number; velocity: number }) => {
      store.updateScrollProgress()
      const s = e.scroll ?? window.scrollY
      const v = e.velocity ?? 0
      scrollListeners.forEach((fn) => fn(s, v))
    })

    function raf(time: number) {
      lenisInstance?.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)
  }

  function destroyLenis() {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
    if (lenisInstance) {
      lenisInstance.destroy()
      lenisInstance = null
    }
  }

  function onNativeScroll() {
    store.updateScrollProgress()
    if (!lenisInstance) {
      scrollListeners.forEach((fn) => fn(window.scrollY, 0))
    }
  }

  function scrollTo(target: string | number | HTMLElement, options?: { offset?: number; duration?: number }) {
    if (lenisInstance) {
      lenisInstance.scrollTo(target, {
        offset: options?.offset ?? 0,
        duration: options?.duration ?? 1.15,
      })
    } else if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'auto' })
    } else {
      const el = typeof target === 'string' ? document.querySelector(target) : target
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY + (options?.offset ?? 0)
        window.scrollTo({ top: y, behavior: 'auto' })
      }
    }
  }

  onMounted(() => {
    subscribers++
    initLenis()
    window.addEventListener('scroll', onNativeScroll, { passive: true })
  })

  onUnmounted(() => {
    subscribers = Math.max(0, subscribers - 1)
    window.removeEventListener('scroll', onNativeScroll)
    if (subscribers === 0) {
      destroyLenis()
    }
  })

  return {
    scrollTo,
    initLenis,
    destroyLenis,
    getLenis,
  }
}
