"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  /** The target number to count up to */
  target: number
  /** Duration of the count animation in ms (default: 1800) */
  duration?: number
  /** Suffix appended after the number, e.g. "+" or "%" */
  suffix?: string
  /** Prefix prepended before the number, e.g. "$" */
  prefix?: string
  /** Whether to start counting (tie to scroll visibility) */
  active?: boolean
  /** Extra className on the wrapping span */
  className?: string
}

/**
 * Counts from 0 to `target` using requestAnimationFrame once `active` is true.
 * Renders as an inline span so it can be dropped anywhere.
 */
export default function AnimatedCounter({
  target,
  duration = 1800,
  suffix = "",
  prefix = "",
  active = true,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const startTimeRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!active || hasStarted.current) return
    hasStarted.current = true

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [active, target, duration])

  return (
    <span className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
