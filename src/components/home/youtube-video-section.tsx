import { config } from "@/data/config"

function getYouTubeEmbedUrl(videoUrl: string) {
  try {
    const parsedUrl = new URL(videoUrl)

    let videoId = ""

    if (parsedUrl.hostname.includes("youtu.be")) {
      videoId = parsedUrl.pathname.replace("/", "")
    } else if (parsedUrl.searchParams.get("v")) {
      videoId = parsedUrl.searchParams.get("v") ?? ""
    } else if (parsedUrl.pathname.includes("/embed/")) {
      videoId = parsedUrl.pathname.split("/embed/")[1] ?? ""
    }

    if (!videoId) {
      return ""
    }

    const embedUrl = new URL(`https://www.youtube-nocookie.com/embed/${videoId}`)
    embedUrl.searchParams.set("autoplay", "1")
    embedUrl.searchParams.set("mute", "1")
    embedUrl.searchParams.set("loop", "1")
    embedUrl.searchParams.set("playlist", videoId)
    embedUrl.searchParams.set("controls", "0")
    embedUrl.searchParams.set("playsinline", "1")
    embedUrl.searchParams.set("rel", "0")
    embedUrl.searchParams.set("modestbranding", "1")

    return embedUrl.toString()
  } catch {
    return ""
  }
}

export default function YoutubeVideoSection() {
  const sourceUrl = config.youtubeUrl

  if (!sourceUrl) {
    return null
  }

  const embedUrl = getYouTubeEmbedUrl(sourceUrl)

  if (!embedUrl) {
    return null
  }

  return (
    <section className="px-6 py-16 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
              Video
            </span>
            <h2 className="font-mono text-2xl font-bold text-white">
              Miralo en acción
            </h2>
          </div>
          <p className="font-mono text-xs text-zinc-400 max-w-sm">
            Mirá nuestro proceso de creación y cómo toma forma cada diseño.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/30 aspect-video">
          <iframe
            src={embedUrl}
            title="Video de YouTube de Zarpazo"
            className="absolute inset-0 h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
