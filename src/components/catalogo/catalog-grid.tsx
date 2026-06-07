"use client"

import React, { useState } from "react"
import type { Product } from "@/lib/api"
import Image from "next/image"
import Link from "next/link"
import PriceTag from "@/components/ui/PriceTag"
import CatalogFilters from "./catalog-filters"
import CatalogSearch from "./catalog-search"
import { getCategoryLabel } from "@/data/categories"
import type { CategoryKey } from "@/data/categories"

type Category = "todos" | CategoryKey

type Props = { products: Product[] }

export default function CatalogGrid({ products }: Props) {
  const [activeCategory, setActiveCategory] = useState<Category>("todos")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "todos" || p.category === activeCategory
    const q = searchQuery.trim().toLowerCase()
    const categoryLabel = getCategoryLabel(p.category).toLowerCase()
    const matchesSearch =
      q === "" ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q) ||
      categoryLabel.includes(q)
    return p.active && matchesCategory && matchesSearch
  })

  return (
    <section className="flex-1 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center sm:justify-between">
        <CatalogFilters activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <CatalogSearch value={searchQuery} onChange={setSearchQuery} />
      </div>

      {filtered.length === 0 ? (
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center gap-3">
          <span className="font-mono text-zinc-400 text-sm">No encontramos "{searchQuery}"</span>
          <button onClick={() => setSearchQuery("")} className="font-mono text-xs text-zinc-400 hover:text-white transition-colors underline">
            Limpiar búsqueda
          </button>
        </div>
      ) : (
        <section id="productos" className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-6 pb-16">
        {filtered.map((product, index) => {
          const key = product.id
          return (
            <Link
              key={key}
              href={`/product/${product.slug}`}
              className="flex flex-col gap-3 border border-zinc-800 rounded-lg p-4 hover:border-zinc-600 transition-colors cursor-pointer"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 15vw"
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
          )
        })}
        </section>
      )}
    </section>
  )
}
