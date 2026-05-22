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
  active: boolean
  image: string
  variants: ProductVariant[]
  colors?: { name: string; image: string; hex: string }[]
}

const SIZES = ["S", "M", "L", "XL", "XXL"]

const makeVariants = (slug: string): ProductVariant[] =>
  SIZES.map((size) => ({ id: `${slug}-${size}`, size }))

export const products: Product[] = [
  {
    id: "1",
    slug: "loading-cafe",
    title: "<Loading/>",
    description: "Porque sin café no arranca nada.",
    price: 34900,
    active: true,
    image: "/products/loading-cafe/front.webp",
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
    price: 34900,
    active: true,
    image: "/products/js-do-it/front.webp",
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
    price: 34900,
    active: true,
    image: "/products/sudo-rm-rf/front.webp",
    variants: makeVariants("sudo-rm-rf"),
    colors: [
        { name: "Negro", image: "/products/sudo-rm-rf/black.webp", hex: "#1a1a1a" },
        { name: "Blanco", image: "/products/sudo-rm-rf/white.webp", hex: "#ffffff" },
        { name: "Gris", image: "/products/sudo-rm-rf/grey.webp", hex: "#6b7280" },
        { name: "Café", image: "/products/sudo-rm-rf/coffee.webp", hex: "#6f4e37" },
    ]
  },
  {
    id: "4",
    slug: "layer-8",
    title: "Layer 8 Problem",
    description: "El error siempre está entre la silla y el teclado.",
    price: 34900,
    active: true,
    image: "/products/layer-8/front.webp",
    variants: makeVariants("layer-8"),
  },
  {
    id: "5",
    slug: "sweet-home",
    title: "127.0.0.1 Sweet Home",
    description: "There's no place like home.",
    price: 34900,
    active: true,
    image: "/products/sweet-home/front.webp",
    variants: makeVariants("sweet-home"),
    colors: [
        { name: "Negro", image: "/products/sweet-home/black.webp", hex: "#1a1a1a" },
    ]
  },
  {
    id: "6",
    slug: "targattos-logo",
    title: "Targattos",
    description: "El logo. La marca. El origen.",
    price: 34900,
    active: true,
    image: "/products/targattos-logo/front.webp",
    variants: makeVariants("targattos-logo"),
    colors: [
        { name: "Negro", image: "/products/targattos-logo/black.webp", hex: "#1a1a1a" },
        { name: "Blanco", image: "/products/targattos-logo/white.webp", hex: "#ffffff" },
        { name: "Gris", image: "/products/targattos-logo/grey.webp", hex: "#6b7280" },
        { name: "Café", image: "/products/targattos-logo/coffee.webp", hex: "#6f4e37" },
    ]
  },
  {
    id: "7",
    slug: "super-nintendo",
    title: "Super Nintendo",
    description: "El arma de la infancia.",
    price: 34900,
    active: true,
    image: "/products/super-nintendo/front.webp",
    variants: makeVariants("super-nintendo"),
  },
  {
    id: "8",
    slug: "torre-pisa",
    title: "<i> Torre </i>",
    description: "Nuestro Norte es el Sur.",
    price: 34900,
    active: true,
    image: "/products/torre-pisa/front.webp",
    variants: makeVariants("torre-pisa"),
    colors: [
        { name: "Negro", image: "/products/torre-pisa/black.webp", hex: "#1a1a1a" },
        { name: "Blanco", image: "/products/torre-pisa/white.webp", hex: "#ffffff" },
        { name: "Gris", image: "/products/torre-pisa/grey.webp", hex: "#6b7280" },
        { name: "Café", image: "/products/torre-pisa/coffee.webp", hex: "#6f4e37" },
    ]
  },
]