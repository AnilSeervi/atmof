import NavBar from '@/components/screen/NavBar'

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

export default function Page(props: PageProps) {
  const { lat, lon, city, country, units } = props.searchParams as Params

  return (
    <>
      <NavBar units={units} />
    </>
  )
}
