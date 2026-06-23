import { ImageResponse } from 'next/og'
import { getProductBySlug } from '@/lib/api'

export const runtime = 'nodejs'
export const alt = 'Zarpazo'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const product = await getProductBySlug(slug)

    return new ImageResponse(
      (
        <div style={{ background: '#000', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: '#fff', fontSize: 60, fontWeight: 'bold' }}>
            {product?.title ?? 'not found'}
          </div>
        </div>
      ),
      { ...size }
    )
  } catch (e) {
    return new ImageResponse(
      (
        <div style={{ background: 'red', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ color: '#fff', fontSize: 40 }}>{String(e)}</div>
        </div>
      ),
      { ...size }
    )
  }
}
