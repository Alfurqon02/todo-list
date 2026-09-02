<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useExperienceStore } from '@/stores/experienceStore'
import type { ExperienceMode } from '@/stores/experienceStore'
import { useCyberAudio } from '@/composables/useCyberAudio'
import { Globe2, FileTerminal, Check, Terminal } from 'lucide-vue-next'

const store = useExperienceStore()
const audio = useCyberAudio()
const remember = ref(true)

function selectMode(mode: ExperienceMode) {
  audio.playLockOn()
  store.setMode(mode, remember.value)
}
</script>

<template>
  <Transition name="boot-modal">
    <div
      v-if="store.showModeModal"
      class="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-abyss/85 backdrop-blur-xl"
    >
      <div
        class="cyber-card w-full max-w-2xl p-6 sm:p-8 md:p-10 border-neon-blue shadow-[0_0_50px_rgba(0,243,255,0.35)] animate-fade-in"
      >
        <!-- Terminal Boot-up Header -->
        <div class="border-b border-cyan-500/25 pb-4 mb-6 font-mono text-xs text-neon-blue space-y-1">
          <div class="flex items-center justify-between">
            <span class="flex items-center gap-2">
              <Terminal :size="14" />
              <span>BOOT_SEQUENCE // v2.6.4</span>
            </span>
            <span class="text-slate-400">INIT: SUCCESS</span>
          </div>
          <div class="text-slate-400">&gt; SYSTEM BOOT_</div>
          <div class="text-slate-400">&gt; INITIALIZING 3D ENVIRONMENT &amp; NEURAL CYLINDER...</div>
          <div class="text-neon-blue font-bold tracking-wider pt-1">
            &gt; SELECT YOUR INTERFACE ARCHITECTURE:
          </div>
        </div>

        <!-- Mode Selection Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <!-- Option A: Cyber-Carousel 3D -->
          <button
            type="button"
            class="group p-6 text-left cyber-card cursor-pointer border-cyan-500/40 hover:border-neon-blue transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,243,255,0.4)]"
            @click="selectMode('immersive')"
            @mouseenter="audio.playTick"
          >
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded flex items-center justify-center bg-cyan-950/80 border border-cyan-500/50 text-neon-blue group-hover:scale-110 transition-transform">
                <Globe2 :size="22" />
              </div>
              <div>
                <span class="font-mono text-xs text-neon-blue font-semibold block">MODE A</span>
                <span class="font-rajdhani font-bold text-lg text-white">
                  🌐 CYBER-CAROUSEL (3D)
                </span>
              </div>
            </div>

            <ul class="space-y-1.5 text-xs font-mono text-slate-300">
              <li class="flex items-center gap-2">
                <span class="text-neon-blue">›</span> WebGL 3D Cylinder Pillar
              </li>
              <li class="flex items-center gap-2">
                <span class="text-neon-blue">›</span> Scroll-to-Rotate Dynamics
              </li>
              <li class="flex items-center gap-2">
                <span class="text-neon-blue">›</span> Best on Dedicated GPU / Desktop
              </li>
            </ul>
          </button>

          <!-- Option B: Terminal Log Clean -->
          <button
            type="button"
            class="group p-6 text-left cyber-card cursor-pointer border-slate-800 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,150,255,0.25)]"
            @click="selectMode('clean')"
            @mouseenter="audio.playTick"
          >
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded flex items-center justify-center bg-slate-900 border border-slate-700 text-slate-300 group-hover:scale-110 transition-transform">
                <FileTerminal :size="22" />
              </div>
              <div>
                <span class="font-mono text-xs text-slate-400 font-semibold block">MODE B</span>
                <span class="font-rajdhani font-bold text-lg text-white">
                  📄 TERMINAL LOG (CLEAN)
                </span>
              </div>
            </div>

            <ul class="space-y-1.5 text-xs font-mono text-slate-300">
              <li class="flex items-center gap-2">
                <span class="text-slate-400">›</span> Minimal &amp; High Accessibility
              </li>
              <li class="flex items-center gap-2">
                <span class="text-slate-400">›</span> Zero WebGL, Instant Load Time
              </li>
              <li class="flex items-center gap-2">
                <span class="text-slate-400">›</span> Ideal for Quick CV Scans
              </li>
            </ul>
          </button>
        </div>

        <!-- Checkbox: Save configuration -->
        <label
          class="flex items-center justify-center gap-2.5 text-xs font-mono text-slate-400 cursor-pointer hover:text-slate-200 transition-colors"
        >
          <input
            type="checkbox"
            v-model="remember"
            class="w-4 h-4 rounded bg-abyss border-cyan-500/50 accent-cyan-400 focus:ring-0 cursor-pointer"
          />
          <span>[x] Save configuration to local_storage</span>
        </label>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.boot-modal-enter-active,
.boot-modal-leave-active {
  transition: opacity 0.3s ease;
}
.boot-modal-enter-from,
.boot-modal-leave-to {
  opacity: 0;
}
</style>
