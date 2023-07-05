import {
  getDay,
  getTime,
  getWindDirectionDeg,
  speedUnit,
  tempValue,
} from '@/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { Separator } from '../ui/separator'
import Stat from '../atom/stat'
import { Icons } from '../ui/icons'
import { getWindDirection } from '@/utils/constants'

type DailyProps = {
  daily: {
    dt: number
    temp: {
      min: number
      max: number
      day: number
    }
    weather: {
      id: number
      description: string
      main: string
    }[]
    wind_speed: number
    wind_deg: number
    sunrise: number
    sunset: number
    rain?: number
    snow?: number
    pressure: number
    humidity: number
    clouds: number
    uvi: number
    pop: number
    dew_point: number
  }[]
  timezone: string
  units: boolean
}

const timeOptions = {
  timeStyle: 'short',
}

export default function Daily({ daily, timezone, units }: DailyProps) {
  return (
    <>
      <Accordion type='single' collapsible className='w-full'>
        {daily.map((day) => (
          <AccordionItem value={`${day.dt}`} key={day.dt}>
            <AccordionTrigger className='flex'>
              <p>{getDay({ weekday: 'long' }, timezone, day.dt)}</p>
              <div className='ml-auto flex basis-2/4 justify-between'>
                <span className='text-muted-foreground'>
                  <i className={`wi wi-owm-${day.weather[0].id}`}></i>
                  {day.weather[0].main == 'Rain' && (
                    <span className='ml-2 text-xs'>
                      {Math.round(day.pop * 100)}%
                    </span>
                  )}
                </span>
                <div className='flex basis-4/12 items-baseline justify-evenly'>
                  <span className='font-medium'>
                    {tempValue(day.temp.max, units)}
                  </span>
                  <span className='text-xs text-muted-foreground'>
                    {tempValue(day.temp.min, units)}
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className='mt-1 grid grid-cols-3 items-baseline text-xs text-muted-foreground'>
                <span>
                  {getTime({ dateStyle: 'medium' }, timezone, day.dt)}
                </span>
                <span className='flex items-center justify-center font-medium text-foreground'>
                  {tempValue(day.temp.min, units)}
                  <Icons.chevleft className='inline-block w-4 text-muted-foreground' />
                  {tempValue(day.temp.day, units)}
                  <Icons.chevright className='inline-block w-4 text-muted-foreground' />
                  {tempValue(day.temp.max, units)}
                </span>

                <span className='text-right capitalize'>
                  {day.weather[0].description}
                </span>
              </p>
              <Separator className='my-2' />
              <section className='my-4 flex flex-col gap-3 px-8 [&>div]:grid [&>div]:grid-cols-2 [&>div]:items-center [&>div]:gap-10'>
                <div>
                  <Stat
                    icon={<Icons.sunrise />}
                    header='Sunrise'
                    body={getTime(timeOptions, timezone, day.sunrise)}
                  />
                  <Stat
                    icon={<Icons.sunset />}
                    header='Sunset'
                    body={getTime(timeOptions, timezone, day.sunset)}
                  />
                </div>
                <div>
                  <Stat
                    icon={
                      day.snow ? (
                        <Icons.snow />
                      ) : day.rain ? (
                        <Icons.rain />
                      ) : (
                        <Icons.pressure />
                      )
                    }
                    header={day.snow ? 'Snow' : day.rain ? 'Rain' : 'Pressure'}
                    body={
                      day.snow
                        ? `${day.snow} mm`
                        : day.rain
                        ? `${day.rain} mm`
                        : `${day.pressure} hPa`
                    }
                  />
                  <Stat
                    icon={<Icons.wind />}
                    header='Wind Speed'
                    body={speedUnit(day.wind_speed, units)}
                  />
                </div>
                <div>
                  <Stat
                    icon={<Icons.clouds />}
                    header='Clouds'
                    body={`${day.clouds}%`}
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
                    body={`${day.humidity}%`}
                  />
                  <Stat
                    icon={<Icons.uvi />}
                    header='UV Index'
                    body={`${day.uvi}`}
                  />
                </div>
                <div>
                  <Stat
                    icon={
                      <Icons.windD
                        style={{
                          transform: `rotate(${getWindDirectionDeg(
                            day.wind_deg
                          )}deg)`,
                        }}
                      />
                    }
                    header='Wind Direction'
                    body={getWindDirection(day.wind_deg)}
                  />
                  <Stat
                    icon={<Icons.dew />}
                    header='Dew Point'
                    body={
                      <>
                        {tempValue(day.dew_point, units)}&deg;
                        {units ? 'F' : 'C'}
                      </>
                    }
                  />
                </div>
              </section>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
