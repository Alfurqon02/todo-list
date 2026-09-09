<script setup lang="ts">
import PortfolioExperience from '@/components/PortfolioExperience.vue'
import CyberJourneyExperience from '@/components/CyberJourneyExperience.vue'
import { useExperienceStore } from '@/stores/experienceStore'
const store = useExperienceStore()
</script>

<template>
  <CyberJourneyExperience v-if="store.mode === 'immersive' && store.animationsEnabled" />
  <PortfolioExperience v-else />
</template>
