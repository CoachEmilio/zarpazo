"use client"

import { config } from "@/data/config"
import { trackEvent } from "@/lib/analytics"

export default function ContactChannels() {
  const channels = [
    {
      key: "whatsapp",
      title: "WhatsApp",
      desc: "Respuesta rápida para pedidos y talles.",
    },
    {
      key: "email",
      title: "Email",
      desc: "Ideal para consultas largas o pedidos grandes.",
    },
    {
      key: "instagram",
      title: "Instagram",
      desc: "Si querés ver novedades y lanzamientos.",
    },
  ]

  const hrefFor = (key: string) => {
    if (key === "whatsapp") return `https://wa.me/${config.whatsapp}`
    if (key === "email") return `mailto:${config.correo}`
    if (key === "instagram") return config.instagram
    return undefined
  }

  return (
    <section className="px-6 py-16">
      <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-3">
        {channels.map((c) => {
          const href = hrefFor(c.key)
          const icon = (key: string) => {
            if (key === "whatsapp") {
              return (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M21 11.5a9 9 0 10-2.62 6.01L21 21l-1.49-5.1A8.96 8.96 0 0021 11.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 14.5c-.2-.1-1.1-.6-1.2-.6-.1 0-.2-.1-.4.1-.2.2-.8.6-1 .7-.2.1-.4.05-.6-.05-.6-.3-1.9-1.1-3.2-1.9-.6-.4-.6-.7-.7-.8-.1-.15 0-.35.05-.5.05-.15.2-.4.3-.6.1-.2.15-.4.2-.6.05-.2 0-.4-.05-.55-.1-.15-.9-2-1.25-2.75-.3-.7-.6-.6-.8-.6-.2 0-.4 0-.6 0-.2.05-.6.2-.9.55C7.1 7.1 6.8 8.1 6.8 9.5c0 1.4.9 2.8 1 3 .1.2 1.6 2.6 3.9 3.6 2.3 1 3.1.9 3.4.85.3-.05 1.1-.4 1.25-.8.15-.4.15-.7.1-.8-.05-.1-.2-.15-.4-.25z" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            }
            if (key === "email") {
              return (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )
            }
            // instagram
            return (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )
          }

          const content = (
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-zinc-600 focus-within:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-zinc-300 shrink-0">{icon(c.key)}</div>
                <div>
                  <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">{c.title}</span>
                  <p className="mt-3 font-mono text-sm text-zinc-300">{c.desc}</p>
                </div>
              </div>
            </div>
          )

          const handleClick = () => {
            // non-blocking tracking with richer payload
            trackEvent({ action: "contact_click", category: "contact", label: c.key, value: 1, campaign: "contact_page", params: { channel: c.key, channelTitle: c.title } })
          }

          return href ? (
            <a
              key={c.key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={c.title}
              onClick={handleClick}
            >
              {content}
            </a>
          ) : (
            <div key={c.key} onClick={handleClick} role="button" tabIndex={0}>
              {content}
            </div>
          )
        })}
      </div>
    </section>
  )
}
