import { cn } from '@/lib/utils'
import { getIfDay, tempValue } from '@/utils'
import { getWindCondition } from '@/utils/constants'
import { Separator } from '../ui/separator'
import { Icons } from '../ui/icons'

type CurrentProps = {
  daily: {
    temp: {
      min: number
      max: number
    }
  }[]
  current: {
    temp: number
    feels_like: number
    weather: {
      id: number
      description: string
      main: string
    }[]
    wind_speed: number
    sunrise: number
    sunset: number
  }
  units: boolean
}

export default function Current({ daily, current, units }: CurrentProps) {
  return (
    <>
      <section className='flex items-center justify-between'>
        <div>
          <h3 className='text-8xl font-medium leading-tight'>
            {tempValue(current.temp, units)}&deg;
          </h3>
          <p className='mb-7 flex items-center gap-1 text-xs'>
            <span className='flex items-center'>
              <Icons.chevdown className='inline h-5 w-5 p-0.5 text-muted-foreground' />{' '}
              {tempValue(daily[0].temp.min, units)}
              &deg;
            </span>
            <span className='flex items-center'>
              <Icons.chevup className='inline h-5 w-5 p-0.5 text-muted-foreground' />{' '}
              {tempValue(daily[0].temp.max, units)}
              &deg;
            </span>
          </p>
          <div>
            <p>
              {current.weather[0].main} &bull;{' '}
              {getWindCondition(current.wind_speed)?.condition}
            </p>
            <p className='mt-1 text-xs leading-normal text-muted-foreground'>
              Feels like {tempValue(current.feels_like, units)}&deg;
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <i
            className={cn(
              `wi wi-owm${
                !getIfDay(current.sunrise, current.sunset) ? '-night' : ''
              }-${current.weather[0].id}`,
              'm-4 text-8xl'
            )}
          ></i>
          <p className='text-xs capitalize text-muted-foreground'>
            {current.weather[0].description}
          </p>
        </div>
      </section>
      <Separator className='my-4' />
    </>
  )
}
