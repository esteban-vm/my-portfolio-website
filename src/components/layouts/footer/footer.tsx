'use client'

import { useLocale } from 'next-intl'
import { useTransition } from 'react'
import { TbMusic } from 'react-icons/tb'
import { changeLanguage } from '@/actions'
import * as $ from './footer.styled'

export function Footer() {
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
    <$.Footer>
      <$.Button disabled={isPending} onClick={onChangeLanguage}>
        L
      </$.Button>
      <$.Button>
        <TbMusic />
      </$.Button>
    </$.Footer>
  )
}
