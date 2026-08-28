import tw from 'tailwind-styled-components'
import { HomeLink } from './home-link'
import { MobileButton } from './mobile-button'
import { NavLinks } from './nav-links'

export function Navigation() {
  return (
    <Wrapper>
      <InnerWrapper>
        <HomeLink />
        <MobileButton />
        <NavLinks />
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = tw.header`container pointer-events-none absolute top-3 left-1/2 z-30 flex h-[11vh] -translate-x-1/2 md:h-[12vh] lg:h-[13vh]`

const InnerWrapper = tw.div`relative flex size-full items-center justify-around`
