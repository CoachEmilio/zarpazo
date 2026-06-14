import { config } from "@/data/config"

// ─── Tipos ────────────────────────────────────────────────────────────────────

export type CtaButton = {
  label: string
  href: string
  external?: boolean
}

export type PromoSlide = {
  badge: string
  title: string
  body?: string
  primaryCta: CtaButton
  secondaryCta?: CtaButton
  image?: string
  imageAlt?: string
  imageFit?: "contain" | "cover"  // "cover" llena de borde a borde, ideal para fotos de modelo
  steps?: string[]                 // si hay imagen + steps, los steps van en el panel izquierdo
}

// ─── SLIDES ───────────────────────────────────────────────────────────────────
// Editá acá para agregar, quitar o reordenar banners.
// Con imagen: colocá el archivo en /public/<carpeta>/ y referencialo como "/<carpeta>/<archivo>.webp"
// imageFit "contain" → con padding, para imágenes con fondo transparente (default)
// imageFit "cover"   → llena el panel de borde a borde, ideal para fotos de modelo
// Sin imagen: usá el campo "steps" y se muestra como lista numerada en el panel derecho.
// ──────────────────────────────────────────────────────────────────────────────

const HOODIE_MSG = encodeURIComponent(
  "Hola! Me interesa un canguro negro con uno de los diseños disponibles en la web. ¿Me pueden dar info sobre talles y precios?"
)

const CUSTOM_MSG = encodeURIComponent(
  "Hola! Quiero consultar sobre un producto con diseño personalizado. ¿Me pueden dar más info?"
)

const WOMAN_MSG = encodeURIComponent(
  "Hola! Quiero consultar por una remera en talle mujer de Zarpazo. ¿Qué talles tienen disponibles?"
)

export const slides: PromoSlide[] = [
  {
    badge: "Nueva categoría",
    title: "Canguros con diseños personalizados",
    body: "Personalizá tu hoddie o canguro con cualquier diseño disponible en la web — los mismos diseños que ves en remeras negras, ahora también en canguro.",
    image: "/hoddie/hoddie.webp",
    imageAlt: "Canguro negro Zarpazo con diseño personalizado",
    imageFit: "contain",
    primaryCta: {
      label: "Pedir por WhatsApp",
      href: `https://wa.me/${config.whatsapp}?text=${HOODIE_MSG}`,
      external: true,
    },
    secondaryCta: {
      label: "Ver diseños disponibles",
      href: "/catalogo",
    },
  },
  {
    badge: "Servicio exclusivo",
    title: "Tu diseño, tu producto",
    image: "/personalized/personalized.webp",
    imageAlt: "Producto personalizado Zarpazo con diseño propio",
    imageFit: "contain",
    steps: [
      "Nos mandás el diseño + producto, color y talle por WhatsApp",
      "Lo preparamos en Photoshop para que quede sin píxeles y bien definido",
      "Lo imprimimos en DTF y lo estampamos en la tela",
      "Te lo enviamos en 5 a 7 días hábiles",
    ],
    primaryCta: {
      label: "Consultar por WhatsApp",
      href: `https://wa.me/${config.whatsapp}?text=${CUSTOM_MSG}`,
      external: true,
    },
  },
  {
    badge: "También para ellas",
    title: "Todos los diseños en talle mujer",
    body: "Cada diseño disponible en remera de mujer. Consultanos por WhatsApp y te asesoramos con el talle.",
    image: "/personalized/woman-tshirt.webp",
    imageAlt: "Mujer con remera Zarpazo",
    imageFit: "cover",
    primaryCta: {
      label: "Consultar talle por WhatsApp",
      href: `https://wa.me/${config.whatsapp}?text=${WOMAN_MSG}`,
      external: true,
    },
    secondaryCta: {
      label: "Ver catálogo",
      href: "/catalogo",
    },
  },
]
