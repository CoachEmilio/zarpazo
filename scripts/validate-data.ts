import { productsRaw } from "../src/data/products"
import { CATEGORY_KEYS } from "../src/data/categories"

const invalid: { slug: string; category: string }[] = []

for (const p of productsRaw as any) {
  if (!CATEGORY_KEYS.includes(p.category)) {
    invalid.push({ slug: p.slug, category: p.category })
  }
}

if (invalid.length === 0) {
  console.log("OK: all product categories are valid")
  process.exit(0)
} else {
  console.error("Invalid product categories:\n", invalid.map(i => `${i.slug}: ${i.category}`).join("\n"))
  process.exit(2)
}
