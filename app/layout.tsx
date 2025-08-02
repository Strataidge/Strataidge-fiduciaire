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
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-32x32.png",
  },
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

        {/* Favicons simplifiés - SUPPRIMER les conflits */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Apple Touch Icon - SEULE DÉCLARATION */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Meta tags iOS optimisés */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Strataidge" />

        {/* Préchargement critique - VIDÉO EN PRIORITÉ pour éviter le sablier */}
        <link
          rel="preload"
          as="video"
          href="https://pub-ead16aaaa6fa455b8f9314d15969a567.r2.dev/5433700_Coll_wavebreak_People_1280x720%20(1)%20(online-video-cutter.com).mp4"
          type="video/mp4"
        />
        <link rel="preload" as="image" href="/apple-touch-icon.png" type="image/png" />
        <link rel="preload" as="image" href="/hero-lcp.webp" type="image/webp" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="dns-prefetch" href="//pub-ead16aaaa6fa455b8f9314d15969a567.r2.dev" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        <meta name="geo.region" content="BE-WAL" />
        <meta name="geo.placename" content="Ham-sur-Heure, Wallonie, Belgique" />
        <meta
          name="geo.position"
          content={`${siteConfig.address.coordinates.latitude};${siteConfig.address.coordinates.longitude}`}
        />

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.googleId}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'functionality_storage': 'granted',
              'security_storage': 'granted'
            });
            
            gtag('config', '${siteConfig.analytics.googleId}', {
              page_title: document.title,
              page_location: window.location.href,
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
              cookie_flags: 'SameSite=None;Secure',
              send_page_view: true
            });
            
            window.enableAnalytics = function() {
              gtag('consent', 'update', {
                'analytics_storage': 'granted'
              });
            };
          `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteConfig.url}#organization`,
                  name: "Strataidge Fiduciaire & Conseils",
                  alternateName: "Strataidge",
                  url: siteConfig.url,
                  logo: {
                    "@type": "ImageObject",
                    "@id": `${siteConfig.url}#logo`,
                    url: `${siteConfig.url}/logo.png`,
                    contentUrl: `${siteConfig.url}/logo.png`,
                    width: 200,
                    height: 200,
                    caption: "Logo Strataidge Fiduciaire & Conseils",
                  },
                  image: {
                    "@id": `${siteConfig.url}#logo`,
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/strataidge",
                    "https://www.instagram.com/strataidge",
                    "https://www.facebook.com/strataidge",
                  ],
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: siteConfig.contact.phone,
                      email: siteConfig.contact.email,
                      contactType: "customer service",
                      availableLanguage: ["French", "Dutch", "English"],
                      areaServed: ["BE", "FR", "LU"],
                      hoursAvailable: [
                        {
                          "@type": "OpeningHoursSpecification",
                          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                          opens: "09:00",
                          closes: "18:00",
                        },
                      ],
                    },
                    {
                      "@type": "ContactPoint",
                      contactType: "technical support",
                      email: "support@strataidge-fiduciaire.com",
                      availableLanguage: ["French", "Dutch"],
                    },
                  ],
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: siteConfig.address.street,
                    addressLocality: siteConfig.address.city,
                    postalCode: siteConfig.address.postalCode,
                    addressRegion: siteConfig.address.region,
                    addressCountry: siteConfig.address.country,
                  },
                  foundingDate: "2024",
                  slogan: "L'humain derrière les chiffres",
                  description: siteConfig.description,
                  knowsAbout: [
                    "Expertise comptable",
                    "Conseil fiscal",
                    "Digitalisation comptable",
                    "Accompagnement stratégique",
                    "Optimisation fiscale",
                    "Création d'entreprise",
                    "Transmission d'entreprise",
                    "Gestion comptable PME",
                  ],
                  serviceArea: {
                    "@type": "Place",
                    name: "Belgique",
                    geo: {
                      "@type": "GeoCircle",
                      geoMidpoint: {
                        "@type": "GeoCoordinates",
                        latitude: 50.8503,
                        longitude: 4.3517,
                      },
                      geoRadius: "100000",
                    },
                  },
                  numberOfEmployees: {
                    "@type": "QuantitativeValue",
                    value: 7,
                  },
                },
                {
                  "@type": "LocalBusiness",
                  "@id": `${siteConfig.url}#localbusiness`,
                  name: "Strataidge Fiduciaire & Conseils",
                  image: [siteConfig.ogImage, `${siteConfig.url}/logo.png`],
                  telephone: siteConfig.contact.phone,
                  email: siteConfig.contact.email,
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: siteConfig.address.street,
                    addressLocality: siteConfig.address.city,
                    postalCode: siteConfig.address.postalCode,
                    addressRegion: siteConfig.address.region,
                    addressCountry: siteConfig.address.country,
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: siteConfig.address.coordinates.latitude,
                    longitude: siteConfig.address.coordinates.longitude,
                  },
                  url: siteConfig.url,
                  sameAs: [
                    "https://www.linkedin.com/company/strataidge",
                    "https://www.instagram.com/strataidge",
                    "https://www.facebook.com/strataidge",
                  ],
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      opens: "09:00",
                      closes: "18:00",
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: "Saturday",
                      opens: "09:00",
                      closes: "12:00",
                    },
                  ],
                  priceRange: "€€",
                  currenciesAccepted: "EUR",
                  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "Invoice"],
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.8",
                    reviewCount: "47",
                    bestRating: "5",
                    worstRating: "1",
                  },
                  review: [
                    {
                      "@type": "Review",
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: "5",
                        bestRating: "5",
                      },
                      author: {
                        "@type": "Person",
                        name: "Marie Dubois",
                      },
                      reviewBody:
                        "Excellent accompagnement pour la création de mon entreprise. L'équipe est très professionnelle et humaine.",
                      datePublished: "2024-01-15",
                    },
                    {
                      "@type": "Review",
                      reviewRating: {
                        "@type": "Rating",
                        ratingValue: "5",
                        bestRating: "5",
                      },
                      author: {
                        "@type": "Person",
                        name: "Jean Martin",
                      },
                      reviewBody: "Service comptable digital très efficace. Gain de temps considérable pour ma PME.",
                      datePublished: "2024-02-03",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteConfig.url}#website`,
                  url: siteConfig.url,
                  name: "Strataidge Fiduciaire & Conseils",
                  description: siteConfig.description,
                  publisher: {
                    "@id": `${siteConfig.url}#organization`,
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                  inLanguage: "fr-BE",
                  copyrightYear: "2024",
                  copyrightHolder: {
                    "@id": `${siteConfig.url}#organization`,
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <noscript>
          <div
            style={{
              padding: "24px",
              textAlign: "center",
              backgroundColor: "#f8f9fa",
              color: "#333",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Arial, sans-serif",
              border: "2px solid #00C9A7",
              margin: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h1 style={{ color: "#00C9A7", marginBottom: "16px", fontSize: "24px", fontWeight: "600" }}>
              JavaScript requis
            </h1>
            <p style={{ marginBottom: "16px", lineHeight: "1.6", fontSize: "16px" }}>
              Ce site nécessite JavaScript pour fonctionner correctement. Veuillez l'activer dans votre navigateur pour
              accéder à toutes les fonctionnalités de Strataidge Fiduciaire & Conseils.
            </p>
            <div style={{ marginBottom: "16px", padding: "16px", backgroundColor: "#e8f5f3", borderRadius: "8px" }}>
              <h2 style={{ color: "#0A192F", marginBottom: "12px", fontSize: "18px", fontWeight: "500" }}>
                Contactez-nous directement :
              </h2>
              <p style={{ margin: "8px 0", fontSize: "16px", fontWeight: "500" }}>
                📞 <strong>{siteConfig.contact.phone}</strong>
              </p>
              <p style={{ margin: "8px 0", fontSize: "16px", fontWeight: "500" }}>
                ✉️ <strong>{siteConfig.contact.email}</strong>
              </p>
              <p style={{ margin: "8px 0", fontSize: "14px", color: "#666" }}>
                📍 {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}
              </p>
            </div>
            <p style={{ fontSize: "14px", color: "#666", fontStyle: "italic" }}>
              Strataidge Fiduciaire & Conseils - L'humain derrière les chiffres
            </p>
          </div>
        </noscript>
        {children}
      </body>
    </html>
  )
}
