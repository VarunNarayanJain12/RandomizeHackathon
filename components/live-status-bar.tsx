"use client"

import { useState, useEffect } from "react"

interface LiveStatusBarProps {
  count: number
}

export default function LiveStatusBar({ count }: LiveStatusBarProps) {
  const [currentCount, setCurrentCount] = useState(count)

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly fluctuate the count by -2 to +3
      const fluctuation = Math.floor(Math.random() * 6) - 2
      setCurrentCount((prev) => Math.max(1, prev + fluctuation))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-3 rounded-lg">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
        <p className="text-sm font-medium">Live monitoring active: {currentCount} exams</p>
      </div>
    </div>
  )
}

