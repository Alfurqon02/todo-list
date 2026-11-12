<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Menu,
  Moon,
  Pause,
  Play,
  Plus,
  Sun,
  X,
} from 'lucide-vue-next'
import {
  achievements,
  education,
  experiences,
  languages,
  organizations,
  personalInfo,
  skills,
  type Experience,
} from '@/data/portfolioData'
import { selectedResearch } from '@/data/portfolioEditorial'
import { useExperienceStore } from '@/stores/experienceStore'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { animatedCancel, closeDialogAnimated, vMagnetic } from '@/composables/useMotion'
import { useFlagshipMotion, useSignalWave } from '@/composables/useFlagship'
import ResearchPipeline from '@/components/flagship/ResearchPipeline.vue'

const store = useExperienceStore()
const { scrollTo } = useSmoothScroll()

const root = ref<HTMLElement | null>(null)
const navLinksEl = ref<HTMLElement | null>(null)
const railEl = ref<HTMLElement | null>(null)
const heroCanvas = ref<HTMLCanvasElement | null>(null)
const dialogEl = ref<HTMLDialogElement | null>(null)

const paused = computed(() => !store.animationsEnabled)
const isDark = computed(() => store.isDark)
const { activeSection, navHidden, navScrolled, scrollProgress, pill, observeReveals, measure } = useFlagshipMotion(
  root,
  navLinksEl,
  railEl,
  paused,
)
useSignalWave(heroCanvas, paused, isDark)

const menuOpen = ref(false)
const activePlace = ref<'ID' | 'JP' | 'TW'>('ID')
const composerOpen = ref(false)
const toast = ref('')
let toastTimer: ReturnType<typeof setTimeout> | undefined

const sections = [
  { id: 'work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const meiwa = experiences[4]
const bontang = experiences[3]
const paragon = experiences[0]
const rapixus = experiences[5]

const caseLedger = [
  {
    index: '02',
    location: 'Indonesia · Government Contract',
    work: bontang,
    summary: 'Authentication, role-based access control, admin impersonation, and audit logging for municipal housing and land administration.',
    pillars: ['JWT Authentication', 'Role Management', 'Admin Impersonation', 'Laravel Auditor', 'REST API'],
  },
  {
    index: '03',
    location: 'Indonesia · Enterprise HR Tech',
    work: paragon,
    summary: 'Refactoring and resolving defects across legacy human-resources application systems.',
    pillars: ['HR Application Systems', 'Legacy Refactoring', 'Bug Resolution'],
  },
  {
    index: '04',
    location: 'Taiwan · Vulnerability Operations',
    work: rapixus,
    summary: 'Vulnerability scanning, CPE asset inventory management, CVSS score monitoring, and post-installation security remediation.',
    pillars: ['RapixEngine VANS', 'CPE Asset Inventory', 'CVSS Monitoring', 'Patch Deployment'],
  },
]

const meiwaNodes = [
  { label: 'Inventory System', x: 20, y: 24 },
  { label: 'Leave Request App', x: 80, y: 24 },
  { label: 'DB Normalization', x: 20, y: 78 },
  { label: 'LAN & CCTV Infra', x: 80, y: 78 },
]

type Track = 'all' | 'engineering' | 'security' | 'teaching'
const filter = ref<Track>('all')
const openIdx = ref<number | null>(0)

function trackOf(e: Experience): Exclude<Track, 'all'> {
  const hay = `${e.company} ${e.role} ${(e.tags || []).join(' ')}`.toLowerCase()
  if (hay.includes('cyber') || hay.includes('vans') || hay.includes('research') || hay.includes('jwt')) return 'security'
  if (hay.includes('teaching') || hay.includes('lecturer') || hay.includes('helpdesk')) return 'teaching'
  return 'engineering'
}

const trackCounts = computed(() => {
  const c = { all: experiences.length, engineering: 0, security: 0, teaching: 0 }
  experiences.forEach((e) => {
    c[trackOf(e)]++
  })
  return c
})

const filters = computed<{ id: Track; label: string; count: number }[]>(() => [
  { id: 'all', label: 'All roles', count: trackCounts.value.all },
  { id: 'engineering', label: 'Engineering', count: trackCounts.value.engineering },
  { id: 'security', label: 'Security & Research', count: trackCounts.value.security },
  { id: 'teaching', label: 'Teaching & Support', count: trackCounts.value.teaching },
])

const filteredExperiences = computed(() =>
  experiences
    .map((item, idx) => ({ item, idx, track: trackOf(item) }))
    .filter((entry) => filter.value === 'all' || entry.track === filter.value),
)

watch(filter, () => {
  openIdx.value = filteredExperiences.value[0]?.idx ?? null
  nextTick(() => {
    observeReveals()
    measure()
  })
})

watch(openIdx, () => {
  nextTick(() => measure())
})

const places = [
  {
    code: 'ID' as const,
    name: 'Indonesia',
    meta: 'B.Sc. Informatics (UNS) · Paragon · Bontang · LAMPTIP',
    period: '2021 - Present',
    cx: 132,
    cy: 300,
    lx: 148,
    ly: 305,
  },
  {
    code: 'TW' as const,
    name: 'Taiwan',
    meta: 'Rapixus · VANS vulnerability assessment & CVSS',
    period: 'Jan - Mar 2024',
    cx: 215,
    cy: 170,
    lx: 145,
    ly: 166,
  },
  {
    code: 'JP' as const,
    name: 'Japan',
    meta: 'Meiwa Industry · Internal systems & infrastructure',
    period: '2024 - 2025',
    cx: 336,
    cy: 104,
    lx: 266,
    ly: 98,
  },
]

const modalWork = ref<Experience | null>(null)
const modalResearch = ref(false)
let lastTrigger: HTMLElement | null = null

async function openWork(w: Experience, ev?: Event) {
  lastTrigger = (ev?.currentTarget as HTMLElement) ?? (document.activeElement as HTMLElement)
  modalWork.value = w
  modalResearch.value = false
  await nextTick()
  dialogEl.value?.showModal()
}

async function openResearch(ev?: Event) {
  lastTrigger = (ev?.currentTarget as HTMLElement) ?? (document.activeElement as HTMLElement)
  modalWork.value = null
  modalResearch.value = true
  await nextTick()
  dialogEl.value?.showModal()
}

function closeModal() {
  closeDialogAnimated(dialogEl.value)
}

function onDialogClose() {
  lastTrigger?.focus?.()
}

function onBackdropClick(e: MouseEvent) {
  const d = dialogEl.value
  if (!d || e.target !== d) return
  const r = d.getBoundingClientRect()
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeModal()
}

const form = reactive({ subject: '', body: '', touchedSubject: false, touchedBody: false })
const subjectError = computed(() =>
  form.touchedSubject && !form.subject.trim() ? 'Please enter a short subject line.' : '',
)
const bodyError = computed(() =>
  form.touchedBody && form.body.trim().length < 10 ? 'Please add a message of at least 10 characters.' : '',
)

function showToast(msg: string) {
  toast.value = msg
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toast.value = ''
  }, 2800)
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(personalInfo.email)
    showToast('Email address copied to clipboard')
  } catch {
    showToast(`Copy manually: ${personalInfo.email}`)
  }
}

function sendMail() {
  form.touchedSubject = true
  form.touchedBody = true
  if (subjectError.value || bodyError.value) return
  window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject.trim())}&body=${encodeURIComponent(form.body.trim())}`
  showToast('Opening your email client')
}

function go(id: string) {
  menuOpen.value = false
  scrollTo(`#${id}`)
}

function open3D() {
  menuOpen.value = false
  store.setMode('immersive')
}

watch(menuOpen, (open) => {
  document.documentElement.classList.toggle('fs-menu-open', open)
})

watch(
  () => store.animationsEnabled,
  (enabled) => {
    document.documentElement.classList.toggle('motion-paused', !enabled)
  },
  { immediate: true },
)

onMounted(() => {
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && menuOpen.value) menuOpen.value = false
  }
  window.addEventListener('keydown', onKey)
  onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
})

onBeforeUnmount(() => {
  clearTimeout(toastTimer)
  document.documentElement.classList.remove('fs-menu-open', 'motion-paused')
})
</script>

<template>
  <div ref="root" class="fs" :class="{ 'motion-paused': paused }">
    <a class="fs-skip" href="#work">Skip to selected work</a>
    <div class="fs-progress" :style="{ transform: `scaleX(${scrollProgress})` }" aria-hidden="true" />

    <header class="fs-nav" :class="{ scrolled: navScrolled, hidden: navHidden && !menuOpen }">
      <div class="fs-nav-bar">
        <a class="fs-logo" href="#hero" @click.prevent="go('hero')" aria-label="Mohammad Al Furqon, home">
          <span class="fs-logo-mark" aria-hidden="true">F</span>
          <span class="fs-logo-name">Al Furqon</span>
        </a>

        <nav ref="navLinksEl" class="fs-nav-links" aria-label="Primary navigation">
          <span
            class="fs-nav-pill"
            :class="{ on: pill.on }"
            :style="{ transform: `translate3d(${pill.x}px, 0, 0)`, width: `${pill.w}px` }"
            aria-hidden="true"
          />
          <ul>
            <li v-for="s in sections" :key="s.id">
              <a
                :href="`#${s.id}`"
                :data-sec="s.id"
                :aria-current="activeSection === s.id ? 'true' : undefined"
                @click.prevent="go(s.id)"
              >{{ s.label }}</a>
            </li>
          </ul>
        </nav>

        <div class="fs-nav-actions">
          <button
            type="button"
            class="fs-icon-btn fs-theme-btn"
            :aria-label="store.isDark ? 'Switch to light theme' : 'Switch to dark theme'"
            :title="store.isDark ? 'Switch to light theme' : 'Switch to dark theme'"
            @click="store.toggleDark()"
          >
            <Sun v-if="store.isDark" :size="17" />
            <Moon v-else :size="17" />
          </button>
          <button type="button" v-magnetic="0.16" class="fs-btn fs-btn-ghost fs-btn-sm fs-3d" @click="open3D">
            <span>3D Journey</span>
          </button>
          <a v-magnetic="0.16" class="fs-btn fs-btn-primary fs-btn-sm" href="/Mohammad_Al_Furqon_CV.pdf" download>
            <span>Résumé</span>
            <ArrowDown :size="15" />
          </a>
          <button
            type="button"
            class="fs-menu-btn"
            :aria-expanded="menuOpen"
            aria-controls="fs-mobile-menu"
            :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
            @click="menuOpen = !menuOpen"
          >
            <X v-if="menuOpen" :size="20" />
            <Menu v-else :size="20" />
          </button>
        </div>
      </div>
    </header>

    <Transition name="fs-menu">
      <div v-if="menuOpen" id="fs-mobile-menu" class="fs-menu" role="dialog" aria-label="Navigation">
        <nav aria-label="Mobile navigation">
          <a
            v-for="(s, i) in sections"
            :key="s.id"
            :href="`#${s.id}`"
            :style="{ '--i': i }"
            :class="{ current: activeSection === s.id }"
            @click.prevent="go(s.id)"
          >
            <span>0{{ i + 1 }}</span>
            {{ s.label }}
          </a>
        </nav>
        <div class="fs-menu-foot">
          <button type="button" class="fs-btn fs-btn-ghost" @click="store.toggleDark()">
            <Sun v-if="store.isDark" :size="16" />
            <Moon v-else :size="16" />
            <span>{{ store.isDark ? 'Light theme' : 'Dark theme' }}</span>
          </button>
          <button type="button" class="fs-btn fs-btn-ghost" @click="open3D">
            <span>Open 3D Journey</span>
          </button>
          <a class="fs-btn fs-btn-primary" href="/Mohammad_Al_Furqon_CV.pdf" download>
            <span>Download résumé</span>
            <ArrowDown :size="16" />
          </a>
        </div>
      </div>
    </Transition>

    <main>
      <section id="hero" class="fs-hero" aria-labelledby="hero-title">
        <div class="fs-hero-bg" aria-hidden="true">
          <canvas ref="heroCanvas" class="fs-signal" />
        </div>

        <div class="fs-container fs-hero-inner">
          <div class="fs-hero-copy">
            <p class="fs-eyebrow intro" style="--n: 0">
              <span class="fs-eyebrow-index">00</span>
              Mohammad Al Furqon · Indonesia, Japan &amp; Taiwan
            </p>

            <h1 id="hero-title" class="fs-display">
              <span class="mline"><span class="intro-line" style="--n: 1">Web systems</span></span>
              <span class="mline"><span class="intro-line fs-accent-line" style="--n: 2">&amp; medical AI.</span></span>
            </h1>

            <p class="fs-hero-lead intro" style="--n: 3">
              Software engineer and machine learning researcher with a B.Sc. in Informatics from
              <strong>Universitas Sebelas Maret</strong>. I build internal applications, authentication architectures,
              and dual-view chest X-ray captioning models.
            </p>

            <div class="fs-hero-ctas intro" style="--n: 4">
              <a v-magnetic="0.2" href="#work" class="fs-btn fs-btn-primary fs-btn-lg" @click.prevent="go('work')">
                <span>Selected work</span>
                <ArrowDown :size="17" />
              </a>
              <button type="button" v-magnetic="0.2" class="fs-btn fs-btn-ghost fs-btn-lg" @click="open3D">
                <span>Launch 3D Journey</span>
              </button>
              <a class="fs-link" href="/Mohammad_Al_Furqon_CV.pdf" download>
                <span>Download CV (PDF)</span>
                <ArrowDown :size="15" />
              </a>
            </div>
          </div>

          <aside class="fs-dossier intro" style="--n: 2" aria-label="Engineering specification dossier">
            <div class="fs-dossier-head">
              <span class="fs-meta">Field Dossier</span>
              <span class="fs-meta fs-dossier-loc">Surakarta / Jakarta, ID</span>
            </div>
            <dl class="fs-dossier-list">
              <div>
                <dt>Current</dt>
                <dd>
                  <strong>{{ experiences[0].company }}</strong>
                  <small>{{ experiences[0].role }} · {{ experiences[0].period }}</small>
                </dd>
              </div>
              <div>
                <dt>Industry</dt>
                <dd>
                  <strong>{{ meiwa.company }}</strong>
                  <small>{{ meiwa.role }} · {{ meiwa.period }}</small>
                </dd>
              </div>
              <div>
                <dt>Research</dt>
                <dd>
                  <strong>{{ selectedResearch.title }}</strong>
                  <small>{{ selectedResearch.subtitle }}</small>
                </dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>
                  <strong>{{ education[0].institution }}</strong>
                  <small>{{ education[0].degree }} · GPA {{ education[0].gpa }}</small>
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <div class="fs-container fs-stats" data-fs-reveal>
          <dl class="fs-stats-grid">
            <div class="fs-stat">
              <dt>Engineering, research &amp; teaching roles</dt>
              <dd>{{ experiences.length }}</dd>
            </div>
            <div class="fs-stat">
              <dt>Countries worked in (Indonesia, Japan, Taiwan)</dt>
              <dd>03</dd>
            </div>
            <div class="fs-stat">
              <dt>GPA · Bachelor of Informatics, UNS</dt>
              <dd>3.77</dd>
            </div>
            <div class="fs-stat">
              <dt>Published book &amp; undergraduate thesis</dt>
              <dd>0{{ achievements.length }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="work" class="fs-section" aria-labelledby="work-title">
        <div class="fs-container">
          <header class="fs-section-head" data-fs-reveal>
            <p class="fs-eyebrow"><span class="fs-eyebrow-index">01</span> Selected systems</p>
            <h2 id="work-title" class="fs-h2">
              <span class="mline"><span>Built for the people</span></span>
              <span class="mline"><span class="fs-soft">who run the floor.</span></span>
            </h2>
            <p class="fs-lead">
              Four production engagements across manufacturing in Japan, municipal government in Indonesia, enterprise HR,
              and vulnerability operations in Taiwan.
            </p>
          </header>

          <div class="case-ledger">
            <article class="case-featured" data-spotlight data-fs-reveal style="--d: 0ms">
              <div class="case-featured-diagram" aria-hidden="true">
                <div class="viz-system">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path v-for="n in meiwaNodes" :key="n.label" :d="`M50 50 L ${n.x} ${n.y}`" />
                  </svg>
                  <div class="viz-node core" style="left: 50%; top: 50%">Meiwa Portal</div>
                  <div
                    v-for="n in meiwaNodes"
                    :key="n.label"
                    class="viz-node"
                    :style="{ left: `${n.x}%`, top: `${n.y}%` }"
                  >{{ n.label }}</div>
                </div>
              </div>

              <div class="case-featured-body">
                <p class="case-kicker">01 · Featured Case Study · Japan · {{ meiwa.period }}</p>
                <h3 class="case-title">{{ meiwa.company }}</h3>
                <p class="case-role">{{ meiwa.role }}</p>
                <ul class="case-list">
                  <li v-for="h in meiwa.highlights" :key="h">{{ h }}</li>
                </ul>
                <div class="case-foot">
                  <div class="fs-tags">
                    <span v-for="t in meiwa.tags" :key="t">{{ t }}</span>
                  </div>
                  <button
                    type="button"
                    class="fs-btn fs-btn-ghost fs-btn-sm"
                    @click="openWork(meiwa, $event)"
                  >Inspect case details</button>
                </div>
              </div>
            </article>

            <div class="case-index-list">
              <article
                v-for="(entry, idx) in caseLedger"
                :key="entry.work.company"
                class="case-row"
                data-spotlight
                data-fs-reveal
                :style="{ '--d': `${(idx + 1) * 70}ms` }"
              >
                <div class="case-row-meta">
                  <span class="case-row-num">{{ entry.index }}</span>
                  <span class="fs-meta">{{ entry.location }}</span>
                  <span class="fs-meta">{{ entry.work.period }}</span>
                </div>
                <div class="case-row-main">
                  <h3 class="case-row-title">{{ entry.work.company }}</h3>
                  <p class="case-row-role">{{ entry.work.role }}</p>
                  <p class="case-row-desc">{{ entry.summary }}</p>
                  <div class="fs-tags">
                    <span v-for="p in entry.pillars" :key="p">{{ p }}</span>
                  </div>
                </div>
                <div class="case-row-action">
                  <button
                    type="button"
                    class="fs-btn fs-btn-ghost fs-btn-sm"
                    @click="openWork(entry.work, $event)"
                  >Read dossier</button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <ResearchPipeline :paused="paused" @open="openResearch()" />

      <section id="experience" class="fs-section" aria-labelledby="exp-title">
        <div class="fs-container tl-grid">
          <header class="tl-head" data-fs-reveal>
            <p class="fs-eyebrow"><span class="fs-eyebrow-index">03</span> Experience · {{ experiences.length }} roles</p>
            <h2 id="exp-title" class="fs-h2">
              <span class="mline"><span>Every role</span></span>
              <span class="mline"><span class="fs-soft">in one timeline.</span></span>
            </h2>
            <p class="fs-body">Filter by domain or expand any position to read the full responsibilities and stack.</p>

            <div class="tl-filters" role="group" aria-label="Filter experience by track">
              <button
                v-for="f in filters"
                :key="f.id"
                type="button"
                class="fs-chip"
                :aria-pressed="filter === f.id"
                @click="filter = f.id"
              >
                <span>{{ f.label }}</span>
                <span class="fs-chip-count">{{ f.count }}</span>
              </button>
            </div>

            <a class="fs-link" href="/Mohammad_Al_Furqon_CV.pdf" download>
              <span>Download full résumé (PDF)</span>
              <ArrowDown :size="15" />
            </a>
          </header>

          <div ref="railEl" class="tl-list">
            <div class="tl-rail" aria-hidden="true"><span /></div>
            <TransitionGroup name="tl" tag="div" class="tl-items">
              <article
                v-for="{ item, idx, track } in filteredExperiences"
                :key="item.company + item.period"
                class="tl-item"
                :class="[`track-${track}`, { open: openIdx === idx }]"
                data-fs-reveal
              >
                <span class="tl-dot" aria-hidden="true" />
                <h3 class="tl-heading">
                  <button
                    type="button"
                    class="tl-toggle"
                    :aria-expanded="openIdx === idx"
                    :aria-controls="`exp-panel-${idx}`"
                    @click="openIdx = openIdx === idx ? null : idx"
                  >
                    <span class="tl-period">{{ item.period }}</span>
                    <span class="tl-company">{{ item.company }}</span>
                    <span class="tl-role">{{ item.role }}</span>
                    <span class="tl-icon" aria-hidden="true"><Plus :size="18" /></span>
                  </button>
                </h3>
                <div :id="`exp-panel-${idx}`" class="tl-body" :inert="openIdx !== idx">
                  <div class="tl-body-inner">
                    <ul>
                      <li v-for="(h, hi) in item.highlights" :key="h" :style="{ '--i': hi }">{{ h }}</li>
                    </ul>
                    <div v-if="item.tags?.length" class="fs-tags">
                      <span v-for="t in item.tags" :key="t">{{ t }}</span>
                    </div>
                  </div>
                </div>
              </article>
            </TransitionGroup>
          </div>
        </div>
      </section>

      <section id="about" class="fs-section" aria-labelledby="about-title">
        <div class="fs-container about-grid">
          <div class="about-copy" data-fs-reveal>
            <p class="fs-eyebrow"><span class="fs-eyebrow-index">04</span> About · Three countries</p>
            <h2 id="about-title" class="fs-h2">
              <span class="mline"><span>Indonesia, Japan,</span></span>
              <span class="mline"><span class="fs-soft">and Taiwan.</span></span>
            </h2>
            <p class="fs-lead">{{ personalInfo.about }}</p>

            <div class="about-cards">
              <div class="fs-card edu" data-spotlight>
                <div>
                  <span class="fs-meta">{{ education[0].period }}</span>
                  <h3>{{ education[0].institution }}</h3>
                  <p>{{ education[0].degree }} · GPA {{ education[0].gpa }}</p>
                </div>
              </div>
              <div class="fs-card langs" data-spotlight>
                <span class="fs-meta">Spoken languages</span>
                <ul>
                  <li v-for="l in languages" :key="l.name">
                    <span>
                      <strong>{{ l.name }}</strong>
                      <small>{{ l.level }}</small>
                    </span>
                    <span class="meter" aria-hidden="true">
                      <span :style="{ '--v': l.percentage / 100 }" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <figure class="places" data-fs-reveal style="--d: 100ms" aria-label="Map connecting Indonesia, Taiwan, and Japan">
            <svg viewBox="0 0 440 360" class="places-map" aria-hidden="true">
              <defs>
                <linearGradient id="arc" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0" stop-color="var(--fs-accent)" />
                  <stop offset="1" stop-color="var(--fs-muted)" />
                </linearGradient>
              </defs>
              <g class="places-graticule">
                <line x1="40" y1="90" x2="400" y2="90" />
                <line x1="40" y1="180" x2="400" y2="180" />
                <line x1="40" y1="270" x2="400" y2="270" />
                <line x1="120" y1="30" x2="120" y2="330" />
                <line x1="230" y1="30" x2="230" y2="330" />
                <line x1="340" y1="30" x2="340" y2="330" />
              </g>
              <path d="M 132 300 Q 140 210 215 170" class="places-arc a" />
              <path d="M 215 170 Q 260 115 336 104" class="places-arc b" />
              <path d="M 132 300 Q 250 230 336 104" class="places-arc c" />
              <g
                v-for="p in places"
                :key="p.code"
                class="places-node"
                :class="{ on: activePlace === p.code }"
                @mouseenter="activePlace = p.code"
              >
                <circle :cx="p.cx" :cy="p.cy" r="18" class="ring" />
                <circle :cx="p.cx" :cy="p.cy" r="5.5" class="core" />
                <text :x="p.lx" :y="p.ly">{{ p.code }}</text>
              </g>
            </svg>
            <ul class="places-list">
              <li
                v-for="p in places"
                :key="p.code"
                :class="{ on: activePlace === p.code }"
                tabindex="0"
                @mouseenter="activePlace = p.code"
                @focus="activePlace = p.code"
              >
                <span class="places-code">{{ p.code }}</span>
                <div>
                  <strong>{{ p.name }}</strong>
                  <small>{{ p.meta }}</small>
                </div>
                <b>{{ p.period }}</b>
              </li>
            </ul>
          </figure>
        </div>
      </section>

      <section id="skills" class="fs-section" aria-labelledby="skills-title">
        <div class="fs-container">
          <header class="fs-section-head split" data-fs-reveal>
            <div>
              <p class="fs-eyebrow"><span class="fs-eyebrow-index">05</span> Technical capabilities</p>
              <h2 id="skills-title" class="fs-h2">
                <span class="mline"><span>Languages, frameworks,</span></span>
                <span class="mline"><span class="fs-soft">and tools I use.</span></span>
              </h2>
            </div>
            <p class="fs-body">
              Grouped across frontend interfaces, backend services, relational and document databases, infrastructure,
              machine learning, and application security.
            </p>
          </header>

          <div class="skills-grid">
            <article
              v-for="(cat, i) in skills"
              :key="cat.name"
              class="fs-card skill-card"
              data-spotlight
              data-fs-reveal
              :style="{ '--d': `${i * 55}ms` }"
            >
              <div class="skill-head">
                <span class="skill-index">0{{ i + 1 }}</span>
                <h3>{{ cat.name }}</h3>
                <span class="fs-meta">{{ cat.items.length }} items</span>
              </div>
              <ul class="skill-chips">
                <li v-for="(item, k) in cat.items" :key="item" :style="{ '--k': k }">{{ item }}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section class="fs-section" aria-labelledby="writing-title">
        <div class="fs-container writing-grid">
          <div data-fs-reveal>
            <p class="fs-eyebrow"><span class="fs-eyebrow-index">06</span> Publications</p>
            <h3 id="writing-title" class="fs-h3">Book &amp; undergraduate thesis.</h3>
            <article v-for="(a, i) in achievements" :key="a.title" class="fs-card pub" data-spotlight>
              <span class="pub-index">0{{ i + 1 }}</span>
              <div>
                <span class="fs-meta">{{ a.title }}</span>
                <p class="pub-text">{{ a.description }}</p>
              </div>
            </article>
          </div>

          <div data-fs-reveal style="--d: 90ms">
            <p class="fs-eyebrow"><span class="fs-eyebrow-index">07</span> Organizations &amp; cohorts</p>
            <h3 class="fs-h3">Campus leadership &amp; Bangkit Academy.</h3>
            <div class="orgs">
              <details v-for="o in organizations" :key="o.name" class="org">
                <summary>
                  <div>
                    <strong>{{ o.name }}</strong>
                    <small>{{ o.role }} · {{ o.period }}</small>
                  </div>
                  <Plus :size="18" />
                </summary>
                <p>{{ o.description }}</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="fs-section contact" aria-labelledby="contact-title">
        <div class="fs-container contact-inner" data-fs-reveal>
          <p class="fs-eyebrow"><span class="fs-eyebrow-index">08</span> Contact · Available for engineering &amp; research roles</p>
          <h2 id="contact-title" class="fs-display contact-title">
            <span class="mline"><span>Start a</span></span>
            <span class="mline"><span class="fs-accent-line">conversation.</span></span>
          </h2>
          <p class="fs-lead">
            Reach out directly for software engineering, backend architecture, or machine learning research collaborations.
          </p>

          <div class="contact-email">
            <a v-magnetic="0.14" :href="`mailto:${personalInfo.email}`" class="contact-mail">
              <span>{{ personalInfo.email }}</span>
            </a>
            <button
              type="button"
              v-magnetic="0.2"
              class="fs-icon-btn"
              :aria-label="toast ? 'Email address copied' : 'Copy email address'"
              @click="copyEmail"
            >
              <Check v-if="toast" :size="18" />
              <Copy v-else :size="18" />
            </button>
          </div>

          <div class="contact-actions">
            <button
              type="button"
              class="fs-btn fs-btn-ghost"
              :aria-expanded="composerOpen"
              aria-controls="fs-composer"
              @click="composerOpen = !composerOpen"
            >
              <span>{{ composerOpen ? 'Hide message form' : 'Compose a quick note' }}</span>
              <Plus :size="16" class="composer-plus" />
            </button>
            <a
              class="fs-btn fs-btn-ghost"
              :href="`https://${personalInfo.linkedin}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <ArrowUpRight :size="16" />
            </a>
            <a class="fs-btn fs-btn-ghost" href="/Mohammad_Al_Furqon_CV.pdf" download>
              <span>Résumé (PDF)</span>
              <ArrowDown :size="16" />
            </a>
          </div>

          <Transition name="fs-expand">
            <form v-if="composerOpen" id="fs-composer" class="composer" novalidate @submit.prevent="sendMail">
              <div class="field" :class="{ invalid: subjectError }">
                <label for="c-subject">Subject <span aria-hidden="true">*</span></label>
                <input
                  id="c-subject"
                  v-model="form.subject"
                  type="text"
                  required
                  placeholder="e.g., Backend engineering role or research collaboration"
                  :aria-invalid="!!subjectError"
                  aria-describedby="c-subject-err"
                  @blur="form.touchedSubject = true"
                />
                <p id="c-subject-err" class="field-error" role="alert">{{ subjectError }}</p>
              </div>
              <div class="field" :class="{ invalid: bodyError }">
                <label for="c-body">Message <span aria-hidden="true">*</span></label>
                <textarea
                  id="c-body"
                  v-model="form.body"
                  rows="4"
                  required
                  placeholder="Share the project scope, timeline, or role details..."
                  :aria-invalid="!!bodyError"
                  aria-describedby="c-body-err"
                  @blur="form.touchedBody = true"
                />
                <p id="c-body-err" class="field-error" role="alert">{{ bodyError }}</p>
              </div>
              <div class="composer-foot">
                <span class="fs-meta">Opens your default email client with these fields pre-filled.</span>
                <button type="submit" v-magnetic="0.16" class="fs-btn fs-btn-primary">
                  <span>Continue to email</span>
                </button>
              </div>
            </form>
          </Transition>
        </div>
      </section>
    </main>

    <footer class="fs-footer">
      <div class="fs-container fs-footer-inner">
        <a class="fs-logo" href="#hero" @click.prevent="go('hero')">
          <span class="fs-logo-mark" aria-hidden="true">F</span>
          <span>Mohammad Al Furqon</span>
        </a>
        <nav aria-label="Footer navigation">
          <a v-for="s in sections" :key="s.id" :href="`#${s.id}`" @click.prevent="go(s.id)">{{ s.label }}</a>
          <a href="#3d" @click.prevent="open3D">3D Journey</a>
        </nav>
        <div class="fs-footer-meta">
          <span>© {{ new Date().getFullYear() }} Mohammad Al Furqon</span>
        </div>
        <button
          type="button"
          v-magnetic="0.22"
          class="fs-icon-btn"
          aria-label="Back to top"
          @click="go('hero')"
        >
          <ArrowUp :size="17" />
        </button>
      </div>
    </footer>

    <div class="fs-float" :class="{ show: navScrolled, tucked: scrollProgress > 0.96 }">
      <button
        type="button"
        class="fs-float-btn"
        :aria-pressed="store.animationsEnabled"
        :aria-label="store.animationsEnabled ? 'Pause ambient motion' : 'Enable ambient motion'"
        @click="store.toggleAnimations()"
      >
        <Pause v-if="store.animationsEnabled" :size="13" />
        <Play v-else :size="13" />
        <span>Motion {{ store.animationsEnabled ? 'on' : 'off' }}</span>
      </button>
    </div>

    <div class="fs-toast-region" role="status" aria-live="polite">
      <Transition name="fs-toast">
        <div v-if="toast" class="fs-toast">
          <Check :size="15" />
          <span>{{ toast }}</span>
        </div>
      </Transition>
    </div>

    <dialog
      ref="dialogEl"
      class="fs-dialog anim-dialog"
      aria-labelledby="fs-dialog-title"
      data-lenis-prevent
      @click="onBackdropClick"
      @cancel="animatedCancel"
      @close="onDialogClose"
    >
      <button type="button" class="fs-icon-btn fs-dialog-close" aria-label="Close dialog" @click="closeModal">
        <X :size="20" />
      </button>
      <template v-if="modalWork">
        <p class="fs-eyebrow">Engineering Dossier · {{ modalWork.period }}</p>
        <h2 id="fs-dialog-title" class="fs-dialog-title">{{ modalWork.company }}</h2>
        <p class="fs-dialog-sub">{{ modalWork.role }}</p>
        <div class="fs-dialog-body">
          <h3 class="fs-meta fs-dialog-label">Key Deliverables &amp; Responsibilities</h3>
          <ol class="fs-dialog-list">
            <li v-for="(h, i) in modalWork.highlights" :key="h" :style="{ '--i': i }">
              <span>0{{ i + 1 }}</span>
              <p>{{ h }}</p>
            </li>
          </ol>
          <div v-if="modalWork.tags?.length" class="fs-tags">
            <span v-for="t in modalWork.tags" :key="t">{{ t }}</span>
          </div>
        </div>
      </template>
      <template v-else-if="modalResearch">
        <p class="fs-eyebrow">{{ selectedResearch.type }} · {{ selectedResearch.period }}</p>
        <h2 id="fs-dialog-title" class="fs-dialog-title">{{ selectedResearch.title }}</h2>
        <p class="fs-dialog-sub">{{ selectedResearch.subtitle }}</p>
        <div class="fs-dialog-body">
          <p class="fs-dialog-text">{{ selectedResearch.description }}</p>
          <p class="fs-meta">{{ selectedResearch.institution }}</p>
          <div class="fs-tags">
            <span v-for="t in selectedResearch.tags" :key="t">{{ t }}</span>
          </div>
        </div>
      </template>
    </dialog>
  </div>
</template>
