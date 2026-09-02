<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import {
  sectorDefinitions,
  getNodesBySector,
  type SectorType,
  type CarouselNode,
} from '@/data/carouselNodes'
import { personalInfo, languages, education } from '@/data/portfolioData'
import { useCylinderCarousel } from '@/composables/useCylinderCarousel'
import { useCyberAudio } from '@/composables/useCyberAudio'
import CyberPillarCanvas from '@/components/3d/CyberPillarCanvas.vue'
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Cpu,
  Activity,
  Briefcase,
  BookOpen,
  GraduationCap,
  Users,
  User,
  X,
  Terminal,
  ExternalLink,
  Mail,
  Linkedin,
  Layers,
} from 'lucide-vue-next'

const audio = useCyberAudio()
const activeSector = ref<SectorType>('all')
const activeInspectorNode = ref<CarouselNode | null>(null)

// Current node list based on active sector
const currentNodes = computed(() => getNodesBySector(activeSector.value))
const nodeCount = computed(() => currentNodes.value.length)

// Carousel setup with modular composable (Rule 4.2)
const {
  currentAngle,
  activeIndex,
  degreeReadout,
  isDragging,
  getItemTransform,
  handleWheel,
  handlePointerDown,
  handlePointerMove,
  handlePointerUp,
  jumpToIndex,
  next,
  prev,
} = useCylinderCarousel(nodeCount, {
  friction: 0.93,
  sensitivity: 0.0018,
  onRotate: () => {
    if (Math.random() < 0.08) {
      audio.playTick()
    }
  },
})

// Current front-facing node
const activeNode = computed(() => currentNodes.value[activeIndex.value] || currentNodes.value[0])

function setSector(sector: SectorType) {
  if (activeSector.value === sector) return
  audio.playLockOn()
  activeSector.value = sector
  jumpToIndex(0)
}

function handleCardClick(index: number, node: CarouselNode) {
  if (activeIndex.value === index) {
    audio.playLockOn()
    activeInspectorNode.value = node
  } else {
    audio.playTick()
    jumpToIndex(index)
  }
}

function handleNext() {
  audio.playTick()
  next()
}

function handlePrev() {
  audio.playTick()
  prev()
}

function closeInspector() {
  activeInspectorNode.value = null
}

const iconMap = {
  briefcase: Briefcase,
  cpu: Cpu,
  book: BookOpen,
  graduation: GraduationCap,
  users: Users,
  user: User,
}
</script>

<template>
  <div
    class="relative w-full h-screen overflow-hidden bg-abyss flex flex-col justify-between select-none"
    @wheel.passive="false"
    @wheel="handleWheel"
    @pointerdown="handlePointerDown"
    @pointermove="handlePointerMove"
    @pointerup="handlePointerUp"
    @pointercancel="handlePointerUp"
  >
    <!-- Background 3D Cyber Pillar -->
    <CyberPillarCanvas :rotationAngle="currentAngle" />

    <!-- Top Telemetry Status Header & Sector Switcher -->
    <header class="relative z-20 pt-20 px-4 sm:px-8 md:px-12 flex flex-col gap-3">
      <!-- Telemetry Status Bar -->
      <div class="flex items-center justify-between pointer-events-none">
        <div class="flex items-center gap-3">
          <div class="w-2.5 h-2.5 rounded-full bg-neon-blue animate-ping" />
          <span class="font-mono text-xs tracking-widest text-neon-blue uppercase">
            SECTOR: {{ activeSector.toUpperCase() }} // ORBIT_ONLINE
          </span>
        </div>

        <div class="flex items-center gap-3">
          <div class="telemetry-tag hidden md:flex">
            <Activity :size="12" />
            <span>ROT: {{ degreeReadout }}°</span>
          </div>
          <div class="telemetry-tag">
            <Layers :size="12" />
            <span>NODE {{ activeIndex + 1 }} / {{ currentNodes.length }}</span>
          </div>
        </div>
      </div>

      <!-- Sector Selector Tabs (All Data Categories Available) -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full scrollbar-none pointer-events-auto">
        <button
          v-for="def in sectorDefinitions"
          :key="def.key"
          type="button"
          class="font-mono text-[11px] sm:text-xs px-3 py-1 rounded transition-all duration-200 border whitespace-nowrap cursor-pointer"
          :class="[
            activeSector === def.key
              ? 'bg-neon-blue/20 text-neon-blue border-neon-blue shadow-[0_0_12px_rgba(0,243,255,0.4)] font-bold'
              : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-cyan-500/40'
          ]"
          @click="setSector(def.key)"
        >
          <span>{{ def.label }}</span>
          <span class="ml-1.5 opacity-60 text-[10px]">({{ def.count }})</span>
        </button>
      </div>
    </header>

    <!-- Center 3D Cylindrical Stage -->
    <div
      class="relative z-10 w-full flex-1 flex items-center justify-center overflow-visible"
      style="perspective: 1200px; transform-style: preserve-3d;"
    >
      <!-- Cylindrical Orbit Wrapper -->
      <div
        class="relative w-full max-w-4xl h-[420px] flex items-center justify-center"
        style="transform-style: preserve-3d;"
      >
        <!-- Orbital Multi-Category Nodes -->
        <article
          v-for="(node, index) in currentNodes"
          :key="node.id"
          class="absolute w-[320px] sm:w-[360px] md:w-[410px] p-6 cyber-card cursor-pointer transition-[box-shadow,border-color] duration-300"
          :class="[
            activeIndex === index
              ? 'border-neon-blue shadow-[0_0_30px_rgba(0,243,255,0.45)]'
              : 'border-slate-800/80 hover:border-cyan-500/50'
          ]"
          :style="{
            transform: getItemTransform(index).transform,
            opacity: getItemTransform(index).opacity,
            zIndex: getItemTransform(index).zIndex,
            pointerEvents: getItemTransform(index).isFront ? 'auto' : 'none',
          }"
          @click="handleCardClick(index, node)"
        >
          <!-- Card Header: Badge & Sector -->
          <div class="flex items-center justify-between mb-3 border-b border-cyan-500/20 pb-2.5">
            <div class="flex items-center gap-2">
              <component
                :is="iconMap[node.iconType] || Cpu"
                :size="14"
                class="text-neon-blue"
              />
              <span class="font-mono text-xs text-neon-blue font-bold tracking-wider">
                {{ node.badge }}
              </span>
              <span class="text-[10px] font-mono px-1.5 py-0.2 bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 rounded uppercase">
                {{ node.sectorLabel }}
              </span>
            </div>
            <span v-if="node.period" class="text-xs font-mono text-slate-400">
              {{ node.period }}
            </span>
          </div>

          <!-- Title & Subtitle -->
          <div class="mb-4">
            <h3 class="text-xl md:text-2xl font-bold font-rajdhani text-white leading-tight mb-1">
              {{ node.title }}
            </h3>
            <p class="text-sm font-semibold text-neon-blue font-mono tracking-wide">
              {{ node.subtitle }}
            </p>
          </div>

          <!-- Highlights (First 2 points) -->
          <ul class="space-y-1.5 text-xs text-slate-300 mb-5 line-clamp-3">
            <li
              v-for="(hl, hIdx) in node.highlights.slice(0, 2)"
              :key="hIdx"
              class="flex items-start gap-1.5"
            >
              <span class="text-neon-blue mt-0.5">›</span>
              <span class="leading-relaxed">{{ hl }}</span>
            </li>
          </ul>

          <!-- Tags & Quick Inspect -->
          <div class="flex items-center justify-between pt-2 border-t border-cyan-500/10">
            <div class="flex flex-wrap gap-1.5 max-w-[240px] overflow-hidden max-h-6">
              <span
                v-for="tag in node.tags?.slice(0, 3)"
                :key="tag"
                class="text-[10px] font-mono px-2 py-0.5 bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 rounded whitespace-nowrap"
              >
                #{{ tag }}
              </span>
            </div>

            <button
              type="button"
              class="text-xs font-mono text-neon-blue hover:text-white flex items-center gap-1 transition-colors ml-auto"
              @click.stop="handleCardClick(index, node)"
            >
              <span>INSPECT</span>
              <Maximize2 :size="12" />
            </button>
          </div>
        </article>
      </div>
    </div>

    <!-- Bottom HUD & Orbital Controls -->
    <footer class="relative z-20 pb-8 px-4 sm:px-8 md:px-12 flex flex-col items-center gap-4">
      <!-- Rule 1.2: Scroll Indicator / Drag Prompt -->
      <div class="flex items-center gap-3 text-xs font-mono text-slate-400 bg-abyss/85 backdrop-blur px-4 py-1.5 border border-cyan-500/20 rounded-full">
        <span class="w-2 h-2 rounded-full bg-neon-blue animate-ping" />
        <span>SCROLL WHEEL OR DRAG TO ROTATE 3D CYLINDER</span>
      </div>

      <!-- Orbital Navigation Bar -->
      <div class="w-full max-w-2xl flex items-center justify-between gap-4 cyber-card p-3">
        <!-- Prev Button -->
        <button
          type="button"
          class="hud-btn text-xs py-1.5 px-3"
          aria-label="Previous node"
          @click="handlePrev"
        >
          <ChevronLeft :size="16" />
          <span class="hidden sm:inline">PREV</span>
        </button>

        <!-- Node Selector Dots / Radar -->
        <div class="flex items-center gap-1.5 overflow-x-auto max-w-[280px] sm:max-w-none px-2 scrollbar-none">
          <button
            v-for="(item, idx) in currentNodes"
            :key="item.id"
            type="button"
            class="h-2 rounded-full transition-all duration-300 cursor-pointer flex-shrink-0"
            :class="[
              activeIndex === idx
                ? 'w-6 bg-neon-blue shadow-[0_0_8px_#00f3ff]'
                : 'w-2 bg-slate-700 hover:bg-cyan-600'
            ]"
            :title="item.title"
            @click="jumpToIndex(idx)"
          />
        </div>

        <!-- Next Button -->
        <button
          type="button"
          class="hud-btn text-xs py-1.5 px-3"
          aria-label="Next node"
          @click="handleNext"
        >
          <span class="hidden sm:inline">NEXT</span>
          <ChevronRight :size="16" />
        </button>
      </div>
    </footer>

    <!-- Universal Hologram Node Detail Inspector Modal -->
    <Transition name="fade">
      <div
        v-if="activeInspectorNode"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-abyss/85 backdrop-blur-md"
        @click.self="closeInspector"
      >
        <div
          class="cyber-card w-full max-w-2xl p-6 md:p-8 animate-fade-in border-neon-blue shadow-[0_0_45px_rgba(0,243,255,0.35)] max-h-[85vh] overflow-y-auto"
        >
          <!-- Inspector Header -->
          <div class="flex items-center justify-between border-b border-cyan-500/30 pb-3 mb-4">
            <div class="flex items-center gap-2 text-neon-blue font-mono text-xs">
              <Terminal :size="14" />
              <span>TELEMETRY_INSPECTOR // {{ activeInspectorNode.badge }}</span>
            </div>
            <button
              type="button"
              class="text-slate-400 hover:text-white p-1 cursor-pointer"
              @click="closeInspector"
            >
              <X :size="20" />
            </button>
          </div>

          <!-- Title & Sector -->
          <div class="mb-4">
            <div class="flex items-center gap-2 mb-2">
              <span class="telemetry-tag">{{ activeInspectorNode.sectorLabel }}</span>
              <span v-if="activeInspectorNode.period" class="telemetry-tag text-slate-300">
                {{ activeInspectorNode.period }}
              </span>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold font-rajdhani text-white">
              {{ activeInspectorNode.title }}
            </h2>
            <p class="text-base text-neon-blue font-mono mt-1">
              {{ activeInspectorNode.subtitle }}
            </p>
          </div>

          <!-- Deliverables / Details -->
          <div class="mb-6">
            <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              SYSTEM DELIVERABLES &amp; IMPACT SPECIFICATIONS
            </h4>
            <ul class="space-y-2 text-sm text-slate-200">
              <li
                v-for="(hl, hIdx) in activeInspectorNode.highlights"
                :key="hIdx"
                class="flex items-start gap-2 bg-slate-900/40 p-2.5 rounded border border-cyan-500/15"
              >
                <span class="text-neon-blue font-mono">0{{ hIdx + 1 }}.</span>
                <span class="leading-relaxed">{{ hl }}</span>
              </li>
            </ul>
          </div>

          <!-- Special Sector Content (Languages if Profile) -->
          <div v-if="activeInspectorNode.sector === 'profile'" class="mb-6">
            <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              LINGUISTIC PROFICIENCY GAUGE
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div
                v-for="lang in languages"
                :key="lang.name"
                class="p-3 bg-slate-900/60 border border-cyan-500/20 rounded"
              >
                <div class="flex items-center justify-between text-xs font-mono mb-1">
                  <span class="text-white font-bold">{{ lang.name }}</span>
                  <span class="text-neon-blue">{{ lang.percentage }}%</span>
                </div>
                <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-neon-blue rounded-full shadow-[0_0_6px_#00f3ff]"
                    :style="{ width: `${lang.percentage}%` }"
                  />
                </div>
                <span class="text-[10px] text-slate-400 font-mono mt-1 block">
                  {{ lang.level }}
                </span>
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div v-if="activeInspectorNode.tags?.length" class="mb-6">
            <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              SYSTEM ARCHITECTURE TAGS
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in activeInspectorNode.tags"
                :key="tag"
                class="font-mono text-xs px-3 py-1 bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 rounded"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- Footer button / Contact action -->
          <div class="flex items-center justify-between pt-4 border-t border-cyan-500/20">
            <a
              v-if="activeInspectorNode.sector === 'profile'"
              :href="'mailto:' + personalInfo.email"
              class="hud-btn hud-btn-primary text-xs"
            >
              <Mail :size="14" />
              <span>TRANSMIT DIRECT INQUIRY</span>
            </a>
            <span v-else />

            <button
              type="button"
              class="hud-btn"
              @click="closeInspector"
            >
              CLOSE INSPECTOR [ESC]
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
