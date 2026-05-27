import AnnouncementBar from "@/components/layout/announcement-bar"
import GuiaDeTalles from "@/components/home/guia-de-talles"
import GuiaDeTallesCTA from "@/components/home/guia-de-talles-cta"

export default function GuiaDeTallesPage() {
  return (
    <main className="flex-1 bg-black text-white">
      <AnnouncementBar />
      <GuiaDeTalles />
      <GuiaDeTallesCTA />
    </main>
  )
}