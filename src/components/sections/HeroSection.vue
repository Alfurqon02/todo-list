<script setup lang="ts">
import { personalInfo } from '@/data/portfolioData'
import { useExperienceStore } from '@/stores/experienceStore'
import { Mail, ExternalLink, ChevronDown, Download } from 'lucide-vue-next'

const store = useExperienceStore()

function scrollToAbout() {
  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background gradient -->
    <div class="absolute inset-0 -z-10" style="background: var(--gradient-hero)" />

    <!-- Ambient glow orbs -->
    <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        class="absolute w-[600px] h-[600px] rounded-full animate-pulse-glow opacity-20"
        style="background: radial-gradient(circle, var(--accent-cyan), transparent 70%); top: 10%; left: -10%;"
      />
      <div
        class="absolute w-[400px] h-[400px] rounded-full animate-pulse-glow opacity-15"
        style="background: radial-gradient(circle, var(--accent-ice), transparent 70%); bottom: 10%; right: -5%; animation-delay: 1.5s;"
      />
    </div>

    <!-- Film grain overlay -->
    <div class="noise-overlay" />

    <div id="hero-content" class="relative z-10 text-center px-4 max-w-5xl mx-auto pt-12">

      <!-- Name Header -->
      <h1
        id="hero-title"
        class="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-[0.95] tracking-tight flex flex-wrap justify-center gap-x-4 sm:gap-x-6"
        style="perspective: 600px;"
      >
        <span class="hero-word hero-greeting" style="color: var(--text-primary);">Hi, I'm</span>
        <span class="hero-word hero-name text-gradient">{{ personalInfo.name.split(' ')[2] }}</span>
      </h1>

      <!-- Title — word reveal -->
      <p
        id="hero-subtitle"
        class="text-lg sm:text-xl md:text-2xl font-medium mb-6"
        style="color: var(--text-secondary); opacity: 0;"
      >
        {{ personalInfo.title }}
      </p>

      <!-- Tagline -->
      <p
        id="hero-tagline"
        class="text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        style="color: var(--text-secondary); opacity: 0;"
      >
        {{ personalInfo.tagline }}
      </p>

      <!-- CTA Buttons — magnetic -->
      <div id="hero-ctas" class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          id="btn-contact"
          :href="`mailto:${personalInfo.email}`"
          data-cursor-text="CONTACT"
          class="magnetic btn-primary flex items-center gap-2"
        >
          <span class="magnetic-inner flex items-center gap-2">
            <Mail :size="18" />
            Get in Touch
          </span>
        </a>
        <a
          id="btn-download-cv"
          href="/Mohammad_Al_Furqon_CV.pdf"
          download="Mohammad_Al_Furqon_CV.pdf"
          data-cursor-text="GET PDF"
          class="magnetic btn-frost flex items-center gap-2"
        >
          <span class="magnetic-inner flex items-center gap-2">
            <Download :size="18" />
            Download CV
          </span>
        </a>
        <a
          id="btn-linkedin"
          :href="`https://${personalInfo.linkedin}`"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-text="LINKEDIN"
          class="magnetic btn-frost flex items-center gap-2"
        >
          <span class="magnetic-inner flex items-center gap-2">
            <ExternalLink :size="18" />
            LinkedIn
          </span>
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <button
      class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer magnetic"
      style="color: var(--text-secondary)"
      data-cursor-text="SCROLL"
      @click="scrollToAbout"
      aria-label="Scroll to about section"
    >
      <span class="magnetic-inner">
        <ChevronDown :size="28" />
      </span>
    </button>
  </section>
</template>
