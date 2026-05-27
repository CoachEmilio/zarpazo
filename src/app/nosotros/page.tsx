import AnnouncementBar from "@/components/layout/announcement-bar"
import NosotrosHero from "../../components/nosotros/nosotros-hero"
import NosotrosStory from "../../components/nosotros/nosotros-story"
import NosotrosValues from "../../components/nosotros/nosotros-values"
import NosotrosCTA from "../../components/nosotros/nosotros-cta"
import YoutubeVideoSection from "@/components/home/youtube-video-section"

export default function Nosotros() {
  return (
    <main className="flex-1 bg-black text-white">
      <AnnouncementBar />
      <NosotrosHero />
      <NosotrosStory />
      <NosotrosValues />
      <YoutubeVideoSection />
      <NosotrosCTA />
    </main>
  )
}