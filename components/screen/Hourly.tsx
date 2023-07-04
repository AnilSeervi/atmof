import { Separator } from '../ui/separator'
import HourlyStat, { HourlyStatProps } from '../atom/hourly-stat'

type HourlyProps = {
  hourly: HourlyStatProps['hour'][]
  timezone: string
  units: boolean
}

export default function Hourly({ hourly, timezone, units }: HourlyProps) {
  return (
    <>
      <div className='scrollbar-hide flex overflow-x-scroll'>
        {hourly.map((hour, index) => (
          <HourlyStat
            index={index}
            hour={hour}
            timezone={timezone}
            units={units}
            key={hour.dt}
          />
        ))}
      </div>
      <Separator className='my-3' />
    </>
  )
}
