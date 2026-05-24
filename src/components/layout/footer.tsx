import Link from "next/link"
import { config } from "@/data/config"
import AnnouncementBar from "./announcement-bar"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 mt-auto">
      <AnnouncementBar />
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Marca */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-white font-bold text-xl tracking-tight">
              {config.brand.nameUpper}
            </span>
            <p className="font-mono text-zinc-400 text-xs leading-relaxed max-w-xs">
              Diseños que garpan. Remeras con identidad para devs, geeks y cultura.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href={config.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-white border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 rounded-md transition-all duration-200">
              Instagram ↗
            </a>
            <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-white border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 rounded-md transition-all duration-200">
              WhatsApp ↗
            </a>
          </div>
        </div>

        {/* Tienda */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
            Tienda
          </span>
          <div className="flex flex-col gap-3">
            <Link href="/#productos" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200">Productos</Link>
            <Link href="/nosotros" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200">Nosotros</Link>
          </div>
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
            Contacto
          </span>
          <div className="flex flex-col gap-3">
            <a href={config.instagram} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200">Instagram</a>
            <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200">WhatsApp</a>
          </div>
        </div>

      </div>

      {/* Barra inferior */}
      <div className="border-t border-zinc-900 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="font-mono text-zinc-600 text-xs">© 2026 {config.brand.name}. Todos los derechos reservados.</span>
          <span className="font-mono text-zinc-700 text-xs">Hecho con ☕ en Argentina</span>
        </div>
      </div>
    </footer>
  )
}