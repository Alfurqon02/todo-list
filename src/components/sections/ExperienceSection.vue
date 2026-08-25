<script setup lang="ts">
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import { experiences } from '@/data/portfolioData'
import { Briefcase, Calendar, ChevronRight } from 'lucide-vue-next'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let scrollTriggerInstance: ScrollTrigger | null = null

onMounted(async () => {
  await nextTick()
  setTimeout(initHorizontalScroll, 300)
})

function initHorizontalScroll() {
  if (window.innerWidth < 1024) return // Mobile fallback

  const section = document.querySelector('#experience-pin') as HTMLElement
  const track = document.querySelector('#experience-track') as HTMLElement

  if (!section || !track) return

  const totalScroll = track.scrollWidth - window.innerWidth + 120

  const anim = gsap.to(track, {
    x: -totalScroll,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      pin: true,
      scrub: 0.8,
      start: 'top top',
      end: () => `+=${totalScroll}`,
      invalidateOnRefresh: true,
    },
  })

  scrollTriggerInstance = anim.scrollTrigger || null
}

onBeforeUnmount(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
  }
})
</script>

<template>
  <section id="experience" class="relative py-16 lg:py-0">
    <!-- Desktop Pinned Horizontal Scroll Section (lg:block hidden) -->
    <div id="experience-pin" class="hidden lg:flex min-h-screen flex-col justify-center overflow-hidden py-12">
      <!-- Section Header -->
      <div class="px-16 mb-8 max-w-5xl">
        <h2 class="section-title reveal-title text-4xl sm:text-5xl font-black">
          <span class="text-gradient">Work Experience</span>
        </h2>
        <p class="section-subtitle reveal-subtitle text-base sm:text-lg">
          {{ experiences.length }} Roles — Scroll to explore career trajectory
        </p>
      </div>

      <!-- Horizontal Track -->
      <div id="experience-track" class="flex gap-6 px-16 w-max items-stretch">
        <div
          v-for="(exp, i) in experiences"
          :key="'desktop-' + exp.company + exp.role"
          data-cursor-text="VIEW ROLE"
          class="glass-card w-[480px] p-8 flex-shrink-0 flex flex-col justify-between relative group hover:border-[var(--accent-cyan)] transition-all duration-300"
        >
          <!-- Background Index Watermark -->
          <span
            class="absolute top-4 right-6 text-7xl font-black font-mono select-none pointer-events-none transition-opacity duration-300 opacity-10 group-hover:opacity-25"
            style="color: var(--accent-cyan);"
          >
            {{ (i + 1).toString().padStart(2, '0') }}
          </span>

          <div>
            <!-- Header -->
            <div class="mb-4">
              <span
                class="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full mb-3"
                style="background: var(--bg-secondary); color: var(--accent-cyan); border: 1px solid var(--card-border)"
              >
                <Calendar :size="12" />
                {{ exp.period }}
              </span>
              <h3 class="text-2xl font-bold leading-tight mb-1" style="color: var(--text-primary)">
                {{ exp.company }}
              </h3>
              <p class="flex items-center gap-1.5 text-sm font-semibold" style="color: var(--accent-cyan)">
                <Briefcase :size="14" />
                {{ exp.role }}
              </p>
            </div>

            <!-- Highlights -->
            <ul class="space-y-2.5 my-4">
              <li
                v-for="(item, idx) in exp.highlights"
                :key="idx"
                class="flex gap-2 text-sm leading-relaxed"
                style="color: var(--text-secondary)"
              >
                <span class="text-[var(--accent-cyan)] mt-0.5 flex-shrink-0">▹</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Bottom Action indicator -->
          <div class="pt-4 mt-auto flex items-center justify-between border-t border-[var(--card-border)]">
            <span class="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-widest">
              Role {{ i + 1 }} of {{ experiences.length }}
            </span>
            <ChevronRight :size="16" class="text-[var(--accent-cyan)] transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile & Tablet Responsive Vertical Timeline (lg:hidden block) -->
    <div class="lg:hidden px-4 sm:px-6 max-w-3xl mx-auto">
      <!-- Section Header Mobile -->
      <div class="text-center mb-10">
        <h2 class="section-title reveal-title text-3xl font-black mb-2">
          <span class="text-gradient">Work Experience</span>
        </h2>
        <p class="section-subtitle reveal-subtitle text-sm">
          {{ experiences.length }} Roles — Career timeline
        </p>
      </div>

      <!-- Mobile Timeline List -->
      <div class="space-y-6">
        <div
          v-for="(exp, i) in experiences"
          :key="'mobile-' + exp.company + exp.role"
          class="glass-card p-6 reveal-card relative overflow-hidden"
        >
          <div class="flex items-center justify-between gap-2 mb-3">
            <span
              class="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full"
              style="background: var(--bg-secondary); color: var(--accent-cyan); border: 1px solid var(--card-border)"
            >
              <Calendar :size="12" />
              {{ exp.period }}
            </span>
            <span class="text-xs font-mono font-bold text-[var(--accent-cyan)]">
              #{{ (i + 1).toString().padStart(2, '0') }}
            </span>
          </div>

          <h3 class="text-lg font-bold mb-1" style="color: var(--text-primary)">
            {{ exp.company }}
          </h3>
          <p class="flex items-center gap-1.5 text-sm font-semibold mb-4" style="color: var(--accent-cyan)">
            <Briefcase :size="14" />
            {{ exp.role }}
          </p>

          <ul class="space-y-2">
            <li
              v-for="(item, idx) in exp.highlights"
              :key="idx"
              class="flex gap-2 text-xs sm:text-sm leading-relaxed"
              style="color: var(--text-secondary)"
            >
              <span class="text-[var(--accent-cyan)] mt-0.5 flex-shrink-0">▹</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
