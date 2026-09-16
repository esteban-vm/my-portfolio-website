'use client'

import type { SceneStage } from '@/types'
import { useTranslations } from 'next-intl'
import { useUIStore } from '@/hooks'
import { HomeCard } from './home-card'

type HomeCardMap = Record<NonNullable<SceneStage>, JSX.Element>

export function HomeCardRenderer() {
  const t = useTranslations('HomeCards')
  const currentStage = useUIStore((s) => s.currentStage)

  const homeCardMap: HomeCardMap = {
    '1': <HomeCard text={t('1.text')} />,
    '2': <HomeCard link='/about' linkText={t('2.linkText')} text={t('2.text')} />,
    '3': <HomeCard link='/projects' linkText={t('3.linkText')} text={t('3.text')} />,
    '4': <HomeCard link='/contact' linkText={t('4.linkText')} text={t('4.text')} />,
  }

  return currentStage && homeCardMap[currentStage]
}
