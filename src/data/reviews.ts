export type Review = {
  id: number
  draft: boolean
  name: string
  image: string
  text: string
}

export const reviews: Review[] = [
  {
    id: 1,
    draft: false,
    name: "George y Bruna",
    image: "/reviews/review-1.webp",
    text: "Espectacular el diseño de la secta del fenix, a Bruna le encantó.",
  },
  {
    id: 2,
    draft: false,
    name: "Nino",
    image: "/reviews/review-2.webp",
    text: "yo andube presumiendo mi nueva remera zarpazo",
  },
  {
    id: 3,
    draft: false,
    name: "Manuel",
    image: "/reviews/review-3.webp",
    text: "Un diseño increíble, que terminé pidiendo un canguro con diseño propio.",
  },
  {
    id: 4,
    draft: false,
    name: "Adrian",
    image: "/reviews/review-4.webp",
    text: "La uso mientras doy clases y la tela fabulosa, deluxe!",
  },
]
