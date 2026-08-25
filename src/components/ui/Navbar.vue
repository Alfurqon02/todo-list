<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useExperienceStore } from '@/stores/experienceStore'
import { navLinks } from '@/data/portfolioData'
import { Sun, Moon, Snowflake, Zap, Menu, X } from 'lucide-vue-next'

const store = useExperienceStore()
const scrolled = ref(false)
const mobileOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function scrollTo(href: string) {
  mobileOpen.value = false
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <nav
    id="navbar"
    class="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
    :class="[
      scrolled
        ? 'py-3 glass-card !rounded-none border-x-0 border-t-0'
        : 'py-5 bg-transparent',
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
      <!-- Logo -->
      <a
        href="#hero"
        class="flex items-center gap-2.5 text-xl font-bold tracking-tight transition-transform hover:scale-105"
        style="color: var(--accent-cyan)"
        @click.prevent="scrollTo('#hero')"
      >
        <!-- <img src="/logo.svg" alt="Furqon Ice Monogram Logo" class="w-8 h-8" /> -->
        <span>&lt;Furqon /&gt;</span>
      </a>

      <!-- Desktop Nav Links -->
      <div class="hidden md:flex items-center gap-6">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium transition-colors duration-200 hover:text-[var(--accent-cyan)]"
          style="color: var(--text-secondary)"
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Controls -->
      <div class="flex items-center gap-2">
        <!-- Mode Toggle -->
        <button
          id="btn-toggle-mode"
          class="p-2 rounded-lg transition-all duration-300 hover:bg-[var(--card-bg)]"
          :title="store.mode === 'immersive' ? 'Switch to Clean View' : 'Switch to Immersive 3D'"
          @click="store.toggleMode()"
        >
          <Snowflake
            v-if="store.mode === 'clean'"
            :size="18"
            style="color: var(--accent-cyan)"
          />
          <Zap
            v-else
            :size="18"
            style="color: var(--accent-cyan)"
          />
        </button>

        <!-- Dark/Light Toggle -->
        <button
          id="btn-toggle-dark"
          class="p-2 rounded-lg transition-all duration-300 hover:bg-[var(--card-bg)]"
          :title="store.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          @click="store.toggleDark()"
        >
          <Moon v-if="!store.isDark" :size="18" style="color: var(--accent-cyan)" />
          <Sun v-else :size="18" style="color: var(--accent-cyan)" />
        </button>

        <!-- Mobile Menu -->
        <button
          id="btn-mobile-menu"
          class="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-[var(--card-bg)]"
          @click="mobileOpen = !mobileOpen"
        >
          <X v-if="mobileOpen" :size="20" style="color: var(--text-primary)" />
          <Menu v-else :size="20" style="color: var(--text-primary)" />
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        class="md:hidden glass-card !rounded-t-none mt-1 mx-4 p-4 space-y-3"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="block text-sm font-medium py-2 px-3 rounded-lg transition-colors hover:bg-[var(--card-bg)]"
          style="color: var(--text-secondary)"
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.label }}
        </a>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
