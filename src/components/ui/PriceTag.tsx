type Props = {
  price: number
  price_original?: number
  discount_label?: string
  variant?: "default" | "compact"
}

export default function PriceTag({ price, price_original, discount_label, variant = "default" }: Props) {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  })

  const hasDiscount = !!price_original && price_original > price
  const discountPercent = hasDiscount
    ? Math.round(((price_original! - price) / price_original!) * 100)
    : 0

  const isCompact = variant === "compact"

  if (!hasDiscount) {
    return (
      <span className={`font-sans font-bold ${isCompact ? "text-sm" : "text-2xl"}`}>
        {formatter.format(price)}
      </span>
    )
  }

  return (
    <div className={`font-sans flex flex-col ${isCompact ? "gap-1.5" : "gap-2"}`}>
      <div className="flex items-center gap-3">
        <span className={`${isCompact ? "text-xs" : "text-sm"} text-zinc-500 line-through`}>
          {formatter.format(price_original!)}
        </span>
        <span className={`inline-flex items-center gap-2 rounded-full border border-zinc-700 ${isCompact ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs"} text-zinc-200`}>
          {discount_label}
          <span className="text-zinc-400">-{discountPercent}%</span>
        </span>
      </div>
      <span className={`${isCompact ? "text-lg" : "text-3xl"} font-bold`}>
        {formatter.format(price)}
      </span>
    </div>
  )
}