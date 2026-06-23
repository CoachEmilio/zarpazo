"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ZoomIn, Share2 } from "lucide-react"
import ProductImageZoom from "@/components/product/product-image-zoom"
import ColorSelector from "@/components/product/color-selector"
import SizeSelector from "@/components/product/size-selector"
import WhatsappButton from "@/components/product/whatsapp-button"
import PriceTag from "@/components/ui/PriceTag"

const slideVariants = {
  enter: (dir: "next" | "prev") => ({ x: dir === "next" ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: "next" | "prev") => ({ x: dir === "next" ? "-100%" : "100%", opacity: 0 }),
}

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
  slug: string
}

export default function ProductActions({ productTitle, productDescription, price, price_original, discount_label, productImage, colors, sizes, slug }: Props) {
  const [selectedColor, setSelectedColor] = useState<Color | null>(
    colors ? colors[0] : null
  )
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const [isZoomOpen, setIsZoomOpen] = useState(false)
  const imageSrc = selectedColor?.image ?? productImage
  const selectedColorName = selectedColor?.name ?? null

  function goTo(dir: "prev" | "next") {
    if (!colors || colors.length < 2) return
    const currentIndex = colors.findIndex((c) => c.name === selectedColor?.name)
    setDirection(dir)
    if (dir === "prev") setSelectedColor(colors[(currentIndex - 1 + colors.length) % colors.length])
    if (dir === "next") setSelectedColor(colors[(currentIndex + 1) % colors.length])
  }

  function goToIndex(index: number) {
    if (!colors) return
    const currentIndex = colors.findIndex((c) => c.name === selectedColor?.name)
    setDirection(index > currentIndex ? "next" : "prev")
    setSelectedColor(colors[index])
  }

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
    goTo(dx < 0 ? "next" : "prev")
    touchStartX.current = null
    touchStartY.current = null
  }

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="flex flex-col gap-3">
        <div
          className="relative aspect-square w-full overflow-hidden rounded-lg cursor-zoom-in"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={() => setIsZoomOpen(true)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageSrc}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={imageSrc}
                alt={selectedColorName ? `${productTitle} - ${selectedColorName}` : productTitle}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Share button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              const url = `https://zarpazo.art/product/${slug}`
              if (typeof navigator !== "undefined" && navigator.share) {
                navigator.share({ title: productTitle, url }).catch(() => {})
              } else {
                window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, "_blank")
              }
            }}
            aria-label="Compartir producto"
            className="absolute top-2 right-2 z-10 flex items-center gap-1.5 pl-2.5 pr-3 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-zinc-700 text-white/70 hover:text-white hover:border-zinc-400 hover:bg-black/80 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <Share2 size={13} />
            <span className="font-mono text-xs">Compartir</span>
          </button>

          {/* Zoom hint */}
          <div className="absolute bottom-2 right-2 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-black/60 border border-zinc-700 text-white/70 pointer-events-none">
            <ZoomIn size={13} />
          </div>

          {colors && colors.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goTo("prev") }}
                aria-label="Color anterior"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 border border-zinc-700 text-white hover:bg-black/80 hover:border-zinc-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1e6cc]/60"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goTo("next") }}
                aria-label="Color siguiente"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 border border-zinc-700 text-white hover:bg-black/80 hover:border-zinc-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1e6cc]/60"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}
        </div>

        {colors && colors.length > 1 && (
          <div className="flex gap-2 justify-center">
            {colors.map((color, index) => (
              <button
                key={color.name}
                type="button"
                onClick={() => goToIndex(index)}
                aria-label={`Color ${color.name}`}
                aria-pressed={selectedColor?.name === color.name}
                className={`relative w-14 h-14 rounded-md overflow-hidden border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1e6cc]/60 ${
                  selectedColor?.name === color.name
                    ? "border-white"
                    : "border-zinc-700 hover:border-zinc-500"
                }`}
              >
                <Image
                  src={color.image}
                  alt={color.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
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

    <ProductImageZoom
      src={imageSrc}
      alt={selectedColorName ? `${productTitle} - ${selectedColorName}` : productTitle}
      isOpen={isZoomOpen}
      onClose={() => setIsZoomOpen(false)}
    />
    </>
  )
}