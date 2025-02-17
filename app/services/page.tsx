import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ServicesHero } from "@/components/services-hero"
import { ServicesSection } from "@/components/services-section"
import { ServiceDetails } from "@/components/service-details"

export const metadata: Metadata = {
  title: "3P SARL - Nos Services",
  description: "Découvrez nos services en génie civil, BTP, commerce général, immobilier et prestations de services au Cameroun",
}

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SiteHeader />
      <ServicesHero />
      <ServicesSection />
      <ServiceDetails />
    </main>
  )
}