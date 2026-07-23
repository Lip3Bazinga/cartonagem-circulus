"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Layers, Package, Ruler, Clock, Star, ArrowRight } from "lucide-react"

const products = [
  {
    title: "Alimentos",
    icon: "🍽️",
    tagline: "Segurança e identidade para o setor alimentício",
    description: "Embalagens que protegem, informam e vendem. Do transporte ao ponto de venda, cada detalhe valoriza o seu produto.",
    materials: ["Papel Cartão SBS", "Micro-ondulado", "Papelão dupla-face"],
    qualities: ["Impressão 4 ou 6 cores", "Verniz base d'água", "Laminação matte ou brilho"],
    formats: ["Caixas montadas", "Cartucho lateral", "Fundo automático"],
    sizes: "De 5 cm até 100 × 142 cm",
    delivery: "15 a 25 dias úteis",
    highlight: "Materiais atóxicos e aprovados para contato indireto com alimentos",
  },
  {
    title: "Calçados",
    icon: "👟",
    tagline: "Tradição em embalagens para o polo calçadista",
    description: "Caixas com impressão interna e externa, resistentes ao empilhamento e com acabamento que transmite qualidade.",
    materials: ["Papel Cartão Duplex", "Micro-ondulado reforçado"],
    qualities: ["Impressão offset interna e externa", "Verniz UV spot", "Hot stamping disponível"],
    formats: ["Caixa sapato padrão", "Caixa com tampa", "Cartucho personalizado"],
    sizes: "Tamanhos PP ao EXG — totalmente customizável",
    delivery: "12 a 20 dias úteis",
    highlight: "Especialidade histórica da Circulu's desde 1986",
  },
  {
    title: "Utilidades Domésticas",
    icon: "🏠",
    tagline: "Embalagens que vendem pelo visual",
    description: "Sofisticação de cores e acabamentos que destacam seu produto nas prateleiras de grandes redes.",
    materials: ["Papel Cartão SBS", "Papelão ondulado"],
    qualities: ["Impressão 6 cores", "Verniz localizado", "Janela PET disponível"],
    formats: ["Display com janela", "Caixa montada", "Expositor PDV"],
    sizes: "Sob medida para cada produto",
    delivery: "15 a 25 dias úteis",
    highlight: "Cores Pantone e especiais com fidelidade garantida",
  },
  {
    title: "Brinquedos",
    icon: "🎲",
    tagline: "Embalagens que encantam crianças e conquistam pais",
    description: "Arte vibrante, estrutura resistente e acabamentos que se destacam no ponto de venda.",
    materials: ["Papel Cartão SBS", "Micro-ondulado colorido"],
    qualities: ["Impressão 6 cores", "Verniz brilho total", "Relevo seco"],
    formats: ["Caixa com encaixe", "Blister com base", "Expositor de parede"],
    sizes: "De peças pequenas a grandes conjuntos",
    delivery: "15 a 25 dias úteis",
    highlight: "Estruturas com travamento seguro e resistência ao manuseio",
  },
  {
    title: "Farmacêuticos e Cosméticos",
    icon: "💊",
    tagline: "Sofisticação que protege e valoriza",
    description: "Acabamentos premium e estrutura precisa para produtos de alto valor e exigência regulatória.",
    materials: ["Papel Cartão SBS de alta gramatura", "Kraft especial"],
    qualities: ["Impressão 6 cores", "Hot stamping dourado/prata", "Laminação soft-touch"],
    formats: ["Cartucho com encaixe", "Caixa com tampa rígida", "Estojo"],
    sizes: "Ampola até embalagem de kit presente",
    delivery: "12 a 22 dias úteis",
    highlight: "Conformidade com ANVISA para rotulagem farmacêutica",
  },
  {
    title: "Ferramentas e Auto-peças",
    icon: "🔧",
    tagline: "Resistência para produtos pesados e volumosos",
    description: "Embalagens robustas que suportam peso, empilhamento e transporte logístico intenso.",
    materials: ["Papelão ondulado duplo", "Micro-ondulado reforçado"],
    qualities: ["Impressão flexográfica", "Verniz anti-umidade", "Reforço estrutural interno"],
    formats: ["Caixa americana", "Bandeja com tampa", "Embalagem com espuma"],
    sizes: "Pequenas peças até grandes conjuntos industriais",
    delivery: "10 a 18 dias úteis",
    highlight: "Estrutura calculada para suportar o peso e proteger contra impactos",
  },
  {
    title: "Produtos Fitoterápicos",
    icon: "🌿",
    tagline: "Credibilidade e identidade para o mercado natural",
    description: "Embalagens que transmitem saúde, naturalidade e profissionalismo no ponto de venda.",
    materials: ["Papel Cartão Kraft natural", "SBS branco"],
    qualities: ["Impressão 4 a 6 cores", "Verniz base d'água", "Acabamento fosco"],
    formats: ["Cartucho lateral", "Caixa com encaixe", "Embalagem para sachê"],
    sizes: "De pílulas a embalagens de kits",
    delivery: "15 a 22 dias úteis",
    highlight: "Visual orgânico com alta definição gráfica",
  },
  {
    title: "Expositores (PDV)",
    icon: "🗂️",
    tagline: "Presença de marca no ponto de venda",
    description: "Expositores de piso, balcão e parede com grandes formatos de impressão que capturam a atenção.",
    materials: ["Papelão ondulado triplo", "Micro-ondulado"],
    qualities: ["Impressão de grande formato", "Verniz UV", "Cores especiais disponíveis"],
    formats: ["Expositor de piso", "Display de balcão", "Urna promocional"],
    sizes: "Até 100 × 200 cm em formatos customizados",
    delivery: "10 a 20 dias úteis",
    highlight: "Montagem sem cola — encaixe estrutural que facilita a logística",
  },
  {
    title: "Vidros e Louças",
    icon: "🏺",
    tagline: "Proteção máxima para produtos frágeis",
    description: "Estrutura com divisórias internas, berços e espumas para proteção total de produtos delicados.",
    materials: ["Papelão ondulado duplo", "Micro-ondulado com divisória"],
    qualities: ["Impressão offset ou flexográfica", "Revestimento interno", "Teste de queda"],
    formats: ["Caixa com berço", "Embalagem com separadores", "Kit com cinta"],
    sizes: "Copos, taças, pratos até peças de grande porte",
    delivery: "15 a 25 dias úteis",
    highlight: "Projeto com análise estrutural para suporte ao produto específico",
  },
  {
    title: "Panelas e Assadeiras",
    icon: "🍳",
    tagline: "Acabamento que agrega valor em grandes lojas",
    description: "Embalagens que competem visualmente nas gôndolas de grandes varejistas e redes de construção.",
    materials: ["Papelão ondulado reforçado", "Micro-ondulado dupla-face"],
    qualities: ["Impressão 4 cores", "Verniz brilho ou fosco", "Janela de visualização"],
    formats: ["Caixa americana reforçada", "Embalagem com alça", "Bandeja com capa"],
    sizes: "14 cm a 50 cm de diâmetro, customizável",
    delivery: "15 a 25 dias úteis",
    highlight: "Reforço de base para suportar o peso sem deformação",
  },
  {
    title: "Bebidas",
    icon: "🍷",
    tagline: "Embalagens que protegem e apresentam com classe",
    description: "Do kit promocional ao transporte seguro, embalagens que valorizam a tradição e qualidade da sua bebida.",
    materials: ["Papelão ondulado", "Cartão de alta gramatura"],
    qualities: ["Impressão premium", "Hot stamping", "Relevo seco disponível"],
    formats: ["Caixa para garrafa", "Kit presente", "Embalagem com divisória"],
    sizes: "Long neck a garrafões — totalmente customizável",
    delivery: "12 a 22 dias úteis",
    highlight: "Divisórias internas para transporte seguro de múltiplas garrafas",
  },
  {
    title: "Metais Sanitários e Construção",
    icon: "🔩",
    tagline: "Robustez para o setor da construção civil",
    description: "Embalagens resistentes à umidade, ao empilhamento e ao transporte em grandes volumes.",
    materials: ["Papelão ondulado triplo", "Kraft reforçado"],
    qualities: ["Impressão funcional e clara", "Verniz anti-umidade", "Resistência a 12 kg/cm²"],
    formats: ["Caixa americana", "Embalagem com berço plástico", "Fardo com cinta"],
    sizes: "Torneiras até banheiras e peças estruturais",
    delivery: "10 a 18 dias úteis",
    highlight: "Embalagem calculada para resistir à cadeia logística da construção",
  },
]

const specIcons: Record<string, typeof Layers> = {
  materials: Layers,
  qualities: Star,
  formats: Package,
}

export function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [active, setActive] = useState(0)

  const product = products[active]

  return (
    <section
      ref={sectionRef}
      id="produtos"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#C0111F] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] tracking-tight mb-4">
            Conheça nossos produtos
          </h2>
          <p className="text-[#606060] text-lg max-w-2xl mx-auto">
            Selecione um segmento para conhecer materiais, formatos, acabamentos e prazos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Sidebar — segment list */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0"
          >
            {products.map((p, i) => (
              <button
                key={p.title}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left whitespace-nowrap lg:whitespace-normal transition-all duration-200 flex-shrink-0 lg:flex-shrink w-full cursor-pointer ${
                  i === active
                    ? "bg-[#C0111F] text-white shadow-md"
                    : "bg-[#F5F5F5] text-[#0D0D0D] hover:bg-[#F0F0F0]"
                }`}
              >
                <span className="text-xl">{p.icon}</span>
                <span className="text-sm font-semibold">{p.title}</span>
                {i === active && <ArrowRight className="w-4 h-4 ml-auto hidden lg:block" />}
              </button>
            ))}
          </motion.div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#F5F5F5] rounded-2xl p-8"
            >
              {/* Title */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">{product.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-[#0D0D0D]">{product.title}</h3>
                  <p className="text-[#C0111F] text-sm font-medium">{product.tagline}</p>
                </div>
              </div>

              <p className="text-[#606060] leading-relaxed mb-8 mt-4 border-l-4 border-[#C0111F]/30 pl-4">
                {product.description}
              </p>

              {/* Specs grid */}
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {(["materials", "qualities", "formats"] as const).map((key) => {
                  const labels = { materials: "Materiais", qualities: "Qualidade & Acabamento", formats: "Formatos" }
                  const Icon = specIcons[key]
                  return (
                    <div key={key} className="bg-white rounded-xl p-5 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-4 h-4 text-[#C0111F]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-[#0D0D0D]">
                          {labels[key]}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {product[key].map((item) => (
                          <li key={item} className="text-sm text-[#606060] flex items-start gap-2">
                            <span className="text-[#C0111F] mt-0.5 leading-none">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>

              {/* Bottom row — sizes, delivery, highlight */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-sm">
                  <Ruler className="w-5 h-5 text-[#C0111F] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0D0D0D] mb-1">Tamanhos</p>
                    <p className="text-sm text-[#606060]">{product.sizes}</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-sm">
                  <Clock className="w-5 h-5 text-[#C0111F] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0D0D0D] mb-1">Prazo médio</p>
                    <p className="text-sm text-[#606060]">{product.delivery}</p>
                  </div>
                </div>
                <div className="bg-[#C0111F]/5 border border-[#C0111F]/20 rounded-xl p-4 flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#C0111F] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#C0111F] mb-1">Diferencial</p>
                    <p className="text-sm text-[#606060]">{product.highlight}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contato"
                  className="flex-1 bg-[#D2D3D5] hover:bg-[#BFC1C4] text-[#0D0D0D] text-center font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
                >
                  Solicitar orçamento
                </a>
                <a
                  href="#contato"
                  className="flex-1 border border-[#C0111F] text-[#C0111F] hover:bg-[#C0111F]/5 text-center font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
                >
                  Falar com Especialista
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
