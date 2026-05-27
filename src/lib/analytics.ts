type TrackEventProps = {
  action: string
  category?: string
  label?: string
  value?: number
  campaign?: string
  // allow arbitrary additional params
  params?: Record<string, any>
}

// Lightweight cross-analytics helper: supports gtag and dataLayer (GTM).
export function trackEvent({ action, category = "engagement", label, value, campaign, params }: TrackEventProps) {
  if (typeof window === "undefined") return

  try {
    // gtag (Google Analytics / GA4)
    if (typeof (window as any).gtag === "function") {
      const payload: Record<string, any> = {
        event_category: category,
        event_label: label,
        value,
        campaign,
        ...params,
      }

      ;(window as any).gtag("event", action, payload)
      return
    }

    // dataLayer (Google Tag Manager)
    if (Array.isArray((window as any).dataLayer)) {
      ;(window as any).dataLayer.push({ event: action, event_category: category, event_label: label, value, campaign, ...params })
      return
    }
  } catch (e) {
    // swallow errors — analytics is optional
    // eslint-disable-next-line no-console
    console.warn("trackEvent failed", e)
  }
}
