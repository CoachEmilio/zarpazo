"use client"

import { config } from "@/data/config"

type Props = {
  productTitle: string
  selectedSize: string | null
  selectedColor: string | null
}

export default function WhatsappButton({ productTitle, selectedSize, selectedColor }: Props) {
  function buildMessage() {
    const size = selectedSize ?? "sin especificar"
    const color = selectedColor ?? "sin especificar"
    return `Hola! Quiero la remera: ${productTitle} — Color: ${color} — Talle: ${size}`
  }

  return (
    <div className="flex flex-col gap-2">
      <a
        href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(buildMessage())}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono bg-white text-black px-6 py-3 rounded text-center font-bold hover:bg-zinc-200 transition-colors"
      >
        Pedir por WhatsApp
      </a>
      {(!selectedSize || !selectedColor) && (
        <p className="font-mono text-zinc-600 text-xs">
          {!selectedSize && !selectedColor
            ? "Elegí color y talle antes de pedir"
            : !selectedSize
            ? "Elegí un talle antes de pedir"
            : "Elegí un color antes de pedir"}
        </p>
      )}
      {selectedSize && selectedColor && (
        <p className="font-mono text-zinc-600 text-xs">
          Confirmación manual por transferencia. Drop limitado.
        </p>
      )}
    </div>
  )
}