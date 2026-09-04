import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('AboutPage')

  return {
    title: t('title'),
  }
}

export default async function AboutPage() {
  await new Promise((r) => setTimeout(r, 2_000))
  const t = await getTranslations('AboutPage')

  return (
    <section>
      <h2>{t('title')}</h2>
      <h3>Coming Soon</h3>
    </section>
  )
}
