import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard/layout"
import Breadcrumbs from "@/components/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera } from "lucide-react"

export const metadata: Metadata = {
  title: "Offline Monitoring - ExamGuard AI",
  description: "AI-powered CCTV-based exam monitoring",
}

export default function OfflineMonitoringPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Getting Started", href: "/getting-started" },
    { label: "Offline Monitoring", href: "/dashboard/offline-monitoring", active: true },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Offline Exam Monitoring (CCTV-Based)</h1>
          <p className="text-muted-foreground">Monitor physical exam environments using AI-powered CCTV analysis.</p>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Camera className="h-5 w-5" />
            </div>
            <div>
              <CardTitle>Offline Monitoring Dashboard</CardTitle>
              <CardDescription>This is a placeholder for the CCTV-based monitoring backend.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] flex items-center justify-center bg-secondary rounded-lg">
              <p className="text-muted-foreground">Offline monitoring backend would be implemented here.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

