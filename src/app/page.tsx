import { products } from "@/data/products"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex-1 bg-black text-white">
      <section className="px-6 py-16 text-center">
        <h1 className="font-mono text-4xl font-bold tracking-tight">
          Diseños que garpan.
        </h1>
        <p className="font-mono text-zinc-400 mt-4 text-lg">
          Remeras para gente que entiende.
        </p>
      </section>

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
      <section className="px-6 py-16 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono text-2xl font-bold tracking-tight text-center mb-12">
            ¿Cómo funciona?
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Elegís", desc: "Encontrás el diseño que te representa." },
            { step: "02", title: "Pedís", desc: "Mandás un WhatsApp con tu talle y color." },
            { step: "03", title: "Transferís", desc: "Confirmás el pedido con la transferencia." },
            { step: "04", title: "Recibís", desc: "Lo producimos y te lo mandamos." },
        ].map((item) => (
        <div key={item.step} className="flex flex-col gap-3">
          <span className="font-mono text-orange-500 text-4xl font-bold">
            {item.step}
          </span>
          <span className="font-mono text-white font-bold text-lg">
            {item.title}
          </span>
          <span className="font-mono text-zinc-400 text-sm">
            {item.desc}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>
    </main>
  )
}