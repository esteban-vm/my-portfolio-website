import localFont from 'next/font/local'

export const balsamiq = localFont({
  variable: '--balsamiq',
  display: 'swap',
  fallback: ['sans-serif'],
  src: [
    { path: '../../public/fonts/Balsamiq-regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Balsamiq-italic.woff2', weight: '400', style: 'italic' },
    { path: '../../public/fonts/Balsamiq-bold.woff2', weight: '700', style: 'bold' },
  ],
})

export const neon = localFont({
  variable: '--neon',
  display: 'swap',
  fallback: ['sans-serif'],
  src: '../../public/fonts/Neon.woff2',
})

export const saiba45 = localFont({
  variable: '--saiba45',
  display: 'swap',
  fallback: ['cursive'],
  src: '../../public/fonts/SAIBA-45.woff2',
})
