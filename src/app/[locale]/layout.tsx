import type { Metadata, Viewport } from 'next'
import { locale } from 'next/root-params'
import { NextIntlClientProvider } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/header'
import * as fonts from '@/lib/fonts'
import '@/app/globals.css'

export type Props = LayoutProps<'/[locale]'>

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('HomePage')

  return {
    title: {
      default: t('title.default'),
      template: t('title.template'),
    },
    description: t('description'),
    keywords: [t('keywords.1'), t('keywords.2'), t('keywords.3'), t('keywords.4')],
    authors: { name: 'Esteban V.M.', url: 'https://github.com/esteban-vm' },
    generator: 'Next.js',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'overlays-content',
}

export default async function RootLayout({ children }: Props) {
  return (
    <html
      className={`${fonts.balsamiq.variable} ${fonts.montserrat.variable} ${fonts.neon.variable} ${fonts.saiba45.variable} antialiased`}
      dir='ltr'
      lang={await locale()}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider>
          <main className='relative h-screen'>
            <Header />
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
