<script setup lang="ts">
import { ref } from 'vue'
import { useExperienceStore } from '@/stores/experienceStore'
import type { ExperienceMode } from '@/stores/experienceStore'
import { Snowflake, Zap } from 'lucide-vue-next'

const store = useExperienceStore()
const remember = ref(true)

function select(mode: ExperienceMode) {
  store.setMode(mode, remember.value)
}
</script>

<template>
  <Transition name="modal">
    <div
      v-if="store.showModeModal"
      id="mode-modal-overlay"
      class="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style="background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(8px)"
    >
      <div
        id="mode-modal"
        class="glass-card w-full max-w-xl p-8 md:p-10 text-center animate-fade-in"
      >
        <!-- Title -->
        <h2 class="text-2xl md:text-3xl font-bold mb-2 text-gradient">
          WELCOME TO MY REALM
        </h2>
        <p class="text-sm md:text-base mb-8" style="color: var(--text-secondary)">
          Choose Your Visual Experience
        </p>

        <!-- Mode Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <!-- Immersive -->
          <button
            id="btn-mode-immersive"
            class="group glass-card p-6 text-left cursor-pointer hover:border-cyan-400 transition-all duration-300"
            @click="select('immersive')"
          >
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center"
                   style="background: var(--gradient-accent)">
                <Snowflake :size="20" color="#fff" />
              </div>
              <span class="font-bold text-lg" style="color: var(--text-primary)">
                🧊 Immersive 3D
              </span>
            </div>
            <ul class="space-y-1.5 text-sm" style="color: var(--text-secondary)">
              <li>• WebGL, Interactive Ice Shaders</li>
              <li>• Physics & Cursor Dynamics</li>
              <li>• Best on Desktop / Dedicated GPU</li>
            </ul>
          </button>

          <!-- Clean -->
          <button
            id="btn-mode-clean"
            class="group glass-card p-6 text-left cursor-pointer hover:border-cyan-400 transition-all duration-300"
            @click="select('clean')"
          >
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center"
                   style="background: var(--gradient-accent)">
                <Zap :size="20" color="#fff" />
              </div>
              <span class="font-bold text-lg" style="color: var(--text-primary)">
                ⚡ Clean & Fast
              </span>
            </div>
            <ul class="space-y-1.5 text-sm" style="color: var(--text-secondary)">
              <li>• High Accessibility</li>
              <li>• Instant Load Time</li>
              <li>• Ideal for Quick Scan</li>
            </ul>
          </button>
        </div>

        <!-- Remember checkbox -->
        <label
          id="remember-choice"
          class="flex items-center justify-center gap-2 text-sm cursor-pointer"
          style="color: var(--text-secondary)"
        >
          <input
            type="checkbox"
            v-model="remember"
            class="w-4 h-4 rounded accent-cyan-400"
          />
          Remember choice on this device
        </label>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active #mode-modal,
.modal-leave-active #mode-modal {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.modal-enter-from #mode-modal {
  transform: scale(0.9);
  opacity: 0;
}
.modal-leave-to #mode-modal {
  transform: scale(0.95);
  opacity: 0;
}
</style>
