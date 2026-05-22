"use client"

import { useState } from "react"

type Props = {
  sizes: string[]
  onChange: (size: string) => void
}

export default function SizeSelector({ sizes, onChange }: Props) {
  const [selected, setSelected] = useState<string | null>(null)

  function handleSelect(size: string) {
    setSelected(size)
    onChange(size)
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-sm text-zinc-500">
        Seleccioná tu talle
      </span>
      <div className="flex gap-3 flex-wrap">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSelect(size)}
            className={`font-mono text-sm px-4 py-2 rounded border transition-all ${
              selected === size
                ? "border-white text-white bg-zinc-800"
                : "border-zinc-700 text-zinc-400 hover:border-zinc-400"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}