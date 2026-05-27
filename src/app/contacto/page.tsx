import Link from "next/link"
import AnnouncementBar from "@/components/layout/announcement-bar"
import { config } from "@/data/config"

export default function ContactoPage() {
  return (
    <main className="flex-1 bg-black text-white">
      <AnnouncementBar />

      <section className="px-6 py-20 border-b border-zinc-900">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
            Contacto
          </span>
          <h1 className="font-brand text-4xl font-bold tracking-[0.18em] text-[#f1e6cc] md:text-6xl">
            HABLEMOS
          </h1>
          <p className="font-mono text-zinc-400 text-sm leading-relaxed max-w-2xl">
            Si querés hacer un pedido, consultar talles o encargar una tanda para tu comunidad, escribinos por el canal que te quede más cómodo.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${config.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-zinc-700 bg-white px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-zinc-200"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${config.correo}`}
              className="inline-flex items-center justify-center rounded-md border border-zinc-800 px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-zinc-200 transition-colors hover:border-zinc-600 hover:text-white"
            >
              Email
            </a>
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center rounded-md border border-zinc-800 px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-zinc-200 transition-colors hover:border-zinc-600 hover:text-white"
            >
              Ver catálogo
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
            <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">WhatsApp</span>
            <p className="mt-3 font-mono text-sm text-zinc-300">Respuesta rápida para pedidos y talles.</p>
          </div>
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
            <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">Email</span>
            <p className="mt-3 font-mono text-sm text-zinc-300">Ideal para consultas largas o pedidos grandes.</p>
          </div>
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6">
            <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">Instagram</span>
            <p className="mt-3 font-mono text-sm text-zinc-300">Si querés ver novedades y lanzamientos.</p>
          </div>
        </div>
      </section>
    </main>
  )
}