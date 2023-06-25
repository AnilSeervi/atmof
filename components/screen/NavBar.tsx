import { Button } from '@/components/ui/button'
import CommandMenu from '../atom/command-menu'
import { Icons } from '../ui/icons'
import ModeToggle from '../atom/toggle-menu'

function NavBar() {
  return (
    <nav className="flex items-center justify-between">
      <Button size="icon" variant="ghost">
        <Icons.gps />
      </Button>
      <div className="flex items-center gap-2">
        <CommandMenu />
        <ModeToggle />
        <Button variant="ghost" size="icon" className="text-base">
          F&deg;
        </Button>
      </div>
    </nav>
  )
}

export default NavBar
