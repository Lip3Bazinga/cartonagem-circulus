"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const segments = [
  "Alimentos",
  "Calçados",
  "Utilidades Domésticas",
  "Brinquedos",
  "Farmacêuticos e Cosméticos",
  "Ferramentas e Auto-peças",
  "Produtos Fitoterápicos",
  "Expositores / PDV",
  "Vidros e Louças",
  "Panelas e Assadeiras",
  "Bebidas",
  "Metais Sanitários e Construção",
  "Outro",
]

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedSegment, setSelectedSegment] = useState("")

  return (
    <section
      ref={sectionRef}
      id="contato"
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
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] tracking-tight mb-6">
            VAMOS CRIAR ALGO JUNTOS?
          </h2>
          <p className="text-[#606060] text-lg max-w-2xl mx-auto">
            Entre em contato e receba um orçamento personalizado para o seu projeto de embalagem.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 border border-[#E5E5E5] shadow-sm">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#0D0D0D] text-sm font-medium mb-2">
                      Nome
                    </label>
                    <Input
                      type="text"
                      placeholder="Seu nome completo"
                      className="bg-white border-[#E5E5E5] text-[#0D0D0D] placeholder:text-[#909090] focus:border-[#C0111F] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0D0D0D] text-sm font-medium mb-2">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-white border-[#E5E5E5] text-[#0D0D0D] placeholder:text-[#909090] focus:border-[#C0111F] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#0D0D0D] text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="bg-white border-[#E5E5E5] text-[#0D0D0D] placeholder:text-[#909090] focus:border-[#C0111F] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0D0D0D] text-sm font-medium mb-2">
                      Segmento
                    </label>
                    <select
                      value={selectedSegment}
                      onChange={(e) => setSelectedSegment(e.target.value)}
                      className="w-full h-10 rounded-md bg-white border border-[#E5E5E5] text-[#0D0D0D] px-3 focus:border-[#C0111F] focus:outline-none transition-colors"
                    >
                      <option value="" className="text-[#909090]">Selecione seu segmento</option>
                      {segments.map((segment) => (
                        <option key={segment} value={segment}>
                          {segment}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#0D0D0D] text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Conte-nos sobre seu projeto..."
                    className="w-full rounded-md bg-white border border-[#E5E5E5] text-[#0D0D0D] placeholder:text-[#909090] px-3 py-2 focus:border-[#C0111F] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#C0111F] hover:bg-[#a00e1a] text-white py-6 rounded-lg font-semibold text-lg transition-all duration-300 group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  ENVIAR CONTATO
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/551637130500"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 flex items-center gap-4 border border-[#E5E5E5] shadow-sm hover:shadow-md hover:border-[#25D366]/30 transition-all duration-300 block group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <p className="text-[#0D0D0D] font-semibold">WhatsApp</p>
                <p className="text-[#606060] text-sm">(16) 3713-0500</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+551637130500"
              className="bg-white rounded-xl p-6 flex items-center gap-4 border border-[#E5E5E5] shadow-sm hover:shadow-md hover:border-[#C0111F]/30 transition-all duration-300 block group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#C0111F]/10 flex items-center justify-center group-hover:bg-[#C0111F]/20 transition-colors">
                <Phone className="w-6 h-6 text-[#C0111F]" />
              </div>
              <div>
                <p className="text-[#0D0D0D] font-semibold">Telefone</p>
                <p className="text-[#606060] text-sm">(16) 3713-0500</p>
              </div>
            </a>

            {/* Email */}
            <div className="bg-white rounded-xl p-6 flex items-center gap-4 border border-[#E5E5E5] shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#C0111F]/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-[#C0111F]" />
              </div>
              <div>
                <p className="text-[#0D0D0D] font-semibold">E-mail</p>
                <p className="text-[#909090] text-sm italic">E-mail comercial a definir</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
