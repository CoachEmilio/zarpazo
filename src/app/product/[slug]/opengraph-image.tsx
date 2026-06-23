import { ImageResponse } from 'next/og'
import { getProductBySlug } from '@/lib/api'
import { config } from '@/data/config'

export const runtime = 'nodejs'
export const alt = 'Zarpazo — Diseños que garpan.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const product = await getProductBySlug(slug)

    if (!product) {
      return new ImageResponse(
        (
          <div style={{ background: '#000', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={`${config.brand.siteUrl}/opengraph-image.png`} width={1200} height={630} />
          </div>
        ),
        { ...size }
      )
    }

    const imagePath = product.image ?? ''
    const imageUrl = imagePath.startsWith('http')
      ? imagePath
      : `${config.brand.siteUrl}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`

    const priceFormatted = (product.price ?? 0).toLocaleString('es-AR')

    return new ImageResponse(
      (
        <div style={{ background: '#000', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '60px', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
            <div style={{ color: '#71717a', fontSize: '20px', letterSpacing: '0.1em', marginBottom: '24px' }}>
              {new URL(config.brand.siteUrl).hostname}
            </div>
            <div style={{ color: '#4ade80', fontSize: '26px', fontWeight: 'bold', marginBottom: '20px', lineHeight: 1.3 }}>
              ¡Mirá lo que encontré en Zarpazo.art!
            </div>
            <div style={{ color: '#fff', fontSize: '52px', fontWeight: 'bold', lineHeight: 1.15, marginBottom: '28px' }}>
              {product.title}
            </div>
            <div style={{ color: '#fff', fontSize: '34px', fontWeight: 'bold', opacity: 0.85 }}>
              ${priceFormatted} ARS
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <img src={imageUrl} width={460} height={460} style={{ objectFit: 'cover', borderRadius: '16px' }} />
          </div>
        </div>
      ),
      { ...size }
    )
  } catch (e) {
    return new ImageResponse(
      (
        <div style={{ background: 'red', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
          <div style={{ color: '#fff', fontSize: '30px' }}>{String(e)}</div>
        </div>
      ),
      { ...size }
    )
  }
}
