'use client'

import type * as THREE from 'three'
import type { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
import { useModelLoader, useUIStore } from '@/hooks'

interface GLTFResult extends GLTF {
  nodes: {
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
    Object_22: THREE.Mesh
  }
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
    PaletteMaterial003: THREE.MeshPhysicalMaterial
  }
}

export function CityModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useModelLoader('city') as unknown as GLTFResult
  const setCurrentStage = useUIStore((s) => s.setCurrentStage)

  useFrame(({ camera }) => {
    const cameraX = camera.position.x

    switch (true) {
      case cameraX >= -1 && cameraX <= 1:
        setCurrentStage(1)
        break
      case cameraX >= 1.5 && cameraX <= 5:
      case cameraX <= -1.5 && cameraX >= -5:
        setCurrentStage(2)
        break
      case cameraX >= 5.5 && cameraX <= 9:
      case cameraX <= -5.5 && cameraX >= -9:
        setCurrentStage(3)
        break
      case cameraX >= 9.5:
      case cameraX <= -9.5:
        setCurrentStage(4)
        break
      default:
        setCurrentStage(null)
        break
    }
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.PaletteMaterial002}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.PaletteMaterial003}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
    </group>
  )
}

useModelLoader.preload('city')
