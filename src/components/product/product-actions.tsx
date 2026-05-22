"use client"

import { useState } from "react"
import Image from "next/image"
import ColorSelector from "@/components/product/color-selector"
import SizeSelector from "@/components/product/size-selector"
import WhatsappButton from "@/components/product/whatsapp-button"

type Color = {
  name: string
  image: string
  hex: string
}

type Props = {
  productTitle: string
  productDescription: string
  productPrice: number
  productImage: string
  colors?: Color[]
  sizes: string[]
}

export default function ProductActions({ productTitle, productDescription, productPrice, productImage, colors, sizes }: Props) {
  const [selectedColor, setSelectedColor] = useState<Color | null>(
    colors ? colors[0] : null
  )
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const imageSrc = selectedColor?.image ?? productImage
  const selectedColorName = selectedColor?.name ?? null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="relative aspect-square w-full">
        <Image
          src={imageSrc}
          alt={productTitle}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="font-mono text-3xl font-bold tracking-tight">
          {productTitle}
        </h1>
        <p className="font-mono text-zinc-400 text-lg">
          {productDescription}
        </p>
        <span className="font-mono text-2xl font-bold">
          ${productPrice.toLocaleString("es-AR")}
        </span>

        {colors && selectedColor && (
          <ColorSelector
            colors={colors}
            title={productTitle}
            selected={selectedColor}
            onChange={setSelectedColor}
            showPreview={false}
          />
        )}

        <SizeSelector
          sizes={sizes}
          onChange={setSelectedSize}
        />

        <WhatsappButton
          productTitle={productTitle}
          selectedSize={selectedSize}
          selectedColor={selectedColorName}
        />
      </div>
    </div>
  )
}