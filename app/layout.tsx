import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { redirect } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dost11 - Cutting-Edge Software Solutions",
  description: "Dost11 delivers innovative, high-performance software solutions for businesses of the future.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Dost11 - Cutting-Edge Software Solutions</title>
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}