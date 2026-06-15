export function buildWhatsappMessage(
  productTitle: string,
  selectedSize: string | null,
  selectedColor: string | null
): string {
  const size = selectedSize ?? "sin especificar"
  const color = selectedColor ?? "sin especificar"
  return `Hola! Quiero la remera: ${productTitle} — Color: ${color} — Talle: ${size}`
}
