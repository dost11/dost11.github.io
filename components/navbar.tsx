"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations("nav")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const changeLanguage = (newLocale: string) => {
    const currentPath = pathname.replace(/^\/[^/]+/, "")
    router.push(`/${newLocale}${currentPath}`)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
      }`}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">Dost11</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="#innovations"
            onClick={(e) => scrollToSection(e, "innovations")}
            className="transition-colors hover:text-primary"
          >
            {t("innovations")}
          </Link>
          <Link
            href="#solutions"
            onClick={(e) => scrollToSection(e, "solutions")}
            className="transition-colors hover:text-primary"
          >
            {t("solutions")}
          </Link>
          <Link
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="transition-colors hover:text-primary"
          >
            {t("about")}
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => changeLanguage("en")}
            className={pathname.startsWith("/en") ? "bg-primary text-primary-foreground" : ""}
          >
            EN
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => changeLanguage("ko")}
            className={pathname.startsWith("/ko") ? "bg-primary text-primary-foreground" : ""}
          >
            KO
          </Button>
        </div>
      </div>
    </header>
  )
}

