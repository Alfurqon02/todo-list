<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  Plus,
  Menu,
  X,
  Sun,
  Moon,
  Check,
  Copy,
  Box,
} from 'lucide-vue-next'
import {
  personalInfo,
  experiences,
  education,
  achievements,
  organizations,
  skills,
  languages,
  type Experience,
} from '@/data/portfolioData'
import {
  engineeringSystems,
  perspectiveDomains,
  selectedResearch,
  type EngineeringSystemNode,
} from '@/data/portfolioEditorial'
import { useExperienceStore } from '@/stores/experienceStore'
import { onSmoothScroll, useSmoothScroll } from '@/composables/useSmoothScroll'
import { useCyberAudio } from '@/composables/useCyberAudio'
import {
  vMagnetic,
  usePointerGlow,
  closeDialogAnimated,
  animatedCancel,
} from '@/composables/useMotion'

const store = useExperienceStore()
const { scrollTo } = useSmoothScroll()
const audio = useCyberAudio()

const folio = ref<HTMLElement | null>(null)
const progressBar = ref<HTMLElement | null>(null)
const spineFill = ref<HTMLElement | null>(null)
const glow = usePointerGlow(() => folio.value)

const menuOpen = ref(false)
const headerHidden = ref(false)
const hasScrolled = ref(false)
const activeStation = ref(0)
const selectedSkill = ref(0)
const activePipelineStep = ref(0)
const expandedRole = ref<number | null>(0)

type TrackFilter = 'all' | 'engineering' | 'security' | 'teaching'
const roleFilter = ref<TrackFilter>('all')

function trackOf(e: Experience): Exclude<TrackFilter, 'all'> {
  const hay = `${e.company} ${e.role} ${(e.tags || []).join(' ')}`.toLowerCase()
  if (hay.includes('cyber') || hay.includes('vans') || hay.includes('research') || hay.includes('jwt')) {
    return 'security'
  }
  if (hay.includes('teaching') || hay.includes('lecturer') || hay.includes('helpdesk')) {
    return 'teaching'
  }
  return 'engineering'
}

const filteredRoles = computed(() =>
  experiences
    .map((role, index) => ({ role, index, track: trackOf(role) }))
    .filter((entry) => roleFilter.value === 'all' || entry.track === roleFilter.value),
)

const pipelineStages = [
  {
    code: 'STAGE 01',
    name: 'Dual Radiographic Input',
    detail:
      'Pairs frontal (PA/AP) and lateral chest X-ray projections from the same patient to capture complementary thoracic structures.',
  },
  {
    code: 'STAGE 02',
    name: 'DenseNet Visual Encoder',
    detail:
      'Extracts dense multi-scale convolutional feature maps from both views and fuses them into a unified visual representation.',
  },
  {
    code: 'STAGE 03',
    name: 'LSTM Sequence Decoder',
    detail:
      'Translates fused visual features step-by-step into coherent clinical radiology findings and impression sentences.',
  },
]

const stations = [
  { id: 'hero', num: '00', label: 'Origin' },
  { id: 'work', num: '01', label: 'Systems' },
  { id: 'research', num: '02', label: 'Intelligence' },
  { id: 'domains', num: '03', label: 'Domains' },
  { id: 'experience', num: '04', label: 'Experience' },
  { id: 'skills', num: '05', label: 'Toolkit' },
  { id: 'contact', num: '06', label: 'Channel' },
]

const copied = ref(false)
const subject = ref('')
const message = ref('')
const composerOpen = ref(false)
const detailRef = ref<HTMLDialogElement | null>(null)
const selectedSystem = ref<EngineeringSystemNode | null>(null)
const researchDetail = ref(false)

let copyTimer: ReturnType<typeof setTimeout> | undefined
let revealObserver: IntersectionObserver | null = null
let offScroll: (() => void) | null = null
let stationOffsets: number[] = []
let docSpan = 1
let lastScrollY = 0

function measureLayout() {
  docSpan = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
  const sy = window.scrollY
  stationOffsets = stations.map((s) => {
    const el = document.getElementById(s.id)
    return el ? el.getBoundingClientRect().top + sy : 0
  })
}

function handleScroll(y: number) {
  const delta = y - lastScrollY
  if (Math.abs(delta) > 6) {
    headerHidden.value = delta > 0 && y > 320 && !menuOpen.value
    lastScrollY = y
  }
  hasScrolled.value = y > 36
  const ratio = Math.min(1, Math.max(0, y / docSpan))
  if (progressBar.value) {
    progressBar.value.style.transform = `scaleX(${ratio.toFixed(4)})`
  }
  if (spineFill.value) {
    spineFill.value.style.transform = `scaleY(${ratio.toFixed(4)})`
  }
  const probe = y + window.innerHeight * 0.36
  let idx = 0
  for (let i = 0; i < stationOffsets.length; i++) {
    if (probe >= stationOffsets[i]) idx = i
  }
  if (activeStation.value !== idx) {
    activeStation.value = idx
  }
}

function navigate(id: string) {
  menuOpen.value = false
  audio.playTick()
  scrollTo(`#${id}`)
}

function open3DJourney() {
  menuOpen.value = false
  store.setMode('immersive')
}

async function showSystem(sys: EngineeringSystemNode) {
  selectedSystem.value = sys
  researchDetail.value = false
  await nextTick()
  detailRef.value?.showModal()
  audio.playTick()
}

async function showResearch() {
  selectedSystem.value = null
  researchDetail.value = true
  await nextTick()
  detailRef.value?.showModal()
  audio.playTick()
}

function closeDetail() {
  closeDialogAnimated(detailRef.value)
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(personalInfo.email)
    copied.value = true
    clearTimeout(copyTimer)
    copyTimer = setTimeout(() => {
      copied.value = false
    }, 2400)
  } catch {
    copied.value = false
  }
}

function composeEmail() {
  window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(message.value)}`
}

function backdropClick(e: MouseEvent) {
  const dialog = detailRef.value
  if (!dialog || e.target !== dialog) return
  const box = dialog.getBoundingClientRect()
  if (e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom) {
    closeDetail()
  }
}

onMounted(() => {
  measureLayout()
  handleScroll(window.scrollY)
  document.fonts?.ready.then(measureLayout)
  offScroll = onSmoothScroll((y) => handleScroll(y))
  window.addEventListener('resize', measureLayout, { passive: true })
  glow.start()

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        let batch = 0
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.style.setProperty('--rd', `${batch++ * 60}ms`)
          el.classList.add('in-view')
          revealObserver?.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
    )
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      el.classList.add('will-reveal')
      revealObserver!.observe(el)
    })
  }
  requestAnimationFrame(() => folio.value?.classList.add('is-loaded'))
})

onBeforeUnmount(() => {
  offScroll?.()
  revealObserver?.disconnect()
  clearTimeout(copyTimer)
  window.removeEventListener('resize', measureLayout)
})
</script>

<template>
  <div ref="folio" class="tech-folio">
    <a class="skip-link" href="#work">Skip to production systems</a>

    <!-- Chained Signal Spine on the left margin -->
    <aside class="signal-spine" aria-label="Chained signal progress">
      <div class="spine-track" aria-hidden="true">
        <span ref="spineFill" class="spine-fill" />
      </div>
      <button
        v-for="(s, i) in stations"
        :key="s.id"
        type="button"
        class="spine-node"
        :class="{ active: activeStation === i, passed: activeStation >= i }"
        :aria-label="`${s.num} ${s.label}`"
        @click="navigate(s.id)"
      >
        <span class="spine-dot" />
        <span class="spine-label">{{ s.num }} · {{ s.label }}</span>
      </button>
    </aside>

    <header class="site-header" :class="{ 'has-scrolled': hasScrolled, 'is-hidden': headerHidden }">
      <a class="cyber-brand" href="#hero" @click.prevent="navigate('hero')">
        <span class="brand-emblem" aria-hidden="true">F<span>↗</span></span>
        <span>AL FURQON<small>SOFTWARE / INTELLIGENCE</small></span>
      </a>

      <nav class="desktop-nav" aria-label="Main navigation">
        <a
          v-for="s in stations.slice(1)"
          :key="s.id"
          :href="`#${s.id}`"
          :class="{ current: activeStation === Number(s.num) }"
          @click.prevent="navigate(s.id)"
        >
          <span>{{ s.num }}</span> {{ s.label }}
        </a>
      </nav>

      <div class="header-actions">
        <button
          type="button"
          class="cyber-theme-btn"
          :aria-label="store.isDark ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="store.toggleDark()"
        >
          <Sun v-if="store.isDark" :size="16" />
          <Moon v-else :size="16" />
        </button>
        <button type="button" v-magnetic="0.18" class="mode-switch-btn" @click="open3DJourney">
          <Box :size="14" />
          <span>3D Chained Journey</span>
        </button>
        <a v-magnetic="0.18" href="/Mohammad_Al_Furqon_CV.pdf" class="resume-link" download>
          <span>Résumé</span> <ArrowUpRight :size="14" />
        </a>
        <button
          type="button"
          class="icon-button menu-toggle"
          :class="{ open: menuOpen }"
          :aria-expanded="menuOpen"
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
          @click="menuOpen = !menuOpen"
        >
          <X v-if="menuOpen" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>
      <span ref="progressBar" class="read-progress" aria-hidden="true" />
    </header>

    <Transition name="folio-menu">
      <nav v-if="menuOpen" id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation">
        <a
          v-for="(s, i) in stations"
          :key="s.id"
          :style="{ '--i': i }"
          :href="`#${s.id}`"
          @click.prevent="navigate(s.id)"
        >
          <span>{{ s.num }}</span> {{ s.label }} <ArrowUpRight :size="16" />
        </a>
        <button type="button" class="mobile-3d-btn" @click="open3DJourney">
          Launch 3D Chained Journey <ArrowUpRight :size="16" />
        </button>
      </nav>
    </Transition>

    <main class="folio-main">
      <!-- 00 / ORIGIN -->
      <section id="hero" class="station-section hero-station">
        <div class="station-header" data-reveal>
          <span class="station-tag">00 / ORIGIN · SIGNAL CORE</span>
          <span class="station-status"><i class="pulse-dot" /> SYSTEM ONLINE · 11 ROLES</span>
        </div>

        <div class="hero-grid">
          <div class="hero-copy" data-reveal>
            <p class="hero-kicker">Mohammad Al Furqon · Software Engineer &amp; ML Researcher</p>
            <h1 class="hero-title">
              <span class="mline"><span>Fullstack systems</span></span>
              <span class="mline"><span class="accent-text">&amp; neural pipelines.</span></span>
            </h1>
            <p class="hero-lead">
              {{ personalInfo.about }}
            </p>
            <div class="hero-actions">
              <button type="button" v-magnetic="0.2" class="cyber-action" @click="open3DJourney">
                Enter 3D Chained Journey <ArrowUpRight :size="17" />
              </button>
              <a class="cyber-secondary" href="#work" @click.prevent="navigate('work')">
                Explore 7 production systems <ArrowDown :size="15" />
              </a>
            </div>
          </div>

          <aside class="telemetry-card" data-reveal aria-label="System telemetry summary">
            <div class="telemetry-head">
              <span>TELEMETRY / AT A GLANCE</span>
              <span>B.SC. INFORMATICS UNS · 3.77</span>
            </div>
            <dl class="telemetry-list">
              <div>
                <dt>CURRENT ROLE</dt>
                <dd>
                  <strong>{{ experiences[0].company }}</strong>
                  <small>{{ experiences[0].role }} · {{ experiences[0].period }}</small>
                </dd>
              </div>
              <div>
                <dt>FULLSTACK &amp; GOV</dt>
                <dd>
                  <strong>LAMPTIP · DISPERKIMTAN Bontang · Freelance</strong>
                  <small>Accreditation portals, JWT/RBAC APIs &amp; production web apps</small>
                </dd>
              </div>
              <div>
                <dt>SECURITY &amp; OPS</dt>
                <dd>
                  <strong>Rapixus VANS · Meiwa Industry · UPT TIK UNS</strong>
                  <small>CVSS vulnerability ops, inventory/leave tools &amp; campus systems</small>
                </dd>
              </div>
              <div>
                <dt>ML RESEARCH</dt>
                <dd>
                  <strong>{{ selectedResearch.title }}</strong>
                  <small>{{ selectedResearch.subtitle }}</small>
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <div class="chain-bridge" data-reveal>
          <span class="chain-line" />
          <p>
            <strong>CHAIN 00 → 01:</strong> Signal leaves the origin processor and routes into 7
            production software deployments.
          </p>
        </div>
      </section>

      <!-- 01 / PRODUCTION SYSTEMS (All 7 systems on equal footing!) -->
      <section id="work" class="station-section">
        <div class="station-header" data-reveal>
          <span class="station-tag">01 / SYSTEMS ARCHITECTURE</span>
          <span>07 PRODUCTION DEPLOYMENTS</span>
        </div>

        <div class="section-intro" data-reveal>
          <h2>
            <span class="mline"><span>Engineered across</span></span>
            <span class="mline"><span class="soft-type">every layer of the stack.</span></span>
          </h2>
          <p>
            From enterprise HR platforms and municipal government authentication APIs to national
            accreditation portals, university procurement systems, manufacturing tools, and
            vulnerability assessment operations.
          </p>
        </div>

        <div class="systems-grid">
          <article
            v-for="sys in engineeringSystems"
            :key="sys.id"
            class="system-card"
            data-reveal
          >
            <div class="system-card-top">
              <span class="sys-code">{{ sys.code }} · {{ sys.domain }}</span>
              <span class="sys-period">{{ sys.experience.period }}</span>
            </div>
            <h3>{{ sys.experience.company }}</h3>
            <p class="sys-role">{{ sys.experience.role }}</p>
            <p class="sys-summary">{{ sys.summary }}</p>
            <div class="cyber-sys-tags">
              <span v-for="tag in sys.architecture" :key="tag">{{ tag }}</span>
            </div>
            <button type="button" class="sys-inspect-btn" @click="showSystem(sys)">
              <span>Inspect system dossier</span>
              <ArrowUpRight :size="15" />
            </button>
          </article>
        </div>

        <div class="chain-bridge" data-reveal>
          <span class="chain-line" />
          <p>
            <strong>CHAIN 01 → 02:</strong> Production systems generate structured telemetry that
            feeds machine intelligence and security research.
          </p>
        </div>
      </section>

      <!-- 02 / INTELLIGENCE & RESEARCH -->
      <section id="research" class="station-section">
        <div class="station-header" data-reveal>
          <span class="station-tag">02 / INTELLIGENCE PIPELINE</span>
          <span>MEDICAL AI &amp; CYBERSECURITY RESEARCH</span>
        </div>

        <div class="research-grid">
          <div class="research-copy" data-reveal>
            <h2>
              <span class="mline"><span>From dual views</span></span>
              <span class="mline"><span class="soft-type">to clinical language.</span></span>
            </h2>
            <p class="research-lead">{{ selectedResearch.description }}</p>

            <div class="pipeline-steps" role="tablist" aria-label="DenseNet-LSTM pipeline stages">
              <button
                v-for="(st, i) in pipelineStages"
                :key="st.code"
                type="button"
                class="pipeline-step"
                :class="{ active: activePipelineStep === i }"
                @click="activePipelineStep = i"
              >
                <div class="step-head">
                  <span>{{ st.code }}</span>
                  <strong>{{ st.name }}</strong>
                </div>
                <p>{{ st.detail }}</p>
              </button>
            </div>

            <button type="button" class="cyber-action" @click="showResearch">
              Open full research specification <ArrowUpRight :size="16" />
            </button>
          </div>

          <div class="research-publications" data-reveal>
            <article v-for="(ach, i) in achievements" :key="ach.title" class="pub-card">
              <span class="sys-code">PUBLICATION 0{{ i + 1 }} · {{ ach.title.toUpperCase() }}</span>
              <h3>{{ ach.description }}</h3>
            </article>
            <article class="pub-card">
              <span class="sys-code">ML COHORT · {{ organizations[3].period.toUpperCase() }}</span>
              <h3>{{ organizations[3].name }} — {{ organizations[3].role }}</h3>
              <p>{{ organizations[3].description }}</p>
            </article>
          </div>
        </div>

        <div class="chain-bridge" data-reveal>
          <span class="chain-line" />
          <p>
            <strong>CHAIN 02 → 03:</strong> Multi-view learning mirrors how working across four
            distinct operational arenas strengthens engineering judgment.
          </p>
        </div>
      </section>

      <!-- 03 / FOUR OPERATIONAL DOMAINS -->
      <section id="domains" class="station-section">
        <div class="station-header" data-reveal>
          <span class="station-tag">03 / OPERATIONAL DOMAINS</span>
          <span>ENTERPRISE · ACADEMIA · SECURITY · INTERNAL OPS</span>
        </div>

        <div class="domains-grid">
          <article
            v-for="dom in perspectiveDomains"
            :key="dom.code"
            class="domain-card"
            data-reveal
          >
            <span class="domain-badge">{{ dom.code }}</span>
            <h3>{{ dom.name }}</h3>
            <p class="domain-meta">{{ dom.meta }}</p>
            <p class="domain-detail">{{ dom.detail }}</p>
          </article>
        </div>

        <div class="edu-org-grid" data-reveal>
          <div class="edu-block">
            <span class="sys-code">ACADEMIC FOUNDATION</span>
            <div v-for="ed in education" :key="ed.institution" class="edu-item">
              <div>
                <h3>{{ ed.institution }}</h3>
                <p>{{ ed.degree }}</p>
              </div>
              <div class="edu-right">
                <strong>{{ ed.gpa }}</strong>
                <small>{{ ed.period }}</small>
              </div>
            </div>
            <div class="lang-row">
              <span v-for="l in languages" :key="l.name" class="lang-chip">
                {{ l.name }} · <small>{{ l.level }}</small>
              </span>
            </div>
          </div>

          <div class="org-block">
            <span class="sys-code">LEADERSHIP &amp; COHORTS</span>
            <details v-for="org in organizations" :key="org.name" class="org-item">
              <summary>
                <span>
                  <strong>{{ org.name }}</strong>
                  <small>{{ org.role }} · {{ org.period }}</small>
                </span>
                <Plus :size="16" />
              </summary>
              <p>{{ org.description }}</p>
            </details>
          </div>
        </div>

        <div class="chain-bridge" data-reveal>
          <span class="chain-line" />
          <p>
            <strong>CHAIN 03 → 04:</strong> Every domain contributes to the complete 11-role career
            archive below.
          </p>
        </div>
      </section>

      <!-- 04 / 11-ROLE CAREER ARCHIVE -->
      <section id="experience" class="station-section">
        <div class="station-header" data-reveal>
          <span class="station-tag">04 / CAREER ARCHIVE</span>
          <span>ALL {{ experiences.length }} ROLES</span>
        </div>

        <div class="archive-toolbar" data-reveal>
          <h2>
            <span class="mline"><span>Complete working</span></span>
            <span class="mline"><span class="soft-type">history.</span></span>
          </h2>
          <div class="filter-pills" role="group" aria-label="Filter career archive">
            <button
              type="button"
              :class="{ active: roleFilter === 'all' }"
              @click="roleFilter = 'all'"
            >
              All ({{ experiences.length }})
            </button>
            <button
              type="button"
              :class="{ active: roleFilter === 'engineering' }"
              @click="roleFilter = 'engineering'"
            >
              Engineering
            </button>
            <button
              type="button"
              :class="{ active: roleFilter === 'security' }"
              @click="roleFilter = 'security'"
            >
              Security &amp; Research
            </button>
            <button
              type="button"
              :class="{ active: roleFilter === 'teaching' }"
              @click="roleFilter = 'teaching'"
            >
              Teaching &amp; Support
            </button>
          </div>
        </div>

        <div class="experience-list">
          <article
            v-for="{ role: item, index: i } in filteredRoles"
            :key="item.company + item.period"
            class="experience-row"
            :class="{ expanded: expandedRole === i }"
            data-reveal
          >
            <h3>
              <button
                type="button"
                class="experience-toggle"
                :aria-expanded="expandedRole === i"
                :aria-controls="`role-detail-${i}`"
                @click="expandedRole = expandedRole === i ? null : i"
              >
                <span class="role-number">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="role-company">
                  {{ item.company }}
                  <span class="role-title">{{ item.role }}</span>
                </span>
                <span class="role-period">{{ item.period }}</span>
                <span class="role-icon" aria-hidden="true"><Plus :size="18" /></span>
              </button>
            </h3>
            <div :id="`role-detail-${i}`" class="role-detail-wrap" :inert="expandedRole !== i">
              <div class="role-detail">
                <ul>
                  <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
                </ul>
                <div v-if="item.tags?.length" class="cyber-sys-tags">
                  <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="chain-bridge" data-reveal>
          <span class="chain-line" />
          <p>
            <strong>CHAIN 04 → 05:</strong> Eleven roles across four domains converge into six
            specialized technical clusters.
          </p>
        </div>
      </section>

      <!-- 05 / TECHNICAL STACK -->
      <section id="skills" class="station-section">
        <div class="station-header" data-reveal>
          <span class="station-tag">05 / TECHNICAL TOOLKIT</span>
          <span>06 SPECIALIZED CLUSTERS</span>
        </div>

        <div class="skills-intro" data-reveal>
          <h2>
            <span class="mline"><span>Languages, frameworks,</span></span>
            <span class="mline"><span class="soft-type">&amp; security tools.</span></span>
          </h2>
        </div>

        <div class="skills-matrix" data-reveal>
          <article
            v-for="(cat, i) in skills"
            :key="cat.name"
            class="skill-cluster-card"
            :class="{ active: selectedSkill === i }"
            @mouseenter="selectedSkill = i"
            @click="selectedSkill = i"
          >
            <div class="cluster-head">
              <span class="sys-code">0{{ i + 1 }} / {{ cat.name.toUpperCase() }}</span>
              <span>{{ cat.items.length }} TOOLS</span>
            </div>
            <div class="cluster-chips">
              <span v-for="item in cat.items" :key="item">{{ item }}</span>
            </div>
          </article>
        </div>

        <div class="chain-bridge" data-reveal>
          <span class="chain-line" />
          <p>
            <strong>CHAIN 05 → 06:</strong> Signal reaches the terminal. Open a direct transmission
            channel below.
          </p>
        </div>
      </section>

      <!-- 06 / DIRECT CHANNEL -->
      <section id="contact" class="station-section contact-station">
        <div class="station-header" data-reveal>
          <span class="station-tag">06 / DIRECT CHANNEL</span>
          <span class="station-status"><i class="pulse-dot" /> AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        <div class="contact-box" data-reveal>
          <h2>
            <span class="mline"><span>Ready to build</span></span>
            <span class="mline"><span class="accent-text">the next system?</span></span>
          </h2>
          <p>
            Reach out directly for software engineering, fullstack development, or machine learning
            research roles.
          </p>

          <div class="contact-links">
            <a class="email-link" :href="`mailto:${personalInfo.email}`">
              {{ personalInfo.email }}
            </a>
            <button type="button" class="cyber-copy-inline" @click="copyEmail">
              <Check v-if="copied" :size="14" />
              <Copy v-else :size="14" />
              <span>{{ copied ? 'Copied ✓' : 'Copy email' }}</span>
            </button>
            <a
              class="cyber-secondary"
              :href="`https://${personalInfo.linkedin}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight :size="15" />
            </a>
            <button
              type="button"
              class="cyber-secondary"
              :aria-expanded="composerOpen"
              @click="composerOpen = !composerOpen"
            >
              {{ composerOpen ? 'Close message form' : 'Write a message' }}
              <Plus :size="15" />
            </button>
          </div>

          <Transition name="folio-expand">
            <form
              v-if="composerOpen"
              id="email-composer"
              class="email-composer"
              @submit.prevent="composeEmail"
            >
              <label>
                Subject
                <input
                  v-model="subject"
                  name="subject"
                  placeholder="Software engineering role, project, or collaboration..."
                  required
                />
              </label>
              <label>
                Message
                <textarea
                  v-model="message"
                  name="message"
                  rows="4"
                  placeholder="Share the scope, stack, or timeline."
                  required
                />
              </label>
              <div class="composer-actions">
                <p>Opens your email client with this note pre-filled.</p>
                <button v-magnetic="0.15" type="submit" class="cyber-action">
                  Continue to email <ArrowUpRight :size="16" />
                </button>
              </div>
            </form>
          </Transition>
        </div>

        <footer class="site-footer">
          <span>© {{ new Date().getFullYear() }} Mohammad Al Furqon</span>
          <button type="button" class="cyber-secondary" @click="open3DJourney">
            Launch 3D Chained Journey <ArrowUpRight :size="14" />
          </button>
          <a class="back-to-top" href="#hero" @click.prevent="navigate('hero')">
            Back to top <ArrowUp :size="14" />
          </a>
        </footer>
      </section>
    </main>

    <dialog
      ref="detailRef"
      class="cyber-dialog anim-dialog"
      aria-labelledby="detail-title"
      data-lenis-prevent
      @click="backdropClick"
      @cancel="animatedCancel"
    >
      <button
        type="button"
        class="cyber-dialog-close"
        aria-label="Close project details"
        @click="closeDetail"
      >
        <X :size="22" />
      </button>
      <template v-if="selectedSystem">
        <p class="cyber-dialog-kicker">
          {{ selectedSystem.code }} · {{ selectedSystem.domain }} ·
          {{ selectedSystem.experience.period }}
        </p>
        <h2 id="detail-title" style="margin-top: 14px">{{ selectedSystem.experience.company }}</h2>
        <p class="cyber-detail-sub">{{ selectedSystem.experience.role }}</p>
        <p class="cyber-detail-body">{{ selectedSystem.summary }}</p>
        <ul class="cyber-detail-list">
          <li v-for="h in selectedSystem.experience.highlights" :key="h">{{ h }}</li>
        </ul>
        <div class="cyber-sys-tags" style="margin-top: 16px">
          <span v-for="t in selectedSystem.architecture" :key="t">{{ t }}</span>
        </div>
      </template>
      <template v-else-if="researchDetail">
        <p class="cyber-dialog-kicker">
          {{ selectedResearch.type }} · {{ selectedResearch.period }}
        </p>
        <h2 id="detail-title" style="margin-top: 14px">{{ selectedResearch.title }}</h2>
        <p class="cyber-detail-sub">
          {{ selectedResearch.subtitle }} · {{ selectedResearch.institution }}
        </p>
        <p class="cyber-detail-body">{{ selectedResearch.description }}</p>
        <div class="cyber-sys-tags" style="margin-top: 16px">
          <span v-for="tag in selectedResearch.tags" :key="tag">{{ tag }}</span>
        </div>
      </template>
    </dialog>
  </div>
</template>
