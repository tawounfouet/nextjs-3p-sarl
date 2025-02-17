import { Shield, Target, Users, Award } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Intégrité",
    description: "Nous menons nos activités avec honnêteté et transparence"
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Nous travaillons en étroite collaboration avec nos clients"
  },
  {
    icon: Award,
    title: "Qualité",
    description: "Nous garantissons des services de haute qualité"
  }
]

export function CompanyValues() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-blue-800 font-bold mb-4">Nos Valeurs Fondamentales</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ces valeurs guident chacune de nos actions et décisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl  text-black font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}