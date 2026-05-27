import AnnouncementBar from "@/components/layout/announcement-bar"
import ProductGrid from "@/components/home/product-grid"
import Carousel from "@/components/home/carousel"

export default function CatalogoPage() {
  return (
    <main className="flex-1 bg-black text-white">
      <AnnouncementBar />

      <section className="px-6 py-16 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
            Catálogo
          </span>
          <h1 className="font-brand text-4xl font-bold tracking-[0.18em] text-[#f1e6cc] md:text-6xl">
            ZARPAZO
          </h1>
          <p className="font-mono text-zinc-400 text-sm leading-relaxed max-w-2xl">
            Acá están todos los diseños activos. Tocá uno para ver variantes, talle y pedir por WhatsApp.
          </p>
        </div>
      </section>
      <ProductGrid />
      <Carousel />
    </main>
  )
}