import { onMounted, onBeforeUnmount, reactive, type Ref } from 'vue'

import gsap from 'gsap'

import { LAST_POSITION, advanceJourney } from '@/utils/cyberStory'

import { getLenis } from '@/composables/useSmoothScroll'



export const cyberJourney = reactive({ position: 0, scroll: 0, unit: 1400, start: 0 })



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

    const target = Math.max(0, Math.min(LAST_POSITION,

      (scrollY - cyberJourney.start) / Math.max(1, cyberJourney.unit)))

    cyberJourney.scroll = scrollY

    if (!initialized) {

      cyberJourney.position = target

      initialized = true

    } else {

      const next = advanceJourney(cyberJourney.position, velocity, target, (now - lastTime) / 1000)

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



    gsap.ticker.add(tick)

    tick()

  })



  onBeforeUnmount(() => {

    gsap.ticker.remove(tick)

    resizeObserver?.disconnect()

    window.removeEventListener('resize', measure)

  })



  return cyberJourney

}

