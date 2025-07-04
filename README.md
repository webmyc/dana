# Dana Dragomirescu – Authentic Connection

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run locally:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   npm run start
   ```

## Environment
- No special environment variables required for local development.
- All copy and translations are loaded from `/locales/*.json`.
- Images are in `/public/assets/`.

## Deployment (Vercel)
1. Push this repo to GitHub.
2. Connect to [Vercel](https://vercel.com/), import the repo.
3. Set build command: `npm run build` and output: `.`
4. Set environment variable `NEXT_PUBLIC_VERCEL_URL` if needed for canonical URLs.
5. Vercel auto-detects Next.js and deploys.

## Features
- Next.js 14, TypeScript, Tailwind CSS, Framer Motion, i18next
- Fully responsive, accessible, and SEO-optimized
- All copy and alt text from translation JSONs
- Light/dark mode toggle, language switcher
- Optimized images with next/image
- Animations and interactions via Framer Motion

## Lighthouse
- Target 90+ across all metrics (Performance, Accessibility, Best Practices, SEO)

---

For any issues, open a GitHub issue or contact the maintainer.
