"use client"

import { useEffect } from "react"

export default function TabTitleHook() {
  useEffect(() => {
    const original = document.title
    let interval: ReturnType<typeof setInterval> | null = null
    let toggle = false

    const handleVisibility = () => {
      if (document.hidden) {
        interval = setInterval(() => {
          document.title = toggle ? "Volvé a Zarpazo 🐱" : original
          toggle = !toggle
        }, 1200)
      } else {
        if (interval) clearInterval(interval)
        document.title = original
        toggle = false
      }
    }

    document.addEventListener("visibilitychange", handleVisibility)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility)
      if (interval) clearInterval(interval)
    }
  }, [])

  return null
}
