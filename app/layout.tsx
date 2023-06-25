import { cn } from '@/lib/utils'
import './globals.css'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/components/atom/theme-provider'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const weatherIcons = localFont({
  src: '../fonts/weathericons-regular-webfont.woff2',
  variable: '--font-weather-icons', // used inside weather-icons.min.css
  display: 'swap',
})

export const metadata = {
  title: 'Atmos',
  description: 'Weather App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(montserrat.className, weatherIcons.variable, 'my-4')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="px-6 max-w-xl mx-auto">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
