import { tellMeRain } from '@/utils'

export default function CurrentDetail({ minutely }: any) {
  return (
    <>
      <section>
        <p className='text-center'>{tellMeRain(minutely)}</p>
      </section>
    </>
  )
}
