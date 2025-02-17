import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { ProjectsHero } from "@/components/projects-hero"
import { ProjectsGrid } from "@/components/projects-grid"

export const metadata: Metadata = {
  title: "3P SARL - Nos Réalisations",
  description: "Explorez nos projets et réalisations dans le domaine du génie civil, BTP et services au Cameroun",
}

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SiteHeader />
      <ProjectsHero />
      <ProjectsGrid />
    </main>
  )
}