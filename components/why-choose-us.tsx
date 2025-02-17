import { Shield, Target, Users, PenTool as Tool, Clock, ThumbsUp } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Expertise Reconnue",
    description: "Plus de 15 ans d'expérience dans le secteur"
  },
  {
    icon: Target,
    title: "Solutions Sur Mesure",
    description: "Adaptées à vos besoins spécifiques"
  },
  {
    icon: Users,
    title: "Équipe Qualifiée",
    description: "Professionnels expérimentés et dévoués"
  },
  {
    icon: Tool,
    title: "Équipements Modernes",
    description: "Utilisation des dernières technologies"
  },
  {
    icon: Clock,
    title: "Respect des Délais",
    description: "Livraison dans les temps convenus"
  },
  {
    icon: ThumbsUp,
    title: "Garantie Qualité",
    description: "Satisfaction client garantie"
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Pourquoi Nous Choisir
          </span>
          <h2 className="text-3xl text-blue-900 font-bold mb-4">Notre Différence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez ce qui fait de 3P SARL votre partenaire de confiance pour tous vos projets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl  text-black font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}