'use client'

import type * as THREE from 'three'
import type { GLTF } from 'three-stdlib'
import { useModelLoader } from '@/hooks'

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

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
        receiveShadow
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        geometry={nodes.Object_5.geometry}
        material={materials.PaletteMaterial002}
        receiveShadow
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        geometry={nodes.Object_22.geometry}
        material={materials.PaletteMaterial003}
        receiveShadow
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
    </group>
  )
}

useModelLoader.preload('city')
