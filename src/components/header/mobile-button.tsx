'use client'

import { LuMenu, LuX } from 'react-icons/lu'
import tw from 'tailwind-styled-components'
import { useUIStore } from '@/hooks'

export function MobileButton() {
  const navbarOpen = useUIStore((s) => s.navbarOpen)
  const setNavbarOpen = useUIStore((s) => s.setNavbarOpen)

  return (
    <Wrapper onClick={() => setNavbarOpen(!navbarOpen)}>
      {navbarOpen ? <LuX aria-label='Cerrar Menú' /> : <LuMenu aria-label='Desplegar Menú' />}
    </Wrapper>
  )
}

const Wrapper = tw.button`pointer-events-auto flex size-9 cursor-pointer items-center justify-center text-neon-yellow md:size-10 lg:hidden [&_svg]:size-full`
