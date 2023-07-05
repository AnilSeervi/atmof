'use client'

import React, { useCallback, useRef } from 'react'
import { Button } from '../ui/button'
import { Icons } from '../ui/icons'
import { useRouter } from 'next/navigation'
import { LucideIcon } from 'lucide-react'

export default function GetGPS() {
  const router = useRouter()
  const icon = useRef<LucideIcon>(Icons.gps) // using a ref to change the icon so that the data comes in html from server

  const success = useCallback(
    async (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords

      localStorage.setItem('gps-granted', String(true))
      icon.current = Icons.gpsFixed
      router.replace(`/?lat=${latitude}&lon=${longitude}`)
      console.log('success')
    },
    [router]
  )

  function onError() {
    localStorage.removeItem('gps-granted')
    icon.current = Icons.gps
    console.log('error')
  }

  const getGeoLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        success,
        (_e) => {
          onError()
        },
        {
          enableHighAccuracy: true,
        }
      )
    }
  }, [success])

  return (
    <Button size='icon' variant='ghost' onClick={() => getGeoLocation()}>
      {React.createElement(icon.current)}
    </Button>
  )
}
