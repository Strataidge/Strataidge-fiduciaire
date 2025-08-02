import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact & Devis Gratuit",
  description:
    "Parlons de votre stratégie comptable et fiscale. Contactez Strataidge pour un accompagnement humain et digital adapté à votre entreprise.",
  keywords: [
    "contact expert-comptable",
    "devis comptabilité gratuit",
    "rendez-vous fiduciaire",
    "consultation comptable Belgique",
    "expert-comptable Ham-sur-Heure",
  ],
  openGraph: {
    title: "Contact & Devis Gratuit | Strataidge",
    description:
      "Parlons de votre stratégie comptable et fiscale. Contactez Strataidge pour un accompagnement humain et digital adapté à votre entreprise.",
    url: "https://www.strataidge-fiduciaire.com/contact",
  },
  alternates: {
    canonical: "https://www.strataidge-fiduciaire.com/contact",
  },
}

export default function ContactPage() {
  return (
    <div>
      <h1>Contactez-nous</h1>
      {/* Contenu de la page contact */}
    </div>
  )
}
