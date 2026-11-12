<script setup lang="ts">
import { ref, watch } from 'vue'
import { useExperienceStore } from '@/stores/experienceStore'
import ParticleJourneyExperience from '@/components/ParticleJourneyExperience.vue'
import FlagshipExperience from '@/components/FlagshipExperience.vue'

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
    }, 950)
  },
)
</script>

<template>
  <ParticleJourneyExperience v-if="store.mode === 'immersive'" />
  <FlagshipExperience v-else />
  <div v-if="curtain" class="mode-curtain" :class="curtain" aria-hidden="true">
    <span class="mode-curtain-label">{{
      curtain === 'to-3d' ? '00 / ENTERING 3D JOURNEY' : 'RETURNING TO PORTFOLIO'
    }}</span>
  </div>
</template>
