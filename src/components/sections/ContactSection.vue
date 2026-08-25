<script setup lang="ts">
import { ref } from 'vue'
import { personalInfo } from '@/data/portfolioData'
import { Mail, Linkedin, Globe, Send, Heart, FileDown } from 'lucide-vue-next'

const formName = ref('')
const formEmail = ref('')
const formMessage = ref('')

function handleSubmit() {
  const subject = encodeURIComponent(`Portfolio Contact from ${formName.value}`)
  const body = encodeURIComponent(
    `Name: ${formName.value}\nEmail: ${formEmail.value}\n\n${formMessage.value}`
  )
  window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank')
}
</script>

<template>
  <section id="contact" class="py-24 px-4 sm:px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title reveal-title">
          <span class="text-gradient">Get in Touch</span>
        </h2>
        <p class="section-subtitle reveal-subtitle">Have a project in mind? Let's talk!</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Info -->
        <div class="space-y-4">
          <a
            :href="`mailto:${personalInfo.email}`"
            class="glass-card p-5 flex items-center gap-4 group"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style="background: var(--gradient-accent)"
            >
              <Mail :size="22" color="#fff" />
            </div>
            <div>
              <p class="text-xs font-mono mb-0.5" style="color: var(--text-secondary)">Email</p>
              <p class="text-sm font-medium" style="color: var(--text-primary)">
                {{ personalInfo.email }}
              </p>
            </div>
          </a>

          <a
            :href="`https://${personalInfo.linkedin}`"
            target="_blank"
            rel="noopener noreferrer"
            class="glass-card p-5 flex items-center gap-4 group"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style="background: var(--gradient-accent)"
            >
              <Linkedin :size="22" color="#fff" />
            </div>
            <div>
              <p class="text-xs font-mono mb-0.5" style="color: var(--text-secondary)">LinkedIn</p>
              <p class="text-sm font-medium" style="color: var(--text-primary)">
                {{ personalInfo.linkedin }}
              </p>
            </div>
          </a>

          <a
            :href="`https://${personalInfo.website}`"
            target="_blank"
            rel="noopener noreferrer"
            class="glass-card p-5 flex items-center gap-4 group"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style="background: var(--gradient-accent)"
            >
              <Globe :size="22" color="#fff" />
            </div>
            <div>
              <p class="text-xs font-mono mb-0.5" style="color: var(--text-secondary)">Website</p>
              <p class="text-sm font-medium" style="color: var(--text-primary)">
                {{ personalInfo.website }}
              </p>
            </div>
          </a>

          <a
            id="btn-download-cv-contact"
            href="/Mohammad_Al_Furqon_CV.pdf"
            download="Mohammad_Al_Furqon_CV.pdf"
            class="glass-card p-5 flex items-center gap-4 group"
            style="border-color: var(--accent-cyan); border-style: dashed"
          >
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style="background: var(--gradient-accent)"
            >
              <FileDown :size="22" color="#fff" />
            </div>
            <div>
              <p class="text-xs font-mono mb-0.5" style="color: var(--text-secondary)">Resume / CV</p>
              <p class="text-sm font-medium" style="color: var(--accent-cyan)">
                Download PDF
              </p>
            </div>
          </a>
        </div>

        <!-- Contact Form -->
        <form class="glass-card p-6 md:p-8 space-y-4" @submit.prevent="handleSubmit">
          <div>
            <label
              for="contact-name"
              class="block text-xs font-mono mb-1.5"
              style="color: var(--text-secondary)"
            >
              Your Name
            </label>
            <input
              id="contact-name"
              v-model="formName"
              type="text"
              required
              placeholder="John Doe"
              class="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-2"
              style="background: var(--bg-secondary); color: var(--text-primary); border: 1px solid var(--card-border); --tw-ring-color: var(--accent-cyan)"
            />
          </div>

          <div>
            <label
              for="contact-email"
              class="block text-xs font-mono mb-1.5"
              style="color: var(--text-secondary)"
            >
              Your Email
            </label>
            <input
              id="contact-email"
              v-model="formEmail"
              type="email"
              required
              placeholder="john@example.com"
              class="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-2"
              style="background: var(--bg-secondary); color: var(--text-primary); border: 1px solid var(--card-border); --tw-ring-color: var(--accent-cyan)"
            />
          </div>

          <div>
            <label
              for="contact-message"
              class="block text-xs font-mono mb-1.5"
              style="color: var(--text-secondary)"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              v-model="formMessage"
              rows="4"
              required
              placeholder="Let's build something great together..."
              class="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 resize-none focus:ring-2"
              style="background: var(--bg-secondary); color: var(--text-primary); border: 1px solid var(--card-border); --tw-ring-color: var(--accent-cyan)"
            />
          </div>

          <button
            id="btn-send-message"
            type="submit"
            class="btn-primary w-full flex items-center justify-center gap-2"
          >
            <Send :size="18" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-8 px-4 text-center" style="border-top: 1px solid var(--card-border)">
    <p class="text-sm flex items-center justify-center gap-1.5" style="color: var(--text-secondary)">
      Built with
      <Heart :size="14" style="color: var(--accent-cyan)" class="animate-pulse" />
      by
      <span class="font-semibold" style="color: var(--text-primary)">
        {{ personalInfo.name }}
      </span>
      · {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>
