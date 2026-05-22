"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"

const featured = products.filter((p) => p.active).slice(0, 4)

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? featured.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === featured.length - 1 ? 0 : i + 1))

  const product = featured[current]

  return (
    <section className="w-full bg-black py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href={`/product/${product.slug}`}>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-colors">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-contain"
              priority
            />
          </div>

          <div className="flex items-center justify-between mt-4 px-1">
            <div>
              <p className="font-mono text-white font-bold text-lg">{product.title}</p>
              <p className="font-mono text-zinc-400 text-sm mt-1">{product.description}</p>
            </div>
            <p className="font-mono text-white font-bold text-lg">
              ${product.price.toLocaleString("es-AR")}
            </p>
          </div>
        </Link>

        <div className="flex items-center justify-center gap-6 mt-6">
          <button onClick={prev} className="font-mono text-zinc-400 hover:text-white transition-colors text-2xl">←</button>
          <div className="flex gap-2">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-zinc-700"}`}
              />
            ))}
          </div>
          <button onClick={next} className="font-mono text-zinc-400 hover:text-white transition-colors text-2xl">→</button>
        </div>
      </div>
    </section>
  )
}