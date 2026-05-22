# Targattos

![Social Preview](public/opengraph-image.png)

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-ui-black)
![Vercel](https://img.shields.io/badge/Vercel-deploy-black?logo=vercel)

## Overview

Targattos is a dark-first landing and catalog for limited drops. The product, brand, and constraints are defined in [AGENTS.md](AGENTS.md). This README focuses on GitHub documentation and the project logbook.

## Scope and Phase

- Current phase: Phase 1 (landing + catalog + simple order form)
- No auth, no inventory, no admin panel
- Hardcoded products in `src/data/products.ts`

## Design Principles

- Dark mode only, black background
- Hacker / dev / heraldic medieval aesthetic
- Monospace accents, sharp contrast
- Minimal motion, strong moments

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- Vercel deploy
- Supabase (phase 2)

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy (Vercel)

When the repo appears in Vercel, click Import and keep the defaults:

- Framework Preset: Next.js (auto-detected)
- Root Directory: ./
- Build Command: empty (defaults to `next build`)
- Output Directory: empty (handled by Next.js)
- Install Command: empty (defaults to `npm install`)
- Environment Variables: none for now

Click Deploy. Update this section if any env vars or build steps are added.

## SEO Checklist (Pre-deploy)

- Global metadata set in `src/app/layout.tsx` (title, description, Open Graph, Twitter)
- Social preview image present at `public/opengraph-image.png`
- `metadataBase` points to `https://targattos.vercel.app`
- `robots` and `sitemap` routes present in `src/app/`
- `sitemap` includes `/`, `/nosotros`, and `/product/[slug]`
- When a custom domain is added, update `metadataBase` to match

## Domain

- Provider: Namecheap
- Domain: targattos.com
- Pricing noted: $6.79 first year with code NEWCOM679 (new customers, non-premium)
- Renewal noted: $11.28/yr (retail $14.98/yr)
- Link: https://www.namecheap.com/domains/registration/results/?domain=targattos.com

## Project Structure

```
src/
	app/
	components/
	data/
	features/
	lib/
	shared/
	store/
```

## Product Model

```ts
type Product = {
	id: string
	slug: string
	title: string
	description: string
	price: number
	active: boolean
	variants: ProductVariant[]
}

type ProductVariant = {
	id: string
	size: string
	image: string
}
```

## Assets and Images

- Use WEBP only
- `public/products/[slug]/front.webp`
- Static mockups exported from Canva
- All shirts are black

## Contact Config

- Centralized in `src/data/config.ts`
- Update WhatsApp and Instagram there only

## Logbook

Use this table for decisions, progress, and changes. Keep entries short.

| Date (YYYY-MM-DD) | Entry |
| --- | --- |
| 2026-05-22 | Repo initialized. Layout and footer rules defined. |
| 2026-05-22 | Robots and sitemap added; contact config centralized. |
| 2026-05-22 | Home split into Hero/ProductGrid/HowItWorks components. |

## Roadmap (from AGENTS.md)

- Phase 1: landing + catalog + order form + manual confirmation
- Phase 2: Supabase + orders + statuses + simple admin
- Phase 3: real checkout + payments + emails
- Phase 4: CMS + analytics + automation + scale to new communities

## References

- [AGENTS.md](AGENTS.md)
