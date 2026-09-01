"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

// Assim que o cliente enviar as fotos dos equipamentos pelo Drive, basta
// trocar os caminhos aqui — o slide já está funcional.
const heroImages = [
  "/images/hero-image-1.jpeg",
  "/images/hero-image-2.jpeg",
  "/images/hero-image-3.jpeg",
];

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative lg:min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-[#F5F5F5]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #0D0D0D 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-48 pb-12 lg:pb-48">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight"
              >
                <span className="text-[#0D0D0D]">Embalagens que valorizam</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight"
              >
                <span className="text-[#0D0D0D]">a sua </span>
                <span className="text-[#C0111F]">marca</span>
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-[#606060] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Soluções em embalagens de papel cartão e micro ondulado
              personalizadas com impressão offset. Mais de 40 anos de
              excelência, tecnologia de ponta e qualidade certificada ISO 9001,
              FSC e FAMA.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#D2D3D5] hover:bg-[#BFC1C4] text-[#0D0D0D] px-8 py-6 rounded-lg font-semibold text-lg transition-all duration-300 group"
              >
                <a href="#contato" className="flex items-center gap-2">
                  Solicitar orçamento
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#C0111F] text-[#C0111F] hover:bg-[#C0111F] hover:text-white px-8 py-6 rounded-lg font-semibold text-lg group"
              >
                <a href="tel:+551637130500" className="flex items-center gap-2">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  (16) 3713-0500
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto">
              <div className="absolute inset-0 bg-[#C0111F]/10 rounded-3xl transform rotate-3" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <div className="h-full overflow-hidden" ref={emblaRef}>
                  <div className="flex h-full">
                    {heroImages.map((src, index) => (
                      <div
                        key={src}
                        className="relative h-full min-w-0 shrink-0 grow-0 basis-full"
                      >
                        <Image
                          src={src}
                          alt="Embalagens personalizadas Cartonagem Circulus"
                          fill
                          className="object-cover"
                          priority={index === 0}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Slide indicators */}
                {heroImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        aria-label={`Ir para o slide ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === selectedIndex
                            ? "w-6 bg-white"
                            : "w-2 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Floating cert badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="relative mt-4 max-w-lg mx-auto bg-white rounded-2xl shadow-lg border border-[#E5E5E5] px-4 py-3 flex items-center gap-3 w-fit"
            >
              <div className="w-10 h-10 rounded-lg bg-[#F5F5F5] border border-[#E5E5E5] overflow-hidden flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/certs/iso9001.jpg"
                  alt="Selo de certificação ISO 9001"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[#0D0D0D] font-semibold text-sm leading-tight">
                  Certificado
                </p>
                <p className="text-[#606060] text-xs leading-tight">
                  ISO 9001 + FSC + FAMA
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative lg:absolute lg:bottom-0 left-0 right-0"
      >
        <div className="container mx-auto px-6 pb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-[#E5E5E5] p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="text-center lg:text-left">
                  <AnimatedCounter
                    end={40}
                    suffix="+"
                    className="text-3xl font-bold text-[#C0111F]"
                  />
                  <p className="text-sm text-[#606060]">Anos de mercado</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 md:border-l md:border-[#E5E5E5] md:pl-8">
                <div className="text-center lg:text-left">
                  <AnimatedCounter
                    end={9000}
                    suffix="+"
                    className="text-3xl font-bold text-[#C0111F]"
                  />
                  <p className="text-sm text-[#606060]">m² de área</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 md:border-l md:border-[#E5E5E5] md:pl-8">
                <div className="text-center lg:text-left">
                  <AnimatedCounter
                    end={10}
                    suffix="+"
                    className="text-3xl font-bold text-[#C0111F]"
                  />
                  <p className="text-sm text-[#606060]">Segmentos atendidos</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end gap-4 md:border-l md:border-[#E5E5E5] md:pl-8">
                <div className="text-center lg:text-left">
                  <p className="text-3xl font-bold text-[#C0111F]">ISO</p>
                  <p className="text-sm text-[#606060]">9001 + FSC + FAMA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
