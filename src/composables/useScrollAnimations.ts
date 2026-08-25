import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  const splits: SplitType[] = []

  onMounted(async () => {
    await nextTick()
    setTimeout(initAnimations, 200)
  })

  function initAnimations() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // =============================================
    // 1. HERO — Cinematic text reveal
    // =============================================
    const heroWords = document.querySelectorAll('.hero-word')
    heroWords.forEach((word) => {
      const split = new SplitType(word as HTMLElement, { types: 'chars' })
      splits.push(split)

      if (split.chars) {
        gsap.set(split.chars, { opacity: 0, y: 60, rotateX: -90 })
        gsap.to(split.chars, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: 'power4.out',
          delay: 0.5,
        })
      }
    })

    // Hero subtitle word reveal
    const heroSubtitle = document.querySelector('#hero-subtitle')
    if (heroSubtitle) {
      const split = new SplitType(heroSubtitle as HTMLElement, { types: 'words' })
      splits.push(split)

      if (split.words) {
        gsap.set(split.words, { opacity: 0, y: 30 })
        gsap.to(split.words, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.04,
          ease: 'power3.out',
          delay: 0.9,
        })
      }
    }

    // Hero tagline
    const heroTagline = document.querySelector('#hero-tagline')
    if (heroTagline) {
      gsap.set(heroTagline, { opacity: 0, y: 25 })
      gsap.to(heroTagline, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        delay: 1.2,
      })
    }

    // Hero CTA buttons stagger
    const heroCtas = document.querySelectorAll('#hero-ctas > *')
    if (heroCtas.length) {
      gsap.set(heroCtas, { opacity: 0, y: 25 })
      gsap.to(heroCtas, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 1.4,
      })
    }

    // Hero badge
    const heroBadge = document.querySelector('#hero-badge')
    if (heroBadge) {
      gsap.set(heroBadge, { opacity: 0, scale: 0.85 })
      gsap.to(heroBadge, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(2)',
        delay: 0.3,
      })
    }

    // =============================================
    // 2. HERO PARALLAX — Elements move on scroll out
    // =============================================
    const heroContent = document.querySelector('#hero-content')
    if (heroContent) {
      gsap.to(heroContent, {
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
        y: -120,
        opacity: 0,
        scale: 0.94,
        ease: 'none',
      })
    }

    // =============================================
    // 3. SECTION TITLES — Smooth scroll reveal
    // =============================================
    document.querySelectorAll<HTMLElement>('.reveal-title').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
    })

    // =============================================
    // 4. SECTION SUBTITLES — Slide up on scroll
    // =============================================
    document.querySelectorAll<HTMLElement>('.reveal-subtitle').forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: 'power3.out',
      })
    })

    // =============================================
    // 5. GLASS CARDS — Smooth reveal with scale
    // =============================================
    document.querySelectorAll<HTMLElement>('.reveal-card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
        y: 45,
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        ease: 'power2.out',
      })
    })

    // =============================================
    // 6. EXPERIENCE ITEMS — Alternating side slide
    // =============================================
    document.querySelectorAll<HTMLElement>('.experience-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
        x: i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      })
    })

    // =============================================
    // 7. SKILL TAGS — Elastic pop in
    // =============================================
    document.querySelectorAll<HTMLElement>('.reveal-tag').forEach((tag) => {
      gsap.from(tag, {
        scrollTrigger: {
          trigger: tag,
          start: 'top 92%',
          toggleActions: 'play none none reverse',
        },
        scale: 0,
        opacity: 0,
        rotation: gsap.utils.random(-10, 10),
        duration: 0.4,
        ease: 'back.out(2.2)',
      })
    })

    // =============================================
    // 8. DIVIDERS — Scale from center
    // =============================================
    document.querySelectorAll<HTMLElement>('.reveal-divider').forEach((divider) => {
      gsap.from(divider, {
        scrollTrigger: {
          trigger: divider,
          start: 'top 92%',
          toggleActions: 'play none none reverse',
        },
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.out',
      })
    })

    // =============================================
    // 9. COUNTER ANIMATIONS — Numbers count up
    // =============================================
    document.querySelectorAll<HTMLElement>('[data-count-to]').forEach((el) => {
      const target = parseFloat(el.dataset.countTo || '0')
      const decimals = (el.dataset.countTo || '').includes('.') ? 2 : 0
      const obj = { val: 0 }

      gsap.to(obj, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        val: target,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate() {
          el.textContent = obj.val.toFixed(decimals)
        },
      })
    })

    // =============================================
    // 10. CONTACT SECTION — Card reveals
    // =============================================
    const contactCards = document.querySelectorAll<HTMLElement>('#contact .glass-card')
    contactCards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out',
      })
    })
  }

  onBeforeUnmount(() => {
    splits.forEach((s) => s.revert())
    ScrollTrigger.getAll().forEach((t) => t.kill())
  })
}
