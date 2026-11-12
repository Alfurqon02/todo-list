<script setup lang="ts">
import { ref, watch } from 'vue'
import { useExperienceStore } from '@/stores/experienceStore'
import CyberJourneyExperience from '@/components/CyberJourneyExperience.vue'
import PortfolioExperience from '@/components/PortfolioExperience.vue'

const store = useExperienceStore()
const curtain = ref<'to-3d' | 'to-reading' | null>(null)
let timer: ReturnType<typeof setTimeout> | undefined

watch(
  () => store.mode,
  (next, prev) => {
    if (!prev || next === prev) return
    window.scrollTo({ top: 0, behavior: 'auto' })
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    clearTimeout(timer)
    curtain.value = next === 'immersive' ? 'to-3d' : 'to-reading'
    timer = setTimeout(() => {
      curtain.value = null
    }, 900)
  },
)
</script>

<template>
  <CyberJourneyExperience v-if="store.mode === 'immersive'" />
  <PortfolioExperience v-else />
  <div v-if="curtain" class="mode-curtain" :class="curtain" aria-hidden="true">
    <span class="mode-curtain-label">
      {{ curtain === 'to-3d' ? '00 / ENTERING 3D CHAINED JOURNEY' : 'OPENING FULL PORTFOLIO INDEX' }}
    </span>
  </div>
</template>
