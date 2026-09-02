<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { organizations } from '@/data/portfolioData'
import { useJourneyShards, useJourneyStage } from '@/composables/useJourney'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Users,
  Terminal,
  Award,
  BookOpen,
  Calendar,
  Sparkles,
  Flame,
} from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)
let scrollTriggerInstance: ScrollTrigger | null = null

// Was the only journey section running its own bespoke zoom, which is why it
// looked static next to the others. Now on the shared choreography: it arrives
// on the research flight and sheds its blocks as the debris lifts away.
const { opacity: stageOpacity, scale: stageScale, filter: stageFilter } = useJourneyStage(5)

const copyRef = ref<HTMLElement | null>(null)
useJourneyShards(5, copyRef)

onMounted(async () => {
  await nextTick()
  if (sectionRef.value) {
    scrollTriggerInstance = ScrollTrigger.create({
      id: 'journey-orgs',
      trigger: sectionRef.value,
      start: 'top 85%',
      end: 'bottom top',
      scrub: 1.0,
    })
  }
})

onBeforeUnmount(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
    scrollTriggerInstance = null
  }
})
</script>

<template>
  <section
    ref="sectionRef"
    id="community"
    class="relative py-24 px-4 sm:px-8 md:px-16 bg-transparent border-t border-cyan-500/15 overflow-hidden"
  >
    <div
      ref="copyRef"
      class="max-w-6xl mx-auto"
      :style="{
        transform: `scale(${stageScale.toFixed(3)})`,
        opacity: stageOpacity.toFixed(2),
        filter: stageFilter,
      }"
    >
      <!-- Section Header -->
      <div class="flex items-center gap-2 font-mono text-xs text-neon-blue mb-1">
        <Terminal :size="14" />
        <span class="tracking-widest uppercase">05 // COMMUNITY &amp; LEADERSHIP</span>
      </div>
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold font-rajdhani text-white uppercase mb-4">
        COHORT MISSIONS &amp; <span class="text-gradient">ORGANIZATIONAL IMPACT</span>
      </h2>
      <p class="text-slate-400 max-w-2xl text-sm sm:text-base mb-12 font-sans">
        Collaborative leadership, tech curriculum coordination, and Google Bangkit Machine Learning cohort achievements.
      </p>

      <!-- Missions Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(org, idx) in organizations"
          :key="org.name"
          class="cyber-card p-6 border-slate-800 hover:border-neon-blue transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between border-b border-cyan-500/15 pb-3 mb-3">
              <div class="flex items-center gap-2">
                <Users :size="16" class="text-neon-blue" />
                <span class="font-mono text-xs text-neon-blue font-bold">
                  MISSION_{{ String(idx + 1).padStart(2, '0') }}
                </span>
              </div>
              <span class="telemetry-tag text-[10px]">
                {{ org.period }}
              </span>
            </div>

            <h3 class="text-xl font-bold font-rajdhani text-white mb-1">
              {{ org.name }}
            </h3>
            <p class="text-xs font-mono text-neon-blue mb-3">
              ROLE: {{ org.role }}
            </p>

            <p class="text-sm text-slate-300 leading-relaxed font-sans mb-4">
              {{ org.description }}
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
