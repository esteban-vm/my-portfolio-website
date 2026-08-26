'use client'

import type * as THREE from 'three'
import type { GLTF } from 'three-stdlib'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useGraph } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import { SkeletonUtils } from 'three-stdlib'

interface GLTFAction extends THREE.AnimationClip {
  name: 'Take 001'
}

interface GLTFResult extends GLTF {
  nodes: {
    Object_7: THREE.SkinnedMesh
    Object_8: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    MatI_Ride_FengHuang_01a: THREE.MeshStandardMaterial
    MatI_Ride_FengHuang_01b: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

useGLTF.setDecoderPath('/draco/')

const path = '/models/phoenix.glb'

export function Phoenix(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null!)
  const { scene, animations } = useGLTF(path)
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['Take 001']?.play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          geometry={nodes.Object_7.geometry}
          material={materials.MatI_Ride_FengHuang_01a}
          name='Object_7'
          position={[-0.625, 0, -17.137]}
          rotation={[0, 0.053, 0]}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_8.geometry}
          material={materials.MatI_Ride_FengHuang_01b}
          name='Object_8'
          position={[-0.625, 0, -17.137]}
          rotation={[0, 0.053, 0]}
          skeleton={nodes.Object_8.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload(path)
