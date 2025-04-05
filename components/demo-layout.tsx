import type React from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-secondary to-background">{children}</main>
      <Footer />
    </div>
  )
}

