'use client'

import type * as THREE from 'three'
import type { GLTF } from 'three-stdlib'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'

interface GLTFAction extends THREE.AnimationClip {
  name: 'Take 001'
}

interface GLTFResult extends GLTF {
  nodes: {
    FloatingRocks_islandMaterial_0: THREE.Mesh
    '003_islandMaterial_0': THREE.Mesh
    '004_islandMaterial_0': THREE.Mesh
    '005_islandMaterial_0': THREE.Mesh
    '006_islandMaterial_0': THREE.Mesh
    '007_islandMaterial_0': THREE.Mesh
    Rotator_islandMaterial_0: THREE.Mesh
    Charkhofalak_islandMaterial_0: THREE.Mesh
  }
  materials: {
    islandMaterial: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

useGLTF.setDecoderPath('/draco/')

const path = '/models/park.glb'

export function Park(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials, animations } = useGLTF(path) as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['Take 001']?.play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='RootNode' scale={0.055}>
          <group
            name='FloatingRocks'
            position={[-0.518, -52.806, 0.019]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2.034, 2.034, 1.686]}
          >
            <mesh
              castShadow
              geometry={nodes.FloatingRocks_islandMaterial_0.geometry}
              material={materials.islandMaterial}
              name='FloatingRocks_islandMaterial_0'
              receiveShadow
            />
          </group>
        </group>
        <group name='Charkhofalak' position={[1.919, 0.138, -5.873]} scale={0.055}>
          <group name='Rotator' position={[-0.303, 101.439, 12.736]}>
            <group name='003' position={[-38.817, 54.003, 11.542]}>
              <mesh
                castShadow
                geometry={nodes['003_islandMaterial_0'].geometry}
                material={materials.islandMaterial}
                name='003_islandMaterial_0'
                receiveShadow
              />
            </group>
            <group name='004' position={[38.971, 54.902, 11.542]}>
              <mesh
                castShadow
                geometry={nodes['004_islandMaterial_0'].geometry}
                material={materials.islandMaterial}
                name='004_islandMaterial_0'
                receiveShadow
              />
            </group>
            <group name='005' position={[64.034, -21.472, 11.542]}>
              <mesh
                castShadow
                geometry={nodes['005_islandMaterial_0'].geometry}
                material={materials.islandMaterial}
                name='005_islandMaterial_0'
                receiveShadow
              />
            </group>
            <group name='006' position={[2.624, -63.455, 11.542]}>
              <mesh
                castShadow
                geometry={nodes['006_islandMaterial_0'].geometry}
                material={materials.islandMaterial}
                name='006_islandMaterial_0'
                receiveShadow
              />
            </group>
            <group name='007' position={[-64.516, -22.797, 11.542]}>
              <mesh
                castShadow
                geometry={nodes['007_islandMaterial_0'].geometry}
                material={materials.islandMaterial}
                name='007_islandMaterial_0'
                receiveShadow
              />
            </group>
            <group name='Object_8' position={[0.303, -101.439, -22.736]}>
              <mesh
                castShadow
                geometry={nodes.Rotator_islandMaterial_0.geometry}
                material={materials.islandMaterial}
                name='Rotator_islandMaterial_0'
                receiveShadow
              />
            </group>
          </group>
        </group>
        <mesh
          castShadow
          geometry={nodes.Charkhofalak_islandMaterial_0.geometry}
          material={materials.islandMaterial}
          name='Charkhofalak_islandMaterial_0'
          position={[1.919, 0.138, -6.422]}
          receiveShadow
          scale={0.055}
        />
      </group>
    </group>
  )
}

useGLTF.preload(path)
