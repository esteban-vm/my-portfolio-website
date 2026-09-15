import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ContactPage')

  return {
    title: t('title'),
  }
}

export default function ContactPage() {
  return (
    <section className='flex flex-col-reverse gap-1 border border-amber-500 p-1 lg:flex-row'>
      <div className='flex min-w-[60%] flex-1 flex-col p-2.5'>
        <form className='mx-auto w-full max-w-xl'>
          <fieldset className='flex w-full flex-col gap-3'>
            <legend className='mb-6 font-bold text-5xl'>Get in touch</legend>
            <label className='form-label'>
              Name:
              <input className='form-control' type='text' />
            </label>
            <label className='form-label'>
              Email:
              <input className='form-control' type='email' />
            </label>
            <label className='form-label'>
              Message:
              <textarea className='field-sizing-content form-control min-h-22 resize-none' spellCheck={false} />
            </label>
            <button
              className='mt-6 cursor-pointer rounded-lg bg-neon-magenta-light px-3.5 py-1.5 text-white outline-neon-magenta-light outline-offset-1 transition-transform duration-200 hover:opacity-90 not-active:focus:outline-1 active:scale-[98%] disabled:opacity-80'
              type='button'
            >
              Send Message
            </button>
          </fieldset>
        </form>
      </div>
      <div className='min-h-80 flex-1 border border-amber-500'></div>
    </section>
  )
}
