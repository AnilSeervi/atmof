import { cn } from '@/lib/utils'
import { getTime, tempValue } from '@/utils'

export type HourlyStatProps = {
  hour: {
    dt: number
    temp: number
    weather: {
      id: number
      icon: string
    }[]
  }
  timezone: string
  units: boolean
  index: number
}

export default function HourlyStat({
  hour,
  timezone,
  units,
  index,
}: HourlyStatProps) {
  return (
    <>
      <div
        className={cn(
          'inline-flex shrink-0 flex-col items-center justify-center gap-2 px-3 py-1.5',
          index !== 0 && 'text-muted-foreground'
        )}
        key={hour.dt}
      >
        <span className='text-xs'>
          {getTime({ hour: '2-digit', hourCycle: 'h12' }, timezone, hour.dt)} /{' '}
          {getTime({ day: '2-digit' }, timezone, hour.dt)}
        </span>
        <i
          className={cn(
            `wi wi-fw wi-owm${
              hour.weather[0].icon.includes('n') ? '-night' : ''
            }-${hour.weather[0].id}`,
            'text-2xl'
          )}
        ></i>
        <span className='font-medium'>{tempValue(hour.temp, units)}&deg;</span>
      </div>
    </>
  )
}
