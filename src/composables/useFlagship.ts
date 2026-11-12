import { nextTick, onBeforeUnmount, onMounted, ref, watch, type Ref } from 'vue'
import { onSmoothScroll } from '@/composables/useSmoothScroll'

export function useSignalWave(canvasRef: Ref<HTMLCanvasElement | null>, paused: Ref<boolean>, isDark?: Ref<boolean>) {
  let raf = 0
  let visible = true
  let pointerX = 0.5
  let pointerY = 0.5
  let smoothX = 0.5
  let smoothY = 0.5
  let width = 0
  let height = 0
  let dpr = 1
  let ctx: CanvasRenderingContext2D | null = null
  let io: IntersectionObserver | null = null
  let ro: ResizeObserver | null = null

  function resize() {
    const canvas = canvasRef.value
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = Math.max(1, Math.floor(rect.width))
    height = Math.max(1, Math.floor(rect.height))
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx = canvas.getContext('2d')
  }

  function render(now: number, animated: boolean) {
    if (!ctx) resize()
    if (!ctx) return
    const t = now * 0.00055
    smoothX += (pointerX - smoothX) * 0.06
    smoothY += (pointerY - smoothY) * 0.06

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, width, height)

    const dark = isDark ? isDark.value : document.documentElement.classList.contains('dark')
    const baseY = height * (0.56 + (smoothY - 0.5) * 0.06)
    const amp = Math.min(height * 0.14, 76)
    const lines = 5
    const step = Math.max(5, Math.floor(width / 150))

    for (let i = 0; i < lines; i++) {
      const ratio = i / (lines - 1)
      const phase = t * (1 + i * 0.11) + i * 0.65
      const localAmp = amp * (0.32 + Math.sin(ratio * Math.PI) * 0.68)
      const yOffset = (ratio - 0.5) * 38

      ctx.beginPath()
      for (let x = 0; x <= width; x += step) {
        const nx = x / width
        const cursorPull = Math.exp(-Math.pow((nx - smoothX) * 3.4, 2)) * (0.45 + (0.5 - smoothY) * 0.55)
        const envelope = Math.sin(nx * Math.PI)
        const wave =
          Math.sin(nx * 6.2 + phase) * 0.56 +
          Math.sin(nx * 12.8 - phase * 1.25 + i) * 0.28 +
          Math.cos(nx * 3.4 + phase * 0.65) * 0.16
        const y = baseY + yOffset + wave * localAmp * envelope * (0.68 + cursorPull * 0.72)
        if (x === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      const alpha = (0.07 + Math.sin(ratio * Math.PI) * 0.18) * (i === 2 ? 1.45 : 1)
      ctx.strokeStyle = dark
        ? i === 2
          ? `rgba(184, 232, 146, ${alpha})`
          : `rgba(165, 185, 172, ${alpha * 0.72})`
        : i === 2
          ? `rgba(31, 89, 52, ${alpha * 1.15})`
          : `rgba(70, 88, 77, ${alpha * 0.75})`
      ctx.lineWidth = i === 2 ? 1.5 : 1
      ctx.stroke()
    }

    if (animated) raf = requestAnimationFrame((ts) => render(ts, true))
  }

  function syncLoop() {
    cancelAnimationFrame(raf)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused.value || reduce || !visible || document.hidden) {
      render(performance.now(), false)
      return
    }
    raf = requestAnimationFrame((ts) => render(ts, true))
  }

  function onPointer(e: PointerEvent) {
    pointerX = e.clientX / Math.max(1, window.innerWidth)
    pointerY = e.clientY / Math.max(1, window.innerHeight)
  }

  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return
    resize()
    ro = new ResizeObserver(() => {
      resize()
      if (paused.value) render(performance.now(), false)
    })
    ro.observe(canvas)
    io = new IntersectionObserver(
      ([entry]) => {
        visible = entry?.isIntersecting ?? true
        syncLoop()
      },
      { threshold: 0 },
    )
    io.observe(canvas)
    window.addEventListener('pointermove', onPointer, { passive: true })
    document.addEventListener('visibilitychange', syncLoop)
    syncLoop()
  })

  watch(paused, syncLoop)
  if (isDark) watch(isDark, () => { if (paused.value) render(performance.now(), false) })

  onBeforeUnmount(() => {
    cancelAnimationFrame(raf)
    io?.disconnect()
    ro?.disconnect()
    window.removeEventListener('pointermove', onPointer)
    document.removeEventListener('visibilitychange', syncLoop)
  })
}

export function useFlagshipMotion(
  rootRef: Ref<HTMLElement | null>,
  navLinksRef: Ref<HTMLElement | null>,
  railRef: Ref<HTMLElement | null>,
  paused: Ref<boolean>,
) {
  const activeSection = ref('hero')
  const navHidden = ref(false)
  const navScrolled = ref(false)
  const scrollProgress = ref(0)
  const pill = ref({ x: 0, w: 0, on: false })

  let lastY = 0
  let docSpan = 1
  let railDocTop = 0
  let railHeight = 1
  let sectionObserver: IntersectionObserver | null = null
  let revealObserver: IntersectionObserver | null = null
  let resizeObserver: ResizeObserver | null = null
  let offSmoothScroll: (() => void) | null = null

  // Cache layout metrics outside the scroll loop so per-frame updates never force reflow.
  function measure() {
    const scrollY = window.scrollY
    docSpan = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
    const rail = railRef.value
    if (rail) {
      const r = rail.getBoundingClientRect()
      railDocTop = r.top + scrollY
      railHeight = Math.max(1, r.height)
    }
    updateFromScroll(scrollY)
  }

  function updateFromScroll(y: number) {
    const dy = y - lastY
    navScrolled.value = y > 24
    if (Math.abs(dy) > 6) {
      navHidden.value = dy > 0 && y > 420
      lastY = y
    }
    scrollProgress.value = Math.min(1, Math.max(0, y / docSpan))

    const rail = railRef.value
    if (rail) {
      const viewportAnchor = y + window.innerHeight * 0.62
      const fill = Math.min(1, Math.max(0, (viewportAnchor - railDocTop) / railHeight))
      rail.style.setProperty('--tl-fill', fill.toFixed(4))
    }
  }

  function placePill() {
    const wrap = navLinksRef.value
    const link = wrap?.querySelector<HTMLElement>(`[data-sec="${activeSection.value}"]`)
    if (!wrap || !link) {
      pill.value.on = false
      return
    }
    pill.value = { x: link.offsetLeft, w: link.offsetWidth, on: true }
  }

  function onCardMove(e: PointerEvent) {
    const card = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-spotlight]')
    if (!card) return
    const r = card.getBoundingClientRect()
    card.style.setProperty('--sx', `${(e.clientX - r.left).toFixed(1)}px`)
    card.style.setProperty('--sy', `${(e.clientY - r.top).toFixed(1)}px`)
  }

  function observeReveals() {
    revealObserver?.disconnect()
    const root = rootRef.value
    if (!root) return
    const items = root.querySelectorAll<HTMLElement>('[data-fs-reveal]')
    if (paused.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((el) => el.classList.add('in-view'))
      return
    }
    revealObserver = new IntersectionObserver(
      (entries) => {
        let batch = 0
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.style.setProperty('--rd', `${batch++ * 55}ms`)
          el.classList.add('in-view')
          revealObserver?.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )
    items.forEach((el) => {
      if (!el.classList.contains('in-view')) revealObserver!.observe(el)
    })
  }

  watch(activeSection, () => nextTick(placePill))
  watch(paused, () => nextTick(observeReveals))

  onMounted(() => {
    const root = rootRef.value
    if (!root) return
    root.classList.add('fs-js')
    measure()
    placePill()
    document.fonts?.ready.then(() => {
      measure()
      placePill()
    })

    offSmoothScroll = onSmoothScroll((y) => {
      updateFromScroll(y)
    })

    const onResize = () => {
      measure()
      placePill()
    }
    window.addEventListener('resize', onResize, { passive: true })
    root.addEventListener('pointermove', onCardMove, { passive: true })

    resizeObserver = new ResizeObserver(() => {
      measure()
    })
    resizeObserver.observe(root)
    if (railRef.value) resizeObserver.observe(railRef.value)

    sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target.id) {
            activeSection.value = entry.target.id
          }
        }
      },
      { rootMargin: '-38% 0px -52% 0px', threshold: 0 },
    )
    root.querySelectorAll<HTMLElement>('main section[id]').forEach((s) => sectionObserver!.observe(s))
    observeReveals()

    onBeforeUnmount(() => {
      window.removeEventListener('resize', onResize)
      root.removeEventListener('pointermove', onCardMove)
    })
  })

  onBeforeUnmount(() => {
    offSmoothScroll?.()
    resizeObserver?.disconnect()
    sectionObserver?.disconnect()
    revealObserver?.disconnect()
  })

  return { activeSection, navHidden, navScrolled, scrollProgress, pill, observeReveals, measure }
}
