import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { cn } from "@/lib/utils"
import { StructuredData } from "@/components/structured-data"

const siteConfig = {
  name: "Fiduciaire Digitale et Humaine – Conseil Fiscal & Comptabilité",
  description:
    "Au-delà des chiffres : accompagnement fiscal et comptable digital et humain pour indépendants et entreprises de toutes tailles, avec vision claire.",
  url: "https://www.strataidge-fiduciaire.com",
  ogImage: "https://www.strataidge-fiduciaire.com/og-image-strataidge.jpg",
  ogImageSquare: "https://www.strataidge-fiduciaire.com/og-image-square.jpg",
  address: {
    street: "Rue Amérique 10",
    city: "Ham-sur-Heure",
    postalCode: "6120",
    region: "Wallonie",
    country: "BE",
    coordinates: {
      latitude: 50.3333,
      longitude: 4.25,
    },
  },
  contact: {
    phone: "+32-499-47-02-98",
    email: "contact@strataidge-fiduciaire.com",
  },
  analytics: {
    googleId: "G-XXXXXXXXXX",
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
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
  authors: [{ name: "Strataidge Fiduciaire & Conseils", url: siteConfig.url }],
  creator: "Strataidge Fiduciaire & Conseils",
  publisher: "Strataidge Fiduciaire & Conseils",
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
  alternates: {
    canonical: siteConfig.url,
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
        alt: "Strataidge Fiduciaire & Conseils - L'humain derrière les chiffres - Expert-comptable en Belgique",
        type: "image/jpeg",
      },
      {
        url: siteConfig.ogImageSquare,
        width: 1200,
        height: 1200,
        alt: "Logo Strataidge Fiduciaire & Conseils – Expert-comptable et conseil fiscal en Belgique",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@strataidge",
    site: "@strataidge",
  },
  // SUPPRESSION TOTALE DES ICONS DANS METADATA
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#00C9A7",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Strataidge",
  },
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
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <StructuredData />

        {/* SEULE DÉCLARATION D'ICÔNE - APPLE TOUCH ICON */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

        {/* Favicon basique */}
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />

        {/* Meta tags iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Strataidge" />

        {/* Préchargement vidéo pour éviter le sablier */}
        <link
          rel="preload"
          as="video"
          href="https://pub-ead16aaaa6fa455b8f9314d15969a567.r2.dev/5433700_Coll_wavebreak_People_1280x720%20(1)%20(online-video-cutter.com).mp4"
          type="video/mp4"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="dns-prefetch" href="//pub-ead16aaaa6fa455b8f9314d15969a567.r2.dev" />

        <meta name="geo.region" content="BE-WAL" />
        <meta name="geo.placename" content="Ham-sur-Heure, Wallonie, Belgique" />

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleId}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.analytics.googleId}');
          `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Strataidge Fiduciaire & Conseils",
              url: siteConfig.url,
              logo: `${siteConfig.url}/apple-touch-icon.png`,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: siteConfig.contact.phone,
                email: siteConfig.contact.email,
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
