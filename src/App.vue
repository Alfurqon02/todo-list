<script setup lang="ts">
import { useExperienceStore } from '@/stores/experienceStore'
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import LoadingScreen from '@/components/ui/LoadingScreen.vue'
import Navbar from '@/components/ui/Navbar.vue'
import CyberCursor from '@/components/ui/CyberCursor.vue'
import ModeModal from '@/components/ui/ModeModal.vue'
import GlobalCanvas from '@/components/3d/GlobalCanvas.vue'

// Immersive Cyber Sections (Mode A)
import CyberHeroSection from '@/components/sections/CyberHeroSection.vue'
import CyberAboutSection from '@/components/sections/CyberAboutSection.vue'
import CylinderExperienceSection from '@/components/sections/CylinderExperienceSection.vue'
import CyberSkillsSection from '@/components/sections/CyberSkillsSection.vue'
import CyberResearchSection from '@/components/sections/CyberResearchSection.vue'
import CyberOrgsSection from '@/components/sections/CyberOrgsSection.vue'
import CyberContactSection from '@/components/sections/CyberContactSection.vue'

// Clean / Recruiter Mode (Mode B)
import TerminalLogView from '@/components/sections/TerminalLogView.vue'

const store = useExperienceStore()

// Initialize Lenis continuous smooth scrolling synchronized with GSAP ScrollTrigger
useSmoothScroll()
</script>

<template>
  <div class="app-root min-h-screen bg-abyss text-slate-200 overflow-x-hidden font-rajdhani">
    <!-- Boot-up Loading Screen -->
    <LoadingScreen />

    <!-- Reticle HUD Cursor -->
    <CyberCursor />

    <!-- Master Chained 3D Cyber Canvas (Continuous 3D Journey across all sections) -->
    <GlobalCanvas v-if="store.mode === 'immersive'" />

    <!-- CRT Scanline Overlay -->
    <div class="cyber-scanlines pointer-events-none" />

    <!-- Sci-Fi Terminal Boot-up Modal -->
    <ModeModal />

    <!-- Persistent HUD Navbar (Rule 1.1) -->
    <Navbar />

    <!-- Main Content Flow -->
    <main class="relative z-10">
      <Transition name="mode-transition" mode="out-in">
        <!-- MODE A: IMMERSIVE CYBERNETICS EXPERIENCE -->
        <div v-if="store.mode === 'immersive'" key="mode-immersive" class="w-full">
          <!-- 01. Hero (3D Gyroscope Mecha Core) -->
          <CyberHeroSection />

          <!-- 02. About / Operator Dossier (3D Biometric Scanner) -->
          <CyberAboutSection />

          <!-- 03. Experience 3D Cylinder Carousel (Continuous Scroll-Driven Rotation + Tower Dive) -->
          <CylinderExperienceSection />

          <!-- 04. Technical Arsenal (3D Satellite Sphere Orbit) -->
          <CyberSkillsSection />

          <!-- 05. Research & Publications (3D Blueprint Prism) -->
          <CyberResearchSection />

          <!-- 06. Leadership & Cohort Missions -->
          <CyberOrgsSection />

          <!-- 07. Direct Transmission Console -->
          <CyberContactSection />
        </div>

        <!-- MODE B: TERMINAL LOG (CLEAN / PERFORMANCE / RECRUITER) -->
        <div v-else key="mode-clean" class="w-full">
          <TerminalLogView />
        </div>
      </Transition>
    </main>
  </div>
</template>

<style scoped>
.mode-transition-enter-active,
.mode-transition-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.mode-transition-enter-from {
  opacity: 0;
  transform: scale(0.98);
}
.mode-transition-leave-to {
  opacity: 0;
  transform: scale(1.02);
}
</style>
