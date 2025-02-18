import Image from 'next/image';


export function ContactHero() {
  return (
    <section className="relative py-32 mt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/contact-hero-image.jpg"
          alt="Contact hero background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-4">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner 
            dans la réalisation de vos projets. N'hésitez pas à nous contacter pour plus d'informations.
          </p>
        </div>
      </div>
    </section>
  )
}