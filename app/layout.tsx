import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr-BE" className={cn("antialiased", inter.variable)}>
      <head>
        {/* Préchargement DNS pour les domaines externes */}
        <link rel="dns-prefetch" href="//pub-ead16aaaa6fa455b8f9314d15969a567.r2.dev" />
        <link rel="dns-prefetch" href="//buck-able-curiously.ngrok-free.app" />

        {/* Préchargement des ressources critiques */}
        <link rel="preload" href="/logo.png" as="image" type="image/png" />

        {/* Optimisation viewport pour mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* Optimisation pour PWA */}
        <meta name="theme-color" content="#00C9A7" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <StructuredData />
      </head>
      <body className="overflow-x-hidden font-sans">{children}</body>
    </html>
  )
}
