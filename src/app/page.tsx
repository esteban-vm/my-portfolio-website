import { HomeCardRenderer } from '@/components/layouts'
import { HomeScene } from '@/components/scenes'

export default function HomePage() {
  return (
    <div className='relative h-screen'>
      <HomeCardRenderer />
      <HomeScene />
    </div>
  )
}
