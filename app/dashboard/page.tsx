import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard/layout"
import LiveMonitoring from "@/components/dashboard/live-monitoring"
import AnalyticsPanel from "@/components/dashboard/analytics-panel"
import RecentIncidents from "@/components/dashboard/recent-incidents"
import AlertsPanel from "@/components/dashboard/alerts-panel"

export const metadata: Metadata = {
  title: "Dashboard - ExamGuard AI",
  description: "AI-powered exam monitoring dashboard",
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-full lg:col-span-2">
          <LiveMonitoring />
        </div>
        <div className="col-span-full md:col-span-1">
          <AlertsPanel />
        </div>
        <div className="col-span-full lg:col-span-2">
          <AnalyticsPanel />
        </div>
        <div className="col-span-full md:col-span-1">
          <RecentIncidents />
        </div>
      </div>
    </DashboardLayout>
  )
}

