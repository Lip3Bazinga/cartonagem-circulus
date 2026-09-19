"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Shield,
  FileText,
  MessageSquareWarning,
  ChevronDown,
  Lock,
  Eye,
  EyeOff,
  Send,
  CheckCircle,
  Users,
  Leaf,
  Scale,
  Heart,
  Paperclip,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { WEB3FORMS_ACCESS_KEY_COMPLIANCE, WEB3FORMS_ENDPOINT } from "@/lib/web3forms"

const policies = [
  {
    icon: Shield,
    title: "Política da Qualidade",
    summary: "Compromisso com a excelência em todos os processos produtivos.",
    content:
      "A Cartonagem Circulu's se compromete em produzir embalagens personalizadas, focada na satisfação dos clientes com agilidade na entrega e atendimento aos requisitos de seus produtos. Para isso, a empresa conta com a gestão da qualidade em busca da melhoria contínua de seus produtos e serviços.",
  },
  {
    icon: Leaf,
    title: "Política Ambiental e FSC®",
    summary: "Uso responsável de recursos florestais e compromisso com o meio ambiente.",
    content:
      "A Cartonagem Circulu's, certificada pelo Forest Stewardship Council (FSC®), compromete-se a utilizar matérias-primas provenientes de florestas manejadas de forma responsável e sustentável. Adotamos práticas que minimizam o impacto ambiental de nossas operações, promovemos a reciclagem e o reaproveitamento de materiais, e engajamos nossos colaboradores e parceiros na cultura de responsabilidade ambiental.",
  },
  {
    icon: Users,
    title: "Política de Responsabilidade Social",
    summary: "Respeito às pessoas, à comunidade e às boas condições de trabalho.",
    content:
      "Cumprimos integralmente a legislação trabalhista vigente, garantindo condições dignas de trabalho, remuneração justa, saúde e segurança a todos os colaboradores. Repudiamos qualquer forma de trabalho infantil, trabalho forçado ou discriminação. Fomentamos o desenvolvimento profissional contínuo e o respeito à diversidade, contribuindo para o crescimento pessoal e coletivo de nossa equipe.",
  },
  {
    icon: Scale,
    title: "Código de Ética e Conduta",
    summary: "Transparência, honestidade e integridade em todas as relações comerciais.",
    content:
      "A Cartonagem Circulu's pauta suas relações comerciais na ética, na transparência e na honestidade. Nossos colaboradores, fornecedores e parceiros são orientados a agir com integridade, evitar conflitos de interesse, proteger informações confidenciais e recusar qualquer forma de corrupção, suborno ou conduta antiética. O cumprimento deste código é condição essencial para o relacionamento com a empresa.",
  },
  {
    icon: Heart,
    title: "Política de Saúde e Segurança",
    summary: "Ambiente de trabalho seguro e saudável para todos os colaboradores.",
    content:
      "A Cartonagem Circulu's assume o compromisso de proporcionar um ambiente de trabalho seguro e saudável a todos os colaboradores, identificando e controlando riscos ocupacionais, promovendo treinamentos periódicos de segurança, disponibilizando equipamentos de proteção individual adequados e incentivando a cultura de prevenção de acidentes. A saúde e o bem-estar de nossa equipe são prioridades inegociáveis.",
  },
]

type FormState = "idle" | "submitting" | "success" | "error"

export function ComplianceSection() {
  const router = useRouter()
  const [openPolicy, setOpenPolicy] = useState<number | null>(null)
  const [isAnonymous, setIsAnonymous] = useState(true)
  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  })
  const [consent, setConsent] = useState(false)
  const [wantsResume, setWantsResume] = useState(false)
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!consent) {
      setFormState("error")
      setErrorMessage("É necessário aceitar o uso dos seus dados para enviar a mensagem.")
      return
    }

    setFormState("submitting")
    setErrorMessage("")

    try {
      const payload = new FormData()
      payload.set("access_key", WEB3FORMS_ACCESS_KEY_COMPLIANCE)
      payload.set("subject", `Canal de Comunicação — ${form.subject}`)
      payload.set("from_name", "Site Cartonagem Circulu's")
      payload.set("identificacao", isAnonymous ? "Anônimo" : "Identificado")
      if (!isAnonymous) {
        payload.set("name", form.name)
        payload.set("email", form.email)
      }
      payload.set("assunto", form.subject)
      payload.set("message", form.description)
      if (resumeFile) payload.set("attachment", resumeFile)

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      })

      const data = await response.json().catch(() => null)
      if (!response.ok || !data?.success) {
        throw new Error(data?.message || "Falha ao enviar mensagem.")
      }

      setFormState("success")
      setForm({ name: "", email: "", subject: "", description: "" })
      setWantsResume(false)
      setResumeFile(null)
      setConsent(false)
      router.push("/finalizado/")
    } catch (error) {
      setFormState("error")
      setErrorMessage(error instanceof Error ? error.message : "Falha ao enviar mensagem.")
    }
  }

  return (
    <section id="compliance" className="py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C0111F] text-sm font-semibold uppercase tracking-widest mb-3 block">
            Governança Corporativa
          </span>
          <h2 className="text-4xl font-bold text-[#0D0D0D] text-balance">
            Compliance & políticas
          </h2>
          <p className="text-[#606060] mt-4 max-w-2xl mx-auto leading-relaxed">
            Transparência, ética e responsabilidade são pilares da Cartonagem Circulu&apos;s.
            Conheça nossas políticas e utilize nosso canal seguro de comunicação.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Políticas */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#C0111F] flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D0D0D]">Políticas da Empresa</h3>
            </div>

            <div className="space-y-3">
              {policies.map((policy, index) => {
                const isOpen = openPolicy === index
                return (
                  <motion.div
                    key={policy.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                    className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenPolicy(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FDF0F1] transition-colors duration-200 group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? "bg-[#C0111F]" : "bg-[#F5F5F5] group-hover:bg-[#C0111F]/10"}`}>
                          <policy.icon className={`w-4 h-4 transition-colors duration-300 ${isOpen ? "text-white" : "text-[#C0111F]"}`} />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-[#0D0D0D]">{policy.title}</p>
                          {!isOpen && (
                            <p className="text-xs text-[#6E6E6E] mt-0.5">{policy.summary}</p>
                          )}
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown className="w-4 h-4 text-[#909090] flex-shrink-0" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 border-t border-[#F0F0F0]">
                            <p className="text-sm text-[#606060] leading-relaxed">{policy.content}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* RIGHT — Canal de Comunicação */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sticky top-28"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#0D0D0D] flex items-center justify-center flex-shrink-0">
                <MessageSquareWarning className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0D0D0D]">Canal de Comunicação</h3>
            </div>

            {/* Privacy badge */}
            <div className="flex items-center gap-2 bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 mb-6 shadow-sm">
              <Lock className="w-4 h-4 text-[#C0111F] flex-shrink-0" />
              <p className="text-xs text-[#606060]">
                <span className="font-semibold text-[#0D0D0D]">Canal seguro e confidencial.</span>{" "}
                Sua identidade é protegida. Relatos são tratados com total sigilo.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-[#E5E5E5] shadow-sm overflow-hidden">

              {/* Anonymity Toggle */}
              <div className="flex items-center justify-between p-5 border-b border-[#F0F0F0]">
                <div className="flex items-center gap-2">
                  {isAnonymous ? (
                    <EyeOff className="w-4 h-4 text-[#606060]" />
                  ) : (
                    <Eye className="w-4 h-4 text-[#606060]" />
                  )}
                  <span className="text-sm font-medium text-[#0D0D0D]">
                    {isAnonymous ? "Enviar anonimamente" : "Identificar-me"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAnonymous(!isAnonymous)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 cursor-pointer focus:outline-none ${isAnonymous ? "bg-[#0D0D0D]" : "bg-[#C0111F]"}`}
                  aria-label="Alternar anonimato"
                >
                  <motion.span
                    animate={{ x: isAnonymous ? 4 : 22 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="inline-block h-4 w-4 rounded-full bg-white shadow"
                  />
                </button>
              </div>

              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center p-10 text-center gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
                      <CheckCircle className="w-7 h-7 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-[#0D0D0D]">Mensagem recebida</h4>
                    <p className="text-sm text-[#606060] leading-relaxed max-w-xs">
                      Sua mensagem foi registrada com segurança. A equipe responsável tratará o caso com total sigilo.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="text-sm text-[#C0111F] font-medium hover:underline mt-2 cursor-pointer"
                    >
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="p-5 space-y-4"
                  >
                    <AnimatePresence>
                      {!isAnonymous && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="space-y-4 overflow-hidden"
                        >
                          <div>
                            <label htmlFor="compliance-name" className="block text-xs font-semibold text-[#0D0D0D] uppercase tracking-wide mb-1.5">
                              Nome
                            </label>
                            <input
                              id="compliance-name"
                              type="text"
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="Seu nome completo"
                              className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] text-sm text-[#0D0D0D] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#C0111F] transition-colors"
                            />
                          </div>
                          <div>
                            <label htmlFor="compliance-email" className="block text-xs font-semibold text-[#0D0D0D] uppercase tracking-wide mb-1.5">
                              E-mail
                            </label>
                            <input
                              id="compliance-email"
                              type="email"
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              placeholder="seu@email.com"
                              className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] text-sm text-[#0D0D0D] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#C0111F] transition-colors"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div>
                      <label htmlFor="compliance-subject" className="block text-xs font-semibold text-[#0D0D0D] uppercase tracking-wide mb-1.5">
                        Assunto
                      </label>
                      <input
                        id="compliance-subject"
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="Conte em poucas palavras o motivo do contato"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] text-sm text-[#0D0D0D] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#C0111F] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="compliance-description" className="block text-xs font-semibold text-[#0D0D0D] uppercase tracking-wide mb-1.5">
                        Sua mensagem
                      </label>
                      <textarea
                        id="compliance-description"
                        required
                        rows={5}
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        placeholder="Descreva sua mensagem, sugestão ou relato com o máximo de detalhes possível. Não é necessário se identificar."
                        className="w-full px-4 py-2.5 rounded-lg border border-[#E5E5E5] text-sm text-[#0D0D0D] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#C0111F] transition-colors resize-none"
                      />
                    </div>

                    {/* Resume / file attachment option */}
                    <div>
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={wantsResume}
                          onChange={(e) => {
                            setWantsResume(e.target.checked)
                            if (!e.target.checked) setResumeFile(null)
                          }}
                          className="w-4 h-4 rounded border-[#E5E5E5] text-[#C0111F] focus:ring-[#C0111F]"
                        />
                        <span className="text-sm text-[#0D0D0D]">Quero anexar um currículo</span>
                      </label>

                      <AnimatePresence>
                        {wantsResume && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3">
                              {resumeFile ? (
                                <div className="flex items-center justify-between gap-2 px-4 py-2.5 rounded-lg border border-[#E5E5E5] bg-[#F5F5F5] text-sm text-[#0D0D0D]">
                                  <span className="flex items-center gap-2 truncate">
                                    <Paperclip className="w-4 h-4 text-[#C0111F] flex-shrink-0" />
                                    <span className="truncate">{resumeFile.name}</span>
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => setResumeFile(null)}
                                    aria-label="Remover arquivo"
                                    className="text-[#909090] hover:text-[#C0111F] flex-shrink-0 cursor-pointer"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </div>
                              ) : (
                                <label className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg border border-dashed border-[#E5E5E5] text-sm text-[#606060] hover:border-[#C0111F] hover:text-[#C0111F] transition-colors cursor-pointer">
                                  <Paperclip className="w-4 h-4" />
                                  Selecionar arquivo (PDF ou Word)
                                  <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    className="hidden"
                                    onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
                                  />
                                </label>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <label className="flex items-start gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-[#E5E5E5] text-[#C0111F] focus:ring-[#C0111F]"
                      />
                      <span className="text-xs text-[#606060] leading-relaxed">
                        Autorizo o uso dos meus dados para tratamento deste relato, conforme a{" "}
                        <a href="/politica-de-privacidade/" target="_blank" className="text-[#C0111F] hover:underline">
                          Política de Privacidade
                        </a>
                        .
                      </span>
                    </label>

                    {formState === "error" && (
                      <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">
                        {errorMessage}
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full bg-[#0D0D0D] hover:bg-[#C0111F] text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {formState === "submitting" ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Enviar com segurança
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-[#6E6E6E]">
                      Ao enviar, você confirma que as informações são verídicas e de boa-fé.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
