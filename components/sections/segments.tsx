"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  UtensilsCrossed, 
  Footprints, 
  Home, 
  Puzzle, 
  Pill, 
  Wrench, 
  Leaf,
  LayoutGrid,
  Wine as GlassWater,
  CookingPot,
  Beer,
  Building
} from "lucide-react"

const segments = [
  { icon: UtensilsCrossed, label: "Alimentos" },
  { icon: Footprints, label: "Calçados" },
  { icon: Home, label: "Utilidades Domésticas" },
  { icon: Puzzle, label: "Brinquedos" },
  { icon: Pill, label: "Farmacêuticos e Cosméticos" },
  { icon: Wrench, label: "Ferramentas e Auto-peças" },
  { icon: Leaf, label: "Produtos Fitoterápicos" },
  { icon: LayoutGrid, label: "Expositores / PDV" },
  { icon: GlassWater, label: "Vidros e Louças" },
  { icon: CookingPot, label: "Panelas e Assadeiras" },
  { icon: Beer, label: "Bebidas" },
  { icon: Building, label: "Metais Sanitários e Construção" },
]

export function SegmentsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
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
            Mercados
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] tracking-tight">
            SEGMENTOS ATENDIDOS
          </h2>
        </motion.div>

        {/* Segments Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center aspect-square border border-[#E5E5E5] shadow-sm hover:shadow-md hover:border-[#C0111F]/30 transition-all duration-300 cursor-pointer">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-[#C0111F]/10 flex items-center justify-center mb-4 group-hover:bg-[#C0111F]/20 group-hover:scale-110 transition-all duration-300">
                  <segment.icon className="w-7 h-7 text-[#C0111F]" />
                </div>
                
                {/* Label */}
                <p className="text-[#0D0D0D] text-xs sm:text-sm font-medium text-center group-hover:text-[#C0111F] transition-colors duration-300 leading-tight">
                  {segment.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
