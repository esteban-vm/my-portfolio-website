import { useLocale } from 'next-intl'
import { useTransition } from 'react'
import { TbMusic } from 'react-icons/tb'
import tw from 'tailwind-styled-components'
import { changeLanguage } from '@/actions'
import { ActionButton } from './action-button'

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
    <Wrapper>
      <ActionButton disabled={isPending} onClick={onChangeLanguage}>
        <TbMusic />
      </ActionButton>
      <ActionButton />
    </Wrapper>
  )
}

const Wrapper = tw.footer`container pointer-events-none absolute bottom-0 left-1/2 z-20 flex h-(--footer-height) -translate-x-1/2 justify-around lg:items-center`
