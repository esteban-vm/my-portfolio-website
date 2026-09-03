import { TbMusic } from 'react-icons/tb'
import tw from 'tailwind-styled-components'

export function ActionButton() {
  return (
    <Wrapper type='button'>
      <TbMusic />
    </Wrapper>
  )
}

const Wrapper = tw.button`perspective-[0.2em] action-button pointer-events-auto relative not-lg:mt-2 flex size-10 cursor-pointer items-center justify-center rounded-md border-2 border-neon-magenta-light bg-transparent text-neon-magenta-light shadow-inner shadow-neon-magenta-light backdrop-blur-sm transition-all hover:text-white hover:after:opacity-100 hover:before:opacity-80 active:scale-95 lg:size-12 [&>svg]:size-3/4`
