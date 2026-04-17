"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { Target, Eye, Heart, ShieldCheck, Users, Lightbulb, Leaf } from "lucide-react"
import Image from "next/image"

const stats = [
  { value: 1986, suffix: "", label: "Desde", isYear: true },
  { value: 9000, suffix: "+", label: "m² de Área", prefix: "" },
  { value: 12, suffix: "+", label: "Segmentos Atendidos" },
  { value: 38, suffix: "+", label: "Anos de Mercado" },
]

const valores = [
  { icon: ShieldCheck, label: "Honestidade e transparência nos negócios" },
  { icon: Users, label: "Confiabilidade e pontualidade" },
  { icon: Heart, label: "Responsabilidade com os colaboradores" },
  { icon: Leaf, label: "Respeito com a comunidade e o meio ambiente" },
  { icon: Lightbulb, label: "Inovação tecnológica" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="empresa"
      className="relative py-24 md:py-32 bg-white"
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
            Nossa História
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] tracking-tight leading-tight">
            MAIS DE 30 ANOS<br />
            <span className="text-[#C0111F]">PRODUZINDO EXCELÊNCIA</span>
          </h2>
        </motion.div>

        {/* Main Content with Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://cartonagemcirculus.com.br/images/empresa-frente.jpg"
                alt="Fachada da Cartonagem Circulus em Franca, SP"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#C0111F] text-white px-6 py-4 rounded-xl shadow-lg hidden md:block">
              <span className="text-3xl font-bold">38+</span>
              <span className="block text-sm">Anos de História</span>
            </div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#606060] text-lg leading-relaxed mb-6">
              Instalada na cidade de Franca, interior do estado de São Paulo, a história da Cartonagem Circulu&apos;s revela uma trajetória de luta e persistência dos empreendedores que a criaram, e dos funcionários e colaboradores que participaram do seu crescimento e consolidação no mercado.
            </p>
            <p className="text-[#606060] text-lg leading-relaxed mb-8">
              Fundada no ano de 1986 pelo empresário Antônio Ananias, a Circulu&apos;s surge em um período de grande demanda por embalagens. Com uma estrutura de mais de 9.000 metros quadrados, a Cartonagem Circulu&apos;s investe continuamente na pesquisa dos melhores materiais, equipamentos de alta tecnologia e em profissionais qualificados para produção de embalagens personalizadas de papel cartão, micro ondulado e papelão.
            </p>
            
            {/* Stats inline */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 bg-[#F5F5F5] rounded-xl"
                >
                  {stat.isYear ? (
                    <span className="text-2xl md:text-3xl font-bold text-[#C0111F]">{stat.value}</span>
                  ) : (
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      className="text-2xl md:text-3xl font-bold text-[#C0111F]"
                    />
                  )}
                  <p className="text-[#606060] text-xs md:text-sm mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Missão */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 relative overflow-hidden border border-[#E5E5E5] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#C0111F]" />
            <div className="w-14 h-14 rounded-xl bg-[#C0111F]/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-[#C0111F]" />
            </div>
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-4">Missão</h3>
            <p className="text-[#606060] leading-relaxed text-sm">
              Contribuir para o crescimento e sucesso do cliente oferecendo soluções em embalagens personalizadas para seu produto com materiais sustentáveis e acabamentos diversificados a preços acessíveis.
            </p>
          </motion.div>

          {/* Visão */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 relative overflow-hidden border border-[#E5E5E5] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#C0111F]" />
            <div className="w-14 h-14 rounded-xl bg-[#C0111F]/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-[#C0111F]" />
            </div>
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-4">Visão</h3>
            <p className="text-[#606060] leading-relaxed text-sm">
              Ampliar nossa variedade de produtos para conquistar novos mercados, difundir nossa marca para nos tornarmos referência no mercado nacional como produtor de embalagens personalizadas.
            </p>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 relative overflow-hidden border border-[#E5E5E5] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#C0111F]" />
            <div className="w-14 h-14 rounded-xl bg-[#C0111F]/10 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-[#C0111F]" />
            </div>
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-4">Valores</h3>
            <ul className="space-y-2">
              {valores.map((valor) => (
                <li key={valor.label} className="flex items-start gap-2 text-[#606060] text-sm">
                  <valor.icon className="w-4 h-4 text-[#C0111F] mt-0.5 flex-shrink-0" />
                  <span>{valor.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
