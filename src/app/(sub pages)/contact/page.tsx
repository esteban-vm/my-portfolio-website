import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { ContactForm } from '@/components/forms'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ContactPage')

  return {
    title: t('title'),
  }
}

export default async function ContactPage() {
  const locale = await getLocale()

  return (
    <section className='flex flex-col-reverse gap-2.5 p-2.5 lg:flex-row'>
      <div className='flex min-w-[60%] flex-1 flex-col'>
        <ContactForm key={locale} />
      </div>
      <div className='min-h-80 flex-1 border border-amber-500'></div>
    </section>
  )
}
