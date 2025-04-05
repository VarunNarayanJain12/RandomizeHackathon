"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Play, ChevronDown, ChevronUp } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Feature {
  title: string
  description: string
  emoji: string
}

interface DemoCardProps {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  videoUrl: string
  features: Feature[]
}

export default function DemoCard({ id, title, description, icon, videoUrl, features }: DemoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      <motion.div
        layout
        id={id}
        className="flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          layout="position"
          className={`cursor-pointer overflow-hidden rounded-2xl border border-primary/20 bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md ${isExpanded ? "" : "aspect-square"}`}
          onClick={() => !isExpanded && setIsExpanded(true)}
        >
          <motion.div layout="position" className="p-6 flex flex-col h-full">
            <motion.div layout="position" className="flex items-center justify-between">
              <motion.div layout="position" className="flex items-center gap-4">
                <motion.div
                  layout="position"
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                >
                  {icon}
                </motion.div>
                <motion.div layout="position">
                  <motion.h3 layout="position" className="text-2xl font-bold">
                    {title}
                  </motion.h3>
                  <motion.p layout="position" className="text-muted-foreground">
                    {description}
                  </motion.p>
                </motion.div>
              </motion.div>

              {isExpanded && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="shrink-0 rounded-full p-2 hover:bg-primary/10"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsExpanded(false)
                  }}
                >
                  <ChevronUp className="h-6 w-6" />
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
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronDown className="h-8 w-8" />
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
                  className="mt-6 space-y-6"
                >
                  <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
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
                    className="flex justify-center"
                  >
                    <Button
                      className="bg-accent hover:bg-accent/90 text-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        setShowVideo(true)
                      }}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Watch Demo Video
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{title} - Demo Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full bg-black rounded-md overflow-hidden">
            <video
              src={videoUrl}
              controls
              className="w-full h-full"
              poster={`/placeholder.svg?height=720&width=1280&text=${title}+Demo`}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

