"use client"

import Link from "next/link"
import Image from 'next/image';
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Phone, Mail, Building2, Menu, X } from "lucide-react"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Qui sommes-nous ?", href: "/about" },
  { name: "Nos Services", href: "/services" },
  // { name: "Nos Réalisations", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-end py-2 border-b border-gray-200">
          <div className="flex items-center space-x-6 text-sm">
            <a 
              href="tel:+237674185679" 
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+237 674 185 679</span>
            </a>
            <a 
              href="mailto:entreprise3psarl@gmail.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>entreprise3psarl@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Main Header */}
        <div className="flex h-20 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <div className="flex flex-col items-center">
              <Image 
                src="/images/3p-sarl-logo.png" 
                alt="3P SARL Logo" 
                width={120}
                height={56}
                priority
                className="h-14 w-auto object-contain"
              />
              <p className="text-[11px] text-gray-600 font-medium -mt-1">
              Génie Civil & Services
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 py-2">
              Demander un devis
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="py-6 px-4 space-y-4 border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-base font-medium transition-colors hover:text-primary ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-gray-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-4 border-t border-gray-200">
                <a 
                  href="tel:+237674185679"
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+237 674 185 679</span>
                </a>
                <a 
                  href="mailto:entreprise3psarl@gmail.com"
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>entreprise3psarl@gmail.com</span>
                </a>
                <button className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 py-2">
                  Demander un devis
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}