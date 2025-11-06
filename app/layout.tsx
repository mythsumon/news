import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Myanmar Life KR',
  description: 'Your guide to life in Myanmar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
