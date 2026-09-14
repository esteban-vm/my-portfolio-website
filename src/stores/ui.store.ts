import type { StateCreator } from 'zustand'
import type { SceneStage } from '@/types'

interface UIState {
  navbarOpen: boolean
  sceneRotating: boolean
  currentStage: SceneStage
}

interface UIActions {
  setNavbarOpen: (value: boolean) => void
  setSceneRotating: (value: boolean) => void
  setCurrentStage: (value: SceneStage) => void
}

export type UIStore = UIState & UIActions

export const createUIStore: StateCreator<UIStore> = (set) => {
  return {
    navbarOpen: false,
    sceneRotating: true,
    currentStage: 1,

    setNavbarOpen(value) {
      set({ navbarOpen: value })
    },

    setSceneRotating(value) {
      set({ sceneRotating: value })
    },

    setCurrentStage(value) {
      set({ currentStage: value })
    },
  }
}
