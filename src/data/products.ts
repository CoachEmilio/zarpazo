export type ProductVariant = {
  id: string
  size: string
}

export type Product = {
  id: string
  slug: string
  title: string
  description: string
  price: number
  price_original: number
  discount_label: string
  active: boolean
  image: string
  variants: ProductVariant[]
  colors?: { name: string; image: string; hex: string }[]
}

const SIZES = ["S", "M", "L", "XL", "XXL"]
const DISCOUNT = 0.10 // 10% — cambiás esto y se aplica a todos
const BASE_PRICE = 40000
const DISCOUNT_LABEL = "Oferta de lanzamiento"

const makeVariants = (slug: string): ProductVariant[] =>
  SIZES.map((size) => ({ id: `${slug}-${size}`, size }))

const withDiscount = (original: number) =>
  Math.round(original * (1 - DISCOUNT))

export const products: Product[] = [
  {
    id: "1",
    slug: "loading-cafe",
    title: "<Loading/>",
    description: "Porque sin café no arranca nada.",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/loading-cafe/coffee.webp",
    variants: makeVariants("loading-cafe"),
    colors: [
      { name: "Negro", image: "/products/loading-cafe/black.webp", hex: "#1a1a1a" },
      { name: "Blanco", image: "/products/loading-cafe/white.webp", hex: "#ffffff" },
      { name: "Gris", image: "/products/loading-cafe/grey.webp", hex: "#6b7280" },
      { name: "Café", image: "/products/loading-cafe/coffee.webp", hex: "#6f4e37" },
    ]
  },
  {
    id: "2",
    slug: "js-do-it",
    title: "JS Do It",
    description: "El arma elegida.",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/js-do-it/black.webp",
    variants: makeVariants("js-do-it"),
    colors: [
      { name: "Negro", image: "/products/js-do-it/black.webp", hex: "#1a1a1a" },
      { name: "Blanco", image: "/products/js-do-it/white.webp", hex: "#ffffff" },
      { name: "Gris", image: "/products/js-do-it/grey.webp", hex: "#6b7280" },
      { name: "Café", image: "/products/js-do-it/coffee.webp", hex: "#6f4e37" },
    ]
  },
  {
    id: "3",
    slug: "sudo-rm-rf",
    title: "sudo rm -rf/*",
    description: "El comando que todos tememos.",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/sudo-rm-rf/grey.webp",
    variants: makeVariants("sudo-rm-rf"),
    colors: [
      { name: "Blanco", image: "/products/sudo-rm-rf/white.webp", hex: "#ffffff" },
      { name: "Gris", image: "/products/sudo-rm-rf/grey.webp", hex: "#6b7280" },
      { name: "Café", image: "/products/sudo-rm-rf/coffee.webp", hex: "#6f4e37" },
      { name: "Negro", image: "/products/sudo-rm-rf/black.webp", hex: "#1a1a1a" },
    ]
  },
  {
    id: "4",
    slug: "layer-8",
    title: "Layer 8 Problem",
    description: "Siempre está entre la silla y el teclado.",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/layer-8/black.webp",
    variants: makeVariants("layer-8"),
    colors: [
      { name: "Negro", image: "/products/layer-8/black.webp", hex: "#1a1a1a" },
      { name: "Blanco", image: "/products/layer-8/white.webp", hex: "#ffffff" },
    ]
  },
  {
    id: "5",
    slug: "sweet-home",
    title: "Home Sweet Home",
    description: "There's no place like home.",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/sweet-home/black.webp",
    variants: makeVariants("sweet-home"),
    colors: [
      { name: "Negro", image: "/products/sweet-home/black.webp", hex: "#1a1a1a" },
    ]
  },
  {
    id: "6",
    slug: "zarpazo-logo",
    title: "Zarpazo",
    description: "El logo. La marca. El origen.",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/zarpazo-logo/black.webp",
    variants: makeVariants("zarpazo-logo"),
    colors: [
      { name: "Negro", image: "/products/zarpazo-logo/black.webp", hex: "#1a1a1a" },
      { name: "Blanco", image: "/products/zarpazo-logo/white.webp", hex: "#ffffff" },
      { name: "Gris", image: "/products/zarpazo-logo/grey.webp", hex: "#6b7280" },
      { name: "Café", image: "/products/zarpazo-logo/coffee.webp", hex: "#6f4e37" },
    ]
  },
  {
    id: "7",
    slug: "super-nintendo",
    title: "Super Nintendo",
    description: "El arma de la infancia.",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/super-nintendo/black.webp",
    variants: makeVariants("super-nintendo"),
    colors: [
      { name: "Blanco", image: "/products/super-nintendo/white.webp", hex: "#ffffff" },
      { name: "Negro", image: "/products/super-nintendo/black.webp", hex: "#1a1a1a" },
    ]
  },
  {
    id: "8",
    slug: "torre-pisa",
    title: "<i> Torre </i>",
    description: "Nuestro Norte es el Sur.",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/torre-pisa/white.webp",
    variants: makeVariants("torre-pisa"),
    colors: [
      { name: "Negro", image: "/products/torre-pisa/black.webp", hex: "#1a1a1a" },
      { name: "Blanco", image: "/products/torre-pisa/white.webp", hex: "#ffffff" },
      { name: "Gris", image: "/products/torre-pisa/grey.webp", hex: "#6b7280" },
      { name: "Café", image: "/products/torre-pisa/coffee.webp", hex: "#6f4e37" },
    ]
  },
  {
    id: "9",
    slug: "docker-kill",
    title: "Docker Kill",
    description: "Porque a veces hay que eliminar más que contenedores.",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/docker-kill/white.webp",
    variants: makeVariants("docker-kill"),
    colors: [
      { name: "Blanco", image: "/products/docker-kill/white.webp", hex: "#ffffff" },
    ]
  },
  {
    id: "10",
    slug: "im-not-a-robot",
    title: "I'm Not a Robot",
    description: "Porque a veces la autenticación es un desafío.",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/not-a-robot/white.webp",
    variants: makeVariants("im-not-a-robot"),
    colors: [
      { name: "Blanco", image: "/products/not-a-robot/white.webp", hex: "#ffffff" },
    ]
  },
  {
    id: "11",
    slug: "capitan-del-espacio",
    title: "Capitán del Espacio",
    description: "El héroe de la galaxia.",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/capitan-del-espacio/white.webp",
    variants: makeVariants("capitan-del-espacio"),
    colors: [
      { name: "Blanco", image: "/products/capitan-del-espacio/white.webp", hex: "#ffffff" },
    ]
  },
  {
    id: "12",
    slug: "snack-developer",
    title: "Full Snack Developer",
    description: "Para los desarrolladores que necesitan recarga.",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/snack-developer/black.webp",
    variants: makeVariants("snack-developer"),
    colors: [
      { name: "Blanco", image: "/products/snack-developer/white.webp", hex: "#ffffff" },
      { name: "Negro", image: "/products/snack-developer/black.webp", hex: "#1a1a1a" },
    ]
  },
  {
    id: "13",
    slug: "senior-developer",
    title: "Señor Developer",
    description: "La remera que solo unos pocos pueden tener",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/senior-developer/black.webp",
    variants: makeVariants("senior-developer"),
    colors: [
      { name: "Blanco", image: "/products/senior-developer/white.webp", hex: "#ffffff" },
      { name: "Negro", image: "/products/senior-developer/black.webp", hex: "#1a1a1a" },
    ]
  },
  {
    id: "14",
    slug: "switch-please",
    title: "Switch Please",
    description: "Para los que conectan el switch al monitor y esperan magia.",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/switch-please/black.webp",
    variants: makeVariants("switch-please"),
    colors: [
      { name: "Blanco", image: "/products/switch-please/white.webp", hex: "#ffffff" },
      { name: "Negro", image: "/products/switch-please/black.webp", hex: "#1a1a1a" },
    ]
  },
  {
    id: "15",
    slug: "just-sudo-it",
    title: "Just Sudo It",
    description: "Para los que quieren borrar todo y no saben por qué.",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/just-sudo-it/black.webp",
    variants: makeVariants("just-sudo-it"),
    colors: [
      { name: "Negro", image: "/products/just-sudo-it/black.webp", hex: "#1a1a1a" },
    ]
  },
  {
    id: "16",
    slug: "kali-linux",
    title: "Kali Assassin",
    description: "Remeras para los que se dicen hackers éticos",
    price: withDiscount(BASE_PRICE),
    price_original: BASE_PRICE,
    discount_label: DISCOUNT_LABEL,
    active: true,
    image: "/products/kali-linux/white.webp",
    variants: makeVariants("kali-linux"),
    colors: [
      { name: "Blanco", image: "/products/kali-linux/white.webp", hex: "#ffffff" },
    ]
  }
]