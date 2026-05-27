"use client"

import React from "react"

type Props = {
  value: string
  onChange: (value: string) => void
}

export default function CatalogSearch({ value, onChange }: Props) {
  return (
    <div className="w-full sm:w-auto">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <input
          aria-label="Buscar diseño"
          placeholder="Buscar diseño..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full max-w-sm font-mono text-sm bg-zinc-900 border border-zinc-800 focus:border-zinc-600 focus:outline-none rounded-lg pl-10 px-4 py-2.5 text-white placeholder:text-zinc-600 transition-colors"
        />
      </div>
    </div>
  )
}
