export type PricingConfig = {
  precio_original: number
  precio_descuento: number
  porcentaje_descuento: number
  etiqueta: string
  moneda: string
  activo: boolean
}

type PricingInput = Omit<PricingConfig, "porcentaje_descuento">

const calculateDiscountPercent = (original: number, discounted: number): number => {
  if (original <= 0) return 0
  const rawPercent = ((original - discounted) / original) * 100
  return Math.max(0, Math.round(rawPercent))
}

const buildPricing = (input: PricingInput): PricingConfig => ({
  ...input,
  porcentaje_descuento: calculateDiscountPercent(
    input.precio_original,
    input.precio_descuento
  ),
})

export const PRICING = buildPricing({
  precio_original: 35000,
  precio_descuento: 29900,
  etiqueta: "Oferta de lanzamiento",
  moneda: "ARS",
  activo: true,
})

export const PRICING_MAP: Record<string, PricingConfig> = {
  default: PRICING,
}
