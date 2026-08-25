<script setup lang="ts">
import { useExperienceStore } from '@/stores/experienceStore'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import { useMagneticButtons } from '@/composables/useMagneticButtons'

// UI Components
import LoadingScreen from '@/components/ui/LoadingScreen.vue'
import Navbar from '@/components/ui/Navbar.vue'
import IceCursor from '@/components/ui/IceCursor.vue'

// 3D Components
import IceCanvas from '@/components/3d/IceCanvas.vue'
import SnowParticles from '@/components/3d/SnowParticles.vue'

// Sections
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

const store = useExperienceStore()

// Foundation
useSmoothScroll()
useScrollAnimations()
useMagneticButtons()
</script>

<template>
  <div class="app-root min-h-screen" style="background: var(--bg-primary); color: var(--text-primary)">
    <!-- Loading Screen -->
    <LoadingScreen />

    <!-- Custom Ice Cursor -->
    <IceCursor />

    <!-- Film grain overlay for premium texture -->
    <div class="noise-overlay" />

    <!-- 3D Background (Immersive mode only) -->
    <IceCanvas />
    <SnowParticles />

    <!-- Navigation -->
    <Navbar />

    <!-- Main Content -->
    <main class="relative z-10">
      <HeroSection />

      <!-- Reveal divider -->
      <div class="max-w-xl mx-auto reveal-divider">
        <div
          class="h-px w-full"
          style="background: linear-gradient(to right, transparent, var(--accent-cyan), transparent); opacity: 0.3"
        />
      </div>

      <AboutSection />

      <div class="max-w-xl mx-auto reveal-divider">
        <div
          class="h-px w-full"
          style="background: linear-gradient(to right, transparent, var(--accent-cyan), transparent); opacity: 0.3"
        />
      </div>

      <ExperienceSection />

      <div class="max-w-xl mx-auto reveal-divider">
        <div
          class="h-px w-full"
          style="background: linear-gradient(to right, transparent, var(--accent-cyan), transparent); opacity: 0.3"
        />
      </div>

      <SkillsSection />

      <div class="max-w-xl mx-auto reveal-divider">
        <div
          class="h-px w-full"
          style="background: linear-gradient(to right, transparent, var(--accent-cyan), transparent); opacity: 0.3"
        />
      </div>

      <ContactSection />
    </main>
  </div>
</template>
