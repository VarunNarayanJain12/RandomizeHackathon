"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Search, Filter, ArrowUpDown, Eye } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const students = [
  {
    id: "SJ2023",
    name: "Sarah Johnson",
    exam: "Advanced Mathematics",
    startTime: "10:15 AM",
    duration: "45:12",
    status: "active",
    alerts: 0,
  },
  {
    id: "MB2024",
    name: "Michael Brown",
    exam: "Computer Science",
    startTime: "10:00 AM",
    duration: "1:00:23",
    status: "active",
    alerts: 2,
  },
  {
    id: "ED2025",
    name: "Emily Davis",
    exam: "Physics",
    startTime: "09:45 AM",
    duration: "1:15:08",
    status: "active",
    alerts: 1,
  },
  {
    id: "JW2026",
    name: "James Wilson",
    exam: "Chemistry",
    startTime: "09:30 AM",
    duration: "1:30:45",
    status: "warning",
    alerts: 3,
  },
  {
    id: "AT2027",
    name: "Anna Thompson",
    exam: "Biology",
    startTime: "10:30 AM",
    duration: "30:18",
    status: "active",
    alerts: 0,
  },
  {
    id: "RL2028",
    name: "Robert Lee",
    exam: "History",
    startTime: "10:15 AM",
    duration: "45:32",
    status: "active",
    alerts: 1,
  },
  {
    id: "SM2029",
    name: "Sophia Martinez",
    exam: "English Literature",
    startTime: "09:15 AM",
    duration: "1:45:10",
    status: "critical",
    alerts: 5,
  },
]

export default function OnlineStudentList() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.exam.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Active Students</CardTitle>
          <CardDescription>Students currently taking online exams</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search students..."
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
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">
                  <div className="flex items-center gap-1">
                    Student
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    Exam
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead className="w-[100px]">Start Time</TableHead>
                <TableHead className="w-[100px]">Duration</TableHead>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead className="w-[80px]">Alerts</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${student.name.charAt(0)}`} />
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-xs text-muted-foreground">ID: {student.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{student.exam}</TableCell>
                  <TableCell>{student.startTime}</TableCell>
                  <TableCell>{student.duration}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        student.status === "active"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : student.status === "warning"
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            : "bg-red-100 text-red-800 hover:bg-red-100"
                      }
                    >
                      {student.status === "active" ? "Normal" : student.status === "warning" ? "Warning" : "Critical"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {student.alerts > 0 ? (
                      <Badge className="bg-accent text-white">{student.alerts}</Badge>
                    ) : (
                      <span className="text-muted-foreground">None</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Send Warning</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">End Exam</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

