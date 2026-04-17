import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { TechnologySection } from "@/components/sections/technology"
import { ProductsSection } from "@/components/sections/products"
import { ProcessSection } from "@/components/sections/process"
import { CertificationsSection } from "@/components/sections/certifications"
import { DifferentialsSection } from "@/components/sections/differentials"
import { SegmentsSection } from "@/components/sections/segments"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechnologySection />
      <ProductsSection />
      <ProcessSection />
      <CertificationsSection />
      <DifferentialsSection />
      <SegmentsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
