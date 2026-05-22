import type { MetadataRoute } from "next"
import { products } from "@/data/products"

const baseUrl = "https://targattos.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/products"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...productRoutes]
}
