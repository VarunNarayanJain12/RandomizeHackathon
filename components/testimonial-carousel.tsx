"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "ExamIntegrity.ai has transformed how we conduct exams. The AI detection is incredibly accurate and has significantly reduced instances of academic dishonesty.",
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
      "We've seen a 95% reduction in cheating cases since implementing ExamIntegrity.ai. The detailed reporting makes it easy to address any incidents that do occur.",
    author: "Prof. James Wilson",
    role: "Examination Controller",
    institution: "Oxford University",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "The hybrid solution perfectly meets our needs for both in-person and remote exams. The consistency in monitoring across environments is impressive.",
    author: "Dr. Maria Rodriguez",
    role: "Vice President",
    institution: "MIT",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="border-orange-100">
                <CardContent className="p-6 flex flex-col gap-4">
                  <Quote className="h-8 w-8 text-orange-300" />
                  <p className="text-gray-700">{testimonial.quote}</p>
                  <div className="flex items-center gap-3 mt-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback className="bg-orange-100 text-orange-500">
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.institution}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  )
}

