import { describe, it, expect } from "vitest"
import { buildWhatsappMessage } from "./whatsapp"

describe("buildWhatsappMessage", () => {
  it("builds a complete message when size and color are selected", () => {
    const result = buildWhatsappMessage("JS Do It", "M", "Negro")
    expect(result).toBe("Hola! Quiero la remera: JS Do It — Color: Negro — Talle: M")
  })

  it("uses 'sin especificar' when size is null", () => {
    const result = buildWhatsappMessage("Loading con Café", null, "Negro")
    expect(result).toContain("Talle: sin especificar")
    expect(result).toContain("Color: Negro")
  })

  it("uses 'sin especificar' when color is null", () => {
    const result = buildWhatsappMessage("Loading con Café", "L", null)
    expect(result).toContain("Color: sin especificar")
    expect(result).toContain("Talle: L")
  })

  it("uses 'sin especificar' for both when neither is selected", () => {
    const result = buildWhatsappMessage("sudo rm -rf/*", null, null)
    expect(result).toBe("Hola! Quiero la remera: sudo rm -rf/* — Color: sin especificar — Talle: sin especificar")
  })
})
