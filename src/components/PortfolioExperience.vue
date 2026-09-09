<script setup lang="ts">
import { computed, defineAsyncComponent, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { ArrowUpRight, ArrowDown, ArrowUp, Plus, Minus, Menu, X, Volume2, VolumeX, Pause, Play } from 'lucide-vue-next'
import { personalInfo, experiences, education, achievements, organizations, skills, languages } from '@/data/portfolioData'
import type { Experience } from '@/data/portfolioData'
import { chapters, selectedResearch } from '@/data/portfolioEditorial'
import { useExperienceStore } from '@/stores/experienceStore'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { usePortfolioJourney } from '@/composables/usePortfolioJourney'
import { useCyberAudio } from '@/composables/useCyberAudio'

const ComputationalScene = defineAsyncComponent(() => import('@/components/3d/ComputationalScene.vue'))
const store = useExperienceStore()
const { scrollTo } = useSmoothScroll()
const journey = usePortfolioJourney()
const audio = useCyberAudio()
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
  if (e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom) dialog.close()
}
async function moveSkill(index: number) {
  selectedSkill.value = (index + skills.length) % skills.length
  await nextTick()
  document.getElementById(`skill-tab-${selectedSkill.value}`)?.focus()
}
watch(() => [store.animationsEnabled, store.mode], () => {
  document.documentElement.classList.toggle('motion-paused', !store.animationsEnabled || store.mode === 'clean')
}, { immediate: true })
onMounted(() => {
  // Intersection reveals run once and never hide content from keyboard users.
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          revealObserver?.unobserve(entry.target)
        }
      }
    }, { threshold: 0.08 })
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('will-reveal')
      revealObserver!.observe(el)
    })
  }
})
onBeforeUnmount(() => {
  revealObserver?.disconnect()
  clearTimeout(copyTimer)
  document.documentElement.classList.remove('motion-paused')
})
</script>

<template>
  <div class="folio" :class="{ 'index-mode': store.mode === 'clean', 'scene-ready': sceneReady, 'without-motion': !motion }">
    <a class="skip-link" href="#work">Skip to selected work</a>

    <header class="site-header" :class="{ 'has-scrolled': journey.scroll > 40 }">
      <a class="wordmark" href="#hero" @click.prevent="navigate('hero')" aria-label="Al Furqon, home">furqon<span class="wordmark-dot">.</span></a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="#work" @click.prevent="navigate('work')">Work <span>02</span></a>
        <a href="#about" @click.prevent="navigate('about')">About</a>
        <a href="#contact" @click.prevent="navigate('contact')">Contact <ArrowUpRight :size="14" /></a>
      </nav>
      <div class="header-actions">
        <button class="view-toggle" @click="toggleMode" :aria-pressed="store.mode === 'clean'">{{ store.mode === 'clean' ? 'Explore view' : 'Index view' }}</button>
        
        <a href="/Mohammad_Al_Furqon_CV.pdf" class="resume-link" download>Résumé <ArrowUpRight :size="15" /></a>
        <button class="icon-button menu-toggle" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-controls="mobile-navigation" :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"><X v-if="menuOpen" :size="21" /><Menu v-else :size="21" /></button>
      </div>
    </header>

    <nav v-if="menuOpen" id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation">
      <a href="#work" @click.prevent="navigate('work')">Selected work <ArrowUpRight /></a>
      <a href="#about" @click.prevent="navigate('about')">About & experience <ArrowUpRight /></a>
      <a href="#contact" @click.prevent="navigate('contact')">Contact <ArrowUpRight /></a>
      <a href="/Mohammad_Al_Furqon_CV.pdf" download>Download résumé <ArrowDown /></a>
    </nav>

    <div v-if="motion" class="scene-layer" :class="{ loaded: sceneReady }">
      <ComputationalScene @ready="sceneReady = true" @unavailable="sceneFailed = true" />
    </div>

    <aside v-if="motion && journey.progress < 2.85" class="chapter-rail" aria-label="Chapter navigation">
      <button v-for="(chapter, i) in chapters" :key="chapter.id" @click="navigate(chapter.id)" :class="{ active: currentChapter === i }" :aria-label="chapter.label" :aria-current="currentChapter === i ? 'step' : undefined"><span class="rail-number">0{{ i + 1 }}</span><span class="rail-line" /></button>
    </aside>

    <main>
      <section id="hero" class="hero narrative-section">
        <div class="hero-topline eyebrow"><span>Mohammad Al Furqon</span><span>Software engineer & ML researcher</span></div>
        <div class="hero-copy">
          <p class="hero-intro eyebrow"><span class="status-dot" /> Based in Indonesia. Thinking beyond borders.</p>
          <h1>Order from<br /><span class="soft-type">complexity.</span></h1>
          <p class="hero-description">I’m Al Furqon. I build dependable web systems<br class="desktop-break" /> and explore how machines understand the world.</p>
          <a class="text-link hero-link" href="#work" @click.prevent="navigate('work')">Discover my work <span class="arrow-circle"><ArrowDown :size="17" /></span></a>
        </div>
        <div class="hero-bottom">
          <div class="hero-footnote"><span class="eyebrow">Engineering · Intelligence · Curiosity</span><p>From Japanese industry to machine learning research.</p></div>
          <div class="sculpture-caption" v-if="motion"><span class="caption-cross">+</span><div><span class="eyebrow">Study 001 — Computational landscape</span><p>Independent parts. Shared purpose.</p></div></div>
          <span class="scroll-note eyebrow">Scroll to unfold <ArrowDown :size="14" /></span>
        </div>
      </section>

      <section id="work" class="narrative-section work-section">
        <div class="section-marker eyebrow"><span>01 / Engineering</span><span>Selected work</span></div>
        <div class="story-copy" data-reveal>
          <h2>Built for<br /><span class="soft-type">the everyday.</span></h2>
          <p class="story-lead">The best software makes complicated work feel straightforward.</p>
          <p class="story-description">At Meiwa Industry in Japan, I rebuilt an inventory system, developed a leave-request application, and helped modernize the company’s internal portal.</p>
          <div class="project-credit"><span class="project-mark" aria-hidden="true">M<span>↗</span></span><div><h3>Meiwa Industry</h3><p>Internal systems · Japan · 2024–2025</p></div></div>
          <button class="text-link" @click="showWork(featuredWork)">Inside the work <span class="arrow-circle"><ArrowUpRight :size="17" /></span></button>
          <div class="related-work"><span class="eyebrow">Also building for</span><button @click="showWork(experiences[3])">Bontang City <ArrowUpRight :size="14" /></button><button @click="showWork(experiences[0])">Paragon Technology <ArrowUpRight :size="14" /></button></div>
        </div>
        <div class="scene-annotation"><span class="annotation-line" /><span class="eyebrow">01 — Structure<br /><span class="annotation-sub">Small decisions. A stronger whole.</span></span></div>
      </section>

      <section id="research" class="narrative-section research-section">
        <div class="section-marker eyebrow"><span>02 / Intelligence</span><span>Research & exploration</span></div>
        <div class="story-copy" data-reveal>
          <h2>A different view.<br /><span class="soft-type">More understanding.</span></h2>
          <p class="story-lead">What can a machine learn when it sees the same thing from two perspectives?</p>
          <p class="story-description">My undergraduate research explores chest X-ray captioning from frontal and lateral images, combining DenseNet visual features with LSTM language generation.</p>
          <div class="research-path" aria-label="Research method"><span>Two views</span><span aria-hidden="true">→</span><span>Visual features</span><span aria-hidden="true">→</span><span>Language</span></div>
          <button class="text-link" @click="showResearch">Explore the research <span class="arrow-circle"><ArrowUpRight :size="17" /></span></button>
          <p class="research-credit eyebrow">Universitas Sebelas Maret / 2024–2026</p>
        </div>
        <div class="scene-annotation"><span class="annotation-line" /><span class="eyebrow">02 — Connection<br /><span class="annotation-sub">From information to interpretation.</span></span></div>
      </section>

      <div class="editorial-body">
        <section id="about" class="about-section content-section">
          <div class="section-marker eyebrow"><span>03 / The person behind the work</span><span>Always a student</span></div>
          <div class="about-layout" data-reveal>
            <h2>Curiosity is<br />the constant<span class="accent-text">.</span></h2>
            <div class="about-copy"><p>I’m a software engineer with a research mindset. My work has taken me through manufacturing in Japan, cybersecurity in Taiwan, and web systems for companies, universities, and government.</p><p>I care about what happens beneath the interface: the data model, the decisions, and the people who depend on it.</p><div class="education-note"><span class="eyebrow">{{ education[0].degree }} / {{ education[0].period }}</span><h3>{{ education[0].institution }}</h3><p>GPA {{ education[0].gpa }}</p></div></div>
          </div>
          <div class="location-strip" data-reveal><span>Perspective, across borders</span><div><span>Indonesia</span><span class="location-line" /><span>Japan</span><span class="location-line" /><span>Taiwan</span></div></div>
        </section>

        <section id="experience" class="experience-section content-section">
          <div class="index-heading" data-reveal><div><p class="eyebrow">The experience index / {{ experiences.length }} roles</p><h2>A working history.</h2></div><a class="text-link" href="/Mohammad_Al_Furqon_CV.pdf" download>Full résumé <ArrowUpRight :size="18" /></a></div>
          <div class="experience-list">
            <article v-for="(role, i) in experiences" :key="role.company" class="experience-row" :class="{ expanded: expandedRole === i }">
              <h3><button class="experience-toggle" :aria-expanded="expandedRole === i" :aria-controls="`role-detail-${i}`" @click="expandedRole = expandedRole === i ? null : i"><span class="role-number">{{ String(i + 1).padStart(2, '0') }}</span><span class="role-company">{{ role.company }}<span class="role-title">{{ role.role }}</span></span><span class="role-period">{{ role.period }}</span><Minus v-if="expandedRole === i" :size="19" /><Plus v-else :size="19" /></button></h3>
              <div :id="`role-detail-${i}`" class="role-detail" :hidden="expandedRole !== i"><ul><li v-for="highlight in role.highlights" :key="highlight">{{ highlight }}</li></ul><div class="tags"><span v-for="tag in role.tags" :key="tag">{{ tag }}</span></div></div>
            </article>
          </div>
        </section>

        <section id="skills" class="skills-section content-section">
          <div class="skills-intro" data-reveal><p class="eyebrow">Tools, chosen for the problem</p><h2>Different tools.<br />Same care.</h2><p>From the browser to the database.<br />From a training loop to production.</p></div>
          <div class="skills-browser" data-reveal><div class="skill-tabs" role="tablist" aria-label="Skill categories"><button v-for="(skill, i) in skills" :key="skill.name" :id="`skill-tab-${i}`" role="tab" :aria-selected="selectedSkill === i" :aria-controls="`skill-panel-${i}`" :tabindex="selectedSkill === i ? 0 : -1" @click="selectedSkill = i" @keydown.right.prevent="moveSkill(i + 1)" @keydown.left.prevent="moveSkill(i - 1)">{{ skill.name }}</button></div><div :id="`skill-panel-${selectedSkill}`" role="tabpanel" :aria-labelledby="`skill-tab-${selectedSkill}`" tabindex="0" class="skill-panel"><span v-for="item in skills[selectedSkill].items" :key="item">{{ item }}</span></div></div>
        </section>

        <section class="notes-section content-section">
          <div data-reveal><p class="eyebrow">Research & writing</p><h2>Ideas, documented.</h2><article v-for="(achievement, i) in achievements" :key="achievement.title" class="publication"><span class="eyebrow">0{{ i + 1 }} / {{ achievement.title }}</span><h3>{{ achievement.description }}</h3></article></div>
          <div data-reveal><p class="eyebrow">Beyond individual work</p><h2>Better, together.</h2><details v-for="org in organizations" :key="org.name" class="community-item"><summary><span>{{ org.name }}<small>{{ org.role }}</small></span><Plus :size="17" /></summary><div><p class="eyebrow">{{ org.period }}</p><p>{{ org.description }}</p></div></details><div class="language-list"><span v-for="language in languages" :key="language.name">{{ language.name }} <small>{{ language.level }}</small></span></div></div>
        </section>

        <section id="contact" class="contact-section content-section">
          <div class="section-marker eyebrow"><span>04 / Start a conversation</span><span><span class="status-dot" /> Open to opportunities</span></div>
          <div class="contact-layout" data-reveal><div><h2>Have something<br />in mind<span class="accent-text">?</span></h2><p>Software engineering, machine learning,<br />or a problem worth figuring out.</p></div><a :href="`mailto:${personalInfo.email}`" class="contact-orbit" aria-label="Email Al Furqon"><ArrowUpRight :stroke-width="1" /></a></div>
          <div class="contact-links"><div><a class="email-link" :href="`mailto:${personalInfo.email}`">{{ personalInfo.email }}</a><button class="copy-button" @click="copyEmail">{{ copied ? 'Copied ✓' : 'Copy address' }}</button><span class="copy-status" role="status">{{ copyError ? 'Please select and copy the email address above.' : copied ? 'Email address copied.' : '' }}</span></div><a :href="`https://${personalInfo.linkedin}`" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight :size="16" /></a><button class="text-link" @click="composerOpen = !composerOpen" :aria-expanded="composerOpen" aria-controls="email-composer">Write a note <Minus v-if="composerOpen" :size="16" /><Plus v-else :size="16" /></button></div>
          <form v-if="composerOpen" id="email-composer" class="email-composer" @submit.prevent="composeEmail"><label>Subject<input v-model="subject" name="subject" placeholder="A project, an opportunity, an idea…" required /></label><label>Your message<textarea v-model="message" name="message" rows="4" placeholder="Tell me what you have in mind." required /></label><div><p>Opens your email app with your note ready to send.</p><button type="submit" class="solid-button">Continue to email <ArrowUpRight :size="17" /></button></div></form>
          <footer class="site-footer"><a class="wordmark" href="#hero" @click.prevent="navigate('hero')">furqon<span class="wordmark-dot">.</span></a><span>© {{ new Date().getFullYear() }} Mohammad Al Furqon</span><a href="#hero" @click.prevent="navigate('hero')">Back to top <ArrowUp :size="14" /></a></footer>
        </section>
      </div>
    </main>

    <div class="experience-controls"><button @click="toggleMotion" :aria-pressed="store.animationsEnabled" :aria-label="store.animationsEnabled ? 'Pause motion' : 'Enable motion'"><Pause v-if="store.animationsEnabled" :size="12" /><Play v-else :size="12" /><span>Motion {{ store.animationsEnabled ? 'on' : 'off' }}</span></button><span class="controls-divider" /><button @click="store.toggleSound(); audio.playTick()" :aria-pressed="store.soundEnabled" :aria-label="store.soundEnabled ? 'Mute sound' : 'Enable sound'"><Volume2 v-if="store.soundEnabled" :size="14" /><VolumeX v-else :size="14" /></button></div>

    <dialog ref="detailRef" class="project-dialog" aria-labelledby="detail-title" @click="backdropClick"><button class="dialog-close icon-button" autofocus @click="detailRef?.close()" aria-label="Close project details"><X :size="23" /></button><template v-if="detail"><p class="eyebrow">Selected engineering / {{ detail.period }}</p><h2 id="detail-title">{{ detail.company }}</h2><p class="dialog-subtitle">{{ detail.role }}</p><div class="dialog-divider" /><h3>What I worked on</h3><ul><li v-for="highlight in detail.highlights" :key="highlight">{{ highlight }}</li></ul><div class="tags"><span v-for="tag in detail.tags" :key="tag">{{ tag }}</span></div></template><template v-else-if="researchDetail"><p class="eyebrow">{{ selectedResearch.type }} / {{ selectedResearch.period }}</p><h2 id="detail-title">{{ selectedResearch.title }}</h2><p class="dialog-subtitle">{{ selectedResearch.subtitle }}</p><div class="dialog-divider" /><p>{{ selectedResearch.description }}</p><p class="research-institution">{{ selectedResearch.institution }}</p><div class="tags"><span v-for="tag in selectedResearch.tags" :key="tag">{{ tag }}</span></div></template></dialog>
  </div>
</template>
