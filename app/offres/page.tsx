import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos Offres Comptables sur Mesure",
  description:
    "Formules flexibles adaptées à chaque besoin : comptabilité, fiscalité et conseil stratégique pour indépendants, PME et grandes entreprises.",
  keywords: [
    "tarifs expert-comptable",
    "offres comptables sur mesure",
    "prix comptabilité entreprise",
    "formules comptables flexibles",
    "devis expert-comptable Belgique",
  ],
  openGraph: {
    title: "Nos Offres Comptables sur Mesure | Strataidge",
    description:
      "Formules flexibles adaptées à chaque besoin : comptabilité, fiscalité et conseil stratégique pour indépendants, PME et grandes entreprises.",
    url: "https://www.strataidge-fiduciaire.com/offres",
  },
  alternates: {
    canonical: "https://www.strataidge-fiduciaire.com/offres",
  },
}

export default function OffresPage() {
  return (
    <div>
      <h1>Nos Offres sur Mesure</h1>
      {/* Contenu de la page offres */}
    </div>
  )
}
