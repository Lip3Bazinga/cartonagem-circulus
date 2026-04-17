"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Circle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Empresa", href: "#empresa" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Produtos", href: "#produtos" },
  { label: "Certificações", href: "#certificacoes" },
  { label: "Contato", href: "#contato" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar with Phone */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-[#C0111F] py-2 transition-all duration-300 ${isScrolled ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"}`}>
        <div className="container mx-auto px-6 flex items-center justify-center lg:justify-end gap-6">
          <a href="mailto:circulus@cartonagemcirculus.com.br" className="flex items-center gap-2 text-white text-sm font-medium hover:text-white/80 transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">circulus@cartonagemcirculus.com.br</span>
          </a>
          <span className="hidden sm:block text-white/40">|</span>
          <a href="tel:+551637130500" className="flex items-center gap-2 text-white text-sm font-medium hover:text-white/80 transition-colors">
            <Phone className="w-4 h-4" />
            (16) 3713-0500
          </a>
        </div>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "top-0 bg-white shadow-md py-3"
            : "top-10 bg-white/95 py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <Circle className="w-8 h-8 text-[#C0111F] stroke-2 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold tracking-widest text-[#0D0D0D]">
              CIRCULU&apos;S
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#606060] hover:text-[#C0111F] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C0111F] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-[#C0111F] hover:bg-[#a00e1a] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
            >
              <a href="#contato">Solicitar Orçamento</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#0D0D0D] p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className="text-2xl font-medium text-[#0D0D0D] hover:text-[#C0111F] transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button
                  asChild
                  className="bg-[#C0111F] hover:bg-[#a00e1a] text-white px-8 py-3 rounded-lg font-medium text-lg mt-4"
                >
                  <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                    Solicitar Orçamento
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
