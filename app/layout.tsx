import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YCMI | Yayasan  Campoes Masyarakat Indonesia',
  description: 'Created with Bian Albaihaqi',
  generator: 'Git',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
