"use client"

import React from "react"

type CategoryOption = { key: string; label: string }

type Props = {
  categories: CategoryOption[]
  activeCategory: string
  onCategoryChange: (c: string) => void
}

export default function CatalogFilters({ categories, activeCategory, onCategoryChange }: Props) {
  const buttons: CategoryOption[] = [
    { key: "todos", label: "Todos" },
    ...categories,
  ]

  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-3 items-center">
      {buttons.map((b) => {
        const active = b.key === activeCategory
        const base = "font-mono text-xs uppercase tracking-widest px-3 py-2 rounded-md border transition-colors"
        const activeClasses = "text-white border-white"
        const inactiveClasses = "text-zinc-400 border-zinc-800"

        return (
          <button
            key={b.key}
            type="button"
            onClick={() => onCategoryChange(b.key)}
            aria-pressed={active}
            className={`${base} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1e6cc]/60 ${active ? activeClasses : inactiveClasses}`}
          >
            {b.label}
          </button>
        )
      })}
    </div>
  )
}
