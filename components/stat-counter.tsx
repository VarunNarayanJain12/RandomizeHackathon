"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface StatCounterProps {
  value: number
  suffix?: string
  label: string
  className?: string
  duration?: number
}

export default function StatCounter({ value, suffix = "", label, className, duration = 2000 }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLParagraphElement>(null)
  const observer = useRef<IntersectionObserver | null>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const [entry] = entries
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true

        const startTime = Date.now()
        const endTime = startTime + duration

        const updateCount = () => {
          const now = Date.now()
          const progress = Math.min((now - startTime) / duration, 1)
          const currentCount = Math.floor(progress * value)

          setCount(currentCount)

          if (now < endTime) {
            requestAnimationFrame(updateCount)
          } else {
            setCount(value)
          }
        }

        requestAnimationFrame(updateCount)
      }
    })

    if (countRef.current) {
      observer.current.observe(countRef.current)
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [value, duration])

  return (
    <div className={cn("flex flex-col items-center justify-center p-4 text-center", className)}>
      <p ref={countRef} className="text-3xl md:text-4xl font-bold tabular-nums">
        {count}
        {suffix}
      </p>
      <p className="text-sm md:text-base opacity-90">{label}</p>
    </div>
  )
}

