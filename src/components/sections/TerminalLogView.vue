<script setup lang="ts">
import {
  personalInfo,
  experiences,
  education,
  achievements,
  organizations,
  skills,
  languages,
} from '@/data/portfolioData'
import {
  Terminal,
  Cpu,
  GraduationCap,
  Briefcase,
  Award,
  Users,
  Code2,
  Mail,
  Linkedin,
  Globe,
  ExternalLink,
  Sparkles,
} from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-abyss text-slate-200 pt-28 pb-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
    <!-- Terminal Header Banner -->
    <div class="cyber-card p-6 md:p-8 mb-10 border-neon-blue/40 shadow-[0_0_30px_rgba(0,243,255,0.15)]">
      <div class="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-6 font-mono text-xs text-neon-blue">
        <div class="flex items-center gap-2">
          <Terminal :size="16" />
          <span>TERMINAL_LOG // RECRUITER_SYS_v2.0</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span class="text-emerald-400">SYS_OPTIMIZED // ZERO_LATENCY</span>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div class="lg:col-span-2">
          <span class="telemetry-tag mb-2">OPERATOR DOSSIER</span>
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold font-rajdhani text-white mb-2 text-gradient">
            {{ personalInfo.name }}
          </h1>
          <p class="text-lg text-neon-blue font-mono mb-4">
            {{ personalInfo.title }}
          </p>
          <p class="text-sm text-slate-300 leading-relaxed max-w-2xl">
            {{ personalInfo.about }}
          </p>
        </div>

        <div class="cyber-card p-4 border-cyan-500/20 bg-slate-950/60 font-mono text-xs space-y-2.5">
          <div class="flex items-center justify-between">
            <span class="text-slate-400">DOMAIN:</span>
            <a
              :href="'https://' + personalInfo.website"
              target="_blank"
              class="text-neon-blue hover:underline flex items-center gap-1"
            >
              {{ personalInfo.website }}
              <ExternalLink :size="10" />
            </a>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-400">LINKEDIN:</span>
            <a
              :href="'https://' + personalInfo.linkedin"
              target="_blank"
              class="text-neon-blue hover:underline flex items-center gap-1"
            >
              {{ personalInfo.linkedin }}
              <ExternalLink :size="10" />
            </a>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-400">EMAIL:</span>
            <a
              :href="'mailto:' + personalInfo.email"
              class="text-neon-blue hover:underline"
            >
              {{ personalInfo.email }}
            </a>
          </div>
        </div>
      </div>

      <!-- Key Metrics Counters -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-cyan-500/20">
        <div class="p-3 bg-slate-900/50 border border-cyan-500/15 rounded">
          <p class="text-2xl sm:text-3xl font-black font-mono text-neon-blue">
            {{ education[0].gpa.split('/')[0].trim() }}
          </p>
          <p class="text-[10px] font-mono text-slate-400 mt-1 uppercase">
            UNS Informatics GPA
          </p>
        </div>
        <div class="p-3 bg-slate-900/50 border border-cyan-500/15 rounded">
          <p class="text-2xl sm:text-3xl font-black font-mono text-neon-blue">
            {{ experiences.length }}
          </p>
          <p class="text-[10px] font-mono text-slate-400 mt-1 uppercase">
            Industry &amp; Academic Roles
          </p>
        </div>
        <div class="p-3 bg-slate-900/50 border border-cyan-500/15 rounded">
          <p class="text-2xl sm:text-3xl font-black font-mono text-neon-blue">
            {{ achievements.length }}
          </p>
          <p class="text-[10px] font-mono text-slate-400 mt-1 uppercase">
            Book &amp; Thesis Publications
          </p>
        </div>
        <div class="p-3 bg-slate-900/50 border border-cyan-500/15 rounded">
          <p class="text-2xl sm:text-3xl font-black font-mono text-neon-blue">
            {{ languages.length }}
          </p>
          <p class="text-[10px] font-mono text-slate-400 mt-1 uppercase">
            Languages Spoken
          </p>
        </div>
      </div>
    </div>

    <!-- Section 1: Linguistic Proficiencies -->
    <section class="cyber-card p-6 mb-10">
      <div class="flex items-center gap-3 mb-4 border-b border-cyan-500/20 pb-3">
        <Globe class="text-neon-blue" :size="20" />
        <h2 class="text-xl font-bold font-rajdhani text-white uppercase tracking-wider">
          Linguistic Proficiencies
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          v-for="lang in languages"
          :key="lang.name"
          class="p-3.5 bg-slate-900/50 border border-cyan-500/15 rounded"
        >
          <div class="flex items-center justify-between text-xs font-mono mb-1.5">
            <span class="text-white font-bold">{{ lang.name }}</span>
            <span class="text-neon-blue">{{ lang.percentage }}%</span>
          </div>
          <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-[0_0_8px_#00f3ff]"
              :style="{ width: `${lang.percentage}%` }"
            />
          </div>
          <span class="text-[10px] text-slate-400 font-mono mt-1.5 block">
            Level: {{ lang.level }}
          </span>
        </div>
      </div>
    </section>

    <!-- Section 2: Work Experience (11 Nodes) -->
    <section class="mb-12">
      <div class="flex items-center gap-3 mb-6">
        <Briefcase class="text-neon-blue" :size="22" />
        <h2 class="text-2xl font-bold font-rajdhani text-white uppercase tracking-wider">
          Work Experience Log ({{ experiences.length }} NODES)
        </h2>
      </div>

      <div class="space-y-6">
        <article
          v-for="(exp, idx) in experiences"
          :key="exp.company + idx"
          class="cyber-card p-6 border-slate-800 hover:border-cyan-500/50 transition-all duration-200"
        >
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-cyan-500/15 pb-3 mb-4">
            <div>
              <span class="font-mono text-xs text-neon-blue font-bold tracking-wider mr-2">
                [NODE_{{ String(idx + 1).padStart(2, '0') }}]
              </span>
              <h3 class="inline text-xl font-bold text-white font-rajdhani">
                {{ exp.role }}
              </h3>
              <p class="text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                {{ exp.company }}
              </p>
            </div>
            <span class="telemetry-tag self-start md:self-auto">
              {{ exp.period }}
            </span>
          </div>

          <ul class="space-y-2 text-sm text-slate-300 mb-4">
            <li
              v-for="(hl, hIdx) in exp.highlights"
              :key="hIdx"
              class="flex items-start gap-2"
            >
              <span class="text-neon-blue font-mono mt-0.5">›</span>
              <span class="leading-relaxed">{{ hl }}</span>
            </li>
          </ul>

          <div v-if="exp.tags?.length" class="flex flex-wrap gap-2 pt-2 border-t border-cyan-500/10">
            <span
              v-for="tag in exp.tags"
              :key="tag"
              class="text-xs font-mono px-2.5 py-0.5 bg-cyan-950/40 text-cyan-300 border border-cyan-500/20 rounded"
            >
              #{{ tag }}
            </span>
          </div>
        </article>
      </div>
    </section>

    <!-- Section 3: Education & Technical Skills -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <!-- Education -->
      <section class="cyber-card p-6">
        <div class="flex items-center gap-3 mb-5 border-b border-cyan-500/20 pb-3">
          <GraduationCap class="text-neon-blue" :size="20" />
          <h2 class="text-xl font-bold font-rajdhani text-white uppercase">
            Education Record
          </h2>
        </div>

        <div class="space-y-5">
          <div
            v-for="(edu, eIdx) in education"
            :key="eIdx"
            class="p-4 bg-slate-900/50 border border-cyan-500/15 rounded"
          >
            <div class="flex items-center justify-between mb-1">
              <h3 class="text-base font-bold text-white font-rajdhani">
                {{ edu.institution }}
              </h3>
              <span class="text-xs font-mono text-neon-blue">{{ edu.period }}</span>
            </div>
            <p class="text-sm text-slate-300 font-mono">{{ edu.degree }}</p>
            <p class="text-xs text-slate-400 font-mono mt-1">GPA: {{ edu.gpa }}</p>
          </div>
        </div>
      </section>

      <!-- Technical Skills Matrix -->
      <section class="cyber-card p-6">
        <div class="flex items-center gap-3 mb-5 border-b border-cyan-500/20 pb-3">
          <Code2 class="text-neon-blue" :size="20" />
          <h2 class="text-xl font-bold font-rajdhani text-white uppercase">
            Technical Arsenal
          </h2>
        </div>

        <div class="space-y-4">
          <div
            v-for="cat in skills"
            :key="cat.name"
            class="p-3 bg-slate-900/40 border border-cyan-500/15 rounded"
          >
            <h4 class="text-xs font-mono text-neon-blue uppercase tracking-wider mb-2">
              // {{ cat.name }}
            </h4>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="skill in cat.items"
                :key="skill"
                class="text-xs font-mono px-2 py-0.5 bg-slate-800 text-slate-200 border border-slate-700 rounded"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Section 4: Organizations & Leadership -->
    <section class="cyber-card p-6 mb-12">
      <div class="flex items-center gap-3 mb-5 border-b border-cyan-500/20 pb-3">
        <Users class="text-neon-blue" :size="20" />
        <h2 class="text-xl font-bold font-rajdhani text-white uppercase">
          Organizations &amp; Leadership Roles
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(org, oIdx) in organizations"
          :key="oIdx"
          class="p-4 bg-slate-900/50 border border-cyan-500/15 rounded"
        >
          <div class="flex items-center justify-between mb-1">
            <h3 class="text-base font-bold text-white font-rajdhani">
              {{ org.name }}
            </h3>
            <span class="text-xs font-mono text-neon-blue">{{ org.period }}</span>
          </div>
          <p class="text-xs font-mono text-cyan-400 mb-2">{{ org.role }}</p>
          <p class="text-sm text-slate-300 leading-relaxed">
            {{ org.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Section 5: Publications & Achievements -->
    <section class="cyber-card p-6 mb-12">
      <div class="flex items-center gap-3 mb-5 border-b border-cyan-500/20 pb-3">
        <Award class="text-neon-blue" :size="20" />
        <h2 class="text-xl font-bold font-rajdhani text-white uppercase">
          Research &amp; Publications
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(ach, aIdx) in achievements"
          :key="aIdx"
          class="p-4 bg-slate-900/50 border border-cyan-500/20 rounded"
        >
          <div class="text-xs font-mono text-neon-blue mb-1 uppercase tracking-wider">
            ★ {{ ach.title }}
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">
            {{ ach.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Footer Contact Command -->
    <footer class="cyber-card p-6 text-center border-neon-blue/30">
      <h3 class="text-xl font-bold font-rajdhani text-white mb-2">
        INITIALIZE DIRECT TRANSMISSION
      </h3>
      <p class="text-sm text-slate-400 font-mono mb-4">
        Ready for Fullstack Engineering, ML/AI Systems, and Advanced Web Applications.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <a
          :href="'mailto:' + personalInfo.email"
          class="hud-btn hud-btn-primary"
        >
          <Mail :size="14" />
          <span>TRANSMIT EMAIL</span>
        </a>
        <a
          :href="'https://' + personalInfo.linkedin"
          target="_blank"
          class="hud-btn"
        >
          <Linkedin :size="14" />
          <span>LINKEDIN NETWORK</span>
        </a>
      </div>
    </footer>
  </div>
</template>
