"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Cpu, Leaf, Layers, HeartHandshake } from "lucide-react"

const differentials = [
  {
    icon: Cpu,
    title: "Tecnologia de Ponta",
    description: "Impressoras Roland 800, KBA Rapida, coladeiras BOBST Expert e sistema de gerenciamento de cores GMG para resultados gráficos premium.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade Certificada",
    description: "Materiais sustentáveis com certificação FSC®, comprometidos com a preservação ambiental e o uso responsável de recursos florestais.",
  },
  {
    icon: Layers,
    title: "Variedade de Soluções",
    description: "12 segmentos atendidos, do alimentício ao automotivo, com embalagens em papel cartão, micro ondulado e papelão com acabamentos diversificados.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Personalizado",
    description: "Cada projeto é único. Do briefing ao produto final, nossa equipe cuida de cada detalhe para garantir que sua embalagem reflita a identidade da sua marca.",
  },
]

export function DifferentialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="diferenciais"
      className="relative py-24 md:py-32 bg-[#F5F5F5]"
    >
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C0111F] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] tracking-tight">
            POR QUE ESCOLHER A CIRCULU&apos;S?
          </h2>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {differentials.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full flex gap-6 border border-[#E5E5E5] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                {/* Red accent line on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C0111F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-[#C0111F]/10 flex items-center justify-center group-hover:bg-[#C0111F]/20 transition-colors duration-300">
                    <diff.icon className="w-8 h-8 text-[#C0111F]" />
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-[#0D0D0D] mb-3 group-hover:text-[#C0111F] transition-colors duration-300">
                    {diff.title}
                  </h3>
                  <p className="text-[#606060] leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
