import type { StateCreator } from 'zustand'

interface UIState {
  navbarOpen: boolean
}

interface UIActions {
  setNavbarOpen: (open: boolean) => void
}

export type UIStore = UIState & UIActions

export const createUIStore: StateCreator<UIStore> = (set) => {
  return {
    navbarOpen: false,

    setNavbarOpen(open) {
      set({ navbarOpen: open })
    },
  }
}
