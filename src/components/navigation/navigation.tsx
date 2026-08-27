import Link from 'next/link'
import tw from 'tailwind-styled-components'

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
      </InnerWrapper>
    </Wrapper>
  )
}

const Wrapper = tw.header`container pointer-events-none absolute top-3 left-1/2 z-30 flex h-[11vh] -translate-x-1/2 md:h-[12vh] lg:h-[13vh]`

const InnerWrapper = tw.div`relative flex size-full items-center justify-around`

const NameLogo = tw.span`logo-shadow pointer-events-auto animate-glitch text-wrap text-center font-saiba45 text-4xl text-neon-yellow hover:animate-none`

const LastName = tw.span`hidden font-saiba45 md:inline`
