# Group portfolio (projectnii)

Next.js app for a kawaii-styled school group portfolio: member tabs, profiles, skills, and contact blocks.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19, TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for section transitions

## Project layout

| Path | Role |
|------|------|
| `app/page.ts` | Home UI (client component). |
| `app/layout.ts` | Root layout, metadata, Geist fonts, global styles import. |
| `app/globals.css` | Global and theme styles. |
| `public/` | Images and static assets. |

App route modules use **`.ts` only** (no `.tsx`). UI is built with React `createElement` because TypeScript does not allow JSX syntax in `.ts` files.

## Getting Started

Install dependencies, then run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Edit `app/page.ts` or `app/layout.ts`; the dev server hot-reloads on save.

Other commands:

```bash
npm run build   # production build
npm run start   # run production server
npm run lint    # ESLint
```

## Fonts

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) with [Geist](https://vercel.com/font).

## Deploy

The usual path is [Vercel](https://vercel.com/new). See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
