import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata.ContactPage')

  return {
    title: t('title'),
  }
}

export default function ContactPage() {
  return (
    <section>
      <h2>Contact</h2>
      <h3>Coming Soon</h3>
    </section>
  )
}
