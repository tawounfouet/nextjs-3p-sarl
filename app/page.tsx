import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { HomeHero } from "@/components/home-hero"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "3P SARL - Accueil",
  description: "Votre partenaire de confiance en construction et services au Cameroun",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <SiteHeader />
      <HomeHero />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <FeaturedProjects />
      <TestimonialsSection />
      <CtaSection />
    </main>
  )
}