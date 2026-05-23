"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t-2 border-border bg-background shadow-[0_-1px_6px_rgba(0,0,0,0.05)]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/Unity Transparent Logo.png"
              alt="Unity Dating Logo"
              width={80}
              height={93}
              className="h-auto w-[80px]"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Unity Dating | Connect, Share &
            Unite through Music
          </p>
          <p className="text-center text-xs text-muted-foreground">
            Where Love Unites Borders
          </p>
        </div>
      </div>
    </footer>
  )
}
