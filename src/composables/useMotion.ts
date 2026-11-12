import { onBeforeUnmount, ref, watch, type Directive } from 'vue'

// Subtle pointer attraction for buttons on fine-pointer devices when motion is enabled.
const handlers = new WeakMap<HTMLElement, { move: (e: PointerEvent) => void; leave: () => void }>()

function motionAllowed() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    !document.documentElement.classList.contains('motion-paused')
  )
}

export const vMagnetic: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    const strength = binding.value ?? 0.24
    el.dataset.magnetic = ''
    const move = (e: PointerEvent) => {
      if (!motionAllowed()) return
      const r = el.getBoundingClientRect()
      const dx = (e.clientX - (r.left + r.width / 2)) * strength
      const dy = (e.clientY - (r.top + r.height / 2)) * strength
      el.style.setProperty('--mag-x', `${dx.toFixed(2)}px`)
      el.style.setProperty('--mag-y', `${dy.toFixed(2)}px`)
      el.classList.add('is-magnetized')
    }
    const leave = () => {
      el.style.setProperty('--mag-x', '0px')
      el.style.setProperty('--mag-y', '0px')
      el.classList.remove('is-magnetized')
    }
    el.addEventListener('pointermove', move, { passive: true })
    el.addEventListener('pointerleave', leave, { passive: true })
    handlers.set(el, { move, leave })
  },
  beforeUnmount(el) {
    const h = handlers.get(el)
    if (!h) return
    el.removeEventListener('pointermove', h.move)
    el.removeEventListener('pointerleave', h.leave)
    handlers.delete(el)
  },
}

// Decodes a string from deterministic technical glyphs into the target text.
const GLYPHS = '01/+:·ABCDEFGHJKLMNPQRSTUVWXYZ'

export function useScramble(source: () => string, duration = 560) {
  const output = ref(source())
  let frame = 0

  watch(source, (target) => {
    cancelAnimationFrame(frame)
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      document.documentElement.classList.contains('motion-paused')
    ) {
      output.value = target
      return
    }
    const start = performance.now()
    const len = target.length
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const locked = Math.floor(p * len)
      let s = ''
      for (let i = 0; i < len; i++) {
        const ch = target[i]
        if (ch === ' ' || i < locked) s += ch
        else s += GLYPHS[(i * 7 + Math.floor(now * 0.045)) % GLYPHS.length]
      }
      output.value = s
      if (p < 1) frame = requestAnimationFrame(tick)
      else output.value = target
    }
    frame = requestAnimationFrame(tick)
  })

  onBeforeUnmount(() => cancelAnimationFrame(frame))
  return output
}

// Writes smoothed normalized pointer coordinates (--px, --py) onto a container element.
export function usePointerGlow(target: () => HTMLElement | null) {
  let frame = 0
  let tx = 0.65
  let ty = 0.35
  let x = tx
  let y = ty
  let active = false

  function step() {
    x += (tx - x) * 0.08
    y += (ty - y) * 0.08
    const el = target()
    if (el) {
      el.style.setProperty('--px', x.toFixed(4))
      el.style.setProperty('--py', y.toFixed(4))
    }
    if (Math.abs(tx - x) > 0.0008 || Math.abs(ty - y) > 0.0008) {
      frame = requestAnimationFrame(step)
    } else {
      active = false
    }
  }

  function onMove(e: PointerEvent) {
    if (!motionAllowed()) return
    tx = e.clientX / Math.max(1, window.innerWidth)
    ty = e.clientY / Math.max(1, window.innerHeight)
    if (!active) {
      active = true
      frame = requestAnimationFrame(step)
    }
  }

  function start() {
    if (typeof window === 'undefined' || !motionAllowed()) return
    const el = target()
    if (el) {
      el.style.setProperty('--px', String(x))
      el.style.setProperty('--py', String(y))
    }
    window.addEventListener('pointermove', onMove, { passive: true })
  }

  onBeforeUnmount(() => {
    cancelAnimationFrame(frame)
    if (typeof window !== 'undefined') window.removeEventListener('pointermove', onMove)
  })

  return { start }
}

// Plays the exit animation on a native <dialog> before calling .close().
export function closeDialogAnimated(dialog: HTMLDialogElement | null) {
  if (!dialog || !dialog.open) return
  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    document.documentElement.classList.contains('motion-paused') ||
    dialog.classList.contains('is-closing')
  ) {
    dialog.close()
    return
  }
  dialog.classList.add('is-closing')
  const finish = () => {
    dialog.classList.remove('is-closing')
    if (dialog.open) dialog.close()
  }
  const timer = setTimeout(finish, 320)
  dialog.addEventListener(
    'animationend',
    () => {
      clearTimeout(timer)
      finish()
    },
    { once: true },
  )
}

export function animatedCancel(e: Event) {
  e.preventDefault()
  closeDialogAnimated(e.currentTarget as HTMLDialogElement | null)
}
