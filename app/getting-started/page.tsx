import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard/layout"
import Breadcrumbs from "@/components/breadcrumbs"
import { Globe, Camera, Users } from "lucide-react"
import MonitoringCard from "@/components/getting-started/monitoring-card"

export const metadata: Metadata = {
  title: "Getting Started - ExamGuard AI",
  description: "Choose your exam monitoring mode",
}

export default function GettingStartedPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Getting Started", href: "/getting-started", active: true },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Getting Started</h1>
          <p className="text-muted-foreground">Choose your monitoring mode to get started with ExamGuard AI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MonitoringCard
            id="online"
            title="Online Exam Monitoring"
            description="Monitor remote exams with AI-powered browser restrictions and behavior analysis."
            icon={<Globe className="h-6 w-6" />}
            emoji="📡"
            features={[
              {
                title: "AI-powered browser/tab restriction",
                description: "Prevent students from accessing unauthorized resources during exams",
                emoji: "🚫",
              },
              {
                title: "AI-based audio analysis",
                description: "Detect voice conversations and suspicious sounds in the exam environment",
                emoji: "🎤",
              },
              {
                title: "Eye tracking & face recognition",
                description: "Verify student identity and monitor attention throughout the exam",
                emoji: "🧑‍💻",
              },
              {
                title: "Screen monitoring & keyboard tracking",
                description: "Track all student activities on their device during the exam",
                emoji: "⌨️",
              },
              {
                title: "AI chatbot for live invigilator support",
                description: "Provide immediate assistance to students and proctors",
                emoji: "🤖",
              },
            ]}
            buttonHref="/dashboard/online-monitoring"
            buttonText="Proceed to Online Monitoring Backend"
          />

          <MonitoringCard
            id="offline"
            title="Offline Exam Monitoring (CCTV-Based)"
            description="Monitor physical exam environments using AI-powered CCTV analysis."
            icon={<Camera className="h-6 w-6" />}
            emoji="🎥"
            features={[
              {
                title: "Multi-camera tracking across examination halls",
                description: "Comprehensive coverage of all exam areas with synchronized monitoring",
                emoji: "📷",
              },
              {
                title: "Gaze tracking & head movement detection",
                description: "Identify suspicious looking patterns and unusual head movements",
                emoji: "🧐",
              },
              {
                title: "Hidden device detection",
                description: "Identify mobile phones, smartwatches, and other electronic devices",
                emoji: "📱",
              },
              {
                title: "Real-time cheating probability analysis",
                description: "AI algorithms calculate the likelihood of cheating based on multiple factors",
                emoji: "📊",
              },
              {
                title: "Automated AI-based announcements",
                description: "System can issue automated warnings when suspicious activity is detected",
                emoji: "🔊",
              },
            ]}
            buttonHref="/dashboard/offline-monitoring"
            buttonText="Proceed to Offline Monitoring Backend"
          />

          <MonitoringCard
            id="student"
            title="Student Dashboard & Cheating Detection"
            description="Review exam footage and analyze student behavior with AI-powered detection."
            icon={<Users className="h-6 w-6" />}
            emoji="👨‍🎓"
            features={[
              {
                title: "Real-time exam footage review",
                description: "Watch live or recorded exam sessions with AI-enhanced monitoring",
                emoji: "📹",
              },
              {
                title: "Multi-camera labeled images",
                description: "View synchronized footage from different camera angles with AI annotations",
                emoji: "🏷️",
              },
              {
                title: "AI tagging system",
                description: "Automatic classification of behavior as 'Cheating', 'Suspected', or 'Normal'",
                emoji: "🔍",
              },
              {
                title: "Detailed event logs",
                description: "Access comprehensive records of all flagged incidents with timestamps",
                emoji: "📑",
              },
              {
                title: "Facial recognition for repeat offenders",
                description: "Identify students with previous cheating incidents across multiple exams",
                emoji: "🆔",
              },
            ]}
            buttonHref="/dashboard/student-monitoring"
            buttonText="Proceed to Student Dashboard Backend"
          />
        </div>
      </div>
    </DashboardLayout>
  )
}

