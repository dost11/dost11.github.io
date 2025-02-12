import { Button } from "@/components/ui/button"

export default function AICGPage() {
  return (
    <div className="container max-w-screen-xl py-12 md:py-24">
      <h1 className="text-4xl font-bold mb-8">AI CG</h1>
      <p className="text-xl mb-6">
        AI CG is our state-of-the-art AI-driven computer graphics generation solution. It revolutionizes the way
        industries create and utilize visual content.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Applications:</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Film and television production</li>
        <li>Video game development</li>
        <li>Architectural visualization</li>
        <li>Virtual and augmented reality experiences</li>
      </ul>
      <Button size="lg">Explore AI CG</Button>
    </div>
  )
}

