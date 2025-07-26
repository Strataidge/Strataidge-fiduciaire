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
  keywords: [
    "Strataidge",
    "fiduciaire",
    "stratégie",
    "business",
    "conseil",
    "PME",
    "optimisation",
    "fiduciaire Charleroi",
    "comptable Bruxelles",
    "fiduciaire Wallonie",
    "comptable Charleroi",
    "comptable Bruxelles",
    "fiduciaire Bruxelles",
  ],
  authors: [{ name: "Strataidge" }],
  creator: "Strataidge",
  robots: "index, follow",
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
