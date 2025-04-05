"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, CheckCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

const initialAlerts = [
  {
    id: 1,
    message: "Critical: Unauthorized materials detected in Main Hall, Seat 12",
    time: "2 minutes ago",
    severity: "critical",
    read: false,
  },
  {
    id: 2,
    message: "Warning: Suspicious head movement detected in Online Exam, Student ID: 2458",
    time: "15 minutes ago",
    severity: "warning",
    read: false,
  },
  {
    id: 3,
    message: "Info: System sensitivity adjusted for Camera 2",
    time: "1 hour ago",
    severity: "info",
    read: true,
  },
  {
    id: 4,
    message: "Warning: Multiple gaze deviations detected in Side Room, Seat 5",
    time: "2 hours ago",
    severity: "warning",
    read: true,
  },
]

export default function AlertsPanel() {
  const [alerts, setAlerts] = useState(initialAlerts)

  const markAsRead = (id: number) => {
    setAlerts(alerts.map((alert) => (alert.id === id ? { ...alert, read: true } : alert)))
  }

  const dismissAlert = (id: number) => {
    setAlerts(alerts.filter((alert) => alert.id !== id))
  }

  const unreadCount = alerts.filter((alert) => !alert.read).length

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Alerts
            {unreadCount > 0 && <Badge className="bg-accent text-white ml-2">{unreadCount} new</Badge>}
          </CardTitle>
          <CardDescription>Real-time system notifications</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          Mark All Read
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.length > 0 ? (
            alerts.map((alert) => (
              <div
                key={alert.id}
                className={cn(
                  "p-3 rounded-lg border flex items-start gap-3",
                  alert.read ? "bg-background" : "bg-secondary/50",
                  alert.severity === "critical"
                    ? "border-red-300"
                    : alert.severity === "warning"
                      ? "border-orange-300"
                      : "border-blue-300",
                )}
              >
                <div
                  className={cn(
                    "w-2 h-2 rounded-full mt-1.5",
                    alert.severity === "critical"
                      ? "bg-red-500"
                      : alert.severity === "warning"
                        ? "bg-orange-500"
                        : "bg-blue-500",
                  )}
                />
                <div className="flex-1 min-w-0">
                  <p className={cn("text-sm", !alert.read && "font-medium")}>{alert.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                </div>
                <div className="flex gap-1">
                  {!alert.read && (
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => markAsRead(alert.id)}>
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                  )}
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => dismissAlert(alert.id)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <p>No alerts at this time</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

