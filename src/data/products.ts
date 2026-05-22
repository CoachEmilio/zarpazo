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
    price: 34900,
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
    price: 34900,
    active: true,
    image: "/products/docker-kill/front.webp",
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
    price: 34900,
    active: true,
    image: "/products/not-a-robot/front.webp",
    variants: makeVariants("im-not-a-robot"),
    colors: [
      { name: "Blanco", image: "/products/not-a-robot/white.webp", hex: "#ffffff" },

    ]
  },
]