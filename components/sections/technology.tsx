"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Printer, Layers, Package, Scissors, Monitor, Palette, ChevronLeft, ChevronRight, Settings, Cog } from "lucide-react"
import Image from "next/image"

const equipment = [
  {
    icon: Printer,
    title: "Impressora Roland 800",
    description: "Impressão digital de grande formato para provas e pequenas tiragens",
    category: "Impressão",
  },
  {
    icon: Printer,
    title: "Impressora KBA Rapida",
    description: "Impressão offset de alta velocidade com qualidade gráfica superior",
    category: "Impressão",
  },
  {
    icon: Layers,
    title: "Acopladora ASPIRE cs1416",
    description: "Equipamento de acabamento e acoplagem de alta precisão",
    category: "Acabamento",
  },
  {
    icon: Package,
    title: "Coladeira Bobst Expert",
    description: "Colagem automática de caixas com máxima precisão",
    category: "Montagem",
  },
  {
    icon: Scissors,
    title: "Bobst Commercial",
    description: "Corte e vinco de última geração para embalagens complexas",
    category: "Corte",
  },
  {
    icon: Monitor,
    title: "Estúdio de Pré-Impressão",
    description: "Setup completo para desenvolvimento e aprovação de artes",
    category: "Design",
  },
  {
    icon: Palette,
    title: "Gerenciamento de Cores GMG",
    description: "Sistema de calibração e gestão de cores profissional",
    category: "Qualidade",
  },
]

const sliderImages = [
  {
    src: "/images/maquinas/impressora-offset.jpg",
    alt: "Impressora Offset KBA Rapida",
    caption: "Impressora KBA Rapida",
  },
  {
    src: "/images/maquinas/corte-vinco.jpg",
    alt: "Bobst Commercial - Corte e Vinco",
    caption: "Bobst Commercial",
  },
  {
    src: "/images/maquinas/coladeira.jpg",
    alt: "Coladeira Bobst Expert",
    caption: "Coladeira Bobst Expert",
  },
  {
    src: "/images/maquinas/pre-impressao.jpg",
    alt: "Estúdio de Pré-Impressão",
    caption: "Estúdio de Pré-Impressão",
  },
]

export function TechnologySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedEquipment, setSelectedEquipment] = useState(0)

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
      className="relative py-24 md:py-32 bg-[#0D0D0D] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C0111F] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Infraestrutura
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            NOSSA TECNOLOGIA
          </h2>
          <p className="text-[#A0A0A0] text-lg leading-relaxed max-w-3xl mx-auto">
            A Cartonagem Circulu&apos;s possui sistemas tecnológicos que garantem a impressão e o bom atendimento. 
            Investimos constantemente em tecnologia de infraestrutura e equipamento para sempre oferecer o melhor em impressão, acabamento e atendimento.
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Image Slider (Full Height) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={sliderImages[currentSlide].src}
                    alt={sliderImages[currentSlide].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#C0111F] flex items-center justify-center">
                      <Cog className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[#C0111F] text-sm font-semibold uppercase tracking-wide">Equipamento</span>
                  </div>
                  <p className="text-white text-xl font-bold">
                    {sliderImages[currentSlide].caption}
                  </p>
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <motion.div
                  className="h-full bg-[#C0111F]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  key={currentSlide}
                />
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
              {sliderImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                    index === currentSlide
                      ? "ring-2 ring-[#C0111F] ring-offset-2 ring-offset-[#0D0D0D]"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right - Equipment List */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#C0111F] flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Nossos Equipamentos</h3>
                <p className="text-[#A0A0A0] text-sm">Tecnologia de ponta em cada etapa</p>
              </div>
            </div>

            {/* Equipment Cards */}
            <div className="space-y-3">
              {equipment.map((item, index) => (
                <motion.button
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  onClick={() => setSelectedEquipment(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                    selectedEquipment === index
                      ? "bg-[#C0111F] shadow-lg shadow-[#C0111F]/20"
                      : "bg-white/5 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      selectedEquipment === index
                        ? "bg-white/20"
                        : "bg-[#C0111F]/20"
                    }`}>
                      <item.icon className={`w-5 h-5 transition-colors duration-300 ${
                        selectedEquipment === index ? "text-white" : "text-[#C0111F]"
                      }`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`font-semibold transition-colors duration-300 ${
                          selectedEquipment === index ? "text-white" : "text-white"
                        }`}>
                          {item.title}
                        </h4>
                        <span className={`text-xs px-2 py-1 rounded-full transition-colors duration-300 ${
                          selectedEquipment === index
                            ? "bg-white/20 text-white"
                            : "bg-[#C0111F]/20 text-[#C0111F]"
                        }`}>
                          {item.category}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                        selectedEquipment === index ? "text-white/80" : "text-[#A0A0A0]"
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-[#C0111F]">7+</p>
                <p className="text-[#A0A0A0] text-sm">Equipamentos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#C0111F]">100%</p>
                <p className="text-[#A0A0A0] text-sm">Calibrados</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#C0111F]">GMG</p>
                <p className="text-[#A0A0A0] text-sm">Certificado</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
