<script setup lang="ts">
import { skills, achievements, organizations } from '@/data/portfolioData'
import { BookOpen, GraduationCap, Award, Users, Layout, Server, Database, Cpu, Brain, ShieldCheck } from 'lucide-vue-next'

const iconMap: Record<string, any> = {
  'book-open': BookOpen,
  'graduation-cap': GraduationCap,
}

const skillIcons: Record<string, any> = {
  'Frontend': Layout,
  'Backend': Server,
  'Database': Database,
  'DevOps & Tools': Cpu,
  'AI & ML': Brain,
  'Security': ShieldCheck,
}
</script>

<template>
  <section id="skills" class="py-24 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title reveal-title">
          <span class="text-gradient">Skills & More</span>
        </h2>
        <p class="section-subtitle reveal-subtitle">Technologies, achievements, and community involvement</p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        <div
          v-for="category in skills"
          :key="category.name"
          class="glass-card p-6 reveal-card"
        >
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-9 h-9 rounded-lg flex items-center justify-center"
              style="background: var(--gradient-accent)"
            >
              <component :is="skillIcons[category.name] || Layout" :size="18" color="#fff" />
            </div>
            <h3 class="font-bold text-base" style="color: var(--text-primary)">
              {{ category.name }}
            </h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in category.items"
              :key="item"
              class="reveal-tag text-xs font-mono px-2.5 py-1.5 rounded-lg transition-all duration-200 hover:scale-105"
              style="background: var(--bg-secondary); color: var(--text-secondary); border: 1px solid var(--card-border)"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>

      <!-- Achievements -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold mb-8 text-center" style="color: var(--text-primary)">
          <Award :size="24" class="inline mr-2" style="color: var(--accent-cyan)" />
          Achievements
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="(ach, i) in achievements"
            :key="i"
            class="glass-card p-6 reveal-card"
          >
            <div class="flex items-start gap-3">
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style="background: var(--gradient-accent)"
              >
                <component :is="iconMap[ach.icon] || Award" :size="20" color="#fff" />
              </div>
              <div>
                <h4 class="font-bold text-base mb-1" style="color: var(--text-primary)">
                  {{ ach.title }}
                </h4>
                <p class="text-sm leading-relaxed" style="color: var(--text-secondary)">
                  {{ ach.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Organizations -->
      <div>
        <h3 class="text-2xl font-bold mb-8 text-center" style="color: var(--text-primary)">
          <Users :size="24" class="inline mr-2" style="color: var(--accent-cyan)" />
          Organizations & Volunteer
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="(org, i) in organizations"
            :key="i"
            class="glass-card p-6 reveal-card"
          >
            <h4 class="font-bold text-base mb-1" style="color: var(--text-primary)">
              {{ org.name }}
            </h4>
            <p class="text-sm font-medium mb-1" style="color: var(--accent-cyan)">
              {{ org.role }}
            </p>
            <p class="text-xs font-mono mb-3" style="color: var(--text-secondary)">
              {{ org.period }}
            </p>
            <p class="text-sm leading-relaxed" style="color: var(--text-secondary)">
              {{ org.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
