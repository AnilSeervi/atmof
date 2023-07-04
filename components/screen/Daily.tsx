import { getDay, tempValue } from '@/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

export default function Daily({ daily, timezone, units }: any) {
  return (
    <>
      <Accordion type='single' collapsible className='w-full'>
        {daily.map((day: any) => (
          <AccordionItem value={day.dt}>
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
            <AccordionContent>data</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
