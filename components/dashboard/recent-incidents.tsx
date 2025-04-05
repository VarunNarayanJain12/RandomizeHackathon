import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, ChevronRight, MoreHorizontal } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const incidents = [
  {
    id: 1,
    student: "Alex Johnson",
    exam: "Advanced Mathematics",
    time: "10:32 AM",
    type: "Unauthorized Materials",
    severity: "high",
  },
  {
    id: 2,
    student: "Sarah Williams",
    exam: "Computer Science",
    time: "11:15 AM",
    type: "Suspicious Movement",
    severity: "medium",
  },
  {
    id: 3,
    student: "Michael Brown",
    exam: "Physics",
    time: "09:45 AM",
    type: "Multiple Devices",
    severity: "high",
  },
  {
    id: 4,
    student: "Emily Davis",
    exam: "Biology",
    time: "10:05 AM",
    type: "Gaze Tracking",
    severity: "low",
  },
]

export default function RecentIncidents() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-accent" />
            Recent Incidents
          </CardTitle>
          <CardDescription>Latest detected cheating incidents</CardDescription>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {incidents.map((incident) => (
            <div
              key={incident.id}
              className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary"
            >
              <Avatar>
                <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${incident.student.charAt(0)}`} />
                <AvatarFallback>{incident.student.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium truncate">{incident.student}</p>
                  <Badge
                    className={
                      incident.severity === "high"
                        ? "bg-red-100 text-red-800 hover:bg-red-100"
                        : incident.severity === "medium"
                          ? "bg-orange-100 text-orange-800 hover:bg-orange-100"
                          : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                    }
                  >
                    {incident.severity}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{incident.exam}</span>
                  <span>{incident.time}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{incident.type}</div>
              </div>
              <Button variant="ghost" size="icon" className="shrink-0">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4">
          View All Incidents
        </Button>
      </CardContent>
    </Card>
  )
}

