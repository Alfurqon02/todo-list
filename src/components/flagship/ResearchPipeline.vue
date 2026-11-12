<script setup lang="ts">
// Scroll-coupled radiographic captioning diagram driven by Lenis sub-pixel scroll via CSS sticky positioning.
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { selectedResearch } from '@/data/portfolioEditorial'
import { onSmoothScroll, useSmoothScroll } from '@/composables/useSmoothScroll'

const props = defineProps<{ paused: boolean }>()
const emit = defineEmits<{ (e: 'open'): void }>()

const track = ref<HTMLElement | null>(null)
const progress = ref(0)
const isStickyMode = ref(false)
const { scrollTo } = useSmoothScroll()

let trackTop = 0
let trackSpan = 1
let viewHeight = 1
let ro: ResizeObserver | null = null
let offScroll: (() => void) | null = null

const steps = [
  { title: 'Dual-View Input', text: 'Paired frontal and lateral chest X-rays from the same patient.' },
  { title: 'DenseNet Encoder', text: 'Convolutional blocks extract spatial feature maps from each view.' },
  { title: 'LSTM Decoder', text: 'Recurrent hidden states translate fused features into sequential tokens.' },
  { title: 'Radiology Caption', text: 'Generated clinical sentence synthesized from both perspectives.' },
]

const tokens = ['no', 'acute', 'cardiopulmonary', 'abnormality', '.']
const clamp = (v: number) => Math.max(0, Math.min(1, v))
const local = computed(() => [0, 1, 2, 3].map((i) => clamp(progress.value * 4 - i)))
const step = computed(() => Math.min(3, Math.max(0, Math.floor(progress.value * 3.999))))
const vars = computed(() => ({
  '--p': progress.value.toFixed(4),
  '--p0': local.value[0].toFixed(4),
  '--p1': local.value[1].toFixed(4),
  '--p2': local.value[2].toFixed(4),
  '--p3': local.value[3].toFixed(4),
}))

function measure() {
  const el = track.value
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  isStickyMode.value = !props.paused && !reduce && window.innerWidth >= 960 && window.innerHeight >= 640
  const r = el.getBoundingClientRect()
  const scrollY = window.scrollY
  trackTop = r.top + scrollY
  viewHeight = Math.max(1, window.innerHeight)
  trackSpan = Math.max(1, r.height - viewHeight)
  updateProgress(scrollY)
}

function updateProgress(y: number) {
  if (props.paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    progress.value = 1
    return
  }
  if (isStickyMode.value) {
    progress.value = clamp((y - trackTop) / trackSpan)
  } else {
    const start = trackTop - viewHeight * 0.65
    const end = trackTop + Math.max(240, trackSpan * 0.5)
    progress.value = clamp((y - start) / Math.max(1, end - start))
  }
}

function selectStep(index: number) {
  if (isStickyMode.value && !props.paused) {
    const targetY = trackTop + ((index + 0.5) / 4) * trackSpan
    scrollTo(targetY)
  } else {
    progress.value = (index + 1) / 4
  }
}

watch(() => props.paused, () => {
  measure()
})

onMounted(() => {
  measure()
  document.fonts?.ready.then(measure)
  offScroll = onSmoothScroll((y) => updateProgress(y))
  window.addEventListener('resize', measure, { passive: true })
  if (track.value) {
    ro = new ResizeObserver(measure)
    ro.observe(track.value)
  }
})

onBeforeUnmount(() => {
  offScroll?.()
  ro?.disconnect()
  window.removeEventListener('resize', measure)
})
</script>

<template>
  <section id="research" class="fs-section rp" :class="{ 'rp-sticky-enabled': isStickyMode }" aria-labelledby="research-title">
    <div ref="track" class="rp-track">
      <div class="rp-stage" :style="vars">
        <div class="fs-container rp-grid">
          <div class="rp-copy">
            <p class="fs-eyebrow"><span class="fs-eyebrow-index">02</span> Research · {{ selectedResearch.type }}</p>
            <h2 id="research-title" class="fs-h2">
              <span class="mline"><span>Captioning chest</span></span>
              <span class="mline"><span class="fs-soft">X-rays from two views.</span></span>
            </h2>
            <p class="fs-lead">
              My undergraduate thesis generates radiology descriptions from two X-rays of the same patient, pairing frontal and lateral projections instead of relying on a single view.
            </p>
            <ol class="rp-steps" aria-label="Pipeline stages">
              <li
                v-for="(s, i) in steps"
                :key="s.title"
                :class="{ active: step === i, done: step > i }"
                :aria-current="step === i ? 'step' : undefined"
              >
                <button type="button" class="rp-step-btn" @click="selectStep(i)">
                  <span class="rp-step-index">0{{ i + 1 }}</span>
                  <span>
                    <strong>{{ s.title }}</strong>
                    <small>{{ s.text }}</small>
                  </span>
                </button>
                <span class="rp-step-bar" :style="{ transform: `scaleX(${local[i]})` }" aria-hidden="true" />
              </li>
            </ol>
            <div class="rp-actions">
              <button type="button" class="fs-btn fs-btn-ghost" @click="emit('open')">Read research summary</button>
              <span class="fs-meta">{{ selectedResearch.institution }} · {{ selectedResearch.period }}</span>
            </div>
          </div>

          <figure class="rp-visual" aria-label="Diagram: frontal and lateral X-rays are encoded by DenseNet and decoded by an LSTM into a caption.">
            <div class="rp-inputs">
              <div v-for="view in ['Frontal', 'Lateral']" :key="view" class="rp-plate" :class="view.toLowerCase()">
                <svg viewBox="0 0 120 140" aria-hidden="true">
                  <defs>
                    <radialGradient :id="`soft-${view}`" cx="50%" cy="45%" r="65%">
                      <stop offset="0" stop-color="#28352e" />
                      <stop offset="1" stop-color="#090c0a" />
                    </radialGradient>
                  </defs>
                  <rect width="120" height="140" rx="6" :fill="`url(#soft-${view})`" />
                  <template v-if="view === 'Frontal'">
                    <ellipse cx="38" cy="72" rx="22" ry="42" fill="#060807" opacity=".85" />
                    <ellipse cx="82" cy="72" rx="22" ry="42" fill="#060807" opacity=".85" />
                    <rect x="57" y="18" width="6" height="110" rx="3" fill="#d2dcd5" opacity=".55" />
                    <path
                      v-for="r in 7"
                      :key="r"
                      :d="`M60 ${28 + r * 12} C 40 ${22 + r * 12}, 22 ${30 + r * 12}, 16 ${44 + r * 12} M60 ${28 + r * 12} C 80 ${22 + r * 12}, 98 ${30 + r * 12}, 104 ${44 + r * 12}`"
                      fill="none"
                      stroke="#dce5df"
                      stroke-opacity=".32"
                      stroke-width="2.2"
                    />
                    <ellipse cx="68" cy="98" rx="18" ry="16" fill="#d4dfd8" opacity=".28" />
                    <path d="M24 26 Q 44 20 58 26 M62 26 Q 76 20 96 26" fill="none" stroke="#e4ece7" stroke-opacity=".45" stroke-width="3" />
                  </template>
                  <template v-else>
                    <ellipse cx="56" cy="74" rx="34" ry="44" fill="#060807" opacity=".85" />
                    <rect x="90" y="18" width="7" height="112" rx="3" fill="#d2dcd5" opacity=".5" />
                    <path
                      v-for="r in 7"
                      :key="r"
                      :d="`M92 ${28 + r * 12} C 70 ${20 + r * 12}, 34 ${24 + r * 12}, 22 ${40 + r * 12}`"
                      fill="none"
                      stroke="#dce5df"
                      stroke-opacity=".26"
                      stroke-width="2.2"
                    />
                    <ellipse cx="50" cy="92" rx="20" ry="18" fill="#d4dfd8" opacity=".26" />
                    <path d="M30 20 L 40 130" stroke="#dce5df" stroke-opacity=".2" stroke-width="5" />
                  </template>
                </svg>
                <span class="rp-scan" aria-hidden="true" />
                <span class="rp-plate-label">{{ view }} view</span>
              </div>
            </div>
            <div class="rp-flow" aria-hidden="true"><i /></div>
            <div class="rp-block">
              <div class="rp-block-head"><span>Encoder</span><strong>DenseNet</strong><small>feature maps</small></div>
              <div class="rp-features" aria-hidden="true"><span v-for="n in 48" :key="n" :style="{ '--i': n - 1 }" /></div>
            </div>
            <div class="rp-flow" aria-hidden="true"><i /></div>
            <div class="rp-block">
              <div class="rp-block-head"><span>Decoder</span><strong>LSTM</strong><small>word sequence</small></div>
              <div class="rp-cells" aria-hidden="true">
                <template v-for="n in 6" :key="n">
                  <span class="rp-cell" :style="{ '--i': n - 1 }"><b>h{{ n }}</b></span>
                  <i v-if="n < 6" />
                </template>
              </div>
            </div>
            <div class="rp-flow" aria-hidden="true"><i /></div>
            <div class="rp-output">
              <span class="rp-output-label">Generated report output</span>
              <p><span v-for="(t, i) in tokens" :key="i" class="rp-token" :style="{ '--i': i }">{{ t }}</span></p>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
