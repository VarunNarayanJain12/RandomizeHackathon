import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="font-bold text-xl text-white">ExamGuard AI</span>
            </div>
            <p className="text-primary-foreground/70">
              AI-powered exam integrity solutions for educational institutions worldwide.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/70 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/online" className="text-primary-foreground/70 hover:text-white">
                  Online Monitoring
                </Link>
              </li>
              <li>
                <Link href="/offline" className="text-primary-foreground/70 hover:text-white">
                  Offline Monitoring
                </Link>
              </li>
              <li>
                <Link href="/hybrid" className="text-primary-foreground/70 hover:text-white">
                  Hybrid Solutions
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-primary-foreground/70 hover:text-white">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/70 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-primary-foreground/70 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-foreground/70 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/70 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-primary-foreground/70 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-foreground/70 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-primary-foreground/70 hover:text-white">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-primary-foreground/70 hover:text-white">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm">
            &copy; {new Date().getFullYear()} ExamGuard AI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm text-primary-foreground/70">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

