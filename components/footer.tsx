import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center text-sm text-white">
          <p className="mb-4">Dost11 Inc.</p>
          <p className="mb-4">
            <span className="mx-2">CEO: Hyogeol Yang</span>
            <span className="mx-2">|</span>
            <span className="mx-2">Business Registration Number: 478-87-02968</span>
          </p>
          <p className="mb-4">
            <span className="mx-2">Email: hello@dost11.com</span>
          </p>
          <p className="mb-6">
            <span className="mx-2">Address: 11F, 255 Seongam-ro, Mapo-gu, Seoul, Korea</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

