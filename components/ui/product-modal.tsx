"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  title: string
  description: string
  thumbnail: string
  gallery: string[]
}

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setCurrentImageIndex(0)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !product) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, product, currentImageIndex])

  if (!product) return null

  const handlePrev = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.gallery.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === product.gallery.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-[#E5E5E5] flex items-center justify-center hover:bg-[#F5F5F5] transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5 text-[#0D0D0D]" />
            </button>

            <div className="flex flex-col lg:flex-row max-h-[90vh] overflow-auto">
              {/* Image Gallery */}
              <div className="lg:w-1/2 p-6 bg-[#F5F5F5]">
                {/* Main Image */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-white mb-4">
                  <img
                    src={product.gallery[currentImageIndex]}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Navigation Arrows */}
                  {product.gallery.length > 1 && (
                    <>
                      <button
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-[#E5E5E5] flex items-center justify-center hover:bg-[#F5F5F5] transition-colors"
                        aria-label="Imagem anterior"
                      >
                        <ChevronLeft className="w-5 h-5 text-[#0D0D0D]" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-[#E5E5E5] flex items-center justify-center hover:bg-[#F5F5F5] transition-colors"
                        aria-label="Próxima imagem"
                      >
                        <ChevronRight className="w-5 h-5 text-[#0D0D0D]" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {product.gallery.length > 1 && (
                  <div className="flex gap-2 justify-center">
                    {product.gallery.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex
                            ? "border-[#C0111F] shadow-md"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${product.title} - Imagem ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#0D0D0D] mb-4">
                  {product.title}
                </h2>
                
                <p className="text-[#606060] leading-relaxed flex-grow mb-6">
                  {product.description}
                </p>

                <Button
                  asChild
                  className="w-full bg-[#C0111F] hover:bg-[#a00e1a] text-white py-6 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  <a href="#contato" onClick={onClose}>
                    Solicitar Orçamento
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
