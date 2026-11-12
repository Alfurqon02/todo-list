<script setup lang="ts">
import { computed, defineAsyncComponent, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { ArrowUpRight, ArrowDown, ArrowUp, Plus, Menu, X, Volume2, VolumeX, Pause, Play } from 'lucide-vue-next'
import { personalInfo, experiences, education, achievements, organizations, skills, languages } from '@/data/portfolioData'
import type { Experience } from '@/data/portfolioData'
import { chapters, selectedResearch } from '@/data/portfolioEditorial'
import { useExperienceStore } from '@/stores/experienceStore'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { usePortfolioJourney } from '@/composables/usePortfolioJourney'
import { useCyberAudio } from '@/composables/useCyberAudio'
import { vMagnetic, usePointerGlow, closeDialogAnimated, animatedCancel } from '@/composables/useMotion'

const ComputationalScene = defineAsyncComponent(() => import('@/components/3d/ComputationalScene.vue'))
const store = useExperienceStore()
const { scrollTo } = useSmoothScroll()
const journey = usePortfolioJourney()
const audio = useCyberAudio()
const folio = ref<HTMLElement | null>(null)
const glow = usePointerGlow(() => folio.value)
const menuOpen = ref(false)
const sceneReady = ref(false)
const sceneFailed = ref(false)
const motion = computed(() => store.animationsEnabled && store.mode === 'immersive' && !sceneFailed.value)
const currentChapter = computed(() => Math.min(2, Math.max(0, Math.round(journey.progress))))
const selectedSkill = ref(0)
const expandedRole = ref<number | null>(0)
const copied = ref(false)
const copyError = ref(false)
const subject = ref('')
const message = ref('')
const composerOpen = ref(false)
const detailRef = ref<HTMLDialogElement | null>(null)
const detail = ref<Experience | null>(null)
const researchDetail = ref(false)
let copyTimer: ReturnType<typeof setTimeout> | undefined
let revealObserver: IntersectionObserver | null = null

const featuredWork = experiences[4]
const relatedWork = [experiences[3], experiences[0]]

// Hero stats count up once on arrival.
const stats = ref([
  { label: 'Roles', value: experiences.length, shown: experiences.length },
  { label: 'Countries', value: 3, shown: 3 },
  { label: 'Publications', value: achievements.length, shown: achievements.length },
])
let countFrame = 0
function countUp() {
  if (!store.animationsEnabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const start = performance.now() + 700
  stats.value.forEach(stat => { stat.shown = 0 })
  const step = (now: number) => {
    const t = Math.min(1, Math.max(0, (now - start) / 1400))
    const eased = 1 - Math.pow(1 - t, 4)
    stats.value.forEach(stat => { stat.shown = Math.round(stat.value * eased) })
    if (t < 1) countFrame = requestAnimationFrame(step)
  }
  countFrame = requestAnimationFrame(step)
}

// ------------------------------------------------------------------
// Header: tucks away while reading downward, returns on any upward
// scroll, and carries a hairline reading-progress indicator.
// ------------------------------------------------------------------
const headerHidden = ref(false)
const readProgress = ref(0)
let lastScroll = 0
let docSpan = 1
function measureDoc() { docSpan = Math.max(1, document.documentElement.scrollHeight - window.innerHeight) }
watch(() => journey.scroll, (y) => {
  const delta = y - lastScroll
  if (Math.abs(delta) > 6) {
    headerHidden.value = delta > 0 && y > 360 && !menuOpen.value
    lastScroll = y
  }
  readProgress.value = Math.min(1, Math.max(0, y / docSpan))
})
const heroScroll = computed(() => Math.min(1, journey.scroll / 720))

// ------------------------------------------------------------------
// Skill tabs: an indicator that glides between tabs (and across wraps).
// ------------------------------------------------------------------
const tabList = ref<HTMLElement | null>(null)
const indicator = ref({ x: 0, y: 0, w: 0 })
function placeIndicator() {
  const tab = tabList.value?.querySelector<HTMLElement>(`#skill-tab-${selectedSkill.value}`)
  if (!tab) return
  indicator.value = { x: tab.offsetLeft, y: tab.offsetTop + tab.offsetHeight - 1, w: tab.offsetWidth }
}
watch(selectedSkill, () => nextTick(placeIndicator))

function navigate(id: string) {
  menuOpen.value = false
  audio.playTick()
  scrollTo(`#${id}`)
}
function toggleMotion() {
  if (sceneFailed.value) {
    sceneFailed.value = false
    store.animationsEnabled = true
    return
  }
  sceneFailed.value = false
  sceneReady.value = false
  store.toggleAnimations()
}
function toggleMode() {
  store.toggleMode()
  menuOpen.value = false
}
async function showWork(work: Experience) {
  detail.value = work
  researchDetail.value = false
  await nextTick()
  detailRef.value?.showModal()
  audio.playTick()
}
async function showResearch() {
  detail.value = null
  researchDetail.value = true
  await nextTick()
  detailRef.value?.showModal()
  audio.playTick()
}
function closeDetail() { closeDialogAnimated(detailRef.value) }
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(personalInfo.email)
    copied.value = true
    copyError.value = false
    clearTimeout(copyTimer)
    copyTimer = setTimeout(() => { copied.value = false }, 2400)
  } catch { copyError.value = true }
}
function composeEmail() {
  window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(message.value)}`
}
function backdropClick(e: MouseEvent) {
  const dialog = detailRef.value
  if (!dialog || e.target !== dialog) return
  const box = dialog.getBoundingClientRect()
  if (e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom) closeDetail()
}
async function moveSkill(index: number) {
  selectedSkill.value = (index + skills.length) % skills.length
  await nextTick()
  document.getElementById(`skill-tab-${selectedSkill.value}`)?.focus()
}
function onResize() { measureDoc(); placeIndicator() }

watch(() => store.animationsEnabled, (enabled) => {
  // The Motion switch is the single source of stillness for the reading view.
  document.documentElement.classList.toggle('motion-paused', !enabled)
}, { immediate: true })

onMounted(() => {
  measureDoc()
  placeIndicator()
  document.fonts?.ready.then(() => { measureDoc(); placeIndicator() })
  window.addEventListener('resize', onResize, { passive: true })
  glow.start()
  // Intersection reveals run once and never hide content from keyboard users.
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealObserver = new IntersectionObserver((entries) => {
      let batch = 0
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target as HTMLElement
        // Elements arriving together cascade instead of popping as one block.
        el.style.setProperty('--rd', `${batch++ * 70}ms`)
        el.classList.add('in-view')
        revealObserver?.unobserve(el)
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' })
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      Array.from(el.children).forEach((child, i) => (child as HTMLElement).style.setProperty('--ri', String(i)))
      el.classList.add('will-reveal')
      revealObserver!.observe(el)
    })
  }
  requestAnimationFrame(() => folio.value?.classList.add('is-loaded'))
  countUp()
})
onBeforeUnmount(() => {
  revealObserver?.disconnect()
  cancelAnimationFrame(countFrame)
  clearTimeout(copyTimer)
  window.removeEventListener('resize', onResize)
  document.documentElement.classList.remove('motion-paused')
})
</script>

<template>
  <div ref="folio" class="folio" :class="{ 'index-mode': store.mode === 'clean', 'scene-ready': sceneReady, 'without-motion': !motion }">
    <a class="skip-link" href="#work">Skip to selected work</a>

    <header class="site-header" :class="{ 'has-scrolled': journey.scroll > 40, 'is-hidden': headerHidden }">
      <a class="wordmark" href="#hero" @click.prevent="navigate('hero')" aria-label="Al Furqon, home"><span class="wordmark-type">furqon</span><span class="wordmark-dot">.</span></a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="#work" @click.prevent="navigate('work')"><span class="nav-label">Work</span> <span>02</span></a>
        <a href="#about" @click.prevent="navigate('about')"><span class="nav-label">About</span></a>
        <a href="#contact" @click.prevent="navigate('contact')"><span class="nav-label">Contact</span> <ArrowUpRight :size="14" /></a>
      </nav>
      <div class="header-actions">
        <button class="view-toggle" @click="toggleMode" :aria-pressed="store.mode === 'clean'">{{ store.mode === 'clean' ? 'Explore view' : 'Index view' }}</button>
        <a v-magnetic="0.2" href="/Mohammad_Al_Furqon_CV.pdf" class="resume-link" download><span>Résumé</span> <ArrowUpRight :size="15" /></a>
        <button class="icon-button menu-toggle" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-controls="mobile-navigation" :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"><X v-if="menuOpen" :size="21" /><Menu v-else :size="21" /></button>
      </div>
      <span class="read-progress" :style="{ transform: `scaleX(${readProgress})` }" aria-hidden="true" />
    </header>

    <Transition name="folio-menu">
      <nav v-if="menuOpen" id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation">
        <a style="--i: 0" href="#work" @click.prevent="navigate('work')">Selected work <ArrowUpRight /></a>
        <a style="--i: 1" href="#about" @click.prevent="navigate('about')">About & experience <ArrowUpRight /></a>
        <a style="--i: 2" href="#contact" @click.prevent="navigate('contact')">Contact <ArrowUpRight /></a>
        <a style="--i: 3" href="/Mohammad_Al_Furqon_CV.pdf" download>Download résumé <ArrowDown /></a>
      </nav>
    </Transition>

    <div v-if="motion" class="scene-layer" :class="{ loaded: sceneReady }">
      <ComputationalScene @ready="sceneReady = true" @unavailable="sceneFailed = true" />
    </div>

    <aside v-if="motion && journey.progress < 2.85" class="chapter-rail" aria-label="Chapter navigation">
      <button v-for="(chapter, i) in chapters" :key="chapter.id" @click="navigate(chapter.id)" :class="{ active: currentChapter === i }" :aria-label="chapter.label" :aria-current="currentChapter === i ? 'step' : undefined"><span class="rail-number">0{{ i + 1 }}</span><span class="rail-line" /></button>
    </aside>

    <main>
      <section id="hero" class="hero narrative-section" :style="{ '--hero-scroll': heroScroll }">
        <div class="hero-glow" aria-hidden="true" />
        <div class="hero-topline eyebrow intro-item" style="--n: 0"><span>Mohammad Al Furqon</span><span>Software engineer & ML researcher</span></div>
        <div class="hero-main">
          <div class="hero-copy">
            <p class="hero-intro eyebrow intro-item" style="--n: 1"><span class="status-dot" /> Based in Indonesia. Thinking beyond borders.</p>
            <h1 class="hero-title"><span class="mline"><span>Order from</span></span><span class="mline"><span class="soft-type">complexity.</span></span></h1>
            <p class="hero-description intro-item" style="--n: 3">I’m Al Furqon. I build dependable web systems<br class="desktop-break" /> and explore how machines understand the world.</p>
            <div class="hero-actions intro-item" style="--n: 4">
              <a class="text-link hero-link" href="#work" @click.prevent="navigate('work')">Discover my work <span v-magnetic="0.35" class="arrow-circle"><ArrowDown :size="17" /></span></a>
              <a class="hero-secondary" href="/Mohammad_Al_Furqon_CV.pdf" download><span>Download résumé</span> <ArrowUpRight :size="15" /></a>
            </div>
          </div>
          <aside class="hero-card intro-item" style="--n: 5" aria-label="At a glance">
            <div class="hero-card-head"><span class="eyebrow">At a glance</span><span class="eyebrow hero-card-status"><span class="status-dot" /> Open to opportunities</span></div>
            <dl class="hero-facts">
              <div><dt class="eyebrow">Now</dt><dd>{{ experiences[0].company }}<small>{{ experiences[0].role }}</small></dd></div>
              <div><dt class="eyebrow">Industry</dt><dd>{{ featuredWork.company }}<small>{{ featuredWork.role }}</small></dd></div>
              <div><dt class="eyebrow">Research</dt><dd>{{ selectedResearch.title }}<small>{{ selectedResearch.type }} · {{ selectedResearch.period }}</small></dd></div>
              <div><dt class="eyebrow">Education</dt><dd>{{ education[0].degree }}<small>{{ education[0].institution }} · GPA {{ education[0].gpa }}</small></dd></div>
            </dl>
            <div class="hero-stats">
              <div v-for="stat in stats" :key="stat.label"><strong>{{ String(stat.shown).padStart(2, '0') }}</strong><span>{{ stat.label }}</span></div>
            </div>
          </aside>
        </div>
        <div class="hero-bottom intro-item" style="--n: 6">
          <div class="hero-footnote"><span class="eyebrow">Engineering · Intelligence · Curiosity</span><p>From Japanese industry to machine learning research.</p></div>
          <div class="sculpture-caption" v-if="motion"><span class="caption-cross">+</span><div><span class="eyebrow">Study 001 — Computational landscape</span><p>Independent parts. Shared purpose.</p></div></div>
          <span class="scroll-note eyebrow">Scroll to unfold <span class="scroll-note-line"><span /></span></span>
        </div>
      </section>

      <section id="work" class="narrative-section work-section">
        <div class="section-marker eyebrow" data-reveal="line"><span>01 / Engineering</span><span>Selected work</span></div>
        <div class="story-grid">
          <div class="story-copy" data-reveal>
            <h2><span class="mline"><span>Built for</span></span><span class="mline"><span class="soft-type">the everyday.</span></span></h2>
            <p class="story-lead">The best software makes complicated work feel straightforward.</p>
            <p class="story-description">At Meiwa Industry in Japan, I rebuilt an inventory system, developed a leave-request application, and helped modernize the company’s internal portal.</p>
            <button class="text-link" @click="showWork(featuredWork)">Inside the work <span v-magnetic="0.35" class="arrow-circle"><ArrowUpRight :size="17" /></span></button>
          </div>
          <div class="story-aside" data-reveal>
            <article class="case-card">
              <div class="case-head"><span class="project-mark" aria-hidden="true">M<span>↗</span></span><div><p class="eyebrow">Case study · Japan · 2024–2025</p><h3>{{ featuredWork.company }}</h3><p class="case-role">{{ featuredWork.role }}</p></div></div>
              <ol class="case-list"><li v-for="(highlight, h) in featuredWork.highlights.slice(0, 4)" :key="highlight"><span class="eyebrow">{{ String(h + 1).padStart(2, '0') }}</span>{{ highlight }}</li></ol>
              <div class="case-foot"><div class="tags"><span v-for="tag in featuredWork.tags" :key="tag">{{ tag }}</span></div><button class="case-open" @click="showWork(featuredWork)" aria-label="Open the Meiwa Industry case study">Read the case <ArrowUpRight :size="15" /></button></div>
            </article>
            <p class="eyebrow related-label">Also building for</p>
            <div class="related-grid">
              <button v-for="work in relatedWork" :key="work.company" class="related-card" @click="showWork(work)"><span class="related-name">{{ work.company }}</span><span class="related-meta">{{ work.role }}</span><span class="related-period eyebrow">{{ work.period }}</span><ArrowUpRight class="related-arrow" :size="16" /></button>
            </div>
          </div>
        </div>
        <div class="scene-annotation"><span class="annotation-line" /><span class="eyebrow">01 — Structure<br /><span class="annotation-sub">Small decisions. A stronger whole.</span></span></div>
      </section>

      <section id="research" class="narrative-section research-section">
        <div class="section-marker eyebrow" data-reveal="line"><span>02 / Intelligence</span><span>Research & exploration</span></div>
        <div class="story-grid">
          <div class="story-copy" data-reveal>
            <h2><span class="mline"><span>A different view.</span></span><span class="mline"><span class="soft-type">More understanding.</span></span></h2>
            <p class="story-lead">What can a machine learn when it sees the same thing from two perspectives?</p>
            <p class="story-description">My undergraduate research explores chest X-ray captioning from frontal and lateral images, combining DenseNet visual features with LSTM language generation.</p>
            <button class="text-link" @click="showResearch">Explore the research <span v-magnetic="0.35" class="arrow-circle"><ArrowUpRight :size="17" /></span></button>
            <p class="research-credit eyebrow">{{ selectedResearch.institution }} / {{ selectedResearch.period }}</p>
          </div>
          <div class="story-aside" data-reveal>
            <figure class="pipeline" aria-label="Research pipeline: frontal and lateral X-ray views, DenseNet visual features, LSTM language generation, generated caption">
              <figcaption class="pipeline-head"><span class="eyebrow">Method</span><span class="eyebrow">DenseNet → LSTM</span></figcaption>
              <div class="pipe-inputs">
                <div class="xray"><span class="xray-plate frontal" aria-hidden="true" /><span class="eyebrow">Input 01</span><strong>Frontal view</strong></div>
                <div class="xray"><span class="xray-plate lateral" aria-hidden="true" /><span class="eyebrow">Input 02</span><strong>Lateral view</strong></div>
              </div>
              <span class="pipe-flow" aria-hidden="true"><i /></span>
              <div class="pipe-stage"><span class="eyebrow">Encoder</span><strong>DenseNet</strong><small>Visual features from both views</small></div>
              <span class="pipe-flow" aria-hidden="true"><i /></span>
              <div class="pipe-stage"><span class="eyebrow">Decoder</span><strong>LSTM</strong><small>Turns features into a word sequence</small></div>
              <span class="pipe-flow" aria-hidden="true"><i /></span>
              <div class="pipe-stage pipe-output"><span class="eyebrow">Output</span><strong>Radiology caption<span class="pipe-caret" aria-hidden="true" /></strong><small>One description informed by both perspectives</small></div>
            </figure>
          </div>
        </div>
        <div class="scene-annotation"><span class="annotation-line" /><span class="eyebrow">02 — Connection<br /><span class="annotation-sub">From information to interpretation.</span></span></div>
      </section>

      <div class="editorial-body">
        <section id="about" class="about-section content-section">
          <div class="section-marker eyebrow" data-reveal="line"><span>03 / The person behind the work</span><span>Always a student</span></div>
          <div class="about-layout" data-reveal>
            <h2><span class="mline"><span>Curiosity is</span></span><span class="mline"><span>the constant<span class="accent-text">.</span></span></span></h2>
            <div class="about-copy"><p>I’m a software engineer with a research mindset. My work has taken me through manufacturing in Japan, cybersecurity in Taiwan, and web systems for companies, universities, and government.</p><p>I care about what happens beneath the interface: the data model, the decisions, and the people who depend on it.</p><div class="education-note"><span class="eyebrow">{{ education[0].degree }} / {{ education[0].period }}</span><h3>{{ education[0].institution }}</h3><p>GPA {{ education[0].gpa }}</p></div></div>
          </div>
          <div class="location-strip" data-reveal><span>Perspective, across borders</span><div><span>Indonesia</span><span class="location-line" /><span>Japan</span><span class="location-line" /><span>Taiwan</span></div></div>
        </section>

        <section id="experience" class="experience-section content-section">
          <div class="index-heading" data-reveal><div><p class="eyebrow">The experience index / {{ experiences.length }} roles</p><h2><span class="mline"><span>A working history.</span></span></h2></div><a class="text-link" href="/Mohammad_Al_Furqon_CV.pdf" download>Full résumé <ArrowUpRight :size="18" /></a></div>
          <div class="experience-list">
            <article v-for="(role, i) in experiences" :key="role.company" class="experience-row" :class="{ expanded: expandedRole === i }" data-reveal="self">
              <h3><button class="experience-toggle" :aria-expanded="expandedRole === i" :aria-controls="`role-detail-${i}`" @click="expandedRole = expandedRole === i ? null : i"><span class="role-number">{{ String(i + 1).padStart(2, '0') }}</span><span class="role-company">{{ role.company }}<span class="role-title">{{ role.role }}</span></span><span class="role-period">{{ role.period }}</span><span class="role-icon" aria-hidden="true"><Plus :size="19" /></span></button></h3>
              <div :id="`role-detail-${i}`" class="role-detail-wrap" :inert="expandedRole !== i"><div class="role-detail"><ul><li v-for="(highlight, h) in role.highlights" :key="highlight" :style="{ '--i': h }">{{ highlight }}</li></ul><div class="tags"><span v-for="(tag, t) in role.tags" :key="tag" :style="{ '--i': t }">{{ tag }}</span></div></div></div>
            </article>
          </div>
        </section>

        <section id="skills" class="skills-section content-section">
          <div class="skills-intro" data-reveal><p class="eyebrow">Tools, chosen for the problem</p><h2><span class="mline"><span>Different tools.</span></span><span class="mline"><span>Same care.</span></span></h2><p>From the browser to the database.<br />From a training loop to production.</p></div>
          <div class="skills-browser" data-reveal>
            <div ref="tabList" class="skill-tabs" role="tablist" aria-label="Skill categories" :style="{ '--ti-x': `${indicator.x}px`, '--ti-y': `${indicator.y}px`, '--ti-w': `${indicator.w}px` }"><button v-for="(skill, i) in skills" :key="skill.name" :id="`skill-tab-${i}`" role="tab" :aria-selected="selectedSkill === i" :aria-controls="`skill-panel-${i}`" :tabindex="selectedSkill === i ? 0 : -1" @click="selectedSkill = i" @keydown.right.prevent="moveSkill(i + 1)" @keydown.left.prevent="moveSkill(i - 1)">{{ skill.name }}</button></div>
            <div :id="`skill-panel-${selectedSkill}`" :key="selectedSkill" role="tabpanel" :aria-labelledby="`skill-tab-${selectedSkill}`" tabindex="0" class="skill-panel"><span v-for="(item, i) in skills[selectedSkill].items" :key="item" :style="{ '--i': i }">{{ item }}</span></div>
          </div>
        </section>

        <section class="notes-section content-section">
          <div data-reveal><p class="eyebrow">Research & writing</p><h2><span class="mline"><span>Ideas, documented.</span></span></h2><article v-for="(achievement, i) in achievements" :key="achievement.title" class="publication"><span class="eyebrow">0{{ i + 1 }} / {{ achievement.title }}</span><h3>{{ achievement.description }}</h3></article></div>
          <div data-reveal><p class="eyebrow">Beyond individual work</p><h2><span class="mline"><span>Better, together.</span></span></h2><details v-for="org in organizations" :key="org.name" class="community-item"><summary><span>{{ org.name }}<small>{{ org.role }}</small></span><Plus :size="17" /></summary><div><p class="eyebrow">{{ org.period }}</p><p>{{ org.description }}</p></div></details><div class="language-list"><span v-for="language in languages" :key="language.name">{{ language.name }} <small>{{ language.level }}</small></span></div></div>
        </section>

        <section id="contact" class="contact-section content-section">
          <div class="section-marker eyebrow" data-reveal="line"><span>04 / Start a conversation</span><span><span class="status-dot pulse" /> Open to opportunities</span></div>
          <div class="contact-layout" data-reveal>
            <div><h2><span class="mline"><span>Have something</span></span><span class="mline"><span>in mind<span class="accent-text">?</span></span></span></h2><p>Software engineering, machine learning,<br />or a problem worth figuring out.</p></div>
            <a v-magnetic="0.18" :href="`mailto:${personalInfo.email}`" class="contact-orbit" aria-label="Email Al Furqon">
              <svg class="orbit-text" viewBox="0 0 200 200" aria-hidden="true"><defs><path id="orbit-path" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" /></defs><text><textPath href="#orbit-path" textLength="500" lengthAdjust="spacing">LET’S BUILD SOMETHING · SAY HELLO · OPEN TO WORK ·</textPath></text></svg>
              <ArrowUpRight class="orbit-arrow" :stroke-width="1" />
            </a>
          </div>
          <div class="contact-links">
            <div><a class="email-link" :href="`mailto:${personalInfo.email}`">{{ personalInfo.email }}</a><button class="copy-button" @click="copyEmail"><Transition name="folio-swap" mode="out-in"><span :key="String(copied)">{{ copied ? 'Copied ✓' : 'Copy address' }}</span></Transition></button><span class="copy-status" role="status">{{ copyError ? 'Please select and copy the email address above.' : copied ? 'Email address copied.' : '' }}</span></div>
            <a class="underline-link" :href="`https://${personalInfo.linkedin}`" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span> <ArrowUpRight :size="16" /></a>
            <button class="text-link composer-toggle" @click="composerOpen = !composerOpen" :aria-expanded="composerOpen" aria-controls="email-composer">Write a note <span class="composer-icon"><Plus :size="16" /></span></button>
          </div>
          <Transition name="folio-expand">
            <form v-if="composerOpen" id="email-composer" class="email-composer" @submit.prevent="composeEmail"><label>Subject<input v-model="subject" name="subject" placeholder="A project, an opportunity, an idea…" required /></label><label>Your message<textarea v-model="message" name="message" rows="4" placeholder="Tell me what you have in mind." required /></label><div><p>Opens your email app with your note ready to send.</p><button v-magnetic="0.15" type="submit" class="solid-button">Continue to email <ArrowUpRight :size="17" /></button></div></form>
          </Transition>
          <footer class="site-footer"><a class="wordmark" href="#hero" @click.prevent="navigate('hero')">furqon<span class="wordmark-dot">.</span></a><span>© {{ new Date().getFullYear() }} Mohammad Al Furqon</span><a class="back-to-top" href="#hero" @click.prevent="navigate('hero')">Back to top <ArrowUp :size="14" /></a></footer>
        </section>
      </div>
    </main>

    <div class="experience-controls" :class="{ 'is-tucked': headerHidden || readProgress > 0.97 }"><button @click="toggleMotion" :aria-pressed="store.animationsEnabled" :aria-label="store.animationsEnabled ? 'Pause motion' : 'Enable motion'"><Pause v-if="store.animationsEnabled" :size="12" /><Play v-else :size="12" /><span>Motion {{ store.animationsEnabled ? 'on' : 'off' }}</span></button><span class="controls-divider" /><button @click="store.toggleSound(); audio.playTick()" :aria-pressed="store.soundEnabled" :aria-label="store.soundEnabled ? 'Mute sound' : 'Enable sound'"><Volume2 v-if="store.soundEnabled" :size="14" /><VolumeX v-else :size="14" /></button></div>

    <dialog ref="detailRef" class="project-dialog anim-dialog" aria-labelledby="detail-title" @click="backdropClick" @cancel="animatedCancel"><button class="dialog-close icon-button" autofocus @click="closeDetail" aria-label="Close project details"><X :size="23" /></button><template v-if="detail"><p class="eyebrow">Selected engineering / {{ detail.period }}</p><h2 id="detail-title">{{ detail.company }}</h2><p class="dialog-subtitle">{{ detail.role }}</p><div class="dialog-divider" /><h3>What I worked on</h3><ul><li v-for="(highlight, h) in detail.highlights" :key="highlight" :style="{ '--i': h }">{{ highlight }}</li></ul><div class="tags"><span v-for="tag in detail.tags" :key="tag">{{ tag }}</span></div></template><template v-else-if="researchDetail"><p class="eyebrow">{{ selectedResearch.type }} / {{ selectedResearch.period }}</p><h2 id="detail-title">{{ selectedResearch.title }}</h2><p class="dialog-subtitle">{{ selectedResearch.subtitle }}</p><div class="dialog-divider" /><p>{{ selectedResearch.description }}</p><p class="research-institution">{{ selectedResearch.institution }}</p><div class="tags"><span v-for="tag in selectedResearch.tags" :key="tag">{{ tag }}</span></div></template></dialog>
  </div>
</template>
