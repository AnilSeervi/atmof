import CommandMenu from '../atom/command-menu'
import ModeToggle from '../atom/toggle-menu'
import type { Params } from '@/app/page'
import GetGPS from '../atom/use-gps'
import { getTime } from '@/utils'
import ToggleUnits from '../atom/toggle-units'

type NavBarProps = {
  units: Params['units']
  timezone: string
}

function NavBar({ units, timezone }: NavBarProps) {
  return (
    <nav className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <GetGPS />
        <CommandMenu units={units === 'imperial'} />
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-sm lg:text-base'>
          {getTime(
            {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            },
            timezone,
            Date.now() / 1000
          )}
        </span>
        <span className='text-[10px] text-muted-foreground lg:text-xs'>
          {getTime(
            {
              hour: 'numeric',
              minute: 'numeric',
              timeZoneName: 'short',
            },
            timezone,
            Date.now() / 1000
          )}
        </span>
      </div>
      <div className='flex items-center gap-3'>
        <ModeToggle />
        <ToggleUnits units={units} />
      </div>
    </nav>
  )
}

export default NavBar
