# Zarpazo

![Social Preview](public/opengraph-image.png)

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-ui-black)
![Vercel](https://img.shields.io/badge/Vercel-deploy-black?logo=vercel)
![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100%2F100%2F100-00C853?logo=lighthouse&logoColor=white)

## Resumen

Zarpazo es una marca argentina de remeras de nicho con identidad hacker / heráldica. Diseños propios, producción DTF, pedido por WhatsApp. El producto, la marca y las restricciones base están definidos en [AGENTS.md](AGENTS.md). Este README documenta el estado actual de implementación, estructura, despliegue y cambios recientes.

## Alcance y Fase

- Fase actual: Fase 1 (landing + catálogo + guía de talles + detalle de producto + pedido por WhatsApp)
- Sin auth, sin inventario, sin panel admin
- 20 productos hardcodeados en `src/data/products.ts`
- Sitio público: `https://www.zarpazo.art`

## Lighthouse

Score 100/100 en todas las categorías en mobile y desktop (zarpazo.art, junio 2026):

| Categoría | Score |
|---|---|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

**Optimizaciones aplicadas para llegar a 100:**
- YouTube video section usa facade pattern: thumbnail servido vía `/_next/image`, iframe inyectado solo al hacer click → sin cookies de terceros en page load
- Fuentes cargadas con `display: "swap"` en los tres `next/font/google` definitions
- `imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]` en `next.config.ts` para que las cards sirvan `w=256` en lugar de `w=640`
- Contraste WCAG AA auditado: todos los textos sobre fondos oscuros usan mínimo `text-zinc-400`
- GA4 ID hardcodeado en `layout.tsx` para evitar `id=undefined` en builds de Vercel

## Principios de Diseño

- Modo oscuro obligatorio, fondo negro
- Estética hacker / dev / heráldica medieval
- Alto contraste (WCAG AA) y motion mínimo
- Tipografía Space Mono para marca, Space Grotesk para body, Geist Mono para acentos técnicos

## Stack Técnico

- Next.js 16.2.6 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS v4 + shadcn/ui (Radix + Lucide)
- Vercel deploy
- Supabase (Fase 2)

## Primeros Pasos

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Despliegue (Vercel)

El repositorio está conectado a Vercel y desplegado en `zarpazo.art`. Los deploys son automáticos desde `main`.

Configuración base si el proyecto necesita reimportarse:

- Framework Preset: Next.js (auto-detected)
- Root Directory: `./`
- Build Command: vacío (por defecto `next build`)
- Output Directory: vacío (manejado por Next.js)
- Install Command: vacío (por defecto `npm install`)
- Variables de entorno: ninguna requerida (GA4 ID hardcodeado en `layout.tsx`)

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Home: hero, carousel, showcase, product grid, cómo funciona, FAQ, CTAs |
| `/catalogo` | Catálogo filtrable y buscable de todos los productos activos |
| `/product/[slug]` | Detalle de producto: selector de color, talle y botón WhatsApp |
| `/guia-de-talles` | Guía de medidas con tabla hombre/mujer y CTA |
| `/nosotros` | Historia, valores y CTA de la marca |
| `/contacto` | Canales de contacto: WhatsApp, email, Instagram |

## Catálogo de Productos

20 productos activos, organizados por categoría:

| Categoría | Productos |
|---|---|
| **Dev** | `<Loading/>`, JS Do It, sudo rm -rf/*, Layer 8 Problem, Home Sweet Home, `<i> Torre </i>`, Docker Kill, I'm Not a Robot, Full Snack Developer, Señor Developer, Switch Please, Just Sudo It, Kali Assassin |
| **Gaming** | Super Nintendo |
| **Conurbano** | Capitán del Espacio |
| **Borges** | La Secta del Fénix, La Escritura de Dios, La Casa de Asterion, El idioma analítico de John Wilkins |
| **Zarpazo** | Zarpazo (logo) |

Precio de venta: $40.000 ARS. Descuento de lanzamiento del 10% activo → $36.000 ARS.

## Configuración de Contacto

Centralizada en `src/data/config.ts`. Un solo lugar para actualizar:

- `whatsapp`: número en formato internacional sin `+`
- `correo`: email de contacto
- `instagram`: URL completa del perfil
- `youtubeChannelUrl`: URL del canal
- `youtubeUrl`: URL del video embebido en la home
- `brand.siteUrl`: dominio base para SEO y Open Graph

## Tipografía

- Logo / wordmark de marca: **Space Mono** (`--font-brand`)
- Body / UI: **Space Grotesk** (`--font-sans`)
- Acentos técnicos / monospace: **Geist Mono** (`--font-geist-mono`)

Las tres fuentes se cargan desde Google Fonts vía `next/font/google` en `src/app/layout.tsx`.

## SEO

- Metadata global en `src/app/layout.tsx` (title, description, Open Graph, Twitter Card)
- `metadataBase` apunta a `https://www.zarpazo.art`
- Imagen de social preview: `public/opengraph-image.png` (1200×630px)
- `src/app/robots.ts` y `src/app/sitemap.ts` presentes
- El sitemap incluye `/`, `/catalogo`, `/nosotros`, `/contacto` y `/guia-de-talles`

## Analytics

- `@vercel/analytics` integrado en `src/app/layout.tsx`
- `GoogleAnalytics` de `@next/third-parties/google` integrado en `src/app/layout.tsx`
- GA4 ID (`G-0XY9DXNLBQ`) hardcodeado directamente — no depende de variables de entorno en Vercel
- No hay scripts manuales de `gtag.js`
- Las tarjetas de contacto envían eventos enriquecidos con `trackEvent` (`src/lib/analytics.ts`)

### Qué mirar en Google Analytics 4

- **Tiempo real**: visitas en este momento, origen y página activa
- **Adquisición → Visión general**: de dónde vienen los usuarios (Instagram, WhatsApp, directo, Google)
- **Compromiso → Páginas y pantallas**: qué productos se ven más
- **Retención**: si los usuarios vuelven

### Qué mirar en Vercel Analytics

- Visitas y visitantes únicos (server-side, sin bloqueadores de ads)
- Top páginas y dispositivos
- Web Vitals: si el LCP está alto, las imágenes están tardando

## Dominio

- Proveedor: Namecheap
- Dominio: `zarpazo.art`
- Conectado a Vercel con dos registros DNS

## Estructura del Proyecto

```
public/
  brand/
    zarpazo-logov2.png
  products/
    [slug]/
      front.webp        (o black.webp como imagen principal)
      black.webp
      white.webp
      grey.webp
      coffee.webp       (solo algunos slugs)
    sizes/
      men.webp
      women.webp
  opengraph-image.png
  site.webmanifest

src/
  app/
    layout.tsx          ← metadata, fuentes, analytics, layout global
    page.tsx            ← home
    globals.css
    robots.ts
    sitemap.ts
    favicon.ico
    catalogo/
      page.tsx
    contacto/
      page.tsx
    guia-de-talles/
      page.tsx
    nosotros/
      page.tsx
    product/
      [slug]/
        page.tsx

  components/
    layout/
      announcement-bar.tsx
      footer.tsx
      navbar/
        navbar.tsx
        mobile-menu.tsx
        nav-links.tsx
    home/
      hero.tsx
      carousel.tsx
      product-grid.tsx
      product-layer-showcase.tsx
      how-it-works.tsx
      faq-section.tsx
      guia-de-talles.tsx
      guia-de-talles-cta.tsx
      order-cta.tsx
      youtube-video-section.tsx
    catalogo/
      catalog-header.tsx
      catalog-filters.tsx
      catalog-search.tsx
      catalog-grid.tsx
    contact/
      contact-hero.tsx
      contact-actions.tsx
      contact-channels.tsx
    nosotros/
      nosotros-hero.tsx
      nosotros-story.tsx
      nosotros-values.tsx
      nosotros-cta.tsx
    product/
      color-selector.tsx
      size-selector.tsx
      whatsapp-button.tsx
      product-actions.tsx
      related-products.tsx
    ui/
      button.tsx
      PriceTag.tsx
      WhatsAppFloat.tsx

  data/
    config.ts           ← contacto, marca, URLs
    categories.ts       ← dev | gaming | conurbano | borges | zarpazo
    products.ts         ← 20 productos hardcodeados
    faq.json
    home-showcase.json
    home-showcase-copy.ts
    size-guide.json

  lib/
    analytics.ts        ← trackEvent (gtag + dataLayer)
    utils.ts

scripts/
  validate-data.ts      ← prebuild: valida categorías de productos

next.config.ts          ← imageSizes extendido + remotePatterns (img.youtube.com)
```

## Imágenes

- Formato WEBP obligatorio
- Estructura: `public/products/[slug]/[color].webp`
- Mockups exportados desde Canva
- No hay generación dinámica de imágenes

## Mantenimiento Mensual

```bash
npm outdated
npm audit
npm run lint
npm run build
```

- Revisar dependencias con actualización menor o de seguridad
- Confirmar que `npm audit` no tenga nuevas alertas importantes
- Validar que el build pase antes de hacer deploy
- Revisar `src/data/config.ts` si cambiaron links, WhatsApp o Instagram
- Chequear visualmente home, catálogo y contacto
- Correr Lighthouse en producción y confirmar que sigue en 100/100/100/100

## Registro de Cambios

| Fecha | Entrada |
|---|---|
| 2026-06-05 | Lighthouse 100/100/100/100 en mobile y desktop confirmado en producción. |
| 2026-06-05 | YouTube facade pattern: thumbnail vía `/_next/image`, iframe solo al hacer click. Elimina cookies de terceros en page load. |
| 2026-06-05 | `img.youtube.com` agregado a `remotePatterns` en `next.config.ts` para proxy de thumbnail. |
| 2026-06-05 | GA4 ID hardcodeado en `layout.tsx` — resuelve `id=undefined` en builds de Vercel. |
| 2026-06-05 | `imageSizes: [16,32,48,64,96,128,256,384]` en `next.config.ts` — product cards sirven `w=256` en lugar de `w=640`. |
| 2026-06-05 | `display: "swap"` agregado a las 3 fuentes en `layout.tsx`. |
| 2026-06-05 | Auditoría de contraste WCAG AA: todos los `text-zinc-500/600/700` en superficies oscuras reemplazados por `text-zinc-400` en 19 archivos. |
| 2026-05-27 | `scripts/validate-data.ts` quedó autocontenido para no romper `npm run build` con imports TS en ESM. |
| 2026-05-27 | `npm run build` volvió a pasar después de corregir el prebuild de categorías. |
| 2026-05-26 | Se auditó GA4: `@next/third-parties` + `@vercel/analytics` conviven sin scripts manuales. |
| 2026-05-26 | El ID de GA4 pasó a `NEXT_PUBLIC_GA_ID` en `.env.local`. |
| 2026-05-26 | Se compartimentó `src/app/contacto/page.tsx` en `ContactHero`, `ContactActions` y `ContactChannels`. |
| 2026-05-26 | Las tarjetas de contacto pasaron a ser enlaces con iconos, hover y tracking enriquecido. |
| 2026-05-26 | Catálogo refactorizado: header, filtros, buscador y grilla separados. |
| 2026-05-26 | Búsqueda del catálogo incluye `slug` y `categoryLabel`; buscador usa lupa SVG. |
| 2026-05-26 | Nosotros dividida en hero, story, values y CTA. |
| 2026-05-24 | Footer copy y contraste limpiados para legibilidad en fondo oscuro. |
| 2026-05-23 | Dominio cambiado a `zarpazo.art` y conectado en Vercel. |
| 2026-05-23 | Social preview y metadata actualizados al dominio live. |
| 2026-05-23 | Tipografía del hero y logo ajustada; logo usa Space Mono. |
| 2026-05-22 | Repo inicializado. Layout y reglas del footer definidos. |
| 2026-05-22 | Robots y sitemap agregados; config de contacto centralizada. |
| 2026-05-22 | Home dividida en Hero / ProductGrid / HowItWorks. |

## Roadmap (desde AGENTS.md)

- Fase 1: landing + catálogo + formulario de pedido + confirmación manual ✓
- Fase 2: Supabase + órdenes + estados + admin simple
- Fase 3: checkout real + pagos + emails
- Fase 4: CMS + analytics + automatizaciones + escala a otras comunidades

## Referencias

- [AGENTS.md](AGENTS.md)
- [CLAUDE.md](CLAUDE.md)
