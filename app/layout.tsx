import type { Metadata, Viewport } from 'next'
import { Anton, IBM_Plex_Mono, Inter } from 'next/font/google'
import './globals.css'

const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://nfcsummit.com'),
  title: 'NFC Summit 2027 — 27 · 28 · 29 May 2027, Unicorn Factory, Lisbon',
  description:
    'NFC Summit is coming back in 2027. Sixth edition, 27–29 May 2027 at the Unicorn Factory, Lisbon. Get your ticket and put your name on the wall of the venue.',
  openGraph: {
    type: 'website',
    siteName: 'NFC Summit',
    title: 'NFC Summit 2027',
    description: '27 · 28 · 29 May 2027 — Unicorn Factory, Lisbon.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0B0B',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${plexMono.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
