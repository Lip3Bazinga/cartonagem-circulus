"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Palette, Printer, Scissors, Package, Truck } from "lucide-react"

const steps = [
  {
    icon: Palette,
    title: "Criação e Arte",
    description: "Desenvolvimento do layout e estrutura da embalagem com nossa equipe de design",
  },
  {
    icon: Printer,
    title: "Impressão de Alta Precisão",
    description: "Impressoras Roland e KBA Rapida com qualidade gráfica superior e gerenciamento de cores GMG",
  },
  {
    icon: Scissors,
    title: "Corte e Vinco",
    description: "Equipamentos BOBST Commercial de última geração para cortes precisos",
  },
  {
    icon: Package,
    title: "Montagem e Acabamento",
    description: "Coladeira Bobst Expert, laminação e acabamentos sofisticados",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Logística eficiente para entrega em todo o Brasil com agilidade e pontualidade",
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#F5F5F5] overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[#C0111F] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Etapas de Produção
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] tracking-tight">
            NOSSO PROCESSO
          </h2>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-[60px] left-0 right-0 h-0.5 bg-[#E5E5E5]" />
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#C0111F] flex items-center justify-center text-white font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                {/* Card */}
                <div className="bg-white rounded-2xl p-6 mt-16 h-full border border-[#E5E5E5] shadow-sm hover:shadow-md transition-all duration-300 group">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#C0111F]/10 flex items-center justify-center mb-5 group-hover:bg-[#C0111F]/20 transition-colors duration-300 mx-auto">
                    <step.icon className="w-7 h-7 text-[#C0111F]" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#0D0D0D] mb-2 text-center group-hover:text-[#C0111F] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#606060] text-sm text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-[#E5E5E5]" />
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-16"
              >
                {/* Step Number */}
                <div className="absolute left-2 top-0 w-8 h-8 rounded-full bg-[#C0111F] flex items-center justify-center text-white font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                {/* Card */}
                <div className="bg-white rounded-xl p-5 border border-[#E5E5E5] shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-[#C0111F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C0111F]/20 transition-colors duration-300">
                      <step.icon className="w-6 h-6 text-[#C0111F]" />
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="text-base font-bold text-[#0D0D0D] mb-1 group-hover:text-[#C0111F] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-[#606060] text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
