import { Link } from '@/i18n/navigation'

type AnySafeSlug = __next_route_internal_types__.SafeSlug<string>

type ExtractValidRoutes<T> = T extends `/${AnySafeSlug}/${infer Rest}`
  ? `/${Rest}`
  : T extends `/${AnySafeSlug}`
    ? '/'
    : never

type ValidRoutes = ExtractValidRoutes<__next_route_internal_types__.DynamicRoutes>

export type BaseTypedLinkProps = Parameters<typeof Link>[0]

export interface TypedLinkProps extends BaseTypedLinkProps {
  href: ValidRoutes
}

export function TypedLink(props: TypedLinkProps) {
  return <Link {...props} />
}
