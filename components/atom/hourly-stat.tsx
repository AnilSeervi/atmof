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
}

export default function HourlyStat({ hour, timezone, units }: HourlyStatProps) {
  return (
    <>
      <div
        className='inline-flex shrink-0 flex-col items-center justify-center gap-2 px-3 py-1.5'
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
            }-${hour.weather[0].id} hourly-icon`,
            'text-2xl'
          )}
        ></i>
        <span className='font-medium'>{tempValue(hour.temp, units)}&deg;</span>
      </div>
    </>
  )
}
