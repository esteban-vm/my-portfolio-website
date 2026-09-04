import { PuffLoader } from 'react-spinners'

export default function SubPagesLoading() {
  return (
    <div className='absolute inset-0 z-30 flex items-center justify-center bg-black/75'>
      <PuffLoader color='#ff15bc' size='2rem' speedMultiplier={2} />
    </div>
  )
}
