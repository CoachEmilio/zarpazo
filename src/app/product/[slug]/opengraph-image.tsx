import { ImageResponse } from 'next/og'
import sharp from 'sharp'
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

  let imageSrc: string | null = null
  try {
    const res = await fetch(imageUrl)
    if (res.ok) {
      const buffer = Buffer.from(await res.arrayBuffer())
      const jpeg = await sharp(buffer).jpeg({ quality: 85 }).toBuffer()
      imageSrc = `data:image/jpeg;base64,${jpeg.toString('base64')}`
    }
  } catch {
    // si falla el fetch, muestra imagen negra de fallback
  }

  return new ImageResponse(
    (
      <div style={{ background: '#000', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {imageSrc && <img src={imageSrc} width={630} height={630} />}
      </div>
    ),
    { ...size }
  )
}
