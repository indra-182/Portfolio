# Spec: Portfolio Website — Ekosistem Terhubung

**Versi:** 1.0
**Tanggal:** 25 Juli 2026
**Pemilik Produk:** Indra (Frontend Engineer)

---

## 0. Ringkasan Eksekutif

Portfolio sebagai consumer dalam ekosistem 2 project. Blog (sudah live di `blog-mahadi-indra.vercel.app`) sebagai provider konten via `/api/posts`.

Domain: `indra.dev` (nanti atur). Stack: Next.js 16 App Router + TypeScript + Tailwind CSS v4. Style: neobrutalism (konsisten dengan Blog).

Blog Section di portfolio fetch dari `https://blog-mahadi-indra.vercel.app/api/posts` via ISR (revalidate 15 menit). Saat deploy, Vercel Deploy Hook dari Blog trigger rebuild portfolio.

---

## 1. Feature List

### A. Hero Section

- Nama, headline (role + value proposition)
- CTA ganda: "Lihat Proyek" & "Hubungi Saya"
- Animasi ringan (opsional, lazy-load, jangan block LCP)
- Foto profil memakai `public/Mahadi Indra - LinkedIn Photo.png` via `next/image`, dengan crop portrait upper-center dan alt text deskriptif

### B. About Section

- Narasi singkat 3-4 paragraf
- Highlight angka: years, projects, tech stack
- Link download CV (PDF statis)

### A.1. Focused UX adjustments

- `Download CV` tersedia di hero dan contact section, tetapi tidak di global footer. Footer mempertahankan copyright dan social links.
- `MouseGlow` memberikan accent halo ringan yang mengikuti pointer fine dengan CSS custom properties dan `requestAnimationFrame`.
- Interaksi glow bersifat dekoratif dengan `pointer-events: none`, tidak mengganti cursor, dan tidak menghalangi navigasi atau contact form.
- Glow nonaktif pada coarse/touch pointers dan saat `prefers-reduced-motion` aktif.

### A.2. Visual redesign

- Homepage and project case-study routes share an editorial brutalist visual system with a fixed desktop section rail and mobile overlay drawer.
- The palette uses warm paper, near-black ink, and signal orange. Reusable foundations stay in global CSS, while local one-off composition may use Tailwind utilities.
- Sharp rules, flat surfaces, oversized type, and restrained offset shadows define the system. Rounded cards and atmospheric gradients are not used outside the pointer glow.

### C. Skills Section

- Kategori: Languages, Frameworks, Tools, Cloud/DevOps, AI/Agentic
- Qualitative level: Familiar / Proficient / Advanced
- Data: local `src/data/skills.ts`

### D. Experience Section

- Timeline vertikal: perusahaan, role, periode, bullet result-oriented
- Data: `src/data/experience.ts`

### E. Projects Section

- Grid card: thumbnail, judul, deskripsi, tech tags, link demo & repo
- Filter by tag (client-side, no reload)
- Detail expand (modal/drawer) atau halaman `/projects/[slug]`

### F. Testimonials Section

- Carousel/grid quote: nama, role, perusahaan, foto, kutipan
- Data: local JSON statis

### G. Blog Section (Dinamis — API dari Blog)

- N post terbaru (judul, excerpt, tanggal, tag, reading time)
- Fetch dari `GET https://blog-mahadi-indra.vercel.app/api/posts?limit=6` via ISR
- Klik card → redirect ke `https://blog-mahadi-indra.vercel.app/posts/[slug]`
- Fallback UI jika API down: skeleton → pesan graceful

### H. Contact Section

- Form: nama, email, pesan
- Validasi client + server (zod)
- Kirim via Resend / SendGrid — atau fallback link langsung email/LinkedIn

### I. Cross-cutting

- Dark/Light mode (next-themes, konsisten dengan Blog)
- Responsive mobile-first
- Neobrutalism styling
- Sticky navbar + smooth-scroll + active section highlight
- Vercel Analytics

---

## 2. User Stories

| ID    | Sebagai           | Saya ingin                                            | Agar                          |
| ----- | ----------------- | ----------------------------------------------------- | ----------------------------- |
| P1-01 | Recruiter/HR      | melihat ringkasan skill & pengalaman <10 detik scroll | cepat nilai kecocokan         |
| P1-02 | Hiring manager    | buka detail proyek dengan link demo & repo            | nilai kualitas kerja          |
| P1-03 | Calon klien       | baca artikel blog terbaru tanpa keluar portfolio      | nilai kedalaman expertise     |
| P1-04 | Pengunjung        | ganti dark/light mode                                 | nyaman baca sesuai preferensi |
| P1-05 | Pengunjung mobile | akses semua section layout rapi                       | pengalaman setara desktop     |
| P1-06 | Recruiter         | kirim pesan lewat form contact                        | hubungi tanpa app email       |
| P1-07 | Pengunjung        | halaman tetap cepat walau API blog down               | ga liat blank page            |

---

## 3. Architecture

```
User → indra.dev (Portfolio, SSG + ISR)
         │
         ├── Hero, About, Skills, Experience, Projects, Testimonials
         │   └── Static data from src/data/*.ts
         │
         ├── Blog Section
         │   └── ISR fetch → blog-mahadi-indra.vercel.app/api/posts?limit=6
         │       └── Fallback: empty state (cache stale sebelumnya)
         │
         ├── Contact Form
         │   └── POST /api/contact → Resend/SendGrid (atau fallback email)
         │
         └── Vercel Deploy Hook (dari Blog → trigger rebuild)
```

### Data Flow — Blog Section

```
1. User request indra.dev
2. Next.js check cache ISR untuk section Blog
3. Cache stale → trigger background revalidation:
   fetch GET blog-mahadi-indra.vercel.app/api/posts?limit=6
4. Sukses → update cache, next request dapet versi baru
5. Gagal/timeout → serve cache lama, log error
6. Build tidak gagal total walau API down
```

---

## 4. Kontrak API — Blog

```
GET https://blog-mahadi-indra.vercel.app/api/posts?limit=6

Response:
{
  "data": [{
    "slug": "...",
    "title": "...",
    "excerpt": "...",
    "type": "article" | "curation",
    "coverImage": "...",
    "date": "...",
    "category": "...",
    "tags": [...],
    "readingTimeMinutes": 7,
    "readingTime": "7 min read",
    "url": "https://blog.indra.dev/posts/..."
  }],
  "meta": { "page": 1, "limit": 6, "total": 42, "hasNextPage": true }
}
```

---

## 5. Tech Stack

| Layer      | Pilihan                       | Rationale                              |
| ---------- | ----------------------------- | -------------------------------------- |
| Framework  | Next.js 16 App Router         | ISR, RSC, image opt, 1-klik Vercel     |
| Bahasa     | TypeScript                    | Type-safety buat kontrak API Blog      |
| Styling    | Tailwind CSS v4 + neo classes | Neobrutalism, purge unused CSS         |
| Animasi    | Framer Motion (lazy-load)     | Micro-interaction tanpa sacrifice perf |
| Icon       | Lucide React                  | Ringan, tree-shakeable                 |
| Form       | React Hook Form + Zod         | Type-safe validasi                     |
| Email      | Resend                        | Native Vercel                          |
| Deployment | Vercel                        | ISR native, edge CDN                   |
| Analytics  | Vercel Analytics              | Zero-config                            |
| Linting    | ESLint 9 + Prettier           | Konsisten                              |

---

## 6. Component Tree

```markdown
src/
├── app/
│ ├── layout.tsx (ThemeProvider, Navbar, Footer, Analytics)
│ ├── page.tsx (compose semua section)
│ └── api/contact/route.ts (POST form handler)
├── components/
│ ├── MouseGlow.tsx (decorative fine-pointer interaction)
│ ├── Navbar.tsx (fixed top, smooth-scroll links)
│ ├── ThemeToggle.tsx (sun/moon, next-themes)
│ ├── Footer.tsx (copyright, social links)
│ └── sections/
│ ├── Hero.tsx
│ ├── About.tsx
│ ├── Skills.tsx
│ ├── Experience.tsx
│ ├── Projects.tsx
│ ├── Testimonials.tsx
│ ├── BlogSection.tsx (Server Component — fetch API)
│ │ ├── BlogPostCard.tsx
│ └── Contact.tsx
├── data/
│ ├── skills.ts
│ ├── experience.ts
│ └── testimonials.ts
├── lib/
│ └── api/blog.ts (fetchLatestPosts, typed)
└── styles/
└── tokens.css (neo CSS variables)
```

---

## 7. Route Design

| Route          | Deskripsi                       | Rendering        |
| -------------- | ------------------------------- | ---------------- |
| `/`            | Homepage — semua section scroll | SSG              |
| `/api/contact` | POST form contact               | Server (dynamic) |
| `/#blog`       | Anchor ke Blog Section          | —                |

---

## 8. Neobrutalism Style (Shared dengan Blog)

- Bold black border (3-4px)
- Flat colors, no gradient, no rounded
- Heavy typography, uppercase headings
- Shadow keras: `box-shadow: 5px 5px 0px 0px #000`
- Palette di CSS variables:
  - `--neo-bg: #FFFDF7`, `--neo-text: #1A1A1A`
  - `--neo-border: #000000`
  - `--neo-accent-1: #FF6B35` (orange)
  - `--neo-accent-2: #004E98` (blue)
  - `--neo-accent-3: #FFD700` (yellow)

---

## 9. SEO Strategy

- Semantic HTML di semua section
- Meta tags via `generateMetadata()`
- JSON-LD: `Person` schema di homepage
- Canonical URL eksplisit
- `robots.ts` allow full crawl
- Blog Section: excerpt only + link keluar → no SEO cannibalization

---

## 10. Performance Budget

| Metrik     | Target                |
| ---------- | --------------------- |
| LCP        | < 2.0s                |
| CLS        | < 0.05                |
| TTFB       | < 200ms (Vercel edge) |
| Total JS   | < 150KB gzip          |
| Lighthouse | 95+ all categories    |

Khusus Blog Section:

- Timeout fetch API: 3 detik. Gagal → serve cache/fallback. Build tetap lanjut.

---

## 11. Milestone

| Fase                           | Scope                                                                                           | Agent             |
| ------------------------------ | ----------------------------------------------------------------------------------------------- | ----------------- |
| **Phase 1 — Setup**            | Init project, tokens.css, globals.css, Navbar, Footer, Theme, Blog section skeleton (fetch ISR) | Hermes → OpenCode |
| **Phase 2 — Content Sections** | Hero, About, Skills, Experience, Projects, Testimonials, Contact                                | OpenCode          |
| **Phase 3 — Polish + Deploy**  | SEO, performance, deploy Vercel, domain                                                         | OpenCode          |
