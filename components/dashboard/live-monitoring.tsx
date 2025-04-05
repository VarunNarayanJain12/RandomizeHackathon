"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Maximize2, Pause, Play, RefreshCw } from "lucide-react"
import Image from "next/image"

export default function LiveMonitoring() {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-primary/5 flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5 text-primary" />
            Live Monitoring
          </CardTitle>
          <CardDescription>Real-time exam surveillance with AI detection</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            <span className="mr-1 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Live
          </Badge>
          <Button variant="ghost" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="camera1">
          <div className="border-b px-4">
            <TabsList className="bg-transparent h-12">
              <TabsTrigger
                value="camera1"
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
              >
                Camera 1 - Main Hall
              </TabsTrigger>
              <TabsTrigger
                value="camera2"
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
              >
                Camera 2 - Side Room
              </TabsTrigger>
              <TabsTrigger
                value="camera3"
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
              >
                Camera 3 - Online Exam
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="camera1" className="m-0">
            <div className="relative">
              <div className="aspect-video w-full">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Live camera feed"
                  width={1200}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* AI Detection Overlays */}
              <div className="absolute top-[20%] left-[30%] w-[100px] h-[100px] border-2 border-accent rounded-md">
                <div className="absolute -top-6 left-0 bg-accent text-white text-xs px-2 py-1 rounded">
                  Suspicious Activity
                </div>
              </div>

              <div className="absolute top-[40%] left-[60%] w-[80px] h-[80px] border-2 border-green-500 rounded-md">
                <div className="absolute -top-6 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded">Normal</div>
              </div>

              {/* Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-black/50 hover:bg-black/70 text-white"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <div className="bg-black/50 text-white text-xs px-2 py-1 rounded">Live: 00:45:12</div>
                </div>
                <div className="bg-black/50 text-white text-xs px-2 py-1 rounded">AI Detection: Active</div>
              </div>
            </div>

            <div className="p-4 bg-secondary/50 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Main Examination Hall</h4>
                  <p className="text-sm text-muted-foreground">42 students monitored • 2 alerts in last hour</p>
                </div>
                <Badge className="bg-accent">1 Active Alert</Badge>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="camera2" className="m-0">
            <div className="aspect-video w-full bg-gray-100 flex items-center justify-center">
              <p className="text-muted-foreground">Camera 2 feed would display here</p>
            </div>
          </TabsContent>

          <TabsContent value="camera3" className="m-0">
            <div className="aspect-video w-full bg-gray-100 flex items-center justify-center">
              <p className="text-muted-foreground">Camera 3 feed would display here</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

