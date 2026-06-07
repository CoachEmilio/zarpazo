import CatalogHeader from "@/components/catalogo/catalog-header"
import CatalogGrid from "@/components/catalogo/catalog-grid"
import OrderCTA from "@/components/home/order-cta"
import { getProducts } from "@/lib/api"

export default async function CatalogoPage() {
  const products = await getProducts()

  return (
    <main className="flex-1 bg-black text-white">
      <CatalogHeader />
      <CatalogGrid products={products} />
      <OrderCTA />
    </main>
  )
}
