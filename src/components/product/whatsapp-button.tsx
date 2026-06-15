"use client"

import { config } from "@/data/config"
import { buildWhatsappMessage } from "@/lib/whatsapp"

type Props = {
  productTitle: string
  selectedSize: string | null
  selectedColor: string | null
}

export default function WhatsappButton({ productTitle, selectedSize, selectedColor }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <a
        href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(buildWhatsappMessage(productTitle, selectedSize, selectedColor))}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono bg-white text-black px-6 py-3 rounded text-center font-bold hover:bg-zinc-200 transition-colors"
      >
        Pedir por WhatsApp
      </a>
      {(!selectedSize || !selectedColor) && (
        <p className="font-mono text-zinc-400 text-xs">
          {!selectedSize && !selectedColor
            ? "Elegí color y talle antes de pedir"
            : !selectedSize
            ? "Elegí un talle antes de pedir"
            : "Elegí un color antes de pedir"}
        </p>
      )}
      {selectedSize && selectedColor && (
        <p className="font-mono text-zinc-400 text-xs">
          Se abrirá WhatsApp con un mensaje y tus opciones
        </p>
      )}
    </div>
  )
}