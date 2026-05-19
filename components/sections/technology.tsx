"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    src: "/images/Impressora offset 1.jpg",
    alt: "Impressora Offset 1",
    category: "Impressão",
    title: "Impressora Offset 1",
    description: "Impressão 4 cores com acabamento de verniz base d'água. Fidelidade de cores, velocidade e alta tecnologia em impressão.",
  },
  {
    src: "/images/Impressora offset 2.jpg",
    alt: "Impressora Offset 2",
    category: "Impressão",
    title: "Impressora Offset 2",
    description: "Impressão 6 cores com acabamento de verniz base d'água. Qualidade, cores especiais como dourado, prata ou florescentes, além do grande formato 100x142.",
  },
  {
    src: "/images/Acopladeira.jpg",
    alt: "Acopladeira",
    category: "Montagem",
    title: "Acopladeira",
    description: "Alta produção e perfeição no registro de colagem de papel cartão com micro ondulado, papelão e empastados.",
  },
  {
    src: "/images/Corte e vinco 2.jpg",
    alt: "Corte e Vinco 2",
    category: "Corte",
    title: "Corte e Vinco 2",
    description: "Equipamento de alta tecnologia e precisão em corte e vinco automático.",
  },
  {
    src: "/images/Cartucheira.jpg",
    alt: "Cartucheira",
    category: "Colagem",
    title: "Cartucheira",
    description: "Tecnologia, qualidade e confiabilidade para colagem em cartuchos lateral, fundo automático e colagem de 4 e 6 pontos.",
  },
  {
    src: "/images/P&D.jpg",
    alt: "P&D – Estúdio de Pré-Impressão",
    category: "Design",
    title: "P&D – Estúdio de Pré-Impressão",
    description: "Desenvolvimento e aprovação de artes com workflow profissional e Gestão de Cores GMG.",
  },
  {
    src: "/images/Empilhadeira.jpg",
    alt: "Empilhadeira",
    category: "Logística",
    title: "Empilhadeira",
    description: "Trabalhamos com ótimos parceiros no fornecimento de matéria-prima, agregando excelente acabamento e resistência para sua embalagem.",
  },
  {
    src: "/images/Caminhão.jpg",
    alt: "Caminhão",
    category: "Entrega",
    title: "Caminhão",
    description: "Temos frota própria e apoio logístico das melhores empresas de transporte do Brasil, que garante o cumprimento de tempo em produção x entrega.",
  },
  {
    src: "/images/Showroom.jpg",
    alt: "Showroom",
    category: "Showroom",
    title: "Showroom",
    description: "Soluções em embalagens personalizadas, entregando resistência, acabamentos e toda a funcionalidade para o seu negócio.",
  },
  {
    src: "/images/Aperto de mão.jpg",
    alt: "Parceria",
    category: "Parceria",
    title: "Parceria",
    description: "Mais do que fabricar embalagens, entregamos soluções que protegem e valorizam o seu produto. Venha firmar uma parceria conosco.",
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
      className="relative w-full py-12 bg-[#0D0D0D] flex justify-center overflow-hidden"
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />
      {/* Diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* Slider container — 85% width, centered */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-2xl w-[85%]"
        style={{ height: "85vh", minHeight: 500 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* All slides stacked — cross-fade via opacity transition */}
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0"
            style={{
              opacity: i === current ? 1 : 0,
              transition: "opacity 900ms cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: i === current ? 1 : 0,
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="85vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
          </div>
        ))}

        {/* Section label — top center */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 text-center z-10 whitespace-nowrap"
        >
          <div className="backdrop-blur-md bg-black/40 border border-white/20 rounded-2xl px-8 py-4 shadow-lg">
            <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">
              Infraestrutura
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mt-1 drop-shadow-md">
              Nossa Tecnologia
            </h2>
          </div>
        </motion.div>

        {/* Description balloon — bottom center */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-10 px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="backdrop-blur-md bg-white/15 border border-white/25 rounded-2xl shadow-2xl px-8 py-6 max-w-xl w-full text-center"
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/70 bg-white/20 px-3 py-1 rounded-full mb-3">
                {slides[current].category}
              </span>
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
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/40 border border-white/20 flex items-center justify-center hover:bg-black/60 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={next}
          aria-label="Próxima imagem"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/40 border border-white/20 flex items-center justify-center hover:bg-black/60 transition-colors"
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
      </div>
    </section>
  )
}
