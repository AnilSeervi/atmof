import type { location } from '@/utils/types'
import { Separator } from '../ui/separator'

type CityProps = {
  promise: Promise<location[]>
}

export default async function CurrentDetails({ promise }: CityProps) {
  const [location] = await promise
  return (
    <>
      <Separator className='mb-4 mt-1' />
      <h1 className='mb-1 text-xl lg:text-2xl'>
        {location?.name}, {location?.country}
      </h1>
    </>
  )
}
