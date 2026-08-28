'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import tw from 'tailwind-styled-components'
import { useUIStore } from '@/hooks'

export function MobileButton() {
  const navbarOpen = useUIStore((s) => s.navbarOpen)
  const setNavbarOpen = useUIStore((s) => s.setNavbarOpen)

  return (
    <Wrapper onClick={() => setNavbarOpen(!navbarOpen)}>
      {navbarOpen ? <Icon $as={XIcon} aria-label='Cerrar Menú' /> : <Icon $as={MenuIcon} aria-label='Desplegar Menú' />}
    </Wrapper>
  )
}

const Wrapper = tw.button`pointer-events-auto flex cursor-pointer items-center justify-center text-neon-yellow lg:hidden`

const Icon = tw.svg`size-8 active:scale-90 md:size-10`
