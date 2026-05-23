import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Unity Dating - Music Lover\'s Dating by EnsembleCoin',
  description: 'Connect with music lovers worldwide through video chat with AI translation. Where love unites borders.',
  keywords: ['dating', 'music lovers', 'international dating', 'global connections', 'romance', 'music', 'love', 'video chat', 'virtual music room', 'subscription', 'profile', 'matching', 'genres', 'languages', 'playlists'],
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
      </body>
    </html>
  )
}
