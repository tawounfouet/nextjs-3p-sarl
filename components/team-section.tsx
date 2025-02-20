import Image from 'next/image';

export function TeamSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-blue-900  font-bold mb-4">Notre Équipe</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une équipe de professionnels qualifiés et expérimentés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-[4/5] relative">
              <Image
                src="/images/team/djahoung-vivien.png" // Add your image path here
                alt="R. DJAHOUNG Vivien"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10" />
            </div>
            <div className="p-6">
              <h3 className="text-xl text-blue-950  font-semibold mb-1">R. DJAHOUNG Vivien</h3>
              <p className="text-gray-600 mb-4">Gérant</p>
              {/* <p className="text-sm text-gray-500">
                Plus de 15 ans d'expérience dans le secteur du BTP et du commerce international
              </p> */}
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-[4/5] relative">
              <Image
                src="/images/team/ngatia-bertin.png" // Add your image path here
                alt="Direction Technique"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10" />
            </div>
            <div className="p-6">
              <h3 className="text-xl text-blue-950 font-semibold mb-1">NGATIA BERTIN</h3>
              <p className="text-gray-600 mb-4">Général Manager</p>
              {/* <p className="text-sm text-gray-500">
                Experts en génie civil et gestion de projets
              </p> */}
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-[4/5] relative">
              <Image
                src="/images/team/godwill-kase.png" // Add your image path here
                alt="Service Commercial"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10" />
            </div>
            <div className="p-6">
              <h3 className="text-xl text-blue-950 font-semibold mb-1">GODWILL Kase</h3>
              <p className="text-gray-600 mb-4">Directeur Technique</p>
              {/* <p className="text-sm text-gray-500">
                À votre écoute pour tous vos projets
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}