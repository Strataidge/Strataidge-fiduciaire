"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

const pageNames: Record<string, string> = {
  "/solutions": "Solutions Comptables & Fiscales",
  "/approche": "Notre Approche Stratégique",
  "/offres": "Nos Offres sur Mesure",
  "/contact": "Contact & Devis",
  "/about": "À Propos de Strataidge",
  "/services": "Nos Services",
  "/blog": "Blog & Actualités",
  "/creation-entreprise": "Création d'Entreprise",
  "/conseil-fiscal": "Conseil Fiscal",
  "/expertise-comptable": "Expertise Comptable",
}

export function Breadcrumb() {
  const pathname = usePathname()

  if (pathname === "/") return null

  const pathSegments = pathname.split("/").filter(Boolean)

  return (
    <nav aria-label="Fil d'Ariane" className="py-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-strataidge-turquoise transition-colors"
            aria-label="Retour à l'accueil"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Accueil</span>
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const path = "/" + pathSegments.slice(0, index + 1).join("/")
          const isLast = index === pathSegments.length - 1
          const name = pageNames[path] || segment.charAt(0).toUpperCase() + segment.slice(1)

          return (
            <li key={path} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
              {isLast ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {name}
                </span>
              ) : (
                <Link href={path} className="hover:text-strataidge-turquoise transition-colors">
                  {name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
