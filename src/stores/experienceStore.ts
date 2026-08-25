import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useDark, useToggle, usePreferredReducedMotion, useStorage } from '@vueuse/core'

export type ExperienceMode = 'immersive' | 'clean'

export const useExperienceStore = defineStore('experience', () => {
  // ==========================================
  // DARK MODE (synced via VueUse useDark)
  // ==========================================
  const isDark = useDark({
    selector: 'body',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
  })
  const toggleDark = useToggle(isDark)

  // ==========================================
  // EXPERIENCE MODE — always immersive by default
  // No modal, user can toggle via navbar
  // ==========================================
  const storedMode = useStorage<ExperienceMode>('portfolio-mode', 'immersive')
  const mode = ref<ExperienceMode>(storedMode.value)

  // Rule 1.2: Reduced motion → default to clean mode
  const reducedMotion = usePreferredReducedMotion()
  if (reducedMotion.value === 'reduce') {
    mode.value = 'clean'
    storedMode.value = 'clean'
  }

  // Sync mode changes to storage
  watch(mode, (newMode) => {
    storedMode.value = newMode
  })

  function setMode(newMode: ExperienceMode) {
    mode.value = newMode
  }

  function toggleMode() {
    mode.value = mode.value === 'immersive' ? 'clean' : 'immersive'
  }

  // ==========================================
  // SCROLL PROGRESS (for 3D reactions)
  // ==========================================
  const scrollProgress = ref(0)

  function updateScrollProgress() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = docHeight > 0 ? window.scrollY / docHeight : 0
  }

  // ==========================================
  // FPS MONITORING (Rule 2.2)
  // ==========================================
  const showFpsWarning = ref(false)
  let fpsFrames = 0
  let fpsLastTime = performance.now()
  let lowFpsCount = 0
  let fpsAnimId: number | null = null

  function startFpsMonitor() {
    if (mode.value !== 'immersive') return
    fpsFrames = 0
    fpsLastTime = performance.now()
    lowFpsCount = 0

    const checkFps = () => {
      fpsFrames++
      const now = performance.now()
      if (now - fpsLastTime >= 1000) {
        const fps = fpsFrames
        fpsFrames = 0
        fpsLastTime = now
        if (fps < 30) {
          lowFpsCount++
          if (lowFpsCount >= 3) {
            showFpsWarning.value = true
          }
        } else {
          lowFpsCount = Math.max(0, lowFpsCount - 1)
        }
      }
      if (mode.value === 'immersive') {
        fpsAnimId = requestAnimationFrame(checkFps)
      }
    }
    fpsAnimId = requestAnimationFrame(checkFps)
  }

  function stopFpsMonitor() {
    if (fpsAnimId !== null) {
      cancelAnimationFrame(fpsAnimId)
      fpsAnimId = null
    }
    showFpsWarning.value = false
  }

  function dismissFpsWarning() {
    showFpsWarning.value = false
  }

  return {
    // Dark mode
    isDark,
    toggleDark,
    // Experience mode
    mode,
    setMode,
    toggleMode,
    // Scroll
    scrollProgress,
    updateScrollProgress,
    // FPS
    showFpsWarning,
    startFpsMonitor,
    stopFpsMonitor,
    dismissFpsWarning,
  }
})
