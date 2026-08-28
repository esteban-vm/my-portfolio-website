import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata.ProjectsPage')

  return {
    title: t('title'),
  }
}

export default function ProjectsPage() {
  return (
    <section>
      <h2>Projects</h2>
      <h3>Coming Soon</h3>
    </section>
  )
}
