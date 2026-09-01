import type { Locale } from 'next-intl'
import { cookies, headers } from 'next/headers'
import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { localeCookie, locales } from '@/lib/constants'

export default getRequestConfig(async () => {
  const cookieStore = await cookies()
  const savedLocale = cookieStore.get(localeCookie)?.value

  let locale: Locale

  if (hasLocale(locales, savedLocale)) {
    locale = savedLocale
  } else {
    const headersList = await headers()
    const acceptLanguage = headersList.get('accept-language') ?? ''

    if (acceptLanguage.startsWith('es')) {
      locale = locales[1]
    } else {
      locale = locales[0]
    }
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
