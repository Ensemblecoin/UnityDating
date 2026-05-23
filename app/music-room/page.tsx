"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import VirtualMusicRoom from "@/components/virtual-music-room"

export default function MusicRoomPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [hasAccess, setHasAccess] = useState(false)

  useEffect(() => {
    // Check authentication
    const isAuth = localStorage.getItem("unity_auth")
    if (!isAuth) {
      router.push("/signin")
      return
    }

    // Check subscription - Premium and Elite can access music room
    const subscription = localStorage.getItem("unity_subscription")
    if (subscription !== "premium" && subscription !== "elite") {
      router.push("/subscription")
      return
    }

    setIsAuthenticated(true)
    setHasAccess(true)
  }, [router])

  if (!isAuthenticated || !hasAccess) return null

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border p-4 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/unity-logo.png"
              alt="Unity Dating Logo"
              width={40}
              height={47}
              className="h-auto w-[40px]"
            />
            <span className="text-2xl font-bold text-primary">UNITY</span>
          </Link>
        </div>
      </header>

      <main className="py-12">
        <VirtualMusicRoom />
      </main>
    </div>
  )
}
