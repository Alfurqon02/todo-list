<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useCyberAudio } from '@/composables/useCyberAudio'
import { useExperienceStore } from '@/stores/experienceStore'
import { contentProgress, useJourneyShards, useJourneyStage } from '@/composables/useJourney'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Terminal,
  ShieldAlert,
  BrainCircuit,
  FileCode2,
} from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const audio = useCyberAudio()
const store = useExperienceStore()
const sectionRef = ref<HTMLElement | null>(null)
const activeIndex = ref(0)
let scrollTriggerInstance: ScrollTrigger | null = null

// Copy is choreographed off the shared journey position, so the stage arrives
// and departs in lockstep with the camera rather than on its own local curve.
const { opacity: stageOpacity, scale: stageScale, filter: stageFilter } = useJourneyStage(4)

const copyRef = ref<HTMLElement | null>(null)
useJourneyShards(4, copyRef)

const researchProjects = [
  {
    type: 'PUBLISHED BOOK',
    title: 'Strategi Membangun Portal Website Aman Dari Serangan Judi Online',
    institution: 'ISHC-RG, FATISDA UNS',
    period: '2023 — Published Work',
    highlights: [
      'Comprehensive defense architecture against automated web attacks and exploit scripts.',
      'Published with Intelligent System & Humanized Computing Research Group.',
    ],
    icon: ShieldAlert,
    tags: ['Cybersecurity', 'Web Defense', 'Book'],
    badge: 'ARCHIVE_01',
  },
  {
    type: 'UNDERGRADUATE THESIS',
    title: 'Dual-View Radiographic Captioning using DenseNet-LSTM',
    institution: 'Universitas Sebelas Maret',
    period: '2024 — 2026',
    highlights: [
      'Deep learning multi-view chest X-ray medical diagnostic radiology report generation.',
      'Combined DenseNet feature extraction with LSTM natural language sequence generation.',
    ],
    icon: BrainCircuit,
    tags: ['Deep Learning', 'Computer Vision', 'Medical AI'],
    badge: 'ARCHIVE_02',
  },
]

onMounted(async () => {
  await nextTick()
  if (sectionRef.value) {
    scrollTriggerInstance = ScrollTrigger.create({
      id: 'journey-research',
      trigger: sectionRef.value,
      start: 'top top',
      end: '+=1400',
      pin: true,
      anticipatePin: 1,
      scrub: 1.2,
    })

    // Journey-driven, for the same reason as the experience carousel.
    watch(
      () => store.journeyProgress,
      (p) => {
        const visible = contentProgress(4, p)
        const calculatedIndex = visible > 0.5 ? 1 : 0
        if (calculatedIndex !== activeIndex.value) {
          activeIndex.value = calculatedIndex
          store.activeResearchIndex = calculatedIndex
          audio.playTick()
        }
      },
      { immediate: true }
    )
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
  <div ref="sectionRef" id="research" class="relative w-full h-screen overflow-hidden bg-transparent flex flex-col justify-between select-none px-4 sm:px-8 md:px-16 border-t border-cyan-500/15">
    <!-- Top Telemetry Header -->
    <div
      class="relative z-20 pt-20 max-w-6xl mx-auto w-full flex items-center justify-between pointer-events-none"
      :style="{ opacity: stageOpacity.toFixed(2) }"
    >
      <div>
        <div class="flex items-center gap-2 font-mono text-xs text-neon-blue mb-1">
          <Terminal :size="14" />
          <span class="tracking-widest uppercase">04 // RESEARCH &amp; PUBLICATIONS</span>
        </div>
        <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold font-rajdhani text-white uppercase leading-none">
          ACADEMIC SCHEMATICS &amp; <span class="text-gradient">PUBLICATIONS</span>
        </h2>
      </div>

      <div class="hidden sm:flex items-center gap-2 telemetry-tag">
        <FileCode2 :size="12" />
        <span>ARCHIVE 0{{ activeIndex + 1 }} / 02</span>
      </div>
    </div>

    <!-- Center Stage: Frame for Master 3D Holographic Prism + Blueprint Cards -->
    <div
      class="relative z-10 max-w-6xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      :style="{
        transform: `scale(${stageScale.toFixed(3)})`,
        opacity: stageOpacity.toFixed(2),
        filter: stageFilter,
      }"
    >
      <!-- Left: Frame area for Master 3D Hologram Prism Canvas (5 cols) -->
      <div class="hidden lg:col-span-5 lg:flex items-center justify-center relative pointer-events-none">
        <div class="artifact-frame w-full max-w-[340px] aspect-square relative flex items-center justify-center">
          <div class="w-56 h-56 rounded-lg border border-cyan-500/25 animate-spin" style="animation-duration: 25s;" />
          <div class="w-64 h-64 rounded-full border border-dashed border-cyan-500/15 animate-spin" style="animation-duration: 35s; animation-direction: reverse;" />

          <!-- Center Readout -->
          <div class="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-abyss/90 border border-cyan-500/30 rounded font-mono text-xs text-neon-blue whitespace-nowrap backdrop-blur-sm">
            SCHEMATIC // 3D_ROTATING
          </div>
        </div>
      </div>

      <!-- Right: Active Blueprint Card (7 cols) -->
      <div ref="copyRef" class="lg:col-span-7">
        <article
          class="cyber-card p-6 sm:p-8 border-neon-blue shadow-[0_0_35px_rgba(0,243,255,0.25)] laser-scan-container transition-all duration-300 backdrop-blur-sm"
        >
          <!-- Header -->
          <div class="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 font-mono text-xs">
            <div class="flex items-center gap-2 text-neon-blue font-bold">
              <component :is="researchProjects[activeIndex].icon" :size="16" />
              <span>{{ researchProjects[activeIndex].badge }}</span>
            </div>
            <span class="telemetry-tag text-[10px]">
              {{ researchProjects[activeIndex].type }}
            </span>
          </div>

          <!-- Title & Institution -->
          <h3 class="text-xl sm:text-2xl font-bold font-rajdhani text-white mb-1 leading-snug">
            {{ researchProjects[activeIndex].title }}
          </h3>
          <p class="text-xs font-mono text-cyan-400 mb-5">
            {{ researchProjects[activeIndex].institution }} • {{ researchProjects[activeIndex].period }}
          </p>

          <!-- Highlights -->
          <div class="space-y-2 mb-6">
            <div
              v-for="(point, pIdx) in researchProjects[activeIndex].highlights"
              :key="pIdx"
              class="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-sans"
            >
              <span class="text-neon-blue font-mono font-bold mt-0.5">›</span>
              <span>{{ point }}</span>
            </div>
          </div>

          <!-- Tags -->
          <div class="pt-4 border-t border-cyan-500/15 flex items-center justify-between">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in researchProjects[activeIndex].tags"
                :key="tag"
                class="text-[11px] font-mono px-2.5 py-0.5 bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 rounded"
              >
                #{{ tag }}
              </span>
            </div>
            <span class="text-[10px] font-mono text-slate-400">STATUS: VERIFIED</span>
          </div>
        </article>
      </div>
    </div>

    <!-- Bottom Scroll Cue -->
    <div
      class="relative z-20 pb-8 px-6 flex flex-col items-center gap-2 pointer-events-none"
      :style="{ opacity: stageOpacity.toFixed(2) }"
    >
      <div class="flex items-center gap-2 text-xs font-mono text-slate-400 bg-abyss/85 px-4 py-1 border border-cyan-500/20 rounded-full backdrop-blur-sm">
        <span class="w-1.5 h-1.5 rounded-full bg-neon-blue animate-ping" />
        <span>SCROLL TO EXPLORE ARCHIVES</span>
      </div>
    </div>
  </div>
</template>
