<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// --- Navbar scroll state ---
const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('hero')

// --- Accordion state (mobile) ---
const expandedExp = ref(null)
const expandedOrg = ref(null)

function toggleExp(index) {
  expandedExp.value = expandedExp.value === index ? null : index
}

function toggleOrg(index) {
  expandedOrg.value = expandedOrg.value === index ? null : index
}

function onScroll() {
  scrolled.value = window.scrollY > 40

  // Determine active section
  const sections = ['hero', 'experience', 'education', 'skills', 'achievements', 'organizations', 'languages']
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i])
    if (el && el.getBoundingClientRect().top <= 200) {
      activeSection.value = sections[i]
      break
    }
  }
}

// --- Intersection Observer for fade-in ---
let observer = null

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (observer) observer.disconnect()
})

function scrollTo(id) {
  mobileMenuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

// --- Data from CV ---
const experiences = [
  {
    role: 'Web Developer (Part-Time)',
    company: 'LAMPTIP',
    period: 'Nov 2025 – Present',
    details: [
      'Maintained full-stack systems and orchestrated foundational components for the institutional system platform.',
      'Administered standard systems health monitoring, refactored technical debt, and preemptively closed bug variants.',
      'Engineered secure administrative components and features dynamically requested by internal operations.'
    ]
  },
  {
    role: 'Freelance Fullstack Web Developer',
    company: 'Self-Employed',
    period: 'Aug 2024 – Present',
    details: [
      'Architected and managed diverse multi-tier platforms for various corporate entities and individual clients.',
      'Spearheaded full lifecycle feature sets mapping directly to strict functional stakeholder specifications.',
      'Handled hardened operational deployment, comprehensive performance scaling, and cross-platform architecture audits.'
    ]
  },
  {
    role: 'Web Developer (Contract)',
    company: 'DISPERKIMTAN Bontang City',
    period: 'Sep 2025 – Feb 2026',
    details: [
      'Formulated secure identity flows using JWT configurations.',
      'Created an advanced hierarchical Role Manager matrix ensuring granular security profiles.',
      'Built full operational user-impersonation protocols with secure, logged administrator diagnostic viewing.',
      'Deployed continuous operational audit trails using customized Laravel Auditor tracking schemas.',
      'Developed clear REST API pathways to facilitate decoupling and optimize payload transmission speeds.'
    ]
  },
  {
    role: 'Software Engineer (Internship)',
    company: 'Meiwa Industry Japan (明和工業株式会社)',
    period: 'Jun 2024 – Jun 2025',
    details: [
      'Normalized high-throughput database topologies inside the "Meiwa Portal" core system application.',
      'Refactored widespread application patterns to conform with enterprise-level software design guidelines.',
      'Recreated the corporate Inventory Management System to optimize real-time material tracking.',
      'Designed and built the internal corporate Leave Request Application automated workflow system.',
      'Contributed to the platform-wide architectural migration to a modern high-performance tech stack.'
    ]
  },
  {
    role: 'Software Developer (Internship)',
    company: 'UPT TIK UNS',
    period: 'Jan 2023 – Mar 2024',
    details: [
      'Co-authored "Report-PBJ", a web system to process and track goods procurement.',
      'Optimized "Domain-MS" deployment infrastructure for dynamic domain registration management.',
      'Assisted with technological preparation for "SEMANTIK", a collaborative event with Indosat & Telkomsel.',
      'Engaged in cross-national collaboration with Rapixus Company Taiwan.'
    ]
  },
  {
    role: 'Assistant Lecturer',
    company: 'Universitas Sebelas Maret',
    period: 'Aug 2022 – Jun 2024',
    details: [
      'Taught Programming Concepts, Data Structures & Algorithms, Database, OOP, and Web Programming.',
      'Conducted student code reviews, grading workflows, and design assessments across multiple semesters.'
    ]
  }
]

const skills = [
  { name: 'Vue.js', icon: '⚡' },
  { name: 'Laravel', icon: '🔷' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Git', icon: '📦' },
  { name: 'JavaScript', icon: '✨' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Google Cloud', icon: '☁️' },
]

const organizations = [
  {
    role: 'Machine Learning Cohort',
    place: 'Bangkit Academy Batch 2',
    period: 'Aug 2023 – Jan 2024',
    details: [
      'Completed specialized ML training using Python and JavaScript environments.',
      'Built deep architectures using TensorFlow and TensorFlow.js frameworks.',
      'Developed "NutriChive" — an intelligent app using computer vision to identify ingredients and output recipes.'
    ]
  },
  {
    role: 'Head Division of Technology',
    place: 'OSPRODI Informatika (UNS)',
    period: 'Jul 2022 – Aug 2022',
    details: [
      'Led the technology track during student orientation cycles.',
      'Developed "ALGORITMARU TASK", an interactive web-based task distribution engine.'
    ]
  },
  {
    role: 'Head Division of Curriculum',
    place: 'PKKMB FATISDA (UNS)',
    period: 'Jul 2022 – Aug 2022',
    details: [
      'Supervised curriculum design and onboarding materials during student integration programs.',
      'Managed team leaders and structured assignments for incoming first-year students.'
    ]
  },
  {
    role: 'PSDM Staff',
    place: 'HIMASTER UNS',
    period: 'Mar 2022 – Mar 2023',
    details: [
      'Served in the Human Resources Development department for student engagement strategies.',
      'Mentored new undergraduate classes and managed cross-collaborative project execution.'
    ]
  }
]
</script>

<template>
  <!-- Background effects -->
  <div class="bg-grid"></div>
  <div class="bg-glow bg-glow--1"></div>
  <div class="bg-glow bg-glow--2"></div>
  <div class="bg-glow bg-glow--3"></div>

  <!-- Navigation -->
  <nav id="navbar" class="navbar" :class="{ scrolled }">
    <div class="container">
      <a class="nav-brand" href="#" @click.prevent="scrollTo('hero')">MAF.</a>
      <button class="nav-toggle" :class="{ open: mobileMenuOpen }" aria-label="Toggle navigation" @click="mobileMenuOpen = !mobileMenuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul class="nav-links" :class="{ open: mobileMenuOpen }">
        <li><a :class="{ active: activeSection === 'experience' }" @click.prevent="scrollTo('experience')">Experience</a></li>
        <li><a :class="{ active: activeSection === 'education' }" @click.prevent="scrollTo('education')">Education</a></li>
        <li><a :class="{ active: activeSection === 'skills' }" @click.prevent="scrollTo('skills')">Skills</a></li>
        <li><a :class="{ active: activeSection === 'achievements' }" @click.prevent="scrollTo('achievements')">Research</a></li>
        <li><a :class="{ active: activeSection === 'organizations' }" @click.prevent="scrollTo('organizations')">Activities</a></li>
        <li><a :class="{ active: activeSection === 'languages' }" @click.prevent="scrollTo('languages')">Languages</a></li>
      </ul>
    </div>
  </nav>

  <!-- Overlay to close mobile menu when clicking outside -->
  <div class="nav-overlay" :class="{ active: mobileMenuOpen }" @click="mobileMenuOpen = false"></div>

  <!-- Hero Section -->
  <section id="hero" class="hero section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <p class="hero-greeting fade-in">// Hello, World! I'm</p>
          <h1 class="hero-name fade-in fade-in-delay-1">
            Mohammad<br><span class="gradient-text">Al Furqon</span>
          </h1>
          <p class="hero-title fade-in fade-in-delay-2">Fullstack Web Developer &amp; Software Engineer</p>
          <p class="hero-description fade-in fade-in-delay-3">
            Fresh graduate from Universitas Sebelas Maret with professional experience at Meiwa Industry Japan.
            Passionate about building scalable web systems, deep learning research, and crafting clean, efficient code.
          </p>
          <div class="hero-actions fade-in fade-in-delay-4">
            <a href="/CV.pdf" target="_blank" class="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
            <a href="https://github.com/alfurqon02" target="_blank" class="btn btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
          <div class="hero-stats fade-in fade-in-delay-4">
            <div class="stat-item">
              <div class="stat-number">3+</div>
              <div class="stat-label">Years Exp.</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">6+</div>
              <div class="stat-label">Companies</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">3.77</div>
              <div class="stat-label">GPA</div>
            </div>
          </div>
        </div>
        <div class="hero-visual fade-in">
          <div class="avatar-wrapper">
            <img src="/avatar.png" alt="Mohammad Al Furqon" class="avatar-img" />
            <span class="floating-badge floating-badge--1">Vue.js</span>
            <span class="floating-badge floating-badge--2">Laravel</span>
            <span class="floating-badge floating-badge--3">TensorFlow</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section-title fade-in">Work Experience</h2>
      <p class="section-subtitle fade-in">My professional journey so far</p>
      <div class="section-divider fade-in"></div>

      <div class="timeline">
        <div v-for="(exp, i) in experiences" :key="i" class="timeline-item fade-in" :class="'fade-in-delay-' + ((i % 4) + 1)">
          <div class="glass-card accordion-card" :class="{ 'accordion-open': expandedExp === i }" @click="toggleExp(i)">
            <div class="timeline-header">
              <div>
                <div class="timeline-role">{{ exp.role }}</div>
                <div class="timeline-company">{{ exp.company }}</div>
              </div>
              <div class="timeline-header-right">
                <span class="timeline-period">{{ exp.period }}</span>
                <span class="accordion-chevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </div>
            </div>
            <div class="accordion-body">
              <ul class="timeline-details">
                <li v-for="(d, j) in exp.details" :key="j">{{ d }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Education Section -->
  <section id="education" class="section">
    <div class="container">
      <h2 class="section-title fade-in">Education</h2>
      <p class="section-subtitle fade-in">Academic background</p>
      <div class="section-divider fade-in"></div>

      <div class="education-grid">
        <div class="glass-card edu-card fade-in fade-in-delay-1">
          <div class="edu-icon">🎓</div>
          <div class="edu-degree">Bachelor of Informatics</div>
          <div class="edu-school">Universitas Sebelas Maret</div>
          <div class="edu-meta">
            <span>Aug 2021 – Jan 2026</span>
            <span class="edu-gpa">GPA: 3.77 / 4.00</span>
          </div>
        </div>
        <div class="glass-card edu-card fade-in fade-in-delay-2">
          <div class="edu-icon">🏫</div>
          <div class="edu-degree">Science &amp; Mathematics</div>
          <div class="edu-school">SMA Negeri 7 Bengkulu</div>
          <div class="edu-meta">
            <span>2018 – May 2021</span>
            <span class="edu-gpa">GPA: 93 / 100</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title fade-in">Tech Stack</h2>
      <p class="section-subtitle fade-in">Technologies I work with</p>
      <div class="section-divider fade-in"></div>

      <div class="skills-grid">
        <div v-for="(skill, i) in skills" :key="i" class="skill-chip fade-in" :class="'fade-in-delay-' + ((i % 4) + 1)">
          <span class="skill-icon">{{ skill.icon }}</span>
          {{ skill.name }}
        </div>
      </div>
    </div>
  </section>

  <!-- Achievements & Research Section -->
  <section id="achievements" class="section">
    <div class="container">
      <h2 class="section-title fade-in">Achievements &amp; Research</h2>
      <p class="section-subtitle fade-in">Publications and academic contributions</p>
      <div class="section-divider fade-in"></div>

      <div class="glass-card fade-in fade-in-delay-1">
        <div class="achievement-card">
          <div class="achievement-icon achievement-icon--book">📖</div>
          <div>
            <div class="achievement-title">Book Co-Author</div>
            <div class="achievement-desc">
              "Strategi Membangun Portal Website Aman Dari Serangan Judi Online" — Published in partnership with the Intelligent System and Humanized Computing Research Group (ISHC-RG), Faculty of Informatics and Data Science, Universitas Sebelas Maret.
            </div>
          </div>
        </div>

        <div class="achievement-card">
          <div class="achievement-icon achievement-icon--thesis">🔬</div>
          <div>
            <div class="achievement-title">Undergraduate Thesis</div>
            <div class="achievement-desc">
              "Dual-View Radiographic Captioning for Chest X-ray Frontal and Lateral using DenseNet-LSTM" — Undergraduate Publication Forthcoming / In Progress.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Organizations Section -->
  <section id="organizations" class="section">
    <div class="container">
      <h2 class="section-title fade-in">Organizations &amp; Activities</h2>
      <p class="section-subtitle fade-in">Leadership and volunteer experiences</p>
      <div class="section-divider fade-in"></div>

      <div class="org-grid">
        <div v-for="(org, i) in organizations" :key="i" class="fade-in" :class="'fade-in-delay-' + ((i % 4) + 1)">
          <div class="glass-card org-card accordion-card" :class="{ 'accordion-open': expandedOrg === i }" @click="toggleOrg(i)">
            <div class="org-header-row">
              <div>
                <div class="org-role">{{ org.role }}</div>
                <div class="org-place">{{ org.place }}</div>
                <div class="org-period">{{ org.period }}</div>
              </div>
              <span class="accordion-chevron">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </span>
            </div>
            <div class="accordion-body">
              <ul class="org-details">
                <li v-for="(d, j) in org.details" :key="j">{{ d }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Languages Section -->
  <section id="languages" class="section">
    <div class="container">
      <h2 class="section-title fade-in">Languages</h2>
      <p class="section-subtitle fade-in">Communication proficiency</p>
      <div class="section-divider fade-in"></div>

      <div class="languages-row fade-in fade-in-delay-1">
        <div class="lang-chip">
          <span class="lang-flag">ID</span>
          <div>
            <div class="lang-name">Bahasa Indonesia</div>
            <div class="lang-level">Native</div>
          </div>
        </div>
        <div class="lang-chip">
          <span class="lang-flag">EN</span>
          <div>
            <div class="lang-name">English</div>
            <div class="lang-level">Proficient</div>
          </div>
        </div>
        <div class="lang-chip">
          <span class="lang-flag">JP</span>
          <div>
            <div class="lang-name">Japanese</div>
            <div class="lang-level">Beginner</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-links fade-in">
        <a href="mailto:mohammadalfurgon62@gmail.com" class="footer-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          mohammadalfurgon62@gmail.com
        </a>
        <a href="tel:085383576966" class="footer-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          085383576966
        </a>
        <a href="https://github.com/alfurqon02" target="_blank" class="footer-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
      <p class="footer-copy">
        &copy; 2026 Mohammad Al Furqon · Built with <span class="heart">♥</span> using Vue.js
      </p>
    </div>
  </footer>
</template>

<style scoped>
/* Scoped overrides if needed */
</style>
