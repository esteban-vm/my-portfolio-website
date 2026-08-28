import tw from 'tailwind-styled-components'
import { TypedLink } from '../common'

export function HomeLink() {
  return (
    <h1>
      <TypedLink href='/' passHref>
        <NameLogo>
          Esteban
          <LastName>&nbsp;V.M.</LastName>
        </NameLogo>
      </TypedLink>
    </h1>
  )
}

const NameLogo = tw.span`logo-shadow fl-text-4xl/7xl pointer-events-auto text-wrap text-center font-saiba45 text-neon-yellow hover:animate-none motion-safe:animate-glitch`

const LastName = tw.span`hidden font-saiba45 md:inline`
