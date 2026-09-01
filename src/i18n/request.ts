import type { Locale } from 'next-intl'
import { cookies } from 'next/headers'
import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { localeCookie, locales } from '@/lib/constants'

export default getRequestConfig(async () => {
  const cookieStore = await cookies()
  const userLocale = cookieStore.get(localeCookie)?.value

  let locale: Locale

  if (hasLocale(locales, userLocale)) {
    locale = userLocale
  } else {
    locale = locales[0]
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
