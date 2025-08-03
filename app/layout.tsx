import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { CookieBanner } from "@/components/cookie-banner"
import { CookiePolicyLink } from "@/components/cookie-policy-link"
import { StructuredData } from "@/components/structured-data"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://strataidge.be"),
  title: {
    default: "Strataidge Fiduciaire et Conseils - Expert-comptable à Bruxelles",
    template: "%s | Strataidge Fiduciaire et Conseils",
  },
  description:
    "Cabinet d'expertise comptable à Bruxelles spécialisé dans l'accompagnement des PME, startups et indépendants. Services de comptabilité, fiscalité et conseil en gestion.",
  keywords: ["expert-comptable", "comptabilité", "fiscalité", "Bruxelles", "PME", "startup", "conseil", "gestion"],
  authors: [{ name: "Strataidge Fiduciaire et Conseils" }],
  creator: "Strataidge Fiduciaire et Conseils",
  publisher: "Strataidge Fiduciaire et Conseils",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://strataidge.be",
    siteName: "Strataidge Fiduciaire et Conseils",
    title: "Strataidge Fiduciaire et Conseils - Expert-comptable à Bruxelles",
    description:
      "Cabinet d'expertise comptable à Bruxelles spécialisé dans l'accompagnement des PME, startups et indépendants.",
    images: [
      {
        url: "/og-image-strataidge.jpg",
        width: 1200,
        height: 630,
        alt: "Strataidge Fiduciaire et Conseils",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strataidge Fiduciaire et Conseils - Expert-comptable à Bruxelles",
    description:
      "Cabinet d'expertise comptable à Bruxelles spécialisé dans l'accompagnement des PME, startups et indépendants.",
    images: ["/og-image-strataidge.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://strataidge.be",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        {/* Preconnect pour optimiser les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Prefetch DNS pour les domaines externes */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Optimisations pour mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Favicons optimisés */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>

        {/* Lazy load des composants non critiques */}
        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <Suspense fallback={null}>
          <CookiePolicyLink />
        </Suspense>
      </body>
    </html>
  )
}
