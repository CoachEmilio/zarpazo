@AGENTS.md

# CLAUDE.md — Zarpazo

## Contexto del proyecto

Marca de remeras con diseños únicos y humor para comunidades específicas (devs, abogados, tango, etc). Productos, producción propia con láminas DTF. Una sola marca paraguas. El modelo de negocio, stack, y reglas de arquitectura están en AGENTS.md.

## Quién desarrolla esto

Solo. Sin equipo. Con human on the loop: cada comando se ejecuta uno por uno, se entiende antes de avanzar. El objetivo es aprender mientras se construye un negocio real, no vibe-codear.

## Estado actual del proyecto

- Next.js 16 corriendo en local en localhost:3000
- shadcn instalado con preset Nova (Radix + Lucide + Geist)
- 8 productos hardcodeados en src/data/products.ts a $35.000 ARS
- Imágenes en public/products/[slug]/front.webp (formato WEBP, 800x800px)
- loading-cafe y js-do-it tienen variantes de color: black, white, grey, coffee
- Navbar sticky con logo (public/brand/zarpazo-logo.png) y links a /#productos y /nosotros
- Footer con links placeholder a Instagram y WhatsApp (config.ts)
- Página /nosotros con logo grande y copy provisorio
- Página /product/[slug] con selector de color, selector de talle con estado visual y botón WhatsApp que arma el mensaje completo
- SEO completo en src/app/layout.tsx: title, description, openGraph, twitter, manifest
- metadataBase apuntando a https://zarpazo.vercel.app (actualizar cuando zarpazo.com esté activo)
- opengraph-image.png en public/ (1200x630px PNG)
- Favicon en src/app/favicon.ico generado desde favicon.io
- site.webmanifest en public/ con theme_color y background_color en negro
- Logo con fondo transparente en public/brand/zarpazo-logo.png
- robots.ts y sitemap.ts en src/app/ (sitemap incluye solo / y /nosotros)
- Configuración centralizada en src/data/config.ts (whatsapp y instagram)
- Repo en GitHub: https://github.com/CoachEmilio/zarpazo
- Deploy en Vercel: pendiente

## Estructura de componentes

```
src/components/
	layout/
		navbar.tsx
		footer.tsx
	home/
		hero.tsx
		product-grid.tsx
		how-it-works.tsx
	product/
		color-selector.tsx
		size-selector.tsx
		whatsapp-button.tsx
		product-actions.tsx
	ui/
		button.tsx (shadcn)
```

## Flujo de compra actual (Fase 1)

Usuario entra → ve grid de productos → hace click en card → página de producto → elige color → elige talle → aprieta "Pedir por WhatsApp" → mensaje armado automático → confirmación manual por transferencia

## Decisiones tomadas en este proyecto

- Sin Zustand en Fase 1: useState alcanza para selectores de color y talle
- Sin Zod ni react-hook-form en Fase 1: WhatsApp reemplaza el formulario
- Sin Mercado Pago en Fase 1: confirmación manual por transferencia
- Sin panel admin todavía
- Productos hardcodeados en src/data/products.ts hasta Fase 2
- Imágenes estáticas exportadas desde Canva/Gemini, sin generación dinámica
- Monorepo único, sin Express separado, sin microservicios
- Configuración de contacto centralizada en src/data/config.ts
- Copilot resuelve errores puntuales, Claude mantiene contexto y arquitectura

## Lo que falta (próximos pasos en orden)

1. Auditoría pre-deploy con Copilot
2. Deploy en Vercel importando el repo desde GitHub
3. Número real de WhatsApp Business para Zarpazo en config.ts
4. Instagram real de Zarpazo en config.ts
5. Agregar variantes de color al resto de los 6 diseños cuando estén las imágenes
6. Actualizar metadataBase cuando zarpazo.com esté activo en Namecheap
7. Comprar zarpazo.com en Namecheap y conectar a Vercel

## Dominio

- zarpazo.com NO comprado en Namecheap aún
- Cuando esté comprado, conectar a Vercel con dos registros DNS
- Cuando esté conectado, actualizar metadataBase en src/app/layout.tsx y config.ts

## Rutas existentes

- / → home con hero, grid de 8 productos y sección cómo funciona
- /nosotros → página con logo grande y copy de marca
- /product/[slug] → página individual con color selector, size selector y whatsapp button

## Rutas que no existen (no crear hasta que corresponda)

- /products → innecesario por ahora, todo está en /
- /cart → Fase 2
- /checkout → Fase 3

## Gaps activos que el desarrollador conoce

- Diferencia server/client en Next.js en proceso de aprendizaje
- Footer tiene URLs placeholder de Instagram y WhatsApp hasta tener los reales
- /nosotros tiene copy provisorio
- 6 productos sin variantes de color todavía (solo front.webp)
- WhatsApp Business separado para Zarpazo pendiente para mañana
- zarpazo.com sin comprar todavía

## Aprendizajes acumulados

- Tags JSX incompletos rompen TypeScript de forma críptica, Copilot lo resuelve en el momento
- El tag <a> se pega frecuentemente sin el símbolo de apertura desde el chat, siempre verificar
- El page.tsx raíz en src/app/ ES el home, sin carpeta ni nombre especial
- Next.js App Router enruta por estructura de carpetas, sin React Router
- Server Components no pueden tener estado, para eso se crean Client Components separados
- ProductActions coordina ColorSelector, SizeSelector y WhatsappButton como componente padre
- El botón flotante de Next.js en desarrollo desaparece solo en producción
- git remote add define el destino, git push envía los archivos
- VSC actualiza imports automáticamente cuando se mueven archivos con el explorador
- opengraph-image.png va en public/ porque Next.js la detecta automáticamente ahí
- La verdad del pago ocurre en el webhook, nunca en la página success (Fase 3)

## Convenciones activas

- Comandos uno por uno, nunca en cadena
- Entender cada archivo antes de avanzar al siguiente
- Copilot puede resolver errores puntuales en el momento
- Claude mantiene el contexto general, la arquitectura y los próximos pasos
- Si algo rompe, mostrar el error completo antes de pedir fix
- No agregar dependencias sin entender para qué sirven
- Separar por dominio: layout/, home/, product/