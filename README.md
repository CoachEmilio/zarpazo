# Zarpazo

![Social Preview](public/opengraph-image.png)

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-ui-black)
![Vercel](https://img.shields.io/badge/Vercel-deploy-black?logo=vercel)

## Resumen

Zarpazo es una vitrina oscura para remeras de nicho con identidad hacker / heráldica. El producto, la marca y las restricciones base están definidos en [AGENTS.md](AGENTS.md). Este README documenta el estado actual de implementación, estructura, despliegue y cambios recientes.

## Alcance y Fase

- Fase actual: Fase 1 (landing + catálogo + detalle de producto + pedido por WhatsApp)
- Sin auth, sin inventario, sin panel admin
- Productos hardcodeados en `src/data/products.ts`
- Sitio público: `https://www.zarpazo.art`

## Principios de Diseño

- Modo oscuro obligatorio, fondo negro
- Estética hacker / dev / heráldica medieval
- Alto contraste y motion mínimo
- El logo usa Space Mono
- El texto UI/body usa Space Grotesk y Geist Mono donde corresponde
- El contraste está ajustado para legibilidad en superficies oscuras

## Stack Técnico

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- Vercel deploy
- Supabase (phase 2)

## Primeros Pasos

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Despliegue (Vercel)

El repositorio está conectado a Vercel y desplegado en `zarpazo.art`.

Defaults a conservar si el proyecto necesita reimportarse o reconfigurarse:

- Framework Preset: Next.js (auto-detected)
- Root Directory: ./
- Build Command: empty (defaults to `next build`)
- Output Directory: empty (handled by Next.js)
- Install Command: empty (defaults to `npm install`)
- Environment Variables: none for now

- Los despliegues son automáticos desde `main`.

## Cómo mirar Analytics

### Google Analytics 4

Entrás a `analytics.google.com`.

Lo más útil para Zarpazo ahora:

- Tiempo real: ves visitas en este momento, de dónde vienen y qué página están mirando. Sirve para verificar que funciona y para cuando publiques en Instagram.
- Adquisición → Visión general: muestra de dónde vienen los usuarios. Directo, Instagram, Google o WhatsApp. Es clave para saber qué canal trae más gente.
- Compromiso → Páginas y pantallas: indica qué páginas se visitan más. Si `/product/loading-cafe` tiene muchas vistas y pocas conversiones por WhatsApp, algo falla en esa página.
- Retención: muestra cuántos usuarios vuelven. Si nadie vuelve, el producto o la comunicación necesita trabajo.

### Vercel Analytics

Entrás a `vercel.com` → tu proyecto → Analytics.

Lo más útil:

- Visitas y visitantes únicos: es más simple y preciso que GA4 porque mide server-side, sin bloqueadores de ads.
- Top páginas: muestra cuáles se visitan más.
- Países y dispositivos: si el 90% es mobile, el diseño mobile es crítico.
- Web Vitals: velocidad real de carga. Si el LCP está alto, las imágenes están tardando demasiado.

### Qué mirar primero después del deploy

- ¿Llega tráfico desde Instagram?
- ¿Qué producto se visita más?
- ¿El sitio carga rápido en mobile?

## Checklist SEO

- Metadata global en `src/app/layout.tsx` (title, description, Open Graph, Twitter)
- Imagen de social preview en `public/opengraph-image.png`
- `metadataBase` apunta a `https://www.zarpazo.art`
- Rutas `robots` y `sitemap` presentes en `src/app/`
- `sitemap` incluye `/` y `/nosotros`
- Las tarjetas de Open Graph y Twitter resuelven a `public/opengraph-image.png`

## Dominio

- Proveedor: Namecheap
- Dominio: `zarpazo.art`
- Conectado a Vercel

## Analytics y Etiquetado

- `@vercel/analytics` está integrado en `src/app/layout.tsx`
- `GoogleAnalytics` de `@next/third-parties/google` está integrado en `src/app/layout.tsx`
- El ID de GA4 se lee desde `NEXT_PUBLIC_GA_ID` en `.env.local`
- No hay scripts manuales de `gtag.js` en el source
- Las tarjetas de contacto envían eventos enriquecidos con `trackEvent`
- `trackEvent` soporta `gtag` y `dataLayer` si existen

## Catálogo

- El catálogo quedó dividido en `CatalogHeader`, `CatalogFilters`, `CatalogSearch` y `CatalogGrid`
- Las categorías están centralizadas en `src/data/categories.ts`
- La búsqueda incluye título, descripción y `slug`
- El buscador muestra un ícono de lupa SVG
- El header y los filtros quedaron alineados para una lectura más limpia
- El hero de home se ajustó a `max-w-7xl` para mantener consistencia visual
- La tarjeta de destacados de home ahora muestra sólo copy público en producción

## Contacto

- La página `src/app/contacto/page.tsx` quedó compartimentada en componentes
- Se separaron `ContactHero`, `ContactActions` y `ContactChannels`
- Las tarjetas de contacto ahora son enlaces clicables
- WhatsApp, email e Instagram se leen desde `src/data/config.ts`
- Las tarjetas tienen hover visual y tracking de clicks

## Estructura del Proyecto

```txt
public/
  brand/
    zarpazo-logo.png
    zarpazo-logov2.png
  products/
    [slug]/
      front.webp
      black.webp
      white.webp
      grey.webp
      coffee.webp
    sizes/
      hombre.webp
      mujer.webp
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
    contacto/
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
      announcement-bar.tsx
      WhatsAppFloat.tsx
    home/
      hero.tsx
      product-grid.tsx
      how-it-works.tsx
      carousel.tsx
      product-layer-showcase.tsx
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
    ui/
      button.tsx
      PriceTag.tsx
  data/
    config.ts
    categories.ts
    products.ts
  features/
    cart/
    orders/
    products/
  lib/
    analytics.ts
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

## Configuración de Contacto

- Centralizada en `src/data/config.ts`
- Actualizar WhatsApp, Instagram y email sólo ahí
- WhatsApp se usa tanto para el CTA del producto como para el CTA flotante global
- Instagram y email también se consumen desde el mismo objeto de config
- El footer y los CTAs usan los mismos valores de configuración

## Estructura de Nosotros

- `src/app/nosotros/page.tsx` ahora es un orquestador liviano
- Hero, historia, valores y CTA están divididos en `src/components/nosotros/`
- La announcement bar se mantiene arriba de todo y no interrumpe las secciones

## Tipografía

- Logo / wordmark de marca: Space Mono
- Base UI/body: Space Grotesk
- Acentos técnicos: Geist Mono

## Mantenimiento Mensual

Checklist corto para revisar el proyecto una vez por mes:

```bash
npm outdated
npm audit
npm run lint
npm run build
```

- Revisar si hay dependencias con actualización menor o de seguridad
- Confirmar que `npm audit` no haya introducido nuevas alertas importantes
- Validar que el build pase antes de hacer deploy
- Revisar `src/data/config.ts` si cambiaron links, WhatsApp o Instagram
- Confirmar que `NEXT_PUBLIC_GA_ID` siga apuntando al entorno correcto
- Chequear visualmente la home, el catálogo y la página de contacto

## Registro de Cambios

Usá esta tabla para decisiones, progreso y cambios. Las entradas deben ser cortas.

| Date (YYYY-MM-DD) | Entry |
| --- | --- |
| 2026-05-26 | Se auditó GA4: `@next/third-parties` + `@vercel/analytics` conviven sin scripts manuales. |
| 2026-05-26 | El ID de GA4 pasó a `NEXT_PUBLIC_GA_ID` en `.env.local`. |
| 2026-05-26 | Se compartimentó `src/app/contacto/page.tsx` en `ContactHero`, `ContactActions` y `ContactChannels`. |
| 2026-05-26 | Las tarjetas de contacto pasaron a ser enlaces con iconos, hover y tracking enriquecido. |
| 2026-05-26 | El catálogo quedó refactorizado con header, filtros, buscador y grilla separados. |
| 2026-05-26 | La búsqueda del catálogo ahora incluye `slug` y el buscador usa una lupa SVG. |
| 2026-05-26 | El texto de home que mencionaba `src/data/home-showcase.json` quedó sólo como copy público en producción. |
| 2026-05-26 | Nosotros page split into hero, story, values, and CTA components. |
| 2026-05-26 | Contact config expanded with WhatsApp, Instagram, and email references. |
| 2026-05-24 | Footer copy and contrast were cleaned up for readability on dark background. |
| 2026-05-24 | Product CTA helper text was brightened for better contrast. |
| 2026-05-23 | Brand cleaned up from zarpaso to zarpazo across source, assets, and history. |
| 2026-05-23 | Domain switched to zarpazo.art and connected in Vercel. |
| 2026-05-23 | Social preview and metadata updated to use the live domain. |
| 2026-05-23 | Hero and logo typography adjusted; logo uses Space Mono. |
| 2026-05-22 | Repo initialized. Layout and footer rules defined. |
| 2026-05-22 | Robots and sitemap added; contact config centralized. |
| 2026-05-22 | Home split into Hero/ProductGrid/HowItWorks components. |

## Roadmap (desde AGENTS.md)

- Fase 1: landing + catálogo + formulario de pedido + confirmación manual
- Fase 2: Supabase + órdenes + estados + admin simple
- Fase 3: checkout real + pagos + emails
- Fase 4: CMS + analytics + automatizaciones + escala a otras comunidades

## Referencias

- [AGENTS.md](AGENTS.md)
