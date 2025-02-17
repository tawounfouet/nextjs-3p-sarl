export function ProjectsHero() {
  return (
    <section className="relative py-32 mt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-4">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Réalisations
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Découvrez nos projets réalisés avec succès dans différents domaines d'activité. 
            Chaque réalisation témoigne de notre engagement envers l'excellence et la satisfaction client.
          </p>
        </div>
      </div>
    </section>
  )
}