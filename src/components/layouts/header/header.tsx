'use client'

import Link from 'next/link'
import { LuMenu, LuX } from 'react-icons/lu'
import { useUIStore } from '@/hooks'
import * as $ from './header.styled'
import { Navbar } from './navbar'

export function Header() {
  const navbarOpen = useUIStore((s) => s.navbarOpen)
  const setNavbarOpen = useUIStore((s) => s.setNavbarOpen)

  return (
    <$.Header>
      <$.Content>
        <h1>
          <Link href='/' onNavigate={() => setNavbarOpen(false)} passHref>
            <$.NameLogo>
              Esteban
              <$.LastName>&nbsp;V.M.</$.LastName>
            </$.NameLogo>
          </Link>
        </h1>
        <$.MobileButton onClick={() => setNavbarOpen(!navbarOpen)}>
          {navbarOpen ? <LuX aria-label='Cerrar Menú' /> : <LuMenu aria-label='Desplegar Menú' />}
        </$.MobileButton>
        <Navbar />
      </$.Content>
    </$.Header>
  )
}
