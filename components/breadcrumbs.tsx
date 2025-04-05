import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href: string
  active?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground" />}
            <Link
              href={item.href}
              className={cn(
                "hover:text-primary transition-colors",
                item.active ? "font-medium text-foreground" : "text-muted-foreground",
              )}
              aria-current={item.active ? "page" : undefined}
            >
              {index === 0 ? (
                <span className="flex items-center">
                  <Home className="h-4 w-4 mr-1" />
                  <span className="sr-only">{item.label}</span>
                </span>
              ) : (
                item.label
              )}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}

