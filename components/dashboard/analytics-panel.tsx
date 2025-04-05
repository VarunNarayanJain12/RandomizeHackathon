"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart3, Download } from "lucide-react"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Line,
  LineChart as RechartsLineChart,
  Bar,
  BarChart as RechartsBarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

const dailyData = [
  { date: "Mon", incidents: 5, flagged: 12 },
  { date: "Tue", incidents: 8, flagged: 15 },
  { date: "Wed", incidents: 3, flagged: 10 },
  { date: "Thu", incidents: 7, flagged: 14 },
  { date: "Fri", incidents: 9, flagged: 18 },
  { date: "Sat", incidents: 2, flagged: 8 },
  { date: "Sun", incidents: 1, flagged: 5 },
]

const monthlyData = [
  { month: "Jan", incidents: 24, flagged: 65 },
  { month: "Feb", incidents: 18, flagged: 52 },
  { month: "Mar", incidents: 29, flagged: 70 },
  { month: "Apr", incidents: 32, flagged: 78 },
  { month: "May", incidents: 27, flagged: 62 },
  { month: "Jun", incidents: 35, flagged: 85 },
]

const detectionData = [
  { type: "Gaze Tracking", count: 42 },
  { type: "Hand Movement", count: 28 },
  { type: "Audio Detection", count: 15 },
  { type: "Multiple Devices", count: 22 },
  { type: "Unauthorized Materials", count: 35 },
]

export default function AnalyticsPanel() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Analytics
          </CardTitle>
          <CardDescription>Exam integrity analytics and trends</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="incidents">
          <TabsList className="mb-4">
            <TabsTrigger
              value="incidents"
              className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            >
              Incidents Over Time
            </TabsTrigger>
            <TabsTrigger
              value="detection"
              className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            >
              Detection Types
            </TabsTrigger>
          </TabsList>

          <TabsContent value="incidents" className="space-y-4">
            <div className="flex items-center justify-end gap-2">
              <Button variant="outline" size="sm" className="h-7 text-xs">
                Daily
              </Button>
              <Button variant="outline" size="sm" className="h-7 text-xs bg-primary/10 text-primary">
                Weekly
              </Button>
              <Button variant="outline" size="sm" className="h-7 text-xs">
                Monthly
              </Button>
            </div>

            <ChartContainer
              config={{
                incidents: {
                  label: "Confirmed Incidents",
                  color: "hsl(var(--primary))",
                },
                flagged: {
                  label: "Flagged Activities",
                  color: "hsl(var(--accent))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={dailyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="incidents" stroke="var(--color-incidents)" strokeWidth={2} />
                  <Line type="monotone" dataKey="flagged" stroke="var(--color-flagged)" strokeWidth={2} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-primary/5">
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-muted-foreground">Total Incidents</div>
                  <div className="text-2xl font-bold">35</div>
                  <div className="text-xs text-green-600">↓ 12% from last week</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5">
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-muted-foreground">Flagged Activities</div>
                  <div className="text-2xl font-bold">82</div>
                  <div className="text-xs text-red-600">↑ 8% from last week</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5">
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-muted-foreground">Detection Rate</div>
                  <div className="text-2xl font-bold">98.2%</div>
                  <div className="text-xs text-green-600">↑ 1.5% from last week</div>
                </CardContent>
              </Card>
              <Card className="bg-primary/5">
                <CardContent className="p-4">
                  <div className="text-sm font-medium text-muted-foreground">Exams Monitored</div>
                  <div className="text-2xl font-bold">245</div>
                  <div className="text-xs text-muted-foreground">This week</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="detection">
            <ChartContainer
              config={{
                count: {
                  label: "Detection Count",
                  color: "hsl(var(--primary))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={detectionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="type" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="count" fill="var(--color-count)" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

