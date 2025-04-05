import type { Metadata } from "next"
import DemoLayout from "@/components/demo-layout"
import DemoCard from "@/components/demo-card"
import { Camera, Globe, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Request Demo - ExamGuard AI",
  description: "Request a demo of our AI-powered exam integrity solutions",
}

export default function RequestDemoPage() {
  return (
    <DemoLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Request a Demo</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our AI-powered exam integrity solutions through interactive demos. Click on each card to learn more
            and watch a video demonstration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <DemoCard
            id="online-demo"
            title="Online Cheat Detection"
            description="AI-powered remote exam monitoring with browser lockdown and behavior analysis"
            icon={<Globe className="h-12 w-12" />}
            videoUrl="/videos/online-demo.mp4"
            features={[
              {
                title: "Browser Lockdown",
                description: "Prevents access to unauthorized websites and applications during exams",
                emoji: "🔒",
              },
              {
                title: "AI Gaze Tracking",
                description: "Detects when students look away from the screen for extended periods",
                emoji: "👁️",
              },
              {
                title: "Audio Analysis",
                description: "Identifies suspicious sounds or conversations in the background",
                emoji: "🔊",
              },
              {
                title: "Screen Monitoring",
                description: "Tracks all on-screen activity during the examination",
                emoji: "🖥️",
              },
              {
                title: "Identity Verification",
                description: "Ensures the correct student is taking the exam through facial recognition",
                emoji: "🆔",
              },
              {
                title: "Real-time Alerts",
                description: "Instantly notifies proctors of suspicious behavior",
                emoji: "⚠️",
              },
            ]}
          />

          <DemoCard
            id="offline-demo"
            title="Offline Cheat Detection"
            description="CCTV-based monitoring with AI analysis for physical examination environments"
            icon={<Camera className="h-12 w-12" />}
            videoUrl="OfflineTesting.mp4"
            features={[
              {
                title: "Multi-Camera Integration",
                description: "Synchronizes multiple camera feeds for comprehensive coverage",
                emoji: "📹",
              },
              {
                title: "Movement Detection",
                description: "Identifies suspicious hand and body movements during exams",
                emoji: "👋",
              },
              {
                title: "Object Recognition",
                description: "Detects unauthorized materials like phones or cheat sheets",
                emoji: "📱",
              },
              {
                title: "Student Tracking",
                description: "Follows individual students across multiple camera angles",
                emoji: "🔍",
              },
              {
                title: "Behavior Analysis",
                description: "Analyzes patterns of behavior to identify potential cheating",
                emoji: "📊",
              },
              {
                title: "Automated Announcements",
                description: "Issues warnings when suspicious activity is detected",
                emoji: "📢",
              },
            ]}
          />

          <DemoCard
            id="dashboard-demo"
            title="Student Dashboard"
            description="Comprehensive analytics and monitoring interface for exam administrators"
            icon={<Users className="h-12 w-12" />}
            videoUrl="/videos/dashboard-demo.mp4"
            features={[
              {
                title: "Real-time Monitoring",
                description: "Live view of all active exams and student activities",
                emoji: "⏱️",
              },
              {
                title: "Alert Management",
                description: "Centralized system for reviewing and resolving detected incidents",
                emoji: "🚨",
              },
              {
                title: "Analytics Dashboard",
                description: "Comprehensive statistics and trends for exam integrity",
                emoji: "📈",
              },
              {
                title: "Evidence Recording",
                description: "Automatic recording of all flagged incidents with timestamps",
                emoji: "🎥",
              },
              {
                title: "Student Reports",
                description: "Detailed reports for each student's exam session",
                emoji: "📝",
              },
              {
                title: "Admin Controls",
                description: "Powerful tools for managing exams and responding to incidents",
                emoji: "⚙️",
              },
            ]}
          />
        </div>
      </div>
    </DemoLayout>
  )
}

