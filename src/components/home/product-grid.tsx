import { products } from "@/data/products"
import Image from "next/image"
import Link from "next/link"

export default function ProductGrid() {
  return (
    <section id="productos" className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 pb-16">
      {products.filter((p) => p.active).map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="flex flex-col gap-3 border border-zinc-800 rounded-lg p-4 hover:border-zinc-600 transition-colors cursor-pointer"
        >
          <div className="relative aspect-square w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-sm font-bold">
              {product.title}
            </span>
            <span className="font-mono text-zinc-400 text-xs">
              {product.description}
            </span>
            <span className="font-mono text-white text-sm mt-1">
              ${product.price.toLocaleString("es-AR")}
            </span>
          </div>
        </Link>
      ))}
    </section>
  )
}