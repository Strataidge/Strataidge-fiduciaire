import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { cn } from "@/lib/utils"
import { StructuredData } from "@/components/structured-data"

const siteConfig = {
  name: "Fiduciaire Digitale & Humaine | Conseil Fiscal & Comptabilité Stratégique pour Indépendants & Entreprises",
  description:
    "Au-delà des chiffres, Strataidge Fiduciaire place l'humain et la stratégie au cœur de la comptabilité et du conseil fiscal. Des solutions digitales sur-mesure pour accompagner votre croissance en toute sérénité.",
  url: "https://www.strataidge-fiduciaire.com",
  ogImage: "https://www.strataidge-fiduciaire.com/og-image-strataidge.jpg",
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | Strataidge Fiduciaire`,
  },
  description: siteConfig.description,
  keywords: [
    "expert-comptable digital",
    "conseil fiscal",
    "comptabilité stratégique",
    "indépendants et entreprises",
    "fiduciaire humaine et digitale",
    "optimisation fiscale",
    "gestion comptable en ligne",
    "accompagnement sur-mesure",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: "Strataidge Fiduciaire & Conseils",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Strataidge Fiduciaire & Conseils - L'humain derrière les chiffres",
      },
    ],
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr-BE" className={cn("antialiased", GeistSans.className)}>
      <head>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  )
}
