import "../globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { notFound } from "next/navigation"
// import { routing } from '@/i18n/routing'
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dost11 - Cutting-Edge Software Solutions",
  description: "Dost11 delivers innovative, high-performance software solutions for businesses of the future.",
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ko" }]
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()

  if (!messages) notFound()

  // if (!routing.locales.includes(locale)) {
  //   notFound();
  // }

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased flex flex-col min-h-screen`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MouseMoveEffect />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

