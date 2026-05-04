"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    src: "/images/maquinas/impressora-offset.jpg",
    alt: "Impressão offset de alta velocidade",
    category: "Impressão",
    title: "Impressão offset de alta velocidade",
    description: "Qualidade gráfica superior em grandes volumes com consistência total de cores e detalhes.",
  },
  {
    src: "/images/maquinas/corte-vinco.jpg",
    alt: "Corte e vinco de última geração",
    category: "Corte",
    title: "Corte e vinco de última geração",
    description: "Cortes precisos e vincos perfeitos para qualquer formato de embalagem complexa.",
  },
  {
    src: "/images/maquinas/coladeira.jpg",
    alt: "Colagem automática de caixas",
    category: "Montagem",
    title: "Colagem automática de caixas",
    description: "Montagem com máxima precisão e velocidade para produção em grandes volumes.",
  },
  {
    src: "/images/maquinas/pre-impressao.jpg",
    alt: "Estúdio de pré-impressão",
    category: "Design",
    title: "Estúdio de pré-impressão",
    description: "Desenvolvimento e aprovação de artes com workflow profissional e gestão de cores GMG.",
  },
  {
    src: "/images/maquinas/impressora-offset.jpg",
    alt: "Acoplagem de alta precisão",
    category: "Acabamento",
    title: "Acoplagem de alta precisão",
    description: "Acabamento e acoplagem com encaixe perfeito para embalagens de múltiplas camadas.",
  },
]

export function TechnologySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next, paused])

  return (
    <section
      ref={sectionRef}
      id="tecnologia"
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: 600 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Full-bleed slider background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark gradient overlay — stronger at bottom for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Section label — top left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-10"
      >
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-8 py-4 shadow-lg">
          <span className="text-[#C0111F] text-xs font-semibold tracking-widest uppercase">
            Infraestrutura
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mt-1 drop-shadow-md">
            NOSSA TECNOLOGIA
          </h2>
        </div>
      </motion.div>

      {/* Description balloon — bottom center */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-12 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="backdrop-blur-md bg-white/15 border border-white/25 rounded-2xl shadow-2xl px-8 py-6 max-w-xl w-full text-center"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#C0111F] bg-white/20 px-3 py-1 rounded-full mb-3">
              {slides[current].category}
            </span>
            <h3 className="text-white font-bold text-lg md:text-xl leading-tight mb-2 drop-shadow">
              {slides[current].title}
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              {slides[current].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 mt-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-[#C0111F]"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Imagem anterior"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/40 border border-white/20 flex items-center justify-center hover:bg-black/60 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={next}
        aria-label="Próxima imagem"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/40 border border-white/20 flex items-center justify-center hover:bg-black/60 transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-10">
        <motion.div
          key={current}
          className="h-full bg-[#C0111F]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div>
    </section>
  )
}
