# System Specification: Glacier/Ice Interactive Portfolio (`instruction.md`)
# Architecture: Vue 3 + Vite (Single Page Application / Static Site)

## 1. Project Overview & Concept
* **Theme:** "Glacier & Frost" (Es, Kristal Glasial, Refraksi Cahaya).
* **Palette:**
  * **Dark Mode (Deep Glacier):** Background `#070F1E` - `#0B192C`, Accent Cyan `#00D2FF`, Frost Glow `#A0E7E5`, Surface Glass `rgba(11, 25, 44, 0.65)`.
  * **Light Mode (Alpine Snow):** Background `#F4F9FD` - `#EAF2F8`, Accent Azure `#0077B6`, Frost Highlight `#90E0EF`, Surface Glass `rgba(255, 255, 255, 0.7)`.
* **Architecture:** 100% Client-Side SPA (Static Site / No Backend required) built with Vue 3, Vite, Pinia, Tailwind CSS, and TresJS / Three.js.

---

## 2. Onboarding Modal & Mode Switcher
Saat website pertama kali diakses, tampilkan modal pop-up glassmorphism untuk memilih antarmuka:

```text
+-------------------------------------------------------------+
|                     WELCOME TO MY REALM                     |
|                 Choose Your Visual Experience               |
|                                                             |
|   [ 🧊 Immersive 3D Experience ]     [ ⚡ Clean & Fast View ]   |
|   • WebGL, Interactive Ice Shaders   • High Accessibility   |
|   • Physics & Cursor Dynamics        • Instant Load Time    |
|   • Best on Desktop / Dedicated GPU  • Ideal for Quick Scan |
|                                                             |
|           [x] Remember choice on this device                |
+-------------------------------------------------------------+
```

* **Sticky Toggle:** Toggle switch permanen di Navbar kanan atas untuk berpindah mode kapan saja.
* **Storage:** Simpan pilihan user di `localStorage` melalui Pinia + VueUse (`useStorage`).

---

## 3. Dual Interface System

### Mode A: Immersive 3D Experience (Creative / WebGL Mode)
* **Hero Canvas:** Objek kristal es / pecahan glasial 3D interaktif menggunakan **TresJS (`@tresjs/core`)** atau direct **Three.js** canvas mount.
* **Visual Effects:** Refraksi material es (Physical Glass Material / Custom GLSL Shader), kilauan cahaya kursor, dan partikel kabut/salju (*snow dust particles*).
* **Motion & Scrolling:** GSAP + ScrollTrigger terintegrasi dengan Lenis smooth scroll.

### Mode B: Clean & Fast View (Recruiter & Performance Mode)
* **Rendering:** Menonaktifkan WebGL canvas dan rendering loop sepenuhnya untuk menghemat daya dan CPU/GPU.
* **Layout:** Tampilan glassmorphism bersih, tipografi tajam, dan kartu proyek terstruktur rapi.
* **Target:** 100/100 Lighthouse Performance, instan FCP, aksesibilitas tinggi untuk CV scanning.

---

## 4. Tech Stack (Vue 3 + Vite)
* **Build Tool & Framework:** Vite + Vue 3 (Composition API `<script setup lang="ts">`)
* **3D / WebGL:** TresJS (`@tresjs/core`, `@tresjs/cientos`) ATAU Three.js native
* **State Management:** Pinia (Experience mode: `'immersive'` | `'clean'`)
* **Styling & Theme:** Tailwind CSS + `@vueuse/core` (`useDark`, `useToggle`)
* **Animation & Scroll:** GSAP, ScrollTrigger, `@studio-freight/lenis` (atau `lenis`)
* **Icons:** `@iconify/vue` atau `lucide-vue-next`

---

## 5. File Structure
```text
├── public/
│   ├── models/
│   │   └── glacier_crystal.glb
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── main.css
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── IceCanvas.vue          # Three.js / TresJS Mount
│   │   │   ├── CrystalModel.vue       # 3D Mesh & Materials
│   │   │   └── SnowParticles.vue      # Floating Frost Particles
│   │   ├── ui/
│   │   │   ├── ModeModal.vue          # Entry popup dialog
│   │   │   ├── Navbar.vue             # Header + Dual Mode & Dark Mode switch
│   │   │   ├── ProjectCard.vue        # Glassmorphic Project Card
│   │   │   └── ExperienceItem.vue     # Timeline career node
│   │   └── sections/
│   │       ├── HeroSection.vue
│   │       ├── AboutSection.vue
│   │       ├── ProjectsSection.vue
│   │       ├── ExperienceSection.vue
│   │       └── ContactSection.vue
│   ├── stores/
│   │   └── experienceStore.ts         # Pinia mode state
│   ├── data/
│   │   └── portfolioData.ts           # Centralized CV & Profile data
│   ├── App.vue
│   └── main.ts
├── index.html
├── vite.config.ts
└── tailwind.config.js
```
