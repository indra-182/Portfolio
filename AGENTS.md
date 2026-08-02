# Portfolio Website

Tech stack: Next.js 16 App Router, TypeScript, Tailwind CSS v4, Framer Motion (lazy), Lucide React.

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

<!-- CODEGRAPH_START -->
## CodeGraph

In repositories indexed by CodeGraph (a `.codegraph/` directory exists at the repo root), reach for it BEFORE grep/find or reading files when you need to understand or locate code:

- **MCP tool** (when available): `codegraph_explore` answers most code questions in one call — the relevant symbols' verbatim source plus the call paths between them, including dynamic-dispatch hops grep can't follow. Name a file or symbol in the query to read its current line-numbered source. If it's listed but deferred, load it by name via tool search.
- **Shell** (always works): `codegraph explore "<symbol names or question>"` prints the same output.

If there is no `.codegraph/` directory, skip CodeGraph entirely — indexing is the user's decision.
<!-- CODEGRAPH_END -->

## Focused UX behavior

- The site-wide visual language is editorial brutalism. Keep reusable tokens, resets, shared layout primitives, preference fallbacks, and interaction effects in global CSS. Use Tailwind utilities for local one-off composition.
- The hero uses `public/Mahadi Indra - LinkedIn Photo.png` with `next/image`, an intentional portrait crop, and descriptive alternative text.
- Keep the `Download CV` link in the hero and contact section. The global footer contains copyright and social links only.
- `MouseGlow` is decorative and pointer-transparent. It follows fine-pointer movement with CSS custom properties and `requestAnimationFrame`, but must remain disabled for coarse pointers and `prefers-reduced-motion`.
