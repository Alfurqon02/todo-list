<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useExperienceStore } from '@/stores/experienceStore'

const store = useExperienceStore()

type ParticleShape = 'circle' | 'snowflake' | 'diamond'

interface SnowParticle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  drift: number
  shimmer: number
  rotation: number
  rotSpeed: number
  shape: ParticleShape
}

const particles = ref<SnowParticle[]>([])
let animFrameId: number | null = null

const shapes: ParticleShape[] = ['circle', 'snowflake', 'snowflake', 'diamond', 'circle', 'snowflake']

function createSnowParticles(count: number = 55) {
  particles.value = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100 - 10,
    size: Math.random() * 12 + 5,
    opacity: Math.random() * 0.4 + 0.1,
    speed: Math.random() * 0.15 + 0.03,
    drift: (Math.random() - 0.5) * 0.15,
    shimmer: Math.random() * Math.PI * 2,
    rotation: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 0.8,
    shape: shapes[i % shapes.length],
  }))
}

function animateSnow() {
  const time = Date.now() * 0.001

  particles.value.forEach((p) => {
    p.y += p.speed
    p.x += p.drift + Math.sin(p.y * 0.012 + p.shimmer) * 0.12
    p.rotation += p.rotSpeed
    p.opacity = (Math.sin(time * 1.5 + p.shimmer) * 0.12 + 0.3) * (p.size / 17)

    if (p.y > 105) {
      p.y = -5
      p.x = Math.random() * 100
    }
    if (p.x > 105) p.x = -5
    if (p.x < -5) p.x = 105
  })

  animFrameId = requestAnimationFrame(animateSnow)
}

onMounted(() => {
  createSnowParticles()
  animateSnow()
})

onBeforeUnmount(() => {
  if (animFrameId !== null) {
    cancelAnimationFrame(animFrameId)
    animFrameId = null
  }
})
</script>

<template>
  <div
    v-if="store.mode === 'immersive'"
    class="fixed inset-0 pointer-events-none z-[2] overflow-hidden"
    aria-hidden="true"
  >
    <template v-for="p in particles" :key="p.id">
      <!-- Snowflake SVG shape -->
      <svg
        v-if="p.shape === 'snowflake'"
        class="absolute"
        :style="{
          left: p.x + '%',
          top: p.y + '%',
          width: p.size + 'px',
          height: p.size + 'px',
          opacity: p.opacity,
          transform: `rotate(${p.rotation}deg)`,
          filter: `drop-shadow(0 0 ${p.size * 0.4}px ${store.isDark ? 'rgba(160,231,229,0.4)' : 'rgba(0,119,182,0.3)'})`,
        }"
        viewBox="0 0 24 24"
        fill="none"
        :stroke="store.isDark ? '#e0f7fa' : '#0077b6'"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <!-- 6-arm snowflake -->
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="3.27" y1="7" x2="20.73" y2="17" />
        <line x1="3.27" y1="17" x2="20.73" y2="7" />
        <!-- Branch details -->
        <line x1="12" y1="2" x2="9" y2="5" />
        <line x1="12" y1="2" x2="15" y2="5" />
        <line x1="12" y1="22" x2="9" y2="19" />
        <line x1="12" y1="22" x2="15" y2="19" />
        <line x1="3.27" y1="7" x2="5.5" y2="9.5" />
        <line x1="20.73" y1="7" x2="18.5" y2="9.5" />
        <line x1="3.27" y1="17" x2="5.5" y2="14.5" />
        <line x1="20.73" y1="17" x2="18.5" y2="14.5" />
      </svg>

      <!-- Diamond / ice crystal shape -->
      <svg
        v-else-if="p.shape === 'diamond'"
        class="absolute"
        :style="{
          left: p.x + '%',
          top: p.y + '%',
          width: p.size * 0.7 + 'px',
          height: p.size * 0.7 + 'px',
          opacity: p.opacity * 0.8,
          transform: `rotate(${p.rotation}deg)`,
          filter: `drop-shadow(0 0 ${p.size * 0.3}px ${store.isDark ? 'rgba(160,231,229,0.3)' : 'rgba(0,119,182,0.25)'})`,
        }"
        viewBox="0 0 24 24"
        fill="none"
        :stroke="store.isDark ? '#b2ebf2' : '#0077b6'"
        stroke-width="1.5"
        stroke-linejoin="round"
      >
        <polygon points="12,2 22,12 12,22 2,12" />
        <line x1="12" y1="2" x2="12" y2="22" opacity="0.4" />
        <line x1="2" y1="12" x2="22" y2="12" opacity="0.4" />
      </svg>

      <!-- Circle dot -->
      <div
        v-else
        class="absolute rounded-full"
        :style="{
          left: p.x + '%',
          top: p.y + '%',
          width: (p.size * 0.35) + 'px',
          height: (p.size * 0.35) + 'px',
          opacity: p.opacity,
          background: store.isDark
            ? 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(160,231,229,0.2) 100%)'
            : 'radial-gradient(circle, rgba(0,119,182,0.8) 0%, rgba(0,180,216,0.15) 100%)',
          boxShadow: store.isDark
            ? `0 0 ${p.size * 0.5}px rgba(160,231,229,0.2)`
            : `0 0 ${p.size * 0.5}px rgba(0,119,182,0.2)`,
        }"
      />
    </template>
  </div>
</template>
