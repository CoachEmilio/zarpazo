import Image from "next/image"
import Link from "next/link"
import { categoryCards } from "@/data/category-discovery"

export default function CategoryDiscovery() {
  const active = categoryCards.filter((c) => !c.draft)
  if (active.length === 0) return null

  return (
    <section className="bg-black px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
          Explorar por categoría
        </p>
        <div className={`grid gap-4 grid-cols-1 ${active.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
          {active.map((card) => (
            <Link
              key={card.id}
              href={`/catalogo?categoria=${card.categoryKey}`}
              className="group flex flex-col border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-500 transition-colors duration-300"
            >
              <div className="relative aspect-square bg-zinc-950 overflow-hidden">
                <Image
                  src={card.image}
                  alt={`Colección ${card.label} — Zarpazo`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between px-5 py-4 bg-zinc-950 border-t border-zinc-800">
                <span className="font-mono text-sm font-bold uppercase tracking-widest text-white">
                  {card.label}
                </span>
                <span className="font-mono text-xs text-zinc-500 group-hover:text-white transition-colors duration-200">
                  Ver colección →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
