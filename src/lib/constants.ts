import type { Route } from 'next'

export const LOCALES = ['en', 'es'] as const
export const LOCALE_COOKIE = 'NEXT_LOCALE'

export const ROUTES = ['/about', '/contact', '/projects'] as const satisfies Route[]
