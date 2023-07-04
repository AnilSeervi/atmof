import City from '@/components/screen/City'
import Current from '@/components/screen/Current'
import CurrentDetail from '@/components/screen/CurrentDetail'
import Daily from '@/components/screen/Daily'
import Hourly from '@/components/screen/Hourly'
import NavBar from '@/components/screen/NavBar'
import { getLocation, getWeather } from '@/lib/api'
import { Suspense } from 'react'

export type Params = {
  lat?: `${number}`
  lon?: `${number}`
  city?: string
  country?: string
  units?: 'metric' | 'imperial'
}

type PageProps = {
  params?: any
  searchParams?: Params
}

export default async function Page(props: PageProps) {
  const { lat, lon, city, country, units } = props.searchParams as Params

  const weatherPromise = getWeather(lat, lon)
  const locationPromise = getLocation(lat, lon, city, country)
  const weather = await weatherPromise
  const timezone =
    weather?.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone

  return (
    <>
      <NavBar units={units} timezone={timezone} />
      {weather?.error ? (
        <div className='text-red-500'>
          Error: {weather?.error || 'Something went wrong'}
        </div>
      ) : (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <City promise={locationPromise} />
          </Suspense>
          <Current
            daily={weather.daily}
            current={weather.current}
            units={units === 'imperial'}
          />
          <CurrentDetail
            minutely={weather.minutely}
            current={weather.current}
            timezone={timezone}
            units={units === 'imperial'}
            daily={weather.daily}
          />
          <Hourly
            hourly={weather.hourly}
            timezone={timezone}
            units={units === 'imperial'}
          />
          <Daily
            timezone={timezone}
            daily={weather.daily}
            units={units === 'imperial'}
          />
          <pre className='text-xs'>{JSON.stringify(weather, null, 2)}</pre>
        </>
      )}
    </>
  )
}
