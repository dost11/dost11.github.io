import Link from "next/link"

// 정적 페이지에서 언어 선택 UI 표시
export default function RootPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center">Dost11</h1>
      <p className="text-xl mb-12 text-center max-w-xl">Loading...</p>
    </div>
  )
}

