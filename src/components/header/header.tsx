import tw from 'tailwind-styled-components'
import { HomeLink } from './home-link'
import { MobileButton } from './mobile-button'
import { Navbar } from './navbar'

export function Header() {
  return (
    <Wrapper>
      <InnerWrapper>
        <HomeLink />
        <MobileButton />
        <Navbar />
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = tw.header`container pointer-events-none absolute top-3 left-1/2 z-30 flex h-(--header-height) -translate-x-1/2`
const InnerWrapper = tw.div`relative flex size-full items-center justify-around`

//  md:h-[12vh] lg:h-[13vh]
