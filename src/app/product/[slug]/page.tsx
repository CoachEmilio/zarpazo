import { products } from "@/data/products"
import { notFound } from "next/navigation"
import ProductActions from "@/components/product-actions"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: `${product.title} — Targattos`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductActions
          productTitle={product.title}
          productImage={product.image}
          colors={product.colors}
          sizes={product.variants.map((v) => v.size)}
        />
        <div className="flex flex-col gap-6">
          <h1 className="font-mono text-3xl font-bold tracking-tight">
            {product.title}
          </h1>
          <p className="font-mono text-zinc-400 text-lg">
            {product.description}
          </p>
          <span className="font-mono text-2xl font-bold">
            ${product.price.toLocaleString("es-AR")}
          </span>
        </div>
      </div>
    </main>
  )
}