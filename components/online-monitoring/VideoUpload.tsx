"use client"

import { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function VideoUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null)
  }

  const handleUpload = async () => {
    if (!file) return
    setLoading(true)
    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await axios.post("http://127.0.0.1:8000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      setResult(response.data.result)
    } catch (err) {
      console.error("Upload error:", err)
      setResult("Error during prediction")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <Input type="file" accept="video/*" onChange={handleFileChange} />
      <Button onClick={handleUpload} disabled={loading || !file}>
        {loading ? "Uploading..." : "Upload & Predict"}
      </Button>
      {result && (
        <div className="text-lg font-semibold">
          Prediction Result: <span className="text-primary">{result}</span>
        </div>
      )}
    </div>
  )
}
