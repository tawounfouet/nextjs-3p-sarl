import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata: Metadata = {
  title: "3P SARL - Contact",
  description: "Contactez 3P SARL pour vos projets de construction, commerce et services au Cameroun",
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SiteHeader />
      <ContactHero />
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </main>
  )
}