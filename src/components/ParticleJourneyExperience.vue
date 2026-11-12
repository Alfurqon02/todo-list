<script setup lang="ts">
// 3D particle journey synchronized with Lenis sub-pixel scroll and full light/dark theme support.
import { computed, defineAsyncComponent, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
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
import { achievements, education, experiences, languages, organizations, personalInfo, skills } from '@/data/portfolioData'
import { selectedResearch } from '@/data/portfolioEditorial'
import { useExperienceStore } from '@/stores/experienceStore'
import { onSmoothScroll, useSmoothScroll } from '@/composables/useSmoothScroll'
import { useCyberAudio } from '@/composables/useCyberAudio'
import { animatedCancel, closeDialogAnimated, vMagnetic } from '@/composables/useMotion'

const ParticleWorld = defineAsyncComponent(() => import('@/components/3d/ParticleWorld.vue'))

const store = useExperienceStore()
const { scrollTo } = useSmoothScroll()
const audio = useCyberAudio(true)

const root = ref<HTMLElement | null>(null)
const dialogEl = ref<HTMLDialogElement | null>(null)

const ready = ref(false)
const failed = ref(false)
const menuOpen = ref(false)
const position = ref(0)
const active = computed(() => Math.min(6, Math.max(0, Math.round(position.value))))
const paused = computed(() => !store.animationsEnabled)
const activePlace = ref(0)
const roleDir = ref(1)
const pageDir = ref(1)
const toast = ref('')
const composerOpen = ref(false)
let toastTimer: ReturnType<typeof setTimeout> | undefined

const chapters = [
  { id: 'pj-origin', num: '00', label: 'Origin', note: '00 / ORIGIN · SIGNAL CORE', side: 'left' as const },
  { id: 'pj-engineering', num: '01', label: 'Engineering', note: '01 / ENGINEERING · PROCESSOR', side: 'right' as const },
  { id: 'pj-intelligence', num: '02', label: 'Intelligence', note: '02 / INTELLIGENCE · DENSENET-LSTM', side: 'left' as const },
  { id: 'pj-perspective', num: '03', label: 'Perspective', note: '03 / PERSPECTIVE · THREE COUNTRIES', side: 'right' as const },
  { id: 'pj-experience', num: '04', label: 'Experience', note: '04 / EXPERIENCE · CAREER HELIX', side: 'left' as const },
  { id: 'pj-toolkit', num: '05', label: 'Capabilities', note: '05 / CAPABILITIES · SIX CONSTELLATIONS', side: 'right' as const },
  { id: 'pj-contact', num: '06', label: 'Connection', note: '06 / CONNECTION · DIRECT CHANNEL', side: 'center' as const },
]

const chapterCaption = computed(() => chapters[active.value].note)

const meiwa = experiences[4]
const role = computed(() => experiences[store.activeNodeIndex % experiences.length])
const skill = computed(() => skills[store.activeSkillIndex % skills.length])

const places = [
  { code: 'ID', name: 'Indonesia', meta: 'Informatics (UNS), web systems & research', period: '2021 - Present' },
  { code: 'TW', name: 'Taiwan', meta: 'Rapixus · VANS vulnerability assessment', period: 'Jan - Mar 2024' },
  { code: 'JP', name: 'Japan', meta: 'Meiwa Industry · Internal software & infra', period: '2024 - 2025' },
]

let chapterMetrics: { top: number; height: number }[] = []
let offScroll: (() => void) | null = null
let ro: ResizeObserver | null = null

function measureChapters() {
  const sections = root.value?.querySelectorAll<HTMLElement>('.pj-chapter')
  if (!sections?.length) return
  const scrollY = window.scrollY
  chapterMetrics = Array.from(sections).map((s) => {
    const r = s.getBoundingClientRect()
    return { top: r.top + scrollY, height: Math.max(1, r.height) }
  })
  updateFromScroll(scrollY)
}

function updateFromScroll(y: number) {
  if (!chapterMetrics.length) return
  const last = chapterMetrics.length - 1
  for (let i = 0; i < last; i++) {
    const cur = chapterMetrics[i]
    const next = chapterMetrics[i + 1]
    const span = Math.max(1, next.top - cur.top)
    if (y < next.top || i === last - 1) {
      const t = Math.max(0, Math.min(1, (y - cur.top) / span))
      position.value = Math.min(last, i + t)
      return
    }
  }
  position.value = last
}

function go(index: number) {
  menuOpen.value = false
  audio.playTick()
  const i = Math.max(0, Math.min(chapters.length - 1, index))
  scrollTo(`#${chapters[i].id}`)
}

function exitToHomepage() {
  menuOpen.value = false
  store.setMode('clean')
}

function stepRole(delta: number) {
  roleDir.value = delta
  store.activeNodeIndex = (store.activeNodeIndex + delta + experiences.length) % experiences.length
  audio.playTick()
}

function selectSkill(i: number) {
  store.activeSkillIndex = i
  audio.playTick()
}

type DetailKind = 'engineering' | 'research' | 'about'
interface DetailPage {
  eyebrow: string
  title: string
  sub: string
  body?: string
  meta?: string
  list?: string[]
  tags: string[]
}
const detailKind = ref<DetailKind>('engineering')
const detailPage = ref(0)
let lastTrigger: HTMLElement | null = null

const detailPages = computed<DetailPage[]>(() => {
  if (detailKind.value === 'engineering') {
    return [experiences[4], experiences[3], experiences[0]].map((w) => ({
      eyebrow: `Engineering · ${w.period}`,
      title: w.company,
      sub: w.role,
      list: w.highlights,
      tags: w.tags || [],
    }))
  }
  if (detailKind.value === 'research') {
    return [
      {
        eyebrow: `${selectedResearch.type} · ${selectedResearch.period}`,
        title: selectedResearch.title,
        sub: selectedResearch.subtitle,
        body: selectedResearch.description,
        meta: selectedResearch.institution,
        tags: selectedResearch.tags,
      },
      {
        eyebrow: 'Published Book · ISHC-RG',
        title: achievements[0].title,
        sub: 'Universitas Sebelas Maret',
        body: achievements[0].description,
        tags: ['Cybersecurity', 'Web Security'],
      },
    ]
  }
  return [
    {
      eyebrow: 'Background',
      title: personalInfo.name,
      sub: `${education[0].degree} · ${education[0].institution} (GPA ${education[0].gpa})`,
      body: personalInfo.about,
      tags: languages.map((l) => `${l.name} (${l.level})`),
    },
    {
      eyebrow: 'Organizations & Cohorts',
      title: 'Leadership & Bangkit Academy',
      sub: '2022 - 2024',
      list: organizations.map((o) => `${o.name} · ${o.role} (${o.period}): ${o.description}`),
      tags: [],
    },
  ]
})

async function openDetail(kind: DetailKind, ev?: Event) {
  lastTrigger = (ev?.currentTarget as HTMLElement) ?? (document.activeElement as HTMLElement)
  detailKind.value = kind
  detailPage.value = 0
  audio.playLockOn()
  await nextTick()
  dialogEl.value?.showModal()
}

function turnPage(delta: number) {
  const next = detailPage.value + delta
  if (next < 0 || next >= detailPages.value.length) return
  pageDir.value = delta
  detailPage.value = next
  audio.playTick()
}

function closeDetail() {
  closeDialogAnimated(dialogEl.value)
}

function onDialogClose() {
  lastTrigger?.focus?.()
}

function onBackdrop(e: MouseEvent) {
  const d = dialogEl.value
  if (!d || e.target !== d) return
  const r = d.getBoundingClientRect()
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeDetail()
}

const form = reactive({ subject: '', body: '', touchedSubject: false, touchedBody: false })
const subjectError = computed(() =>
  form.touchedSubject && !form.subject.trim() ? 'Please enter a short subject line.' : '',
)
const bodyError = computed(() =>
  form.touchedBody && form.body.trim().length < 10 ? 'Please write at least 10 characters.' : '',
)

function showToast(msg: string) {
  toast.value = msg
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toast.value = ''
  }, 2600)
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
  location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject.trim())}&body=${encodeURIComponent(form.body.trim())}`
  showToast('Opening your email client')
}

function onKey(e: KeyboardEvent) {
  if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return
  if (e.key === 'Escape' && menuOpen.value) {
    menuOpen.value = false
    return
  }
  if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
  const t = e.target as HTMLElement | null
  if (t?.closest('input, textarea, select, dialog')) return
  e.preventDefault()
  go(active.value + (e.key === 'ArrowRight' ? 1 : -1))
}

watch(
  () => store.animationsEnabled,
  (enabled) => {
    document.documentElement.classList.toggle('motion-paused', !enabled)
  },
  { immediate: true },
)

onMounted(() => {
  root.value?.classList.add('pj-js')
  measureChapters()
  document.fonts?.ready.then(measureChapters)
  offScroll = onSmoothScroll((y) => updateFromScroll(y))
  window.addEventListener('resize', measureChapters, { passive: true })
  window.addEventListener('keydown', onKey)
  if (root.value) {
    ro = new ResizeObserver(measureChapters)
    ro.observe(root.value)
  }
})

onBeforeUnmount(() => {
  offScroll?.()
  ro?.disconnect()
  clearTimeout(toastTimer)
  window.removeEventListener('resize', measureChapters)
  window.removeEventListener('keydown', onKey)
  document.documentElement.classList.remove('motion-paused')
})
</script>

<template>
  <div
    ref="root"
    class="fs pj"
    :class="{ ready, 'motion-paused': paused }"
    :data-chapter="active"
    :data-side="chapters[active].side"
  >
    <a class="fs-skip" href="#pj-engineering" @click.prevent="exitToHomepage">Switch to reading view</a>
    <div class="fs-progress" :style="{ transform: `scaleX(${position / 6})` }" aria-hidden="true" />

    <div class="pj-stage" aria-hidden="true">
      <ParticleWorld
        v-if="!failed"
        :position="position"
        :paused="paused"
        :active-role="store.activeNodeIndex"
        :active-skill="store.activeSkillIndex"
        :active-place="activePlace"
        :is-dark="store.isDark"
        @ready="ready = true"
        @unavailable="failed = true"
      />
      <div class="pj-vignette" />
    </div>

    <header class="fs-nav scrolled pj-nav">
      <div class="fs-nav-bar">
        <a class="fs-logo" href="#pj-origin" @click.prevent="go(0)" aria-label="Mohammad Al Furqon, origin">
          <span class="fs-logo-mark" aria-hidden="true">F</span>
          <span class="fs-logo-name">Al Furqon</span>
        </a>

        <p class="pj-now" aria-hidden="true">{{ chapterCaption }}</p>

        <div class="fs-nav-actions">
          <button
            type="button"
            class="fs-icon-btn"
            :aria-label="store.isDark ? 'Switch to light theme' : 'Switch to dark theme'"
            :title="store.isDark ? 'Switch to light theme' : 'Switch to dark theme'"
            @click="store.toggleDark()"
          >
            <Sun v-if="store.isDark" :size="17" />
            <Moon v-else :size="17" />
          </button>
          <button
            type="button"
            class="pj-sound"
            :class="{ on: audio.isPlaying.value }"
            :aria-pressed="audio.isPlaying.value"
            :aria-label="audio.isPlaying.value ? 'Mute audio' : 'Enable ambient sound'"
            @click="audio.toggle"
          >
            <span class="pj-bars" aria-hidden="true"><i /><i /><i /><i /></span>
            <span class="pj-sound-label">Sound {{ audio.isPlaying.value ? 'on' : 'off' }}</span>
          </button>
          <button type="button" v-magnetic="0.16" class="fs-btn fs-btn-ghost fs-btn-sm" @click="exitToHomepage">
            <span>Reading view</span>
          </button>
          <button
            type="button"
            class="fs-menu-btn"
            :aria-expanded="menuOpen"
            aria-controls="pj-menu"
            :aria-label="menuOpen ? 'Close chapters' : 'Open chapters'"
            @click="menuOpen = !menuOpen"
          >
            <X v-if="menuOpen" :size="20" />
            <Menu v-else :size="20" />
          </button>
        </div>
      </div>
    </header>

    <Transition name="fs-menu">
      <div v-if="menuOpen" id="pj-menu" class="fs-menu" role="dialog" aria-label="Chapters">
        <nav aria-label="All chapters">
          <a
            v-for="(c, i) in chapters"
            :key="c.id"
            :href="`#${c.id}`"
            :style="{ '--i': i }"
            :class="{ current: active === i }"
            @click.prevent="go(i)"
          >
            <span>{{ c.num }}</span>
            {{ c.label }}
          </a>
        </nav>
        <div class="fs-menu-foot">
          <button type="button" class="fs-btn fs-btn-ghost" @click="store.toggleDark()">
            <Sun v-if="store.isDark" :size="16" />
            <Moon v-else :size="16" />
            <span>{{ store.isDark ? 'Light theme' : 'Dark theme' }}</span>
          </button>
          <button type="button" class="fs-btn fs-btn-primary" @click="exitToHomepage">
            <span>Back to reading view</span>
          </button>
        </div>
      </div>
    </Transition>

    <nav class="pj-rail" aria-label="Chapters" :style="{ '--rail': Math.min(1, position / 6) }">
      <span class="pj-rail-line" aria-hidden="true"><span /></span>
      <button
        v-for="(c, i) in chapters"
        :key="c.id"
        type="button"
        :class="{ active: active === i, passed: position >= i - 0.05 }"
        :aria-current="active === i ? 'step' : undefined"
        :aria-label="`${c.num} ${c.label}`"
        @click="go(i)"
      >
        <span class="pj-rail-label">{{ c.num }} · {{ c.label }}</span>
        <span class="pj-rail-dot" />
      </button>
    </nav>

    <div v-if="failed" class="pj-fallback" role="status">
      3D WebGL is unavailable on this device.
      <button type="button" class="fs-link" @click="exitToHomepage">Open reading view</button>
    </div>

    <main>
      <section id="pj-origin" class="pj-chapter side-left" aria-labelledby="pj-t-0">
        <div class="pj-sticky">
          <div class="fs-container pj-frame">
            <article class="pj-copy" :class="{ 'is-active': active === 0 }">
              <p class="fs-eyebrow"><span class="fs-eyebrow-index">00</span> Origin · Signal Core</p>
              <h1 id="pj-t-0" class="pj-title pj-title-xl">
                <span class="mline"><span>Mohammad</span></span>
                <span class="mline"><span class="fs-accent-line">Al Furqon.</span></span>
              </h1>
              <p class="fs-lead">
                Software engineer and machine learning researcher. Scroll to morph the point cloud through the systems,
                research, and countries that shaped my work.
              </p>
              <div class="pj-actions">
                <button type="button" v-magnetic="0.2" class="fs-btn fs-btn-primary fs-btn-lg" @click="go(1)">
                  <span>Begin journey</span>
                  <ArrowDown :size="17" />
                </button>
                <a class="fs-btn fs-btn-ghost fs-btn-lg" href="/Mohammad_Al_Furqon_CV.pdf" download>
                  <span>Résumé</span>
                  <ArrowDown :size="15" />
                </a>
              </div>
              <p class="pj-meta">11 Roles · Indonesia, Japan, Taiwan · B.Sc. Informatics UNS (GPA 3.77)</p>
            </article>
          </div>
          <a href="#pj-engineering" class="pj-cue" aria-label="Scroll to next chapter" @click.prevent="go(1)">
            <span class="pj-cue-mouse"><span /></span>
            <span>Scroll or use ← → keys</span>
          </a>
        </div>
      </section>

      <section id="pj-engineering" class="pj-chapter side-right" aria-labelledby="pj-t-1">
        <div class="pj-sticky">
          <div class="fs-container pj-frame">
            <article class="pj-copy" :class="{ 'is-active': active === 1 }">
              <p class="fs-eyebrow"><span class="fs-eyebrow-index">01</span> Engineering · Meiwa Industry Japan</p>
              <h2 id="pj-t-1" class="pj-title">
                <span class="mline"><span>Built for the people</span></span>
                <span class="mline"><span class="fs-soft">who run the floor.</span></span>
              </h2>
              <p class="fs-lead">
                During a year at Meiwa Industry in Japan, I rebuilt the inventory management system, created a leave-request
                application from scratch, normalized the database, and helped modernize the internal portal.
              </p>
              <ul class="pj-chips">
                <li v-for="t in meiwa.tags" :key="t">{{ t }}</li>
              </ul>
              <div class="pj-actions">
                <button
                  type="button"
                  v-magnetic="0.2"
                  class="fs-btn fs-btn-primary"
                  @click="openDetail('engineering', $event)"
                >
                  <span>Inspect engineering dossier</span>
                </button>
                <span class="pj-meta">Japan · {{ meiwa.period }}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="pj-intelligence" class="pj-chapter side-left" aria-labelledby="pj-t-2">
        <div class="pj-sticky">
          <div class="fs-container pj-frame">
            <article class="pj-copy" :class="{ 'is-active': active === 2 }">
              <p class="fs-eyebrow"><span class="fs-eyebrow-index">02</span> Intelligence · {{ selectedResearch.type }}</p>
              <h2 id="pj-t-2" class="pj-title">
                <span class="mline"><span>Two views.</span></span>
                <span class="mline"><span class="fs-soft">One clinical caption.</span></span>
              </h2>
              <p class="fs-lead">{{ selectedResearch.description }}</p>
              <ol class="pj-method" aria-label="Pipeline stages">
                <li><span>Frontal + Lateral</span></li>
                <li><span>DenseNet</span></li>
                <li><span>LSTM</span></li>
                <li><span>Caption</span></li>
              </ol>
              <div class="pj-actions">
                <button
                  type="button"
                  v-magnetic="0.2"
                  class="fs-btn fs-btn-primary"
                  @click="openDetail('research', $event)"
                >
                  <span>Read research summary</span>
                </button>
                <span class="pj-meta">{{ selectedResearch.institution }} · {{ selectedResearch.period }}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="pj-perspective" class="pj-chapter side-right" aria-labelledby="pj-t-3">
        <div class="pj-sticky">
          <div class="fs-container pj-frame">
            <article class="pj-copy" :class="{ 'is-active': active === 3 }">
              <p class="fs-eyebrow"><span class="fs-eyebrow-index">03</span> Perspective · Cross-Border Work</p>
              <h2 id="pj-t-3" class="pj-title">
                <span class="mline"><span>Indonesia, Taiwan,</span></span>
                <span class="mline"><span class="fs-soft">and Japan.</span></span>
              </h2>
              <p class="fs-lead">Hover or focus each country to highlight its coordinates on the globe.</p>
              <ul class="pj-places">
                <li
                  v-for="(p, i) in places"
                  :key="p.code"
                  :class="{ on: activePlace === i }"
                  tabindex="0"
                  @mouseenter="activePlace = i"
                  @focus="activePlace = i"
                >
                  <span class="places-code">{{ p.code }}</span>
                  <div>
                    <strong>{{ p.name }}</strong>
                    <small>{{ p.meta }}</small>
                  </div>
                  <b>{{ p.period }}</b>
                </li>
              </ul>
              <div class="pj-actions">
                <button type="button" class="fs-btn fs-btn-ghost" @click="openDetail('about', $event)">
                  <span>Education &amp; background</span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="pj-experience" class="pj-chapter side-left" aria-labelledby="pj-t-4">
        <div class="pj-sticky">
          <div class="fs-container pj-frame">
            <article class="pj-copy" :class="{ 'is-active': active === 4 }">
              <p class="fs-eyebrow"><span class="fs-eyebrow-index">04</span> Experience · {{ experiences.length }} Roles</p>
              <h2 id="pj-t-4" class="pj-title">
                <span class="mline"><span>Every role lights</span></span>
                <span class="mline"><span class="fs-soft">a node on the helix.</span></span>
              </h2>

              <div class="pj-role">
                <Transition :name="roleDir > 0 ? 'pj-next' : 'pj-prev'" mode="out-in">
                  <div :key="store.activeNodeIndex" class="pj-role-card">
                    <div class="pj-role-top">
                      <span>ROLE {{ String(store.activeNodeIndex + 1).padStart(2, '0') }} / {{ experiences.length }}</span>
                      <span>{{ role.period }}</span>
                    </div>
                    <h3>{{ role.company }}</h3>
                    <p class="pj-role-sub">{{ role.role }}</p>
                    <ul>
                      <li v-for="h in role.highlights.slice(0, 3)" :key="h">{{ h }}</li>
                    </ul>
                    <p v-if="role.highlights.length > 3" class="pj-meta">+{{ role.highlights.length - 3 }} more in reading view</p>
                  </div>
                </Transition>
                <div class="pj-role-nav">
                  <button type="button" class="fs-icon-btn" aria-label="Previous role" @click="stepRole(-1)">
                    <ArrowLeft :size="18" />
                  </button>
                  <button type="button" class="fs-icon-btn" aria-label="Next role" @click="stepRole(1)">
                    <ArrowRight :size="18" />
                  </button>
                  <button type="button" class="fs-link" @click="exitToHomepage">
                    <span>Open full timeline</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="pj-toolkit" class="pj-chapter side-right" aria-labelledby="pj-t-5">
        <div class="pj-sticky">
          <div class="fs-container pj-frame">
            <article class="pj-copy" :class="{ 'is-active': active === 5 }">
              <p class="fs-eyebrow"><span class="fs-eyebrow-index">05</span> Capabilities · Six Constellations</p>
              <h2 id="pj-t-5" class="pj-title">
                <span class="mline"><span>Select a cluster</span></span>
                <span class="mline"><span class="fs-soft">to focus the cloud.</span></span>
              </h2>

              <div class="pj-tabs" role="tablist" aria-label="Skill categories">
                <button
                  v-for="(s, i) in skills"
                  :key="s.name"
                  type="button"
                  role="tab"
                  class="fs-chip"
                  :aria-selected="store.activeSkillIndex === i"
                  :aria-pressed="store.activeSkillIndex === i"
                  @click="selectSkill(i)"
                >{{ s.name }}</button>
              </div>

              <ul :key="store.activeSkillIndex" class="pj-tools" aria-live="polite">
                <li v-for="(item, i) in skill.items" :key="item" :style="{ '--i': i }">{{ item }}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="pj-contact" class="pj-chapter side-center" aria-labelledby="pj-t-6">
        <div class="pj-sticky">
          <div class="fs-container pj-frame">
            <article class="pj-copy pj-copy-center" :class="{ 'is-active': active === 6 }">
              <p class="fs-eyebrow"><span class="fs-eyebrow-index">06</span> Connection · Direct Channel</p>
              <h2 id="pj-t-6" class="pj-title">
                <span class="mline"><span>Have a project or role</span></span>
                <span class="mline"><span class="fs-accent-line">worth discussing?</span></span>
              </h2>
              <p class="fs-lead">Send a direct email or return to the full portfolio index.</p>

              <div class="pj-email">
                <a v-magnetic="0.14" :href="`mailto:${personalInfo.email}`" class="contact-mail">
                  <span>{{ personalInfo.email }}</span>
                </a>
                <button
                  type="button"
                  v-magnetic="0.2"
                  class="fs-icon-btn"
                  :aria-label="toast ? 'Copied' : 'Copy email address'"
                  @click="copyEmail"
                >
                  <Check v-if="toast" :size="18" />
                  <Copy v-else :size="18" />
                </button>
              </div>

              <div class="pj-actions center">
                <button
                  type="button"
                  class="fs-btn fs-btn-ghost"
                  :aria-expanded="composerOpen"
                  aria-controls="pj-composer"
                  @click="composerOpen = !composerOpen"
                >
                  <span>{{ composerOpen ? 'Hide message form' : 'Write a quick note' }}</span>
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
                <button type="button" class="fs-btn fs-btn-ghost" @click="exitToHomepage">
                  <span>Full reading view</span>
                </button>
              </div>

              <Transition name="fs-expand">
                <form v-if="composerOpen" id="pj-composer" class="composer" novalidate @submit.prevent="sendMail">
                  <div class="field" :class="{ invalid: subjectError }">
                    <label for="pj-subject">Subject <span aria-hidden="true">*</span></label>
                    <input
                      id="pj-subject"
                      v-model="form.subject"
                      type="text"
                      required
                      placeholder="e.g., Backend engineering role or research collaboration"
                      :aria-invalid="!!subjectError"
                      aria-describedby="pj-sub-err"
                      @blur="form.touchedSubject = true"
                    />
                    <p id="pj-sub-err" class="field-error" role="alert">{{ subjectError }}</p>
                  </div>
                  <div class="field" :class="{ invalid: bodyError }">
                    <label for="pj-body">Message <span aria-hidden="true">*</span></label>
                    <textarea
                      id="pj-body"
                      v-model="form.body"
                      rows="3"
                      required
                      placeholder="Share the project scope, timeline, or role details..."
                      :aria-invalid="!!bodyError"
                      aria-describedby="pj-body-err"
                      @blur="form.touchedBody = true"
                    />
                    <p id="pj-body-err" class="field-error" role="alert">{{ bodyError }}</p>
                  </div>
                  <div class="composer-foot">
                    <span class="fs-meta">Opens your email client with this note pre-filled.</span>
                    <button type="submit" class="fs-btn fs-btn-primary">
                      <span>Continue to email</span>
                    </button>
                  </div>
                </form>
              </Transition>
            </article>
          </div>
        </div>
      </section>
    </main>

    <div class="fs-float show pj-float">
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
      aria-labelledby="pj-dialog-title"
      data-lenis-prevent
      @click="onBackdrop"
      @cancel="animatedCancel"
      @close="onDialogClose"
    >
      <button type="button" class="fs-icon-btn fs-dialog-close" aria-label="Close dialog" @click="closeDetail">
        <X :size="20" />
      </button>
      <div class="pj-page-viewport" aria-live="polite">
        <Transition :name="pageDir > 0 ? 'pj-next' : 'pj-prev'" mode="out-in">
          <div :key="`${detailKind}-${detailPage}`">
            <p class="fs-eyebrow">{{ detailPages[detailPage].eyebrow }}</p>
            <h2 id="pj-dialog-title" class="fs-dialog-title">{{ detailPages[detailPage].title }}</h2>
            <p class="fs-dialog-sub">{{ detailPages[detailPage].sub }}</p>
            <p v-if="detailPages[detailPage].body" class="fs-dialog-text">{{ detailPages[detailPage].body }}</p>
            <ol v-if="detailPages[detailPage].list?.length" class="fs-dialog-list">
              <li v-for="(h, i) in detailPages[detailPage].list" :key="h" :style="{ '--i': i }">
                <span>0{{ i + 1 }}</span>
                <p>{{ h }}</p>
              </li>
            </ol>
            <div v-if="detailPages[detailPage].tags?.length" class="fs-tags">
              <span v-for="t in detailPages[detailPage].tags" :key="t">{{ t }}</span>
            </div>
          </div>
        </Transition>
      </div>
      <nav v-if="detailPages.length > 1" class="pj-pager" aria-label="Detail pages">
        <button type="button" class="fs-btn fs-btn-ghost fs-btn-sm" :disabled="detailPage === 0" @click="turnPage(-1)">
          <ArrowLeft :size="15" />
          <span>Previous</span>
        </button>
        <span class="pj-pager-dots" aria-hidden="true">
          <i v-for="(_, i) in detailPages" :key="i" :class="{ on: i === detailPage }" />
        </span>
        <button
          type="button"
          class="fs-btn fs-btn-ghost fs-btn-sm"
          :disabled="detailPage === detailPages.length - 1"
          @click="turnPage(1)"
        >
          <span>Next</span>
          <ArrowRight :size="15" />
        </button>
      </nav>
    </dialog>
  </div>
</template>
