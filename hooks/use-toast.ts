"use client"

import { useState, useCallback, useEffect, useRef } from "react"

export type ToastVariant = "default" | "destructive"

export interface ToastAction {
  label: string
  onClick: () => void
}

export interface Toast {
  id: string
  title?: string
  description?: string
  variant?: ToastVariant
  action?: ToastAction
}

export interface ToastOptions {
  title?: string
  description?: string
  variant?: ToastVariant
  action?: ToastAction
}

const AUTO_DISMISS_MS = 3000

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map())

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
    const timer = timersRef.current.get(id)
    if (timer !== undefined) {
      clearTimeout(timer)
      timersRef.current.delete(id)
    }
  }, [])

  const toast = useCallback(
    (options: ToastOptions) => {
      const id = Math.random().toString(36).slice(2)
      const newToast: Toast = { id, ...options }

      setToasts((prev) => [...prev, newToast])

      const timer = setTimeout(() => {
        dismiss(id)
      }, AUTO_DISMISS_MS)

      timersRef.current.set(id, timer)

      return id
    },
    [dismiss],
  )

  // Clean up all pending timers on unmount
  useEffect(() => {
    const timers = timersRef.current
    return () => {
      timers.forEach((timer) => clearTimeout(timer))
      timers.clear()
    }
  }, [])

  return { toast, toasts, dismiss }
}
