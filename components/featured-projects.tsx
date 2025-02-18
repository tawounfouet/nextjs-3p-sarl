import Image from 'next/image';

const projects = [
  {
    title: "Construction d'une Maison",
    category: "Construction",
    image: "images/elvis-phone-1.jpg",
    description: "Construction complète d'une maison d'habitation"
  },
  {
    title: "Construction d'un immeuble",
    category: "Construction",
    image: "images/featured-project-1.jpg",
    description: "Construction d'un immeuble de bureaux et d'appartements"
  },
  {
    title: "Renovation d'un Bureau",
    category: "Rénovation",
    image: "images/elvis-phone-2.jpg",
    description: "Rénovation complète d'un bureau d'entreprise"
  }
]

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Nos Réalisations
          </span>
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Projets à la Une</h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets phares qui témoignent de notre expertise 
            et de notre engagement envers l'excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
                <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={`/${project.image}`}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0" />
                </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span className="text-sm font-medium mb-2 opacity-90">{project.category}</span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm opacity-90">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 py-2">
            Voir tous nos projets
          </button>
        </div>
      </div>
    </section>
  )
}