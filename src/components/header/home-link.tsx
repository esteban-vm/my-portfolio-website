'use client'

import tw from 'tailwind-styled-components'
import { useUIStore } from '@/hooks'
import { TypedLink } from '../common'

export function HomeLink() {
  const setNavbarOpen = useUIStore((s) => s.setNavbarOpen)

  return (
    <h1>
      <TypedLink href='/' onNavigate={() => setNavbarOpen(false)} passHref>
        <NameLogo>
          Esteban
          <LastName>&nbsp;V.M.</LastName>
        </NameLogo>
      </TypedLink>
    </h1>
  )
}

const NameLogo = tw.span`logo-shadow fl-text-4xl/7xl pointer-events-auto text-wrap text-center font-saiba45 text-neon-yellow hover:animate-none motion-safe:animate-glitch`
const LastName = tw.span`hidden font-saiba45 md:inline`
