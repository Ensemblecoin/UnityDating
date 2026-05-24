"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Returns a ref to attach to a DOM element and a boolean `isVisible`
 * that becomes true once the element enters the viewport.
 *
 * @param threshold  IntersectionObserver threshold (default 0.15)
 * @param once       If true (default), stops observing after first reveal
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  once = true
) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, isVisible }
}
