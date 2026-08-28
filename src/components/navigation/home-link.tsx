import tw from 'tailwind-styled-components'
import { Link } from '@/i18n/navigation'

export function HomeLink() {
  return (
    <h1>
      <Link href='/' passHref>
        <NameLogo>
          Esteban
          <LastName>&nbsp;V.M.</LastName>
        </NameLogo>
      </Link>
    </h1>
  )
}

const NameLogo = tw.span`logo-shadow fl-text-4xl/7xl pointer-events-auto text-wrap text-center font-saiba45 text-neon-yellow hover:animate-none motion-safe:animate-glitch`

const LastName = tw.span`hidden font-saiba45 md:inline`
