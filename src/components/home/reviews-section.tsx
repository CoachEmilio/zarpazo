import Image from "next/image"
import { Star } from "lucide-react"
import { reviews } from "@/data/reviews"

function StarRating() {
  return (
    <div role="img" aria-label="5 de 5 estrellas" className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  const active = reviews.filter((r) => !r.draft)
  if (active.length === 0) return null

  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono text-xs text-zinc-400 uppercase tracking-widest mb-10">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {active.map((review) => (
            <article
              key={review.id}
              className="flex flex-col gap-4 border border-zinc-800 rounded-lg p-4"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-md">
                <Image
                  src={review.image}
                  alt={`${review.name} usando su remera Zarpazo`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-2">
                <StarRating />
                <p className="font-mono text-xs text-zinc-300 leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <span className="font-mono text-xs text-zinc-500 mt-1">
                  — {review.name}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
