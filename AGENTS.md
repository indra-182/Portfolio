# Portfolio Website

Tech stack: Next.js 16 App Router, TypeScript, Tailwind CSS v4, Framer Motion (lazy), Lucide React.

## Style: Neobrutalism

- Bold black borders (3-4px), flat colors, heavy typography, no gradient/rounded
- CSS variables in src/styles/tokens.css
- Utility classes in src/styles/globals.css: .neo-btn, .neo-card, .neo-input, .neo-tag, .neo-section-title, .neo-prose

## Structure

- App Router under `src/app/` (tsconfig alias `@/*` → `./src/*`)
- SSG for all static sections
- Blog Section: ISR fetch from `https://blog-mahadi-indra.vercel.app/api/posts?limit=6`
  - Server Component, timeout 3s, fallback empty/cache
  - Card click → redirect to `https://blog-mahadi-indra.vercel.app/posts/[slug]`
- Dark/Light mode via next-themes (attribute="class", defaultTheme="system")
- Data files in src/data/\*.ts for Skills, Experience, Testimonials
- Contact form: zod validation, POST to src/app/api/contact/route.ts

## Routes

- `/` — homepage, all sections scroll
- `/api/contact` — POST handler (at src/app/api/contact/route.ts)
- `/#blog` — anchor to Blog Section
- `/api/revalidate` — POST (opsional, deploy hook trigger)

## API Example

```typescript
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  type: "article" | "curation";
  coverImage?: string;
  date: string;
  category: string;
  tags: string[];
  readingTimeMinutes: number;
  readingTime: string;
  url: string;
}
```

Fetch in `src/lib/api/blog.ts`. Use `unstable_cache` or fetch with `next: { revalidate: 900 }`.

## Constraint

- Neobrutalism style EXACT: bold black borders (3-4px), box-shadow: 5px 5px 0px 0px #000, no border-radius, no gradients, uppercase headings, heavy font weights
- Mobile-first responsive
- All sections on ONE page (scroll), no subpages except /projects/[slug] (optional)
