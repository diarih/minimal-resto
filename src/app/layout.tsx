import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from './components/sections/layout'
import { MenuProvider } from '@/context/MenuContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Minimal Resto 🍴',
  description: 'Welcome to our eatery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuProvider>
          <Layout>
            {children}
          </Layout>
        </MenuProvider>
      </body>
    </html>
  )
}
