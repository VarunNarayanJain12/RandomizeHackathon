"use client"

import { useEffect, useRef, useState } from "react"
import DashboardLayout from "@/components/dashboard/layout"
import Breadcrumbs from "@/components/breadcrumbs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Camera } from "lucide-react"


export default function OfflineMonitoringPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Getting Started", href: "/getting-started" },
    { label: "Offline Monitoring", href: "/dashboard/offline-monitoring", active: true }
  ]

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [prediction, setPrediction] = useState("")

  useEffect(() => {
    const getCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (err) {
        console.error("Error accessing webcam:", err)
      }
    }

    getCamera()
  }, [])

  // Send frame to backend every few seconds (mocked logic)
  useEffect(() => {
    const interval = setInterval(async () => {
      if (!canvasRef.current || !videoRef.current) return

      const ctx = canvasRef.current.getContext("2d")
      if (!ctx) return

      ctx.drawImage(videoRef.current, 0, 0, 224, 224) // example size
      const dataUrl = canvasRef.current.toDataURL("image/jpeg")

      try {
        const res = await fetch("http://localhost:8000/predict-yolov8", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ image: dataUrl })
        })

        const data = await res.json()
        setPrediction(data.result || "No result")
      } catch (err) {
        console.error("Prediction error:", err)
        setPrediction("Error")
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Offline Exam Monitoring (CCTV-Based)</h1>
          <p className="text-muted-foreground">Monitor physical exam environments using AI-powered CCTV analysis.</p>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Camera className="h-5 w-5" />
            </div>
            <div>
              <CardTitle>Offline Monitoring Dashboard</CardTitle>
              <CardDescription>Live CCTV feed with AI-based monitoring results below.</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg overflow-hidden border bg-secondary">
                <video ref={videoRef} autoPlay playsInline muted className="w-full h-full" />
              </div>
              <div className="flex flex-col justify-center items-center bg-muted p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2">Prediction:</h3>
                <p className="text-muted-foreground">{prediction || "Waiting for input..."}</p>
              </div>
            </div>
            <canvas ref={canvasRef} width="224" height="224" className="hidden" />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
