"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { slides, type PromoSlide } from "@/data/promo-slides"

// ─── SlideLeft — panel de copy ────────────────────────────────────────────────

function SlideLeft({ slide, animating }: { slide: PromoSlide; animating: boolean }) {
  const fade = (delay = "") =>
    `transition-[opacity,transform] duration-500 ease-out ${delay} ${animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`

  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left justify-center gap-6 px-8 py-14 md:py-20 order-2 md:order-1">
      <span className="font-mono text-xs tracking-widest uppercase text-black/60">
        {slide.badge}
      </span>

      <h2 id="promo-slider-title" className={`font-brand text-4xl md:text-5xl font-bold leading-tight text-black tracking-wide ${fade()}`}>
        {slide.title}
      </h2>

      {slide.body && (
        <p className={`font-mono text-base text-black/70 leading-relaxed max-w-sm ${fade("delay-75")}`}>
          {slide.body}
        </p>
      )}

      {slide.steps && slide.image && (
        <ol className={`flex flex-col gap-3 text-left ${fade("delay-100")}`} aria-label="Pasos del proceso">
          {slide.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="font-mono text-lg font-bold text-black/70 tabular-nums w-7 shrink-0 leading-tight">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-mono text-xs text-black/60 leading-relaxed pt-1">{step}</p>
            </li>
          ))}
        </ol>
      )}

      <div className={`flex flex-col sm:flex-row gap-3 mt-2 items-center md:items-start ${fade("delay-100")}`}>
        <Link
          href={slide.primaryCta.href}
          {...(slide.primaryCta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="inline-flex items-center justify-center font-mono text-xs font-bold uppercase tracking-widest px-6 h-11 rounded-full bg-black text-[#f1e6cc] hover:bg-zinc-900 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#f1e6cc]"
        >
          {slide.primaryCta.label}
        </Link>

        {slide.secondaryCta && (
          <Link
            href={slide.secondaryCta.href}
            {...(slide.secondaryCta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center justify-center font-mono text-xs font-bold uppercase tracking-widest px-6 h-11 rounded-full border-2 border-black/20 text-black hover:border-black hover:bg-black/5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#f1e6cc]"
          >
            {slide.secondaryCta.label}
          </Link>
        )}
      </div>
    </div>
  )
}

// ─── SlideRight — panel de imagen o steps ─────────────────────────────────────

function SlideRight({ slide, animating, isFirst }: { slide: PromoSlide; animating: boolean; isFirst: boolean }) {
  const isCover = slide.imageFit === "cover"

  return (
    <div
      className={`absolute inset-0 flex transition-[opacity,transform] duration-500 ease-out ${animating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
    >
      {slide.image ? (
        <Image
          src={slide.image}
          alt={slide.imageAlt ?? slide.title}
          fill
          sizes="(max-width: 768px) 80vw, 50vw"
          className={isCover ? "object-cover object-center" : "object-contain p-6 md:p-10"}
          priority={isFirst}
          loading={isFirst ? undefined : "eager"}
        />
      ) : slide.steps ? (
        <div className="flex flex-col justify-center gap-6 px-8 py-14 md:px-12 w-full">
          {slide.steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="font-mono text-3xl font-bold text-black/40 tabular-nums w-10 shrink-0 leading-tight">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-mono text-sm text-black/65 leading-relaxed pt-1.5">{step}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

// ─── NavDots — navegación ─────────────────────────────────────────────────────

function NavDots({ total, current, onGo }: { total: number; current: number; onGo: (i: number) => void }) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10" role="tablist" aria-label="Banners promocionales">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === current}
          aria-label={`Banner ${i + 1}`}
          onClick={() => onGo(i)}
          className="min-h-12 min-w-6 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
        >
          <span className={`h-2 rounded-full transition-all duration-300 ${
            i === current ? "bg-black w-5" : "bg-black/40 w-2 hover:bg-black/70"
          }`} />
        </button>
      ))}
    </div>
  )
}

// ─── PromoSlider — orquestador ────────────────────────────────────────────────

export default function PromoSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const go = useCallback((index: number) => {
    if (animating || index === current) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 400)
  }, [animating, current])

  const next = useCallback(() => {
    go(current === slides.length - 1 ? 0 : current + 1)
  }, [current, go])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section aria-labelledby="promo-slider-title" className="w-full border-t border-b border-black/10" style={{ backgroundColor: "#f1e6cc" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 md:min-h-145">
        <SlideLeft slide={slide} animating={animating} />
        <div className="relative overflow-hidden order-1 md:order-2" style={{ minHeight: "clamp(360px, 50vw, 580px)" }} aria-live="polite" aria-atomic="true">
          <SlideRight slide={slide} animating={animating} isFirst={current === 0} />
          <NavDots total={slides.length} current={current} onGo={go} />
        </div>
      </div>
    </section>
  )
}
