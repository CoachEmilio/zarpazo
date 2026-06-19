import type { Product } from "@/lib/api"
import ProductCard from "@/components/ui/ProductCard"

type Props = {
  currentSlug: string
  products: Product[]
}

export default function RelatedProducts({ currentSlug, products }: Props) {
  const related = products
    .filter((p) => p.active && p.slug !== currentSlug)
    .slice(0, 4)

  if (related.length === 0) return null

  return (
    <section className="mt-24 border-t border-zinc-800 pt-12">
      <h2 className="font-mono text-xs text-zinc-400 uppercase tracking-widest mb-8">
        También te puede gustar
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            sizes="(max-width: 639px) 50vw, 25vw"
          />
        ))}
      </div>
    </section>
  )
}