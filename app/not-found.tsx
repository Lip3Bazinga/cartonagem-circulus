import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Página não encontrada | Cartonagem Circulu's",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <header className="border-b border-[#E5E5E5]">
        <div className="container mx-auto px-6 py-5">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-circulus-completo.png"
              alt="Circulus Logo"
              width={110}
              height={80}
              className="w-[110px] h-auto object-contain"
            />
          </Link>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-md">
          <span className="text-[#C0111F] text-6xl font-bold tracking-tight block mb-4">404</span>
          <h1 className="text-2xl font-bold text-[#0D0D0D] mb-3">Página não encontrada</h1>
          <p className="text-[#606060] mb-8 leading-relaxed">
            A página que você procura não existe ou foi movida. Volte para a página inicial para continuar
            navegando.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#C0111F] hover:bg-[#a00e1a] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  )
}
