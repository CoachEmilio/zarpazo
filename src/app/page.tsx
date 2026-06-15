import Hero from "@/components/home/hero"
import ProductLayerShowcase from "@/components/home/product-layer-showcase"
import HowItWorks from "@/components/home/how-it-works"
import FaqSection from "@/components/home/faq-section"
import OrderCTA from "@/components/home/order-cta"
import YoutubeVideoSection from "@/components/home/youtube-video-section"
import Carousel from "@/components/home/carousel"
import PromoSlider from "@/components/home/promo-slider"
import AnnouncementBar from "@/components/layout/announcement-bar"
import InstagramGrid from "@/components/home/instagram-grid"
import { getProducts } from "@/lib/api"

export default async function Home() {
  const products = await getProducts()

  return (
    <main className="flex-1 bg-black text-white">
      <AnnouncementBar />
      <Hero />
      <PromoSlider />
      <ProductLayerShowcase products={products} />
      <YoutubeVideoSection />
      <Carousel products={products} />
      <HowItWorks />
      <InstagramGrid />
      <FaqSection />
      <OrderCTA />
    </main>
  )
}
