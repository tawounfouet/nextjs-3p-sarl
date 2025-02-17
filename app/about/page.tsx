import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AboutHero } from "@/components/about-hero"
import { CompanyValues } from "@/components/company-values"
import { TeamSection } from "@/components/team-section"

export const metadata: Metadata = {
  title: "3P SARL - Qui sommes-nous ?",
  description: "Découvrez l'histoire, la mission et les valeurs de 3P SARL, votre partenaire de confiance au Cameroun",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SiteHeader />
      <AboutHero />
      <CompanyValues />
      <TeamSection />
    </main>
  )
}