import { Button } from "@/components/ui/button"

export default function VideoScooverPage() {
  return (
    <div className="container max-w-screen-xl py-12 md:py-24">
      <h1 className="text-4xl font-bold mb-8">VideoScoover</h1>
      <p className="text-xl mb-6">
        VideoScoover is our cutting-edge AI-powered video analysis and content recommendation system. It helps content
        creators and platforms deliver personalized video experiences to their audiences.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Advanced video content analysis</li>
        <li>Personalized recommendation algorithms</li>
        <li>Real-time viewer engagement tracking</li>
        <li>Content performance analytics</li>
      </ul>
      <Button size="lg">Request a Demo</Button>
    </div>
  )
}

