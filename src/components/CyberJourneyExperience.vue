<script setup lang="ts">
import { computed, defineAsyncComponent, nextTick, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { ArrowUpRight, ArrowDown, ArrowRight, ArrowLeft, X, Menu, Volume2, VolumeX } from 'lucide-vue-next'
import { useExperienceStore } from '@/stores/experienceStore'
import { useSmoothScroll, getLenis } from '@/composables/useSmoothScroll'
import { useCyberJourney, boostJourney } from '@/composables/useCyberJourney'
import { useCyberAudio } from '@/composables/useCyberAudio'
import { vMagnetic, useScramble, usePointerGlow, closeDialogAnimated, animatedCancel } from '@/composables/useMotion'
import { CYBER_STOPS, LAST_POSITION, CHAPTER_SCROLL_VH, flightAt, storyCopyAt } from '@/utils/cyberStory'
import { personalInfo, experiences, education, skills, languages, organizations, achievements } from '@/data/portfolioData'
import { selectedResearch } from '@/data/portfolioEditorial'

const Canvas = defineAsyncComponent(() => import('@/components/3d/CyberWorldCanvas.vue'))
const store = useExperienceStore()
const root = ref<HTMLElement | null>(null)
const stage = ref<HTMLElement | null>(null)
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

// ------------------------------------------------------------------
// Boot sequence: a short system start that covers shader compilation,
// then hands over to the hero's choreographed entrance.
// ------------------------------------------------------------------
const booted = ref(false)
const bootProgress = ref(0)
const bootStatus = computed(() => bootProgress.value < 34 ? 'Initialising signal' : bootProgress.value < 68 ? 'Compiling the world' : bootProgress.value < 100 ? 'Routing the path' : 'Signal locked')
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
  // Time-based, so slow devices see the same pacing: creep toward 90% while
  // loading, then finish quickly once the scene reports in.
  const ceiling = loaded && elapsed > 850 ? 100 : 90
  const ease = 1 - Math.exp(-dt / (loaded ? 110 : 650))
  bootProgress.value += (ceiling - bootProgress.value) * ease
  if (ceiling === 100 && bootProgress.value > 99.4) {
    bootProgress.value = 100
    bootTimeout = setTimeout(finishBoot, 260)
    return
  }
  bootFrame = requestAnimationFrame(runBoot)
}
function finishBoot() {
  cancelAnimationFrame(bootFrame)
  clearTimeout(bootTimeout)
  booted.value = true
}

const detailPages = computed(() => {
  const entries = detailKind.value === 'engineering'
    ? [experiences[4], experiences[3], experiences[0]].flatMap(w => [{ title: w.company, text: `${w.role} / ${w.period}` }, ...w.highlights.map(text => ({ title: w.company, text }))])
    : detailKind.value === 'research'
      ? [{ title: selectedResearch.title, text: selectedResearch.subtitle }, { title: 'Research method', text: selectedResearch.description }, { title: 'Research background', text: `${selectedResearch.institution} / ${selectedResearch.period}` }, { title: 'Also in print', text: achievements[0].description }]
      : [{ title: personalInfo.name, text: personalInfo.about }, { title: education[0].institution, text: `${education[0].degree} / ${education[0].period} / GPA ${education[0].gpa}` }, { title: 'Languages', text: languages.map(i => `${i.name}: ${i.level}`).join(' / ') }, ...organizations.map(i => ({ title: i.name, text: `${i.role} / ${i.period}. ${i.description}` }))]
  return entries.flatMap(entry => {
    const chunks: string[] = []
    for (const word of entry.text.split(/\s+/)) {
      if (!chunks.length || chunks[chunks.length - 1].length + word.length > 280) chunks.push(word)
      else chunks[chunks.length - 1] += ` ${word}`
    }
    return chunks.map(text => ({ title: entry.title, text }))
  })
})

function releaseDetails() {
  document.documentElement.classList.remove('cyber-detail-open')
  getLenis()?.start()
}

const emailSubject = ref('')
const emailMessage = ref('')
const copied = ref('')
const phase = computed(() => flightAt(journey.position))
const copy = computed(() => storyCopyAt(journey.position))
const active = computed(() => copy.value.index)
const copyPanel = ref<HTMLElement | null>(null)

// ------------------------------------------------------------------
// Fit, don't scroll: the chapter copy never becomes a scroll box inside
// the page. If a chapter is taller than the space available on this
// screen, step down to a denser layout (tighter rhythm, then fewer
// secondary lines) until it fits.
// ------------------------------------------------------------------
const density = ref(0)
let fitRun = 0
function overflows() {
  const panel = copyPanel.value
  const article = panel?.querySelector<HTMLElement>('.cyber-copy-content')
  if (!panel || !article) return false
  // Layout boxes only, so entrance transforms never count as overflow.
  const needed = article.offsetTop + article.offsetHeight
  return needed > panel.clientHeight + 1
}
const MAX_DENSITY = 3
let tightening = false
async function tighten() {
  if (tightening) return
  tightening = true
  while (density.value < MAX_DENSITY && overflows()) {
    density.value++
    await nextTick()
  }
  tightening = false
}
// Late layout changes (fonts, a role card swap) can only tighten further;
// a full reset happens on chapter, tab or viewport changes.
let articleObserver: ResizeObserver | null = null
async function fitCopy() {
  const run = ++fitRun
  density.value = 0
  await nextTick()
  if (run !== fitRun) return
  await tighten()
  const article = copyPanel.value?.querySelector('.cyber-copy-content')
  articleObserver?.disconnect()
  if (article) articleObserver?.observe(article)
}
let fitFrame = 0
function scheduleFit() { cancelAnimationFrame(fitFrame); fitFrame = requestAnimationFrame(() => { fitCopy() }) }
watch(active, scheduleFit)
watch(() => store.activeSkillIndex, scheduleFit)
// Role cards swap with an out-in transition; measure the card that stays.
watch(() => store.activeNodeIndex, () => setTimeout(scheduleFit, 320))

const role = computed(() => experiences[store.activeNodeIndex % experiences.length])
const skill = computed(() => skills[store.activeSkillIndex % skills.length])
const travelLabel = computed(() => `${CYBER_STOPS[phase.value.index].label} → ${CYBER_STOPS[Math.min(phase.value.index + 1, 6)].label}`)
const SCENE_NOTES = ['PROCESSOR / ORIGIN', 'ARCHITECTURE / SYSTEMS', 'NEURAL PIPELINE / LEARNING', 'CONNECTED HUBS / PERSPECTIVE', 'CAREER ARCHIVE / EXPERIENCE', 'TOOL BUS / CAPABILITIES', 'TERMINAL / CONNECTION']

// Decorative labels decode into place as the journey moves.
const eyebrowLabel = useScramble(() => CYBER_STOPS[active.value].label.toUpperCase())
const sceneNote = useScramble(() => SCENE_NOTES[active.value], 760)
const travelText = useScramble(() => travelLabel.value.toUpperCase(), 700)

// Fill the chapter track exactly between the first and last dots.
const trackProgress = computed(() => Math.min(1, (phase.value.index + phase.value.travel) / (CYBER_STOPS.length - 1)))

function go(index: number) {
  menu.value = false
  audio.playTick()
  const chapter = Math.max(0, Math.min(6, index))
  const target = journey.start + chapter * journey.unit
  boostJourney(chapter)
  scrollTo(target)
  history.replaceState(null, '', `#${CYBER_STOPS[chapter].id}`)
}

function readingView() { store.setMode('clean') }

async function openDetails(kind: typeof detailKind.value) {
  audio.playLockOn()
  detailKind.value = kind
  detailPage.value = 0
  await nextTick()
  detail.value?.showModal()
  getLenis()?.stop()
  document.documentElement.classList.add('cyber-detail-open')
}
function closeDetails() { closeDialogAnimated(detail.value) }
function turnPage(delta: number) {
  const next = detailPage.value + delta
  if (next < 0 || next >= detailPages.value.length) return
  pageDirection.value = delta
  detailPage.value = next
  audio.playTick()
}

function changeRole(delta: number) {
  roleDirection.value = delta
  store.activeNodeIndex = (store.activeNodeIndex + delta + experiences.length) % experiences.length
  audio.playTick()
}
function setSkill(index: number) { store.activeSkillIndex = index; audio.playTick() }

async function copyAddress() {
  try { await navigator.clipboard.writeText(personalInfo.email); copied.value = 'Email copied.' }
  catch { copied.value = 'Select the address to copy it.' }
}
function sendEmail() {
  location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(emailSubject.value)}&body=${encodeURIComponent(emailMessage.value)}`
}
function closeBackdrop(event: MouseEvent) {
  const modal = detail.value
  if (!modal || event.target !== modal) return
  const r = modal.getBoundingClientRect()
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeDetails()
}

// ← / → step between chapters when focus is not in a field or dialog.
function onKeydown(event: KeyboardEvent) {
  if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
  const el = event.target as HTMLElement | null
  if (el?.closest('input, textarea, select, [contenteditable], dialog, [role="tablist"]')) return
  event.preventDefault()
  go(active.value + (event.key === 'ArrowRight' ? 1 : -1))
}

onMounted(() => {
  const index = CYBER_STOPS.findIndex((stop) => `#${stop.id}` === location.hash)
  if (index > 0 && window.scrollY < 20) nextTick(() => go(index))
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('resize', scheduleFit, { passive: true })
  articleObserver = new ResizeObserver(() => { tighten() })
  document.fonts?.ready.then(scheduleFit)
  scheduleFit()
  glow.start()
  bootFrame = requestAnimationFrame(runBoot)
  // Never hold the visitor behind the loader.
  setTimeout(() => { if (!booted.value) finishBoot() }, 7000)
})

onBeforeUnmount(() => {
  releaseDetails()
  window.removeEventListener('keydown', onKeydown)
  window.removeEventListener('resize', scheduleFit)
  cancelAnimationFrame(fitFrame)
  articleObserver?.disconnect()
  cancelAnimationFrame(bootFrame)
  clearTimeout(bootTimeout)
})
</script>

<template>
  <div class="cyber-journey" :class="{ booted }">
    <a class="cyber-skip" href="#" @click.prevent="readingView">Go to the portfolio without the 3D journey</a>

    <Transition name="cy-boot">
      <div v-if="!booted" class="cyber-boot" role="status" aria-label="Loading the 3D journey">
        <div class="cyber-boot-inner" aria-hidden="true">
          <span class="brand-emblem cyber-boot-emblem">F<span>↗</span></span>
          <p class="cyber-boot-name">AL FURQON<small>SOFTWARE / INTELLIGENCE</small></p>
          <div class="cyber-boot-bar"><span :style="{ transform: `scaleX(${bootProgress / 100})` }" /></div>
          <div class="cyber-boot-meta"><span>{{ bootStatus }}</span><span>{{ String(Math.round(bootProgress)).padStart(3, '0') }}%</span></div>
        </div>
      </div>
    </Transition>

    <div ref="root" class="cyber-scroll" :style="{ height: `calc(100svh + ${LAST_POSITION * CHAPTER_SCROLL_VH}svh)` }">
      <div ref="stage" class="cyber-stage" :data-chapter="active" :data-flight="phase.travel.toFixed(3)">
        <div class="cyber-world" :class="{ ready }"><Canvas v-if="!failed" @ready="ready = true" @unavailable="failed = true" /></div>
        <div class="cyber-vignette" :style="{ opacity: 0.16 + copy.opacity * 0.84 }" aria-hidden="true" />
        <div class="cyber-spotlight" aria-hidden="true" />
        <div class="cyber-scanline" aria-hidden="true" />

        <header class="cyber-header">
          <a href="#hero" class="cyber-brand" @click.prevent="go(0)"><span class="brand-emblem" aria-hidden="true">F<span>↗</span></span><span>AL FURQON<small>SOFTWARE / INTELLIGENCE</small></span></a>
          <nav class="cyber-top-nav" aria-label="Main navigation">
            <a href="#work" :class="{ current: active === 1 }" @click.prevent="go(1)">Engineering</a>
            <a href="#research" :class="{ current: active === 2 }" @click.prevent="go(2)">Research</a>
            <a href="#contact" :class="{ current: active === 6 }" @click.prevent="go(6)">Contact <ArrowUpRight :size="13" /></a>
          </nav>
          <div class="cyber-header-tools">
            <button @click="readingView" class="cyber-index">Exit 3D <ArrowUpRight :size="13" /></button>
            <button class="cyber-icon cyber-menu-button" :class="{ open: menu }" @click="menu = !menu" :aria-expanded="menu" aria-controls="cyber-menu" aria-label="Chapter navigation"><X v-if="menu" :size="20" /><Menu v-else :size="20" /></button>
          </div>
        </header>

        <Transition name="cy-menu">
          <nav v-if="menu" id="cyber-menu" class="cyber-mobile-menu" aria-label="All chapters">
            <button v-for="(stop, i) in CYBER_STOPS" :key="stop.id" :style="{ '--i': i }" :class="{ current: active === i }" @click="go(i)"><span>0{{ i }}</span>{{ stop.label }}<ArrowUpRight :size="17" /></button>
            <button :style="{ '--i': CYBER_STOPS.length }" @click="readingView">Back to the portfolio <ArrowUpRight :size="17" /></button>
          </nav>
        </Transition>

        <div v-if="failed" class="cyber-fallback" role="status">The 3D view is unavailable on this device. <button @click="readingView">Open the complete reading view <ArrowRight :size="15" /></button></div>

        <div ref="copyPanel" class="cyber-story-copy" :data-density="density" role="region" :aria-label="`${CYBER_STOPS[active].label} details`" :style="{ opacity: copy.opacity, '--copy-shift': `${(1 - copy.opacity) * (copy.entering ? 22 : -18)}px` }" :inert="copy.opacity < 0.05" :aria-hidden="copy.opacity < 0.05">

          <div class="cyber-chapter-eyebrow" :key="`eyebrow-${active}`"><span class="cyber-chapter-number">0{{ active }}</span><span aria-hidden="true" class="cyber-eyebrow-label">{{ eyebrowLabel }}</span><span class="sr-only">{{ CYBER_STOPS[active].label }}</span><span class="eyebrow-rule" /></div>

          <article v-if="active === 0" class="cyber-copy-content">
            <p class="cyber-role-line">Software engineer & machine learning researcher</p>
            <h1><span class="mline mword"><span>Follow</span></span> <span class="mline mword"><span>the</span></span> <span class="mline mword"><span>signal<span class="cyber-punctuation">.</span></span></span></h1>
            <p class="cyber-lead">I’m Al Furqon. Enter the systems I build—and the thinking that connects them.</p>
            <p class="cyber-support">Web engineering. Machine intelligence.<br /> Experience across Indonesia, Japan, and Taiwan.</p>
            <div class="cyber-hero-actions"><button v-magnetic="0.22" class="cyber-action" @click="go(1)">Enter the system <ArrowDown :size="18" /></button><a href="/Mohammad_Al_Furqon_CV.pdf" download class="cyber-secondary">Download résumé <ArrowUpRight :size="14" /></a></div>
          </article>

          <article v-else-if="active === 1" class="cyber-copy-content">
            <h2><span class="mline"><span>Make the</span></span><span class="mline"><span>system work<span class="cyber-punctuation">.</span></span></span></h2>
            <p class="cyber-lead">Inside every useful product is a system someone has to get right.</p>
            <p class="cyber-support">At Meiwa Industry in Japan, I rebuilt inventory management, developed a leave-request application, and helped modernize the company’s internal portal.</p>
            <div class="cyber-project-stamp"><span>MEIWA INDUSTRY</span><small>JAPAN / 2024–2025</small></div>
            <button v-magnetic="0.22" class="cyber-action" @click="openDetails('engineering')">The engineering work <ArrowUpRight :size="18" /></button>
            <p class="cyber-bridge">A working system creates data.<br /><span>Follow it into the next layer.</span></p>
          </article>

          <article v-else-if="active === 2" class="cyber-copy-content">
            <h2><span class="mline"><span>From data</span></span><span class="mline"><span>to meaning<span class="cyber-punctuation">.</span></span></span></h2>
            <p class="cyber-lead">Two views. One deeper understanding.</p>
            <p class="cyber-support">My research explores chest X-ray captioning from frontal and lateral images. DenseNet extracts visual features; an LSTM translates them into a language sequence.</p>
            <div class="cyber-method"><span>DUAL INPUT</span><ArrowRight :size="12" /><span>DENSENET</span><ArrowRight :size="12" /><span>LSTM</span></div>
            <button v-magnetic="0.22" class="cyber-action" @click="openDetails('research')">Explore the research <ArrowUpRight :size="18" /></button>
            <p class="cyber-bridge">Different inputs reveal more.<br /><span>The same is true of experience.</span></p>
          </article>

          <article v-else-if="active === 3" class="cyber-copy-content">
            <h2><span class="mline"><span>Different places.</span></span><span class="mline"><span>One perspective<span class="cyber-punctuation">.</span></span></span></h2>
            <p class="cyber-lead">Learning to see the whole system means stepping outside your own.</p>
            <div class="cyber-location-list"><div style="--i: 0"><span>ID</span><p>Indonesia<small>Informatics, web systems & research</small></p></div><div style="--i: 1"><span>JP</span><p>Japan<small>Manufacturing & internal applications</small></p></div><div style="--i: 2"><span>TW</span><p>Taiwan<small>Cybersecurity & vulnerability assessment</small></p></div></div>
            <button v-magnetic="0.22" class="cyber-action" @click="openDetails('about')">The person behind the work <ArrowUpRight :size="18" /></button>
            <p class="cyber-bridge">Each place leaves something behind.<br /><span>The archive is built from those experiences.</span></p>
          </article>

          <article v-else-if="active === 4" class="cyber-copy-content">
            <h2><span class="mline"><span>Experience,</span></span><span class="mline"><span>accumulated<span class="cyber-punctuation">.</span></span></span></h2>
            <p class="cyber-support">Every role adds another layer to how I build.</p>
            <div class="cyber-role-stack">
              <Transition :name="roleDirection > 0 ? 'cy-card-next' : 'cy-card-prev'" mode="out-in">
                <div :key="store.activeNodeIndex" class="cyber-role-card"><div class="cyber-card-overline"><span>ARCHIVE / {{ String(store.activeNodeIndex + 1).padStart(2, '0') }}</span><span>{{ role.period }}</span></div><h3>{{ role.company }}</h3><p>{{ role.role }}</p><ul><li v-for="(highlight, h) in role.highlights.slice(0, 3)" :key="highlight" :style="{ '--i': h }">{{ highlight }}</li></ul><p v-if="role.highlights.length > 3" class="cyber-role-more">+{{ role.highlights.length - 3 }} more in the career index</p></div>
              </Transition>
            </div>
            <div class="cyber-card-navigation"><button @click="changeRole(-1)" aria-label="Previous role"><ArrowLeft :size="18" /></button><span aria-live="polite">{{ String(store.activeNodeIndex + 1).padStart(2, '0') }} <span>/ {{ experiences.length }}</span></span><button @click="changeRole(1)" aria-label="Next role"><ArrowRight :size="18" /></button><button class="cyber-all-roles" @click="readingView">Full career index <ArrowUpRight :size="13" /></button></div>
            <p class="cyber-bridge">Experience informs the decisions.<br /><span>The next room holds the tools.</span></p>
          </article>

          <article v-else-if="active === 5" class="cyber-copy-content">
            <h2><span class="mline"><span>The right tool.</span></span><span class="mline"><span>For the problem<span class="cyber-punctuation">.</span></span></span></h2>
            <p class="cyber-support">From the interface to the infrastructure—and from visual features to language.</p>
            <div class="cyber-skill-tabs" aria-label="Skill categories"><button v-for="(item, i) in skills" :key="item.name" @click="setSkill(i)" :aria-pressed="store.activeSkillIndex === i">{{ item.name }}</button></div>
            <div class="cyber-skill-content" :key="store.activeSkillIndex" aria-live="polite"><span v-for="(item, i) in skill.items" :key="item" :style="{ '--i': i }">{{ item }}</span></div>
            <p class="cyber-bridge">Systems, research, experience, tools.<br /><span>Now the connection reaches you.</span></p>
          </article>

          <article v-else class="cyber-copy-content">
            <h2><span class="mline"><span>Your idea.</span></span> <span class="mline"><span>Our next system<span class="cyber-punctuation">.</span></span></span></h2>
            <p class="cyber-lead">The next connection starts with a conversation.</p>
            <p class="cyber-support">Open to software engineering, machine learning, and problems worth figuring out.</p>
            <a class="cyber-contact-email" :href="`mailto:${personalInfo.email}`"><span>{{ personalInfo.email }}</span> <ArrowUpRight :size="17" /></a>
            <div class="cyber-contact-actions"><button v-magnetic="0.22" class="cyber-action" @click="openDetails('contact')">Start a conversation <ArrowUpRight :size="17" /></button><a :href="`https://${personalInfo.linkedin}`" target="_blank" rel="noopener noreferrer" class="cyber-secondary">LinkedIn <ArrowUpRight :size="14" /></a></div>
            <p class="cyber-endnote">MOHAMMAD AL FURQON<br />SOFTWARE ENGINEER / ML RESEARCHER</p>
          </article>
        </div>

        <div class="cyber-travel-caption" :style="{ opacity: 1 - copy.opacity }" aria-hidden="true"><span class="travel-dash" />{{ travelText }}<span class="travel-dash" /></div>
        <div class="cyber-scroll-cue" :style="{ opacity: active === 0 ? copy.opacity : 0 }" aria-hidden="true"><span class="cue-track"><span /></span>Scroll</div>
        <aside class="cyber-scene-note" :style="{ opacity: copy.opacity }" aria-hidden="true"><span class="scene-note-cross">+</span><span>{{ sceneNote }}<small>{{ active === 0 ? 'Scroll to open the housing' : active === 6 ? 'Signal received. Your move.' : CYBER_STOPS[active].next }}</small></span></aside>

        <footer class="cyber-navigation">
          <div class="cyber-sound">
            <button class="cyber-sound-toggle" :class="{ playing: audio.isPlaying.value }" @click="audio.toggle" :aria-label="audio.isPlaying.value ? 'Mute all audio' : 'Enable music and sound effects'" :aria-pressed="audio.isPlaying.value"><span class="sound-bars" aria-hidden="true"><i /><i /><i /><i /></span><Volume2 v-if="audio.isPlaying.value" :size="15" class="sound-icon" /><VolumeX v-else :size="15" class="sound-icon" /><span>Sound {{ audio.isPlaying.value ? 'on' : 'off' }}</span></button>
            <details class="cyber-audio-settings">
              <summary aria-label="Audio settings">Mix</summary>
              <div class="cyber-audio-panel">
                <p class="cyber-audio-title">The sound of the system</p>
                <p>Original ambient score · 72 BPM<br />Scroll to hear the signal move.</p>
                <label for="cyber-music-volume">Music <output>{{ audio.musicVolume.value }}%</output></label>
                <input id="cyber-music-volume" type="range" min="0" max="100" step="1" v-model.number="audio.musicVolume.value" />
                <label for="cyber-effects-volume">Effects <output>{{ audio.effectsVolume.value }}%</output></label>
                <input id="cyber-effects-volume" type="range" min="0" max="100" step="1" v-model.number="audio.effectsVolume.value" />
                <p>Set either slider to zero to mute that layer. Audio pauses when you leave this tab.</p>
                <p v-if="audio.error.value" role="status">{{ audio.error.value }}</p>
              </div>
            </details>
            <p v-if="audio.error.value" class="cyber-audio-error" role="status">{{ audio.error.value }}</p>
          </div>
          <nav class="cyber-chapter-track" :style="{ '--track': trackProgress }" aria-label="Journey chapters"><button v-for="(stop, i) in CYBER_STOPS" :key="stop.id" @click="go(i)" :class="{ active: active === i, visited: journey.position >= i }" :aria-current="active === i ? 'step' : undefined"><span class="chapter-track-dot" /><span class="chapter-track-name">{{ stop.label }}</span><span class="chapter-track-number">0{{ i }}</span></button></nav>
          <button v-magnetic="0.3" class="cyber-next" @click="go(active === 6 ? 0 : active + 1)" :aria-label="active === 6 ? 'Return to origin' : `Go to ${CYBER_STOPS[active + 1].label}`"><span>{{ active === 6 ? 'Restart' : 'Next' }}</span><span class="cyber-next-ring"><ArrowRight :size="16" /></span></button>
        </footer>
        <div class="cyber-total-progress" :style="{ transform: `scaleX(${journey.position / LAST_POSITION})` }" aria-hidden="true" />
      </div>
    </div>

    <dialog ref="detail" class="cyber-dialog anim-dialog" aria-labelledby="cyber-dialog-title" @click="closeBackdrop" @cancel="animatedCancel" @close="releaseDetails" data-lenis-prevent>
      <button class="cyber-dialog-close" @click="closeDetails" aria-label="Close details"><X :size="23" /></button>
      <template v-if="detailKind !== 'contact'">
        <p class="cyber-dialog-kicker">{{ detailKind.toUpperCase() }} / DETAILS</p>
        <div class="cyber-detail-progress" aria-hidden="true"><span :style="{ transform: `scaleX(${(detailPage + 1) / detailPages.length})` }" /></div>
        <div class="cyber-detail-viewport" aria-live="polite" aria-atomic="true">
          <Transition :name="pageDirection > 0 ? 'cy-page-next' : 'cy-page-prev'" mode="out-in">
            <div class="cyber-detail-page" :key="`${detailKind}-${detailPage}`">
              <h2 id="cyber-dialog-title">{{ detailPages[detailPage].title }}</h2>
              <p>{{ detailPages[detailPage].text }}</p>
            </div>
          </Transition>
        </div>
        <nav class="cyber-detail-pagination" aria-label="Detail pages">
          <button @click="turnPage(-1)" :disabled="detailPage === 0" aria-label="Previous detail page"><ArrowLeft :size="18" /> Previous</button>
          <span>{{ String(detailPage + 1).padStart(2, '0') }} / {{ String(detailPages.length).padStart(2, '0') }}</span>
          <button @click="turnPage(1)" :disabled="detailPage === detailPages.length - 1" aria-label="Next detail page">Next <ArrowRight :size="18" /></button>
        </nav>
      </template>
      <template v-else>
        <p class="cyber-dialog-kicker">06 / CONNECTION</p><h2 id="cyber-dialog-title">Let’s talk.</h2>
        <p><a :href="`mailto:${personalInfo.email}`">{{ personalInfo.email }}</a></p>
        <button class="cyber-secondary" @click="copyAddress">{{ copied === 'Email copied.' ? 'Copied ✓' : 'Copy email address' }}</button><p role="status">{{ copied }}</p>
        <form @submit.prevent="sendEmail"><label>Subject<input v-model="emailSubject" required placeholder="A project, an opportunity, an idea…" /></label><label>Your message<textarea v-model="emailMessage" @input="audio.playKeyBlip" rows="4" required placeholder="Tell me what you have in mind." /></label><p class="cyber-mail-hint">Opens your email app with this note ready to send.</p><button class="cyber-action" type="submit">Continue to email <ArrowUpRight :size="16" /></button></form>
      </template>
    </dialog>
  </div>
</template>
