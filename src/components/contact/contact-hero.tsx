import Link from "next/link"
import { config } from "@/data/config"

export default function ContactHero() {
  return (
    <section className="px-6 py-20 border-b border-zinc-900">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
          Contacto
        </span>
        <h1 className="font-brand text-4xl font-bold tracking-[0.18em] text-[#f1e6cc] md:text-6xl">
          HABLEMOS
        </h1>
        <p className="font-mono text-zinc-400 text-sm leading-relaxed max-w-2xl">
          Si querés hacer un pedido, consultar talles o encargar una tanda para tu comunidad, escribinos por el canal que te quede más cómodo.
        </p>
      </div>
    </section>
  )
}
