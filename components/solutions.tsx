import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export default function Solutions() {
  const t = useTranslations("solutions")

  const solutions = [
    {
      title: t("videoScoover.title"),
      description: t("videoScoover.description"),
      link: "/solutions/videoscoover",
    },
    {
      title: t("aiCG.title"),
      description: t("aiCG.description"),
      link: "/solutions/ai-cg",
    },
    {
      title: t("seniorContents.title"),
      description: t("seniorContents.description"),
      link: "/solutions/senior-contents",
    },
  ]

  return (
    <section id="solutions" className="py-24">
      <div className="container max-w-screen-xl">
        <div className="mx-auto max-w-[58rem] text-center mb-12">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">{t("title")}</h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">{t("description")}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div key={solution.title} className="relative overflow-hidden rounded-lg border bg-background p-8">
              <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-muted-foreground mb-6">{solution.description}</p>
              {/* <Link href={solution.link}>
                <Button variant="outline">
                  {t("learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

