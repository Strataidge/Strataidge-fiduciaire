import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { cn } from "@/lib/utils"

const siteConfig = {
  name: "Strataidge Fiduciaire – Conseil et Accompagnement Stratégique",
  description:
    "Strataidge Fiduciaire : votre partenaire en stratégie d’entreprise et accompagnement fiduciaire, pour développer et optimiser votre business.",
  url: "https://strataidge-fiduciaire.com",
  ogImage: "https://strataidge-fiduciaire.com/hero-background.jpg",
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - Strataidge Fiduciaire`,
  },
  description: siteConfig.description,
  keywords: ["Strataidge", "fiduciaire", "stratégie", "business", "conseil", "PME", "optimisation"],
  authors: [{ name: "Strataidge" }],
  creator: "Strataidge",
  robots: "index, follow",
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
    siteName: "Strataidge Fiduciaire",
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
    description: "Accompagnement stratégique et fiduciaire pour les PME.",
    images: [siteConfig.ogImage],
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
