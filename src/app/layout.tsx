import type { Metadata, Viewport } from 'next'
import * as fonts from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'My Portfolio', template: 'My Portfolio | %s' },
  description: "Esteban V.M.'s portfolio website",
  keywords: ['Front-End Developer', 'Web Design', 'Next.js', 'React'],
  authors: { name: 'Esteban V.M.', url: 'https://github.com/esteban-vm' },
  generator: 'Next.js',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'overlays-content',
}

export type Props = LayoutProps<'/'>

export default function RootLayout({ children }: Props) {
  return (
    <html
      className={`${fonts.balsamiq.variable} ${fonts.montserrat.variable} ${fonts.neon.variable} ${fonts.saiba45.variable} antialiased`}
      dir='ltr'
      lang='es'
      suppressHydrationWarning
    >
      <body>
        <main className='relative h-screen'>{children}</main>
      </body>
    </html>
  )
}
