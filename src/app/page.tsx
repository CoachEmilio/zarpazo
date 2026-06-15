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
    <>
    {/* Preload LCP: primera imagen del PromoSlider — priority en use client no genera preload en SSR head */}
    <link
      rel="preload"
      as="image"
      href="/_next/image?url=%2Fhoddie%2Fhoddie.webp&w=640&q=75"
      // @ts-expect-error — imageSrcSet/imageSizes son atributos HTML válidos no tipados en React
      imageSrcSet="/_next/image?url=%2Fhoddie%2Fhoddie.webp&w=640&q=75 640w, /_next/image?url=%2Fhoddie%2Fhoddie.webp&w=750&q=75 750w, /_next/image?url=%2Fhoddie%2Fhoddie.webp&w=1080&q=75 1080w"
      imageSizes="(max-width: 768px) 80vw, 50vw"
      fetchPriority="high"
    />
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
    </>
  )
}
