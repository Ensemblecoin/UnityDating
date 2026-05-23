"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Users, Video, Heart, Settings, LogOut } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function DashboardPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [user, setUser] = useState<any>(null)
  const [subscription, setSubscription] = useState<string | null>(null)

  useEffect(() => {
    // Check authentication
    const isAuth = localStorage.getItem("unity_auth")
    if (!isAuth) {
      router.push("/signin")
      return
    }

    const userData = localStorage.getItem("unity_user")
    const subData = localStorage.getItem("unity_subscription")
    
    if (userData) setUser(JSON.parse(userData))
    if (subData) setSubscription(subData)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("unity_auth")
    localStorage.removeItem("unity_user")
    localStorage.removeItem("unity_subscription")
    
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    })
    
    router.push("/")
  }

  const features = [
    {
      title: "Find Matches",
      description: "Discover music lovers who share your taste",
      icon: Users,
      href: "/find-match",
      color: "bg-purple-100 text-purple-600",
      requiresSubscription: false
    },
    {
      title: "Virtual Music Room",
      description: "Video chat with AI translation & playlist sharing",
      icon: Video,
      href: "/music-room",
      color: "bg-blue-100 text-blue-600",
      requiresSubscription: true,
      requiredPlan: "elite"
    },
    {
      title: "My Matches",
      description: "View your connections and conversations",
      icon: Heart,
      href: "/matches",
      color: "bg-pink-100 text-pink-600",
      requiresSubscription: false
    },
    {
      title: "Music Profile",
      description: "Update your musical preferences",
      icon: Music,
      href: "/profile",
      color: "bg-green-100 text-green-600",
      requiresSubscription: false
    }
  ]

  const handleFeatureClick = (feature: typeof features[0]) => {
    if (feature.requiresSubscription) {
      if (!subscription) {
        toast({
          title: "Subscription Required",
          description: "This feature requires a premium subscription.",
          variant: "destructive"
        })
        router.push("/subscription")
        return
      }
      
      if (feature.requiredPlan === "elite" && subscription !== "elite") {
        toast({
          title: "Elite Subscription Required",
          description: "The Virtual Music Room is only available with Elite subscription.",
          variant: "destructive"
        })
        router.push("/subscription")
        return
      }
    }
    
    router.push(feature.href)
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border p-4 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
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

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Welcome, <span className="font-semibold text-foreground">{user.name}</span>
            </span>
            <Button variant="outline" size="sm" onClick={() => router.push("/settings")} className="bg-transparent">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout} className="bg-transparent">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-6">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-foreground">Your Dashboard</h1>
          <p className="text-muted-foreground">
            {subscription ? (
              <span>
                Your <span className="font-semibold capitalize text-primary">{subscription}</span> subscription is active
              </span>
            ) : (
              <span>
                Free account -{" "}
                <Link href="/subscription" className="text-primary underline">
                  Upgrade for more features
                </Link>
              </span>
            )}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            const isLocked = feature.requiresSubscription && (!subscription || 
              (feature.requiredPlan === "elite" && subscription !== "elite"))

            return (
              <Card
                key={feature.title}
                className="cursor-pointer border-2 border-border transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20 relative"
                onClick={() => handleFeatureClick(feature)}
              >
                {isLocked && (
                  <div className="absolute top-2 right-2 bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-semibold">
                    {feature.requiredPlan === "elite" ? "Elite" : "Premium"}
                  </div>
                )}
                <CardHeader>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${feature.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    {isLocked ? "Unlock Feature" : "Open"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>
    </div>
  )
}
