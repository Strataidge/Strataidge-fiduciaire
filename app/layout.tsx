import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { cn } from "@/lib/utils"
import { StructuredData } from "@/components/structured-data"

const siteConfig = {
  name: "Strataidge Fiduciaire – Conseil et Accompagnement Stratégique",
  description:
    "Strataidge Fiduciaire : votre partenaire en stratégie d'entreprise et accompagnement fiduciaire, pour développer et optimiser votre business.",
  url: "https://www.strataidge-fiduciaire.com",
  ogImage: "https://www.strataidge-fiduciaire.com/hero-background.jpg",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
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
        alt: "Strataidge Fiduciaire & Conseils",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#0A192F",
    "theme-color": "#00C9A7",
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
      <head>
        <StructuredData />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body>{children}</body>
    </html>
  )
}
