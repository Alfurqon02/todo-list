<script setup lang="ts">
import { useExperienceStore } from '@/stores/experienceStore'
import { AlertTriangle, X, Zap } from 'lucide-vue-next'

const store = useExperienceStore()
</script>

<template>
  <Transition name="toast">
    <div
      v-if="store.showFpsWarning"
      id="fps-warning-toast"
      class="fixed bottom-6 right-6 z-[200] glass-card p-4 max-w-sm flex items-start gap-3 animate-fade-in"
      style="border-color: rgba(255, 180, 0, 0.4)"
    >
      <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background: rgba(255, 180, 0, 0.2)">
        <AlertTriangle :size="20" color="#ffb400" />
      </div>
      <div class="flex-1">
        <p class="text-sm font-semibold mb-1" style="color: var(--text-primary)">
          Low Performance Detected
        </p>
        <p class="text-xs mb-3" style="color: var(--text-secondary)">
          FPS is consistently below 30. Switch to Clean View for a smoother experience.
        </p>
        <div class="flex gap-2">
          <button
            class="btn-frost !px-3 !py-1.5 text-xs flex items-center gap-1"
            @click="store.setMode('clean')"
          >
            <Zap :size="12" />
            Switch to Clean View
          </button>
          <button
            class="text-xs px-3 py-1.5 rounded-lg transition-colors hover:bg-[var(--bg-secondary)]"
            style="color: var(--text-secondary)"
            @click="store.dismissFpsWarning()"
          >
            Dismiss
          </button>
        </div>
      </div>
      <button
        class="p-1 rounded hover:bg-[var(--bg-secondary)] transition-colors"
        @click="store.dismissFpsWarning()"
      >
        <X :size="14" style="color: var(--text-secondary)" />
      </button>
    </div>
  </Transition>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.4s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(20px) translateX(20px);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
