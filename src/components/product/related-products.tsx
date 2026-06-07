import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/api"
import PriceTag from "@/components/ui/PriceTag"

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
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="flex flex-col gap-3 border border-zinc-800 rounded-lg p-4 hover:border-zinc-600 transition-colors"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-md">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 639px) 50vw, 25vw"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-sm font-bold">{product.title}</span>
              <span className="font-mono text-zinc-400 text-xs">{product.description}</span>
              <div className="mt-1">
                <PriceTag
                  price={product.price}
                  price_original={product.price_original}
                  discount_label={product.discount_label}
                  variant="compact"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}