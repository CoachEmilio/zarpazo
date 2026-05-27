import { config } from "@/data/config"

export default function OrderCTA() {
  return (
    <section className="px-6 py-20 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-4xl mx-auto flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            Pedido por WhatsApp
          </span>
          <h2 className="font-brand text-3xl font-bold tracking-[0.18em] text-white md:text-5xl">
            ¿Querés uno o varios diseños?
          </h2>
          <p className="font-mono text-sm leading-relaxed text-zinc-400 md:text-base">
            Escribinos por WhatsApp para pedir un diseño o varios a la vez. Si comprás más de 4 unidades, te pasamos un precio con descuento por volumen.
          </p>
        </div>

        <a
          href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(
            "Hola! Quiero pedir uno o varios diseños. ¿Me pasan precio con descuento por compra de más de 4 unidades?"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-mono text-sm font-bold text-black transition-colors hover:bg-zinc-200"
        >
          Escribirnos por WhatsApp ↗
        </a>
      </div>
    </section>
  )
}