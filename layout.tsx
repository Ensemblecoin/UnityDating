import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://unitydating.net'),
  title: 'Unity Dating - Music Lover\'s Dating by EnsembleCoin',
  description: 'Connect with music lovers worldwide through video chat with AI translation. Where love unites borders.',
  keywords: ['dating', 'music lovers', 'international dating', 'global connections', 'romance', 'music', 'love', 'video chat', 'virtual music room', 'subscription', 'profile', 'matching', 'genres', 'languages', 'playlists'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Unity Dating',
    description: 'Connect with music lovers worldwide. Where love unites borders.',
    siteName: 'Unity Dating',
    type: 'website',
    url: 'https://unitydating.net',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
        <Toaster />
        <Analytics />
        <Script src="https://sdk.minepi.com/pi-sdk.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
