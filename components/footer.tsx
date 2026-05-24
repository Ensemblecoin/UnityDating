"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-200 bg-background shadow-[0_-1px_6px_rgba(0,0,0,0.05)]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/Unity Transparent Logo.png"
              alt="Unity Dating Logo"
              width={60}
              height={70}
              className="h-auto w-[60px]"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-2">
            &copy; {new Date().getFullYear()} Unity Dating | Connect, Share &
            Unite through Music
          </p>
          <p className="text-center text-xs text-muted-foreground mt-1">
            Where Love Unites Borders
          </p>
        </div>
      </div>
    </footer>
  )
}
