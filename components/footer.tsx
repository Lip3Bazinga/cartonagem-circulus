"use client"

import { Circle, Instagram, Facebook, Award, TreePine, Sparkles } from "lucide-react"
import Image from "next/image"

const quickLinks = [
  { label: "Empresa", href: "#empresa" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Produtos", href: "#produtos" },
  { label: "Certificações", href: "#certificacoes" },
  { label: "Contato", href: "#contato" },
]

const certifications = [
  { icon: Award, label: "ISO 9001" },
  { icon: TreePine, label: "FSC®" },
  { icon: Sparkles, label: "FAMA/Disney" },
]

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://fb.com/cartonagemcirculus" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/cartonagemcirculus" },
]

export function Footer() {
  return (
    <footer className="relative bg-[#F0F0F0]">
      {/* Red top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#C0111F]" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 - Logo & Social */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <Image src="/logo.svg" alt="Circulus Logo" width={100} height={50} className="w-[250px] h-[40px] object-cover" />
            </a>
            <p className="text-[#606060] text-sm leading-relaxed mb-6">
              Indústria de Embalagens Personalizadas desde 1986
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white flex items-center justify-center hover:bg-[#C0111F]/10 border border-[#E5E5E5] transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-[#606060] group-hover:text-[#C0111F] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-[#0D0D0D] font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#606060] hover:text-[#C0111F] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Certifications */}
          <div>
            <h4 className="text-[#0D0D0D] font-semibold mb-6">Certificações</h4>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.label}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-[#E5E5E5]">
                    <cert.icon className="w-5 h-5 text-[#C0111F]" />
                  </div>
                  <span className="text-[#606060] text-sm">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-[#0D0D0D] font-semibold mb-6">Contato</h4>
            <div className="space-y-4 text-sm">
              <p className="text-[#606060]">
                <span className="text-[#0D0D0D] font-medium">Telefone:</span><br />
                <a href="tel:+551637130500" className="hover:text-[#C0111F] transition-colors">(16) 3713-0500</a>
              </p>
              <p className="text-[#606060]">
                <span className="text-[#0D0D0D] font-medium">E-mail:</span><br />
                <a href="mailto:circulus@cartonagemcirculus.com.br" className="hover:text-[#C0111F] transition-colors break-all">circulus@cartonagemcirculus.com.br</a>
              </p>
              <p className="text-[#606060]">
                <span className="text-[#0D0D0D] font-medium">Endereço:</span><br />
                Av. Alberto Pulicano, 4701<br />
                Distrito Industrial<br />
                Franca/SP — Brasil
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E5E5E5]">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#909090]">
            <p>
              © 2025 Cartonagem Circulu&apos;s · Todos os direitos reservados
            </p>
            <p>
              Franca, São Paulo — Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
