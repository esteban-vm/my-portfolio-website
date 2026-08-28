import type { UIStore } from '@/stores'
import { create } from 'zustand'
import { createUIStore } from '@/stores'

export const useUIStore = create<UIStore>()(createUIStore)
