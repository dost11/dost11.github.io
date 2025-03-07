"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
      // Get the position of the section
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset
      // Subtract some pixels to place the section a bit higher (adjust the value as needed)
      const offsetPosition = sectionPosition - 200

      // Scroll to the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })

      setIsMenuOpen(false) // Close mobile menu after clicking
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
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">Dost11</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex flex-1 items-center space-x-6 text-sm font-medium ml-6">
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

        {/* Language Switcher - Desktop */}
        <div className="hidden sm:flex items-center space-x-2">
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

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="sm:hidden container py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="flex flex-col space-y-4 mb-4">
            <Link
              href="#innovations"
              onClick={(e) => scrollToSection(e, "innovations")}
              className="transition-colors hover:text-primary px-2 py-1"
            >
              {t("innovations")}
            </Link>
            <Link
              href="#solutions"
              onClick={(e) => scrollToSection(e, "solutions")}
              className="transition-colors hover:text-primary px-2 py-1"
            >
              {t("solutions")}
            </Link>
            <Link
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="transition-colors hover:text-primary px-2 py-1"
            >
              {t("about")}
            </Link>
          </nav>
          <div className="flex space-x-2 px-2">
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
      )}
    </header>
  )
}
