export type CategoryCard = {
  id: number
  draft: boolean
  categoryKey: string
  label: string
  image: string
}

export const categoryCards: CategoryCard[] = [
  {
    id: 1,
    draft: false,
    categoryKey: "dev",
    label: "Devs",
    image: "/categorydiscovery/ct1.webp",
  },
  {
    id: 2,
    draft: false,
    categoryKey: "gatos",
    label: "Gatos",
    image: "/categorydiscovery/ct2.webp",
  },
  {
    id: 3,
    draft: false,
    categoryKey: "borges",
    label: "Borges",
    image: "/categorydiscovery/ct3.webp",
  },
]
