import Link from 'next/link'
import { LuArrowBigRight } from 'react-icons/lu'
import * as $ from './card.styled'

export function Card() {
  return (
    <$.Card>
      <div className='relative'>
        <$.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim vitae lacus vitae porttitor. Proin
          nunc arcu, facilisis in nibh sit amet, molestie efficitur dui. Sed rhoncus vulputate neque a ultricies.
          Maecenas molestie libero id mi fermentum malesuada.
        </$.Text>
        <Link href='/' passHref>
          <$.Link>
            <span>Ver más</span>
            <$.Icon $as={LuArrowBigRight} />
          </$.Link>
        </Link>
      </div>
    </$.Card>
  )
}
