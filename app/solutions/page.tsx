import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    title: "VideoScoover",
    description: "AI-powered video analysis and content recommendation system.",
    link: "/solutions/videoscoover",
  },
  {
    title: "AI CG",
    description: "Advanced AI-driven computer graphics generation for various industries.",
    link: "/solutions/ai-cg",
  },
  {
    title: "Senior Contents",
    description: "Tailored content creation and curation for the senior demographic.",
    link: "/solutions/senior-contents",
  },
]

export default function SolutionsPage() {
  return (
    <div className="container max-w-screen-xl py-12 md:py-24">
      <h1 className="text-4xl font-bold mb-8">Our Solutions</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution) => (
          <div key={solution.title} className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{solution.title}</h2>
            <p className="text-muted-foreground mb-6">{solution.description}</p>
            <Link href={solution.link}>
              <Button variant="outline">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

