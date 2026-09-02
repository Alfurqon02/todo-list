<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { experiences, type Experience } from '@/data/portfolioData'
import { useCyberAudio } from '@/composables/useCyberAudio'
import { useExperienceStore } from '@/stores/experienceStore'
import { contentProgress, useJourneyStage } from '@/composables/useJourney'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Briefcase,
  Terminal,
  Activity,
  Layers,
  X,
} from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const audio = useCyberAudio()
const store = useExperienceStore()
const sectionRef = ref<HTMLElement | null>(null)
const activeInspectorNode = ref<Experience | null>(null)

const radius = ref(620)
const currentAngle = ref(0)
const activeIndex = ref(0)
const totalCount = experiences.length
const step = (2 * Math.PI) / totalCount

let scrollTriggerInstance: ScrollTrigger | null = null

function updateRadius() {
  if (typeof window === 'undefined') return
  const w = window.innerWidth
  if (w < 640) radius.value = 380
  else if (w < 1024) radius.value = 500
  else radius.value = 620
}

// Copy is choreographed off the shared journey position, so the stage arrives
// and departs in lockstep with the camera rather than on its own local curve.
const { opacity: stageOpacity, scale: stageScale } = useJourneyStage(2)

// Compute 3D cylinder transform for each card (Rule 4.2)
function getTransform(index: number) {
  const angle = index * step + currentAngle.value
  const sinA = Math.sin(angle)
  const cosA = Math.cos(angle)

  const x = radius.value * sinA
  const z = radius.value * (cosA - 1)
  const rotationY = -(angle * 180) / Math.PI

  const depthNormalized = (cosA + 1) / 2
  const isFront = cosA > 0.55
  const opacity = Math.max(0.08, Math.pow(depthNormalized, 1.8))
  const scale = 0.82 + 0.22 * Math.max(0, cosA)
  const zIndex = Math.round(depthNormalized * 100)

  return {
    transform: `translate3d(${x.toFixed(2)}px, 0px, ${z.toFixed(2)}px) rotateY(${rotationY.toFixed(2)}deg) scale(${scale.toFixed(3)})`,
    opacity,
    zIndex,
    isFront,
  }
}

onMounted(async () => {
  updateRadius()
  window.addEventListener('resize', updateRadius, { passive: true })
  await nextTick()

  if (sectionRef.value) {
    const totalRotationAngle = (totalCount - 1) * step

    scrollTriggerInstance = ScrollTrigger.create({
      id: 'journey-experience',
      trigger: sectionRef.value,
      start: 'top top',
      end: '+=2400',
      pin: true,
      anticipatePin: 1,
      scrub: 1.2,
      onUpdate: (self) => {
        // The carousel has to complete inside the window where this section is
        // still on screen. Spreading it over the section's whole scroll meant
        // the last roles rotated past after the copy had already faded out —
        // you never got past role 8 or 9 of 11.
        const visible = contentProgress(2, self.progress)
        currentAngle.value = -visible * totalRotationAngle
        store.carouselRotation = currentAngle.value

        // round(), not floor(+0.3): the front card is at visible * (n - 1), and
        // the old bias drifted a whole card out of step past role 7.
        const calculatedIndex = Math.min(
          totalCount - 1,
          Math.round(visible * (totalCount - 1))
        )
        if (calculatedIndex !== activeIndex.value) {
          activeIndex.value = calculatedIndex
          store.activeNodeIndex = calculatedIndex
          audio.playTick()
        }
      },
    })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateRadius)
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
    scrollTriggerInstance = null
  }
})

function handleCardClick(index: number, item: Experience) {
  if (activeIndex.value === index) {
    audio.playLockOn()
    activeInspectorNode.value = item
  } else {
    if (scrollTriggerInstance && sectionRef.value) {
      audio.playTick()
      const targetProgress = index / (totalCount - 1)
      const targetScroll =
        scrollTriggerInstance.start +
        targetProgress * (scrollTriggerInstance.end - scrollTriggerInstance.start)
      window.scrollTo({ top: targetScroll, behavior: 'smooth' })
    }
  }
}

function closeInspector() {
  activeInspectorNode.value = null
}
</script>

<template>
  <div ref="sectionRef" id="experience" class="relative w-full h-screen overflow-hidden bg-transparent flex flex-col justify-between select-none">
    <!-- Top Telemetry Header -->
    <div
      class="relative z-20 pt-20 px-6 md:px-16 max-w-6xl mx-auto w-full flex items-center justify-between pointer-events-none transition-opacity duration-150"
      :style="{ opacity: stageOpacity.toFixed(2) }"
    >
      <div>
        <div class="flex items-center gap-2 font-mono text-xs text-neon-blue mb-1">
          <Terminal :size="14" />
          <span class="tracking-widest uppercase">02 // WORK EXPERIENCE</span>
        </div>
        <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold font-rajdhani text-white uppercase leading-none">
          CAREER TRAJECTORY &amp; <span class="text-gradient">IMPACT</span>
        </h2>
      </div>

      <div class="flex items-center gap-3">
        <div class="telemetry-tag">
          <Layers :size="12" />
          <span>ROLE {{ activeIndex + 1 }} / {{ experiences.length }}</span>
        </div>
      </div>
    </div>

    <!-- Center 3D Stage (Cards Orbiting Master 3D Pillar) -->
    <div
      class="relative z-10 w-full flex-1 flex items-center justify-center overflow-visible transition-transform duration-100 ease-out"
      :style="{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
        transform: `scale(${stageScale.toFixed(3)})`,
        opacity: stageOpacity.toFixed(2),
      }"
    >
      <div
        class="relative w-full max-w-4xl h-[380px] flex items-center justify-center"
        style="transform-style: preserve-3d;"
      >
        <!-- Orbital Work Experience Cards -->
        <article
          v-for="(item, index) in experiences"
          :key="item.company + index"
          class="absolute w-[310px] sm:w-[360px] md:w-[400px] p-6 cyber-card cursor-pointer transition-[box-shadow,border-color] duration-300 backdrop-blur-sm"
          :class="[
            activeIndex === index
              ? 'border-neon-blue shadow-[0_0_35px_rgba(0,243,255,0.5)]'
              : 'border-slate-800/80 hover:border-cyan-500/50'
          ]"
          :style="{
            transform: getTransform(index).transform,
            opacity: getTransform(index).opacity,
            zIndex: getTransform(index).zIndex,
            pointerEvents: getTransform(index).isFront ? 'auto' : 'none',
          }"
          @click="handleCardClick(index, item)"
        >
          <div class="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-3">
            <span class="telemetry-tag text-[10px]">
              NODE_{{ String(index + 1).padStart(2, '0') }}
            </span>
            <span class="text-xs font-mono text-neon-blue font-bold">
              {{ item.period }}
            </span>
          </div>

          <h3 class="text-xl font-bold font-rajdhani text-white mb-0.5">
            {{ item.role }}
          </h3>
          <p class="text-sm font-mono text-cyan-400 mb-3">
            @ {{ item.company }}
          </p>

          <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4 font-sans">
            {{ item.highlights[0] }}
          </p>

          <div class="flex items-center justify-between pt-3 border-t border-cyan-500/20">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span
                v-for="tag in (item.tags || []).slice(0, 2)"
                :key="tag"
                class="px-2 py-0.5 text-[10px] font-mono bg-cyan-950/80 text-neon-blue border border-cyan-500/30 rounded"
              >
                {{ tag }}
              </span>
            </div>

            <button
              type="button"
              class="text-xs font-mono text-neon-blue flex items-center gap-1 hover:underline cursor-pointer"
              @click.stop="handleCardClick(index, item)"
            >
              <Maximize2 :size="12" />
              <span>INSPECT</span>
            </button>
          </div>
        </article>
      </div>
    </div>

    <!-- Bottom Scroll Cue -->
    <div
      class="relative z-20 pb-8 px-6 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-150"
      :style="{ opacity: stageOpacity.toFixed(2) }"
    >
      <div class="flex items-center gap-2 text-xs font-mono text-slate-400 bg-abyss/85 px-4 py-1 border border-cyan-500/20 rounded-full backdrop-blur-sm">
        <span class="w-1.5 h-1.5 rounded-full bg-neon-blue animate-ping" />
        <span>SCROLL TO EXPLORE TRAJECTORY</span>
      </div>
    </div>

    <!-- Hologram Inspector Modal -->
    <Transition name="fade">
      <div
        v-if="activeInspectorNode"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-abyss/85 backdrop-blur-md"
        @click.self="closeInspector"
      >
        <div
          class="cyber-card w-full max-w-2xl p-6 md:p-8 animate-fade-in border-neon-blue shadow-[0_0_45px_rgba(0,243,255,0.35)] max-h-[85vh] overflow-y-auto"
        >
          <div class="flex items-center justify-between border-b border-cyan-500/30 pb-3 mb-4">
            <div class="flex items-center gap-2 text-neon-blue font-mono text-xs">
              <Terminal :size="14" />
              <span>ROLE_INSPECTOR // {{ activeInspectorNode.company }}</span>
            </div>
            <button
              type="button"
              class="text-slate-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
              @click="closeInspector"
            >
              <X :size="18" />
            </button>
          </div>

          <h3 class="text-2xl font-bold font-rajdhani text-white mb-1">
            {{ activeInspectorNode.role }}
          </h3>
          <p class="text-sm font-mono text-neon-blue mb-6">
            {{ activeInspectorNode.company }} ({{ activeInspectorNode.period }})
          </p>

          <div class="mb-6 space-y-2">
            <h4 class="text-xs font-mono text-neon-blue uppercase tracking-wider">
              KEY DELIVERABLES:
            </h4>
            <ul class="space-y-1.5">
              <li
                v-for="(point, pIdx) in activeInspectorNode.highlights"
                :key="pIdx"
                class="text-xs text-slate-300 flex items-start gap-2 font-sans"
              >
                <span class="text-neon-blue font-mono font-bold mt-0.5">›</span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>

          <div class="pt-4 border-t border-cyan-500/20 flex items-center justify-between">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="s in (activeInspectorNode.tags || [])"
                :key="s"
                class="px-2 py-0.5 text-xs font-mono bg-cyan-950/80 text-neon-blue border border-cyan-500/30 rounded"
              >
                #{{ s }}
              </span>
            </div>
            <button
              type="button"
              class="hud-btn text-xs py-1.5 px-4 cursor-pointer"
              @click="closeInspector"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
