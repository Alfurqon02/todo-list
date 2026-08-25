# 🧊 Agentic IDE Instruction Prompt (`claude.md`)

Halo Agent! Tolong bantu saya membangun website portofolio interaktif yang modern, responsif, dan ringan. Arsitektur proyek menggunakan **Vue 3 dan Vite** (SPA, tanpa Backend).

Saya telah menyediakan 3 dokumen penting di *workspace* ini. Mohon baca secara saksama sebelum kamu mulai meng-generate struktur *code*:
1. **`instruction.md`**: Mengatur arsitektur sistem, direktori file, dan konsep *dual-interface* (Immersive WebGL vs Clean Mode).
2. **`rules.md`**: Memuat aturan optimasi performa (memory cleanup WebGL), batasan aksesibilitas, dan *design tokens* CSS (Mode Gelap/Terang).
3. **`Mohammad_Al_Furqon_CV.md`**: Berisi seluruh isi *Curriculum Vitae* (pendidikan, pengalaman kerja multi-tahun, *achievement*, dan *skill*).

### 🛠️ Langkah-Langkah Eksekusi yang Wajib Diikuti:
1. **Parsing CV ke TypeScript:** Mulailah dengan membuat file konfigurasi di `src/data/portfolioData.ts`. Konversikan seluruh isi `Mohammad_Al_Furqon_CV.md` menjadi objek TypeScript terstruktur (`personalInfo`, `education`, `experiences`, `achievements`, `organizations`, `skills`).
2. **Setup Lingkungan Vite:** Konfigurasikan proyek dengan Vue 3, Vite, Tailwind CSS, Pinia, dan VueUse. Tambahkan juga instalasi `tresjs` atau `three` untuk keperluan WebGL nanti.
3. **Membangun Komponen Inti:**
   - Buat `ModeModal.vue` sebagai pop-up pertama untuk meminta user memilih *Immersive 3D Experience* atau *Clean & Fast View*.
   - Buat *State Management* (di Pinia) untuk mencatat mode yang dipilih dan sinkronisasikan ke `localStorage` (via VueUse).
4. **Implementasi UI & 3D:**
   - Bangun `IceCanvas.vue` untuk mode *Immersive*. Buat visual es/kristal *low-poly* dengan shader atau material kaca yang membiaskan cahaya (*refraction*).
   - Render antarmuka informasi (Hero, Experience Timeline, Contact) menggunakan format *glassmorphism* yang elegan, mengambil data dari `portfolioData.ts`.
5. **Quality Control:** Pastikan perpindahan mode 3D ke Clean View benar-benar menghapus status memori WebGL (`dispose()`) sesuai panduan di `rules.md`.

Silakan mulai dari langkah pertama (Data Parsing dan Setup).
