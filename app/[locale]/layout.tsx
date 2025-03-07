import "../globals.css"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from 'next-intl/server'
import { notFound } from "next/navigation"
import { routing } from '@/i18n/routing'
import type React from "react"

type Params = Promise<{ locale: never }>

const inter = Inter({ subsets: ["latin"] })
const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
})

export const metadata: Metadata = {
  title: "Dost11 - Cutting-Edge Software Solutions",
  description: "Dost11 delivers innovative, high-performance software solutions for businesses of the future.",
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ko" }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Params
}) {
  const { locale } = await params
  const messages = await getMessages()

  if (!messages) notFound()

  if (!routing.locales.includes(locale)) {
    notFound()
  }

  const fontClassName = locale === "ko" ? pretendard.className : inter.className

  return (
    <html lang={locale} className="dark">
      <body className={`${fontClassName} bg-background text-foreground antialiased flex flex-col min-h-screen break-keep`}>
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
