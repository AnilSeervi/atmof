import React from 'react'

type StatProps = {
  icon: React.ReactNode
  header: string
  body: string
}

export default function Stat({ icon, header, body }: StatProps) {
  return (
    <div className='flex items-center gap-3'>
      <div className='flex h-5 w-5 items-center justify-center'>
        {React.cloneElement(icon as React.ReactElement, {
          className: 'inline w-full h-full',
        })}
      </div>
      <div>
        <p className='text-xs leading-relaxed text-muted-foreground'>
          {header}
        </p>
        <p className='font-medium'>{body}</p>
      </div>
    </div>
  )
}
