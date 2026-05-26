import { config } from "@/data/config"

export default function AnnouncementBar() {
  const messages = [
    "🔥 Envíos a CABA y AMBA",
    "⚡ Diseños que Garpan",
    "🛠️ Click acá para ver catálogo en WhatsApp",
    "📦 Pedí por WhatsApp — simple y rápido",
    "🎨 Ver catálogo en WhatsApp",
  ]

  const repeated = [...messages, ...messages]
  const message = encodeURIComponent("Hola! Quiero ver el catálogo de Zarpazo.")

  return (
    <a
      href={`https://wa.me/${config.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ir a WhatsApp para ver el catálogo"
      className="group block w-full overflow-hidden border-b border-zinc-800 bg-zinc-900 py-2 transition-colors duration-200 hover:bg-zinc-800"
    >
      <div className="announcement-marquee flex whitespace-nowrap">
        {repeated.map((msg, i) => (
          <span
            key={i}
            className="font-mono text-xs text-zinc-400 mx-8 shrink-0 transition-colors duration-200 group-hover:text-white"
          >
            {msg}
          </span>
        ))}
      </div>
    </a>
  )
}