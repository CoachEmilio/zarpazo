export default function CatalogHeader() {
  return (
    <section className="px-6 py-16 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 items-center text-center">
        <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
          Catálogo
        </span>
        <h1 className="font-brand text-4xl font-bold tracking-[0.18em] text-[#f1e6cc] md:text-6xl">
          ZARPAZO
        </h1>
        <p className="font-mono text-zinc-400 text-sm leading-relaxed max-w-3xl">
          Acá están todos los diseños activos. Tocá uno para ver variantes, talle y pedir por WhatsApp.
        </p>
      </div>
    </section>
  )
}
