import { products } from "@/data/products"
import Image from "next/image"
import Link from "next/link"
import PriceTag from "@/components/ui/PriceTag"
import { getCategoryLabel } from "@/data/categories"

export default function ProductGrid() {
  return (
    <section id="productos" className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-6 pb-16">
      {products.filter((p) => p.active).map((product, index) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="flex flex-col gap-3 border border-zinc-800 rounded-lg p-4 hover:border-zinc-600 transition-colors cursor-pointer"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-md">
            <Image
              src={product.image}
              alt={product.title}
              fill
              priority={index === 0}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="inline-block font-mono text-[10px] text-zinc-400 uppercase tracking-widest border border-zinc-800 px-2 py-1 rounded-md">{getCategoryLabel(product.category)}</span>
            <span className="font-mono text-sm font-bold">
              {product.title}
            </span>
            <span className="font-mono text-zinc-400 text-xs">
              {product.description}
            </span>
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
    </section>
  )
}