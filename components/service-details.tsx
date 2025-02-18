import { Building2, Briefcase, Home, Wrench, Truck } from "lucide-react"

const serviceDetails = [
  {
    icon: Building2,
    title: "Génie Civil & BTP",
    description: "Notre expertise en génie civil et BTP comprend :",
    features: [
      "Construction de bâtiments résidentiels et commerciaux",
      "Travaux de terrassement et fondations",
      "Rénovation et réhabilitation",
      "Forages et adduction d'eau",
      "Études techniques et suivi de chantier"
    ]
  },
  {
    icon: Briefcase,
    title: "Commerce Général",
    description: "Nous proposons une large gamme de produits et matériaux :",
    features: [
      "Matériaux de construction",
      "Équipements professionnels",
      "Fournitures industrielles",
      "Matériel électrique",
      "Quincaillerie générale"
    ]
  },
  {
    icon: Home,
    title: "Immobilier",
    description: "Nos services immobiliers incluent :",
    features: [
      "Achat et vente de biens immobiliers",
      "Location d'espaces commerciaux",
      "Gestion immobilière",
      "Conseil en investissement",
      "Évaluation de biens"
    ]
  },
  {
    icon: Wrench,
    title: "Prestations de Services",
    description: "Nous offrons des services techniques variés :",
    features: [
      "Installation et maintenance de climatisation",
      "Menuiserie aluminium et bois",
      "Peinture et décoration",
      "Plomberie et électricité",
      "Maintenance industrielle"
    ]
  },
  {
    icon: Truck,
    title: "Transit",
    description: "Nos solutions de transit comprennent :",
    features: [
      "Dédouanement de marchandises",
      "Transport international",
      "Gestion des formalités douanières",
      "Suivi des expéditions",
      "Services de coursier international"
    ]
  },
  {
    icon: Briefcase,
    title: "Import-Export",
    description: "Nos services d'import-export incluent :",
    features: [
      "Sourcing international",
      "Négociation avec les fournisseurs",
      "Gestion des documents commerciaux",
      "Entreposage et stockage",
      "Conseil en stratégie import-export"
    ]
  }
]

export function ServiceDetails() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {serviceDetails.map((service, index) => {
          const Icon = service.icon
          return (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-start gap-12 mb-24 last:mb-0 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl text-blue-900 font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}