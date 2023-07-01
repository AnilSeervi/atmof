export interface weatherType {
  current: any
  daily: any
  hourly: any
  timezone: string
  lat: number
  lon: number
  minutely: any
}

export type city = {
  cityName: string
  fullCity: string
  timezone: string
}

export type location = {
  name: string
  country: string
}

export interface searchProps {
  refresh: () => void
  geo: () => void
  search: (
    e: React.FormEvent<HTMLFormElement>,
    inpRef: React.RefObject<HTMLInputElement>
  ) => void
}
