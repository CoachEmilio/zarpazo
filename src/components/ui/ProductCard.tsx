import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/api"
import PriceTag from "@/components/ui/PriceTag"

type Props = {
  product: Product
  categoryLabel?: string
  priority?: boolean
  sizes?: string
}

export default function ProductCard({
  product,
  categoryLabel,
  priority = false,
  sizes = "(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 15vw",
}: Props) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="flex flex-col gap-3 border border-zinc-800 rounded-lg p-4 hover:border-zinc-600 transition-colors cursor-pointer"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-md">
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority={priority}
          sizes={sizes}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-1">
        {categoryLabel && (
          <span className="inline-block font-mono text-[10px] text-zinc-400 uppercase tracking-widest border border-zinc-800 px-2 py-1 rounded-md">
            {categoryLabel}
          </span>
        )}
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
  )
}
