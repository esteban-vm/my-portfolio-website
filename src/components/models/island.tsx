'use client'

import type * as THREE from 'three'
import type { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'

interface GLTFResult extends GLTF {
  nodes: {
    pCube11_rocks1_0: THREE.Mesh
    pCube27_phongE1_0: THREE.Mesh
    pCylinder139_fox_readyfox_white_0: THREE.Mesh
    polySurface1541_water_0: THREE.Mesh
  }
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
    PaletteMaterial003: THREE.MeshStandardMaterial
    PaletteMaterial004: THREE.MeshStandardMaterial
  }
}

useGLTF.setDecoderPath('/draco/')

const path = '/models/island.glb'

export function Island(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(path) as unknown as GLTFResult

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
        receiveShadow
      />
      <mesh
        castShadow
        geometry={nodes.pCube27_phongE1_0.geometry}
        material={materials.PaletteMaterial002}
        receiveShadow
      />
      <mesh
        castShadow
        geometry={nodes.pCylinder139_fox_readyfox_white_0.geometry}
        material={materials.PaletteMaterial003}
        position={[0.47, 0, 1.217]}
        receiveShadow
        rotation={[0, -1.198, 0]}
      />
      <mesh
        castShadow
        geometry={nodes.polySurface1541_water_0.geometry}
        material={materials.PaletteMaterial004}
        position={[-10.297, 0, 5.622]}
        receiveShadow
        rotation={[0, -0.411, 0]}
      />
    </group>
  )
}

useGLTF.preload(path)
