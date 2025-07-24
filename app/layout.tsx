import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { cn } from "@/lib/utils"

const siteConfig = {
  name: "Strataidge | Fiduciaire & Conseils",
  description:
    "Strataidge Fiduciaire et Conseil : expertise comptable, fiscale et humaine au service d'une réussite sereine.",
  url: "https://strataidge-fiduciaire.com",
  ogImage: "https://strataidge-fiduciaire.com/hero-background.jpg",
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "fiduciaire",
    "comptable",
    "fiscalité",
    "conseil",
    "entreprise",
    "Belgique",
    "Strataidge",
    "PME",
    "indépendant",
  ],
  authors: [{ name: "Strataidge" }],
  creator: "Strataidge",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@strataidge", // Remplacez par votre handle Twitter si vous en avez un
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={cn("antialiased", GeistSans.className)}>
      <body>{children}</body>
    </html>
  )
}
