import ContactSection from '@/components/contact-section'
import Hero from '@/components/hero-section/hero-section'
import ServicesSection from '@/components/services-section'
import ThreePillarsSection from '@/components/three-pillars-section'

export default function RootPage() {
  return (
    <>
      <Hero />
      <ThreePillarsSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}
