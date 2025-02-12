import { Button } from "@/components/ui/button"

export default function SeniorContentsPage() {
  return (
    <div className="container max-w-screen-xl py-12 md:py-24">
      <h1 className="text-4xl font-bold mb-8">Senior Contents</h1>
      <p className="text-xl mb-6">
        Senior Contents is our specialized content creation and curation service designed to meet the unique needs and
        interests of the senior demographic.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Approach:</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Age-appropriate content selection</li>
        <li>Accessibility-focused design</li>
        <li>Health and wellness information</li>
        <li>Engaging educational materials</li>
      </ul>
      <Button size="lg">Learn More</Button>
    </div>
  )
}

