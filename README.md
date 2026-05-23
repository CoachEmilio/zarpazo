# Zarpazo

![Social Preview](public/opengraph-image.png)

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-ui-black)
![Vercel](https://img.shields.io/badge/Vercel-deploy-black?logo=vercel)

## Overview

Zarpazo is a dark-first landing and catalog for products. The product, brand, and constraints are defined in [AGENTS.md](AGENTS.md). This README documents the current implementation, deployment status, structure, and change log.

## Scope and Phase

- Current phase: Phase 1 (landing + catalog + simple order form)
- No auth, no inventory, no admin panel
- Hardcoded products in `src/data/products.ts`
- Public site: `https://www.zarpazo.art`

## Design Principles

- Dark mode only, black background
- Hacker / dev / heraldic medieval aesthetic
- Strong contrast and minimal motion
- Brand logo uses Space Mono
- UI/body text uses Space Grotesk and Geist Mono where appropriate

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

The repository is connected to Vercel and deployed on `zarpazo.art`.

Defaults to keep if the project needs to be re-imported or reconfigured:

- Framework Preset: Next.js (auto-detected)
- Root Directory: ./
- Build Command: empty (defaults to `next build`)
- Output Directory: empty (handled by Next.js)
- Install Command: empty (defaults to `npm install`)
- Environment Variables: none for now

Deployments are automatic from `main`.

## SEO Checklist

- Global metadata set in `src/app/layout.tsx` (title, description, Open Graph, Twitter)
- Social preview image present at `public/opengraph-image.png`
- `metadataBase` points to `https://www.zarpazo.art`
- `robots` and `sitemap` routes present in `src/app/`
- `sitemap` includes `/` and `/nosotros`
- Open Graph and Twitter cards resolve to `public/opengraph-image.png`

## Domain

- Provider: Namecheap
- Domain: `zarpazo.art`
- Connected to Vercel

## Project Structure

```txt
public/
  brand/
    zarpazo-logo.png
  products/
    [slug]/
      front.webp
      black.webp
      white.webp
      grey.webp
      coffee.webp
  favicon-16x16.png
  favicon-32x32.png
  favicon.ico
  opengraph-image.png
  site.webmanifest

src/
  app/
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
    nosotros/
      page.tsx
    product/
      [slug]/
        page.tsx
  components/
    layout/
      navbar.tsx
      footer.tsx
    home/
      hero.tsx
      product-grid.tsx
      how-it-works.tsx
      carousel.tsx
    product/
      color-selector.tsx
      size-selector.tsx
      whatsapp-button.tsx
      product-actions.tsx
    ui/
      button.tsx
      PriceTag.tsx
  data/
    config.ts
    products.ts
  features/
    cart/
    orders/
    products/
  lib/
    utils.ts
  shared/
    types/
    ui/
    utils/
  store/
```

## Assets and Images

- Use WEBP only for product assets
- Product images live in `public/products/[slug]/`
- Static mockups exported from Canva
- All shirts are black
- Brand logo asset: `public/brand/zarpazo-logo.png`

## Contact Config

- Centralized in `src/data/config.ts`
- Update WhatsApp and Instagram there only

## Typography

- Brand logo / wordmark: Space Mono
- UI/body foundation: Space Grotesk
- Technical accents: Geist Mono

## Logbook

Use this table for decisions, progress, and changes. Keep entries short.

| Date (YYYY-MM-DD) | Entry |
| --- | --- |
| 2026-05-23 | Brand cleaned up from zarpaso to zarpazo across source, assets, and history. |
| 2026-05-23 | Domain switched to zarpazo.art and connected in Vercel. |
| 2026-05-23 | Social preview and metadata updated to use the live domain. |
| 2026-05-23 | Hero and logo typography adjusted; logo uses Space Mono. |
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
