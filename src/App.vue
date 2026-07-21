<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'

// --- Navbar scroll state ---
const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('hero')

// --- Accordion state (mobile) ---
const expandedExp = ref(null)
const expandedOrg = ref(null)

// --- Custom cursor state (desktop) ---
const cursorX = ref(0)
const cursorY = ref(0)
const cursorRingX = ref(0)
const cursorRingY = ref(0)
const cursorVisible = ref(false)
const cursorEnlarged = ref(false)
let cursorRaf = null

// --- Computer eye tracking ---
const computerRef = ref(null)
const eyeOffsetX = ref(0)
const eyeOffsetY = ref(0)
const MAX_EYE_MOVE = 6

// --- Blink state ---
const eyelidY = ref(-54) // fully open (lid above eye)
let blinkTimeout = null
let blinkRaf = null
let blinkTarget = -54 // target Y position
const EYELID_OPEN = -54
const EYELID_CLOSED = 0
const BLINK_SPEED_DOWN = 0.35 // closing speed (fast)
const BLINK_SPEED_UP = 0.18   // opening speed (slower, natural)

function animateEyelid() {
  const diff = blinkTarget - eyelidY.value
  const speed = blinkTarget === EYELID_CLOSED ? BLINK_SPEED_DOWN : BLINK_SPEED_UP
  eyelidY.value += diff * speed

  if (Math.abs(diff) > 0.3) {
    blinkRaf = requestAnimationFrame(animateEyelid)
  } else {
    eyelidY.value = blinkTarget
  }
}

function doBlink() {
  // Close eyes
  blinkTarget = EYELID_CLOSED
  if (blinkRaf) cancelAnimationFrame(blinkRaf)
  animateEyelid()

  // Open after a brief hold
  const holdTime = 60 + Math.random() * 40
  return new Promise(resolve => {
    setTimeout(() => {
      blinkTarget = EYELID_OPEN
      if (blinkRaf) cancelAnimationFrame(blinkRaf)
      animateEyelid()
      setTimeout(resolve, 120)
    }, holdTime)
  })
}

function startBlinkLoop() {
  async function scheduleBlink() {
    const delay = 2500 + Math.random() * 4000 // 2.5-6.5 seconds
    blinkTimeout = setTimeout(async () => {
      // Single blink
      await doBlink()

      // ~35% chance of double blink
      if (Math.random() < 0.35) {
        await new Promise(r => setTimeout(r, 150 + Math.random() * 100))
        await doBlink()
      }

      scheduleBlink()
    }, delay)
  }
  scheduleBlink()
}

// --- Idle detection (eyes return to center) ---
let idleTimer = null
let idleRaf = null
const IDLE_DELAY = 2000 // ms before eyes drift to center

function startIdleDrift() {
  function drift() {
    eyeOffsetX.value += (0 - eyeOffsetX.value) * 0.05
    eyeOffsetY.value += (0 - eyeOffsetY.value) * 0.05
    if (Math.abs(eyeOffsetX.value) > 0.05 || Math.abs(eyeOffsetY.value) > 0.05) {
      idleRaf = requestAnimationFrame(drift)
    } else {
      eyeOffsetX.value = 0
      eyeOffsetY.value = 0
    }
  }
  drift()
}

function resetIdleTimer() {
  if (idleTimer) clearTimeout(idleTimer)
  if (idleRaf) cancelAnimationFrame(idleRaf)
  idleTimer = setTimeout(() => {
    startIdleDrift()
  }, IDLE_DELAY)
}

function updateEyeTracking() {
  if (!computerRef.value) return
  const rect = computerRef.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height * 0.35 // eyes are in upper portion
  const dx = cursorX.value - centerX
  const dy = cursorY.value - centerY
  const dist = Math.sqrt(dx * dx + dy * dy) || 1
  const clamp = Math.min(MAX_EYE_MOVE, dist / 15)
  eyeOffsetX.value = (dx / dist) * clamp
  eyeOffsetY.value = (dy / dist) * clamp
}

// --- Water drop ripple effect ---
const rippleCanvas = ref(null)
let rippleCtx = null
let ripples = []
let rippleRaf = null
let lastRippleTime = 0
const RIPPLE_THROTTLE = 60 // ms between spawns
const MAX_RIPPLES = 40

const rippleColors = [
  { r: 99, g: 102, b: 241 },   // indigo (accent-primary)
  { r: 6, g: 182, b: 212 },    // cyan (accent-secondary)
  { r: 168, g: 85, b: 247 },   // purple (accent-tertiary)
  { r: 129, g: 140, b: 248 },  // light indigo
  { r: 96, g: 165, b: 250 },   // sky blue
]

function spawnRipple(x, y) {
  const color = rippleColors[Math.floor(Math.random() * rippleColors.length)]
  ripples.push({
    x, y,
    radius: 2 + Math.random() * 3,
    maxRadius: 30 + Math.random() * 50,
    opacity: 0.35 + Math.random() * 0.2,
    speed: 0.8 + Math.random() * 0.6,
    color,
    lineWidth: 1.2 + Math.random() * 0.8,
  })
  // Keep array bounded
  if (ripples.length > MAX_RIPPLES) {
    ripples.splice(0, ripples.length - MAX_RIPPLES)
  }
}

function animateRipples() {
  if (!rippleCtx || !rippleCanvas.value) {
    rippleRaf = requestAnimationFrame(animateRipples)
    return
  }

  const canvas = rippleCanvas.value
  rippleCtx.clearRect(0, 0, canvas.width, canvas.height)

  for (let i = ripples.length - 1; i >= 0; i--) {
    const r = ripples[i]
    r.radius += r.speed
    const progress = r.radius / r.maxRadius
    r.opacity = Math.max(0, (1 - progress) * 0.4)

    if (r.opacity <= 0.005 || r.radius >= r.maxRadius) {
      ripples.splice(i, 1)
      continue
    }

    // Draw outer ring
    rippleCtx.beginPath()
    rippleCtx.arc(r.x, r.y, r.radius, 0, Math.PI * 2)
    rippleCtx.strokeStyle = `rgba(${r.color.r}, ${r.color.g}, ${r.color.b}, ${r.opacity})`
    rippleCtx.lineWidth = r.lineWidth * (1 - progress * 0.5)
    rippleCtx.stroke()

    // Draw subtle inner fill (water sheen)
    rippleCtx.beginPath()
    rippleCtx.arc(r.x, r.y, r.radius * 0.6, 0, Math.PI * 2)
    rippleCtx.fillStyle = `rgba(${r.color.r}, ${r.color.g}, ${r.color.b}, ${r.opacity * 0.15})`
    rippleCtx.fill()
  }

  rippleRaf = requestAnimationFrame(animateRipples)
}

function resizeRippleCanvas() {
  if (!rippleCanvas.value) return
  rippleCanvas.value.width = window.innerWidth
  rippleCanvas.value.height = window.innerHeight
}

function onMouseMove(e) {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  if (!cursorVisible.value) cursorVisible.value = true

  // Update eye tracking
  updateEyeTracking()
  resetIdleTimer()

  // Spawn water drop ripple (throttled)
  const now = Date.now()
  if (now - lastRippleTime > RIPPLE_THROTTLE) {
    spawnRipple(e.clientX, e.clientY)
    lastRippleTime = now
  }
}

function onMouseLeave() {
  cursorVisible.value = false
}

function onMouseEnter() {
  cursorVisible.value = true
}

function animateCursorRing() {
  // Smooth trailing effect using lerp
  cursorRingX.value += (cursorX.value - cursorRingX.value) * 0.15
  cursorRingY.value += (cursorY.value - cursorRingY.value) * 0.15
  cursorRaf = requestAnimationFrame(animateCursorRing)
}

function setupCursorHoverListeners() {
  const interactiveEls = document.querySelectorAll('a, button, .btn, .skill-chip, .glass-card, .lang-chip, .footer-link, .nav-brand, .nav-toggle')
  interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => { cursorEnlarged.value = true })
    el.addEventListener('mouseleave', () => { cursorEnlarged.value = false })
  })
}

// --- Typing animation state ---
const greetingFull = '// Hello, World! I\'m'
const greetingTyped = ref('')
let typingTimeout = null

function startTypingLoop() {
  let i = 0
  let isDeleting = false
  const typeSpeed = 160
  const deleteSpeed = 80
  const pauseAfterType = 2000
  const pauseAfterDelete = 800

  function tick() {
    if (!isDeleting) {
      // Typing
      greetingTyped.value = greetingFull.slice(0, i + 1)
      i++
      if (i >= greetingFull.length) {
        isDeleting = true
        typingTimeout = setTimeout(tick, pauseAfterType)
      } else {
        typingTimeout = setTimeout(tick, typeSpeed)
      }
    } else {
      // Deleting
      i--
      greetingTyped.value = greetingFull.slice(0, i)
      if (i <= 0) {
        isDeleting = false
        typingTimeout = setTimeout(tick, pauseAfterDelete)
      } else {
        typingTimeout = setTimeout(tick, deleteSpeed)
      }
    }
  }

  tick()
}

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

  // Start typing loop
  startTypingLoop()

  // Start eye blink loop
  startBlinkLoop()

  // Custom cursor + water ripples (desktop only)
  if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
    animateCursorRing()
    nextTick(() => setupCursorHoverListeners())

    // Setup ripple canvas
    if (rippleCanvas.value) {
      rippleCtx = rippleCanvas.value.getContext('2d')
      resizeRippleCanvas()
      window.addEventListener('resize', resizeRippleCanvas)
      animateRipples()
    }
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (observer) observer.disconnect()
  if (typingTimeout) clearTimeout(typingTimeout)
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseleave', onMouseLeave)
  document.removeEventListener('mouseenter', onMouseEnter)
  window.removeEventListener('resize', resizeRippleCanvas)
  if (cursorRaf) cancelAnimationFrame(cursorRaf)
  if (rippleRaf) cancelAnimationFrame(rippleRaf)
  if (blinkTimeout) clearTimeout(blinkTimeout)
  if (blinkRaf) cancelAnimationFrame(blinkRaf)
  if (idleTimer) clearTimeout(idleTimer)
  if (idleRaf) cancelAnimationFrame(idleRaf)
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
      'Developed "NutriChive" an intelligent app using computer vision to identify ingredients and output recipes.'
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
  <!-- Custom Cursor -->
  <div
    class="cursor-dot"
    :class="{ visible: cursorVisible, enlarged: cursorEnlarged }"
    :style="{ transform: `translate(${cursorX}px, ${cursorY}px)` }"
  ></div>
  <div
    class="cursor-ring"
    :class="{ visible: cursorVisible, enlarged: cursorEnlarged }"
    :style="{ transform: `translate(${cursorRingX}px, ${cursorRingY}px)` }"
  ></div>

  <!-- Water Drop Ripple Canvas -->
  <canvas ref="rippleCanvas" class="ripple-canvas"></canvas>

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
          <p class="hero-greeting fade-in">{{ greetingTyped }}<span class="typing-cursor">|</span></p>
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
          <div class="computer-wrapper" ref="computerRef">
            <!-- SVG Computer with Eyes -->
            <svg viewBox="0 0 280 260" xmlns="http://www.w3.org/2000/svg" class="computer-svg">
              <!-- Monitor body -->
              <defs>
                <linearGradient id="monitorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#1e1e3a"/>
                  <stop offset="100%" stop-color="#0f0f23"/>
                </linearGradient>
                <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#12122a"/>
                  <stop offset="100%" stop-color="#0a0a1a"/>
                </linearGradient>
                <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#6366f1"/>
                  <stop offset="100%" stop-color="#06b6d4"/>
                </linearGradient>
                <filter id="eyeGlow">
                  <feGaussianBlur stdDeviation="2" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="screenGlow">
                  <feGaussianBlur stdDeviation="4" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                <!-- Clip paths for eyelids -->
                <clipPath id="leftEyeClip">
                  <ellipse cx="105" cy="95" rx="29" ry="27"/>
                </clipPath>
                <clipPath id="rightEyeClip">
                  <ellipse cx="175" cy="95" rx="29" ry="27"/>
                </clipPath>
              </defs>

              <!-- Monitor outer shell -->
              <rect x="20" y="10" width="240" height="160" rx="12" fill="url(#monitorGrad)" stroke="rgba(99,102,241,0.3)" stroke-width="1.5"/>

              <!-- Screen bezel -->
              <rect x="32" y="22" width="216" height="136" rx="6" fill="url(#screenGrad)" stroke="rgba(99,102,241,0.15)" stroke-width="1"/>

              <!-- Screen shine line -->
              <line x1="40" y1="28" x2="100" y2="28" stroke="rgba(99,102,241,0.15)" stroke-width="0.5" stroke-linecap="round"/>

              <!-- Code lines on screen (decorative) -->
              <rect x="44" y="40" width="60" height="3" rx="1.5" fill="rgba(99,102,241,0.2)"/>
              <rect x="44" y="48" width="90" height="3" rx="1.5" fill="rgba(6,182,212,0.15)"/>
              <rect x="44" y="56" width="45" height="3" rx="1.5" fill="rgba(168,85,247,0.15)"/>
              <rect x="44" y="130" width="70" height="3" rx="1.5" fill="rgba(99,102,241,0.15)"/>
              <rect x="44" y="138" width="40" height="3" rx="1.5" fill="rgba(6,182,212,0.1)"/>
              <rect x="170" y="40" width="50" height="3" rx="1.5" fill="rgba(168,85,247,0.12)"/>
              <rect x="170" y="48" width="65" height="3" rx="1.5" fill="rgba(99,102,241,0.12)"/>
              <rect x="170" y="130" width="55" height="3" rx="1.5" fill="rgba(99,102,241,0.12)"/>

              <!-- LEFT EYE -->
              <g class="eye-group">
                <ellipse cx="105" cy="95" rx="28" ry="26" fill="#fff" stroke="rgba(99,102,241,0.3)" stroke-width="1" filter="url(#eyeGlow)"/>
                <!-- Left iris -->
                <circle :cx="105 + eyeOffsetX" :cy="95 + eyeOffsetY" r="12" fill="url(#accentGrad)"/>
                <!-- Left pupil -->
                <circle :cx="105 + eyeOffsetX * 1.2" :cy="95 + eyeOffsetY * 1.2" r="5.5" fill="#0a0a1a"/>
                <!-- Left pupil highlight -->
                <circle :cx="102 + eyeOffsetX * 0.8" :cy="91 + eyeOffsetY * 0.8" r="2.5" fill="rgba(255,255,255,0.85)"/>
                <!-- Left eyelid (slides from top) -->
                <g clip-path="url(#leftEyeClip)">
                  <rect x="76" :y="68 + eyelidY" width="58" height="54" fill="#12122a" rx="2"/>
                  <!-- Eyelid edge highlight -->
                  <line x1="77" :y1="122 + eyelidY" x2="133" :y2="122 + eyelidY" stroke="rgba(99,102,241,0.3)" stroke-width="1.5" stroke-linecap="round"/>
                </g>
              </g>
              <!-- Left eyelid line -->
              <path d="M77 85 Q105 70 133 85" fill="none" stroke="rgba(99,102,241,0.25)" stroke-width="1.5"/>

              <!-- RIGHT EYE -->
              <g class="eye-group">
                <ellipse cx="175" cy="95" rx="28" ry="26" fill="#fff" stroke="rgba(99,102,241,0.3)" stroke-width="1" filter="url(#eyeGlow)"/>
                <!-- Right iris -->
                <circle :cx="175 + eyeOffsetX" :cy="95 + eyeOffsetY" r="12" fill="url(#accentGrad)"/>
                <!-- Right pupil -->
                <circle :cx="175 + eyeOffsetX * 1.2" :cy="95 + eyeOffsetY * 1.2" r="5.5" fill="#0a0a1a"/>
                <!-- Right pupil highlight -->
                <circle :cx="172 + eyeOffsetX * 0.8" :cy="91 + eyeOffsetY * 0.8" r="2.5" fill="rgba(255,255,255,0.85)"/>
                <!-- Right eyelid (slides from top) -->
                <g clip-path="url(#rightEyeClip)">
                  <rect x="146" :y="68 + eyelidY" width="58" height="54" fill="#12122a" rx="2"/>
                  <!-- Eyelid edge highlight -->
                  <line x1="147" :y1="122 + eyelidY" x2="203" :y2="122 + eyelidY" stroke="rgba(99,102,241,0.3)" stroke-width="1.5" stroke-linecap="round"/>
                </g>
              </g>
              <!-- Right eyelid line -->
              <path d="M147 85 Q175 70 203 85" fill="none" stroke="rgba(99,102,241,0.25)" stroke-width="1.5"/>

              <!-- Power indicator LED -->
              <circle cx="140" cy="164" r="2.5" fill="#10b981" filter="url(#screenGlow)"/>

              <!-- Monitor stand neck -->
              <rect x="120" y="170" width="40" height="20" rx="2" fill="url(#monitorGrad)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>

              <!-- Monitor stand base -->
              <ellipse cx="140" cy="195" rx="50" ry="8" fill="url(#monitorGrad)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>

              <!-- Keyboard -->
              <rect x="50" y="215" width="180" height="35" rx="6" fill="url(#monitorGrad)" stroke="rgba(99,102,241,0.2)" stroke-width="1"/>
              <!-- Keyboard keys row 1 -->
              <rect x="60" y="220" width="12" height="8" rx="2" fill="rgba(99,102,241,0.15)"/>
              <rect x="76" y="220" width="12" height="8" rx="2" fill="rgba(99,102,241,0.12)"/>
              <rect x="92" y="220" width="12" height="8" rx="2" fill="rgba(6,182,212,0.15)"/>
              <rect x="108" y="220" width="12" height="8" rx="2" fill="rgba(99,102,241,0.12)"/>
              <rect x="124" y="220" width="12" height="8" rx="2" fill="rgba(99,102,241,0.15)"/>
              <rect x="140" y="220" width="12" height="8" rx="2" fill="rgba(168,85,247,0.12)"/>
              <rect x="156" y="220" width="12" height="8" rx="2" fill="rgba(99,102,241,0.12)"/>
              <rect x="172" y="220" width="12" height="8" rx="2" fill="rgba(6,182,212,0.12)"/>
              <rect x="188" y="220" width="12" height="8" rx="2" fill="rgba(99,102,241,0.15)"/>
              <rect x="204" y="220" width="12" height="8" rx="2" fill="rgba(99,102,241,0.12)"/>
              <!-- Keyboard keys row 2 -->
              <rect x="64" y="232" width="12" height="8" rx="2" fill="rgba(99,102,241,0.1)"/>
              <rect x="80" y="232" width="12" height="8" rx="2" fill="rgba(99,102,241,0.12)"/>
              <rect x="96" y="232" width="12" height="8" rx="2" fill="rgba(99,102,241,0.1)"/>
              <rect x="112" y="232" width="40" height="8" rx="2" fill="rgba(99,102,241,0.08)"/>
              <rect x="156" y="232" width="12" height="8" rx="2" fill="rgba(99,102,241,0.12)"/>
              <rect x="172" y="232" width="12" height="8" rx="2" fill="rgba(99,102,241,0.1)"/>
              <rect x="188" y="232" width="12" height="8" rx="2" fill="rgba(99,102,241,0.12)"/>
              <rect x="204" y="232" width="12" height="8" rx="2" fill="rgba(99,102,241,0.1)"/>
            </svg>

            <!-- Floating badges -->
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
              "Strategi Membangun Portal Website Aman Dari Serangan Judi Online" Published in partnership with the Intelligent System and Humanized Computing Research Group (ISHC-RG), Faculty of Informatics and Data Science, Universitas Sebelas Maret.
            </div>
          </div>
        </div>

        <div class="achievement-card">
          <div class="achievement-icon achievement-icon--thesis">🔬</div>
          <div>
            <div class="achievement-title">Undergraduate Thesis</div>
            <div class="achievement-desc">
              "Dual-View Radiographic Captioning for Chest X-ray Frontal and Lateral using DenseNet-LSTM" - Undergraduate Publication Forthcoming / In Progress.
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
            <div class="lang-name">Indonesian</div>
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
        <a href="https://wa.me/6285383576966" target="_blank" class="footer-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
/* Typing cursor animation */
.typing-cursor {
  display: inline-block;
  font-weight: 300;
  color: #64ffda;
  animation: blink-cursor 0.75s step-end infinite;
  margin-left: 1px;
}

@keyframes blink-cursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* --- Custom Cursor (desktop only) --- */
.cursor-dot,
.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  opacity: 0;
  transition: opacity 0.3s ease, width 0.3s ease, height 0.3s ease, background 0.3s ease;
  will-change: transform;
}

.cursor-dot {
  width: 8px;
  height: 8px;
  margin-left: -4px;
  margin-top: -4px;
  background: var(--accent-primary);
  box-shadow: 0 0 12px rgba(99, 102, 241, 0.6), 0 0 24px rgba(99, 102, 241, 0.3);
}

.cursor-ring {
  width: 36px;
  height: 36px;
  margin-left: -18px;
  margin-top: -18px;
  border: 1.5px solid rgba(99, 102, 241, 0.5);
  background: transparent;
}

.cursor-dot.visible,
.cursor-ring.visible {
  opacity: 1;
}

/* Enlarge on interactive elements */
.cursor-dot.enlarged {
  width: 12px;
  height: 12px;
  margin-left: -6px;
  margin-top: -6px;
  background: var(--accent-secondary);
  box-shadow: 0 0 16px rgba(6, 182, 212, 0.6), 0 0 32px rgba(6, 182, 212, 0.3);
}

.cursor-ring.enlarged {
  width: 52px;
  height: 52px;
  margin-left: -26px;
  margin-top: -26px;
  border-color: rgba(6, 182, 212, 0.4);
  background: rgba(6, 182, 212, 0.05);
}

/* --- Water Drop Ripple Canvas --- */
.ripple-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
}

/* Hide custom cursor & ripples on touch/mobile devices */
@media (pointer: coarse) {
  .cursor-dot,
  .cursor-ring {
    display: none !important;
  }
  .ripple-canvas {
    display: none !important;
  }
}
</style>
