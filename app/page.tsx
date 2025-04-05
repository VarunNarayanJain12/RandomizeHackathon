import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Eye, Server, Users, Camera, Globe } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StatCounter from "@/components/stat-counter"
import FeatureCard from "@/components/feature-card"
import LiveStatusBar from "@/components/live-status-bar"
import NeuralNetworkAnimation from "@/components/neural-network-animation"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialSlider from "@/components/testimonial-slider"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-secondary py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <NeuralNetworkAnimation />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">AI-Powered</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Revolutionizing Exam Security with <span className="text-accent">AI-Powered</span> Cheat Detection
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive exam integrity solution with real-time monitoring for both online and offline
                  environments.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/getting-started">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/request-demo">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="Real-Time-Cheating-Detection-AI-Solutions-for-Monitoring-Online-Exams.jpg?height=500&width=800"
                  alt="AI-powered exam monitoring dashboard"
                  width={800}
                  height={500}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <LiveStatusBar count={128} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
            <StatCounter value={99.8} suffix="%" label="Detection Accuracy" />
            <StatCounter value={500} suffix="+" label="Institutions" />
            <StatCounter value={5} suffix="M+" label="Exams Secured" />
            <StatCounter value={24} suffix="/7" label="Support" />
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Monitoring Solutions</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Choose your preferred monitoring solution to get started
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/getting-started#online" className="block group">
              <Card className="aspect-square border-primary/10 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-md overflow-hidden">
                <div className="h-40 bg-primary/5 flex items-center justify-center">
                  <Globe className="h-16 w-16 text-primary/60" />
                </div>
                <CardContent className="p-6 flex flex-col h-[calc(100%-10rem)]">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    Online Monitoring
                    <span className="ml-2 text-xl">📡</span>
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Monitor remote exams with AI-powered browser restrictions and behavior analysis.
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-auto">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/getting-started#offline" className="block group">
              <Card className="aspect-square border-primary/10 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-md overflow-hidden">
                <div className="h-40 bg-primary/5 flex items-center justify-center">
                  <Camera className="h-16 w-16 text-primary/60" />
                </div>
                <CardContent className="p-6 flex flex-col h-[calc(100%-10rem)]">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    Offline Monitoring
                    <span className="ml-2 text-xl">🎥</span>
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Monitor physical exam environments using AI-powered CCTV analysis.
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-auto">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/getting-started#student" className="block group">
              <Card className="aspect-square border-primary/10 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-md overflow-hidden">
                <div className="h-40 bg-primary/5 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary/60" />
                </div>
                <CardContent className="p-6 flex flex-col h-[calc(100%-10rem)]">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    Student Dashboard
                    <span className="ml-2 text-xl">👨‍🎓</span>
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Review exam footage and analyze student behavior with AI-powered detection.
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-auto">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link href="/request-demo">
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Request Full Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                AI-Powered Detection Features
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our advanced AI algorithms detect and prevent cheating in real-time across multiple environments.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Eye className="h-10 w-10 text-primary" />}
              title="Head & Gaze Tracking"
              description="Detects students looking away for long durations or focusing on unauthorized materials."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-primary" />}
              title="Hand Movement Detection"
              description="Flags suspicious gestures such as passing notes or using hidden devices."
            />
            <FeatureCard
              icon={<Camera className="h-10 w-10 text-primary" />}
              title="Multi-Camera Tracking"
              description="For offline exams, allows cross-referencing multiple camera feeds for comprehensive monitoring."
            />
            <FeatureCard
              icon={<Server className="h-10 w-10 text-primary" />}
              title="AI Audio Analysis"
              description="Detects whispering, unusual noises, or speech patterns indicating potential cheating."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Deepfake & Impersonation Detection"
              description="Ensures student identity matches before starting an exam using facial recognition."
            />
            <FeatureCard
              icon={<Globe className="h-10 w-10 text-primary" />}
              title="Browser Lockdown"
              description="Prevents access to unauthorized websites and applications during online exams."
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/request-demo">
              <Button className="bg-accent hover:bg-accent/90 text-white">
                See Features in Action
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-2 text-lg text-muted-foreground">Trusted by leading educational institutions worldwide</p>
          </div>

          <TestimonialSlider />

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={`/placeholder.svg?height=60&width=120&text=Partner ${i + 1}`}
                  alt={`Partner ${i + 1}`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                Ready to Secure Your Exams?
              </h2>
              <p className="text-primary-foreground/80 md:text-xl">
                Get started with our AI-powered exam integrity solution today and ensure academic honesty in all your
                assessments.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link href="/getting-started">
                <Button className="bg-white text-primary hover:bg-white/90">Get Started</Button>
              </Link>
              <Link href="/request-demo">
                <Button variant="outline" className="border-white/30 text-white hover:bg-primary-foreground/10">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

