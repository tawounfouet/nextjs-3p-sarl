import { Building, Briefcase, Home, PenTool as Tool, Truck } from "lucide-react"

const services = [
  {
    icon: Building,
    title: "Génie Civil & BTP",
    description: "Construction de bâtiments, travaux publics et forages"
  },
  {
    icon: Briefcase,
    title: "Commerce Général",
    description: "Fourniture de matériaux et équipements professionnels"
  },
  {
    icon: Home,
    title: "Immobilier",
    description: "Achat, vente et location de biens immobiliers"
  },
  {
    icon: Tool,
    title: "Prestations de Services",
    description: "Menuiserie, peinture, climatisation et maintenance"
  },
  {
    icon: Truck,
    title: "Transit & Import-Export",
    description: "Solutions logistiques internationales"
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-blue-900  font-bold mb-4">Nos Domaines d'Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour tous vos besoins en construction, commerce et services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="h-12 w-12 text-black mb-4" />
                <h3 className="text-xl font-semibold mb-2  text-black">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}