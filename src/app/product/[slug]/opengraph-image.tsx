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

  if (!product) {
    return new ImageResponse(
      (
        <div
          style={{
            background: '#000000',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={`${config.brand.siteUrl}/opengraph-image.png`} width={1200} height={630} />
        </div>
      ),
      { ...size }
    )
  }

  const imagePath = product.image ?? ''
  const absoluteImageUrl = imagePath
    ? imagePath.startsWith('http')
      ? imagePath
      : `${config.brand.siteUrl}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`
    : null

  // Satori does not support WEBP. sharp converts the image to JPEG before passing it in.
  let productImageSrc: string | null = null
  if (absoluteImageUrl) {
    try {
      const res = await fetch(absoluteImageUrl)
      if (res.ok) {
        const buffer = await res.arrayBuffer()
        const jpeg = await sharp(Buffer.from(buffer)).jpeg({ quality: 85 }).toBuffer()
        productImageSrc = `data:image/jpeg;base64,${jpeg.toString('base64')}`
      }
    } catch {
      // render without photo if fetch or conversion fails
    }
  }

  const priceFormatted = (product.price ?? 0).toLocaleString('es-AR')

  return new ImageResponse(
    (
      <div
        style={{
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '60px',
          fontFamily: 'sans-serif',
          gap: '40px',
        }}
      >
        {/* Left: text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              color: '#71717a',
              fontSize: '20px',
              letterSpacing: '0.1em',
              marginBottom: '24px',
            }}
          >
            {new URL(config.brand.siteUrl).hostname}
          </div>
          <div
            style={{
              color: '#4ade80',
              fontSize: '26px',
              fontWeight: 'bold',
              marginBottom: '20px',
              lineHeight: 1.3,
            }}
          >
            ¡Mirá lo que encontré en Zarpazo.art!
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: '52px',
              fontWeight: 'bold',
              lineHeight: 1.15,
              marginBottom: '28px',
            }}
          >
            {product.title}
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: '34px',
              fontWeight: 'bold',
              opacity: 0.85,
            }}
          >
            ${priceFormatted} ARS
          </div>
        </div>

        {/* Right: product image */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {productImageSrc && (
            <img
              src={productImageSrc}
              width={460}
              height={460}
              style={{
                objectFit: 'cover',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            />
          )}
        </div>
      </div>
    ),
    { ...size }
  )
}
