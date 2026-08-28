'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import tw from 'tailwind-styled-components'
import { useUIStore } from '@/hooks'

export function MobileButton() {
  const navbarOpen = useUIStore((s) => s.navbarOpen)
  const setNavbarOpen = useUIStore((s) => s.setNavbarOpen)

  return (
    <Wrapper onClick={() => setNavbarOpen(!navbarOpen)}>
      {navbarOpen ? <XIcon aria-label='Cerrar Menú' /> : <MenuIcon aria-label='Desplegar Menú' />}
    </Wrapper>
  )
}

const Wrapper = tw.button`pointer-events-auto flex cursor-pointer items-center justify-center text-neon-yellow lg:hidden [&>svg]:size-8 active:[&>svg]:scale-90 [&>svg]:md:size-10`
