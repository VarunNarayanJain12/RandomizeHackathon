import { CheckCircle, XCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function FeatureComparison() {
  const features = [
    {
      name: "Real-time monitoring",
      online: true,
      offline: true,
      hybrid: true,
    },
    {
      name: "AI-powered behavior analysis",
      online: true,
      offline: true,
      hybrid: true,
    },
    {
      name: "Browser lockdown",
      online: true,
      offline: false,
      hybrid: true,
    },
    {
      name: "Screen recording",
      online: true,
      offline: false,
      hybrid: true,
    },
    {
      name: "Multiple device detection",
      online: true,
      offline: false,
      hybrid: true,
    },
    {
      name: "CCTV integration",
      online: false,
      offline: true,
      hybrid: true,
    },
    {
      name: "Physical environment monitoring",
      online: false,
      offline: true,
      hybrid: true,
    },
    {
      name: "Unauthorized material detection",
      online: true,
      offline: true,
      hybrid: true,
    },
    {
      name: "Real-time alerts",
      online: true,
      offline: true,
      hybrid: true,
    },
    {
      name: "Detailed analytics",
      online: true,
      offline: true,
      hybrid: true,
    },
    {
      name: "Video evidence recording",
      online: true,
      offline: true,
      hybrid: true,
    },
    {
      name: "LMS integration",
      online: true,
      offline: false,
      hybrid: true,
    },
  ]

  return (
    <div className="rounded-lg border shadow overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-orange-50">
            <TableHead className="w-[300px]">Feature</TableHead>
            <TableHead className="text-center">Online Monitoring</TableHead>
            <TableHead className="text-center">Offline (CCTV) Monitoring</TableHead>
            <TableHead className="text-center">Hybrid Solution</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, i) => (
            <TableRow key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <TableCell className="font-medium">{feature.name}</TableCell>
              <TableCell className="text-center">
                {feature.online ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                )}
              </TableCell>
              <TableCell className="text-center">
                {feature.offline ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                )}
              </TableCell>
              <TableCell className="text-center">
                {feature.hybrid ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <XCircle className="h-5 w-5 text-gray-300 mx-auto" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

