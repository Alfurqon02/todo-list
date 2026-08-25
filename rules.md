# Development Guidelines & Rules: Ice/Frost Portfolio (`rules.md`)
# Framework: Vue 3 + Vite (Composition API)

## 1. UX, Accessibility & Onboarding Rules
* **Rule 1.1 (Universal Escape Route):** Pengguna HARUS selalu dapat berpindah mode antara "Immersive 3D" dan "Clean / Fast View" kapan saja melalui tombol di Navbar.
* **Rule 1.2 (Reduced Motion):** Jika sistem mendeteksi `prefers-reduced-motion: reduce` melalui `usePreferredReducedMotion()`, otomatis default ke mode "Clean & Fast View".
* **Rule 1.3 (Text Legibility):** Semua teks informasi penting (deskripsi diri, pengalaman, pencapaian, kontak) WAJIB dirender sebagai elemen HTML semantik standar (`<h1>`, `<p>`, `<a>`, `<article>`), BUKAN dirender ke dalam tekstur/mesh 3D.

---

## 2. Performance & WebGL Memory Lifecycle
* **Rule 2.1 (Component Unmount & Memory Cleanup):** Saat beralih dari mode Immersive ke Clean, komponen WebGL HARUS memanggil `renderer.dispose()`, `geometry.dispose()`, `material.dispose()`, dan menghentikan loop `requestAnimationFrame` secara paksa untuk mencegah *memory leak*.
* **Rule 2.2 (Low-End Device Fallback):** Lakukan deteksi FPS sederhana. Jika FPS < 30 secara konsisten, berikan *toast notification* yang menyarankan pengguna untuk berpindah ke "Clean View".
* **Rule 2.3 (3D Asset Constraints):**
  * Ukuran model 3D (`.glb`): `< 2 MB`.
  * Poligon: `< 25,000` triangles.
  * Tekstur: Maksimal `1024x1024` format kompresi (WEBP).

---

## 3. Theme & CSS Variables (Glacier Palette)

```css
:root {
  --bg-primary: #f4f9fd;
  --bg-secondary: #e2eef7;
  --text-primary: #0a2540;
  --text-secondary: #425466;
  --accent-cyan: #0077b6;
  --accent-ice: #00b4d8;
  --card-bg: rgba(255, 255, 255, 0.75);
  --card-border: rgba(0, 119, 182, 0.15);
  --frost-blur: blur(12px);
}

.dark {
  --bg-primary: #070f1e;
  --bg-secondary: #0b192c;
  --text-primary: #f0f8ff;
  --text-secondary: #94a3b8;
  --accent-cyan: #00d2ff;
  --accent-ice: #90e0ef;
  --card-bg: rgba(11, 25, 44, 0.65);
  --card-border: rgba(0, 210, 255, 0.2);
  --frost-blur: blur(16px);
}
```

---

## 4. Code Structure & Agent Rules
* **Rule 4.1 (Centralized CV Data):** Jangan menulis data *hardcode* di dalam komponen Vue. Seluruh data dari CV harus berada di dalam `src/data/portfolioData.ts`.
* **Rule 4.2 (Zero Backend Dependency):** Aplikasi harus dirancang agar *stateless* dan murni di-render di sisi klien tanpa API database eksternal.
* **Rule 4.3 (Composition API Standard):** Selalu gunakan `<script setup lang="ts">` untuk seluruh *component file* Vue.
