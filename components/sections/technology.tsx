"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Printer, Layers, Package, Scissors, Monitor, Palette, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const equipment = [
  {
    icon: Printer,
    title: "Impressora Roland 800",
    description: "Impressão digital de grande formato para provas e pequenas tiragens",
  },
  {
    icon: Printer,
    title: "Impressora KBA Rapida",
    description: "Impressão offset de alta velocidade com qualidade gráfica superior",
  },
  {
    icon: Layers,
    title: "Acopladora ASPIRE cs1416",
    description: "Equipamento de acabamento e acoplagem de alta precisão",
  },
  {
    icon: Package,
    title: "Coladeira Bobst Expert",
    description: "Colagem automática de caixas com máxima precisão",
  },
  {
    icon: Scissors,
    title: "Bobst Commercial",
    description: "Corte e vinco de última geração para embalagens complexas",
  },
  {
    icon: Monitor,
    title: "Estúdio de Pré-Impressão",
    description: "Setup completo para desenvolvimento e aprovação de artes",
  },
  {
    icon: Palette,
    title: "Gerenciamento de Cores GMG",
    description: "Sistema de calibração e gestão de cores profissional",
  },
]

const sliderImages = [
  {
    src: "https://cartonagemcirculus.com.br/images/maquinas/roland800.jpg",
    alt: "Impressora Roland 800",
    caption: "Impressora Roland 800",
  },
  {
    src: "https://cartonagemcirculus.com.br/images/maquinas/kba-rapida.jpg",
    alt: "Impressora KBA Rapida",
    caption: "Impressora KBA Rapida",
  },
  {
    src: "https://cartonagemcirculus.com.br/images/maquinas/bobst.jpg",
    alt: "Bobst Commercial",
    caption: "Bobst Commercial",
  },
  {
    src: "https://cartonagemcirculus.com.br/images/maquinas/coladeira.jpg",
    alt: "Coladeira Bobst Expert",
    caption: "Coladeira Bobst Expert",
  },
]

export function TechnologySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
  }, [])

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section
      ref={sectionRef}
      id="tecnologia"
      className="relative py-24 md:py-32 bg-[#F5F5F5] overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-[#C0111F] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Infraestrutura
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] tracking-tight mb-6">
            NOSSA TECNOLOGIA
          </h2>
        </motion.div>

        {/* 70/30 Layout - Content and Slider */}
        <div className="grid lg:grid-cols-10 gap-8 lg:gap-12 mb-16">
          {/* 70% - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="text-[#606060] text-lg leading-relaxed mb-8">
              A Cartonagem Circulu&apos;s possui sistemas tecnológicos que garantem a impressão e o bom atendimento. Investimos constantemente em tecnologia de infraestrutura e equipamento para sempre oferecer o melhor em impressão, acabamento e atendimento. Nossos profissionais são capacitados com atualizações do mercado gráfico e nossos equipamentos são calibrados e mantidos de forma sempre para garantir a qualidade final.
            </p>

            {/* Equipment Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {equipment.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-4 h-full border border-[#E5E5E5] shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-[#C0111F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C0111F]/20 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-[#C0111F]" />
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="text-sm font-bold text-[#0D0D0D] mb-1 group-hover:text-[#C0111F] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[#606060] text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 30% - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={sliderImages[currentSlide].src}
                    alt={sliderImages[currentSlide].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium">
                      {sliderImages[currentSlide].caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors z-10"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5 text-[#0D0D0D]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors z-10"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5 text-[#0D0D0D]" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-[#C0111F] w-6"
                        : "bg-white/60 hover:bg-white"
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
