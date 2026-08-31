'use client'

import { useLocale } from 'next-intl'
import { useTransition } from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'

export function LanguageButton() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const changeLanguage = () => {
    startTransition(async () => {
      await new Promise((r) => setTimeout(r, 3_000))
      router.replace(pathname, { locale: locale === 'es' ? 'en' : 'es' })
    })
  }

  return (
    <button
      className='cursor-pointer rounded-md bg-neon-green-dark px-2 py-1 hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-70'
      disabled={isPending}
      onClick={changeLanguage}
      type='button'
    >
      Change Language
    </button>
  )
}
