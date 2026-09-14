'use client'

import type { SceneStage } from '@/types'
import { useUIStore } from '@/hooks'
import { HomeCard } from './home-card'

type HomeCardRendered = Record<NonNullable<SceneStage>, JSX.Element>

const cardRendered: HomeCardRendered = {
  '1': (
    <HomeCard text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim vitae lacus vitae porttitor. Proin nunc arcu, facilisis in nibh sit amet, molestie efficitur dui. Sed rhoncus vulputate neque a ultricies. Maecenas molestie libero id mi fermentum malesuada.' />
  ),
  '2': (
    <HomeCard
      link='/about'
      text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempora totam quisquam hic debitis illum ducimus facilis dolorum quod voluptate.'
    />
  ),
  '3': (
    <HomeCard
      link='/projects'
      text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat temporibus inventore id laborum maiores numquam perferendis, hic nemo, dolorem magnam, sapiente dolore quisquam consequatur sint.'
    />
  ),
  '4': (
    <HomeCard
      link='/contact'
      text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quidem temporibus ut accusantium fugit laborum tenetur porro maxime.'
    />
  ),
}

export function HomeCardRenderer() {
  const currentStage = useUIStore((s) => s.currentStage)
  return currentStage && cardRendered[currentStage]
}
