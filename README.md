# Arya Sekhar Roy — Portfolio

A cinematic, scroll-driven developer portfolio built with Next.js 16, React 19, Three.js, React Three Fiber, GSAP ScrollTrigger, Framer Motion, and Tailwind CSS.

Personal content lives in a single file: `src/data/site.ts`. Update name, bio, skills, projects, timeline, and social links there.

The resume PDF is served from `public/resume.pdf`.

## Stack

- Next.js 16 / React 19 / TypeScript
- Three.js + React Three Fiber + Drei
- GSAP ScrollTrigger
- Framer Motion
- Tailwind CSS 4
- Lucide React 

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # local development
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Customize

1. Edit `src/data/site.ts`.
2. Replace `public/resume.pdf` with an updated resume.
3. Projects, skills, and timeline are arrays — add or remove items without touching layout code.

## Notes

- The 3D scene lazy-loads on the client, uses instanced particles, Adaptive DPR, and a WebGL fallback.
- `prefers-reduced-motion` reduces camera motion and skips pinned horizontal scroll.
- The contact form validates on `/api/contact` and opens a prefilled `mailto:` to `royarya431@gmail.com`. Connect Resend or another provider later if you want server-side delivery.
- Copy follows `Arya_Sekhar_Roy_Resume.pdf`. Professional roles were not listed, so none are invented.

## Deploy

The app is ready for Vercel:

```bash
npm i -g vercel
vercel
```

Or import the GitHub repository in the Vercel dashboard and deploy with the Next.js defaults (`npm run build`, output `.next`).
