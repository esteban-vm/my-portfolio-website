import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata.AboutPage')

  return {
    title: t('title'),
  }
}

export default function AboutPage() {
  return (
    <section>
      <h2>About</h2>
      <h3>Coming Soon</h3>
    </section>
  )
}
