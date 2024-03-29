/* eslint-disable @next/next/no-img-element */
'use client'

import { Params } from '@/app/page'
import useDebounce from '@/lib/useDebounce'
import { cn } from '@/lib/utils'
import { tempValue } from '@/utils'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '../ui/command'
import { Icons } from '../ui/icons'
import Loader from '../ui/loader'

type SearchResults = {
  id: number
  name: string
  sys: {
    country: string
  }
  main: {
    temp: number
    feels_like: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  coord: {
    lon: number
    lat: number
  }
}

function CommandMenu({ units }: { units: Params['units'] }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const { setTheme } = useTheme()
  const [query, setQuery] = useState({ value: '', loading: false })
  const [searchResults, setSearchResults] = useState<SearchResults[]>([])

  useDebounce(
    () => {
      if (query.value.trim().length > 2) {
        fetch('/api/find?q=' + query.value)
          .then((res) => res.json())
          .then((data) => {
            setSearchResults(data)
          })
          .finally(() => {
            setQuery((query) => ({ ...query, loading: false }))
          })
      }
    },
    200,
    [query.value]
  )
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false)
    command()
    setQuery({ value: '', loading: false })
  }, [])

  return (
    <>
      <Button size='icon' variant='ghost' onClick={() => setOpen(true)}>
        <Icons.search />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder='Search a city(eg. London)'
          onValueChange={(e) => {
            setSearchResults([])
            setQuery({ value: e, loading: e.trim().length > 2 })
          }}
          value={query.value}
        />
        <CommandList>
          <CommandEmpty>
            {query.value.trim().length < 3
              ? 'Type at least 3 characters to search.'
              : 'No results found.'}
          </CommandEmpty>
          {query.loading && (
            <CommandItem
              disabled
              className='flex items-center justify-center'
              value={query.value}
            >
              <Loader className='scale-150' />
            </CommandItem>
          )}
          <CommandGroup
            heading='Search City'
            className={cn(!query.value && 'hidden')}
          >
            {searchResults.map((result) => (
              <CommandItem
                key={result.id}
                value={query.value + result.name + result.id}
                onSelect={() =>
                  runCommand(() =>
                    router.replace(
                      `/?lat=${result.coord.lat}&lon=${result.coord.lon}&city=${result.name}&country=${result.sys.country}&units=${units}`
                    )
                  )
                }
              >
                <div className='flex flex-1 items-center justify-between'>
                  <div className='flex items-center'>
                    {result.name}, {result.sys.country}
                    <img
                      className='ml-2 inline-block'
                      src={`https://openweathermap.org/images/flags/${String(
                        result.sys.country
                      ).toLocaleLowerCase()}.png`}
                      alt={result.sys.country}
                      width={15}
                      height={10}
                    />
                  </div>
                  <div className='flex basis-1/5 items-baseline'>
                    <span>
                      {tempValue(result.main.temp, units === 'imperial', true)}
                      &deg;
                      {units === 'imperial' ? 'F' : 'C'}
                    </span>
                    <span className='ml-1 text-muted-foreground'>
                      <i
                        className={cn(
                          `wi wi-fw wi-owm${
                            result.weather[0].icon.includes('n') ? '-night' : ''
                          }-${result.weather[0].id}`,
                          'text-lg'
                        )}
                      ></i>
                    </span>
                  </div>
                  <div className='text-[10px] text-muted-foreground'>
                    {result.coord.lat} / {result.coord.lon}
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Theme'>
            <CommandItem
              value=''
              onSelect={() => runCommand(() => setTheme('light'))}
            >
              <Icons.sun className='mr-2 h-4 w-4' />
              Light
            </CommandItem>
            <CommandItem
              value=''
              onSelect={() => runCommand(() => setTheme('dark'))}
            >
              <Icons.moon className='mr-2 h-4 w-4' />
              Dark
            </CommandItem>
            <CommandItem
              value=''
              onSelect={() => runCommand(() => setTheme('system'))}
            >
              <Icons.laptop className='mr-2 h-4 w-4' />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default CommandMenu
