import type { MetadataRoute } from "next"
import { products } from "@/data/products"
import { config } from "@/data/config"

const baseUrl = config.brand.siteUrl

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/nosotros"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...productRoutes]
}
