<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { personalInfo, education, experiences } from '@/data/portfolioData'
import { useCyberAudio } from '@/composables/useCyberAudio'
import { useExperienceStore } from '@/stores/experienceStore'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Download,
  Send,
  Terminal,
} from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const audio = useCyberAudio()
const store = useExperienceStore()
const heroRef = ref<HTMLElement | null>(null)
const heroProgress = ref(0)
let scrollTriggerInstance: ScrollTrigger | null = null

onMounted(async () => {
  await nextTick()
  if (heroRef.value) {
    scrollTriggerInstance = ScrollTrigger.create({
      trigger: heroRef.value,
      start: 'top top',
      end: '+=1200',
      pin: true,
      anticipatePin: 1,
      scrub: 1.0,
      onUpdate: (self) => {
        heroProgress.value = self.progress
        store.journeyProgress = self.progress * 1.0 // 0.0 -> 1.0
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

function scrollTo(selector: string) {
  audio.playTick()
  const el = document.querySelector(selector)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    ref="heroRef"
    id="hero"
    class="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-8 md:px-16 overflow-hidden bg-transparent"
  >
    <!-- Background Ambient Glow -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-neon-blue/10 blur-[140px] pointer-events-none rounded-full" />

    <div class="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <!-- Left Column: Typography & Action (7 cols) -->
      <div
        class="lg:col-span-7 transition-all duration-100 ease-out"
        :style="{
          opacity: Math.max(0, 1 - heroProgress * 1.5).toFixed(2),
          transform: `translateY(${(-heroProgress * 50).toFixed(1)}px)`,
        }"
      >
        <!-- Telemetry Status Tag -->
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full font-mono text-xs text-neon-blue mb-6">
          <span class="w-2 h-2 rounded-full bg-neon-blue animate-ping" />
          <span>CYBERNETICS // MOHAMMAD AL FURQON</span>
        </div>

        <!-- Main Headline -->
        <h1 class="text-4xl sm:text-6xl md:text-7xl font-black font-rajdhani text-white uppercase tracking-tight leading-[0.92] mb-6">
          <span class="text-slate-400 block text-2xl sm:text-3xl font-light mb-1">
            SOFTWARE ENGINEER &amp;
          </span>
          <span class="text-gradient block">
            MACHINE LEARNING
          </span>
          <span class="text-white block text-3xl sm:text-5xl md:text-6xl font-bold">
            RESEARCHER
          </span>
        </h1>

        <!-- Crisp Tagline -->
        <p class="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed mb-8">
          Architecting high-performance web systems and deep learning models.
          International engineering background spanning <span class="text-neon-blue font-semibold">Japan</span>,
          <span class="text-neon-blue font-semibold">Taiwan</span>, and enterprise HR tech.
        </p>

        <!-- Kinetic Action Buttons -->
        <div class="flex flex-wrap items-center gap-4 mb-10">
          <a
            href="/Mohammad_Al_Furqon_CV.pdf"
            download="Mohammad_Al_Furqon_CV.pdf"
            class="hud-btn hud-btn-primary text-sm py-3 px-6 cursor-pointer group flex items-center gap-2"
            @click="audio.playLockOn()"
          >
            <Download :size="16" />
            <span>DOWNLOAD CV / RESUME</span>
          </a>

          <button
            type="button"
            class="hud-btn text-sm py-3 px-6 cursor-pointer"
            @click="scrollTo('#contact')"
          >
            <Send :size="14" />
            <span>TRANSMIT INQUIRY</span>
          </button>
        </div>

        <!-- 3 Clean Metrics -->
        <div class="grid grid-cols-3 gap-3 max-w-lg pt-4 border-t border-cyan-500/20">
          <div class="p-3 bg-slate-900/50 border border-cyan-500/15 rounded">
            <p class="text-2xl sm:text-3xl font-mono font-black text-neon-blue">
              {{ education[0].gpa.split('/')[0].trim() }}
            </p>
            <p class="text-[10px] font-mono text-slate-400 uppercase">Informatics GPA</p>
          </div>

          <div class="p-3 bg-slate-900/50 border border-cyan-500/15 rounded">
            <p class="text-2xl sm:text-3xl font-mono font-black text-neon-blue">
              {{ experiences.length }}
            </p>
            <p class="text-[10px] font-mono text-slate-400 uppercase">Career Roles</p>
          </div>

          <div class="p-3 bg-slate-900/50 border border-cyan-500/15 rounded">
            <p class="text-2xl sm:text-3xl font-mono font-black text-neon-blue">
              2
            </p>
            <p class="text-[10px] font-mono text-slate-400 uppercase">Publications</p>
          </div>
        </div>
      </div>

      <!-- Right Column: 3D Holographic Reticle Frame (Frames the Master 3D Gyro Core) -->
      <div
        class="lg:col-span-5 relative flex items-center justify-center pointer-events-none transition-all duration-100 ease-out"
        :style="{
          opacity: Math.max(0, 1 - heroProgress * 1.5).toFixed(2),
        }"
      >
        <div class="w-full max-w-[420px] aspect-square relative flex items-center justify-center">
          <!-- Orbiting Reticle Rings -->
          <div class="absolute inset-0 rounded-full border border-cyan-500/25 animate-spin" style="animation-duration: 35s;" />
          <div class="absolute inset-4 rounded-full border border-dashed border-cyan-500/20 animate-spin" style="animation-duration: 25s; animation-direction: reverse;" />
          <div class="absolute inset-12 rounded-full border border-cyan-500/15" />

          <!-- Telemetry Status -->
          <div class="absolute bottom-2 right-2 px-2.5 py-1 bg-abyss/85 border border-cyan-500/30 rounded font-mono text-[10px] text-neon-blue backdrop-blur-sm">
            GYRO_CORE // 3D_ACTIVE
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
