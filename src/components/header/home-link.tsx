'use client'

import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { useUIStore } from '@/hooks'

export function HomeLink() {
  const setNavbarOpen = useUIStore((s) => s.setNavbarOpen)

  return (
    <h1>
      <Link href='/' onNavigate={() => setNavbarOpen(false)} passHref>
        <NameLogo>
          Esteban
          <LastName>&nbsp;V.M.</LastName>
        </NameLogo>
      </Link>
    </h1>
  )
}

const NameLogo = tw.span`logo-shadow fl-text-4xl/7xl pointer-events-auto text-wrap text-center font-saiba45 text-neon-yellow hover:animate-none motion-safe:animate-glitch`
const LastName = tw.span`hidden font-saiba45 md:inline`
