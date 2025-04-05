"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useSearchParams } from "next/navigation"

interface Feature {
  title: string
  description: string
  emoji: string
}

interface MonitoringCardProps {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  emoji: string
  features: Feature[]
  buttonHref: string
  buttonText: string
}

export default function MonitoringCard({
  id,
  title,
  description,
  icon,
  emoji,
  features,
  buttonHref,
  buttonText,
}: MonitoringCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const searchParams = useSearchParams()

  // Auto-expand if the hash matches this card's ID
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash === id) {
      setIsExpanded(true)
      // Scroll to this card
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 100)
    }
  }, [id, searchParams])

  return (
    <motion.div
      layout
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        layout="position"
        className={`cursor-pointer overflow-hidden rounded-xl border transition-all duration-300 ${
          isExpanded
            ? "border-primary shadow-lg"
            : "border-primary/10 hover:border-primary/30 hover:shadow-md aspect-square"
        }`}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        <motion.div layout="position" className="p-6 flex flex-col h-full">
          <motion.div layout="position" className="flex items-center justify-between">
            <motion.div layout="position" className="flex items-center gap-3">
              <motion.div
                layout="position"
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"
              >
                {icon}
              </motion.div>
              <motion.div layout="position">
                <motion.h3 layout="position" className="flex items-center gap-2 font-bold">
                  {title} <span className="text-xl">{emoji}</span>
                </motion.h3>
                <motion.p layout="position" className="text-muted-foreground text-sm">
                  {description}
                </motion.p>
              </motion.div>
            </motion.div>

            {isExpanded && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="shrink-0"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsExpanded(false)
                }}
              >
                <ChevronUp className="h-5 w-5" />
              </motion.button>
            )}
          </motion.div>

          <AnimatePresence>
            {!isExpanded && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center flex-1 mt-4"
              >
                <motion.div
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronDown className="h-6 w-6" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6"
              >
                <motion.div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={`${id}-feature-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-secondary hover:bg-secondary/70 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{feature.emoji}</span>
                        <h4 className="font-medium">{feature.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-end mt-6"
                >
                  <Link href={buttonHref}>
                    <Button className="bg-accent hover:bg-accent/90 text-white">
                      {buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

