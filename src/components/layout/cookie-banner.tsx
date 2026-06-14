"use client"

import { useState, useEffect } from "react"
import Script from "next/script"
import Link from "next/link"

const GA_ID = "G-0XY9DXNLBQ"
const CONSENT_KEY = "zarpazo_cookie_consent"

export default function CookieBanner() {
  const [consent, setConsent] = useState<boolean | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored === null) {
      setVisible(true)
    } else {
      setConsent(stored === "true")
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "true")
    setConsent(true)
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem(CONSENT_KEY, "false")
    setConsent(false)
    setVisible(false)
  }

  return (
    <>
      {/* GA solo se carga si el usuario aceptó */}
      {consent === true && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `,
            }}
          />
        </>
      )}

      {/* Banner — solo aparece la primera vez */}
      {visible && (
        <div
          role="dialog"
          aria-label="Aviso de cookies"
          aria-live="polite"
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-2xl mx-auto bg-zinc-950 border border-zinc-800 rounded-2xl p-5 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="font-mono text-xs text-zinc-400 leading-relaxed flex-1">
              Usamos{" "}
              <Link href="/legal#privacidad" className="text-[#f1e6cc] hover:underline">
                cookies de análisis
              </Link>{" "}
              (Google Analytics) para entender cómo se usa el sitio. No recolectamos datos personales.
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                type="button"
                onClick={reject}
                className="font-mono text-xs text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 px-4 py-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
              >
                Rechazar
              </button>
              <button
                type="button"
                onClick={accept}
                className="font-mono text-xs font-bold text-black bg-[#f1e6cc] hover:bg-white px-4 py-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1e6cc]"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
