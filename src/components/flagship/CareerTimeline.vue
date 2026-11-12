<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Plus, ArrowUpRight } from 'lucide-vue-next'
import { experiences } from '@/data/portfolioData'

gsap.registerPlugin(ScrollTrigger)
const props = defineProps<{ paused: boolean }>()

type Track = 'engineering' | 'security' | 'teaching'
const TRACKS: Track[] = ['engineering', 'engineering', 'engineering', 'engineering', 'engineering', 'security', 'teaching', 'teaching', 'engineering', 'teaching', 'security']
const filters: { id: 'all' | Track; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'security', label: 'Security & research' },
  { id: 'teaching', label: 'Teaching & support' },
]
const filter = ref<'all' | Track>('all')
const open = ref<number | null>(0)
const entries = computed(() => experiences
  .map((role, index) => ({ role, index, track: TRACKS[index] }))
  .filter((e) => filter.value === 'all' || e.track === filter.value))
const counts = computed(() => Object.fromEntries(filters.map((f) => [f.id, f.id === 'all' ? experiences.length : TRACKS.filter((t) => t === f.id).length])))

const list = ref<HTMLElement | null>(null)
const fill = ref(0)
let trigger: ScrollTrigger | null = null
function setup() {
  trigger?.kill(); trigger = null
  if (props.paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { fill.value = 1; return }
  trigger = ScrollTrigger.create({ trigger: list.value, start: 'top 65%', end: 'bottom 65%', scrub: 0.4, onUpdate: (s) => { fill.value = s.progress } })
}
function choose(id: 'all' | Track) {
  filter.value = id
  open.value = null
  nextTick(() => ScrollTrigger.refresh())
}
watch(() => props.paused, setup)
watch(open, () => setTimeout(() => ScrollTrigger.refresh(), 650))
onMounted(setup)
onBeforeUnmount(() => trigger?.kill())
</script>

<template>
  <section id="experience" class="fs-section tl" aria-labelledby="experience-title">
    <div class="fs-container tl-grid">
      <header class="tl-head" data-fs-reveal>
        <p class="fs-eyebrow"><span class="fs-eyebrow-index">03</span> Experience · {{ experiences.length }} roles since 2022</p>
        <h2 id="experience-title" class="fs-h2"><span class="mline"><span>Where I’ve</span></span><span class="mline"><span class="fs-soft">worked.</span></span></h2>
        <p class="fs-body">Internships and contracts in Indonesia, Japan and Taiwan, plus teaching and support roles at my university. Select a role to see the details.</p>
        <div class="tl-filters" role="group" aria-label="Filter roles">
          <button v-for="f in filters" :key="f.id" class="fs-chip" :aria-pressed="filter === f.id" @click="choose(f.id)">{{ f.label }} <span class="fs-chip-count">{{ counts[f.id] }}</span></button>
        </div>
        <a class="fs-link" href="/Mohammad_Al_Furqon_CV.pdf" download>Download full résumé (PDF) <ArrowUpRight :size="15" /></a>
      </header>

      <div ref="list" class="tl-list" :style="{ '--tl-fill': fill }">
        <span class="tl-rail" aria-hidden="true"><span /></span>
        <TransitionGroup name="tl" tag="ol" class="tl-items">
          <li v-for="e in entries" :key="e.role.company" class="tl-item" :class="[{ open: open === e.index }, `track-${e.track}`]">
            <span class="tl-dot" aria-hidden="true" />
            <h3 class="tl-heading">
              <button class="tl-toggle" :aria-expanded="open === e.index" :aria-controls="`tl-body-${e.index}`" @click="open = open === e.index ? null : e.index">
                <span class="tl-period">{{ e.role.period }}</span>
                <span class="tl-company">{{ e.role.company }}</span>
                <span class="tl-role">{{ e.role.role }}</span>
                <span class="tl-icon" aria-hidden="true"><Plus :size="18" /></span>
              </button>
            </h3>
            <div :id="`tl-body-${e.index}`" class="tl-body" :inert="open !== e.index">
              <div class="tl-body-inner">
                <ul><li v-for="(h, i) in e.role.highlights" :key="h" :style="{ '--i': i }">{{ h }}</li></ul>
                <div class="fs-tags"><span v-for="tag in e.role.tags" :key="tag">{{ tag }}</span></div>
              </div>
            </div>
          </li>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>
