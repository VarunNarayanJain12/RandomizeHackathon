"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "ExamGuard AI has transformed how we conduct exams. The AI detection is incredibly accurate and has significantly reduced instances of academic dishonesty.",
    author: "Dr. Sarah Johnson",
    role: "Dean of Academic Affairs",
    institution: "Stanford University",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "The CCTV integration works flawlessly with our existing infrastructure. Setup was easy and the results have been outstanding.",
    author: "Michael Chen",
    role: "IT Director",
    institution: "University of Michigan",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "We've seen a 95% reduction in cheating cases since implementing ExamGuard AI. The detailed reporting makes it easy to address any incidents that do occur.",
    author: "Prof. James Wilson",
    role: "Examination Controller",
    institution: "Oxford University",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-primary/10 shadow-md">
              <CardContent className="p-8 flex flex-col gap-6">
                <Quote className="h-10 w-10 text-primary/30" />
                <p className="text-lg md:text-xl italic text-foreground/90">
                  "{testimonials[current].quote}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonials[current].avatar}
                      alt={testimonials[current].author}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonials[current].author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonials[current].author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].role}, {testimonials[current].institution}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full p-0 ${
              index === current ? "bg-primary" : "bg-muted"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}