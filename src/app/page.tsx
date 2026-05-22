import { products } from "@/data/products"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-6 py-6 border-b border-zinc-800">
        <span className="font-mono text-xl font-bold tracking-tight">
          Targattos
        </span>
        <span className="font-mono text-zinc-500 text-sm">
          drops limitados
        </span>
      </header>

      <section className="px-6 py-16 text-center">
        <h1 className="font-mono text-4xl font-bold tracking-tight">
          Diseños que garpan.
        </h1>
        <p className="font-mono text-zinc-400 mt-4 text-lg">
          Remeras para gente que entiende.
        </p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 pb-16">
        {products.filter((p) => p.active).map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-3 border border-zinc-800 rounded-lg p-4 hover:border-zinc-600 transition-colors"
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
          </div>
        ))}
      </section>
    </main>
  )
}