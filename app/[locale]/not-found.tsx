import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h2 className="text-4xl font-bold mb-4">Not Found</h2>
      <p className="text-muted-foreground mb-8">Could not find requested resource</p>
      <Link href="/" className="text-primary hover:underline">
        Return Home
      </Link>
    </div>
  )
}