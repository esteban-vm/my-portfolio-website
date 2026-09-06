import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const size = {
  width: 48,
  height: 48,
}

export const contentType = 'image/png'

const neonFont = await readFile(join(process.cwd(), 'public/fonts/Neon.ttf'))

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 45,
        background: '#0effed',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#31202b',
        borderWidth: '4px',
        borderRadius: '8px',
        borderColor: '#17c47c',
      }}
    >
      E
    </div>,
    { ...size, fonts: [{ name: 'neon', data: neonFont }] }
  )
}
