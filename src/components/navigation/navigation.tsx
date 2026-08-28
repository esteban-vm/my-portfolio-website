import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { MobileButton } from './mobile-button'
import { NavLinks } from './nav-links'

export function Navigation() {
  return (
    <Wrapper>
      <InnerWrapper>
        <h1>
          <Link href='/' passHref>
            <NameLogo>
              Esteban
              <LastName>&nbsp;V.M.</LastName>
            </NameLogo>
          </Link>
        </h1>
        <MobileButton />
        <NavLinks />
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = tw.header`container pointer-events-none absolute top-3 left-1/2 z-30 flex h-[11vh] -translate-x-1/2 md:h-[12vh] lg:h-[13vh]`

const InnerWrapper = tw.div`relative flex size-full items-center justify-around`

const NameLogo = tw.span`logo-shadow fl-text-4xl/7xl pointer-events-auto text-wrap text-center font-saiba45 text-neon-yellow hover:animate-none motion-safe:animate-glitch`

const LastName = tw.span`hidden font-saiba45 md:inline`
