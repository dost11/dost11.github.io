import { Brain, Cloud, Shield, Zap } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Innovations() {
  const t = useTranslations("innovations")

  const features = [
    {
      name: t("features.ai.title"),
      description: t("features.ai.description"),
      icon: Brain,
    },
    {
      name: t("features.cloud.title"),
      description: t("features.cloud.description"),
      icon: Cloud,
    },
    {
      name: t("features.security.title"),
      description: t("features.security.description"),
      icon: Shield,
    },
    {
      name: t("features.performance.title"),
      description: t("features.performance.description"),
      icon: Zap,
    },
  ]

  return (
    <section id="innovations" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">{t("title")}</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">{t("description")}</p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

