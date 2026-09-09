<script setup lang="ts">

import { computed, defineAsyncComponent, nextTick, onMounted, onBeforeUnmount, ref, watch } from 'vue'

import { ArrowUpRight, ArrowDown, ArrowRight, ArrowLeft, X, Menu, Volume2, VolumeX } from 'lucide-vue-next'

import { useExperienceStore } from '@/stores/experienceStore'

import { useSmoothScroll, getLenis } from '@/composables/useSmoothScroll'

import { useCyberJourney } from '@/composables/useCyberJourney'

import { useCyberAudio } from '@/composables/useCyberAudio'

import { CYBER_STOPS, LAST_POSITION, CHAPTER_SCROLL_VH, flightAt, storyCopyAt, detailScrollableAt } from '@/utils/cyberStory'

import { personalInfo, experiences, education, skills, languages, organizations, achievements } from '@/data/portfolioData'

import { selectedResearch } from '@/data/portfolioEditorial'



const Canvas = defineAsyncComponent(() => import('@/components/3d/CyberWorldCanvas.vue'))

const store = useExperienceStore()

const root = ref<HTMLElement | null>(null)

const { scrollTo } = useSmoothScroll()

const journey = useCyberJourney(root)

const audio = useCyberAudio(true)

const ready = ref(false)

const failed = ref(false)

const menu = ref(false)

const detail = ref<HTMLDialogElement | null>(null)

const detailKind = ref<'engineering' | 'research' | 'about' | 'contact'>('engineering')

const detailPage = ref(0)
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
onBeforeUnmount(releaseDetails)
const emailSubject = ref('')

const emailMessage = ref('')

const copied = ref('')

const phase = computed(() => flightAt(journey.position))

const copy = computed(() => storyCopyAt(journey.position))

const active = computed(() => copy.value.index)
const detailsReady = computed(() => detailScrollableAt(journey.position))
const copyPanel = ref<HTMLElement | null>(null)
watch(active, () => nextTick(() => { if (copyPanel.value) copyPanel.value.scrollTop = 0 }))

const role = computed(() => experiences[store.activeNodeIndex % experiences.length])

const skill = computed(() => skills[store.activeSkillIndex % skills.length])

const travelLabel = computed(() => `${CYBER_STOPS[phase.value.index].label} → ${CYBER_STOPS[Math.min(phase.value.index + 1, 6)].label}`)



function scrollDetails(event: Event) {
  if (!detailsReady.value) return
  const panel = event.currentTarget as HTMLElement
  if (panel.scrollHeight <= panel.clientHeight + 1) return
  // Leave the wheel/touch gesture native to the panel. Cancel any queued
  // journey inertia at the currently visible scene, rather than letting it
  // carry the reader into another chapter while they read.
  event.stopPropagation()
  const position = journey.start + journey.position * journey.unit
  const lenis = getLenis()
  if (lenis) lenis.scrollTo(position, { immediate: true, force: true })
  else window.scrollTo({ top: position, behavior: 'instant' })
}

function go(index: number) {

  menu.value = false

  audio.playTick()

  const target = journey.start + Math.max(0, Math.min(6, index)) * journey.unit

  scrollTo(target)

  history.replaceState(null, '', `#${CYBER_STOPS[index].id}`)

}

function readingView() { store.setMode('clean'); nextTick(() => window.scrollTo({ top: 0, behavior: 'instant' })) }

async function openDetails(kind: typeof detailKind.value) {

  audio.playLockOn()

  detailKind.value = kind
  detailPage.value = 0

  await nextTick()

  detail.value?.showModal()
  getLenis()?.stop()
  document.documentElement.classList.add('cyber-detail-open')

}

function changeRole(delta: number) {

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

  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) modal.close()

}

onMounted(() => {

  const index = CYBER_STOPS.findIndex((stop) => `#${stop.id}` === location.hash)

  if (index > 0 && window.scrollY < 20) nextTick(() => go(index))

})

</script>



<template>

  <div class="cyber-journey">

    <a class="cyber-skip" href="#" @click.prevent="readingView">Read the portfolio without the 3D journey</a>

    <div ref="root" class="cyber-scroll" :style="{ height: `calc(100svh + ${LAST_POSITION * CHAPTER_SCROLL_VH}svh)` }">

      <div class="cyber-stage" :data-chapter="active" :data-flight="phase.travel.toFixed(3)">

        <div class="cyber-world" :class="{ ready }"><Canvas v-if="!failed" @ready="ready = true" @unavailable="failed = true" /></div>

        <div class="cyber-vignette" :style="{ opacity: 0.16 + copy.opacity * 0.84 }" aria-hidden="true" />

        <header class="cyber-header">

          <a href="#hero" class="cyber-brand" @click.prevent="go(0)"><span class="brand-emblem" aria-hidden="true">F<span>↗</span></span><span>AL FURQON<small>SOFTWARE / INTELLIGENCE</small></span></a>

          <nav class="cyber-top-nav" aria-label="Main navigation"><a href="#work" @click.prevent="go(1)">Engineering</a><a href="#research" @click.prevent="go(2)">Research</a><a href="#contact" @click.prevent="go(6)">Contact <ArrowUpRight :size="13" /></a></nav>

          <div class="cyber-header-tools"><button @click="readingView" class="cyber-index">Reading view <ArrowUpRight :size="13" /></button><button class="cyber-icon cyber-menu-button" @click="menu = !menu" :aria-expanded="menu" aria-controls="cyber-menu" aria-label="Chapter navigation"><X v-if="menu" :size="20" /><Menu v-else :size="20" /></button></div>

        </header>



        <nav v-if="menu" id="cyber-menu" class="cyber-mobile-menu" aria-label="All chapters"><button v-for="(stop, i) in CYBER_STOPS" :key="stop.id" @click="go(i)"><span>0{{ i }}</span>{{ stop.label }}<ArrowUpRight :size="17" /></button><button @click="readingView">Full experience index <ArrowUpRight :size="17" /></button></nav>



        <div v-if="failed" class="cyber-fallback" role="status">The 3D view is unavailable on this device. <button @click="readingView">Open the complete reading view <ArrowRight :size="15" /></button></div>



        <div ref="copyPanel" class="cyber-story-copy" :data-journey-details="detailsReady ? '' : undefined" :data-details-ready="detailsReady" :tabindex="detailsReady ? 0 : -1" role="region" :aria-label="`${CYBER_STOPS[active].label} details`" @wheel.passive="scrollDetails" @touchstart.passive="scrollDetails" :style="{ opacity: copy.opacity, '--copy-shift': `${(1 - copy.opacity) * (copy.entering ? 22 : -18)}px` }" :inert="copy.opacity < 0.05" :aria-hidden="copy.opacity < 0.05">

          <div class="cyber-chapter-eyebrow"><span class="cyber-chapter-number">0{{ active }}</span><span>{{ CYBER_STOPS[active].label }}</span><span class="eyebrow-rule" /></div>



          <article v-if="active === 0" class="cyber-copy-content">

            <p class="cyber-role-line">Software engineer & machine learning researcher</p>

            <h1>Follow the signal<span class="cyber-punctuation">.</span></h1>

            <p class="cyber-lead">I’m Al Furqon. Enter the systems I build—and the thinking that connects them.</p>

            <p class="cyber-support">Web engineering. Machine intelligence.<br />Experience across Indonesia, Japan, and Taiwan.</p>

            <button class="cyber-action" @click="go(1)">Enter the system <ArrowDown :size="18" /></button>

            <a href="/Mohammad_Al_Furqon_CV.pdf" download class="cyber-secondary">Download résumé <ArrowUpRight :size="14" /></a>

          </article>



          <article v-else-if="active === 1" class="cyber-copy-content">

            <h2>Make the<br />system work<span class="cyber-punctuation">.</span></h2>

            <p class="cyber-lead">Inside every useful product is a system someone has to get right.</p>

            <p class="cyber-support">At Meiwa Industry in Japan, I rebuilt inventory management, developed a leave-request application, and helped modernize the company’s internal portal.</p>

            <div class="cyber-project-stamp"><span>MEIWA INDUSTRY</span><small>JAPAN / 2024–2025</small></div>

            <button class="cyber-action" @click="openDetails('engineering')">The engineering work <ArrowUpRight :size="18" /></button>

            <p class="cyber-bridge">A working system creates data.<br /><span>Follow it into the next layer.</span></p>

          </article>



          <article v-else-if="active === 2" class="cyber-copy-content">

            <h2>From data<br />to meaning<span class="cyber-punctuation">.</span></h2>

            <p class="cyber-lead">Two views. One deeper understanding.</p>

            <p class="cyber-support">My research explores chest X-ray captioning from frontal and lateral images. DenseNet extracts visual features; an LSTM translates them into a language sequence.</p>

            <div class="cyber-method"><span>DUAL INPUT</span><ArrowRight :size="12" /><span>DENSENET</span><ArrowRight :size="12" /><span>LSTM</span></div>

            <button class="cyber-action" @click="openDetails('research')">Explore the research <ArrowUpRight :size="18" /></button>

            <p class="cyber-bridge">Different inputs reveal more.<br /><span>The same is true of experience.</span></p>

          </article>



          <article v-else-if="active === 3" class="cyber-copy-content">

            <h2>Different places.<br />One perspective<span class="cyber-punctuation">.</span></h2>

            <p class="cyber-lead">Learning to see the whole system means stepping outside your own.</p>

            <div class="cyber-location-list"><div><span>ID</span><p>Indonesia<small>Informatics, web systems & research</small></p></div><div><span>JP</span><p>Japan<small>Manufacturing & internal applications</small></p></div><div><span>TW</span><p>Taiwan<small>Cybersecurity & vulnerability assessment</small></p></div></div>

            <button class="cyber-action" @click="openDetails('about')">The person behind the work <ArrowUpRight :size="18" /></button>

            <p class="cyber-bridge">Each place leaves something behind.<br /><span>The archive is built from those experiences.</span></p>

          </article>



          <article v-else-if="active === 4" class="cyber-copy-content">

            <h2>Experience,<br />accumulated<span class="cyber-punctuation">.</span></h2>

            <p class="cyber-support">Every role adds another layer to how I build.</p>

            <div class="cyber-role-card"><div class="cyber-card-overline"><span>ARCHIVE / {{ String(store.activeNodeIndex + 1).padStart(2, '0') }}</span><span>{{ role.period }}</span></div><h3>{{ role.company }}</h3><p>{{ role.role }}</p><ul><li v-for="highlight in role.highlights" :key="highlight">{{ highlight }}</li></ul></div>

            <div class="cyber-card-navigation"><button @click="changeRole(-1)" aria-label="Previous role"><ArrowLeft :size="18" /></button><span>{{ String(store.activeNodeIndex + 1).padStart(2, '0') }} <span>/ {{ experiences.length }}</span></span><button @click="changeRole(1)" aria-label="Next role"><ArrowRight :size="18" /></button><button class="cyber-all-roles" @click="readingView">Full career index <ArrowUpRight :size="13" /></button></div>

            <p class="cyber-bridge">Experience informs the decisions.<br /><span>The next room holds the tools.</span></p>

          </article>



          <article v-else-if="active === 5" class="cyber-copy-content">

            <h2>The right tool.<br />For the problem<span class="cyber-punctuation">.</span></h2>

            <p class="cyber-support">From the interface to the infrastructure—and from visual features to language.</p>

            <div class="cyber-skill-tabs" aria-label="Skill categories"><button v-for="(item, i) in skills" :key="item.name" @click="setSkill(i)" :aria-pressed="store.activeSkillIndex === i">{{ item.name }}</button></div>

            <div class="cyber-skill-content" aria-live="polite"><span v-for="item in skill.items" :key="item">{{ item }}</span></div>

            <p class="cyber-bridge">Systems, research, experience, tools.<br /><span>Now the connection reaches you.</span></p>

          </article>



          <article v-else class="cyber-copy-content">

            <h2>Your idea. <br />Our next system<span class="cyber-punctuation">.</span></h2>

            <p class="cyber-lead">The next connection starts with a conversation.</p>

            <p class="cyber-support">Open to software engineering, machine learning, and problems worth figuring out.</p>

            <a class="cyber-contact-email" :href="`mailto:${personalInfo.email}`">{{ personalInfo.email }} <ArrowUpRight :size="17" /></a>

            <div class="cyber-contact-actions"><button class="cyber-action" @click="openDetails('contact')">Start a conversation <ArrowUpRight :size="17" /></button><a :href="`https://${personalInfo.linkedin}`" target="_blank" rel="noopener noreferrer" class="cyber-secondary">LinkedIn <ArrowUpRight :size="14" /></a></div>

            <p class="cyber-endnote">MOHAMMAD AL FURQON<br />SOFTWARE ENGINEER / ML RESEARCHER</p>

          </article>

        </div>



        <div class="cyber-travel-caption" :style="{ opacity: 1 - copy.opacity }" aria-hidden="true"><span class="travel-dash" />{{ travelLabel }}<span class="travel-dash" /></div>

        <aside class="cyber-scene-note" :style="{ opacity: copy.opacity }" aria-hidden="true"><span class="scene-note-cross">+</span><span>{{ ['PROCESSOR / ORIGIN', 'ARCHITECTURE / SYSTEMS', 'NEURAL PIPELINE / LEARNING', 'CONNECTED HUBS / PERSPECTIVE', 'CAREER ARCHIVE / EXPERIENCE', 'TOOL BUS / CAPABILITIES', 'TERMINAL / CONNECTION'][active] }}<small>{{ active === 0 ? 'Scroll to open the housing' : active === 6 ? 'Signal received. Your move.' : CYBER_STOPS[active].next }}</small></span></aside>



        <footer class="cyber-navigation">

          <div class="cyber-sound">

            <button @click="audio.toggle" :aria-label="audio.isPlaying.value ? 'Mute all audio' : 'Enable music and sound effects'" :aria-pressed="audio.isPlaying.value"><Volume2 v-if="audio.isPlaying.value" :size="15" /><VolumeX v-else :size="15" /><span>Sound {{ audio.isPlaying.value ? 'on' : 'off' }}</span></button>

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

          <nav class="cyber-chapter-track" aria-label="Journey chapters"><button v-for="(stop, i) in CYBER_STOPS" :key="stop.id" @click="go(i)" :class="{ active: active === i, visited: journey.position >= i }" :aria-current="active === i ? 'step' : undefined"><span class="chapter-track-dot" /><span class="chapter-track-name">{{ stop.label }}</span><span class="chapter-track-number">0{{ i }}</span></button></nav>

          <button class="cyber-next" @click="go(active === 6 ? 0 : active + 1)" :aria-label="active === 6 ? 'Return to origin' : `Go to ${CYBER_STOPS[active + 1].label}`"><span>{{ active === 6 ? 'Restart' : 'Next' }}</span><ArrowRight :size="18" /></button>

        </footer>

        <div class="cyber-total-progress" :style="{ transform: `scaleX(${journey.position / LAST_POSITION})` }" aria-hidden="true" />

      </div>

    </div>



    <dialog ref="detail" class="cyber-dialog" aria-labelledby="cyber-dialog-title" @click="closeBackdrop" @close="releaseDetails" data-lenis-prevent><button class="cyber-dialog-close" @click="detail?.close()" aria-label="Close details"><X :size="23" /></button>

      <template v-if="detailKind !== 'contact'">
        <p class="cyber-dialog-kicker">{{ detailKind.toUpperCase() }} / DETAILS</p>
        <div class="cyber-detail-page" aria-live="polite" aria-atomic="true">
          <h2 id="cyber-dialog-title">{{ detailPages[detailPage].title }}</h2>
          <p>{{ detailPages[detailPage].text }}</p>
        </div>
        <nav class="cyber-detail-pagination" aria-label="Detail pages">
          <button @click="detailPage--; audio.playTick()" :disabled="detailPage === 0" aria-label="Previous detail page"><ArrowLeft :size="18" /> Previous</button>
          <span>{{ detailPage + 1 }} / {{ detailPages.length }}</span>
          <button @click="detailPage++; audio.playTick()" :disabled="detailPage === detailPages.length - 1" aria-label="Next detail page">Next <ArrowRight :size="18" /></button>
        </nav>
      </template>
      <template v-else><p class="cyber-dialog-kicker">06 / CONNECTION</p><h2 id="cyber-dialog-title">Let’s talk.</h2><p><a :href="`mailto:${personalInfo.email}`">{{ personalInfo.email }}</a></p><button class="cyber-secondary" @click="copyAddress">Copy email address</button><p role="status">{{ copied }}</p><form @submit.prevent="sendEmail"><label>Subject<input v-model="emailSubject" required placeholder="A project, an opportunity, an idea…" /></label><label>Your message<textarea v-model="emailMessage" @input="audio.playKeyBlip" rows="4" required placeholder="Tell me what you have in mind." /></label><p class="cyber-mail-hint">Opens your email app with this note ready to send.</p><button class="cyber-action" type="submit">Continue to email <ArrowUpRight :size="16" /></button></form></template>

    </dialog>

  </div>

</template>

