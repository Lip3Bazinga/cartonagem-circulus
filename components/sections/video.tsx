"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Maximize2, X } from "lucide-react"

export function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [isInView])

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

            {/* Video inline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group"
            >
              <video
                ref={videoRef}
                src="/video.mp4"
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#C0111F]/60 rounded-tl pointer-events-none" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#C0111F]/60 rounded-tr pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#C0111F]/60 rounded-bl pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#C0111F]/60 rounded-br pointer-events-none" />

              {/* Fullscreen button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#C0111F] z-10"
                aria-label="Assistir em tela cheia"
              >
                <Maximize2 className="w-5 h-5 text-white" />
              </button>
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
            <video
              src="/video.mp4"
              autoPlay
              controls
              className="w-full h-full object-cover"
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
