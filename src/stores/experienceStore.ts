import { defineStore } from 'pinia'
import { computed, ref, watch, watchEffect } from 'vue'
import { usePreferredReducedMotion, useStorage } from '@vueuse/core'

export type ExperienceMode = 'immersive' | 'clean'

export const useExperienceStore = defineStore('experience', () => {
  const theme = useStorage<'dark' | 'light'>('portfolio-theme', 'dark')
  const isDark = computed(() => theme.value === 'dark')

  function toggleDark() {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('theme-switching')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.documentElement.classList.remove('theme-switching')
        })
      })
    }
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  watchEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme.value === 'dark')
      const meta = document.querySelector('meta[name="theme-color"]')
      if (meta) {
        meta.setAttribute('content', theme.value === 'dark' ? '#0c0f0d' : '#f2efe9')
      }
    }
  })

  function getModeFromHash(): ExperienceMode | null {
    if (typeof window === 'undefined') return null
    const hash = window.location.hash.toLowerCase()
    if (hash === '#clean' || hash === '#terminal' || hash === '#home') return 'clean'
    if (hash === '#3d' || hash === '#immersive') return 'immersive'
    return null
  }

  const initialHashMode = getModeFromHash()
  const storedMode = useStorage<ExperienceMode>('portfolio-view', 'clean')
  const mode = ref<ExperienceMode>(initialHashMode ?? storedMode.value)

  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', () => {
      const hashMode = getModeFromHash()
      if (hashMode) mode.value = hashMode
    })
  }

  const animationsEnabled = useStorage<boolean>('portfolio-animations', true)
  const reducedMotion = usePreferredReducedMotion()
  if (reducedMotion.value === 'reduce') {
    animationsEnabled.value = false
  }

  const soundEnabled = useStorage<boolean>('portfolio-sound', false)
  const activeNodeIndex = ref(0)
  const totalNodes = ref(11)
  const carouselRotation = ref(0)
  const journeyProgress = ref(0)
  const activeSkillIndex = ref(0)
  const activeResearchIndex = ref(0)

  watch(mode, (newMode) => {
    storedMode.value = newMode
  })

  function setMode(newMode: ExperienceMode, remember = true) {
    mode.value = newMode
    if (remember) {
      storedMode.value = newMode
    }
  }

  function toggleMode() {
    mode.value = mode.value === 'immersive' ? 'clean' : 'immersive'
  }

  function toggleSound() {
    soundEnabled.value = !soundEnabled.value
  }

  function toggleAnimations() {
    animationsEnabled.value = !animationsEnabled.value
  }

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

  const scrollProgress = ref(0)

  function updateScrollProgress() {
    if (typeof window === 'undefined') return
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = docHeight > 0 ? window.scrollY / docHeight : 0
  }

  return {
    theme,
    isDark,
    toggleDark,
    mode,
    setMode,
    toggleMode,
    animationsEnabled,
    toggleAnimations,
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
