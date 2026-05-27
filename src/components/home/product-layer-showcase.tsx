"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import { products } from "@/data/products"
import { homeShowcaseCopy } from "@/data/home-showcase-copy"
import showcase from "@/data/home-showcase.json"

type ShowcaseItem = {
  slug: string
  label?: string
}

const showcaseItems = (showcase as ShowcaseItem[])
  .slice(0, 6)
  .map((item) => {
    const product = products.find((entry) => entry.slug === item.slug && entry.active)

    if (!product) return null

    return {
      ...item,
      product,
    }
  })
  .filter((item): item is { slug: string; label?: string; product: (typeof products)[number] } => Boolean(item))

export default function ProductLayerShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [paused, setPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener("change", updatePreference)

    return () => mediaQuery.removeEventListener("change", updatePreference)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el || prefersReducedMotion) return

    let rafId = 0
    let last: number | null = null
    const SPEED = 36 // px per second

    const step = (t: number) => {
      if (last === null) last = t
      const delta = t - last
      last = t

      if (!paused) {
        const distance = (SPEED * delta) / 1000
        el.scrollLeft = el.scrollLeft + distance
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          // loop back smoothly
          el.scrollLeft = 0
        }
      }

      rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [paused, prefersReducedMotion])

  function scrollBy(amount: number) {
    const el = containerRef.current
    if (!el) return
    el.scrollBy({ left: amount, behavior: "smooth" })
  }

  if (!showcaseItems.length) return null

  return (
    <section className="px-6 py-10 md:py-14">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="space-y-2 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            {homeShowcaseCopy.eyebrow}
          </span>
          <h2 className="font-brand text-2xl font-bold tracking-[0.18em] text-white md:text-4xl">
            {homeShowcaseCopy.title}
          </h2>
          <p className="max-w-2xl mx-auto font-mono text-sm leading-relaxed text-zinc-400 md:text-base">
            {homeShowcaseCopy.description}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-900 bg-zinc-950 px-2 py-6 md:px-6 md:py-8">
          <button
            aria-label="Scroll left"
            title="Anterior"
            onClick={() => scrollBy(-300)}
            className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/60 p-2 text-zinc-300 hover:bg-black/80"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div
            ref={containerRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            className="flex gap-4 overflow-x-auto px-4 pb-2 scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden"
          >
            {showcaseItems.map((item, index) => (
              <Link
                key={item.slug}
                href={`/product/${item.product.slug}`}
                className="group relative flex-none w-[clamp(170px,22vw,245px)] rounded-[1rem] border border-zinc-800 bg-black overflow-hidden"
                aria-label={`Ver ${item.product.title}`}
              >
                <div className="relative aspect-3/4">
                  <Image
                    src={item.product.image}
                    alt={item.product.title}
                    fill
                    sizes="(max-width: 768px) 70vw, 245px"
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    priority={index < 2}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

                  <div className="absolute left-4 bottom-4 right-4">
                    <span className="inline-flex rounded-full border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-300">
                      {item.label ?? "Producto"}
                    </span>
                    <h3 className="mt-2 font-mono text-base font-bold text-white transition-colors group-hover:text-[#f1e6cc]">
                      {item.product.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-zinc-400">{homeShowcaseCopy.cardCta}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button
            aria-label="Scroll right"
            title="Siguiente"
            onClick={() => scrollBy(300)}
            className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/60 p-2 text-zinc-300 hover:bg-black/80"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}