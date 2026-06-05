"use client"

import { useState } from "react"
import { config } from "@/data/config"

function getYouTubeVideoId(videoUrl: string): string {
  try {
    const parsedUrl = new URL(videoUrl)
    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.replace("/", "")
    } else if (parsedUrl.searchParams.get("v")) {
      return parsedUrl.searchParams.get("v") ?? ""
    } else if (parsedUrl.pathname.includes("/embed/")) {
      return parsedUrl.pathname.split("/embed/")[1] ?? ""
    }
    return ""
  } catch {
    return ""
  }
}

function getYouTubeEmbedUrl(videoId: string): string {
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
}

export default function YoutubeVideoSection() {
  const [playing, setPlaying] = useState(false)

  const sourceUrl = config.youtubeUrl
  if (!sourceUrl) return null

  const videoId = getYouTubeVideoId(sourceUrl)
  if (!videoId) return null

  const embedUrl = getYouTubeEmbedUrl(videoId)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

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
          {playing ? (
            <iframe
              src={embedUrl}
              title="Video de YouTube de Zarpazo"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 w-full h-full"
              aria-label="Reproducir video"
            >
              <img
                src={thumbnailUrl}
                alt="Vista previa del video de Zarpazo"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-200" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/70 group-hover:bg-black/90 flex items-center justify-center transition-all duration-200 group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 md:w-8 md:h-8 text-white translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
