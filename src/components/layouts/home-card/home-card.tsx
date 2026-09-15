'use client'

import type { Route } from 'next'
import Link from 'next/link'
import { useCallback, useEffect } from 'react'
import { LuArrowBigRight } from 'react-icons/lu'
import { useUIStore } from '@/hooks'
import * as $ from './home-card.styled'

export interface HomeCardProps {
  text: string
  link?: Route
  linkText?: string
}

export function HomeCard({ text, link, linkText }: HomeCardProps) {
  const setSceneRotating = useUIStore((s) => s.setSceneRotating)

  const stop = () => setSceneRotating(false)
  const rotate = useCallback(() => setSceneRotating(true), [setSceneRotating])

  useEffect(() => rotate, [rotate])

  return (
    <$.Wrapper onPointerEnter={stop} onPointerLeave={rotate} onPointerOut={rotate} onPointerOver={stop}>
      <div className='relative'>
        <$.Text>{text}</$.Text>
        {link && linkText && (
          <Link href={link} passHref>
            <$.Link>
              <span>{linkText}</span>
              <$.Icon $as={LuArrowBigRight} />
            </$.Link>
          </Link>
        )}
      </div>
    </$.Wrapper>
  )
}
