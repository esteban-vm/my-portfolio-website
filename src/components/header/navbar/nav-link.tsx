'use client'

import type { ValidRoute } from '@/types'
import { usePathname } from 'next/navigation'
import tw from 'tailwind-styled-components'
import { TypedLink } from '@/components/common'
import { useUIStore } from '@/hooks'
import { cn } from '@/lib/ui'

export interface NavLinkProps {
  text: string
  href: ValidRoute
}

export function NavLink({ text, href }: NavLinkProps) {
  const pathname = usePathname()
  const setNavbarOpen = useUIStore((s) => s.setNavbarOpen)

  return (
    <TypedLink href={href} onNavigate={() => setNavbarOpen(false)} passHref>
      <Wrapper className={cn(pathname.includes(href) && 'text-neon-green-dark! after:bg-neon-green-dark!')}>
        {text}
      </Wrapper>
    </TypedLink>
  )
}

const Wrapper = tw.span`fl-text-sm/base nav-link pointer-events-auto relative inline-block font-bold font-neon text-neon-yellow uppercase hover:opacity-90 hover:after:origin-bottom-left hover:after:scale-x-100 active:scale-95 lg:after:absolute`
