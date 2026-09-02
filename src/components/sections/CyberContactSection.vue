<script setup lang="ts">
import { ref } from 'vue'
import { personalInfo } from '@/data/portfolioData'
import { useCyberAudio } from '@/composables/useCyberAudio'
import {
  Terminal,
  Mail,
  Linkedin,
  Globe,
  Copy,
  Check,
  Send,
  ExternalLink,
  Radio,
} from 'lucide-vue-next'

const audio = useCyberAudio()
const copied = ref(false)
const subject = ref('')
const message = ref('')

function copyEmail() {
  audio.playKeyBlip()
  navigator.clipboard.writeText(personalInfo.email)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2500)
}

function handleTransmit() {
  audio.playLockOn()
  const s = encodeURIComponent(subject.value || 'Project Inquiry / Opportunity')
  const b = encodeURIComponent(message.value || 'Hello Mohammad Al Furqon, I came across your portfolio...')
  window.location.href = `mailto:${personalInfo.email}?subject=${s}&body=${b}`
}
</script>

<template>
  <section id="contact" class="relative py-24 px-4 sm:px-8 md:px-16 bg-abyss border-t border-cyan-500/20">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="flex items-center gap-2 font-mono text-xs text-neon-blue mb-1">
        <Radio :size="14" class="animate-pulse" />
        <span class="tracking-widest uppercase">06 // SECURE TRANSMISSION CONSOLE</span>
      </div>
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold font-rajdhani text-white uppercase mb-4">
        INITIATE DIRECT <span class="text-gradient">COMMUNICATION</span>
      </h2>
      <p class="text-slate-400 max-w-2xl text-sm sm:text-base mb-12 font-sans">
        Available for full-time Software Engineering roles, Machine Learning engineering, and technical advisory projects.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Direct Quick Dispatch Form (7 cols) -->
        <div class="lg:col-span-7 cyber-card p-6 sm:p-8 border-cyan-500/40 shadow-[0_0_30px_rgba(0,243,255,0.15)]">
          <div class="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-6 font-mono text-xs text-neon-blue">
            <span class="flex items-center gap-2">
              <Terminal :size="14" />
              <span>DISPATCH_TERMINAL // ENCRYPTED</span>
            </span>
            <span class="text-emerald-400">CHANNEL: OPEN</span>
          </div>

          <form @submit.prevent="handleTransmit" class="space-y-4 font-mono text-xs">
            <div>
              <label class="block text-slate-400 uppercase mb-1.5 tracking-wider">
                // TRANSMISSION_SUBJECT
              </label>
              <input
                v-model="subject"
                type="text"
                placeholder="e.g. Fullstack Software Engineer Position / Research Collaboration"
                class="w-full px-4 py-3 bg-slate-950/80 border border-cyan-500/30 rounded text-slate-200 focus:border-neon-blue focus:shadow-[0_0_12px_rgba(0,243,255,0.4)] outline-none transition-all"
              />
            </div>

            <div>
              <label class="block text-slate-400 uppercase mb-1.5 tracking-wider">
                // PACKET_PAYLOAD (MESSAGE)
              </label>
              <textarea
                v-model="message"
                rows="4"
                placeholder="Compose your transmission..."
                class="w-full px-4 py-3 bg-slate-950/80 border border-cyan-500/30 rounded text-slate-200 focus:border-neon-blue focus:shadow-[0_0_12px_rgba(0,243,255,0.4)] outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              class="w-full hud-btn hud-btn-primary py-3.5 text-sm cursor-pointer mt-2"
            >
              <Send :size="16" />
              <span>TRANSMIT PACKET TO OPERATOR</span>
            </button>
          </form>
        </div>

        <!-- Coordinates & Social Nodes (5 cols) -->
        <div class="lg:col-span-5 space-y-4">
          <!-- Email Node -->
          <div class="cyber-card p-6 border-slate-800 hover:border-cyan-500/60 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-mono text-slate-400 uppercase">DIRECT EMAIL</span>
              <Mail :size="16" class="text-neon-blue" />
            </div>
            <p class="text-base sm:text-lg font-mono text-white font-semibold break-all mb-3">
              {{ personalInfo.email }}
            </p>
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="hud-btn text-xs py-1 px-3 cursor-pointer"
                @click="copyEmail"
              >
                <Check v-if="copied" :size="12" class="text-emerald-400" />
                <Copy v-else :size="12" />
                <span>{{ copied ? 'COPIED TO CLIPBOARD' : 'COPY ADDRESS' }}</span>
              </button>

              <a
                :href="'mailto:' + personalInfo.email"
                class="hud-btn hud-btn-primary text-xs py-1 px-3"
              >
                <ExternalLink :size="12" />
                <span>OPEN CLIENT</span>
              </a>
            </div>
          </div>

          <!-- LinkedIn Node -->
          <div class="cyber-card p-6 border-slate-800 hover:border-cyan-500/60 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-mono text-slate-400 uppercase">PROFESSIONAL NETWORK</span>
              <Linkedin :size="16" class="text-neon-blue" />
            </div>
            <p class="text-base font-mono text-white font-semibold mb-3">
              {{ personalInfo.linkedin }}
            </p>
            <a
              :href="'https://' + personalInfo.linkedin"
              target="_blank"
              class="hud-btn text-xs py-1 px-3 inline-flex items-center gap-1.5"
            >
              <span>CONNECT ON LINKEDIN</span>
              <ExternalLink :size="12" />
            </a>
          </div>

          <!-- Official Domain -->
          <div class="cyber-card p-6 border-slate-800 hover:border-cyan-500/60 transition-all">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-mono text-slate-400 uppercase">PORTAL DOMAIN</span>
              <Globe :size="16" class="text-neon-blue" />
            </div>
            <p class="text-base font-mono text-neon-blue font-semibold mb-3">
              {{ personalInfo.website }}
            </p>
            <span class="text-xs font-mono text-slate-400">
              Personal Web Space &amp; Portfolio
            </span>
          </div>
        </div>
      </div>

      <!-- Footer Terminal Baseline -->
      <div class="mt-16 pt-8 border-t border-cyan-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
        <div>
          <span>&copy; 2026 MOHAMMAD AL FURQON. ALL SYSTEMS ACTIVE.</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-neon-blue">ARCHITECTURE: VUE 3 + THREE.JS + VITE</span>
          <span>// NO_BACKEND_STATIC</span>
        </div>
      </div>
    </div>
  </section>
</template>
