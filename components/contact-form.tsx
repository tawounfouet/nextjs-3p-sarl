"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSending(false)
    // Reset form
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Nom complet
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Téléphone
        </label>
        <input
          type="tel"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Service concerné
        </label>
        <select
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">Sélectionnez un service</option>
          <option value="genie-civil">Génie Civil & BTP</option>
          <option value="commerce">Commerce Général</option>
          <option value="immobilier">Immobilier</option>
          <option value="services">Prestations de Services</option>
          <option value="transit">Transit & Import-Export</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        {sending ? (
          "Envoi en cours..."
        ) : (
          <>
            Envoyer le message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </form>
  )
}