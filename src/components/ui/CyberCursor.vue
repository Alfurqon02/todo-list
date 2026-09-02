<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isDesktop = ref(false)
const x = ref(-100)
const y = ref(-100)
const targetX = ref(-100)
const targetY = ref(-100)
const isHovering = ref(false)
let animId: number | null = null

function onMouseMove(e: MouseEvent) {
  targetX.value = e.clientX
  targetY.value = e.clientY

  const target = e.target as HTMLElement | null
  if (target) {
    isHovering.value = !!target.closest('button, a, input, [role="button"], .cyber-card')
  }
}

function updateCursor() {
  x.value += (targetX.value - x.value) * 0.2
  y.value += (targetY.value - y.value) * 0.2
  animId = requestAnimationFrame(updateCursor)
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    isDesktop.value = window.matchMedia('(pointer: fine)').matches
    if (isDesktop.value) {
      window.addEventListener('mousemove', onMouseMove, { passive: true })
      animId = requestAnimationFrame(updateCursor)
    }
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', onMouseMove)
  }
  if (animId !== null) {
    cancelAnimationFrame(animId)
  }
})
</script>

<template>
  <div
    v-if="isDesktop"
    class="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
    :style="{ left: `${x}px`, top: `${y}px` }"
    aria-hidden="true"
  >
    <!-- Center Aim Point -->
    <div
      class="w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_8px_#00f3ff]"
    />

    <!-- Outer Reticle Brackets -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 border border-cyan-500/40"
      :class="[
        isHovering
          ? 'w-10 h-10 rounded-full border-neon-blue shadow-[0_0_12px_rgba(0,243,255,0.5)] rotate-45'
          : 'w-6 h-6 rounded-sm rotate-0'
      ]"
    />
  </div>
</template>
