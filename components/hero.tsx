import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="relative container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent z-0" />
      <div className="relative z-10 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {t("title")}
          <br />
          <span className="text-primary">{t("subtitle")}</span>
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {t("description")}
        </p>
      </div>
      <div className="relative z-10 flex gap-4">
        <Button size="lg">
          {t("exploreSolutions")}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg">
          {t("scheduleDemo")}
        </Button>
      </div>
    </section>
  )
}

