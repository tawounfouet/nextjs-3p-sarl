export function ServicesHero() {
  return (
    <section className="relative py-32 mt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('images/services-hero-image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-4">
            Nos Expertises
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Services
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Des solutions complètes et professionnelles adaptées à vos besoins. 
            Notre expertise technique et notre engagement envers l'excellence garantissent 
            la réussite de vos projets.
          </p>
        </div>
      </div>
    </section>
  )
}