import Link from "next/link"
import { MenuSquare, MessageCircleMore } from "lucide-react"

import { config } from "@/data/config"

export default function GuiaDeTallesCTA() {
  return (
    <section className="px-6 pb-20 pt-10">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-zinc-900 bg-zinc-950 px-6 py-8 md:px-8 md:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
              ¿Y ahora qué?
            </span>
            <h2 className="font-brand text-3xl font-bold tracking-[0.18em] text-white md:text-5xl">
              Encontrá tu remera.
            </h2>
            <p className="font-mono text-sm leading-relaxed text-zinc-400 md:text-base">
              Mirá el catálogo para encontrar tu próxima remera o escribinos por WhatsApp si querés ayuda con los talles, una compra de varias unidades o un pedido especial.
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-3 md:max-w-md">
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 font-mono text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/5"
            >
              <MenuSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
              Catálogo
            </Link>
            <a
              href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(
                "Hola! Ya vi la guía de talles y quiero ayuda para elegir diseño/talle."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-mono text-sm font-bold text-black transition-colors hover:bg-zinc-200"
            >
              <MessageCircleMore className="h-4 w-4 shrink-0" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}