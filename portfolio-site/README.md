# Pat Portfolio

A modern portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and shadcn-style local UI components.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- shadcn-style component structure in `src/components/ui`

## Project Structure

- `src/app` - app router pages, layout, and global styles
- `src/components/ui` - reusable UI building blocks and the portfolio hero section
- `src/components/demo.tsx` - page-level entry wrapper for the hero
- `src/lib/utils.ts` - shared `cn()` utility
- `components.json` - shadcn CLI-compatible aliases and style config

## Getting Started

Run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Notes

- The project alias `@/*` points to `src/*`, so the effective shadcn UI path is `src/components/ui`.
- Production build has been verified locally with `npm run build`.
- ESLint currently reports warnings for two raw `<img>` tags in the hero section. They are intentional for now and can be migrated to `next/image` later.

## Deployment

This app is ready for deployment on Vercel as a standard Next.js project.

Typical production flow:

```bash
npm run build
npm run start
```

If deploying with Vercel, the framework should be detected automatically as Next.js.
