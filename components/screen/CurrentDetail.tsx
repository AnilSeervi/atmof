import {
  getTime,
  getWindDirectionDeg,
  lengthUnit,
  speedUnit,
  tellMeRain,
} from '@/utils'
import Stat from '../atom/stat'
import { getWindDirection } from '@/utils/constants'
import { Icons } from '../ui/icons'
import { Separator } from '../ui/separator'

type CurrentDetailProps = {
  minutely: {
    precipitation: number
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
    wind_deg: number
    sunrise: number
    sunset: number
    rain?: {
      '1h': number
    }
    snow?: {
      '1h': number
    }
    pressure: number
    humidity: number
    clouds: number
    uvi: number
    visibility: number
  }
  timezone: string
  units: boolean
  daily: {
    pop: number
    temp: {
      min: number
      max: number
    }
  }[]
}

const timeOptions = {
  timeStyle: 'short',
}

export default function CurrentDetail({
  minutely,
  current,
  timezone,
  units,
  daily,
}: CurrentDetailProps) {
  return (
    <>
      <p className='text-center'>{tellMeRain(minutely)}</p>
      <section className='my-4 flex flex-col gap-3 px-8 [&>div]:grid [&>div]:grid-cols-2 [&>div]:items-center [&>div]:gap-10'>
        <div>
          <Stat
            icon={<Icons.sunrise />}
            header='Sunrise'
            body={getTime(timeOptions, timezone, current.sunrise)}
          />
          <Stat
            icon={<Icons.sunset />}
            header='Sunset'
            body={getTime(timeOptions, timezone, current.sunset)}
          />
        </div>
        <div>
          <Stat
            icon={
              current.snow?.['1h'] ? (
                <Icons.snow />
              ) : current.rain?.['1h'] ? (
                <Icons.rain />
              ) : (
                <Icons.pressure />
              )
            }
            header={
              current.snow?.['1h']
                ? 'Snow'
                : current.rain?.['1h']
                ? 'Rain'
                : 'Pressure'
            }
            body={
              current.snow?.['1h']
                ? `${current.snow['1h']} mm`
                : current.rain?.['1h']
                ? `${current.rain['1h']} mm`
                : `${current.pressure} hPa`
            }
          />
          <Stat
            icon={<Icons.wind />}
            header='Wind Speed'
            body={speedUnit(current.wind_speed, units)}
          />
        </div>
        <div>
          <Stat
            icon={<Icons.clouds />}
            header='Clouds'
            body={`${current.clouds}%`}
          />
          <Stat
            icon={<Icons.precipitation />}
            header='Precipitation'
            body={`${Math.round(daily[0].pop * 100)}%`}
          />
        </div>
        <div>
          <Stat
            icon={<Icons.humidity />}
            header='Humidity'
            body={`${current.humidity}%`}
          />
          <Stat
            icon={<Icons.uvi />}
            header='UV Index'
            body={`${current.uvi}`}
          />
        </div>
        <div>
          <Stat
            icon={
              <Icons.windD
                style={{
                  transform: `rotate(${getWindDirectionDeg(
                    current.wind_deg
                  )}deg)`,
                }}
              />
            }
            header='Wind Direction'
            body={getWindDirection(current.wind_deg) as string}
          />
          <Stat
            icon={<Icons.visibility />}
            header='Visibility'
            body={lengthUnit(current.visibility, units)}
          />
        </div>
      </section>
      <Separator className='mb-3 mt-4' />
    </>
  )
}
