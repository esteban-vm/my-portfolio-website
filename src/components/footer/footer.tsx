import tw from 'tailwind-styled-components'

export function Footer() {
  return <Wrapper></Wrapper>
}

const Wrapper = tw.footer`container pointer-events-none absolute bottom-0 left-1/2 z-20 flex h-(--footer-height) -translate-x-1/2 items-start justify-around bg-neon-green-dark/25`
