import { Button } from '@/components/ui/button'
import CommandMenu from '../atom/command-menu'
import { Icons } from '../ui/icons'
import ModeToggle from '../atom/toggle-menu'
import type { Params } from '@/app/page'

type NavBarProps = Pick<Params, 'units'>

function NavBar({ units }: NavBarProps) {
  return (
    <nav className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <Button size='icon' variant='ghost'>
          <Icons.gps />
        </Button>
        <CommandMenu />
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-sm lg:text-base'>Wed, July 6</span>
        <span className='text-[10px] text-neutral-500 lg:text-xs'>
          12:00 PM EDT
        </span>
      </div>
      <div className='flex items-center gap-3'>
        <ModeToggle />
        <Button variant='ghost' size='icon' className='text-base'>
          {units === 'imperial' ? 'F' : 'C'}&deg;
        </Button>
      </div>
    </nav>
  )
}

export default NavBar
