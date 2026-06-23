import { ImageResponse } from 'next/og'
import { getProductBySlug } from '@/lib/api'
import { config } from '@/data/config'

export const runtime = 'nodejs'
export const alt = 'Zarpazo — Diseños que garpan.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  const imageUrl = product?.image?.startsWith('http')
    ? product.image
    : `${config.brand.siteUrl}${product?.image ?? '/opengraph-image.png'}`

  return new ImageResponse(
    (
      <div style={{ background: '#000', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={imageUrl} width={630} height={630} />
      </div>
    ),
    { ...size }
  )
}
