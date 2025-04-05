"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertTriangle, CheckCircle, Filter, Search } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const alerts = [
  {
    id: 1,
    student: {
      id: "JW2026",
      name: "James Wilson",
      exam: "Chemistry",
    },
    type: "Multiple Faces Detected",
    time: "11:05 AM",
    severity: "critical",
    description: "AI detected multiple faces in the camera frame. Possible collaboration attempt.",
    resolved: false,
  },
  {
    id: 2,
    student: {
      id: "SM2029",
      name: "Sophia Martinez",
      exam: "English Literature",
    },
    type: "Unauthorized Browser Tab",
    time: "11:02 AM",
    severity: "critical",
    description: "Student attempted to access search engine during exam.",
    resolved: false,
  },
  {
    id: 3,
    student: {
      id: "MB2024",
      name: "Michael Brown",
      exam: "Computer Science",
    },
    type: "Gaze Deviation",
    time: "10:58 AM",
    severity: "warning",
    description: "Student looking away from screen repeatedly over 30 second period.",
    resolved: false,
  },
  {
    id: 4,
    student: {
      id: "MB2024",
      name: "Michael Brown",
      exam: "Computer Science",
    },
    type: "Audio Detection",
    time: "10:45 AM",
    severity: "warning",
    description: "Background voices detected in student environment.",
    resolved: true,
  },
  {
    id: 5,
    student: {
      id: "ED2025",
      name: "Emily Davis",
      exam: "Physics",
    },
    type: "Suspicious Movement",
    time: "10:32 AM",
    severity: "warning",
    description: "Unusual hand movements detected below camera view.",
    resolved: true,
  },
  {
    id: 6,
    student: {
      id: "JW2026",
      name: "James Wilson",
      exam: "Chemistry",
    },
    type: "Identity Verification Failed",
    time: "09:28 AM",
    severity: "critical",
    description: "Initial identity verification failed. Manual verification required.",
    resolved: true,
  },
]

export default function OnlineAlerts() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeAlerts, setActiveAlerts] = useState(alerts.filter((alert) => !alert.resolved))
  const [resolvedAlerts, setResolvedAlerts] = useState(alerts.filter((alert) => alert.resolved))

  const handleResolve = (id: number) => {
    const alertToResolve = activeAlerts.find((alert) => alert.id === id)
    if (alertToResolve) {
      const updatedAlert = { ...alertToResolve, resolved: true }
      setActiveAlerts(activeAlerts.filter((alert) => alert.id !== id))
      setResolvedAlerts([updatedAlert, ...resolvedAlerts])
    }
  }

  const filteredActiveAlerts = activeAlerts.filter(
    (alert) =>
      alert.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.student.exam.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredResolvedAlerts = resolvedAlerts.filter(
    (alert) =>
      alert.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.student.exam.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-accent" />
            Exam Alerts
          </CardTitle>
          <CardDescription>AI-detected suspicious activities during exams</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search alerts..."
              className="pl-8 w-[200px] md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="active">
          <TabsList className="mb-4">
            <TabsTrigger value="active" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
              Active Alerts ({activeAlerts.length})
            </TabsTrigger>
            <TabsTrigger
              value="resolved"
              className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            >
              Resolved ({resolvedAlerts.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {filteredActiveAlerts.length > 0 ? (
              filteredActiveAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border flex items-start gap-4 ${
                    alert.severity === "critical" ? "bg-red-50 border-red-200" : "bg-yellow-50 border-yellow-200"
                  }`}
                >
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${alert.student.name.charAt(0)}`} />
                    <AvatarFallback>{alert.student.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{alert.type}</h3>
                      <Badge
                        className={
                          alert.severity === "critical"
                            ? "bg-red-100 text-red-800 hover:bg-red-100"
                            : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                        }
                      >
                        {alert.severity === "critical" ? "Critical" : "Warning"}
                      </Badge>
                    </div>
                    <p className="text-sm mt-1">{alert.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">{alert.student.name}</span> • {alert.student.exam} • {alert.time}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-8">
                          View
                        </Button>
                        <Button
                          size="sm"
                          className="h-8 bg-primary hover:bg-primary/90 text-white"
                          onClick={() => handleResolve(alert.id)}
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Resolve
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>No active alerts found</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="resolved" className="space-y-4">
            {filteredResolvedAlerts.length > 0 ? (
              filteredResolvedAlerts.map((alert) => (
                <div key={alert.id} className="p-4 rounded-lg border border-gray-200 bg-gray-50 flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${alert.student.name.charAt(0)}`} />
                    <AvatarFallback>{alert.student.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-muted-foreground">{alert.type}</h3>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Resolved</Badge>
                    </div>
                    <p className="text-sm mt-1 text-muted-foreground">{alert.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">{alert.student.name}</span> • {alert.student.exam} • {alert.time}
                      </div>
                      <Button variant="outline" size="sm" className="h-8">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>No resolved alerts found</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

