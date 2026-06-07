import AnnouncementBar from "@/components/layout/announcement-bar"
import ContactHero from "@/components/contact/contact-hero"
import ContactActions from "@/components/contact/contact-actions"
import ContactChannels from "@/components/contact/contact-channels"
import ProductLayerShowcase from "@/components/home/product-layer-showcase"
import { getProducts } from "@/lib/api"

export default async function ContactoPage() {
  const products = await getProducts()

  return (
    <main className="flex-1 bg-black text-white">
      <AnnouncementBar />
      <ContactHero />
      <div className="max-w-3xl mx-auto px-6 -mt-8">
        <ContactActions />
      </div>
      <ContactChannels />
      <ProductLayerShowcase products={products} />
    </main>
  )
}