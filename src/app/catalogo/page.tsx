import CatalogHeader from "@/components/catalogo/catalog-header"
import CatalogGrid from "@/components/catalogo/catalog-grid"
import OrderCTA from "@/components/home/order-cta"

export default function CatalogoPage() {
  return (
    <main className="flex-1 bg-black text-white">
      <CatalogHeader />
      <CatalogGrid />
      <OrderCTA />
    </main>
  )
}