import Hero from "@/components/home/hero"
import CategoryDiscovery from "@/components/home/category-discovery"
import ProductLayerShowcase from "@/components/home/product-layer-showcase"
import HowItWorks from "@/components/home/how-it-works"
import FaqSection from "@/components/home/faq-section"
import OrderCTA from "@/components/home/order-cta"
import YoutubeVideoSection from "@/components/home/youtube-video-section"
import Carousel from "@/components/home/carousel"
import PromoSlider from "@/components/home/promo-slider"
import InstagramGrid from "@/components/home/instagram-grid"
import ReviewsSection from "@/components/home/reviews-section"
import { getProducts } from "@/lib/api"

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="flex-1 bg-black text-white">
      <Hero />
      <CategoryDiscovery />
      <YoutubeVideoSection />
      <Carousel products={products} />
      <HowItWorks />
      <ReviewsSection />
      <PromoSlider />
      <ProductLayerShowcase products={products} />
      <FaqSection />
      <OrderCTA />
      <InstagramGrid />
    </main>
  )
}
