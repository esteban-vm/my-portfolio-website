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
    Cylinder001_M_Suelo_0: THREE.Mesh
    Object_7: THREE.SkinnedMesh
    Object_8: THREE.SkinnedMesh
    Object_9: THREE.SkinnedMesh
    Object_10: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    M_Suelo: THREE.MeshStandardMaterial
    M_Metal1: THREE.MeshStandardMaterial
    M_Pantalla1: THREE.MeshStandardMaterial
    M_Pantalla2: THREE.MeshStandardMaterial
    M_Rueda: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

useGLTF.setDecoderPath('/draco/')

const path = '/models/cute-home-robot.glb'

export function RobotModel(props: JSX.IntrinsicElements['group']) {
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
        <mesh
          castShadow
          geometry={nodes.Cylinder001_M_Suelo_0.geometry}
          material={materials.M_Suelo}
          name='Cylinder001_M_Suelo_0'
          position={[-0.007, 0, -0.035]}
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.057}
        />
        <skinnedMesh
          geometry={nodes.Object_7.geometry}
          material={materials.M_Metal1}
          name='Object_7'
          scale={0.057}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_8.geometry}
          material={materials.M_Pantalla1}
          name='Object_8'
          scale={0.057}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_9.geometry}
          material={materials.M_Pantalla2}
          name='Object_9'
          scale={0.057}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_10.geometry}
          material={materials.M_Rueda}
          name='Object_10'
          scale={0.057}
          skeleton={nodes.Object_10.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload(path)
