import type { Metadata } from 'next'
import './globals.css'
import NavBarResp from './components/NavBarResp'
import Providers from './providers'
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A display of works',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className='px-10'>
            <NavBarResp/>
            {children}
            <Analytics />
            <div className='py-10 text-center bottom-0'>
              <footer>Site built with Nextjs, Typescript & Tailwind CSS. © 2023.</footer>
              <p className='text-xs'>Last update: 25/11/2023</p>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
