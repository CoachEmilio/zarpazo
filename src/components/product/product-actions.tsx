"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import ColorSelector from "@/components/product/color-selector"
import SizeSelector from "@/components/product/size-selector"
import WhatsappButton from "@/components/product/whatsapp-button"
import PriceTag from "@/components/ui/PriceTag"

type Color = {
  name: string
  image: string
  hex: string
}

type Props = {
  productTitle: string
  productDescription: string
  price: number
  price_original?: number
  discount_label?: string
  productImage: string
  colors?: Color[]
  sizes: string[]
}

export default function ProductActions({ productTitle, productDescription, price, price_original, discount_label, productImage, colors, sizes }: Props) {
  const [selectedColor, setSelectedColor] = useState<Color | null>(
    colors ? colors[0] : null
  )
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const imageSrc = selectedColor?.image ?? productImage
  const selectedColorName = selectedColor?.name ?? null

  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    if (!colors || colors.length < 2 || touchStartX.current === null || touchStartY.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (Math.abs(dy) > Math.abs(dx) || Math.abs(dx) < 40) return
    const currentIndex = colors.findIndex((c) => c.name === selectedColor?.name)
    if (dx < 0 && currentIndex < colors.length - 1) setSelectedColor(colors[currentIndex + 1])
    if (dx > 0 && currentIndex > 0) setSelectedColor(colors[currentIndex - 1])
    touchStartX.current = null
    touchStartY.current = null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div
        className="relative aspect-square w-full"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={imageSrc}
          alt={selectedColorName ? `${productTitle} - ${selectedColorName}` : productTitle}
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
        <PriceTag price={price} price_original={price_original} discount_label={discount_label} />

        {colors && selectedColor && (
          <ColorSelector
            colors={colors}
            title={productTitle}
            selected={selectedColor}
            onChange={setSelectedColor}
            showPreview={false}
          />
        )}

        <SizeSelector sizes={sizes} onChange={setSelectedSize} />

        <WhatsappButton
          productTitle={productTitle}
          selectedSize={selectedSize}
          selectedColor={selectedColorName}
        />
      </div>
    </div>
  )
}