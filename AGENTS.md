# Zarpazo — AGENTS.md

## Qué es este proyecto
Marca de remeras con diseños únicos y humor para comunidades específicas (devs, abogados, tango, etc). Productos, producción propia con láminas DTF. Una sola marca paraguas. Modelo: diseño propio + estampado DTF + venta directa.

## Nombre
Zarpazo — fusión de Targaryen + Gatos. Logo: gato hidra heráldico medieval.

## Problema que resuelve
No existe una marca argentina de nicho con este humor, esta identidad visual y esta comunidad detrás. Zarpazo no vende ropa, vende cultura.

## Modelo de negocio
- Remeras negras compradas en Flores (~$6.000 ARS)
- Láminas DTF impresas externamente ($10.000 ARS por metro de 50x100cm)
- Estampa de pecho: 25x30cm = 8 estampas por metro = $1.250 por estampa
- Costo total por unidad: ~$7.250 ARS
- Precio de venta objetivo: $30.000 ARS
- Margen bruto por unidad: ~$22.750 ARS (75%)
- Cobro: a definir (transferencia, efectivo, u otro)
- Envío: a definir
- Productos por comunidad
- Producción bajo demanda, no stock masivo

## Validación real
- 4 compañeros de UADE confirmaron que pagarían $30.000
- Diseños que más pegaron: Loading con café, JS Do It, sudo rm -rf, Layer 8 problem
- Producción DTF ya probada y funciona

## Diseños actuales (Fase 1)
Todos con fondo negro, estampa de pecho 25x30cm:
- Loading con café (el que más pegó)
- JS Do It
- sudo rm -rf/*
- Layer 8 problem (Bender)
- Choose Your Weapon
- 127.0.0.1 Sweet Home
- Nuestro Norte es el Sur
- Super Nintendo

## Stack
- Next.js 15, App Router, TypeScript
- Tailwind CSS, shadcn/ui
- Supabase (fase 2)
- Mercado Pago Checkout Pro o transferencia (a definir)
- Vercel (deploy)

## Fase actual: 1 — Landing vitrina
Construir esto en orden:
1. Landing con identidad visual fuerte, dark mode, estética hacker/heráldica
2. Catálogo de diseños con selector de talle
3. Formulario de pedido simple
4. Confirmación manual (transferencia o efectivo)
5. Sin auth, sin inventario, sin panel admin todavía

## Identidad visual
- Dark mode obligatorio, fondo negro
- Estética hacker/dev/heráldica medieval
- Logo: gato hidra Zarpazo
- Tipografía monospace para acentos
- Colores: negro, blanco, toques de naranja o rojo sangre
- Sin gradientes genéricos
- Motion mínimo pero contundente

## Estructura de carpetas
src/
  app/
    page.tsx
    products/
    product/[slug]/
    api/
  features/
    products/
    cart/
    orders/
  shared/
    ui/
    utils/
    types/
  data/
    products.ts
  store/
    cart-store.ts
  lib/
    utils.ts

## Modelo de producto
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

## Imágenes
- Formato WEBP obligatorio
- Estructura: public/products/[slug]/front.webp
- Mockups estáticos exportados desde Canva
- Sin generación dinámica de imágenes
- Todas las remeras son negras

## Talles disponibles
S, M, L, XL, XXL

## Convenciones de código
- Componentes en PascalCase
- Funciones y variables en camelCase
- Archivos en kebab-case
- Todo en inglés excepto copy visible al usuario
- Separar por dominio, no por tecnología
- 'use client' solo cuando sea estrictamente necesario
- Lógica de negocio siempre en servidor

## Reglas importantes
- Sin sobreingeniería
- Sin inventario complejo
- Sin auth custom
- Sin Express separado
- Sin microservicios
- Sin Zustand hasta que haya estado real entre múltiples páginas
- Productos hardcodeados en src/data/products.ts al inicio
- No repetir errores de Tinta & Telmo

## Estados de orden (futuro)
pending → confirmed → in_production → shipped → delivered

## Lo que NO hacer
- No Express separado
- No JWT custom
- No múltiples repos
- No panel admin por ahora
- No automatizaciones prematuras
- No editor tipo Canva
- No stock por variante todavía
- No sobreingeniería de pagos en fase 1

## Aprendizajes de Tinta & Telmo
- La complejidad operativa destruye proyectos chicos
- No construir ERP antes de validar el negocio
- El multi-repo agrega fricción innecesaria cuando sos solo
- Los cálculos de inventario deben ser simples o se rompen
- Vibe coding sin entender el código genera deuda imposible de mantener

## Roadmap
Fase 1: landing + catálogo + formulario de pedido + confirmación manual
Fase 2: Supabase + órdenes + estados + admin simple
Fase 3: checkout real + cobro online + emails
Fase 4: CMS + analytics + automatizaciones + escala a otras comunidades