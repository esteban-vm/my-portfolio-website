import { HomeCardRenderer } from '@/components/cards'
import { HomeScene } from '@/components/scenes'

export default function HomePage() {
  return (
    <div className='relative h-screen'>
      <HomeCardRenderer />
      <HomeScene />
    </div>
  )
}
