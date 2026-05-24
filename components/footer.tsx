"use client"

import Image from "next/image"
import { Music, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-gray-200 bg-background shadow-[0_-1px_6px_rgba(0,0,0,0.05)]">
      {/* ── Subtle animated gradient top border ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] animate-gradient-shift"
        style={{
          background: "linear-gradient(90deg, #ff4f8b, #7c3aed, #0ea5e9, #ff4f8b)",
          backgroundSize: "300% 100%",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex flex-col items-center gap-4">
            <div className="group relative">
              <Image
                src="/Unity Transparent Logo.png"
                alt="Unity Dating Logo"
                width={60}
                height={70}
                className="h-auto w-[60px] transition-transform duration-300 group-hover:scale-110"
              />
              {/* Subtle glow on hover */}
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle, #ff4f8b, #7c3aed)" }}
              />
            </div>
          </div>

          {/* Animated music note row */}
          <div className="flex items-center gap-3 text-muted-foreground/40">
            <Music className="h-3.5 w-3.5 animate-bounce-gentle" style={{ animationDelay: "0s" }} />
            <Heart className="h-3 w-3 animate-bounce-gentle" style={{ animationDelay: "0.3s" }} />
            <Music className="h-3.5 w-3.5 animate-bounce-gentle" style={{ animationDelay: "0.6s" }} />
            <Heart className="h-3 w-3 animate-bounce-gentle" style={{ animationDelay: "0.9s" }} />
            <Music className="h-3.5 w-3.5 animate-bounce-gentle" style={{ animationDelay: "1.2s" }} />
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
