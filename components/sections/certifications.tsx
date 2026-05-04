"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const certifications = [
  {
    logo: "/images/certs/iso9001.jpg",
    title: "ISO 9001",
    subtitle: "Sistema de Gestão da Qualidade",
    description:
      "Certificação internacional que atesta nosso compromisso com a qualidade em todos os processos produtivos, garantindo consistência e excelência em cada embalagem produzida.",
  },
  {
    logo: "/images/certs/fsc.jpg",
    title: "FSC®",
    subtitle: "Forest Stewardship Council",
    description:
      "Certificação que garante que os materiais utilizados em nossas embalagens provêm de florestas manejadas de forma responsável, contribuindo para a preservação ambiental.",
  },
  {
    logo: "/images/certs/fama.jpg",
    title: "FAMA",
    subtitle: "Autorização Disney",
    description:
      "Autorização oficial FAMA que nos permite produzir embalagens com personagens Disney, atestando nossa responsabilidade social, condições de trabalho e padrões de qualidade internacionais.",
  },
]

export function CertificationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="certificacoes"
      className="relative py-24 md:py-32 bg-white"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C0111F] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Certificações
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] tracking-tight">
            QUALIDADE CERTIFICADA
          </h2>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full relative overflow-hidden border border-[#E5E5E5] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C0111F]" />

                {/* Logo */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-48 h-48 rounded-2xl bg-[#F5F5F5] border border-[#E5E5E5] overflow-hidden group-hover:border-[#C0111F]/30 transition-colors duration-300">
                    <img
                      src={cert.logo}
                      alt={`Certificação ${cert.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-[#0D0D0D] mb-1 group-hover:text-[#C0111F] transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-[#C0111F] text-sm font-medium mb-4">
                    {cert.subtitle}
                  </p>
                  <p className="text-[#606060] leading-relaxed text-sm flex-1">
                    {cert.description}
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
