import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center text-sm text-white">
          <p className="sm:mb-4">
            {t("company name")}
          </p>
          <p className="sm:mb-4 flex flex-col sm:flex-row justify-center items-center">
            <span className="mx-2">
              {t("ceo")}
            </span>
            <span className="hidden sm:block mx-2">|</span>
            <span className="mx-2">
              {t("brn")}
            </span>
          </p>
          <p className="sm:mb-4">
            <span className="mx-2">
              {t("email")}
            </span>
          </p>
          <p className="mb-2 sm:mb-6">
            <span className="mx-2">
              {t("address")}
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

