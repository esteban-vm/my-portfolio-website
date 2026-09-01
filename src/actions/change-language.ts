'use server'

import type { Locale } from 'next-intl'
import { cookies } from 'next/headers'
import { localeCookie } from '@/lib/constants'

export async function changeLanguage(locale: Locale) {
  await new Promise((r) => setTimeout(r, 2_000))
  const store = await cookies()
  store.set(localeCookie, locale)
}
