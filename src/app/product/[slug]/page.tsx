import { getProducts, getProductBySlug } from "@/lib/api"
import { notFound } from "next/navigation"
import ProductActions from "@/components/product/product-actions"
import { config } from "@/data/config"
import RelatedProducts from "@/components/product/related-products"
import Link from "next/link"
import Carousel from "@/components/home/carousel"
import CategoryDiscovery from "@/components/home/category-discovery"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return {}

  const title = `${product.title} — ${config.brand.name}`
  const description = `¡Mirá lo que encontré en Zarpazo.art! ${product.title}. ${product.description}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${config.brand.siteUrl}/product/${slug}`,
      siteName: config.brand.name,
      locale: 'es_AR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const [product, allProducts] = await Promise.all([
    getProductBySlug(slug),
    getProducts(),
  ])
  if (!product) notFound()

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <ProductActions
          productTitle={product.title}
          productDescription={product.description}
          price={product.price}
          price_original={product.price_original}
          discount_label={product.discount_label}
          productImage={product.image}
          colors={product.colors}
          sizes={product.variants.map((v) => v.size)}
        />
        <RelatedProducts currentSlug={slug} products={allProducts} />
      </div>

      <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-zinc-800 flex justify-center">
        <Link
          href="/catalogo"
          className="font-mono text-sm border border-zinc-700 hover:border-white text-zinc-400 hover:text-white px-6 py-3 rounded-lg transition-all duration-200 hover:bg-white/5"
        >
          Ver catálogo completo →
        </Link>
      </div>
      <div className="max-w-4xl mx-auto mt-16">
        <Carousel products={allProducts} />
      </div>
      <CategoryDiscovery />
    </main>
  )
}
