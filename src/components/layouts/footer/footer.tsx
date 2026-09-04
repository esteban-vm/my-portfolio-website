'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useRef, useState, useTransition } from 'react'
import { TbLanguage, TbMusic, TbMusicOff } from 'react-icons/tb'
import { changeLanguage } from '@/actions'
import * as $ from './footer.styled'

export function Footer() {
  const locale = useLocale()
  const t = useTranslations('Footer')
  const [musicOn, setMusicOn] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null!)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    /*
      Music from #Uppbeat (free for Creators!):
      https://uppbeat.io/t/aavirall/cosmic-love
      License code: BZ8ZY38JMLXNVBSP
    */
    audioRef.current = new Audio('/audios/cosmic-love.mp3')
    audioRef.current.loop = true
    audioRef.current.preload = 'auto'
  }, [])

  useEffect(() => {
    audioRef.current.load()

    if (musicOn) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [musicOn])

  const onChangeLanguage = () => {
    startTransition(async () => {
      if (locale === 'en') {
        await changeLanguage('es')
      } else {
        await changeLanguage('en')
      }
    })
  }

  return (
    <$.Footer>
      <$.Button
        onClick={() => setMusicOn(!musicOn)}
        title={musicOn ? t('AudioButton.off') : t('AudioButton.on')}
        type='button'
      >
        {musicOn ? <TbMusicOff /> : <TbMusic />}
      </$.Button>
      <$.Button disabled={isPending} onClick={onChangeLanguage} title={t('LanguageButton')} type='button'>
        <TbLanguage />
        <$.LanguageBadge>{locale}</$.LanguageBadge>
      </$.Button>
    </$.Footer>
  )
}
