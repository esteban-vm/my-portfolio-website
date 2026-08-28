'use client'

import { useTranslations } from 'next-intl'
import tw from 'tailwind-styled-components'
import { useUIStore } from '@/hooks'
import { cn } from '@/lib/ui'

export function NavLinks() {
  const t = useTranslations('HomePage')
  const navbarOpen = useUIStore((s) => s.navbarOpen)

  return (
    <>
      <span className='text-neon-green-dark'>{t('title')}</span>
      <Wrapper className={cn(navbarOpen && 'slide-in-from-top top-full animate-in')}></Wrapper>
    </>
  )
}

const Wrapper = tw.nav`nav-links slide-out-to-top absolute top-[-500%] flex w-[95%] animate-out flex-col items-center justify-around text-nowrap bg-black/70 fill-mode-forwards text-center duration-700 lg:static lg:size-auto lg:animate-none lg:flex-row lg:gap-8 lg:bg-transparent`
