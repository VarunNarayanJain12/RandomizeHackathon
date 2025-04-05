import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard/layout"
import Breadcrumbs from "@/components/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RefreshCw } from "lucide-react"
import OnlineMonitoringDashboard from "@/components/online-monitoring/dashboard"
import OnlineStudentList from "@/components/online-monitoring/student-list"
import OnlineAlerts from "@/components/online-monitoring/alerts"
import VideoUpload from "@/components/online-monitoring/VideoUpload"


export const metadata: Metadata = {
  title: "Online Monitoring - ExamGuard AI",
  description: "AI-powered online exam monitoring",
}

export default function OnlineMonitoringPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Getting Started", href: "/getting-started" },
    { label: "Online Monitoring", href: "/dashboard/online-monitoring", active: true },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">Online Exam Monitoring</h1>
            <p className="text-muted-foreground">
              Monitor remote exams with AI-powered browser restrictions and behavior analysis.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
              <span className="mr-1 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>3 Active Exams
            </Badge>
            <Button variant="outline" size="sm" className="h-9">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white h-9">New Session</Button>
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList>
            <TabsTrigger
              value="dashboard"
              className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            >
              Dashboard
            </TabsTrigger>
            <TabsTrigger
              value="students"
              className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            >
              Students
            </TabsTrigger>
            <TabsTrigger value="alerts" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
              Alerts
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            >
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
          <OnlineMonitoringDashboard />

          

        </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <OnlineStudentList />
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <OnlineAlerts />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Online Monitoring Settings</CardTitle>
                <CardDescription>Configure the online monitoring system settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="font-medium">AI Sensitivity</h3>
                    <div className="flex items-center gap-4">
                      <span className="text-sm">Low</span>
                      <div className="relative flex-1 h-2 bg-secondary rounded-full">
                        <div className="absolute left-0 top-0 h-full w-3/4 bg-primary rounded-full"></div>
                        <div className="absolute left-[75%] top-0 h-4 w-4 -mt-1 bg-primary rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-sm">High</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Alert Threshold</h3>
                    <div className="flex items-center gap-4">
                      <span className="text-sm">Low</span>
                      <div className="relative flex-1 h-2 bg-secondary rounded-full">
                        <div className="absolute left-0 top-0 h-full w-1/2 bg-accent rounded-full"></div>
                        <div className="absolute left-[50%] top-0 h-4 w-4 -mt-1 bg-accent rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-sm">High</span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="font-medium">Detection Features</h3>
                    <div className="space-y-2">
                      {[
                        "Browser Lockdown",
                        "Audio Analysis",
                        "Eye Tracking",
                        "Face Recognition",
                        "Screen Monitoring",
                        "Keyboard Tracking",
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-sm">{feature}</span>
                          <div className="w-10 h-5 bg-primary/20 rounded-full relative">
                            <div className="absolute inset-0 flex items-center justify-end p-0.5">
                              <div className="w-4 h-4 bg-primary rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Notification Settings</h3>
                    <div className="space-y-2">
                      {[
                        "Email Alerts",
                        "SMS Notifications",
                        "Dashboard Alerts",
                        "Sound Alerts",
                        "Auto-Intervention",
                        "Report Generation",
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-sm">{feature}</span>
                          <div className={`w-10 h-5 ${i < 4 ? "bg-primary/20" : "bg-secondary"} rounded-full relative`}>
                            <div className="absolute inset-0 flex items-center p-0.5">
                              <div
                                className={`w-4 h-4 ${i < 4 ? "bg-primary ml-auto" : "bg-muted-foreground ml-0"} rounded-full`}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-primary hover:bg-primary/90 text-white">Save Settings</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

