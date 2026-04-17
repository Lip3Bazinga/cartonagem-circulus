"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Printer, Layers, Package, Scissors, Monitor, Palette } from "lucide-react"

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

export function TechnologySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

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

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#606060] text-lg leading-relaxed text-center max-w-4xl mx-auto mb-16"
        >
          A Cartonagem Circulu&apos;s possui sistemas tecnológicos que garantem a impressão e o bom atendimento. Investimos constantemente em tecnologia de infraestrutura e equipamento para sempre oferecer o melhor em impressão, acabamento e atendimento. Nossos profissionais são capacitados com atualizações do mercado gráfico e nossos equipamentos são calibrados e mantidos de forma sempre para garantir a qualidade final.
        </motion.p>

        {/* Equipment Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {equipment.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 h-full border border-[#E5E5E5] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                {/* Red accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#C0111F] group-hover:w-full transition-all duration-500" />
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#C0111F]/10 flex items-center justify-center mb-5 group-hover:bg-[#C0111F]/20 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-[#C0111F]" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-[#0D0D0D] mb-2 group-hover:text-[#C0111F] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#606060] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
