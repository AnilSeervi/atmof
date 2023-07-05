import { londonGeo } from '@/utils/constants'

export async function getLocation(
  lat: string | undefined,
  lon: string | undefined,
  name: string | undefined,
  country: string | undefined
): Promise<{ name: string; country: string }[]> {
  if (name && country) {
    return [
      {
        name,
        country,
      },
    ]
  }

  if (lat && lon) {
    const reverseGeoURL = `${process.env.REVERSE_GEO_URL}&lat=${lat}&lon=${lon}`
    try {
      const res = await fetch(reverseGeoURL, {
        cache: 'force-cache',
      })

      if (!res.ok) {
        const mes = await res.json()
        throw new Error(mes.message)
      }

      return res.json()
    } catch (e: any) {
      console.log(e)
      return [{ name: 'London', country: 'GB' }]
    }
  }

  return [
    {
      name: 'London',
      country: 'GB',
    },
  ]
}

export async function getWeather(
  lat: string | undefined,
  lon: string | undefined
) {
  const latitude = lat || londonGeo.lat
  const longitude = lon || londonGeo.lon
  const weatherDataURL = `${process.env.ONECALL_URL}&lat=${latitude}&lon=${longitude}`
  try {
    const res = await fetch(weatherDataURL, {
      next: {
        revalidate: 60 * 15,
      },
    })

    if (!res.ok) {
      const mes = await res.json()
      throw new Error(mes.message)
    }

    return res.json()
  } catch (e: any) {
    return { error: e?.message || 'Something went wrong' }
  }
}

export async function getSearch(q: string) {
  const searchURL = `${process.env.SEARCH_URL}&q=${q}`
  try {
    const res = await fetch(searchURL, {
      next: {
        revalidate: 60 * 2,
      },
    })

    if (!res.ok) {
      const mes = await res.json()
      throw new Error(mes.message)
    }

    return res.json()
  } catch (e: any) {
    return { error: e?.message || 'Something went wrong' }
  }
}
