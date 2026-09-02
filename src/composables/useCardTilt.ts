import { ref } from 'vue'

export function useCardTilt() {
  const tiltStyle = ref('')

  function onPointerMove(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement | null
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    tiltStyle.value = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
  }

  function onPointerLeave() {
    tiltStyle.value = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return {
    tiltStyle,
    onPointerMove,
    onPointerLeave,
  }
}
