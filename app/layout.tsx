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
  // Redirect to the English version by default
  redirect("/en")
  
  return null
}