import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useDark, useToggle, usePreferredReducedMotion, useStorage } from '@vueuse/core'

export type ExperienceMode = 'immersive' | 'clean'

export const useExperienceStore = defineStore('experience', () => {
  // ==========================================
  // DARK THEME (Always dark for Cybernetics theme)
  // ==========================================
  const isDark = useDark({
    selector: 'body',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
  })
  isDark.value = true
  const toggleDark = useToggle(isDark)

  // ==========================================
  // ONBOARDING BOOT MODAL
  // ==========================================
  const modalDismissed = useStorage<boolean>('portfolio-boot-dismissed', false)
  const showModeModal = ref(!modalDismissed.value)

  // ==========================================
  // EXPERIENCE MODE (Cyber-Carousel vs Terminal Log)
  // ==========================================
  const storedMode = useStorage<ExperienceMode>('portfolio-mode', 'immersive')
  const mode = ref<ExperienceMode>(storedMode.value)

  // Rule 1.2: Reduced motion -> default to clean mode
  const reducedMotion = usePreferredReducedMotion()
  if (reducedMotion.value === 'reduce') {
    mode.value = 'clean'
    storedMode.value = 'clean'
  }

  // Audio SFX state
  const soundEnabled = useStorage<boolean>('portfolio-sound', false)

  // Active Orbit Node
  const activeNodeIndex = ref(0)

  // Total nodes in carousel
  const totalNodes = ref(11)

  // Global carousel rotation angle
  const carouselRotation = ref(0)

  // Continuous 3D Chained Journey progress (0.0 to 5.0)
  const journeyProgress = ref(0)
  const activeSkillIndex = ref(0)
  const activeResearchIndex = ref(0)

  // Sync mode changes to storage
  watch(mode, (newMode) => {
    storedMode.value = newMode
  })

  function setMode(newMode: ExperienceMode, remember = true) {
    mode.value = newMode
    if (remember) {
      storedMode.value = newMode
      modalDismissed.value = true
    }
    showModeModal.value = false
  }

  function toggleMode() {
    mode.value = mode.value === 'immersive' ? 'clean' : 'immersive'
  }

  function toggleSound() {
    soundEnabled.value = !soundEnabled.value
  }

  function openBootModal() {
    showModeModal.value = true
  }

  function closeBootModal() {
    showModeModal.value = false
    modalDismissed.value = true
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
        if (fps < 28) {
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

  // ==========================================
  // SCROLL PROGRESS (for 3D reactions)
  // ==========================================
  const scrollProgress = ref(0)

  function updateScrollProgress() {
    if (typeof window === 'undefined') return
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = docHeight > 0 ? window.scrollY / docHeight : 0
  }

  return {
    isDark,
    toggleDark,
    mode,
    setMode,
    toggleMode,
    showModeModal,
    openBootModal,
    closeBootModal,
    soundEnabled,
    toggleSound,
    activeNodeIndex,
    totalNodes,
    carouselRotation,
    journeyProgress,
    activeSkillIndex,
    activeResearchIndex,
    scrollProgress,
    updateScrollProgress,
    showFpsWarning,
    startFpsMonitor,
    stopFpsMonitor,
    dismissFpsWarning,
  }
})
