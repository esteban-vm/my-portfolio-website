import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import tw from 'tailwind-styled-components'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ContactPage')

  return {
    title: t('title'),
  }
}

export default function ContactPage() {
  return (
    <section className='flex flex-col-reverse gap-2.5 p-2.5 lg:flex-row'>
      <div className='flex min-w-[60%] flex-1 flex-col'>
        <form className='mx-auto w-full max-w-2xl'>
          <Fieldset>
            <Legend>Get in touch</Legend>
            <Label>
              Name:
              <Input type='text' />
            </Label>
            <Label>
              Email:
              <Input type='email' />
            </Label>
            <Label>
              Message:
              <Textarea spellCheck={false} />
            </Label>
            <Button type='button'>Send Message</Button>
          </Fieldset>
        </form>
      </div>
      <div className='min-h-80 flex-1 border border-amber-500'></div>
    </section>
  )
}

const Fieldset = tw.fieldset`fl-text-sm/base flex w-full flex-col gap-3`

const Legend = tw.legend`fl-text-3xl/5xl mb-4 font-bold lg:mb-6`

const Label = tw.label`flex flex-1 cursor-pointer select-none flex-col font-semibold`

const Input = tw.input`rounded-lg border-2 border-neon-magenta-light p-1.5 text-white outline-neon-magenta-light outline-offset-1 focus:outline-1`

const Textarea = tw.textarea`field-sizing-content min-h-22 resize-none rounded-lg border-2 border-neon-magenta-light p-1.5 text-white outline-neon-magenta-light outline-offset-1 focus:outline-1`

const Button = tw.button`mt-4 cursor-pointer rounded-lg bg-neon-magenta-light px-3.5 py-1.5 text-white outline-neon-magenta-light outline-offset-1 transition-transform duration-200 hover:opacity-90 not-active:focus:outline-1 active:scale-[98%] disabled:opacity-80 lg:mt-6`
