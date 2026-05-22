"use client"

import { useState } from "react"
import Image from "next/image"

type Color = {
  name: string
  image: string
  hex: string
}

type Props = {
  colors: Color[]
  title: string
  onChange: (colorName: string) => void
}

export default function ColorSelector({ colors, title, onChange }: Props) {
  const [selected, setSelected] = useState(colors[0])

  function handleSelect(color: Color) {
    setSelected(color)
    onChange(color.name)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-square w-full">
        <Image
          src={selected.image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-mono text-sm text-zinc-500">Color</span>
        <div className="flex gap-3">
          {colors.map((c) => (
            <button
              key={c.name}
              onClick={() => handleSelect(c)}
              title={c.name}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                selected.name === c.name
                  ? "border-white scale-110"
                  : "border-zinc-600 hover:border-zinc-400"
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}