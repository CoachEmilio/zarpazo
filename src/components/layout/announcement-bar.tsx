export default function AnnouncementBar() {
  const messages = [
    "🔥 Envíos a CABA y AMBA",
    "⚡ Diseños que garpan",
    "🛠️ Hecho para devs, geeks y cultura",
    "📦 Pedí por WhatsApp — simple y rápido",
    "🎨 Nuevos diseños cayendo pronto",
  ]

  const repeated = [...messages, ...messages]

  return (
    <div className="w-full bg-zinc-900 border-b border-zinc-800 overflow-hidden py-2">
      <div className="announcement-marquee flex whitespace-nowrap">
        {repeated.map((msg, i) => (
          <span key={i} className="font-mono text-xs text-zinc-400 mx-8 shrink-0">
            {msg}
          </span>
        ))}
      </div>
    </div>
  )
}