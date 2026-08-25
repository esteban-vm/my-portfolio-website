'use client'

import { Html, useProgress } from '@react-three/drei'

export function Loader() {
  const { progress } = useProgress()
  const percent = (progress / 100).toLocaleString('es', { style: 'percent' })

  return (
    <Html center className='text-center'>
      <span className='font-bold text-amber-500'>{percent}</span>
    </Html>
  )
}
