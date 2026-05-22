import type { PricingConfig } from "../../../config/pricing"

const localeByCurrency: Record<string, string> = {
  ARS: "es-AR",
  USD: "en-US",
  EUR: "es-ES",
}

type Props = {
  pricing: PricingConfig
}

export default function PriceTag({ pricing }: Props) {
  const locale = localeByCurrency[pricing.moneda] ?? "en-US"
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: pricing.moneda,
    maximumFractionDigits: 0,
  })

  if (!pricing.activo) {
    return (
      <div className="font-sans">
        <span className="text-2xl font-bold">
          {formatter.format(pricing.precio_original)}
        </span>
      </div>
    )
  }

  return (
    <div className="font-sans flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <span className="text-sm text-zinc-500 line-through">
          {formatter.format(pricing.precio_original)}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-200 motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 duration-300">
          {pricing.etiqueta}
          <span className="text-zinc-400">
            -{pricing.porcentaje_descuento}%
          </span>
        </span>
      </div>
      <span className="text-3xl font-bold motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 duration-300">
        {formatter.format(pricing.precio_descuento)}
      </span>
    </div>
  )
}
