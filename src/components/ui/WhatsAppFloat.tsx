import { config } from "@/data/config"

export default function WhatsAppFloat() {
  const message = encodeURIComponent("Hola! Quiero consultar por una remera de Zarpazo.")

  return (
    <a
      href={`https://wa.me/${config.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full border border-zinc-700 bg-zinc-950/95 px-4 py-3 text-sm font-mono text-white shadow-lg shadow-black/30 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-zinc-900"
    >
      <img
        src="/whatsapp-icon.svg"
        alt="WhatsApp"
        className="h-5 w-5"
      />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}