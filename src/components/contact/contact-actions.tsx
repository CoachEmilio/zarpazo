import Link from "next/link"
import { config } from "@/data/config"

export default function ContactActions() {
  return (
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
  )
}
