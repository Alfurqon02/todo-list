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
        meta.setAttribute('content', theme.value === 'dark' ? '#050a11' : '#e8eff2')
      }
    }
  })

  function getModeFromHash(): ExperienceMode | null {
    if (typeof window === 'undefined') return null
    const hash = window.location.hash.toLowerCase()
    if (hash === '#clean' || hash === '#index' || hash === '#reading') return 'clean'
    if (hash === '#3d' || hash === '#immersive') return 'immersive'
    return null
  }

  const initialHashMode = getModeFromHash()
  const storedMode = useStorage<ExperienceMode>('portfolio-chained-mode', 'immersive')
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
  const activeSystemIndex = ref(0)
  const activeDomainIndex = ref(0)
  const activeNodeIndex = ref(0)
  const activeSkillIndex = ref(0)
  const scrollProgress = ref(0)

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
    activeSystemIndex,
    activeDomainIndex,
    activeNodeIndex,
    activeSkillIndex,
    scrollProgress,
    updateScrollProgress,
  }
})
