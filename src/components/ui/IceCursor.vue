<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useExperienceStore } from '@/stores/experienceStore'

const store = useExperienceStore()

const cursorX = ref(0)
const cursorY = ref(0)
const trailX = ref(0)
const trailY = ref(0)
const trail2X = ref(0)
const trail2Y = ref(0)
const isHovering = ref(false)
const isClicking = ref(false)
const isVisible = ref(false)
const rotation = ref(0)
const cursorText = ref('')

let animFrameId: number | null = null

// Theme-aware colors
const dotColor = computed(() => store.isDark ? '#00d2ff' : '#0077b6')
const ringColor = computed(() => store.isDark ? 'rgba(0, 210, 255, 0.5)' : 'rgba(0, 119, 182, 0.6)')
const glowColor = computed(() => store.isDark ? 'rgba(0, 210, 255, 0.15)' : 'rgba(0, 119, 182, 0.12)')

function handleMouseMove(e: MouseEvent) {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  if (!isVisible.value) isVisible.value = true
}

function handleMouseDown() {
  isClicking.value = true
}

function handleMouseUp() {
  isClicking.value = false
}

function handleMouseEnterInteractive(e: Event) {
  isHovering.value = true
  const target = e.currentTarget as HTMLElement
  cursorText.value = target.getAttribute('data-cursor-text') || ''
}

function handleMouseLeaveInteractive() {
  isHovering.value = false
  cursorText.value = ''
}

function animateTrail() {
  // Primary trail
  trailX.value += (cursorX.value - trailX.value) * 0.18
  trailY.value += (cursorY.value - trailY.value) * 0.18
  // Secondary trail
  trail2X.value += (cursorX.value - trail2X.value) * 0.08
  trail2Y.value += (cursorY.value - trail2Y.value) * 0.08
  // Rotate ring
  rotation.value += 0.4
  animFrameId = requestAnimationFrame(animateTrail)
}

function setupHoverListeners() {
  const interactiveElements = document.querySelectorAll(
    'a, button, input, textarea, [role="button"], .glass-card'
  )
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', handleMouseEnterInteractive)
    el.addEventListener('mouseleave', handleMouseLeaveInteractive)
  })
}

let observer: MutationObserver | null = null

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  window.addEventListener('mousedown', handleMouseDown)
  window.addEventListener('mouseup', handleMouseUp)
  animateTrail()

  setTimeout(setupHoverListeners, 500)
  observer = new MutationObserver(() => setupHoverListeners())
  observer.observe(document.body, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mousedown', handleMouseDown)
  window.removeEventListener('mouseup', handleMouseUp)
  if (animFrameId !== null) cancelAnimationFrame(animFrameId)
  if (observer) observer.disconnect()
})
</script>

<template>
  <div class="cursor-wrapper" :class="{ 'cursor-visible': isVisible }">
    <!-- Outer frost glow (slowest trail) -->
    <div
      class="cursor-glow"
      :class="{ 'cursor-hover': isHovering }"
      :style="{
        left: trail2X + 'px',
        top: trail2Y + 'px',
        background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
      }"
    />

    <!-- Rotating snowflake ring (medium trail) -->
    <svg
      class="cursor-snowflake-ring"
      :class="{ 'cursor-hover': isHovering, 'cursor-click': isClicking }"
      :style="{
        left: trailX + 'px',
        top: trailY + 'px',
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }"
      viewBox="0 0 48 48"
      fill="none"
      :stroke="ringColor"
      stroke-width="1"
      stroke-linecap="round"
    >
      <polygon
        points="24,4 42,14 42,34 24,44 6,34 6,14"
        fill="none"
        :stroke="ringColor"
        stroke-width="0.8"
      />
      <line x1="24" y1="4" x2="24" y2="44" opacity="0.3" />
      <line x1="6" y1="14" x2="42" y2="34" opacity="0.3" />
      <line x1="42" y1="14" x2="6" y2="34" opacity="0.3" />
    </svg>

    <!-- Inner diamond ring -->
    <svg
      class="cursor-diamond-ring"
      :class="{ 'cursor-hover': isHovering, 'cursor-click': isClicking }"
      :style="{
        left: trailX + 'px',
        top: trailY + 'px',
        transform: `translate(-50%, -50%) rotate(${-rotation * 0.6}deg)`,
      }"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="ringColor"
      stroke-width="0.8"
    >
      <polygon points="12,2 22,12 12,22 2,12" opacity="0.6" />
    </svg>

    <!-- Contextual Cursor Text Badge -->
    <div
      v-if="cursorText"
      class="cursor-badge font-mono text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-lg"
      :style="{
        left: (cursorX + 20) + 'px',
        top: (cursorY - 20) + 'px',
        background: dotColor,
        color: store.isDark ? '#000' : '#fff',
      }"
    >
      {{ cursorText }}
    </div>

    <!-- Center dot -->
    <div
      class="cursor-center"
      :class="{ 'cursor-hover': isHovering, 'cursor-click': isClicking }"
      :style="{
        left: cursorX + 'px',
        top: cursorY + 'px',
        background: dotColor,
        boxShadow: `0 0 8px ${dotColor}, 0 0 20px ${glowColor}`,
      }"
    />
  </div>
</template>

<style>
/* Hide default cursor globally */
* {
  cursor: none !important;
}

.cursor-wrapper {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 99999;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cursor-visible {
  opacity: 1;
}

.cursor-glow {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.4s ease, height 0.4s ease;
  filter: blur(2px);
}

.cursor-glow.cursor-hover {
  width: 160px;
  height: 160px;
}

.cursor-snowflake-ring {
  position: absolute;
  width: 44px;
  height: 44px;
  transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
  opacity: 0.6;
}

.cursor-snowflake-ring.cursor-hover {
  width: 64px;
  height: 64px;
  opacity: 0.85;
}

.cursor-diamond-ring {
  position: absolute;
  width: 22px;
  height: 22px;
  transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
  opacity: 0.5;
}

.cursor-badge {
  position: absolute;
  pointer-events: none;
  z-index: 10;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.cursor-center {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.15s ease, height 0.15s ease;
  z-index: 3;
}

.cursor-center.cursor-hover {
  width: 10px;
  height: 10px;
}

@media (hover: none) and (pointer: coarse) {
  .cursor-wrapper {
    display: none !important;
  }
  * {
    cursor: auto !important;
  }
}
</style>
