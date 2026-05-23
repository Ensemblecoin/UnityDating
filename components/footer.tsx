"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/unity-logo.png"
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
