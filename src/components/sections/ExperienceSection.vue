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
  if (window.innerWidth < 768) return // Mobile fallback

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
  <section id="experience" class="relative">
    <!-- Desktop Pinned Horizontal Scroll Section -->
    <div id="experience-pin" class="min-h-screen flex flex-col justify-center overflow-hidden py-12">
      <!-- Section Header -->
      <div class="px-6 md:px-16 mb-8 max-w-5xl">
        <h2 class="section-title reveal-title text-4xl sm:text-5xl font-black">
          <span class="text-gradient">Work Experience</span>
        </h2>
        <p class="section-subtitle reveal-subtitle text-base sm:text-lg">
          {{ experiences.length }} Roles — Scroll to explore career trajectory
        </p>
      </div>

      <!-- Horizontal Track -->
      <div id="experience-track" class="flex gap-6 px-6 md:px-16 w-max items-stretch">
        <div
          v-for="(exp, i) in experiences"
          :key="exp.company + exp.role"
          data-cursor-text="VIEW ROLE"
          class="glass-card w-[340px] sm:w-[420px] md:w-[480px] p-6 sm:p-8 flex-shrink-0 flex flex-col justify-between relative group hover:border-[var(--accent-cyan)] transition-all duration-300"
        >
          <!-- Background Index Watermark -->
          <span
            class="absolute top-4 right-6 text-6xl sm:text-7xl font-black font-mono select-none pointer-events-none transition-opacity duration-300 opacity-10 group-hover:opacity-25"
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
              <h3 class="text-xl sm:text-2xl font-bold leading-tight mb-1" style="color: var(--text-primary)">
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
                class="flex gap-2 text-xs sm:text-sm leading-relaxed"
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
  </section>
</template>
