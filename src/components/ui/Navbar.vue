<script setup lang="ts">
import { ref } from 'vue'
import { useExperienceStore } from '@/stores/experienceStore'
import { useCyberAudio } from '@/composables/useCyberAudio'
import {
  Globe2,
  FileTerminal,
  Volume2,
  VolumeX,
  Mail,
  Layers,
  Cpu,
  BookOpen,
  User,
  Orbit,
  Square,
  Sun,
  Moon,
} from 'lucide-vue-next'

const store = useExperienceStore()
const audio = useCyberAudio()

function handleToggleMode() {
  audio.playLockOn()
  store.toggleMode()
}

function handleToggleTheme() {
  audio.playTick()
  store.toggleDark()
}

function handleToggleAnimations() {
  audio.playLockOn()
  store.toggleAnimations()
}

function handleToggleSound() {
  store.toggleSound()
  if (store.soundEnabled) {
    audio.playKeyBlip()
  }
}

function scrollTo(selector: string) {
  audio.playTick()
  const el = document.querySelector(selector)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const navItems = [
  { label: 'DOSSIER', href: '#about', icon: User },
  { label: 'EXPERIENCE', href: '#experience', icon: Layers },
  { label: 'ARSENAL', href: '#skills', icon: Cpu },
  { label: 'RESEARCH', href: '#research', icon: BookOpen },
  { label: 'TRANSMIT', href: '#contact', icon: Mail },
]
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 bg-abyss/85 backdrop-blur-md border-b border-cyan-500/20"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Brand / Monogram -->
      <div class="flex items-center gap-3">
        <a
          href="#"
          class="flex items-center gap-2 font-mono text-sm font-bold tracking-wider text-white hover:text-neon-blue transition-colors"
          @click.prevent="scrollTo('#hero')"
        >
          <span class="text-neon-blue">&lt;</span>
          <span>FURQON</span>
          <span class="text-neon-blue">/&gt;</span>
        </a>

        <div class="hidden lg:flex items-center gap-2 pl-3 border-l border-slate-800 text-[11px] font-mono text-slate-400">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>CORE_STABLE</span>
        </div>
      </div>

      <!-- Center Anchor Navigation Links (Mode A Immersive) -->
      <div v-if="store.mode === 'immersive'" class="hidden md:flex items-center gap-1 font-mono text-xs">
        <button
          v-for="item in navItems"
          :key="item.href"
          type="button"
          class="px-3 py-1 text-slate-400 hover:text-neon-blue hover:bg-cyan-950/40 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
          @click="scrollTo(item.href)"
        >
          <component :is="item.icon" :size="12" />
          <span>{{ item.label }}</span>
        </button>
      </div>

      <!-- Actions & Mode Switcher (Rule 1.1) -->
      <div class="flex items-center gap-3">
        <!-- 3D Flight Toggle -->
        <button
          v-if="store.mode === 'immersive'"
          type="button"
          class="flex items-center gap-1.5 px-2.5 py-1.5 rounded font-mono text-[11px] tracking-wider border transition-colors cursor-pointer"
          :class="store.animationsEnabled
            ? 'text-neon-blue border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-900/40'
            : 'text-slate-500 border-slate-700 hover:text-slate-300 hover:border-slate-500'"
          :aria-pressed="store.animationsEnabled"
          :title="store.animationsEnabled ? 'Disable 3D flight and scroll motion' : 'Enable 3D flight and scroll motion'"
          @click="handleToggleAnimations"
        >
          <Orbit v-if="store.animationsEnabled" :size="14" class="animate-spin-slow" />
          <Square v-else :size="14" />
          <span class="hidden sm:inline">3D {{ store.animationsEnabled ? 'ON' : 'OFF' }}</span>
        </button>

        <!-- Light / Dark Theme -->
        <button
          type="button"
          class="p-2 text-slate-400 hover:text-neon-blue hover:bg-cyan-950/40 rounded transition-colors cursor-pointer"
          :title="store.isDark ? 'Switch to light theme' : 'Switch to dark theme'"
          :aria-pressed="!store.isDark"
          @click="handleToggleTheme"
        >
          <Sun v-if="store.isDark" :size="16" />
          <Moon v-else :size="16" />
        </button>

        <!-- Audio SFX Toggle -->
        <button
          type="button"
          class="p-2 text-slate-400 hover:text-neon-blue hover:bg-cyan-950/40 rounded transition-colors cursor-pointer"
          :title="store.soundEnabled ? 'Audio SFX Enabled' : 'Audio SFX Muted'"
          @click="handleToggleSound"
        >
          <Volume2 v-if="store.soundEnabled" :size="16" class="text-neon-blue" />
          <VolumeX v-else :size="16" />
        </button>

        <!-- Mode Switcher Button (Rule 1.1 persistent toggle) -->
        <button
          type="button"
          class="hud-btn text-xs py-1.5 px-3 cursor-pointer"
          @click="handleToggleMode"
        >
          <template v-if="store.mode === 'immersive'">
            <FileTerminal :size="14" />
            <span class="hidden sm:inline">CLEAN</span>
            <span class="sm:hidden">CLEAN</span>
          </template>
          <template v-else>
            <Globe2 :size="14" />
            <span class="hidden sm:inline">ANIMATION</span>
            <span class="sm:hidden">ANIMATION</span>
          </template>
        </button>

        <!-- Contact Direct -->
        <button
          type="button"
          class="hud-btn hud-btn-primary text-xs py-1.5 px-3 hidden sm:inline-flex cursor-pointer"
          @click="scrollTo('#contact')"
        >
          <Mail :size="14" />
          <span>TRANSMIT</span>
        </button>
      </div>
    </div>
  </nav>
</template>
