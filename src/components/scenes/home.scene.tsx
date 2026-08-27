'use client'

import { OrbitControls, PerspectiveCamera, Stars, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { lazy, Suspense } from 'react'
import { useMediaQuery } from 'react-responsive'
import { ModelLoader } from '../common'

const City = lazy(() => import('../models').then((mod) => ({ default: mod.CityModel })))
const Car = lazy(() => import('../models').then((mod) => ({ default: mod.CarModel })))

const polarAngle = Math.PI / 2

export function HomeScene() {
  const isMD = useMediaQuery({ maxWidth: 768 })

  return (
    <Canvas>
      <Suspense fallback={<ModelLoader />}>
        <Stats />
        <Stars fade />
        <City position={[-2, isMD ? -2.5 : -1.5, 2]} rotation={[0, polarAngle, 0]} scale={isMD ? 1 : 1.2} />
        <Car rotation={[0, polarAngle, 0.2]} scale={isMD ? 0.15 : 0.2} />
        <directionalLight color='#d3fc17' intensity={3} position={[0, 1, 0]} />
        <ambientLight intensity={0.5} />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={-0.5}
          enableDamping
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={polarAngle}
          minPolarAngle={polarAngle}
        />
      </Suspense>
    </Canvas>
  )
}
