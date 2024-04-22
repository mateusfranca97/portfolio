import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { StrictMode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mateus Gomes',
  description: 'Meu Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StrictMode>
      <html className='scroll-smooth' lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StrictMode>
  )
}
