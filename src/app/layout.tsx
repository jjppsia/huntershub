import '@/styles/globals.css'
import { Metadata } from 'next'

import { metaDataConfig } from '@/config/meta-data'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import Header from '@/components/header'
import TailwindIndicator from '@/components/tailwind-indicator'

export const metadata: Metadata = {
  title: metaDataConfig.title,
  description: metaDataConfig.description,
  keywords: metaDataConfig.keywords,
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <div className='relative flex min-h-screen flex-col'>
            <Header />
            <main className='flex-1'>{children}</main>
          </div>
          <TailwindIndicator />
        </body>
      </html>
    </>
  )
}
