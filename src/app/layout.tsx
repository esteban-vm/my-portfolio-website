import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'
import { AppFooter, AppHeader } from '@/components/layouts'
import { balsamiq, saiba45 } from '@/lib/fonts'
import '@/styles/globals.css'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('RootLayout')

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

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html className={`${balsamiq.variable} ${saiba45.variable} antialiased`} dir='ltr' lang={await getLocale()}>
      <body>
        <NextIntlClientProvider>
          <main className='relative h-screen'>
            <AppHeader />
            {children}
            <AppFooter />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
