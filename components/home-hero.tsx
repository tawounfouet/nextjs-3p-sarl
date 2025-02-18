"use client"

import { ArrowRight } from "lucide-react"

export function HomeHero() {
  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home-hero-image.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Votre Partenaire de Confiance en Construction et Services
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Expertise en génie civil, BTP, commerce général, immobilier et prestations de services au Cameroun
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md px-8 w-full sm:w-auto bg-white text-black hover:bg-gray-100">
              Découvrir nos services
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md px-8 w-full sm:w-auto border border-white text-white hover:bg-white/10">
              Nos réalisations
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}