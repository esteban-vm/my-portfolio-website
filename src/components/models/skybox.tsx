'use client'

import type * as THREE from 'three'
import type { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'

interface GLTFResult extends GLTF {
  nodes: {
    Sphere__0: THREE.Mesh
  }
  materials: {
    'Scene_-_Root': THREE.MeshStandardMaterial
  }
}

useGLTF.setDecoderPath('/draco/')

const path = '/models/skybox.glb'

export function Skybox(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(path) as unknown as GLTFResult

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.Sphere__0.geometry}
        material={materials['Scene_-_Root']}
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        scale={500}
      />
    </group>
  )
}

useGLTF.preload(path)
