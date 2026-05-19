"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Award, Briefcase, GraduationCap } from "lucide-react"

const teamHighlights = [
  {
    icon: Users,
    value: "50+",
    label: "Colaboradores",
    description: "Profissionais dedicados em todas as áreas",
  },
  {
    icon: Award,
    value: "40+",
    label: "Anos de Experiência",
    description: "Expertise consolidada no mercado",
  },
  {
    icon: Briefcase,
    value: "100%",
    label: "Comprometimento",
    description: "Foco total na qualidade e satisfação",
  },
  {
    icon: GraduationCap,
    value: "Contínua",
    label: "Capacitação",
    description: "Treinamentos e atualizações constantes",
  },
]

export function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="equipe"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
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
            Nossos Colaboradores
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] tracking-tight mb-6">
            Nosso Time
          </h2>
          <p className="text-[#606060] text-lg leading-relaxed max-w-3xl mx-auto">
            O sucesso da Cartonagem Circulu&apos;s é construído por uma equipe de profissionais altamente qualificados e comprometidos com a excelência em cada etapa do processo produtivo.
          </p>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">
            Pessoas que fazem a diferença
          </h3>
          <p className="text-[#606060] leading-relaxed">
            Nossa equipe é formada por profissionais experientes e constantemente atualizados com as mais recentes tendências do mercado gráfico. Cada colaborador é peça fundamental para garantir a qualidade e excelência que nossos clientes esperam.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {teamHighlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="bg-[#F5F5F5] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C0111F]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C0111F]/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-[#C0111F]" />
              </div>
              <span className="text-2xl font-bold text-[#C0111F] block">{item.value}</span>
              <p className="text-sm font-semibold text-[#0D0D0D] mt-1">{item.label}</p>
              <p className="text-xs text-[#606060] mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
