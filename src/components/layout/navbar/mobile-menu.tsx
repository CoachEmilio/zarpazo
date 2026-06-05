"use client"

import { useState } from "react"
import Link from "next/link"
import { navLinks } from "./nav-links"
import { config } from "@/data/config"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        <span className={`block w-5 h-px bg-white transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block w-5 h-px bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-px bg-white transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setOpen(false)} />
      )}

      <div className={`fixed top-0 right-0 h-full w-72 bg-zinc-950 border-l border-zinc-800 z-50 flex flex-col transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
          <span className="font-brand text-lg font-bold text-white">{config.brand.nameUpper}</span>
          <button onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white transition-colors text-xl" aria-label="Cerrar menú">✕</button>
        </div>

        <nav className="flex flex-col px-6 py-8 gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-mono text-sm text-zinc-400 hover:text-white py-3 border-b border-zinc-900 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto px-6 py-8 border-t border-zinc-800 flex flex-col gap-3">
          <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">Seguinos</span>
          <a href={config.instagram} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors">Instagram ↗</a>
          <a href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-zinc-400 hover:text-white transition-colors">WhatsApp ↗</a>
        </div>
      </div>
    </>
  )
}