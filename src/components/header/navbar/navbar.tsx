'use client'

import { useTranslations } from 'next-intl'
import tw from 'tailwind-styled-components'
import { useUIStore } from '@/hooks'
import { cn } from '@/lib/ui'
import { NavLink } from './nav-link'

export function Navbar() {
  const t = useTranslations()
  const navbarOpen = useUIStore((s) => s.navbarOpen)

  return (
    <Wrapper
      className={cn({
        'slide-in-from-top top-[calc(100vh-var(--header-height)+(--spacing(2)))] animate-in': navbarOpen,
      })}
    >
      <NavLink href='/about' text={t('AboutPage.title')} />
      <NavLink href='/projects' text={t('ProjectsPage.title')} />
      <NavLink href='/contact' text={t('ContactPage.title')} />
    </Wrapper>
  )
}

const Wrapper = tw.nav`navbar slide-out-to-top absolute -top-full flex w-[95%] animate-out flex-col items-center justify-around text-nowrap bg-black/70 fill-mode-forwards text-center duration-700 lg:static lg:size-auto lg:animate-none lg:flex-row lg:gap-8`
