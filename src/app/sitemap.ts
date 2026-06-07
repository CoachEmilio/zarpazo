import type { MetadataRoute } from "next"
import { getProducts } from "@/lib/api"
import { config } from "@/data/config"

const baseUrl = config.brand.siteUrl

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts()

  const staticRoutes = ["/", "/catalogo", "/guia-de-talles", "/nosotros", "/contacto"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...productRoutes]
}
