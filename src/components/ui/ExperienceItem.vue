<script setup lang="ts">
import type { Experience } from '@/data/portfolioData'
import { Briefcase, MapPin, Calendar } from 'lucide-vue-next'

defineProps<{
  experience: Experience
  index: number
}>()
</script>

<template>
  <div
    class="experience-item relative flex gap-6 opacity-0 animate-fade-in-up"
    :style="{ animationDelay: `${index * 100}ms` }"
  >
    <!-- Timeline line -->
    <div class="hidden md:flex flex-col items-center">
      <div
        class="w-4 h-4 rounded-full flex-shrink-0 mt-1.5"
        style="background: var(--gradient-accent); box-shadow: 0 0 12px rgba(0, 210, 255, 0.4)"
      />
      <div
        class="w-[2px] flex-1 mt-2"
        style="background: linear-gradient(to bottom, var(--accent-cyan), transparent)"
      />
    </div>

    <!-- Content Card -->
    <div class="glass-card p-6 flex-1 mb-6">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <div>
          <h3 class="text-lg font-bold" style="color: var(--text-primary)">
            {{ experience.company }}
          </h3>
          <p class="flex items-center gap-1.5 text-sm font-medium" style="color: var(--accent-cyan)">
            <Briefcase :size="14" />
            {{ experience.role }}
          </p>
        </div>
        <span
          class="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full whitespace-nowrap self-start"
          style="background: var(--card-bg); color: var(--text-secondary); border: 1px solid var(--card-border)"
        >
          <Calendar :size="12" />
          {{ experience.period }}
        </span>
      </div>

      <!-- Highlights -->
      <ul class="space-y-2">
        <li
          v-for="(item, i) in experience.highlights"
          :key="i"
          class="flex gap-2 text-sm leading-relaxed"
          style="color: var(--text-secondary)"
        >
          <span class="text-[var(--accent-cyan)] mt-1 flex-shrink-0">▹</span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
