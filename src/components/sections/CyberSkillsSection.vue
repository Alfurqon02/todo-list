<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { skills } from '@/data/portfolioData'
import { useCyberAudio } from '@/composables/useCyberAudio'
import { useExperienceStore } from '@/stores/experienceStore'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Brain,
  ShieldCheck,
  Terminal,
  Zap,
  Radio,
} from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const audio = useCyberAudio()
const store = useExperienceStore()
const sectionRef = ref<HTMLElement | null>(null)
const activeCategoryIndex = ref<number>(0)
let scrollTriggerInstance: ScrollTrigger | null = null

const categoryIcons: Record<string, any> = {
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  'DevOps & Tools': Cpu,
  'AI & ML': Brain,
  Security: ShieldCheck,
}

const activeCategory = computed(() => skills[activeCategoryIndex.value] || skills[0])
const scrollProgress = ref(0)

const stageOpacity = computed(() => {
  const p = scrollProgress.value
  if (p < 0.05) return Math.min(1, p / 0.05)
  if (p > 0.92) return Math.max(0, 1 - (p - 0.92) / 0.08)
  return 1.0
})

const stageScale = computed(() => {
  const p = scrollProgress.value
  if (p < 0.1) return 1.3 - 0.3 * (p / 0.1)
  if (p > 0.88) {
    const t = (p - 0.88) / 0.12
    return 1.0 + 0.6 * (t * t)
  }
  return 1.0
})

onMounted(async () => {
  await nextTick()
  if (sectionRef.value) {
    scrollTriggerInstance = ScrollTrigger.create({
      trigger: sectionRef.value,
      start: 'top top',
      end: '+=1800',
      pin: true,
      anticipatePin: 1,
      scrub: 1.2,
      onUpdate: (self) => {
        scrollProgress.value = self.progress
        store.journeyProgress = 3.0 + self.progress * 1.0 // 3.0 -> 4.0
        const calculatedIndex = Math.min(
          skills.length - 1,
          Math.floor(self.progress * skills.length)
        )
        if (calculatedIndex !== activeCategoryIndex.value) {
          activeCategoryIndex.value = calculatedIndex
          store.activeSkillIndex = calculatedIndex
          audio.playTick()
        }
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

function selectCategory(idx: number) {
  if (scrollTriggerInstance && sectionRef.value) {
    audio.playLockOn()
    const targetProgress = idx / (skills.length - 1)
    const targetScroll =
      scrollTriggerInstance.start +
      targetProgress * (scrollTriggerInstance.end - scrollTriggerInstance.start)
    window.scrollTo({ top: targetScroll, behavior: 'smooth' })
  } else {
    activeCategoryIndex.value = idx
    store.activeSkillIndex = idx
  }
}
</script>

<template>
  <div ref="sectionRef" id="skills" class="relative w-full h-screen overflow-hidden bg-transparent flex flex-col justify-between select-none px-4 sm:px-8 md:px-16 border-t border-cyan-500/15">
    <!-- Top Telemetry Header -->
    <div
      class="relative z-20 pt-20 max-w-6xl mx-auto w-full flex items-center justify-between pointer-events-none transition-opacity duration-150"
      :style="{ opacity: stageOpacity.toFixed(2) }"
    >
      <div>
        <div class="flex items-center gap-2 font-mono text-xs text-neon-blue mb-1">
          <Terminal :size="14" />
          <span class="tracking-widest uppercase">03 // TECHNICAL ARSENAL</span>
        </div>
        <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold font-rajdhani text-white uppercase leading-none">
          CIRCUIT MATRIX &amp; <span class="text-gradient">CAPABILITIES</span>
        </h2>
      </div>

      <div class="hidden sm:flex items-center gap-2 telemetry-tag">
        <Radio :size="12" class="animate-pulse" />
        <span>SATELLITE 0{{ activeCategoryIndex + 1 }} / 0{{ skills.length }}</span>
      </div>
    </div>

    <!-- Center Stage: Frame for Master 3D Sphere on Left + Active Architecture Card on Right -->
    <div
      class="relative z-10 max-w-6xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-transform duration-100 ease-out"
      :style="{
        transform: `scale(${stageScale.toFixed(3)})`,
        opacity: stageOpacity.toFixed(2),
      }"
    >
      <!-- Left: Frame area for Master 3D Holographic Sphere Canvas (5 cols) -->
      <div class="lg:col-span-5 flex items-center justify-center relative pointer-events-none">
        <div class="w-full max-w-[360px] aspect-square relative flex items-center justify-center">
          <div class="w-64 h-64 rounded-full border border-cyan-500/20 animate-spin" style="animation-duration: 30s;" />
          <div class="w-72 h-72 rounded-full border border-dashed border-cyan-500/15 animate-spin" style="animation-duration: 20s; animation-direction: reverse;" />

          <!-- Active Sector Label -->
          <div class="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-abyss/90 border border-cyan-500/30 rounded font-mono text-xs text-neon-blue whitespace-nowrap backdrop-blur-sm">
            LOCKED // {{ activeCategory.name.toUpperCase() }}
          </div>
        </div>
      </div>

      <!-- Right: Active Stack Node Display (7 cols) -->
      <div class="lg:col-span-7 space-y-5">
        <!-- Interactive Category Switcher Chips -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="(cat, idx) in skills"
            :key="cat.name"
            type="button"
            class="font-mono text-xs px-3 py-1.5 rounded transition-all duration-200 border cursor-pointer flex items-center gap-1.5 backdrop-blur-sm"
            :class="[
              activeCategoryIndex === idx
                ? 'bg-neon-blue/20 text-neon-blue border-neon-blue shadow-[0_0_12px_rgba(0,243,255,0.4)] font-bold'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-cyan-500/40'
            ]"
            @click="selectCategory(idx)"
          >
            <component :is="categoryIcons[cat.name] || Code2" :size="12" />
            <span>{{ cat.name }}</span>
          </button>
        </div>

        <!-- Active Category Card -->
        <div class="cyber-card p-6 sm:p-8 border-neon-blue shadow-[0_0_35px_rgba(0,243,255,0.25)] laser-scan-container backdrop-blur-sm">
          <div class="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-6">
            <div>
              <span class="text-xs font-mono text-neon-blue uppercase tracking-wider block mb-0.5">
                // ACTIVE ARSENAL NODE 0{{ activeCategoryIndex + 1 }}
              </span>
              <h3 class="text-2xl sm:text-3xl font-bold font-rajdhani text-white">
                {{ activeCategory.name }}
              </h3>
            </div>
            <div class="w-10 h-10 rounded bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-neon-blue">
              <component :is="categoryIcons[activeCategory.name] || Code2" :size="20" />
            </div>
          </div>

          <!-- Skill Items Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            <div
              v-for="item in activeCategory.items"
              :key="item.name"
              class="p-3 bg-slate-950/60 border border-cyan-500/20 rounded hover:border-neon-blue hover:bg-cyan-950/30 transition-all duration-200 group flex items-center justify-between"
            >
              <span class="font-sans font-medium text-sm text-slate-200 group-hover:text-neon-blue transition-colors">
                {{ item.name }}
              </span>
              <span class="text-[10px] font-mono text-cyan-400 px-1.5 py-0.5 bg-cyan-950/80 border border-cyan-500/30 rounded">
                {{ item.level }}
              </span>
            </div>
          </div>

          <div class="pt-3 border-t border-cyan-500/15 flex items-center justify-between text-xs font-mono text-slate-400">
            <span class="flex items-center gap-1.5 text-neon-blue">
              <Zap :size="14" />
              <span>ENTERPRISE PRODUCTION DEPLOYED</span>
            </span>
            <span>OK_200</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Scroll Cue -->
    <div
      class="relative z-20 pb-8 px-6 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-150"
      :style="{ opacity: stageOpacity.toFixed(2) }"
    >
      <div class="flex items-center gap-2 text-xs font-mono text-slate-400 bg-abyss/85 px-4 py-1 border border-cyan-500/20 rounded-full backdrop-blur-sm">
        <span class="w-1.5 h-1.5 rounded-full bg-neon-blue animate-ping" />
        <span>SCROLL TO EXPLORE ARSENAL</span>
      </div>
    </div>
  </div>
</template>
