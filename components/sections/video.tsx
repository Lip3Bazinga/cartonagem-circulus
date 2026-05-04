"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Play, X } from "lucide-react"

export function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section
        ref={sectionRef}
        id="video"
        className="relative py-16 md:py-24 bg-[#0D0D0D] overflow-hidden"
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#C0111F] text-sm font-semibold tracking-widest uppercase mb-4 block"
            >
              Vídeo Institucional
            </motion.span>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight"
            >
              CONHEÇA A CARTONAGEM CIRCULU&apos;S
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#A0A0A0] mb-10 max-w-xl mx-auto"
            >
              Mais de 40 anos transformando papel em valor. Conheça nossa estrutura, tecnologia e equipe.
            </motion.p>

            {/* Video Thumbnail */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setIsModalOpen(true)}
            >
              {/* Placeholder thumbnail */}
              <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Corner decorations */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C0111F]/60 rounded-tl" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C0111F]/60 rounded-tr" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#C0111F]/60 rounded-bl" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#C0111F]/60 rounded-br" />

                  {/* Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center justify-center"
                  >
                    {/* Pulsing ring */}
                    <div className="absolute w-28 h-28 rounded-full bg-[#C0111F]/20 animate-ping" />
                    <div className="absolute w-24 h-24 rounded-full bg-[#C0111F]/30" />
                    <div className="relative w-20 h-20 rounded-full bg-[#C0111F] flex items-center justify-center shadow-lg shadow-[#C0111F]/40 group-hover:bg-[#a00e1a] transition-colors duration-300">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </motion.div>
                </div>

                {/* Label at bottom */}
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span className="text-[#606060] text-sm">Clique para assistir o vídeo institucional</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/?autoplay=1"
              title="Vídeo Institucional Cartonagem Circulus"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Fechar vídeo"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
