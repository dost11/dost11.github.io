"use client"

import { NextIntlClientProvider } from "next-intl"
import type React from "react"

export default function ClientProvider({
  children,
  messages,
  locale,
}: {
  children: React.ReactNode
  messages: any
  locale: string
}) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  )
}

