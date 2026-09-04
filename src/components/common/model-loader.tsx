'use client'

import { Html, useProgress } from '@react-three/drei'
import { useLocale } from 'next-intl'
import { PacmanLoader } from 'react-spinners'

export function ModelLoader() {
  const locale = useLocale()
  const { progress } = useProgress()
  const percent = (progress / 100).toLocaleString(locale, { style: 'percent' })

  return (
    <Html center className='text-center'>
      <PacmanLoader className='-left-1/2' color='#ff15bc' speedMultiplier={2} />
      <div className='mt-2 font-bold text-neon-green-dark'>{percent}</div>
    </Html>
  )
}
