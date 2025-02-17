import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Informations de Contact</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Adresse</h3>
              <p className="text-gray-600">Cacao Barry, face usine Sic-Cacao, Douala, Cameroun</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="h-6 w-6 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Téléphone</h3>
              <p className="text-gray-600">+237 674 185 679</p>
              <p className="text-gray-600">+237 655 541 248</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="h-6 w-6 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-gray-600">entreprise3psarl@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Clock className="h-6 w-6 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Horaires d'ouverture</h3>
              <p className="text-gray-600">Lundi - Vendredi: 8h00 - 17h00</p>
              <p className="text-gray-600">Samedi: 9h00 - 13h00</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Informations Légales</h2>
        <div className="space-y-2 text-gray-600">
          <p>Numéro de contribuable : M052116143548M</p>
          <p>Registre de commerce : DLN/2021/B/1475</p>
          <p>Forme juridique : SARL</p>
        </div>
      </div>
    </div>
  )
}