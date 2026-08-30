type AnySafeSlug = __next_route_internal_types__.SafeSlug<string>

type ExtractValidRoute<T> = T extends `/${AnySafeSlug}/${infer Rest}`
  ? `/${Rest}`
  : T extends `/${AnySafeSlug}`
    ? '/'
    : never

export type ValidRoute = ExtractValidRoute<__next_route_internal_types__.DynamicRoutes>
