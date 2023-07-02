import {
  Moon,
  SunMedium,
  Locate,
  Search,
  Laptop,
  LocateFixed,
  type Icon as LucideIcon,
  ChevronUp,
  ChevronDown,
  LucideProps,
} from 'lucide-react'

export type Icon = LucideIcon

export const Icons = {
  moon: Moon,
  sun: SunMedium,
  gps: Locate,
  gpsFixed: LocateFixed,
  search: Search,
  laptop: Laptop,
  chevup: ChevronUp,
  chevdown: ChevronDown,
  sunrise: (props: LucideProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M7.25 22a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Z'
          clipRule='evenodd'
        ></path>
        <path
          d='M5.25 12c0 1.178.302 2.286.833 3.25H2a.75.75 0 0 0 0 1.5h9.25v-4.94l-.72.72a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v4.94H22a.75.75 0 0 0 0-1.5h-4.083A6.75 6.75 0 1 0 5.25 12Z'
          opacity='.5'
        ></path>
        <path d='M12.53 9.47a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72v4.94h1.5v-4.94l.72.72a.75.75 0 1 0 1.06-1.06l-2-2ZM4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z'></path>
        <path
          d='M4.398 4.398a.75.75 0 0 1 1.061 0l.393.393a.75.75 0 0 1-1.06 1.06l-.394-.392a.75.75 0 0 1 0-1.06Zm15.202.001a.75.75 0 0 1 0 1.06l-.392.393a.75.75 0 0 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0Z'
          opacity='.5'
        ></path>
      </g>
    </svg>
  ),
  sunset: (props: LucideProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M7.25 22a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm-2.333 3.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-4.083Z'
          clipRule='evenodd'
        ></path>
        <path
          d='M4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Zm1-7c0 1.178.302 2.286.833 3.25h11.834a6.751 6.751 0 0 0-5.167-9.96h-1.5a6.751 6.751 0 0 0-6 6.709Z'
          opacity='.5'
        ></path>
        <path d='M11.47 12.841a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0-1.06-1.06l-.72.719V5.29c-.447-.068-1.186-.028-1.5 0v5.21l-.72-.72a.75.75 0 1 0-1.06 1.061l2 2Z'></path>
        <path
          d='M4.398 4.398a.75.75 0 0 1 1.061 0l.393.393a.75.75 0 0 1-1.06 1.06l-.394-.392a.75.75 0 0 1 0-1.06Zm15.202.001a.75.75 0 0 1 0 1.06l-.392.393a.75.75 0 0 1-1.06-1.06l.392-.393a.75.75 0 0 1 1.06 0Z'
          opacity='.5'
        ></path>
      </g>
    </svg>
  ),
  clouds: (props: LucideProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g fill='currentColor'>
        <path
          d='M16.286 18C19.442 18 22 15.472 22 12.353c0-2.472-1.607-4.573-3.845-5.338C17.837 4.194 15.415 2 12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.356 4.356 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765C2 16.104 3.919 18 6.286 18h10Z'
          opacity='.5'
        ></path>
        <path d='M18.286 22C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336C19.295 13.371 17.72 12 15.81 12c-2.052 0-3.715 1.58-3.715 3.53c0 .43.082.844.23 1.226a2.948 2.948 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353C9 20.815 10.247 22 11.786 22h6.5Z'></path>
      </g>
    </svg>
  ),
  wind: (props: LucideProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M6.25 5.5A3.25 3.25 0 1 1 9.5 8.75H3a.75.75 0 0 1 0-1.5h6.5A1.75 1.75 0 1 0 7.75 5.5v.357a.75.75 0 1 1-1.5 0V5.5Z'
          clipRule='evenodd'
        ></path>
        <path
          d='M3.25 14a.75.75 0 0 1 .75-.75h14.5a4.25 4.25 0 1 1-4.25 4.25V17a.75.75 0 0 1 1.5 0v.5a2.75 2.75 0 1 0 2.75-2.75H4a.75.75 0 0 1-.75-.75Z'
          opacity='.4'
        ></path>
        <path
          d='M14.25 7.5a4.25 4.25 0 1 1 4.25 4.25H2a.75.75 0 0 1 0-1.5h16.5a2.75 2.75 0 1 0-2.75-2.75V8a.75.75 0 0 1-1.5 0v-.5Z'
          opacity='.7'
        ></path>
      </g>
    </svg>
  ),
  windD: (props: LucideProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g fill='currentColor'>
        <path d='M8.037 9.858a.5.5 0 0 0-.68.243l-4.193 9.402c-.667 1.496.815 3.047 2.202 2.306l5.904-3.152c.46-.245 1-.245 1.459 0l5.904 3.152c1.387.741 2.869-.81 2.202-2.306l-1.572-3.524a2 2 0 0 0-.932-.975L8.037 9.858Z'></path>
        <path
          d='M8.61 8.467a.5.5 0 0 1-.234-.65l2.151-4.823c.59-1.324 2.355-1.324 2.945 0l3.968 8.898a.5.5 0 0 1-.68.65L8.61 8.467Z'
          opacity='.5'
        ></path>
      </g>
    </svg>
  ),
  precipitation: (props: LucideProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g fill='currentColor'>
        <path
          d='M16.286 19C19.442 19 22 16.472 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3C9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.351 4.351 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765C2 17.104 3.919 19 6.286 19h10Z'
          opacity='.5'
        ></path>
        <path d='M11 20.334c0 .92-.672 1.666-1.5 1.666S8 21.254 8 20.334c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Zm5 0c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Zm-2.5-5c0 .92-.672 1.666-1.5 1.666s-1.5-.746-1.5-1.666c0-.505.451-1.158.859-1.645a.828.828 0 0 1 1.282 0c.408.487.859 1.14.859 1.645Z'></path>
      </g>
    </svg>
  ),
  rain: (props: LucideProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M12.03 14.97a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Zm4.5 0a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Zm-8.5 3.5a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Zm9.5 0a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Zm-5 1a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0Z'
          clipRule='evenodd'
        ></path>
        <path d='M12.03 14.97a.75.75 0 0 1 0 1.06l-2 2a.746.746 0 0 1-1.06 0a.746.746 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0Zm3.44 0l-2 2a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 1 0-1.06-1.06Z'></path>
        <path
          d='M16.286 19C19.442 19 22 16.472 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3C9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.351 4.351 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765C2 17.104 3.919 19 6.286 19h10Z'
          opacity='.5'
        ></path>
      </g>
    </svg>
  ),
  snow: (props: LucideProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M12 14.25a.75.75 0 0 1 .75.75v2.163l1.874-1.081a.75.75 0 1 1 .75 1.299L13.5 18.462l1.876 1.083a.75.75 0 0 1-.75 1.3L12.75 19.76V22a.75.75 0 0 1-1.5 0v-2.239l-1.876 1.083a.75.75 0 0 1-.75-1.299l1.876-1.083l-1.873-1.081a.75.75 0 0 1 .75-1.3l1.873 1.082V15a.75.75 0 0 1 .75-.75Z'
          clipRule='evenodd'
        ></path>
        <path
          d='M16.286 19C19.442 19 22 16.472 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3C9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.351 4.351 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765C2 17.104 3.919 19 6.286 19h10Z'
          opacity='.5'
        ></path>
      </g>
    </svg>
  ),
  pressure: (props: LucideProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g fill='none' stroke='currentColor' strokeWidth='1.5'>
        <path d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z'></path>
        <path
          strokeLinecap='round'
          d='m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2'
          opacity='.5'
        ></path>
        <path d='M13.778 14.364a3 3 0 1 0-4.243-4.243c-.445.446-.756 1.371-.971 2.346c-.32 1.459-.481 2.188.1 2.77c.58.58 1.31.42 2.768.098c.975-.214 1.9-.525 2.346-.971Z'></path>
      </g>
    </svg>
  ),
  visibility: (props: LucideProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 14 14'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M.5 11.5s2-2 6.5-2s6.5 2 6.5 2M7 9.5v4m-4.5 0L6 9.53m5.5 3.97L8 9.53M3.54 7.5a2.74 2.74 0 0 1 0-.5a3.5 3.5 0 0 1 7 0a2.74 2.74 0 0 1 0 .5M.5 7h1m1-4.5L3 3M7 .5v1m4.5 1L11 3m2.5 4h-1'
      ></path>
    </svg>
  ),
  uvi: (props: LucideProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g fill='currentColor'>
        <path
          d='M21.524 12H2.476A.476.476 0 0 1 2 11.524A9.524 9.524 0 0 1 11.524 2h.952A9.524 9.524 0 0 1 22 11.524a.476.476 0 0 1-.476.476Z'
          opacity='.5'
        ></path>
        <path
          fillRule='evenodd'
          d='M11.25 20v-8h1.5v8a2.75 2.75 0 1 1-5.5 0v-1a.75.75 0 0 1 1.5 0v1a1.25 1.25 0 1 0 2.5 0Z'
          clipRule='evenodd'
        ></path>
        <path d='M7.84 12c.143-1.354.477-3.733 1.184-5.771c.36-1.042.802-1.941 1.324-2.567c.514-.616 1.055-.912 1.652-.912c.598 0 1.139.296 1.652.912c.523.626.964 1.525 1.325 2.567c.707 2.038 1.04 4.417 1.183 5.771h1.509l-.008-.077c-.142-1.371-.489-3.94-1.267-6.185c-.388-1.12-.901-2.212-1.59-3.037a5 5 0 0 0-.506-.527A9.574 9.574 0 0 0 12.476 2h-.952c-.623 0-1.231.06-1.82.174a5 5 0 0 0-.508.527c-.688.825-1.201 1.917-1.59 3.037c-.778 2.244-1.125 4.814-1.266 6.185L6.332 12H7.84Z'></path>
      </g>
    </svg>
  ),

  humidity: (props: LucideProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g fill='currentColor'>
        <path d='M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C8.434 14.472 10 16.393 10 17.833Z'></path>
        <path
          d='M22 17.833C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C20.434 14.472 22 16.393 22 17.833Z'
          opacity='.7'
        ></path>
        <path
          d='M16 7.833C16 10.134 14.21 12 12 12s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C14.434 4.472 16 6.393 16 7.833Z'
          opacity='.4'
        ></path>
      </g>
    </svg>
  ),
}
