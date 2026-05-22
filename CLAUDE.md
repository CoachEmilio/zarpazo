@AGENTS.md

# CLAUDE.md — Targattos

## Contexto del proyecto

Marca de remeras con diseños únicos y humor para comunidades específicas (devs, abogados, tango, etc). Drops limitados, producción propia con láminas DTF. Una sola marca paraguas. El modelo de negocio, stack, y reglas de arquitectura están en AGENTS.md.

## Quién desarrolla esto

Solo. Sin equipo. Con human on the loop: cada comando se ejecuta uno por uno, se entiende antes de avanzar. El objetivo es aprender mientras se construye un negocio real, no vibe-codear.

## Estado actual del proyecto

- Next.js 16 corriendo en local en localhost:3000
- shadcn instalado con preset Nova (Radix + Lucide + Geist)
- 8 productos hardcodeados en src/data/products.ts a $35.000 ARS
- Imágenes en public/products/[slug]/front.webp (formato WEBP, 800x800px)
- Navbar sticky con logo (public/brand/targattos-logo.png) y links a /drops y /nosotros
- Footer con links placeholder a Instagram y WhatsApp
- Página /nosotros con logo grande y copy provisorio
- SEO completo en src/app/layout.tsx: title, description, openGraph, twitter, manifest
- metadataBase apuntando a https://targattos.vercel.app (actualizar cuando targattos.com esté activo)
- opengraph-image.png en public/ (1200x630px PNG)
- Favicon en src/app/favicon.ico generado desde favicon.io
- site.webmanifest en public/ con theme_color y background_color en negro
- Logo con fondo transparente en public/brand/targattos-logo.png
- robots.ts y sitemap.ts creados en src/app/
- Repo en GitHub: https://github.com/CoachEmilio/targattos
- Deploy en Vercel: pendiente (listo para ejecutar)

## Decisiones tomadas en este proyecto

- Sin Zustand en Fase 1: useState alcanza para el selector de talle
- Sin Zod ni react-hook-form en Fase 1: formulario simple primero
- Sin Mercado Pago en Fase 1: confirmación manual por transferencia o efectivo
- Sin panel admin todavía
- Productos hardcodeados en src/data/products.ts hasta Fase 2
- Imágenes estáticas exportadas desde Canva, sin generación dinámica
- Monorepo único, sin Express separado, sin microservicios
- Copilot resuelve errores puntuales, Claude mantiene contexto y arquitectura

## Lo que falta (próximos pasos en orden)

1. Deploy en Vercel importando el repo desde GitHub
2. Botón de compra en cada card de producto
3. Página de producto individual /product/[slug] con selector de talle
4. Formulario de pedido con nombre, talle y datos del comprador
5. Confirmación manual por transferencia
6. Actualizar URLs reales de Instagram y WhatsApp en el footer
7. Actualizar metadataBase cuando targattos.com esté activo en Namecheap

## Dominio

- targattos.com NO comprado en Namecheap AUN
- Conectar a Vercel con dos registros DNS cuando el deploy esté activo
- Cuando esté conectado, actualizar metadataBase en src/app/layout.tsx

## Rutas existentes

- / → home con grid de 8 productos
- /nosotros → página con logo grande y copy de marca

## Rutas que faltan (no crear hasta el paso correspondiente)

- /product/[slug] → página individual de producto
- /products → catálogo completo (opcional, puede quedar todo en /)

## Gaps activos que el desarrollador conoce

- Diferencia server/client en Next.js en proceso de aprendizaje
- Footer tiene URLs placeholder de Instagram y WhatsApp
- /nosotros tiene copy provisorio
- No hay botón de compra en las cards todavía
- El sitemap incluye /products y /product/[slug] pero esas rutas no existen aún

## Aprendizajes acumulados

- Tags JSX incompletos rompen TypeScript de forma críptica, Copilot lo resuelve en el momento
- El page.tsx raíz en src/app/ ES el home, sin carpeta ni nombre especial
- Next.js App Router enruta por estructura de carpetas, sin React Router
- El botón flotante de Next.js en desarrollo desaparece solo en producción
- git remote add define el destino, git push envía los archivos
- El -u en git push -u origin main configura el upstream para futuros pushes cortos
- LF/CRLF warnings en git add son normales, no afectan nada
- opengraph-image.png va en public/ porque Next.js la detecta automáticamente ahí
- El site.webmanifest necesita theme_color y background_color en negro para Targattos
- Deploy preview en Vercel es válido aunque falten rutas: no hay links que lleven a 404s todavía

## Convenciones activas

- Comandos uno por uno, nunca en cadena
- Entender cada archivo antes de avanzar al siguiente
- Copilot puede resolver errores puntuales en el momento
- Claude mantiene el contexto general, la arquitectura y los próximos pasos
- Si algo rompe, mostrar el error completo antes de pedir fix
- No agregar dependencias sin entender para qué sirven