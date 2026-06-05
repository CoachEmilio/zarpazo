import Link from "next/link"
import { config } from "@/data/config"

export default function NosotrosCTA() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="font-mono text-2xl font-bold text-white">
          ¿Ya viste el catálogo?
        </h2>
        <p className="font-mono text-zinc-400 text-sm leading-relaxed max-w-sm">
          Si llegaste hasta acá es porque algo te copó. Fijate en los diseños — seguro hay uno que te representa.
        </p>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Link
            href="/catalogo"
            className="font-mono text-sm bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-zinc-200 transition-colors duration-200"
          >
            Ver catálogo →
          </Link>
          <a
            href={`https://wa.me/${config.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm border border-zinc-700 hover:border-white text-zinc-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-200 hover:bg-white/5"
          >
            Escribinos por WhatsApp ↗
          </a>
          <a
            href={`mailto:${config.correo}`}
            className="font-mono text-sm border border-zinc-700 hover:border-white text-zinc-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-200 hover:bg-white/5"
          >
            Escribinos por email ↗
          </a>
        </div>
      </div>
    </section>
  )
}