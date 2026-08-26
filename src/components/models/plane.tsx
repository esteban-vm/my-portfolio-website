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
    polySurface304_pasted__lambert2_0: THREE.Mesh
    polySurface305_pasted__lambert2_0: THREE.Mesh
    polySurface306_pasted__lambert2_0: THREE.Mesh
    polySurface406_Tooner_0: THREE.Mesh
    pCube1_Blur_effect_0: THREE.Mesh
    pCube4_Blur_effect_0: THREE.Mesh
    pCube7_lambert1_0: THREE.Mesh
    polySurface407_Tooner_0: THREE.Mesh
    polySurface173_pasted__lambert2_0: THREE.Mesh
    pCube6_lambert1_0: THREE.Mesh
    polySurface408_Tooner_0: THREE.Mesh
    polySurface174_pasted__lambert2_0: THREE.Mesh
    pCube8_lambert1_0: THREE.Mesh
    polySurface410_Tooner_0: THREE.Mesh
    polySurface165_pasted__lambert2_0: THREE.Mesh
    pCube5_lambert1_0: THREE.Mesh
    polySurface411_Tooner_0: THREE.Mesh
    polySurface161_pasted__lambert2_0: THREE.Mesh
    polySurface409_Tooner_0: THREE.Mesh
    polySurface182_pasted__lambert2_0: THREE.Mesh
    pCube10_lambert1_0: THREE.Mesh
    pCube9_lambert1_0: THREE.Mesh
    pCube11_lambert1_0: THREE.Mesh
    polySurface187_pasted__lambert2_0: THREE.Mesh
    polySurface188_pasted__lambert2_0: THREE.Mesh
    polySurface189_pasted__lambert2_0: THREE.Mesh
    polySurface190_pasted__lambert2_0: THREE.Mesh
    polySurface191_pasted__lambert2_0: THREE.Mesh
    polySurface192_pasted__lambert2_0: THREE.Mesh
    polySurface193_pasted__lambert2_0: THREE.Mesh
    polySurface194_pasted__lambert2_0: THREE.Mesh
    polySurface195_pasted__lambert2_0: THREE.Mesh
    polySurface196_pasted__lambert2_0: THREE.Mesh
    polySurface197_pasted__lambert2_0: THREE.Mesh
    polySurface198_pasted__lambert2_0: THREE.Mesh
    polySurface199_pasted__lambert2_0: THREE.Mesh
    polySurface200_pasted__lambert2_0: THREE.Mesh
    polySurface201_pasted__lambert2_0: THREE.Mesh
    polySurface202_pasted__lambert2_0: THREE.Mesh
    polySurface203_pasted__lambert2_0: THREE.Mesh
    polySurface204_pasted__lambert2_0: THREE.Mesh
    polySurface205_pasted__lambert2_0: THREE.Mesh
    polySurface206_pasted__lambert2_0: THREE.Mesh
    polySurface207_pasted__lambert2_0: THREE.Mesh
    polySurface208_pasted__lambert2_0: THREE.Mesh
    polySurface209_pasted__lambert2_0: THREE.Mesh
    polySurface210_pasted__lambert2_0: THREE.Mesh
    polySurface211_pasted__lambert2_0: THREE.Mesh
    polySurface212_pasted__lambert2_0: THREE.Mesh
    polySurface213_pasted__lambert2_0: THREE.Mesh
    polySurface214_pasted__lambert2_0: THREE.Mesh
    polySurface215_pasted__lambert2_0: THREE.Mesh
    polySurface216_pasted__lambert2_0: THREE.Mesh
    polySurface217_pasted__lambert2_0: THREE.Mesh
    polySurface218_pasted__lambert2_0: THREE.Mesh
    polySurface219_pasted__lambert2_0: THREE.Mesh
    polySurface220_pasted__lambert2_0: THREE.Mesh
    polySurface221_pasted__lambert2_0: THREE.Mesh
    polySurface222_pasted__lambert2_0: THREE.Mesh
    polySurface223_pasted__lambert2_0: THREE.Mesh
    polySurface224_pasted__lambert2_0: THREE.Mesh
    polySurface225_pasted__lambert2_0: THREE.Mesh
    polySurface226_pasted__lambert2_0: THREE.Mesh
    polySurface227_pasted__lambert2_0: THREE.Mesh
    polySurface228_pasted__lambert2_0: THREE.Mesh
    polySurface229_pasted__lambert2_0: THREE.Mesh
    polySurface230_pasted__lambert2_0: THREE.Mesh
    polySurface231_pasted__lambert2_0: THREE.Mesh
    polySurface232_pasted__lambert2_0: THREE.Mesh
    polySurface233_pasted__lambert2_0: THREE.Mesh
    polySurface234_pasted__lambert2_0: THREE.Mesh
    polySurface235_pasted__lambert2_0: THREE.Mesh
    polySurface236_pasted__lambert2_0: THREE.Mesh
    polySurface237_pasted__lambert2_0: THREE.Mesh
    polySurface238_pasted__lambert2_0: THREE.Mesh
    polySurface239_pasted__lambert2_0: THREE.Mesh
    polySurface240_pasted__lambert2_0: THREE.Mesh
    polySurface241_pasted__lambert2_0: THREE.Mesh
    polySurface242_pasted__lambert2_0: THREE.Mesh
    polySurface243_pasted__lambert2_0: THREE.Mesh
    polySurface244_pasted__lambert2_0: THREE.Mesh
    polySurface245_pasted__lambert2_0: THREE.Mesh
    polySurface246_pasted__lambert2_0: THREE.Mesh
    polySurface247_pasted__lambert2_0: THREE.Mesh
    polySurface248_pasted__lambert2_0: THREE.Mesh
    polySurface249_pasted__lambert2_0: THREE.Mesh
    polySurface250_pasted__lambert2_0: THREE.Mesh
    polySurface251_pasted__lambert2_0: THREE.Mesh
    polySurface252_pasted__lambert2_0: THREE.Mesh
    polySurface253_pasted__lambert2_0: THREE.Mesh
    polySurface254_pasted__lambert2_0: THREE.Mesh
    polySurface255_pasted__lambert2_0: THREE.Mesh
    polySurface256_pasted__lambert2_0: THREE.Mesh
    polySurface257_pasted__lambert2_0: THREE.Mesh
    polySurface258_pasted__lambert2_0: THREE.Mesh
    polySurface259_pasted__lambert2_0: THREE.Mesh
    polySurface260_pasted__lambert2_0: THREE.Mesh
    polySurface261_pasted__lambert2_0: THREE.Mesh
    polySurface262_pasted__lambert2_0: THREE.Mesh
    polySurface263_pasted__lambert2_0: THREE.Mesh
    polySurface264_pasted__lambert2_0: THREE.Mesh
    polySurface265_pasted__lambert2_0: THREE.Mesh
    polySurface266_pasted__lambert2_0: THREE.Mesh
    polySurface267_pasted__lambert2_0: THREE.Mesh
    polySurface268_pasted__lambert2_0: THREE.Mesh
    polySurface269_pasted__lambert2_0: THREE.Mesh
    polySurface270_pasted__lambert2_0: THREE.Mesh
    polySurface271_pasted__lambert2_0: THREE.Mesh
    polySurface272_pasted__lambert2_0: THREE.Mesh
    polySurface273_pasted__lambert2_0: THREE.Mesh
    polySurface274_pasted__lambert2_0: THREE.Mesh
    polySurface275_pasted__lambert2_0: THREE.Mesh
    polySurface276_pasted__lambert2_0: THREE.Mesh
    polySurface277_pasted__lambert2_0: THREE.Mesh
    polySurface278_pasted__lambert2_0: THREE.Mesh
    polySurface279_pasted__lambert2_0: THREE.Mesh
    polySurface280_pasted__lambert2_0: THREE.Mesh
    polySurface281_pasted__lambert2_0: THREE.Mesh
    polySurface282_pasted__lambert2_0: THREE.Mesh
    polySurface283_pasted__lambert2_0: THREE.Mesh
    polySurface284_pasted__lambert2_0: THREE.Mesh
    polySurface285_pasted__lambert2_0: THREE.Mesh
    polySurface286_pasted__lambert2_0: THREE.Mesh
    polySurface287_pasted__lambert2_0: THREE.Mesh
    polySurface288_pasted__lambert2_0: THREE.Mesh
    polySurface289_pasted__lambert2_0: THREE.Mesh
    polySurface290_pasted__lambert2_0: THREE.Mesh
    polySurface291_pasted__lambert2_0: THREE.Mesh
    polySurface292_pasted__lambert2_0: THREE.Mesh
    polySurface293_pasted__lambert2_0: THREE.Mesh
    polySurface294_pasted__lambert2_0: THREE.Mesh
    polySurface295_pasted__lambert2_0: THREE.Mesh
    polySurface296_pasted__lambert2_0: THREE.Mesh
    polySurface297_pasted__lambert2_0: THREE.Mesh
    polySurface298_pasted__lambert2_0: THREE.Mesh
    polySurface299_pasted__lambert2_0: THREE.Mesh
    polySurface300_pasted__lambert2_0: THREE.Mesh
    polySurface301_pasted__lambert2_0: THREE.Mesh
    polySurface302_pasted__lambert2_0: THREE.Mesh
    polySurface303_pasted__lambert2_0: THREE.Mesh
    polySurface308_Tooner_0: THREE.Mesh
    pCube12_lambert1_0_1: THREE.Mesh
    pCube12_lambert1_0_2: THREE.Mesh
    pCube12_lambert1_0_3: THREE.Mesh
    pCube12_lambert1_0_4: THREE.Mesh
    pCube12_lambert1_0_5: THREE.Mesh
    pCube12_lambert1_0_6: THREE.Mesh
    pCube12_lambert1_0_7: THREE.Mesh
    pCube12_lambert1_0_8: THREE.Mesh
    pCube12_lambert1_0_9: THREE.Mesh
    pCube12_lambert1_0: THREE.Mesh
  }
  materials: {
    pasted__lambert2: THREE.MeshStandardMaterial
    Tooner: THREE.MeshStandardMaterial
    Blur_effect: THREE.MeshStandardMaterial
    lambert1: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

useGLTF.setDecoderPath('/draco/')

const path = '/models/plane.glb'

export function Plane(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials, animations } = useGLTF(path) as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['Take 001']?.play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='RootNode' scale={0.042}>
          <group name='polySurface172' position={[-0.825, 5.808, -1.092]} rotation={[0.013, 0.037, -0.065]}>
            <group name='polySurface171' position={[0, -0.57, 14.211]} rotation={[0, 0, -2.64]}>
              <group name='polySurface304' position={[0, -3.301, -12.838]}>
                <mesh
                  castShadow
                  geometry={nodes.polySurface304_pasted__lambert2_0.geometry}
                  material={materials.pasted__lambert2}
                  name='polySurface304_pasted__lambert2_0'
                  receiveShadow
                />
              </group>
              <group name='polySurface305' position={[0, -3.301, -12.838]}>
                <mesh
                  castShadow
                  geometry={nodes.polySurface305_pasted__lambert2_0.geometry}
                  material={materials.pasted__lambert2}
                  name='polySurface305_pasted__lambert2_0'
                  receiveShadow
                />
              </group>
              <group name='polySurface306' position={[0, -3.301, -12.838]}>
                <mesh
                  castShadow
                  geometry={nodes.polySurface306_pasted__lambert2_0.geometry}
                  material={materials.pasted__lambert2}
                  name='polySurface306_pasted__lambert2_0'
                  receiveShadow
                />
              </group>
              <group name='polySurface406' position={[0, 0.007, -0.608]}>
                <mesh
                  castShadow
                  geometry={nodes.polySurface406_Tooner_0.geometry}
                  material={materials.Tooner}
                  name='polySurface406_Tooner_0'
                  receiveShadow
                />
              </group>
            </group>
            <group name='pCube1' position={[0, -0.57, 13.286]} rotation={[0, 0, 2.323]} scale={14.594}>
              <mesh
                castShadow
                geometry={nodes.pCube1_Blur_effect_0.geometry}
                material={materials.Blur_effect}
                name='pCube1_Blur_effect_0'
                receiveShadow
              />
            </group>
            <group name='pCube4' position={[0, -0.57, 13.066]} rotation={[0, 0, 2.242]} scale={9.321}>
              <mesh
                castShadow
                geometry={nodes.pCube4_Blur_effect_0.geometry}
                material={materials.Blur_effect}
                name='pCube4_Blur_effect_0'
                receiveShadow
              />
            </group>
            <group name='polySurface173' position={[-11.646, -1.358, 1.225]} rotation={[-0.073, 0, 0]}>
              <group name='pCube7' position={[-1.079, -0.014, -2.095]}>
                <mesh
                  castShadow
                  geometry={nodes.pCube7_lambert1_0.geometry}
                  material={materials.lambert1}
                  name='pCube7_lambert1_0'
                  receiveShadow
                />
              </group>
              <group name='polySurface407' position={[11.646, -2.423, 0.381]} rotation={[-0.061, 0, 0]}>
                <mesh
                  castShadow
                  geometry={nodes.polySurface407_Tooner_0.geometry}
                  material={materials.Tooner}
                  name='polySurface407_Tooner_0'
                  receiveShadow
                />
              </group>
              <mesh
                castShadow
                geometry={nodes.polySurface173_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface173_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface174' position={[11.646, -1.396, 1.146]} rotation={[0.083, 0, 0]}>
              <group name='pCube6' position={[1.373, 0.052, -2.018]} scale={[1, 1, 1.044]}>
                <mesh
                  castShadow
                  geometry={nodes.pCube6_lambert1_0.geometry}
                  material={materials.lambert1}
                  name='pCube6_lambert1_0'
                  receiveShadow
                />
              </group>
              <group name='polySurface408' position={[-11.646, -2.384, 0.459]} rotation={[-0.061, 0, 0]}>
                <mesh
                  castShadow
                  geometry={nodes.polySurface408_Tooner_0.geometry}
                  material={materials.Tooner}
                  name='polySurface408_Tooner_0'
                  receiveShadow
                />
              </group>
              <mesh
                castShadow
                geometry={nodes.polySurface174_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface174_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface182' position={[-0.02, 3.621, 4.332]} rotation={[-0.107, 0, 0]}>
              <group name='polySurface165' position={[-12.341, 1.3, -3.479]} rotation={[3.134, 0, 0]} scale={-1}>
                <group name='pCube8' position={[1.695, -0.021, -1.87]}>
                  <mesh
                    castShadow
                    geometry={nodes.pCube8_lambert1_0.geometry}
                    material={materials.lambert1}
                    name='pCube8_lambert1_0'
                    receiveShadow
                  />
                </group>
                <group name='polySurface410' position={[-12.364, -8.487, 0.827]} rotation={[3.081, 0, 0]} scale={-1}>
                  <mesh
                    castShadow
                    geometry={nodes.polySurface410_Tooner_0.geometry}
                    material={materials.Tooner}
                    name='polySurface410_Tooner_0'
                    receiveShadow
                  />
                </group>
                <mesh
                  castShadow
                  geometry={nodes.polySurface165_pasted__lambert2_0.geometry}
                  material={materials.pasted__lambert2}
                  name='polySurface165_pasted__lambert2_0'
                  receiveShadow
                />
              </group>
              <group name='polySurface161' position={[12.388, 1.3, -3.44]} rotation={[0.175, 0, 0]}>
                <group name='pCube5' position={[1.802, 0.082, -1.876]} scale={[1, 1, 0.872]}>
                  <mesh
                    castShadow
                    geometry={nodes.pCube5_lambert1_0.geometry}
                    material={materials.lambert1}
                    name='pCube5_lambert1_0'
                    receiveShadow
                  />
                </group>
                <group name='polySurface411' position={[-12.364, -8.489, 0.788]} rotation={[-0.061, 0, 0]}>
                  <mesh
                    castShadow
                    geometry={nodes.polySurface411_Tooner_0.geometry}
                    material={materials.Tooner}
                    name='polySurface411_Tooner_0'
                    receiveShadow
                  />
                </group>
                <mesh
                  castShadow
                  geometry={nodes.polySurface161_pasted__lambert2_0.geometry}
                  material={materials.pasted__lambert2}
                  name='polySurface161_pasted__lambert2_0'
                  receiveShadow
                />
              </group>
              <group name='polySurface409' position={[0.023, -7.222, -3.17]}>
                <mesh
                  castShadow
                  geometry={nodes.polySurface409_Tooner_0.geometry}
                  material={materials.Tooner}
                  name='polySurface409_Tooner_0'
                  receiveShadow
                />
              </group>
              <mesh
                castShadow
                geometry={nodes.polySurface182_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface182_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='pCube10' position={[-6.25, 0.64, -12.783]}>
              <mesh
                castShadow
                geometry={nodes.pCube10_lambert1_0.geometry}
                material={materials.lambert1}
                name='pCube10_lambert1_0'
                receiveShadow
              />
            </group>
            <group name='pCube9' position={[6.603, 0.66, -12.573]}>
              <mesh
                castShadow
                geometry={nodes.pCube9_lambert1_0.geometry}
                material={materials.lambert1}
                name='pCube9_lambert1_0'
                receiveShadow
              />
            </group>
            <group name='pCube11' position={[0.03, 5.295, -12.12]}>
              <mesh
                castShadow
                geometry={nodes.pCube11_lambert1_0.geometry}
                material={materials.lambert1}
                name='pCube11_lambert1_0'
                receiveShadow
              />
            </group>
            <group name='polySurface187' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface187_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface187_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface188' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface188_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface188_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface189' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface189_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface189_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface190' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface190_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface190_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface191' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface191_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface191_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface192' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface192_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface192_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface193' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface193_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface193_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface194' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface194_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface194_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface195' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface195_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface195_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface196' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface196_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface196_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface197' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface197_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface197_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface198' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface198_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface198_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface199' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface199_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface199_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface200' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface200_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface200_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface201' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface201_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface201_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface202' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface202_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface202_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface203' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface203_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface203_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface204' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface204_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface204_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface205' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface205_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface205_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface206' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface206_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface206_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface207' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface207_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface207_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface208' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface208_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface208_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface209' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface209_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface209_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface210' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface210_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface210_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface211' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface211_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface211_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface212' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface212_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface212_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface213' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface213_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface213_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface214' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface214_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface214_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface215' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface215_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface215_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface216' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface216_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface216_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface217' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface217_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface217_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface218' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface218_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface218_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface219' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface219_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface219_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface220' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface220_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface220_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface221' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface221_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface221_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface222' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface222_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface222_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface223' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface223_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface223_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface224' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface224_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface224_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface225' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface225_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface225_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface226' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface226_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface226_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface227' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface227_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface227_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface228' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface228_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface228_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface229' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface229_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface229_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface230' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface230_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface230_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface231' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface231_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface231_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface232' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface232_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface232_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface233' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface233_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface233_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface234' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface234_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface234_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface235' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface235_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface235_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface236' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface236_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface236_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface237' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface237_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface237_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface238' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface238_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface238_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface239' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface239_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface239_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface240' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface240_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface240_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface241' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface241_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface241_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface242' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface242_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface242_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface243' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface243_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface243_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface244' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface244_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface244_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface245' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface245_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface245_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface246' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface246_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface246_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface247' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface247_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface247_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface248' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface248_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface248_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface249' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface249_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface249_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface250' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface250_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface250_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface251' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface251_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface251_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface252' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface252_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface252_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface253' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface253_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface253_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface254' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface254_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface254_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface255' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface255_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface255_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface256' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface256_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface256_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface257' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface257_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface257_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface258' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface258_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface258_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface259' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface259_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface259_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface260' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface260_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface260_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface261' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface261_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface261_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface262' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface262_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface262_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface263' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface263_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface263_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface264' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface264_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface264_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface265' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface265_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface265_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface266' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface266_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface266_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface267' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface267_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface267_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface268' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface268_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface268_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface269' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface269_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface269_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface270' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface270_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface270_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface271' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface271_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface271_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface272' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface272_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface272_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface273' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface273_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface273_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface274' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface274_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface274_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface275' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface275_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface275_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface276' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface276_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface276_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface277' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface277_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface277_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface278' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface278_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface278_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface279' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface279_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface279_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface280' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface280_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface280_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface281' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface281_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface281_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface282' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface282_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface282_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface283' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface283_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface283_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface284' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface284_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface284_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface285' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface285_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface285_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface286' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface286_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface286_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface287' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface287_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface287_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface288' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface288_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface288_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface289' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface289_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface289_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface290' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface290_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface290_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface291' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface291_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface291_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface292' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface292_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface292_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface293' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface293_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface293_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface294' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface294_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface294_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface295' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface295_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface295_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface296' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface296_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface296_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface297' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface297_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface297_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface298' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface298_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface298_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface299' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface299_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface299_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface300' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface300_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface300_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface301' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface301_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface301_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface302' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface302_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface302_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface303' position={[0, -3.871, 1.373]}>
              <mesh
                castShadow
                geometry={nodes.polySurface303_pasted__lambert2_0.geometry}
                material={materials.pasted__lambert2}
                name='polySurface303_pasted__lambert2_0'
                receiveShadow
              />
            </group>
            <group name='polySurface308' position={[0, 0.093, 0.04]}>
              <mesh
                castShadow
                geometry={nodes.polySurface308_Tooner_0.geometry}
                material={materials.Tooner}
                name='polySurface308_Tooner_0'
                receiveShadow
              />
            </group>
          </group>
        </group>
        <group name='nurbsCircle1' position={[0, 0, -0.176]} scale={0.042}>
          <group name='pCube12' position={[27.469, 9.737, -42.131]} scale={0}>
            <mesh
              castShadow
              geometry={nodes.pCube12_lambert1_0_1.geometry}
              material={materials.lambert1}
              name='pCube12_lambert1_0_1'
              receiveShadow
            />
          </group>
        </group>
        <group name='nurbsCircle2' position={[-0.368, -0.221, 0.461]} scale={0.042}>
          <group name='pCube12_1' position={[27.469, 9.737, -41.475]} scale={0.014}>
            <mesh
              castShadow
              geometry={nodes.pCube12_lambert1_0_2.geometry}
              material={materials.lambert1}
              name='pCube12_lambert1_0_2'
              receiveShadow
            />
          </group>
        </group>
        <group name='nurbsCircle4' position={[-0.802, 0.232, -0.019]} scale={0.042}>
          <group name='pCube12_2' position={[27.469, 9.737, 41.906]} scale={0}>
            <mesh
              castShadow
              geometry={nodes.pCube12_lambert1_0_3.geometry}
              material={materials.lambert1}
              name='pCube12_lambert1_0_3'
              receiveShadow
            />
          </group>
        </group>
        <group name='nurbsCircle5' position={[-0.614, -0.698, -0.259]} scale={0.042}>
          <group name='pCube12_3' position={[27.469, 9.737, 36.189]} scale={0}>
            <mesh
              castShadow
              geometry={nodes.pCube12_lambert1_0_4.geometry}
              material={materials.lambert1}
              name='pCube12_lambert1_0_4'
              receiveShadow
            />
          </group>
        </group>
        <group name='nurbsCircle6' position={[-1.021, -0.743, 0.08]} scale={0.042}>
          <group name='pCube12_4' position={[27.469, 9.737, 11.379]} scale={0.889}>
            <mesh
              castShadow
              geometry={nodes.pCube12_lambert1_0_5.geometry}
              material={materials.lambert1}
              name='pCube12_lambert1_0_5'
              receiveShadow
            />
          </group>
        </group>
        <group name='nurbsCircle8' position={[-1.683, 0.439, -0.555]} scale={0.042}>
          <group name='pCube12_5' position={[27.469, 9.737, -10.461]} scale={0}>
            <mesh
              castShadow
              geometry={nodes.pCube12_lambert1_0_6.geometry}
              material={materials.lambert1}
              name='pCube12_lambert1_0_6'
              receiveShadow
            />
          </group>
        </group>
        <group name='nurbsCircle9' position={[-2.023, 0.104, 0.103]} scale={0.042}>
          <group name='pCube12_6' position={[27.469, 9.737, 36.189]} scale={0}>
            <mesh
              castShadow
              geometry={nodes.pCube12_lambert1_0_7.geometry}
              material={materials.lambert1}
              name='pCube12_lambert1_0_7'
              receiveShadow
            />
          </group>
        </group>
        <group name='nurbsCircle10' position={[-1.603, -0.457, -0.259]} scale={0.042}>
          <group name='pCube12_7' position={[27.469, 9.737, 36.189]} scale={0}>
            <mesh
              castShadow
              geometry={nodes.pCube12_lambert1_0_8.geometry}
              material={materials.lambert1}
              name='pCube12_lambert1_0_8'
              receiveShadow
            />
          </group>
        </group>
        <group name='nurbsCircle11' position={[-1.934, -0.251, -0.712]} scale={0.042}>
          <group name='pCube12_8' position={[27.469, 9.737, -22.818]} scale={0.372}>
            <mesh
              castShadow
              geometry={nodes.pCube12_lambert1_0_9.geometry}
              material={materials.lambert1}
              name='pCube12_lambert1_0_9'
              receiveShadow
            />
          </group>
        </group>
        <mesh
          castShadow
          geometry={nodes.pCube12_lambert1_0.geometry}
          material={materials.lambert1}
          name='pCube12_lambert1_0'
          position={[0.842, 0.756, 0.38]}
          receiveShadow
          scale={0}
        />
      </group>
    </group>
  )
}

useGLTF.preload(path)
