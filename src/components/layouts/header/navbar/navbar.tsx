'use client'

import type { Route } from 'next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useUIStore } from '@/hooks'
import { ROUTES } from '@/lib/constants'
import { cn } from '@/lib/ui'
import * as $ from './navbar.styled'

export function Navbar() {
  const t = useTranslations()
  const pathname = usePathname()
  const navbarOpen = useUIStore((s) => s.navbarOpen)
  const setNavbarOpen = useUIStore((s) => s.setNavbarOpen)

  const routeMap: Record<Route, string> = {
    '/': '',
    '/about': t('AboutPage.title'),
    '/contact': t('ContactPage.title'),
    '/projects': t('ProjectsPage.title'),
  }

  return (
    <$.Navbar
      className={cn({
        'slide-in-from-top top-[calc(100vh-var(--header-height)-(--spacing(1.5)))] animate-in': navbarOpen,
      })}
    >
      {ROUTES.map((route) => {
        return (
          <Link href={route} key={route} onNavigate={() => setNavbarOpen(false)} passHref>
            <div className='lg:w-24'>
              <$.NavLink
                className={cn({
                  'text-neon-green-dark after:bg-neon-green-dark': pathname === route,
                })}
              >
                {routeMap[route]}
              </$.NavLink>
            </div>
          </Link>
        )
      })}
    </$.Navbar>
  )
}
