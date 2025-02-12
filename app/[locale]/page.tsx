import Hero from "@/components/hero"
import Innovations from "@/components/features"
import Solutions from "@/components/solutions"
import AboutUs from "@/components/about-us"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Innovations />
        <Solutions />
        <AboutUs />
      </div>
    </div>
  )
}

