import Hero from "@/components/home/hero"
import ProductLayerShowcase from "@/components/home/product-layer-showcase"
import HowItWorks from "@/components/home/how-it-works"
import FaqSection from "@/components/home/faq-section"
import OrderCTA from "@/components/home/order-cta"
import YoutubeVideoSection from "@/components/home/youtube-video-section"
import AnnouncementBar from "@/components/layout/announcement-bar"
import Carousel from "@/components/home/carousel"

export default function Home() {
  return (
    <main className="flex-1 bg-black text-white">
      <AnnouncementBar />
      <Hero />
      <ProductLayerShowcase />
      <YoutubeVideoSection />
      <Carousel />
      <HowItWorks />
      <FaqSection />
      <OrderCTA />
    </main>
  )
}