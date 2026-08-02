This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Portfolio UX notes

- The hero portrait uses `public/Mahadi Indra - LinkedIn Photo.png` through `next/image`, with an intentional upper-center crop and descriptive alternative text.
- `Download CV` is available in the hero and contact section. It is intentionally omitted from the footer, which stays focused on copyright and social links.
- `MouseGlow` is a decorative pointer-following accent rendered with CSS custom properties and `requestAnimationFrame`. It uses no WebGL or cursor replacement, has `pointer-events: none`, and is disabled for coarse pointers and `prefers-reduced-motion` users.

## Styling direction

The site uses editorial brutalism: oversized type, a rigid grid, sharp rules, flat theme-aware surfaces, and a warm paper, ink, and signal-orange palette. Reusable foundations live in global CSS, while local one-off composition may use Tailwind utilities.
