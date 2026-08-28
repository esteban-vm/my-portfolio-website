import type { Locale } from 'next-intl'
import NextLink from 'next/link'

type AnySafeSlug = __next_route_internal_types__.SafeSlug<string>

type ExtractValidRoutes<T> = T extends `/${AnySafeSlug}/${infer Rest}`
  ? `/${Rest}`
  : T extends `/${AnySafeSlug}`
    ? '/'
    : never

type ValidRoutes = ExtractValidRoutes<__next_route_internal_types__.DynamicRoutes>

type LocalisedRoute = __next_route_internal_types__.DynamicRoutes<Locale>

export function TypedLink({ href, locale }: { href: ValidRoutes; locale: Locale }) {
  const base = `/${locale}${href}`
  const normalised = base.endsWith('/') ? base.slice(0, -1) : base
  const pathname = normalised as LocalisedRoute
  return <NextLink href={pathname} />
}
