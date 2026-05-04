"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import Image from "next/image"

const certifications = [
  {
    src: "/images/certs/iso9001.jpg",
    alt: "Certificação ISO 9001",
    label: "ISO 9001",
    sub: "Gestão da Qualidade",
  },
  {
    src: "/images/certs/fsc.jpg",
    alt: "Certificação FSC",
    label: "FSC®",
    sub: "Certificação Florestal",
  },
  {
    src: "/images/certs/fama.jpg",
    alt: "Autorização FAMA Disney",
    label: "FAMA",
    sub: "Autorização Disney",
  },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F5]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #0D0D0D 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-48">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white shadow-sm border border-[#E5E5E5] px-4 py-2 rounded-full mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#C0111F] animate-pulse" />
              <span className="text-sm text-[#606060]">Desde 1986 — Franca, SP</span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D0D0D] leading-tight tracking-tight"
              >
                EMBALAGENS QUE
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight"
              >
                <span className="text-[#0D0D0D]">PROTEGEM E </span>
                <span className="text-[#C0111F]">IMPRESSIONAM</span>
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-[#606060] max-w-xl mb-10 leading-relaxed"
            >
              Soluções em embalagens personalizadas de papel cartão e micro ondulado.
              Mais de 40 anos de excelência, tecnologia de ponta e qualidade certificada ISO 9001, FSC e FAMA.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#C0111F] hover:bg-[#a00e1a] text-white px-8 py-6 rounded-lg font-semibold text-lg transition-all duration-300 group"
              >
                <a href="#contato" className="flex items-center gap-2">
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#C0111F] text-[#C0111F] hover:bg-[#C0111F] hover:text-white px-8 py-6 rounded-lg font-semibold text-lg group"
              >
                <a href="tel:+551637130500" className="flex items-center gap-2">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  (16) 3713-0500
                </a>
              </Button>
            </motion.div>

            {/* Certification logos row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-2"
            >
              <span className="text-xs text-[#909090] uppercase tracking-wider mr-2 whitespace-nowrap">Certificado por</span>
              <div className="flex items-center gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.label}
                    className="group flex items-center gap-2 bg-white border border-[#E5E5E5] rounded-xl px-3 py-2 shadow-sm hover:shadow-md hover:border-[#C0111F]/30 transition-all duration-300"
                    title={cert.sub}
                  >
                    <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-[#F5F5F5]">
                      <img
                        src={cert.src}
                        alt={cert.alt}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0D0D0D] leading-none">{cert.label}</p>
                      <p className="text-[10px] text-[#909090] leading-tight mt-0.5">{cert.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-[#C0111F]/10 rounded-3xl transform rotate-3" />
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-embalagens.jpg"
                  alt="Embalagens personalizadas Cartonagem Circulus"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <div className="container mx-auto px-6 pb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-[#E5E5E5] p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div>
                  <AnimatedCounter end={40} suffix="+" className="text-3xl font-bold text-[#C0111F]" />
                  <p className="text-sm text-[#606060]">Anos de Mercado</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 md:border-l md:border-[#E5E5E5] md:pl-8">
                <div>
                  <AnimatedCounter end={9000} suffix="+" className="text-3xl font-bold text-[#C0111F]" />
                  <p className="text-sm text-[#606060]">m² de Área</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 md:border-l md:border-[#E5E5E5] md:pl-8">
                <div>
                  <AnimatedCounter end={10} suffix="+" className="text-3xl font-bold text-[#C0111F]" />
                  <p className="text-sm text-[#606060]">Segmentos Atendidos</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-4 md:border-l md:border-[#E5E5E5] md:pl-8">
                <div className="flex items-center gap-3">
                  {certifications.map((cert) => (
                    <div key={cert.label} className="w-9 h-9 rounded-lg overflow-hidden bg-[#F5F5F5] border border-[#E5E5E5]" title={cert.label}>
                      <img
                        src={cert.src}
                        alt={cert.alt}
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
