'use client'

import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import tw from 'tailwind-styled-components'
import { useUIStore } from '@/hooks'
import { cn, isActive } from '@/lib/ui'
import { TypedLink } from '../common'

export function NavLinks() {
  const t = useTranslations()
  const pathname = usePathname()
  const navbarOpen = useUIStore((s) => s.navbarOpen)

  return (
    <Wrapper className={cn(navbarOpen && 'slide-in-from-top top-full animate-in')}>
      <TypedLink href='/about' passHref>
        <NavLink className={isActive(pathname, '/about')}>{t('AboutPage.title')}</NavLink>
      </TypedLink>
      <TypedLink href='/projects' passHref>
        <NavLink className={isActive(pathname, '/projects')}>{t('ProjectsPage.title')}</NavLink>
      </TypedLink>
      <TypedLink href='/contact' passHref>
        <NavLink className={isActive(pathname, '/contact')}>{t('ContactPage.title')}</NavLink>
      </TypedLink>
    </Wrapper>
  )
}

const Wrapper = tw.nav`nav-links slide-out-to-top absolute top-[-500%] flex w-[95%] animate-out flex-col items-center justify-around text-nowrap bg-black/70 fill-mode-forwards text-center duration-700 lg:static lg:size-auto lg:animate-none lg:flex-row lg:gap-8 lg:bg-transparent`

const NavLink = tw.span`fl-text-sm/base pointer-events-auto relative inline-block font-bold font-neon text-neon-yellow uppercase after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neon-yellow after:transition-transform after:duration-200 after:ease-out after:content-[''] hover:opacity-90 hover:after:origin-bottom-left hover:after:scale-x-100 active:scale-95 lg:after:absolute`
