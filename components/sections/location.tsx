"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Clock, Navigation } from "lucide-react"

export function LocationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="localizacao"
      className="relative py-24 md:py-32 bg-[#F5F5F5] overflow-hidden"
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
            Onde Estamos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] tracking-tight mb-6">
            LOCALIZAÇÃO
          </h2>
          <p className="text-[#606060] text-lg leading-relaxed max-w-3xl mx-auto">
            Localizada estrategicamente em Franca, São Paulo, a Cartonagem Circulu&apos;s está preparada para atender clientes em todo o Brasil com agilidade e eficiência.
          </p>
        </motion.div>

        {/* Map - 100% width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-[#E5E5E5]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.123456789!2d-47.4123456!3d-20.5234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a6a0a0a0a0a0%3A0x0!2sAv.%20Alberto%20Pulicano%2C%204701%20-%20Distrito%20Industrial%2C%20Franca%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Cartonagem Circulus"
              className="absolute inset-0"
            />
            
            {/* Map overlay with company name */}
            <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto bg-white/95 backdrop-blur-sm px-5 py-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C0111F] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#0D0D0D]">Cartonagem Circulu&apos;s</p>
                  <p className="text-sm text-[#606060]">Franca, São Paulo - Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cards - 33% each */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Address Card */}
          <div className="bg-white rounded-xl p-6 border border-[#E5E5E5] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#C0111F]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#C0111F]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0D0D0D] mb-2">Endereço</h3>
                <p className="text-[#606060] text-sm leading-relaxed">
                  Av. Alberto Pulicano, 4701<br />
                  Distrito Industrial<br />
                  Franca/SP - Brasil
                </p>
              </div>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-xl p-6 border border-[#E5E5E5] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#C0111F]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#C0111F]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0D0D0D] mb-2">Horário de Funcionamento</h3>
                <p className="text-[#606060] text-sm leading-relaxed">
                  Seg a Qui: 7:00 às 17:00<br />
                  Sex: 7:00 às 14:45
                </p>
              </div>
            </div>
          </div>

          {/* Directions Button Card */}
          <a
            href="https://www.google.com/maps/dir//Cartonagem+Circulus,+Av.+Alberto+Pulicano,+4701+-+Distrito+Industrial,+Franca+-+SP"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C0111F] rounded-xl p-6 flex items-center justify-center gap-3 text-white font-semibold hover:bg-[#A00F1A] transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            <Navigation className="w-6 h-6" />
            <span>Como Chegar</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
