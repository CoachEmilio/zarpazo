import Hero from "@/components/home/hero"
import ProductGrid from "@/components/home/product-grid"
import HowItWorks from "@/components/home/how-it-works"
import Carousel from "@/components/home/carousel"
import AnnouncementBar from "@/components/layout/announcement-bar"

export default function Home() {
  return (
    <main className="flex-1 bg-black text-white">
      <AnnouncementBar />
      <Hero />
      <ProductGrid />
      <AnnouncementBar />
      <HowItWorks />
      <Carousel />
    </main>
  )
}