
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketplace App',
  description: 'A modern marketplace application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
