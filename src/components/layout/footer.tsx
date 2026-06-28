import Link from "next/link"
import Image from "next/image"
import { config } from "@/data/config"
export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Marca */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="inline-flex w-fit items-center">
              <Image
                src={config.brand.logoPath}
                alt={config.brand.name}
                width={200}
                height={200}
                className="h-16 w-auto"
              />
            </Link>
            <span
              className="font-mono font-bold text-xl tracking-tight"
              style={{ color: config.brand.accentColor }}
            >
              {config.brand.nameUpper}
            </span>
            <p className="font-mono text-zinc-400 text-xs leading-relaxed max-w-xs">
              Diseños que garpan. Remeras con identidad para devs, geeks y cultura.
            </p>
          </div>
          {/* ✅ flex-wrap va ACÁ */}
          <div className="flex items-center gap-3 flex-wrap">
            <a href={config.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 rounded-md transition-all duration-200">
              Instagram ↗
            </a>
            <a href={config.youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 rounded-md transition-all duration-200">
              YouTube ↗
            </a>
            <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 rounded-md transition-all duration-200">
              WhatsApp ↗
            </a>
            <a href={`mailto:${config.correo}`} className="flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 rounded-md transition-all duration-200">
              Email ↗
            </a>
          </div>
        </div>

        {/* Tienda */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
            Tienda
          </span>
          <div className="flex flex-col gap-3">
            <Link href="/" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200">Inicio</Link>
            <Link href="/catalogo" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200">Catálogo</Link>
            <Link href="/guia-de-talles" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200">Guía de talles</Link>
            <Link href="/nosotros" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200">Nosotros</Link>
            <Link href="/contacto" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200">Contacto</Link>
            <Link href="/legal" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200">Políticas y términos</Link>
          </div>
        </div>

        {/* Contacto — ✅ restaurado a como estaba originalmente */}
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
            Contacto
          </span>
          <div className="flex flex-col gap-3">
            <a href={config.instagram} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200">Instagram</a>
            <a href={config.youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200">YouTube</a>
            <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200">WhatsApp</a>
            <a href={`mailto:${config.correo}`} className="font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200">Email</a>
          </div>
        </div>

      </div>

      {/* Barra inferior */}
      <div className="border-t border-zinc-900 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="font-mono text-zinc-400 text-xs">© 2026 {config.brand.name}. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <Link href="/legal" className="font-mono text-zinc-400 text-xs hover:text-zinc-200 transition-colors duration-200">Políticas y términos</Link>
            <span className="font-mono text-zinc-400 text-xs">Hecho con ☕ en Argentina</span>
          </div>
        </div>
      </div>
    </footer>
  )
}