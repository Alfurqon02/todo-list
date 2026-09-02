import { defineStore } from 'pinia'
import { computed, ref, watch, watchEffect } from 'vue'
import { usePreferredReducedMotion, useStorage } from '@vueuse/core'

export type ExperienceMode = 'immersive' | 'clean'

export const useExperienceStore = defineStore('experience', () => {
  // ==========================================
  // DARK THEME (Always dark for Cybernetics theme)
  // ==========================================
  // Dark is the default and what the palette is designed around, but light is
  // a real alternative rather than a forced value.
  //
  // Stored explicitly rather than through useDark(): that helper writes "auto"
  // whenever the chosen theme happens to match the OS preference, so a visitor
  // on a dark OS who picks light would silently get dark back on reload.
  const theme = useStorage<'dark' | 'light'>('portfolio-theme', 'dark')
  const isDark = computed(() => theme.value === 'dark')

  function toggleDark() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  watchEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement

    // `theme-switching` kills transitions for the duration of the swap, and
    // reading offsetHeight forces the style pass to happen inside that window.
    //
    // The forced pass is not decorative. Swapping the palette variables alone
    // leaves elements that were already on the page painted with their old
    // resolved colours — the variables read correctly on those elements, but
    // the properties consuming them are not re-resolved. Freshly created
    // elements pick up the new theme fine, which is what makes it look like
    // only part of the page responds. Verified on a production build: without
    // this the cards, HUD buttons and telemetry tags stay dark in light mode.
    root.classList.add('theme-switching')
    // On <html> rather than <body> so the :root-level palette aliases in
    // main.css resolve against the active theme.
    root.classList.toggle('dark', theme.value === 'dark')
    void root.offsetHeight
    root.classList.remove('theme-switching')
  })

  // ==========================================
  // EXPERIENCE MODE (Cyber-Carousel vs Terminal Log)
  // ==========================================
  // If URL has #clean (or #terminal), automatically show clean mode; otherwise default to normal (immersive).
  function getModeFromHash(): ExperienceMode | null {
    if (typeof window === 'undefined') return null
    const hash = window.location.hash.toLowerCase()
    if (hash === '#clean' || hash === '#terminal') {
      return 'clean'
    }
    return null
  }

  const initialHashMode = getModeFromHash()
  const storedMode = useStorage<ExperienceMode>('portfolio-mode', 'immersive')
  // Use hash if present, otherwise storedMode (or default 'immersive')
  const mode = ref<ExperienceMode>(initialHashMode ?? storedMode.value)

  // Listen to hash changes in browser
  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', () => {
      const hashMode = getModeFromHash()
      if (hashMode) {
        mode.value = hashMode
      } else if (window.location.hash === '' || window.location.hash === '#immersive' || window.location.hash === '#3d') {
        mode.value = 'immersive'
      }
    })
  }

  // ==========================================
  // 3D FLIGHT TOGGLE (navbar switch)
  //
  // Turning this off unmounts the WebGL corridor and collapses the scroll
  // choreography to plain static content, without swapping the whole layout
  // the way the Terminal Log mode does.
  // ==========================================
  const animationsEnabled = useStorage<boolean>('portfolio-animations', true)

  // Rule 1.2: reduced motion -> land on the immersive layout with the flight off
  const reducedMotion = usePreferredReducedMotion()
  if (reducedMotion.value === 'reduce') {
    animationsEnabled.value = false
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
