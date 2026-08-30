import type { ClassValue } from 'clsx'
import type { ValidRoute } from '@/types'
import { clsx } from 'clsx'
import { twMerge } from 'fluid-tailwindcss/tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isActive(pathname: string, href: ValidRoute) {
  if (pathname.includes(href)) {
    const className = 'text-neon-green-dark! after:bg-neon-green-dark!'
    return className
  }
}
