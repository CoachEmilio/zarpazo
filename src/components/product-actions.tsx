"use client"

import { useState } from "react"
import Image from "next/image"
import ColorSelector from "@/components/color-selector"
import SizeSelector from "@/components/size-selector"
import WhatsappButton from "@/components/whatsapp-button"

type Color = {
  name: string
  image: string
  hex: string
}

type Props = {
  productTitle: string
  productImage: string
  colors?: Color[]
  sizes: string[]
}

export default function ProductActions({ productTitle, productImage, colors, sizes }: Props) {
  const [selectedColor, setSelectedColor] = useState<string | null>(
    colors ? colors[0].name : null
  )
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-6">
      {colors ? (
        <ColorSelector
          colors={colors}
          title={productTitle}
          onChange={setSelectedColor}
        />
      ) : (
        <div className="relative aspect-square w-full">
          <Image
            src={productImage}
            alt={productTitle}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <SizeSelector
        sizes={sizes}
        onChange={setSelectedSize}
      />

      <WhatsappButton
        productTitle={productTitle}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
      />
    </div>
  )
}