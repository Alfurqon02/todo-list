<script setup lang="ts">
import { computed, defineAsyncComponent, nextTick, onMounted, onBeforeUnmount, ref } from 'vue'
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  ArrowLeft,
  X,
  Menu,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Check,
  Copy,
} from 'lucide-vue-next'
import { useExperienceStore } from '@/stores/experienceStore'
import { useSmoothScroll, getLenis } from '@/composables/useSmoothScroll'
import { useCyberJourney, boostJourney, onCyberFrame } from '@/composables/useCyberJourney'
import { useCyberAudio } from '@/composables/useCyberAudio'
import {
  vMagnetic,
  useScramble,
  usePointerGlow,
  closeDialogAnimated,
  animatedCancel,
} from '@/composables/useMotion'
import { CYBER_STOPS, LAST_POSITION, CHAPTER_SCROLL_VH, flightAt, storyCopyAt } from '@/utils/cyberStory'
import {
  personalInfo,
  experiences,
  education,
  skills,
  languages,
  organizations,
  achievements,
} from '@/data/portfolioData'
import { engineeringSystems, perspectiveDomains, selectedResearch } from '@/data/portfolioEditorial'

const Canvas = defineAsyncComponent(() => import('@/components/3d/CyberWorldCanvas.vue'))
const store = useExperienceStore()

const root = ref<HTMLElement | null>(null)
const stage = ref<HTMLElement | null>(null)
const copyPanel = ref<HTMLElement | null>(null)
const vignetteEl = ref<HTMLElement | null>(null)
const travelEl = ref<HTMLElement | null>(null)
const cueEl = ref<HTMLElement | null>(null)
const sceneNoteEl = ref<HTMLElement | null>(null)
const trackEl = ref<HTMLElement | null>(null)
const progressEl = ref<HTMLElement | null>(null)

const { scrollTo } = useSmoothScroll()
const journey = useCyberJourney(root)
const audio = useCyberAudio(true)
const glow = usePointerGlow(() => stage.value)

const ready = ref(false)
const failed = ref(false)
const menu = ref(false)
const detail = ref<HTMLDialogElement | null>(null)
const detailKind = ref<'engineering' | 'research' | 'about' | 'contact'>('engineering')
const detailPage = ref(0)
const pageDirection = ref(1)
const roleDirection = ref(1)
const sysDirection = ref(1)

// Boot sequence covers shader compilation and hands off to the hero entrance.
const booted = ref(false)
const bootProgress = ref(0)
const bootStatus = computed(() =>
  bootProgress.value < 34
    ? 'Initialising signal core'
    : bootProgress.value < 68
      ? 'Assembling 3D corridor'
      : bootProgress.value < 100
        ? 'Locking bus telemetry'
        : 'Signal locked',
)
let bootFrame = 0
let bootStart = 0
let bootLast = 0
let bootTimeout: ReturnType<typeof setTimeout> | undefined

function runBoot(now: number) {
  if (!bootStart) bootStart = bootLast = now
  const elapsed = now - bootStart
  const dt = Math.min(100, now - bootLast)
  bootLast = now
  const loaded = ready.value || failed.value
  const ceiling = loaded && elapsed > 650 ? 100 : 90
  const ease = 1 - Math.exp(-dt / (loaded ? 95 : 550))
  bootProgress.value += (ceiling - bootProgress.value) * ease
  if (ceiling === 100 && bootProgress.value > 99.4) {
    bootProgress.value = 100
    bootTimeout = setTimeout(finishBoot, 200)
    return
  }
  bootFrame = requestAnimationFrame(runBoot)
}

function finishBoot() {
  cancelAnimationFrame(bootFrame)
  clearTimeout(bootTimeout)
  booted.value = true
}

// Structured multi-page dossier modal without arbitrary word-splitting.
interface DossierPage {
  kicker: string
  title: string
  subtitle: string
  body?: string
  bullets?: string[]
  tags?: string[]
}

const detailPages = computed<DossierPage[]>(() => {
  if (detailKind.value === 'engineering') {
    return engineeringSystems.map((sys) => ({
      kicker: `${sys.code} · ${sys.domain} · ${sys.experience.period}`,
      title: sys.experience.company,
      subtitle: sys.experience.role,
      body: sys.summary,
      bullets: sys.experience.highlights,
      tags: sys.architecture,
    }))
  }
  if (detailKind.value === 'research') {
    return [
      {
        kicker: `${selectedResearch.type} · ${selectedResearch.period}`,
        title: selectedResearch.title,
        subtitle: `${selectedResearch.subtitle} · ${selectedResearch.institution}`,
        body: selectedResearch.description,
        bullets: [
          'Paired frontal and lateral chest radiographs per patient to capture complementary anatomical views',
          'DenseNet convolutional backbone extracts multi-view spatial feature representations',
          'LSTM sequence decoder generates coherent clinical radiology descriptions',
        ],
        tags: selectedResearch.tags,
      },
      {
        kicker: 'Published Book · ISHC-RG UNS',
        title: achievements[0].title,
        subtitle: 'Faculty of Informatics and Data Science, Universitas Sebelas Maret',
        body: achievements[0].description,
        bullets: [
          'Exploratory research in cybersecurity and Humanized Computing with ISHC-RG',
          'Collected and analyzed network security telemetry for portal risk assessments',
          'Authored technical defense strategies and academic manuscripts for publication',
        ],
        tags: ['Cybersecurity', 'Web Portal Defense', 'Risk Assessment'],
      },
      {
        kicker: 'Machine Learning Cohort · Aug 2023 - Jan 2024',
        title: organizations[3].name,
        subtitle: organizations[3].role,
        body: organizations[3].description,
        bullets: [
          'Completed intensive Machine Learning path with Python, JavaScript, and TensorFlow',
          'Built capstone project "NutriChive" for ingredient scanning and recipe recommendation',
        ],
        tags: ['TensorFlow', 'Computer Vision', 'NutriChive Capstone'],
      },
    ]
  }
  return [
    {
      kicker: 'Education & Profile',
      title: personalInfo.name,
      subtitle: `${education[0].degree} · ${education[0].institution} (GPA ${education[0].gpa})`,
      body: personalInfo.about,
      bullets: [
        `${education[0].institution} — ${education[0].degree}, GPA ${education[0].gpa} (${education[0].period})`,
        `${education[1].institution} — ${education[1].degree}, Score ${education[1].gpa} (${education[1].period})`,
      ],
      tags: languages.map((l) => `${l.name}: ${l.level}`),
    },
    {
      kicker: 'Leadership & Campus Organizations',
      title: 'Organizations & Cohorts',
      subtitle: 'Universitas Sebelas Maret & Bangkit Academy',
      bullets: organizations.map((o) => `${o.name} — ${o.role} (${o.period}): ${o.description}`),
      tags: ['Curriculum Leadership', 'Technology Division', 'Student Mentorship'],
    },
  ]
})

function releaseDetails() {
  document.documentElement.classList.remove('cyber-detail-open')
  getLenis()?.start()
}

const emailSubject = ref('')
const emailMessage = ref('')
const copied = ref('')

// Reactive chapter state updates ONLY when crossing chapter boundaries (not 60x/sec).
const active = ref(0)
const flightIndex = ref(0)
const visitedFloor = ref(0)
const density = ref(0)

function updateDensity() {
  const h = window.innerHeight
  density.value = h < 640 ? 2 : h < 740 ? 1 : 0
}

function applyFrameStyles(pos: number) {
  const phase = flightAt(pos)
  const copy = storyCopyAt(pos)

  if (active.value !== copy.index) {
    active.value = copy.index
  }
  if (flightIndex.value !== phase.index) {
    flightIndex.value = phase.index
  }
  const fl = Math.floor(pos + 0.02)
  if (visitedFloor.value !== fl) {
    visitedFloor.value = fl
  }

  if (stage.value) {
    stage.value.dataset.flight = phase.travel.toFixed(3)
  }
  if (copyPanel.value) {
    const shift = (1 - copy.opacity) * (copy.entering ? 20 : -16)
    copyPanel.value.style.opacity = copy.opacity.toFixed(4)
    copyPanel.value.style.setProperty('--copy-shift', `${shift.toFixed(2)}px`)
    const hidden = copy.opacity < 0.05
    copyPanel.value.toggleAttribute('inert', hidden)
    copyPanel.value.setAttribute('aria-hidden', String(hidden))
  }
  if (vignetteEl.value) {
    vignetteEl.value.style.opacity = (0.16 + copy.opacity * 0.84).toFixed(3)
  }
  if (travelEl.value) {
    travelEl.value.style.opacity = (1 - copy.opacity).toFixed(3)
  }
  if (cueEl.value) {
    cueEl.value.style.opacity = (copy.index === 0 ? copy.opacity : 0).toFixed(3)
  }
  if (sceneNoteEl.value) {
    sceneNoteEl.value.style.opacity = copy.opacity.toFixed(3)
  }
  if (trackEl.value) {
    const tp = Math.min(1, (phase.index + phase.travel) / (CYBER_STOPS.length - 1))
    trackEl.value.style.setProperty('--track', tp.toFixed(4))
  }
  if (progressEl.value) {
    progressEl.value.style.transform = `scaleX(${Math.min(1, Math.max(0, pos / LAST_POSITION)).toFixed(4)})`
  }
}

const currentSystem = computed(
  () => engineeringSystems[store.activeSystemIndex % engineeringSystems.length],
)
const role = computed(() => experiences[store.activeNodeIndex % experiences.length])
const skill = computed(() => skills[store.activeSkillIndex % skills.length])
const travelLabel = computed(
  () =>
    `${CYBER_STOPS[flightIndex.value].label} → ${CYBER_STOPS[Math.min(flightIndex.value + 1, 6)].label}`,
)

const SCENE_NOTES = [
  '00 / PROCESSOR CORE',
  '01 / 7 PRODUCTION SYSTEMS',
  '02 / DENSENET-LSTM PIPELINE',
  '03 / 4 OPERATIONAL DOMAINS',
  '04 / 11-ROLE ARCHIVE BUS',
  '05 / 6-RING TOOLKIT BUS',
  '06 / DIRECT TERMINAL',
]

const eyebrowLabel = useScramble(() => CYBER_STOPS[active.value].label.toUpperCase())
const sceneNote = useScramble(() => SCENE_NOTES[active.value], 640)
const travelText = useScramble(() => travelLabel.value.toUpperCase(), 600)

function go(index: number) {
  menu.value = false
  audio.playTick()
  const chapter = Math.max(0, Math.min(6, index))
  const target = journey.start + chapter * journey.unit
  boostJourney(chapter)
  scrollTo(target)
  history.replaceState(null, '', `#${CYBER_STOPS[chapter].id}`)
}

function readingView() {
  menu.value = false
  store.setMode('clean')
}

async function openDetails(kind: typeof detailKind.value, initialPage = 0) {
  audio.playLockOn()
  detailKind.value = kind
  detailPage.value = initialPage
  await nextTick()
  detail.value?.showModal()
  getLenis()?.stop()
  document.documentElement.classList.add('cyber-detail-open')
}

function closeDetails() {
  closeDialogAnimated(detail.value)
}

function turnPage(delta: number) {
  const next = detailPage.value + delta
  if (next < 0 || next >= detailPages.value.length) return
  pageDirection.value = delta
  detailPage.value = next
  audio.playTick()
}

function changeSystem(delta: number) {
  sysDirection.value = delta
  store.activeSystemIndex =
    (store.activeSystemIndex + delta + engineeringSystems.length) % engineeringSystems.length
  audio.playTick()
}

function selectSystem(index: number) {
  sysDirection.value = index >= store.activeSystemIndex ? 1 : -1
  store.activeSystemIndex = index
  audio.playTick()
}

function changeRole(delta: number) {
  roleDirection.value = delta
  store.activeNodeIndex = (store.activeNodeIndex + delta + experiences.length) % experiences.length
  audio.playTick()
}

function setSkill(index: number) {
  store.activeSkillIndex = index
  audio.playTick()
}

async function copyAddress() {
  try {
    await navigator.clipboard.writeText(personalInfo.email)
    copied.value = 'Email copied to clipboard.'
    setTimeout(() => {
      if (copied.value === 'Email copied to clipboard.') copied.value = ''
    }, 2600)
  } catch {
    copied.value = 'Select the address to copy it.'
  }
}

function sendEmail() {
  location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(emailSubject.value)}&body=${encodeURIComponent(emailMessage.value)}`
}

function closeBackdrop(event: MouseEvent) {
  const modal = detail.value
  if (!modal || event.target !== modal) return
  const r = modal.getBoundingClientRect()
  if (
    event.clientX < r.left ||
    event.clientX > r.right ||
    event.clientY < r.top ||
    event.clientY > r.bottom
  ) {
    closeDetails()
  }
}

function onKeydown(event: KeyboardEvent) {
  if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
  const el = event.target as HTMLElement | null
  if (el?.closest('input, textarea, select, [contenteditable], dialog, [role="tablist"]')) return
  event.preventDefault()
  go(active.value + (event.key === 'ArrowRight' ? 1 : -1))
}

let offFrame: (() => void) | null = null

onMounted(() => {
  updateDensity()
  applyFrameStyles(journey.position)
  offFrame = onCyberFrame(applyFrameStyles)

  const index = CYBER_STOPS.findIndex((stop) => `#${stop.id}` === location.hash)
  if (index > 0 && window.scrollY < 20) nextTick(() => go(index))

  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', updateDensity, { passive: true })
  glow.start()
  bootFrame = requestAnimationFrame(runBoot)
  setTimeout(() => {
    if (!booted.value) finishBoot()
  }, 5500)
})

onBeforeUnmount(() => {
  offFrame?.()
  releaseDetails()
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', updateDensity)
  cancelAnimationFrame(bootFrame)
  clearTimeout(bootTimeout)
})
</script>

<template>
  <div class="cyber-journey" :class="{ booted }">
    <a class="cyber-skip" href="#work" @click.prevent="readingView">
      Switch to full reading index
    </a>

    <Transition name="cy-boot">
      <div v-if="!booted" class="cyber-boot" role="status" aria-label="Loading the 3D journey">
        <div class="cyber-boot-inner" aria-hidden="true">
          <span class="brand-emblem cyber-boot-emblem">F<span>↗</span></span>
          <p class="cyber-boot-name">
            AL FURQON<small>SYSTEMS · SECURITY · INTELLIGENCE</small>
          </p>
          <div class="cyber-boot-bar">
            <span :style="{ transform: `scaleX(${bootProgress / 100})` }" />
          </div>
          <div class="cyber-boot-meta">
            <span>{{ bootStatus }}</span>
            <span>{{ String(Math.round(bootProgress)).padStart(3, '0') }}%</span>
          </div>
        </div>
      </div>
    </Transition>

    <div
      ref="root"
      class="cyber-scroll"
      :style="{ height: `calc(100svh + ${LAST_POSITION * CHAPTER_SCROLL_VH}svh)` }"
    >
      <div ref="stage" class="cyber-stage" :data-chapter="active" data-flight="0.000">
        <div class="cyber-world" :class="{ ready }">
          <Canvas v-if="!failed" @ready="ready = true" @unavailable="failed = true" />
        </div>
        <div ref="vignetteEl" class="cyber-vignette" aria-hidden="true" />
        <div class="cyber-spotlight" aria-hidden="true" />
        <div class="cyber-scanline" aria-hidden="true" />

        <header class="cyber-header">
          <a href="#hero" class="cyber-brand" @click.prevent="go(0)">
            <span class="brand-emblem" aria-hidden="true">F<span>↗</span></span>
            <span>AL FURQON<small>SOFTWARE / INTELLIGENCE</small></span>
          </a>
          <nav class="cyber-top-nav" aria-label="Main navigation">
            <a href="#work" :class="{ current: active === 1 }" @click.prevent="go(1)">Systems</a>
            <a href="#research" :class="{ current: active === 2 }" @click.prevent="go(2)">
              Intelligence
            </a>
            <a href="#experience" :class="{ current: active === 4 }" @click.prevent="go(4)">
              Experience
            </a>
            <a href="#skills" :class="{ current: active === 5 }" @click.prevent="go(5)">Toolkit</a>
            <a href="#contact" :class="{ current: active === 6 }" @click.prevent="go(6)">
              Contact <ArrowUpRight :size="13" />
            </a>
          </nav>
          <div class="cyber-header-tools">
            <button
              type="button"
              class="cyber-theme-btn"
              :aria-label="store.isDark ? 'Switch to light theme' : 'Switch to dark theme'"
              :title="store.isDark ? 'Switch to light theme' : 'Switch to dark theme'"
              @click="store.toggleDark()"
            >
              <Sun v-if="store.isDark" :size="16" />
              <Moon v-else :size="16" />
            </button>
            <button type="button" class="cyber-index" @click="readingView">
              Index View <ArrowUpRight :size="13" />
            </button>
            <button
              type="button"
              class="cyber-icon cyber-menu-button"
              :class="{ open: menu }"
              :aria-expanded="menu"
              aria-controls="cyber-menu"
              aria-label="Chapter navigation"
              @click="menu = !menu"
            >
              <X v-if="menu" :size="20" />
              <Menu v-else :size="20" />
            </button>
          </div>
        </header>

        <Transition name="cy-menu">
          <nav v-if="menu" id="cyber-menu" class="cyber-mobile-menu" aria-label="All chapters">
            <button
              v-for="(stop, i) in CYBER_STOPS"
              :key="stop.id"
              type="button"
              :style="{ '--i': i }"
              :class="{ current: active === i }"
              @click="go(i)"
            >
              <span>0{{ i }}</span>{{ stop.label }}<ArrowUpRight :size="17" />
            </button>
            <button
              type="button"
              :style="{ '--i': CYBER_STOPS.length }"
              @click="readingView"
            >
              Open full index view <ArrowUpRight :size="17" />
            </button>
          </nav>
        </Transition>

        <div v-if="failed" class="cyber-fallback" role="status">
          The 3D view is unavailable on this device.
          <button type="button" @click="readingView">
            Open the complete index view <ArrowRight :size="15" />
          </button>
        </div>

        <div
          ref="copyPanel"
          class="cyber-story-copy"
          :data-density="density"
          role="region"
          :aria-label="`${CYBER_STOPS[active].label} details`"
        >
          <div class="cyber-chapter-eyebrow" :key="`eyebrow-${active}`">
            <span class="cyber-chapter-number">0{{ active }}</span>
            <span aria-hidden="true" class="cyber-eyebrow-label">{{ eyebrowLabel }}</span>
            <span class="sr-only">{{ CYBER_STOPS[active].label }}</span>
            <span class="eyebrow-rule" />
          </div>

          <!-- 00 / ORIGIN -->
          <article v-if="active === 0" class="cyber-copy-content">
            <p class="cyber-role-line">
              Mohammad Al Furqon · Software Engineer &amp; ML Researcher
            </p>
            <h1>
              <span class="mline mword"><span>Follow</span></span>
              <span class="mline mword"><span>the</span></span>
              <span class="mline mword">
                <span>signal<span class="cyber-punctuation">.</span></span>
              </span>
            </h1>
            <p class="cyber-lead">
              Enter the production web systems, security architectures, and neural pipelines I
              build—chained along one continuous signal bus.
            </p>
            <p class="cyber-support">
              11 Roles · Enterprise HR Tech, Government APIs, National Accreditation, Security Ops
              &amp; Medical AI · B.Sc. Informatics UNS (GPA 3.77)
            </p>
            <div class="cyber-hero-actions">
              <button type="button" v-magnetic="0.22" class="cyber-action" @click="go(1)">
                Trace the signal <ArrowDown :size="18" />
              </button>
              <a href="/Mohammad_Al_Furqon_CV.pdf" download class="cyber-secondary">
                Download résumé <ArrowUpRight :size="14" />
              </a>
            </div>
          </article>

          <!-- 01 / SYSTEMS (Balanced across all 7 production engineering systems!) -->
          <article v-else-if="active === 1" class="cyber-copy-content">
            <h2>
              <span class="mline"><span>Engineered for</span></span>
              <span class="mline">
                <span>production<span class="cyber-punctuation">.</span></span>
              </span>
            </h2>
            <p class="cyber-support">
              Seven engineering deployments across enterprise HR, municipal government, higher-ed
              accreditation, university infrastructure, manufacturing, and cyber defense.
            </p>

            <div class="cyber-sys-pills" role="tablist" aria-label="Production systems">
              <button
                v-for="(sys, idx) in engineeringSystems"
                :key="sys.id"
                type="button"
                role="tab"
                :aria-selected="store.activeSystemIndex === idx"
                :class="{ active: store.activeSystemIndex === idx }"
                @click="selectSystem(idx)"
              >
                {{ sys.code }}
              </button>
            </div>

            <div class="cyber-role-stack">
              <Transition :name="sysDirection > 0 ? 'cy-card-next' : 'cy-card-prev'" mode="out-in">
                <div :key="currentSystem.id" class="cyber-role-card cyber-sys-card">
                  <div class="cyber-card-overline">
                    <span>{{ currentSystem.code }} / {{ currentSystem.domain.toUpperCase() }}</span>
                    <span>{{ currentSystem.experience.period }}</span>
                  </div>
                  <h3>{{ currentSystem.experience.company }}</h3>
                  <p>{{ currentSystem.experience.role }}</p>
                  <p class="cyber-sys-summary">{{ currentSystem.summary }}</p>
                  <div class="cyber-sys-tags">
                    <span v-for="tag in currentSystem.architecture.slice(0, 4)" :key="tag">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </Transition>
            </div>

            <div class="cyber-card-navigation">
              <button type="button" aria-label="Previous system" @click="changeSystem(-1)">
                <ArrowLeft :size="18" />
              </button>
              <span aria-live="polite">
                {{ String(store.activeSystemIndex + 1).padStart(2, '0') }}
                <span>/ 0{{ engineeringSystems.length }}</span>
              </span>
              <button type="button" aria-label="Next system" @click="changeSystem(1)">
                <ArrowRight :size="18" />
              </button>
              <button
                type="button"
                class="cyber-all-roles"
                @click="openDetails('engineering', store.activeSystemIndex)"
              >
                Inspect dossier <ArrowUpRight :size="13" />
              </button>
            </div>

            <p class="cyber-bridge">
              Working systems generate high-dimensional data.<br />
              <span>Follow the signal into the neural pipeline.</span>
            </p>
          </article>

          <!-- 02 / INTELLIGENCE -->
          <article v-else-if="active === 2" class="cyber-copy-content">
            <h2>
              <span class="mline"><span>From dual views</span></span>
              <span class="mline">
                <span>to meaning<span class="cyber-punctuation">.</span></span>
              </span>
            </h2>
            <p class="cyber-lead">
              Pairing visual feature extraction with sequential language generation.
            </p>
            <p class="cyber-support">
              My thesis processes paired frontal and lateral chest X-rays with DenseNet and decodes
              them into clinical captions via an LSTM—alongside Bangkit Academy ML training and
              published web-security research with ISHC-RG UNS.
            </p>
            <div class="cyber-method">
              <span>DUAL X-RAY</span>
              <ArrowRight :size="12" />
              <span>DENSENET</span>
              <ArrowRight :size="12" />
              <span>LSTM</span>
              <ArrowRight :size="12" />
              <span>CAPTION</span>
            </div>
            <button
              type="button"
              v-magnetic="0.22"
              class="cyber-action"
              @click="openDetails('research')"
            >
              Research &amp; publications <ArrowUpRight :size="18" />
            </button>
            <p class="cyber-bridge">
              Combining multiple angles reveals what one view misses.<br />
              <span>The same principle connects my engineering domains.</span>
            </p>
          </article>

          <!-- 03 / DOMAINS (Balanced across all 4 operational arenas!) -->
          <article v-else-if="active === 3" class="cyber-copy-content">
            <h2>
              <span class="mline"><span>Four arenas.</span></span>
              <span class="mline">
                <span>One standard<span class="cyber-punctuation">.</span></span>
              </span>
            </h2>
            <p class="cyber-lead">
              Software engineering shaped across enterprise, academic, security, and industrial
              operations.
            </p>
            <div class="cyber-location-list">
              <div
                v-for="(dom, i) in perspectiveDomains"
                :key="dom.code"
                :style="{ '--i': i }"
                :class="{ active: store.activeDomainIndex === i }"
                tabindex="0"
                @mouseenter="store.activeDomainIndex = i"
                @focus="store.activeDomainIndex = i"
                @click="store.activeDomainIndex = i"
              >
                <span>{{ dom.code }}</span>
                <p>
                  {{ dom.name }}
                  <small>{{ dom.meta }}</small>
                </p>
              </div>
            </div>
            <button
              type="button"
              v-magnetic="0.22"
              class="cyber-action"
              @click="openDetails('about')"
            >
              Education &amp; leadership <ArrowUpRight :size="18" />
            </button>
            <p class="cyber-bridge">
              Every arena leaves a verifiable record.<br />
              <span>The next room holds all 11 career cartridges.</span>
            </p>
          </article>

          <!-- 04 / EXPERIENCE (All 11 roles) -->
          <article v-else-if="active === 4" class="cyber-copy-content">
            <h2>
              <span class="mline"><span>Experience,</span></span>
              <span class="mline">
                <span>accumulated<span class="cyber-punctuation">.</span></span>
              </span>
            </h2>
            <p class="cyber-support">
              Cycle through all 11 roles—from Paragon HR Tech, Bontang Government, and LAMPTIP to
              UPT TIK UNS, Rapixus, Meiwa, and university teaching.
            </p>
            <div class="cyber-role-stack">
              <Transition :name="roleDirection > 0 ? 'cy-card-next' : 'cy-card-prev'" mode="out-in">
                <div :key="store.activeNodeIndex" class="cyber-role-card">
                  <div class="cyber-card-overline">
                    <span>
                      ARCHIVE / {{ String(store.activeNodeIndex + 1).padStart(2, '0') }} OF
                      {{ experiences.length }}
                    </span>
                    <span>{{ role.period }}</span>
                  </div>
                  <h3>{{ role.company }}</h3>
                  <p>{{ role.role }}</p>
                  <ul>
                    <li
                      v-for="(highlight, h) in role.highlights.slice(0, 3)"
                      :key="highlight"
                      :style="{ '--i': h }"
                    >
                      {{ highlight }}
                    </li>
                  </ul>
                  <p v-if="role.highlights.length > 3" class="cyber-role-more">
                    +{{ role.highlights.length - 3 }} more in full index view
                  </p>
                </div>
              </Transition>
            </div>
            <div class="cyber-card-navigation">
              <button type="button" aria-label="Previous role" @click="changeRole(-1)">
                <ArrowLeft :size="18" />
              </button>
              <span aria-live="polite">
                {{ String(store.activeNodeIndex + 1).padStart(2, '0') }}
                <span>/ {{ experiences.length }}</span>
              </span>
              <button type="button" aria-label="Next role" @click="changeRole(1)">
                <ArrowRight :size="18" />
              </button>
              <button type="button" class="cyber-all-roles" @click="readingView">
                Full career index <ArrowUpRight :size="13" />
              </button>
            </div>
            <p class="cyber-bridge">
              Eleven roles inform every architectural decision.<br />
              <span>The next station assembles the technical stack.</span>
            </p>
          </article>

          <!-- 05 / TOOLKIT -->
          <article v-else-if="active === 5" class="cyber-copy-content">
            <h2>
              <span class="mline"><span>The right tool.</span></span>
              <span class="mline">
                <span>For the problem<span class="cyber-punctuation">.</span></span>
              </span>
            </h2>
            <p class="cyber-support">
              From Vue/React interfaces and Laravel/Node services to relational databases, Docker
              deployments, TensorFlow pipelines, and CVSS security.
            </p>
            <div class="cyber-skill-tabs" aria-label="Skill categories">
              <button
                v-for="(item, i) in skills"
                :key="item.name"
                type="button"
                :aria-pressed="store.activeSkillIndex === i"
                @click="setSkill(i)"
              >
                {{ item.name }}
              </button>
            </div>
            <div :key="store.activeSkillIndex" class="cyber-skill-content" aria-live="polite">
              <span v-for="(item, i) in skill.items" :key="item" :style="{ '--i': i }">
                {{ item }}
              </span>
            </div>
            <p class="cyber-bridge">
              Systems, intelligence, domains, experience, and tools.<br />
              <span>Now the signal docks at the terminal.</span>
            </p>
          </article>

          <!-- 06 / CHANNEL -->
          <article v-else class="cyber-copy-content">
            <h2>
              <span class="mline"><span>Your idea.</span></span>
              <span class="mline">
                <span>Our next system<span class="cyber-punctuation">.</span></span>
              </span>
            </h2>
            <p class="cyber-lead">The signal has arrived. Let’s build something dependable.</p>
            <p class="cyber-support">
              Available for software engineering, fullstack architecture, and machine learning
              roles.
            </p>
            <div class="cyber-email-row">
              <a class="cyber-contact-email" :href="`mailto:${personalInfo.email}`">
                <span>{{ personalInfo.email }}</span> <ArrowUpRight :size="17" />
              </a>
              <button
                type="button"
                class="cyber-copy-inline"
                :aria-label="copied ? 'Email copied' : 'Copy email address'"
                @click="copyAddress"
              >
                <Check v-if="copied" :size="14" />
                <Copy v-else :size="14" />
                <span>{{ copied ? 'Copied' : 'Copy' }}</span>
              </button>
            </div>
            <div class="cyber-contact-actions">
              <button
                type="button"
                v-magnetic="0.22"
                class="cyber-action"
                @click="openDetails('contact')"
              >
                Start a conversation <ArrowUpRight :size="17" />
              </button>
              <a
                :href="`https://${personalInfo.linkedin}`"
                target="_blank"
                rel="noopener noreferrer"
                class="cyber-secondary"
              >
                LinkedIn <ArrowUpRight :size="14" />
              </a>
              <button type="button" class="cyber-secondary" @click="readingView">
                Full portfolio index <ArrowUpRight :size="14" />
              </button>
            </div>
            <p class="cyber-endnote">
              MOHAMMAD AL FURQON<br />SOFTWARE ENGINEER / ML RESEARCHER
            </p>
          </article>
        </div>

        <div ref="travelEl" class="cyber-travel-caption" aria-hidden="true">
          <span class="travel-dash" />{{ travelText }}<span class="travel-dash" />
        </div>
        <div ref="cueEl" class="cyber-scroll-cue" aria-hidden="true">
          <span class="cue-track"><span /></span>Scroll
        </div>
        <aside ref="sceneNoteEl" class="cyber-scene-note" aria-hidden="true">
          <span class="scene-note-cross">+</span>
          <span>
            {{ sceneNote }}
            <small>
              {{
                active === 0
                  ? 'Scroll to unlatch the processor'
                  : active === 6
                    ? 'Signal locked. Ready to connect.'
                    : CYBER_STOPS[active].next
              }}
            </small>
          </span>
        </aside>

        <footer class="cyber-navigation">
          <div class="cyber-sound">
            <button
              type="button"
              class="cyber-sound-toggle"
              :class="{ playing: audio.isPlaying.value }"
              :aria-label="
                audio.isPlaying.value ? 'Mute all audio' : 'Enable music and sound effects'
              "
              :aria-pressed="audio.isPlaying.value"
              @click="audio.toggle"
            >
              <span class="sound-bars" aria-hidden="true"><i /><i /><i /><i /></span>
              <Volume2 v-if="audio.isPlaying.value" :size="15" class="sound-icon" />
              <VolumeX v-else :size="15" class="sound-icon" />
              <span>Sound {{ audio.isPlaying.value ? 'on' : 'off' }}</span>
            </button>
            <details class="cyber-audio-settings">
              <summary aria-label="Audio settings">Mix</summary>
              <div class="cyber-audio-panel">
                <p class="cyber-audio-title">System telemetry audio</p>
                <p>Ambient synth score · 72 BPM<br />Scroll to modulate the signal filter.</p>
                <label for="cyber-music-volume">
                  Music <output>{{ audio.musicVolume.value }}%</output>
                </label>
                <input
                  id="cyber-music-volume"
                  v-model.number="audio.musicVolume.value"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                />
                <label for="cyber-effects-volume">
                  Effects <output>{{ audio.effectsVolume.value }}%</output>
                </label>
                <input
                  id="cyber-effects-volume"
                  v-model.number="audio.effectsVolume.value"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                />
              </div>
            </details>
          </div>

          <nav ref="trackEl" class="cyber-chapter-track" aria-label="Journey chapters">
            <button
              v-for="(stop, i) in CYBER_STOPS"
              :key="stop.id"
              type="button"
              :class="{ active: active === i, visited: visitedFloor >= i }"
              :aria-current="active === i ? 'step' : undefined"
              @click="go(i)"
            >
              <span class="chapter-track-dot" />
              <span class="chapter-track-name">{{ stop.label }}</span>
              <span class="chapter-track-number">0{{ i }}</span>
            </button>
          </nav>

          <button
            type="button"
            v-magnetic="0.3"
            class="cyber-next"
            :aria-label="
              active === 6 ? 'Return to origin' : `Go to ${CYBER_STOPS[active + 1].label}`
            "
            @click="go(active === 6 ? 0 : active + 1)"
          >
            <span>{{ active === 6 ? 'Restart' : 'Next' }}</span>
            <span class="cyber-next-ring"><ArrowRight :size="16" /></span>
          </button>
        </footer>

        <div ref="progressEl" class="cyber-total-progress" aria-hidden="true" />
      </div>
    </div>

    <dialog
      ref="detail"
      class="cyber-dialog anim-dialog"
      aria-labelledby="cyber-dialog-title"
      data-lenis-prevent
      @click="closeBackdrop"
      @cancel="animatedCancel"
      @close="releaseDetails"
    >
      <button
        type="button"
        class="cyber-dialog-close"
        aria-label="Close details"
        @click="closeDetails"
      >
        <X :size="22" />
      </button>
      <template v-if="detailKind !== 'contact'">
        <p class="cyber-dialog-kicker">{{ detailPages[detailPage].kicker }}</p>
        <div class="cyber-detail-progress" aria-hidden="true">
          <span :style="{ transform: `scaleX(${(detailPage + 1) / detailPages.length})` }" />
        </div>
        <div class="cyber-detail-viewport" aria-live="polite" aria-atomic="true">
          <Transition :name="pageDirection > 0 ? 'cy-page-next' : 'cy-page-prev'" mode="out-in">
            <div :key="`${detailKind}-${detailPage}`" class="cyber-detail-page">
              <h2 id="cyber-dialog-title">{{ detailPages[detailPage].title }}</h2>
              <p class="cyber-detail-sub">{{ detailPages[detailPage].subtitle }}</p>
              <p v-if="detailPages[detailPage].body" class="cyber-detail-body">
                {{ detailPages[detailPage].body }}
              </p>
              <ul v-if="detailPages[detailPage].bullets?.length" class="cyber-detail-list">
                <li v-for="b in detailPages[detailPage].bullets" :key="b">{{ b }}</li>
              </ul>
              <div v-if="detailPages[detailPage].tags?.length" class="cyber-sys-tags">
                <span v-for="t in detailPages[detailPage].tags" :key="t">{{ t }}</span>
              </div>
            </div>
          </Transition>
        </div>
        <nav class="cyber-detail-pagination" aria-label="Detail pages">
          <button
            type="button"
            :disabled="detailPage === 0"
            aria-label="Previous detail page"
            @click="turnPage(-1)"
          >
            <ArrowLeft :size="18" /> Previous
          </button>
          <span>
            {{ String(detailPage + 1).padStart(2, '0') }} /
            {{ String(detailPages.length).padStart(2, '0') }}
          </span>
          <button
            type="button"
            :disabled="detailPage === detailPages.length - 1"
            aria-label="Next detail page"
            @click="turnPage(1)"
          >
            Next <ArrowRight :size="18" />
          </button>
        </nav>
      </template>
      <template v-else>
        <p class="cyber-dialog-kicker">06 / DIRECT CHANNEL</p>
        <h2 id="cyber-dialog-title">Let’s talk.</h2>
        <p>
          <a :href="`mailto:${personalInfo.email}`">{{ personalInfo.email }}</a>
        </p>
        <button type="button" class="cyber-secondary" @click="copyAddress">
          {{ copied ? 'Copied ✓' : 'Copy email address' }}
        </button>
        <p role="status">{{ copied }}</p>
        <form @submit.prevent="sendEmail">
          <label>
            Subject
            <input
              v-model="emailSubject"
              required
              placeholder="Software engineering role, project, or research..."
            />
          </label>
          <label>
            Your message
            <textarea
              v-model="emailMessage"
              rows="4"
              required
              placeholder="Share the context, stack, or timeline."
              @input="audio.playKeyBlip"
            />
          </label>
          <p class="cyber-mail-hint">Opens your email client with this note pre-filled.</p>
          <button class="cyber-action" type="submit">
            Continue to email <ArrowUpRight :size="16" />
          </button>
        </form>
      </template>
    </dialog>
  </div>
</template>
