import tw from 'tailwind-styled-components'

export const Wrapper = tw.form`mx-auto w-full max-w-2xl`

export const Fieldset = tw.fieldset`fl-text-sm/base flex w-full flex-col gap-3`

export const Legend = tw.legend`fl-text-3xl/5xl mb-4 font-bold lg:mb-6`

export const Label = tw.label`flex flex-1 cursor-pointer select-none flex-col font-semibold`

export const Input = tw.input`rounded-lg border-2 border-neon-magenta-light p-1.5 text-white outline-neon-magenta-light outline-offset-1 focus:outline-1`

export const Textarea = tw.textarea`field-sizing-content min-h-22 resize-none rounded-lg border-2 border-neon-magenta-light p-1.5 text-white outline-neon-magenta-light outline-offset-1 focus:outline-1`

export const Button = tw.button`mt-4 cursor-pointer rounded-lg bg-neon-magenta-light px-3.5 py-1.5 text-white outline-neon-magenta-light outline-offset-1 transition-transform duration-200 hover:opacity-90 not-active:focus:outline-1 active:scale-[98%] disabled:opacity-80 lg:mt-6`

export const Small = tw.small`text-white empty:hidden`
