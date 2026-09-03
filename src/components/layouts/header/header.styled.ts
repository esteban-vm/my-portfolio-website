import tw from 'tailwind-styled-components'

export const Header = tw.header`container pointer-events-none absolute top-3 left-1/2 z-30 flex h-(--header-height) -translate-x-1/2`

export const Content = tw.div`relative flex size-full items-center justify-around`

export const NameLogo = tw.span`logo-shadow fl-text-4xl/7xl pointer-events-auto text-wrap text-center font-saiba45 text-neon-yellow hover:animate-none motion-safe:animate-glitch`

export const LastName = tw.span`hidden font-saiba45 md:inline`

export const MobileButton = tw.button`pointer-events-auto flex size-9 cursor-pointer items-center justify-center text-neon-yellow md:size-10 lg:hidden [&_svg]:size-full`
