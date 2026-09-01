import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { LanguageButton } from '@/components/common'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('AboutPage')

  return {
    title: t('title'),
  }
}

export default async function AboutPage() {
  const t = await getTranslations('AboutPage')

  return (
    <section>
      <h2>{t('title')}</h2>
      <h3>Coming Soon</h3>
      <LanguageButton />
    </section>
  )
}
