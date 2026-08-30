import type { ValidRoute } from '@/types'
import { Link } from '@/i18n/navigation'

export type BaseTypedLinkProps = Parameters<typeof Link>[0]

export interface TypedLinkProps extends BaseTypedLinkProps {
  href: ValidRoute
}

export function TypedLink(props: TypedLinkProps) {
  return <Link {...props} />
}
