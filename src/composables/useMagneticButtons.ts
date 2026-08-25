import { onMounted, onBeforeUnmount } from 'vue'

interface MagneticOptions {
  strength?: number
  selector?: string
}

export function useMagneticButtons(options: MagneticOptions = {}) {
  const { strength = 0.3, selector = '.magnetic' } = options
  const elements: HTMLElement[] = []
  const handlers = new Map<HTMLElement, { move: (e: MouseEvent) => void; leave: () => void }>()

  function initMagnetic(el: HTMLElement) {
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
      el.style.transition = 'transform 0.2s ease-out'

      // Move inner text/icon separately for parallax effect
      const inner = el.querySelector('.magnetic-inner') as HTMLElement
      if (inner) {
        inner.style.transform = `translate(${x * strength * 0.5}px, ${y * strength * 0.5}px)`
        inner.style.transition = 'transform 0.2s ease-out'
      }
    }

    const leave = () => {
      el.style.transform = ''
      el.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'

      const inner = el.querySelector('.magnetic-inner') as HTMLElement
      if (inner) {
        inner.style.transform = ''
        inner.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }
    }

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    handlers.set(el, { move, leave })
    elements.push(el)
  }

  onMounted(() => {
    document.querySelectorAll<HTMLElement>(selector).forEach(initMagnetic)
  })

  onBeforeUnmount(() => {
    elements.forEach((el) => {
      const h = handlers.get(el)
      if (h) {
        el.removeEventListener('mousemove', h.move)
        el.removeEventListener('mouseleave', h.leave)
      }
    })
    handlers.clear()
  })
}
