<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const isVisible = ref(true)
const progress = ref(0)
const counterEl = ref<HTMLElement | null>(null)

onMounted(() => {
  // Animate progress counter
  const tl = gsap.timeline({
    onComplete: () => {
      // Reveal animation
      gsap.to('.loader-content', {
        y: -40,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      })
      gsap.to('.loader-screen', {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0.3,
        onComplete: () => {
          isVisible.value = false
        },
      })
    },
  })

  // Count 0 → 100
  tl.to(progress, {
    value: 100,
    duration: 1.8,
    ease: 'power2.inOut',
    onUpdate: () => {
      if (counterEl.value) {
        counterEl.value.textContent = Math.round(progress.value).toString()
      }
    },
  })

  // Animate the crystal lines
  tl.to('.loader-line', {
    scaleX: 1,
    duration: 1.2,
    stagger: 0.15,
    ease: 'power3.out',
  }, 0.3)
})
</script>

<template>
  <div v-if="isVisible" class="loader-screen">
    <div class="loader-content">
      <!-- Crystal line pattern -->
      <div class="loader-crystal">
        <div class="loader-line" />
        <div class="loader-line loader-line--mid" />
        <div class="loader-line" />
      </div>

      <!-- Counter -->
      <div class="loader-counter">
        <span ref="counterEl" class="loader-number">0</span>
        <span class="loader-percent">%</span>
      </div>

      <!-- Name reveal -->
      <p class="loader-name">FURQON</p>
    </div>
  </div>
</template>

<style scoped>
.loader-screen {
  position: fixed;
  inset: 0;
  z-index: 100000;
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: inset(0% 0% 0% 0%);
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.loader-crystal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 120px;
}

.loader-line {
  width: 60px;
  height: 1px;
  background: var(--accent-cyan);
  transform: scaleX(0);
  transform-origin: center;
}

.loader-line--mid {
  width: 120px;
  opacity: 0.5;
}

.loader-counter {
  display: flex;
  align-items: baseline;
  gap: 2px;
  font-family: 'JetBrains Mono', monospace;
}

.loader-number {
  font-size: 3rem;
  font-weight: 200;
  letter-spacing: -0.05em;
  color: var(--text-primary);
  line-height: 1;
}

.loader-percent {
  font-size: 1rem;
  color: var(--accent-cyan);
  font-weight: 300;
}

.loader-name {
  font-size: 0.65rem;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--text-secondary);
  font-weight: 400;
}
</style>
