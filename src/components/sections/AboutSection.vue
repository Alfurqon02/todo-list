<script setup lang="ts">
import { personalInfo, education, languages, experiences, achievements } from '@/data/portfolioData'
import { GraduationCap, Globe, User, Sparkles } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="py-24 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        <!-- Sticky Left Header & Key Metrics Column (5 cols) -->
        <div class="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
          <div>
            <span class="text-xs font-mono tracking-widest uppercase text-[var(--accent-cyan)] font-semibold mb-2 block">
              01 // Overview
            </span>
            <h2 class="section-title reveal-title text-4xl sm:text-5xl font-black mb-4">
              <span class="text-gradient">About Me</span>
            </h2>
            <p class="text-base text-[var(--text-secondary)] leading-relaxed">
              Software Engineer & Fullstack Developer specializing in high-performance web systems, database normalization, and academic research.
            </p>
          </div>

          <!-- Key Metrics Grid -->
          <div class="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--card-border)]">
            <div class="glass-card p-4">
              <p class="text-3xl sm:text-4xl font-black font-mono text-[var(--accent-cyan)]" data-count-to="3.77">
                0
              </p>
              <p class="text-xs font-mono text-[var(--text-secondary)] mt-1 uppercase tracking-wider">
                UNS GPA (Informatics)
              </p>
            </div>

            <div class="glass-card p-4">
              <p class="text-3xl sm:text-4xl font-black font-mono text-[var(--accent-cyan)]" :data-count-to="experiences.length">
                0
              </p>
              <p class="text-xs font-mono text-[var(--text-secondary)] mt-1 uppercase tracking-wider">
                Industry & Academic Roles
              </p>
            </div>

            <div class="glass-card p-4">
              <p class="text-3xl sm:text-4xl font-black font-mono text-[var(--accent-cyan)]" :data-count-to="achievements.length">
                0
              </p>
              <p class="text-xs font-mono text-[var(--text-secondary)] mt-1 uppercase tracking-wider">
                Published Books & Thesis
              </p>
            </div>

            <div class="glass-card p-4">
              <p class="text-3xl sm:text-4xl font-black font-mono text-[var(--accent-cyan)]" data-count-to="3">
                0
              </p>
              <p class="text-xs font-mono text-[var(--text-secondary)] mt-1 uppercase tracking-wider">
                Languages Spoken
              </p>
            </div>
          </div>
        </div>

        <!-- Right Content Column (7 cols) -->
        <div class="lg:col-span-7 space-y-6">

          <!-- Who I Am -->
          <div class="glass-card p-6 sm:p-8 reveal-card relative overflow-hidden">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style="background: var(--gradient-accent)"
              >
                <User :size="20" color="#fff" />
              </div>
              <div>
                <h3 class="text-lg font-bold" style="color: var(--text-primary)">
                  Background & Philosophy
                </h3>
                <span class="text-xs font-mono text-[var(--accent-cyan)]">Universitas Sebelas Maret Graduate</span>
              </div>
            </div>
            <p class="text-sm sm:text-base leading-relaxed" style="color: var(--text-secondary)">
              {{ personalInfo.about }}
            </p>
          </div>

          <!-- Education Section -->
          <div class="space-y-4">
            <h3 class="text-sm font-mono uppercase tracking-widest text-[var(--accent-cyan)] font-semibold flex items-center gap-2">
              <GraduationCap :size="16" />
              Academic History
            </h3>

            <div
              v-for="(edu, i) in education"
              :key="i"
              class="glass-card p-6 reveal-card"
            >
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h4 class="font-bold text-base sm:text-lg" style="color: var(--text-primary)">
                  {{ edu.institution }}
                </h4>
                <span class="text-xs font-mono px-3 py-1 rounded-full self-start" style="background: var(--bg-secondary); color: var(--accent-cyan); border: 1px solid var(--card-border)">
                  GPA: {{ edu.gpa }}
                </span>
              </div>
              <p class="text-sm font-medium mb-3" style="color: var(--accent-cyan)">
                {{ edu.degree }}
              </p>
              <div class="text-xs font-mono" style="color: var(--text-secondary)">
                {{ edu.period }}
              </div>
            </div>
          </div>

          <!-- Languages Card -->
          <div class="glass-card p-6 sm:p-8 reveal-card">
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style="background: var(--gradient-accent)"
              >
                <Globe :size="20" color="#fff" />
              </div>
              <h3 class="text-lg font-bold" style="color: var(--text-primary)">
                Languages
              </h3>
            </div>
            <div class="space-y-5">
              <div v-for="lang in languages" :key="lang.name">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-sm font-semibold" style="color: var(--text-primary)">
                    {{ lang.name }}
                  </span>
                  <span class="text-xs font-mono" style="color: var(--accent-cyan)">
                    {{ lang.level }}
                  </span>
                </div>
                <div
                  class="w-full h-2 rounded-full overflow-hidden"
                  style="background: var(--bg-secondary)"
                >
                  <div
                    class="h-full rounded-full transition-all duration-1000 ease-out"
                    :style="{
                      width: lang.percentage + '%',
                      background: 'var(--gradient-accent)',
                    }"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>
