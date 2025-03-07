// import Image from "next/image"
import { useTranslations } from "next-intl"

export default function AboutUs() {
  const t = useTranslations("about")

  return (
    <section id="about" className="py-24">
      <div className="container max-w-screen-xl">
        <div className="mx-auto max-w-[58rem] text-center mb-12">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">{t("title")}</h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">{t("subtitle")}</p>
        </div>
        {/* <div className="grid md:grid-cols-2 gap-12 items-center"> */}
        <div className="grid gap-12 items-center px-6 md:px-32 lg:px-60">
          <div>
            <h3 className="text-2xl font-semibold mb-4">{t("history.title")}</h3>
            <p className="mb-6">{t("history.description")}</p>
            <h4 className="text-xl font-semibold mb-2">{t("features.title")}</h4>
            <ul className="list-disc list-inside space-y-2">
              {
                [
                  'item-1',
                  'item-2',
                  'item-3',
                  'item-4'
                ].map((item, index) => (
                  <li key={index}>{t(`features.items.${item}`)}</li>
                ))
              }
            </ul>
          </div>
          {/* <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/dost11-about_us.png?height=400&width=600" alt="Dost11 Team" layout="fill" objectFit="cover" />
          </div> */}
        </div>
      </div>
    </section>
  )
}

