type GTagFn = (...args: unknown[]) => void

type TrackEventProps = {
  action: string
  category?: string
  label?: string
  value?: number
  campaign?: string
  params?: Record<string, unknown>
}

// Lightweight cross-analytics helper: supports gtag and dataLayer (GTM).
export function trackEvent({ action, category = "engagement", label, value, campaign, params }: TrackEventProps) {
  if (typeof window === "undefined") return

  const win = window as Window & { gtag?: GTagFn; dataLayer?: Record<string, unknown>[] }

  try {
    if (typeof win.gtag === "function") {
      const payload: Record<string, unknown> = {
        event_category: category,
        event_label: label,
        value,
        campaign,
        ...params,
      }
      win.gtag("event", action, payload)
      return
    }

    if (Array.isArray(win.dataLayer)) {
      win.dataLayer.push({ event: action, event_category: category, event_label: label, value, campaign, ...params })
      return
    }
  } catch (e) {
    // swallow errors — analytics is optional
    console.warn("trackEvent failed", e)
  }
}
