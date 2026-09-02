<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'

const isVisible = ref(true)
const progress = ref(0)
const counterEl = ref<HTMLElement | null>(null)
const screenEl = ref<HTMLElement | null>(null)
const contentEl = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()
  if (!screenEl.value || !contentEl.value) return

  const tl = gsap.timeline({
    onComplete: () => {
      if (contentEl.value) {
        gsap.to(contentEl.value, {
          y: -30,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in',
        })
      }
      if (screenEl.value) {
        gsap.to(screenEl.value, {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.6,
          ease: 'power4.inOut',
          delay: 0.2,
          onComplete: () => {
            isVisible.value = false
          },
        })
      } else {
        isVisible.value = false
      }
    },
  })

  // Fast cyber loader 0 -> 100
  tl.to(progress, {
    value: 100,
    duration: 1.2,
    ease: 'power2.inOut',
    onUpdate: () => {
      if (counterEl.value) {
        counterEl.value.textContent = Math.round(progress.value).toString()
      }
    },
  })

  tl.to('.loader-line', {
    scaleX: 1,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
  }, 0.2)
})
</script>

<template>
  <div v-if="isVisible" ref="screenEl" class="loader-screen">
    <div ref="contentEl" class="loader-content">
      <!-- Cyber Circuit Lines -->
      <div class="loader-circuit">
        <div class="loader-line" />
        <div class="loader-line loader-line--mid" />
        <div class="loader-line" />
      </div>

      <!-- Counter -->
      <div class="loader-counter">
        <span ref="counterEl" class="loader-number">0</span>
        <span class="loader-percent">%</span>
      </div>

      <!-- Terminal System Status -->
      <p class="loader-status">
        &gt; BOOTING ROBOTICS_CYLINDER // MOHAMMAD AL FURQON
      </p>
    </div>
  </div>
</template>

<style scoped>
.loader-screen {
  position: fixed;
  inset: 0;
  z-index: 100000;
  background: #030712;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: inset(0% 0% 0% 0%);
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.loader-circuit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 140px;
}

.loader-line {
  width: 70px;
  height: 1.5px;
  background: #00f3ff;
  box-shadow: 0 0 8px #00f3ff;
  transform: scaleX(0);
  transform-origin: center;
}

.loader-line--mid {
  width: 140px;
  opacity: 0.6;
}

.loader-counter {
  display: flex;
  align-items: baseline;
  gap: 2px;
  font-family: 'JetBrains Mono', monospace;
}

.loader-number {
  font-size: 3.5rem;
  font-weight: 300;
  letter-spacing: -0.05em;
  color: #ffffff;
  line-height: 1;
}

.loader-percent {
  font-size: 1.25rem;
  color: #00f3ff;
  font-weight: 400;
}

.loader-status {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #00f3ff;
  opacity: 0.85;
}
</style>
