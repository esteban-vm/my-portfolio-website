'use client'

import type * as THREE from 'three'
import type { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useModelLoader } from '@/hooks'

interface GLTFResult extends GLTF {
  nodes: {
    dmc_M_dmc_0: THREE.Mesh
  }
  materials: {
    M_dmc: THREE.MeshStandardMaterial
  }
}

export function CarModel(props: JSX.IntrinsicElements['group']) {
  const modelRef = useRef<THREE.Group>(null!)
  const { nodes, materials } = useModelLoader('car') as unknown as GLTFResult

  useFrame(({ camera, clock }) => {
    const y = Math.sin(clock.elapsedTime) * 0.15
    modelRef.current.position.set(0, y, -3.5)
    camera.add(modelRef.current)
  })

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <mesh
        castShadow
        geometry={nodes.dmc_M_dmc_0.geometry}
        material={materials.M_dmc}
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.065}
      />
    </group>
  )
}

useModelLoader.preload('car')
