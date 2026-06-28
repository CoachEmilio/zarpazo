"use client"

import { motion } from "framer-motion"
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
      <motion.a
        href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(buildWhatsappMessage(productTitle, selectedSize, selectedColor))}`}
        target="_blank"
        rel="noopener noreferrer"
        animate={{ filter: [
          "drop-shadow(0 0 2px rgba(241,230,204,0.05))",
          "drop-shadow(0 0 16px rgba(241,230,204,0.75))",
          "drop-shadow(0 0 2px rgba(241,230,204,0.05))",
          "drop-shadow(0 0 16px rgba(241,230,204,0.75))",
          "drop-shadow(0 0 2px rgba(241,230,204,0.05))",
          "drop-shadow(0 0 2px rgba(241,230,204,0.05))",
        ] }}
        transition={{ repeat: Infinity, duration: 3, times: [0, 0.15, 0.28, 0.43, 0.56, 1], ease: "easeInOut" }}
        className="block font-mono bg-white text-black px-6 py-3 rounded-lg text-center font-bold hover:bg-zinc-200 transition-colors"
      >
        Pedir por WhatsApp
      </motion.a>
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