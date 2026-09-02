<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { organizations } from '@/data/portfolioData'
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
const scrollProgress = ref(0)
let scrollTriggerInstance: ScrollTrigger | null = null

const zoomScale = computed(() => {
  const p = scrollProgress.value
  if (p < 0.15) {
    return 1.25 - 0.25 * (p / 0.15)
  }
  return 1.0
})

const transitionOpacity = computed(() => {
  const p = scrollProgress.value
  if (p < 0.1) return Math.max(0.2, p / 0.1)
  return 1.0
})

onMounted(async () => {
  await nextTick()
  if (sectionRef.value) {
    scrollTriggerInstance = ScrollTrigger.create({
      id: 'journey-orgs',
      trigger: sectionRef.value,
      start: 'top 85%',
      end: 'bottom top',
      scrub: 1.0,
      onUpdate: (self) => {
        scrollProgress.value = self.progress
      },
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
      class="max-w-6xl mx-auto transition-transform duration-100 ease-out"
      :style="{
        transform: `scale(${zoomScale.toFixed(3)})`,
        opacity: transitionOpacity.toFixed(2),
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
