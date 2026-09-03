import { useGLTF } from '@react-three/drei'

export type ModelName = 'car' | 'city' | 'robot'

useGLTF.setDecoderPath('/draco/')

export function useModelLoader(path: ModelName) {
  return useGLTF(getModelPath(path))
}

useModelLoader.preload = (path: ModelName) => {
  useGLTF.preload(getModelPath(path))
}

const getModelPath = (path: ModelName) => `/models/${path}.glb`
