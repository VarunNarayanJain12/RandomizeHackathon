"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Maximize2, Pause, Play, RefreshCw, AlertTriangle, BarChart3, Users } from "lucide-react"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VideoUpload from "@/components/online-monitoring/VideoUpload"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const activityData = [
  { time: "09:00", alerts: 2, activity: 95 },
  { time: "09:30", alerts: 0, activity: 92 },
  { time: "10:00", alerts: 1, activity: 88 },
  { time: "10:30", alerts: 3, activity: 96 },
  { time: "11:00", alerts: 2, activity: 91 },
  { time: "11:30", alerts: 0, activity: 87 },
  { time: "12:00", alerts: 4, activity: 94 },
]

const alertTypeData = [
  { name: "Gaze Deviation", value: 42 },
  { name: "Audio Detection", value: 18 },
  { name: "Multiple Faces", value: 8 },
  { name: "Browser Violation", value: 32 },
]

const COLORS = ["#1A237E", "#3949AB", "#5C6BC0", "#7986CB"]

export default function OnlineMonitoringDashboard() {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <>
      <div className="grid gap-6 md:grid-cols-1">

        <Card>
                    <CardHeader>
                      <CardTitle>Live Student View</CardTitle>
                      <CardDescription>
                        View live connected students with real-time status indicators.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <div className="border-2 border-dashed border-gray-500 p-6 rounded-lg bg-[#161b22] flex flex-col items-center justify-center text-gray-300 hover:border-white transition cursor-pointer">
                        <p className="mb-2">Drop file here or</p>
                        <button className="px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-md transition">
                          Select File
                        </button>
                      </div>

                      <div className="mt-4">
                        <label className="block text-sm font-medium mb-1">Paste YouTube or Image URL</label>
                        <input
                          type="text"
                          placeholder="Paste a link..."
                          className="w-full px-3 py-2 rounded-md bg-[#0d1117] border border-gray-600 text-white focus:outline-none focus:border-white"
                        />
                      </div>

                      <div className="mt-4 flex flex-col gap-4">
                        {/* Buttons */}
                        <div className="flex gap-2">
                          {/* Try With Webcam */}
                          <button
                            onClick={async () => {
                              const videoElement = document.getElementById("webcam-preview") as HTMLVideoElement;
                              try {
                                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                                if (videoElement) {
                                  videoElement.srcObject = stream;
                                  videoElement.play();
                                }
                              } catch (err) {
                                console.error("Error accessing webcam:", err);
                                alert("Unable to access webcam. Please check permissions.");
                              }
                            }}
                            className="flex-1 px-4 py-2 bg-[#30363d] hover:bg-[#484f58] text-white rounded-md transition"
                          >
                            Try With Webcam
                          </button>

                          {/* Try On My Machine */}
                          <button
                            onClick={() => {
                              const input = document.createElement("input");
                              input.type = "file";
                              input.accept = "image/*";
                              input.onchange = (event) => {
                                const target = event.target as HTMLInputElement;
                                const file = target.files?.[0];
                                if (file) {
                                  console.log("Selected file:", file);
                                }
                              };
                              input.click();
                            }}
                            className="flex-1 px-4 py-2 bg-[#30363d] hover:bg-[#484f58] text-white rounded-md transition"
                          >
                            Try On My Machine
                          </button>
                        </div>

                        {/* Webcam Preview */}
                        <div className="w-full h-128 bg-black rounded-md overflow-hidden flex items-center justify-center">
                          <video
                            id="webcam-preview"
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                          />
                        </div>
                      </div>


                      
        
                      <div className="mt-6 border rounded-lg p-4 space-y-4">
                        <h3 className="text-lg font-medium">Upload Exam Footage</h3>
                        <p className="text-sm text-muted-foreground">
                          Use the AI model to detect cheating in recorded sessions
                        </p>
                        <VideoUpload />
                      </div>
                    </CardContent>
                  </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-accent" />
              Live Alerts
            </CardTitle>
            <CardDescription>Real-time monitoring alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Alert Status</h4>
                <Badge className="bg-green-500">Normal</Badge>
              </div>
              <Progress value={15} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Normal</span>
                <span>Warning</span>
                <span>Critical</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Recent Activity</h4>

              <div className="p-3 rounded-lg bg-green-50 border border-green-200 flex items-start gap-2">
                <div className="mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-800">Normal Activity</p>
                  <p className="text-xs text-green-700">10:45 AM - Student focused on exam</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200 flex items-start gap-2">
                <div className="mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-yellow-800">Brief Gaze Deviation</p>
                  <p className="text-xs text-yellow-700">10:32 AM - Student looked away briefly</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-green-50 border border-green-200 flex items-start gap-2">
                <div className="mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-800">Identity Verified</p>
                  <p className="text-xs text-green-700">10:15 AM - Student identity confirmed</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-green-50 border border-green-200 flex items-start gap-2">
                <div className="mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-800">Exam Started</p>
                  <p className="text-xs text-green-700">10:15 AM - Student began exam</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Activity Analytics
              </CardTitle>
              <CardDescription>Real-time activity and alert trends</CardDescription>
            </div>
            <Tabs defaultValue="activity">
              <TabsList className="h-8">
                <TabsTrigger
                  value="activity"
                  className="text-xs h-8 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  Activity
                </TabsTrigger>
                <TabsTrigger
                  value="alerts"
                  className="text-xs h-8 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  Alerts
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="activity" stroke="#1A237E" strokeWidth={2} />
                  <Line yAxisId="right" type="monotone" dataKey="alerts" stroke="#FF6F00" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Alert Distribution
            </CardTitle>
            <CardDescription>Types of alerts detected</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={alertTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {alertTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

