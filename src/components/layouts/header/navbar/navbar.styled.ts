import tw from 'tailwind-styled-components'

export const Navbar = tw.nav`navbar-bordered slide-out-to-top absolute -top-full flex h-[calc(100vh-var(--header-height)-var(--footer-height)-(--spacing(4)))] w-[95%] animate-out flex-col items-center justify-around text-nowrap bg-black/70 fill-mode-forwards text-center duration-700 lg:static lg:size-auto lg:animate-none lg:flex-row lg:gap-8`

export const NavLink = tw.span`fl-text-sm/base nav-link pointer-events-auto relative inline-block font-bold font-neon text-neon-yellow uppercase hover:opacity-90 hover:after:origin-bottom-left hover:after:scale-x-100 active:scale-95 lg:w-24 lg:after:absolute`
