import "./globals.css"
import { Inter } from 'next/font/google'
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { appWithTranslation } from 'next-i18next'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dost11 - Cutting-Edge Software Solutions",
  description: "Dost11 delivers innovative, high-performance software solutions for businesses of the future.",
}

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased flex flex-col min-h-screen`}>
        <MouseMoveEffect />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default appWithTranslation(RootLayout)

