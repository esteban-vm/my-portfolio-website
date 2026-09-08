import tw from 'tailwind-styled-components'

export const Card = tw.div`hover:paused fl-text-xs/base absolute top-[calc(var(--header-height)+(--spacing(8)))] left-1/2 z-10 w-full max-w-sm -translate-x-1/2 animate-blink rounded-md bg-neon-green-dark p-3 text-center font-semibold text-black uppercase lg:max-w-lg lg:p-5`

export const Text = tw.p`line-clamp-3 text-pretty`

export const Link = tw.span`absolute top-full left-1/2 w-[90%] -translate-x-1/2 rounded-md bg-black/60 px-2 py-1.75 font-bold text-neon-green-darker shadow-md shadow-neon-green-light backdrop-blur-sm transition-all hover:opacity-95 active:scale-[98%] lg:px-4 lg:py-2.5`

export const Icon = tw.svg`mb-0.75 inline size-4 fill-current lg:mb-1 lg:size-5`
