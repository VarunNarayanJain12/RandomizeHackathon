import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard/layout"
import Breadcrumbs from "@/components/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Student Monitoring - ExamGuard AI",
  description: "AI-powered student behavior monitoring and analysis",
}

export default function StudentMonitoringPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Getting Started", href: "/getting-started" },
    { label: "Student Monitoring", href: "/dashboard/student-monitoring", active: true },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Student Dashboard & Cheating Detection</h1>
          <p className="text-muted-foreground">
            Review exam footage and analyze student behavior with AI-powered detection.
          </p>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <CardTitle>Student Monitoring Dashboard</CardTitle>
              <CardDescription>This is a placeholder for the student monitoring backend.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] flex items-center justify-center bg-secondary rounded-lg">
              <p className="text-muted-foreground">Student monitoring backend would be implemented here.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

