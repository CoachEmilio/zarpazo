![Zarpazo](public/opengraph-image.png)

# Zarpazo

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-deploy-black?logo=vercel)
![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100%2F100%2F100-00C853?logo=lighthouse&logoColor=white)

Frontend de [zarpazo.art](https://zarpazo.art) — marca argentina de remeras estampadas bajo demanda.

## Arquitectura

```
zarpazo.art (este repo — Vercel)
    ↓ fetch ISR revalidate: 3600s
api.zarpazo.art (zarpazo-backend — Fly.io)
    ↓ imágenes
Vercel Blob CDN
```

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 + shadcn/ui |
| Lenguaje | TypeScript 5 |
| Fuentes | Space Mono · Space Grotesk · Geist Mono |
| Analytics | Vercel Analytics + Google Analytics 4 |
| Deploy | Vercel (auto-deploy desde `main`) |
| Imágenes | Vercel Blob CDN (`*.public.blob.vercel-storage.com`) |
| API | `https://api.zarpazo.art` (Express + SQLite) |

## URLs

| Entorno | URL |
|---|---|
| Producción | https://zarpazo.art |
| API backend | https://api.zarpazo.art |
| Admin panel | https://api.zarpazo.art/admin |

## Variables de entorno

```bash
NEXT_PUBLIC_API_URL=https://api.zarpazo.art   # URL del backend
NEXT_PUBLIC_GA_ID=G-0XY9DXNLBQ               # Google Analytics 4
REVALIDATE_TOKEN=                              # clave compartida con el backend para ISR
```

## Primeros pasos

```bash
npm install
npm run dev   # http://localhost:3000
```

## Comandos

```bash
npm run dev        # desarrollo con hot reload
npm run build      # build de producción (incluye validación de categorías)
npm run lint       # ESLint
```

## Rutas

| Ruta | Tipo | Descripción |
|---|---|---|
| `/` | SSG | Home: hero, carousel, showcase, FAQ, CTAs |
| `/catalogo` | SSG + ISR 1h | Catálogo filtrable y buscable |
| `/product/[slug]` | SSG + ISR 1h | Detalle de producto |
| `/guia-de-talles` | SSG | Guía de medidas |
| `/nosotros` | SSG | Historia y valores de la marca |
| `/contacto` | SSG | Canales de contacto |
| `/api/revalidate` | Dynamic | Webhook ISR (llamado por el backend) |

## Fetch de productos

Los productos vienen del backend en tiempo de build y se revalidan cada hora (ISR).

```typescript
// src/lib/api.ts
const res = await fetch(`${API_URL}/api/products`, { next: { revalidate: 3600 } })
```

Cuando se crea/edita un producto en el admin panel, el backend llama automáticamente a `/api/revalidate` y Next.js regenera las páginas afectadas sin redeploy.

## Lighthouse

Score 100/100 en todas las categorías (mobile y desktop):

| Categoría | Score |
|---|---|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

**Optimizaciones clave:**
- YouTube facade pattern: thumbnail via `/_next/image`, iframe solo al hacer click
- Fuentes con `display: "swap"`
- `imageSizes: [16,32,48,64,96,128,256,384]` en `next.config.ts`
- Contraste WCAG AA auditado en todos los componentes

## Estructura del proyecto

```
public/
  brand/
    zarpazo-logo.png
  products/[slug]/         ← imágenes locales (referencia; CDN en producción)
  opengraph-image.png      ← social preview 1200×630
  favicon.ico
  site.webmanifest

src/
  app/
    layout.tsx             ← metadata global, fuentes, analytics
    page.tsx               ← home (server component, fetch productos)
    catalogo/page.tsx      ← server component, fetch productos
    product/[slug]/
      page.tsx             ← generateStaticParams + fetch por slug
    nosotros/page.tsx
    guia-de-talles/page.tsx
    contacto/page.tsx
    api/revalidate/
      route.ts             ← webhook ISR del backend

  lib/
    api.ts                 ← getProducts() / getProductBySlug() con ISR

  components/
    layout/                ← navbar, footer, announcement-bar
    home/                  ← hero, carousel, product-layer-showcase, ...
    catalogo/              ← catalog-grid, catalog-filters, catalog-search
    product/               ← color-selector, size-selector, product-actions
    ui/                    ← PriceTag, WhatsAppFloat, button

  data/
    config.ts              ← contacto, marca, URLs
    categories.ts          ← dev | gaming | conurbano | borges | zarpazo
    faq.json
    home-showcase.json
    size-guide.json

scripts/
  validate-data.ts         ← prebuild: valida categorías
```

## SEO y Social Preview

- Metadata global en `src/app/layout.tsx` (OG, Twitter Card)
- `metadataBase`: `https://www.zarpazo.art`
- OG image: `public/opengraph-image.png` (1200×630px)
- `robots.ts` y `sitemap.ts` presentes (sitemap generado desde la API)

## Analytics

- `@vercel/analytics` — server-side, no bloqueado por ad blockers
- `@next/third-parties/google` — GA4 (`G-0XY9DXNLBQ`)
- Eventos enriquecidos en `src/lib/analytics.ts`

## Despliegue (Vercel)

Auto-deploy desde `main`. Variables de entorno configuradas en el dashboard de Vercel.

`next.config.ts` incluye `*.public.blob.vercel-storage.com` en `remotePatterns` para las imágenes del CDN.

## Mantenimiento mensual

```bash
npm outdated
npm audit
npm run lint
npm run build
```

Verificar Lighthouse en producción y confirmar 100/100/100/100.

## Registro de cambios

| Fecha | Cambio |
|---|---|
| 2026-06-07 | Frontend consume API en producción. `products.ts` hardcodeado reemplazado por `src/lib/api.ts`. |
| 2026-06-07 | Webhook ISR `/api/revalidate` implementado. El backend revalida el catálogo al mutar productos. |
| 2026-06-07 | Favicons renombrados (removido sufijo "copy") — corrige 404 silenciosas en webmanifest. |
| 2026-06-07 | `*.public.blob.vercel-storage.com` agregado a `remotePatterns` en `next.config.ts`. |
| 2026-06-07 | `NEXT_PUBLIC_API_URL` y `REVALIDATE_TOKEN` configurados como env vars en Vercel. |
| 2026-06-05 | Lighthouse 100/100/100/100 confirmado en producción (mobile y desktop). |
| 2026-06-05 | YouTube facade pattern: thumbnail vía `/_next/image`, iframe solo al hacer click. |
| 2026-06-05 | GA4 hardcodeado en `layout.tsx` para evitar `id=undefined` en builds de Vercel. |
| 2026-06-05 | `imageSizes` extendido y auditoría de contraste WCAG AA completada. |
| 2026-05-23 | Dominio `zarpazo.art` conectado en Vercel. |
| 2026-05-22 | Repo inicializado. |

## Referencias

- [Backend repo](https://github.com/CoachEmilio/zarpazo-backend)
- [AGENTS.md](AGENTS.md)
- [CLAUDE.md](CLAUDE.md)
