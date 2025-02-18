const testimonials = [
  {
    content: "3P SARL a dépassé toutes nos attentes. Leur professionnalisme et leur expertise ont permis de mener notre projet à bien dans les délais impartis.",
    // author: "Jean Michel",
    // position: "Directeur Général",
    // company: "Société Immobilière de Douala"
  },
  {
    content: "Une équipe exceptionnelle qui a su comprendre nos besoins et proposer des solutions adaptées. Je recommande vivement leurs services.",
    // author: "Marie Claire",
    // position: "Gérante",
    // company: "MC Construction"
  },
  {
    content: "La qualité de leur travail et leur engagement envers la satisfaction client sont remarquables. Un partenaire de confiance pour tous vos projets.",
    // author: "Paul Biya",
    // position: "Architecte",
    // company: "Cabinet d'Architecture Moderne"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl text-blue-900  font-bold mb-4">Ce que disent nos clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre meilleure récompense
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <p className="text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}