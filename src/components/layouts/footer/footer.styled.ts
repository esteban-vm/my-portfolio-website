import tw from 'tailwind-styled-components'

export const Footer = tw.footer`container pointer-events-none absolute bottom-0 left-1/2 z-20 flex h-(--footer-height) min-h-16 -translate-x-1/2 justify-around lg:items-center`

export const ActionButton = tw.button`perspective-[0.2em] action-button pointer-events-auto relative not-lg:mt-2 flex size-10 cursor-pointer items-center justify-center rounded-md border-2 border-neon-magenta-light bg-transparent text-neon-magenta-light shadow-inner shadow-neon-magenta-light backdrop-blur-sm transition-all hover:text-white hover:after:opacity-100 hover:before:opacity-80 active:scale-95 disabled:cursor-not-allowed lg:size-12 [&>svg]:size-3/4`

export const LanguageBadge = tw.span`absolute top-0 left-full -translate-x-1/2 -translate-y-1/2 rounded-sm bg-neon-magenta-light px-1.5 pt-0.5 font-semibold text-white text-xs uppercase lg:text-sm`
