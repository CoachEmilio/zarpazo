import CatalogHeader from "@/components/catalogo/catalog-header"
import CatalogGrid from "@/components/catalogo/catalog-grid"
import OrderCTA from "@/components/home/order-cta"
import { getProducts, getCategories } from "@/lib/api"

type Props = {
  searchParams: Promise<{ categoria?: string }>
}

export default async function CatalogoPage({ searchParams }: Props) {
  const { categoria } = await searchParams
  const [products, categories] = await Promise.all([getProducts(), getCategories()])

  return (
    <main className="flex-1 bg-black text-white">
      <CatalogHeader />
      <CatalogGrid products={products} categories={categories} initialCategory={categoria} />
      <OrderCTA />
    </main>
  )
}
