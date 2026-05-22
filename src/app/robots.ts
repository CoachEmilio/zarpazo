import type { MetadataRoute } from "next"
import { config } from "@/data/config"

const baseUrl = config.brand.siteUrl

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
