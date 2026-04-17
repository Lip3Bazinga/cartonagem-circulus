"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Award, Briefcase, GraduationCap } from "lucide-react"
import Image from "next/image"

const teamHighlights = [
  {
    icon: Users,
    value: "50+",
    label: "Colaboradores",
    description: "Profissionais dedicados em todas as áreas",
  },
  {
    icon: Award,
    value: "38+",
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
            NOSSO TIME
          </h2>
          <p className="text-[#606060] text-lg leading-relaxed max-w-3xl mx-auto">
            O sucesso da Cartonagem Circulu&apos;s é construído por uma equipe de profissionais altamente qualificados e comprometidos com a excelência em cada etapa do processo produtivo.
          </p>
        </motion.div>

        {/* Main Content - Image and Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Team Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://cartonagemcirculus.com.br/images/equipe.jpg"
                alt="Equipe da Cartonagem Circulus"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg">
                <p className="text-[#C0111F] font-bold text-lg">Equipe Circulu&apos;s</p>
                <p className="text-[#606060] text-sm">Juntos desde 1986</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C0111F]/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#C0111F]/5 rounded-xl -z-10" />
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">
              Pessoas que fazem a diferença
            </h3>
            <p className="text-[#606060] leading-relaxed mb-8">
              Nossa equipe é formada por profissionais experientes e constantemente atualizados com as mais recentes tendências do mercado gráfico. Cada colaborador é peça fundamental para garantir a qualidade e excelência que nossos clientes esperam.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {teamHighlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-[#F5F5F5] rounded-xl p-5 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#C0111F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C0111F]/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-[#C0111F]" />
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-[#C0111F]">{item.value}</span>
                      <p className="text-sm font-semibold text-[#0D0D0D]">{item.label}</p>
                      <p className="text-xs text-[#606060] mt-1">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
