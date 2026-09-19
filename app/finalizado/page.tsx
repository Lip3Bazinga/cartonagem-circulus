"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Check, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

const REDIRECT_DELAY = 10

export default function FinalizadoPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(REDIRECT_DELAY)

  useEffect(() => {
    if (countdown <= 0) {
      router.push("/")
      return
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [countdown, router])

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 bg-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C0111F]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C0111F]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Success Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mb-8"
        >
          <motion.div
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{ opacity: 0, scale: 1.4 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-32 h-32 rounded-full bg-[#C0111F]/20" />
          </motion.div>

          <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-[#C0111F] to-[#a00e1a] shadow-lg shadow-[#C0111F]/30 flex items-center justify-center">
            <motion.div
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <Check className="w-16 h-16 text-white" strokeWidth={3} />
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-4 mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D0D0D]">Obrigado!</h1>
          <p className="text-lg md:text-xl text-[#606060]">Sua mensagem foi enviada com sucesso.</p>
          <p className="text-[#909090]">Nossa equipe entrará em contato em breve.</p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#F5F5F5] rounded-full px-6 py-3 border border-[#E5E5E5] shadow-sm">
            <Home className="w-4 h-4 text-[#C0111F]" />
            <span className="text-[#606060] text-sm">Redirecionando em</span>
            <span className="text-2xl font-bold text-[#C0111F] min-w-[2ch] tabular-nums">{countdown}</span>
            <span className="text-[#606060] text-sm">segundos</span>
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-xs mx-auto mb-8"
        >
          <div className="h-1 bg-[#E5E5E5] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C0111F] rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${((REDIRECT_DELAY - countdown) / REDIRECT_DELAY) * 100}%` }}
            />
          </div>
        </motion.div>

        {/* Button */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Button
            onClick={() => router.push("/")}
            size="lg"
            className="group bg-[#C0111F] hover:bg-[#a00e1a] text-white transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Voltar para o início
          </Button>
        </motion.div>
      </div>
    </main>
  )
}
