import { Users, Building2, CheckCircle, Trophy } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "200+",
    label: "Clients Satisfaits",
    description: "Entreprises et particuliers nous font confiance"
  },
  {
    icon: Building2,
    value: "150+",
    label: "Projets Réalisés",
    description: "Constructions et services accomplis avec succès"
  },
  {
    icon: CheckCircle,
    value: "15+",
    label: "Années d'Expérience",
    description: "D'expertise dans le secteur"
  },
  {
    icon: Trophy,
    value: "10+",
    label: "Récompenses",
    description: "Reconnaissances de notre excellence"
  }
]

export function StatsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-primary">{stat.value}</h3>
                <p className="font-medium text-gray-900 mb-2">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}