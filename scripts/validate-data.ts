import { readFileSync } from "node:fs"
import { resolve } from "node:path"

const root = process.cwd()
const productsPath = resolve(root, "src/data/products.ts")
const categoriesPath = resolve(root, "src/data/categories.ts")

const productsSource = readFileSync(productsPath, "utf8")
const categoriesSource = readFileSync(categoriesPath, "utf8")

const categoryKeys = Array.from(
  new Set(
    Array.from(categoriesSource.matchAll(/key:\s*"([^"]+)"/g), (match) => match[1])
  )
)

const productCategories = Array.from(
  new Set(
    Array.from(productsSource.matchAll(/category:\s*"([^"]+)"/g), (match) => match[1])
  )
)

const invalid = productCategories.filter((category) => !categoryKeys.includes(category))

if (invalid.length === 0) {
  console.log("OK: all product categories are valid")
  process.exit(0)
}

console.error("Invalid product categories:\n", invalid.join("\n"))
process.exit(2)
