import type { Metadata } from 'next'
import './globals.css'
import NavBarResp from './components/NavBarResp'
import Providers from './providers'

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
            <footer className='text-center bottom-0 font-sans py-10'>Site built with Nextjs, Typescript & Tailwind CSS. © 2023.</footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
