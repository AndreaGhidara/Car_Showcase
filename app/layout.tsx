import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/Components'


export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
