import Image from 'next/image';


export function AboutHero() {
  return (
    <section className="relative py-32 mt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero-image.jpg"
          alt="3P SARL background"
          fill
          className="object-cover w-full h-full"
          objectPosition="top"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Notre Histoire et Notre Vision
          </h1>
          <p className="text-lg mb-12 text-gray-200">
            Depuis notre création, 3P SARL s'est engagée à fournir des services de qualité supérieure 
            dans les domaines du génie civil, du commerce et des services au Cameroun.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Notre Mission</h3>
              <p className="text-gray-200">
                Offrir des solutions innovantes et durables pour répondre aux besoins de nos clients.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Notre Vision</h3>
              <p className="text-gray-200">
                Devenir le leader de référence dans nos domaines d'activité au Cameroun.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Nos Valeurs</h3>
              <p className="text-gray-200">
                Excellence, intégrité et engagement envers la satisfaction client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}