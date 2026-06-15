"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/api"
import PriceTag from "@/components/ui/PriceTag"

type Props = { products: Product[] }

export default function Carousel({ products }: Props) {
  const featured = products.filter((p) => p.active).slice(0, 5)
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev">("next")

  const go = useCallback((index: number, dir: "next" | "prev") => {
    if (animating) return
    setAnimating(true)
    setDirection(dir)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 400)
  }, [animating])

  const next = useCallback(() => go(current === featured.length - 1 ? 0 : current + 1, "next"), [current, go, featured.length])
  const prev = useCallback(() => go(current === 0 ? featured.length - 1 : current - 1, "prev"), [current, go, featured.length])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const product = featured[current]

  const slideClass = animating
    ? direction === "next"
      ? "opacity-0 translate-x-4"
      : "opacity-0 -translate-x-4"
    : "opacity-100 translate-x-0"

  return (
    <section className="w-full bg-zinc-950 border-t border-zinc-900 my-12 md:my-16">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2">
        
        {/* Imagen */}
        <Link
        href={`/product/${product.slug}`}
        style={{ minHeight: "clamp(280px, 50vw, 520px)" }}
        className="relative bg-zinc-900 group block overflow-hidden"
        >
        <div
            key={current}
            className="absolute inset-0 animate-in fade-in zoom-in-95 duration-500"
        >
            <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 70vw, 50vw"
            className="object-contain p-4 md:p-8 group-hover:scale-105 transition-transform duration-700"
            priority
            />
        </div>
        </Link>

        {/* Info */}
        <div className="flex flex-col justify-between px-8 py-10 relative overflow-hidden min-h-80 md:min-h-130">

          {/* Número decorativo */}
          <span
            className="absolute -right-4 top-1/2 -translate-y-1/2 text-[180px] font-bold text-zinc-900 select-none pointer-events-none leading-none tabular-nums"
            aria-hidden
          >
            {String(current + 1).padStart(2, "0")}
          </span>

          {/* Header */}
          <div className="flex items-center justify-between relative z-10">
            <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase">
              Destacados
            </span>
            <span className="font-mono text-xs text-zinc-400 tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
            </span>
          </div>

          {/* Contenido */}
          <div className={`flex flex-col gap-4 relative z-10 transition-all duration-400 ease-out ${slideClass}`}>
            <Link href={`/product/${product.slug}`} className="group/title">
              <h2 className="font-mono text-4xl md:text-5xl font-bold text-white leading-tight group-hover/title:text-zinc-300 transition-colors">
                {product.title}
              </h2>
            </Link>
            <p className="font-mono text-zinc-400 text-base leading-relaxed max-w-xs">
              {product.description}
            </p>
            <div className="mt-2">
              <PriceTag
                price={product.price}
                price_original={product.price_original}
                discount_label={product.discount_label}
              />
            </div>
            <Link
              href={`/product/${product.slug}`}
              className="mt-4 self-start font-mono text-sm border border-zinc-700 hover:border-white hover:text-white text-zinc-400 px-5 py-2.5 rounded-lg transition-all duration-200 hover:bg-white/5"
            >
              Ver producto →
            </Link>
          </div>

          {/* Controles */}
          <div className="flex items-center gap-4 relative z-10">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-zinc-800 hover:border-zinc-500 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1e6cc]/60"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full border border-zinc-800 hover:border-zinc-500 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1e6cc]/60"
              aria-label="Siguiente"
            >
              →
            </button>
            <div className="flex-1 flex gap-1.5">
              {featured.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i, i > current ? "next" : "prev")}
                  className="relative flex-1 min-h-12 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1e6cc]/60"
                  aria-label={`Ir al producto ${i + 1}`}
                >
                  <span className="relative w-full h-0.5 bg-zinc-800 rounded-full overflow-hidden">
                    {i === current && (
                      <span
                        className="absolute inset-y-0 left-0 bg-white rounded-full"
                        style={{ animation: "progress 5s linear forwards" }}
                      />
                    )}
                    {i < current && (
                      <span className="absolute inset-0 bg-zinc-500 rounded-full" />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
    </section>
  )
}