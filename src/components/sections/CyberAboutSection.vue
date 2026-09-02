<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { personalInfo, education, languages } from '@/data/portfolioData'
import { useJourneyStage } from '@/composables/useJourney'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  User,
  GraduationCap,
  Terminal,
  Cpu,
  Brain,
  ShieldCheck,
  Activity,
  Radio,
  Zap,
} from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref<HTMLElement | null>(null)
let scrollTriggerInstance: ScrollTrigger | null = null

// Copy is choreographed off the shared journey position, so it arrives and
// departs in lockstep with the camera rather than on its own local curve.
const { opacity: contentOpacity, transform: contentTransform } = useJourneyStage(1)

onMounted(async () => {
  await nextTick()
  if (sectionRef.value) {
    scrollTriggerInstance = ScrollTrigger.create({
      id: 'journey-about',
      trigger: sectionRef.value,
      start: 'top top',
      end: '+=1400',
      pin: true,
      anticipatePin: 1,
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

const competencies = [
  {
    title: 'Enterprise Architecture & Database Normalization',
    subtitle: 'Meiwa Industry Japan & Paragon Tech',
    desc: 'Database optimization, inventory subsystems, and HR technology refactoring.',
    icon: Cpu,
  },
  {
    title: 'Machine Learning & Radiographic AI',
    subtitle: 'DenseNet-LSTM & Bangkit Academy',
    desc: 'Deep learning dual-view chest X-ray medical imaging report synthesis.',
    icon: Brain,
  },
  {
    title: 'Cybersecurity Operations & VANS Audits',
    subtitle: 'Rapixus Taiwan & ISHC-RG',
    desc: 'Common Platform Enumeration (CPE), CVSS patch monitoring, and book authoring.',
    icon: ShieldCheck,
  },
]
</script>

<template>
  <section
    ref="sectionRef"
    id="about"
    class="relative w-full h-screen flex items-center justify-center bg-transparent overflow-hidden px-4 sm:px-8 md:px-16 select-none"
  >
    <div
      class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-100 ease-out"
      :style="{
        opacity: contentOpacity.toFixed(2),
        transform: contentTransform,
      }"
    >
      <!-- Left Column: Operator Dossier Specifications (7 cols) -->
      <div class="lg:col-span-7 space-y-6">
        <!-- Section Tag & Headline -->
        <div>
          <div class="flex items-center gap-2 font-mono text-xs text-neon-blue mb-1">
            <Terminal :size="14" />
            <span class="tracking-widest uppercase">01 // OPERATOR DOSSIER</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-bold font-rajdhani text-white uppercase leading-none">
            OPERATOR <span class="text-gradient">SPECIFICATIONS</span>
          </h2>
        </div>

        <!-- Identity & Academic Status Card -->
        <div class="cyber-card p-6 border-cyan-500/30 bg-slate-950/70 backdrop-blur-md">
          <div class="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4">
            <div class="flex items-center gap-2 font-mono text-xs text-neon-blue font-bold">
              <User :size="15" />
              <span>IDENTITY // MOHAMMAD AL FURQON</span>
            </div>
            <span class="telemetry-tag text-[10px]">VERIFIED_OPERATOR</span>
          </div>

          <p class="text-sm text-slate-300 leading-relaxed font-sans mb-4">
            Fullstack Software Engineer &amp; Machine Learning Specialist. Informatics graduate from
            <strong class="text-white">Universitas Sebelas Maret (GPA 3.77 / 4.00)</strong> with international engineering background spanning Japanese automotive manufacturing, cybersecurity vulnerability analysis in Taiwan, and enterprise HR tech.
          </p>

          <!-- Languages Matrix -->
          <div class="grid grid-cols-3 gap-3 pt-3 border-t border-cyan-500/20 font-mono text-xs">
            <div
              v-for="lang in languages"
              :key="lang.name"
              class="space-y-1"
            >
              <div class="flex items-center justify-between text-[11px]">
                <span class="text-slate-300">{{ lang.name }}</span>
                <span class="text-neon-blue font-bold">{{ lang.percentage }}%</span>
              </div>
              <div class="w-full h-1 bg-slate-900 rounded-full overflow-hidden border border-cyan-500/20">
                <div
                  class="h-full bg-neon-blue rounded-full shadow-[0_0_6px_#00f3ff]"
                  :style="{ width: `${lang.percentage}%` }"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- 3 Core Competencies Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div
            v-for="(comp, idx) in competencies"
            :key="idx"
            class="cyber-card p-4 border-slate-800/80 hover:border-neon-blue/60 transition-all duration-300 bg-slate-950/60 backdrop-blur-sm group"
          >
            <div class="flex items-center justify-between mb-2">
              <div class="w-8 h-8 rounded bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                <component :is="comp.icon" :size="16" />
              </div>
              <span class="text-[10px] font-mono text-cyan-400 font-bold">0{{ idx + 1 }}</span>
            </div>
            <h4 class="text-sm font-bold font-rajdhani text-white group-hover:text-neon-blue transition-colors leading-tight mb-1">
              {{ comp.title }}
            </h4>
            <p class="text-[11px] font-mono text-slate-400 leading-tight">
              // {{ comp.subtitle }}
            </p>
          </div>
        </div>
      </div>

      <!-- Right Column: Unobstructed 3D Biometric Scanner Core HUD Frame (5 cols) -->
      <div class="lg:col-span-5 relative flex items-center justify-center pointer-events-none">
        <div class="artifact-frame w-full max-w-[420px] aspect-square relative flex items-center justify-center">
          <!-- Outer Scanning Ring -->
          <div class="absolute inset-0 rounded-full border border-cyan-500/25 animate-spin" style="animation-duration: 25s;" />
          <div class="absolute inset-4 rounded-full border border-dashed border-cyan-500/20 animate-spin" style="animation-duration: 18s; animation-direction: reverse;" />
          <div class="absolute inset-10 rounded-full border border-cyan-500/15" />

          <!-- Target Reticle Ticks -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-neon-blue/60" />
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-neon-blue/60" />
          <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-neon-blue/60" />
          <div class="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-neon-blue/60" />

          <!-- Telemetry Badges Around Core (NO blocking cards!) -->
          <div class="absolute top-3 right-3 px-2.5 py-1 bg-abyss/85 border border-cyan-500/30 rounded font-mono text-[10px] text-neon-blue backdrop-blur-sm flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>NEURAL_SYNC_100%</span>
          </div>

          <div class="absolute bottom-3 left-3 px-2.5 py-1 bg-abyss/85 border border-cyan-500/30 rounded font-mono text-[10px] text-cyan-300 backdrop-blur-sm flex items-center gap-1.5">
            <Activity :size="12" class="text-neon-blue" />
            <span>BIO_CORE // 0.42_THz</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
