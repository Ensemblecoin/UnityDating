"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Heart, Music, Video } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SubscriptionPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "$9.99",
      period: "month",
      features: [
        "Create your profile",
        "Browse matches",
        "Send 10 messages/month",
        "Basic matching algorithm",
        "Create music playlists",
        "Listen to your playlists"
      ],
      icon: Heart,
      popular: false
    },
    {
      id: "premium",
      name: "Premium",
      price: "$19.99",
      period: "month",
      features: [
        "Everything in Basic",
        "Unlimited messaging",
        "Advanced matching algorithm",
        "See who liked you",
        "Priority support",
        "Virtual Music Room access"
      ],
      icon: Crown,
      popular: true
    },
    {
      id: "elite",
      name: "Elite",
      price: "$29.99",
      period: "month",
      features: [
        "Everything in Premium",
        "AI translation for video chat",
        "Playlist sharing with matches",
        "Synchronized listening",
        "Exclusive events access",
        "Profile boost"
      ],
      icon: Video,
      popular: false
    }
  ]

  const handleSubscribe = (planId: string) => {
    setSelectedPlan(planId)
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      localStorage.setItem("unity_subscription", planId)
      localStorage.setItem("unity_subscription_date", new Date().toISOString())
      
      toast({
        title: "Subscription activated!",
        description: `Welcome to Unity Dating ${planId.charAt(0).toUpperCase() + planId.slice(1)}!`,
      })
      
      setIsProcessing(false)
      router.push("/dashboard")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border p-4">
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
        </div>
      </header>

      <main className="flex-1 py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="mb-4 text-4xl font-bold text-foreground">Choose Your Plan</h1>
            <p className="text-xl text-muted-foreground">
              Select the perfect subscription to start your musical love journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon
              return (
                <Card
                  key={plan.id}
                  className={`relative border-2 ${
                    plan.popular ? "border-primary shadow-2xl shadow-primary/30 scale-105" : "border-border"
                  } transition-all hover:scale-105`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-bold">
                        MOST POPULAR
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => handleSubscribe(plan.id)}
                      disabled={isProcessing && selectedPlan === plan.id}
                    >
                      {isProcessing && selectedPlan === plan.id
                        ? "Processing..."
                        : "Subscribe Now"}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              All plans include a 7-day free trial. Cancel anytime. No hidden fees.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
