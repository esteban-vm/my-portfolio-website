'use server'

import type { Locale } from 'next-intl'
import { cookies } from 'next/headers'

export async function changeLanguage(locale: Locale) {
  await new Promise((r) => setTimeout(r, 2_000))
  const store = await cookies()
  store.set('NEXT_LOCALE', locale)
}
