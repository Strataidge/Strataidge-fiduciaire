import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solutions Comptables & Fiscales Digitales",
  description:
    "Solutions humaines et digitales pour simplifier la comptabilité, optimiser la fiscalité et soutenir la croissance des entreprises et indépendants.",
  keywords: [
    "solutions comptables digitales",
    "digitalisation comptabilité",
    "optimisation fiscale entreprise",
    "gestion comptable en ligne",
    "expert-comptable digital Belgique",
  ],
  openGraph: {
    title: "Solutions Comptables & Fiscales Digitales | Strataidge",
    description:
      "Solutions humaines et digitales pour simplifier la comptabilité, optimiser la fiscalité et soutenir la croissance des entreprises et indépendants.",
    url: "https://www.strataidge-fiduciaire.com/solutions",
  },
  alternates: {
    canonical: "https://www.strataidge-fiduciaire.com/solutions",
  },
}

export default function SolutionsPage() {
  return (
    <div>
      <h1>Solutions Comptables & Fiscales</h1>
      {/* Contenu de la page solutions */}
    </div>
  )
}
