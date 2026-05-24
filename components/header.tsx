"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Header() {
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="border-b-2 border-gray-200 bg-background/95 sticky top-0 z-50 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Unity Transparent Logo.png"
            alt="Unity Dating Logo"
            width={40}
            height={46}
            className="h-auto w-[40px]"
          />
          <span className="text-2xl font-bold text-primary">UNITY</span>
        </Link>
        <nav className="flex items-center gap-8">
          <button
            onClick={() => window.location.pathname === '/' ? window.scrollTo({ top: 0, behavior: "smooth" }) : router.push('/')}
            className="link-underline font-semibold text-foreground transition-colors hover:text-primary focus:text-primary"
          >
            Home
          </button>
          <Link
            href="/music-room"
            className="link-underline font-semibold text-foreground transition-colors hover:text-primary"
          >
            Music Room
          </Link>
          <Link
            href="/find-match"
            className="link-underline font-semibold text-foreground transition-colors hover:text-primary"
          >
            Find Match
          </Link>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="link-underline font-semibold text-foreground transition-colors hover:text-primary"
          >
            Stories
          </button>
          <button
            onClick={() => router.push('/signin')}
            className="group relative ripple-container btn-press ml-6 inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-pink-500/30"
            style={{ background: "linear-gradient(90deg, #ff4f8b, #7c3aed)" }}
          >
            Sign In
            <span className="pointer-events-none absolute inset-0 rounded-full overflow-hidden">
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                }}
              />
            </span>
          </button>
        </nav>
      </div>
    </header>
  )
}
