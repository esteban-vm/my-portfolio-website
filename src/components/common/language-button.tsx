'use client'

import { useLocale } from 'next-intl'
import { useTransition } from 'react'
import { changeLanguage } from '@/actions'

export function LanguageButton() {
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()

  const onChangeLanguage = () => {
    startTransition(async () => {
      if (locale === 'en') {
        await changeLanguage('es')
      } else {
        await changeLanguage('en')
      }
    })
  }

  return (
    <button
      className='cursor-pointer rounded-md bg-neon-green-dark px-2 py-1 hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-70'
      disabled={isPending}
      onClick={onChangeLanguage}
      type='button'
    >
      Change/Cambiar
    </button>
  )
}
