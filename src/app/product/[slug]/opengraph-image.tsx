import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Zarpazo'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#000', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#fff', fontSize: 80, fontWeight: 'bold' }}>Zarpazo test</div>
      </div>
    ),
    { ...size }
  )
}
