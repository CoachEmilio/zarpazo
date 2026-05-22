import Hero from "@/components/home/hero"
import ProductGrid from "@/components/home/product-grid"
import HowItWorks from "@/components/home/how-it-works"

export default function Home() {
  return (
    <main className="flex-1 bg-black text-white">
      <Hero />
      <ProductGrid />
      <HowItWorks />
    </main>
  )
}