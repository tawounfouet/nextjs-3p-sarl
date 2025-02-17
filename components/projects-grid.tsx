const projects = [
  {
    title: "Construction Résidentielle",
    category: "Génie Civil & BTP",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80",
    description: "Construction d'un complexe résidentiel moderne"
  },
  {
    title: "Rénovation Commerciale",
    category: "BTP",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
    description: "Rénovation complète d'un centre commercial"
  },
  {
    title: "Infrastructure Routière",
    category: "Travaux Publics",
    image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&q=80",
    description: "Construction et réhabilitation de routes"
  },
  {
    title: "Projet Industriel",
    category: "Construction Métallique",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
    description: "Construction d'une usine de production"
  },
  {
    title: "Aménagement Urbain",
    category: "Urbanisme",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80",
    description: "Aménagement d'espaces publics urbains"
  },
  {
    title: "Projet Hydraulique",
    category: "Forage",
    image: "https://images.unsplash.com/photo-1574786577067-4f2b0e7e327e?auto=format&fit=crop&q=80",
    description: "Installation de systèmes hydrauliques"
  }
]

export function ProjectsGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:opacity-75" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span className="text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-xl font-semibold mb-2 ">{project.title}</h3>
                <p className="text-sm opacity-90">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}