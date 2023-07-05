'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '../ui/button'
import { Params } from '@/app/page'

type Queries = {
  key: string
  value: string
}

export default function ToggleUnits({ units }: { units: Params['units'] }) {
  const router = useRouter()
  const query = useSearchParams()
  const params = query?.entries()
  const queries: Queries[] = []

  if (params)
    for (const [key, value] of params as any) {
      queries.push({ key, value })
    }

  const hasUnits = queries.some((query) => query.key === 'units')

  return (
    <Button
      variant='ghost'
      size='icon'
      className='text-base'
      onClick={() => {
        router.replace(
          `/?${
            hasUnits
              ? queries
                  .map((query) => {
                    if (query.key === 'units') {
                      return `units=${
                        units === 'imperial' ? 'metric' : 'imperial'
                      }`
                    }
                    return `${query.key}=${query.value}`
                  })
                  .join('&')
              : `units=${units === 'imperial' ? 'metric' : 'imperial'}`
          }`
        )
      }}
    >
      {units === 'imperial' ? 'F' : 'C'}&deg;
    </Button>
  )
}
