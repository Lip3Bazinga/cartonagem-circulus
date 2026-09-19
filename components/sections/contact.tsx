"use client"

import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Send, Phone, Mail, MessageCircle, ChevronDown, Check, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { WEB3FORMS_ACCESS_KEY_CONTACT, WEB3FORMS_ENDPOINT } from "@/lib/web3forms"

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

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ContactSection() {
  const router = useRouter()
  const sectionRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedSegment, setSelectedSegment] = useState("")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) {
      setStatus("error")
      setErrorMessage("É necessário aceitar o uso dos seus dados para envio do contato.")
      return
    }

    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY_CONTACT,
          subject: `Novo contato pelo site — ${form.name}`,
          from_name: "Site Cartonagem Circulu's",
          name: form.name,
          email: form.email,
          phone: form.phone,
          segmento: selectedSegment || "Não informado",
          message: form.message,
        }),
      })

      const data = await response.json().catch(() => null)
      if (!response.ok || !data?.success) {
        throw new Error(data?.message || "Falha ao enviar mensagem.")
      }

      setStatus("success")
      setForm({ name: "", email: "", phone: "", message: "" })
      setSelectedSegment("")
      setConsent(false)
      router.push("/finalizado/")
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Falha ao enviar mensagem.")
    }
  }

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
            Vamos criar algo juntos?
          </h2>
          <p className="text-[#606060] text-lg max-w-2xl mx-auto">
            Entre em contato e receba um orçamento personalizado para o seu projeto de embalagem.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto min-w-0">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 min-w-0"
          >
            <div className="bg-white rounded-2xl p-8 border border-[#E5E5E5] shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-[#0D0D0D] text-sm font-medium mb-2">
                      Nome
                    </label>
                    <Input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Seu nome completo"
                      className="bg-white border-[#E5E5E5] text-[#0D0D0D] placeholder:text-[#909090] focus:border-[#C0111F] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[#0D0D0D] text-sm font-medium mb-2">
                      E-mail
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="bg-white border-[#E5E5E5] text-[#0D0D0D] placeholder:text-[#909090] focus:border-[#C0111F] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-phone" className="block text-[#0D0D0D] text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(00) 00000-0000"
                      className="bg-white border-[#E5E5E5] text-[#0D0D0D] placeholder:text-[#909090] focus:border-[#C0111F] transition-colors"
                    />
                  </div>
                  <div className="relative" ref={dropdownRef}>
                    <label id="contact-segment-label" htmlFor="contact-segment" className="block text-[#0D0D0D] text-sm font-medium mb-2">
                      Segmento
                    </label>
                    <button
                      id="contact-segment"
                      type="button"
                      onClick={() => setDropdownOpen((o) => !o)}
                      aria-haspopup="listbox"
                      aria-expanded={dropdownOpen}
                      aria-labelledby="contact-segment-label"
                      className={`w-full h-10 rounded-md bg-white border px-3 flex items-center justify-between text-sm transition-colors cursor-pointer ${
                        dropdownOpen ? "border-[#C0111F]" : "border-[#E5E5E5] hover:border-[#C0111F]/50"
                      } ${selectedSegment ? "text-[#0D0D0D]" : "text-[#909090]"}`}
                    >
                      <span>{selectedSegment || "Selecione seu segmento"}</span>
                      <motion.span
                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 text-[#606060]" />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.ul
                          role="listbox"
                          aria-labelledby="contact-segment-label"
                          initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
                          animate={{ opacity: 1, y: 0, scaleY: 1 }}
                          exit={{ opacity: 0, y: -6, scaleY: 0.95 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          style={{ originY: 0 }}
                          className="absolute z-50 top-[calc(100%+4px)] left-0 right-0 bg-white border border-[#E5E5E5] rounded-xl shadow-lg overflow-y-auto max-h-52 py-1"
                        >
                          {segments.map((segment) => (
                            <li key={segment} role="presentation">
                              <button
                                type="button"
                                role="option"
                                aria-selected={selectedSegment === segment}
                                onClick={() => {
                                  setSelectedSegment(segment)
                                  setDropdownOpen(false)
                                }}
                                className={`w-full flex items-center justify-between px-4 py-2 text-sm text-left transition-colors cursor-pointer hover:bg-[#FDF0F1] ${
                                  selectedSegment === segment
                                    ? "text-[#C0111F] font-semibold"
                                    : "text-[#0D0D0D]"
                                }`}
                              >
                                {segment}
                                {selectedSegment === segment && (
                                  <Check className="w-4 h-4 text-[#C0111F] flex-shrink-0" />
                                )}
                              </button>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[#0D0D0D] text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Conte-nos sobre seu projeto..."
                    className="w-full rounded-md bg-white border border-[#E5E5E5] text-[#0D0D0D] placeholder:text-[#909090] px-3 py-2 focus:border-[#C0111F] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <label className="flex items-start gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-[#E5E5E5] text-[#C0111F] focus:ring-[#C0111F]"
                  />
                  <span className="text-xs text-[#606060] leading-relaxed">
                    Autorizo o uso dos meus dados para que a Cartonagem Circulu&apos;s entre em contato comigo, conforme a{" "}
                    <a href="/politica-de-privacidade/" target="_blank" className="text-[#C0111F] hover:underline">
                      Política de Privacidade
                    </a>
                    .
                  </span>
                </label>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errorMessage}
                  </div>
                )}

                {status === "success" ? (
                  <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-100 rounded-lg px-4 py-3">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    Mensagem enviada com sucesso! Em breve entraremos em contato.
                  </div>
                ) : (
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-[#C0111F] hover:bg-[#a00e1a] text-white py-6 rounded-lg font-semibold text-lg transition-all duration-300 group disabled:opacity-70"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    {status === "submitting" ? "ENVIANDO..." : "ENVIAR CONTATO"}
                  </Button>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 min-w-0"
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
                <p className="text-[#6E6E6E] text-[12px] italic">comercial@cartonagemcirculus.com.br</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
