import type { locales } from '@/lib/constants'
import type messages from '../../messages/en.json'

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof locales)[number]
    Messages: typeof messages
  }
}
