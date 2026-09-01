import type { Locale } from 'next-intl'
import { cookies } from 'next/headers'
import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { locales } from '@/lib/constants'

export default getRequestConfig(async () => {
  const store = await cookies()
  const preference = store.get('NEXT_LOCALE')?.value

  let locale: Locale

  if (hasLocale(locales, preference)) {
    locale = preference
  } else {
    locale = locales[0]
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
