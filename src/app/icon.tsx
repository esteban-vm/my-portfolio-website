import { ImageResponse } from 'next/og'

export const size = {
  width: 64,
  height: 48,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 45,
        background: '#17c47c',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#31202b',
        fontWeight: 'bolder',
        fontFamily: 'monospace',
      }}
    >
      E
    </div>,
    { ...size }
  )
}
