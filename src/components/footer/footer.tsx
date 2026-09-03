import tw from 'tailwind-styled-components'
import { ActionButton } from './action-button'

export function Footer() {
  return (
    <Wrapper>
      <ActionButton />
      <ActionButton />
    </Wrapper>
  )
}

const Wrapper = tw.footer`container pointer-events-none absolute bottom-0 left-1/2 z-20 flex h-(--footer-height) -translate-x-1/2 justify-around lg:items-center`
