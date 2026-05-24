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
            width={50}
            height={58}
            className="h-auto w-[50px]"
          />
          <span className="text-2xl font-bold text-primary">UNITY</span>
        </Link>
        <nav className="flex items-center gap-8">
          <button
            onClick={() => window.location.pathname === '/' ? window.scrollTo({ top: 0, behavior: "smooth" }) : router.push('/')}
            className="font-semibold text-foreground transition-colors hover:text-primary focus:text-primary"
          >
            Home
          </button>
          <Link
            href="/music-room"
            className="font-semibold text-foreground transition-colors hover:text-primary"
          >
            Music Room
          </Link>
          <Link
            href="/find-match"
            className="font-semibold text-foreground transition-colors hover:text-primary"
          >
            Find Match
          </Link>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="font-semibold text-foreground transition-colors hover:text-primary"
          >
            Stories
          </button>
          <Button 
            variant="default" 
            size="sm"
            onClick={() => router.push('/signin')}
            className="ml-6 px-6 py-2"
          >
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  )
}
