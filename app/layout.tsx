import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { cn } from "@/lib/utils"
import { StructuredData } from "@/components/structured-data"

const siteConfig = {
  name: "Strataidge Fiduciaire – Expert-comptable et Conseil Fiscal en Belgique",
  description:
    "Strataidge Fiduciaire : expert-comptable et conseil fiscal en Belgique. Accompagnement comptable, fiscal et stratégique pour PME, indépendants et entreprises en Wallonie et Bruxelles.",
  url: "https://www.strataidge-fiduciaire.com",
  ogImage: "https://www.strataidge-fiduciaire.com/hero-background.jpg",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | Strataidge Fiduciaire - Expert-comptable Belgique`,
  },
  description: siteConfig.description,
  keywords: [
    "expert-comptable Belgique",
    "fiduciaire Belgique",
    "comptable Charleroi",
    "comptable Bruxelles",
    "conseil fiscal Belgique",
    "expert-comptable Wallonie",
    "fiduciaire Charleroi",
    "fiduciaire Bruxelles",
    "création entreprise Belgique",
    "transmission entreprise",
    "optimisation fiscale Belgique",
    "gestion comptable PME",
    "déclaration TVA Belgique",
    "bilan comptable",
    "stratégie fiscale",
    "accompagnement entreprise",
    "conseil en gestion",
    "expertise comptable digitale",
    "comptabilité en ligne",
    "fiduciaire digitale",
  ],
  authors: [{ name: "Strataidge Fiduciaire & Conseils", url: "https://www.strataidge-fiduciaire.com" }],
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
        alt: "Strataidge Fiduciaire & Conseils - Expert-comptable en Belgique",
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
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileImage": "/favicon-48x48.png",
    "msapplication-TileColor": "#0A192F",
    "theme-color": "#00C9A7",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Strataidge",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
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
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <meta name="geo.region" content="BE" />
        <meta name="geo.placename" content="Belgique" />
        <meta name="geo.position" content="50.8503;4.3517" />
        <meta name="ICBM" content="50.8503, 4.3517" />

        {/* Google Analytics - AJOUTÉ */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />

        {/* Social Media Integration - AJOUTÉ */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.fbAsyncInit = function() {
                FB.init({
                  appId: 'YOUR_FACEBOOK_APP_ID',
                  cookie: true,
                  xfbml: true,
                  version: 'v18.0'
                });
              };
              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/fr_FR/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Strataidge Fiduciaire & Conseils",
              url: "https://www.strataidge-fiduciaire.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.strataidge-fiduciaire.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        <noscript>
          <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#f0f0f0" }}>
            Ce site nécessite JavaScript pour fonctionner correctement. Veuillez l'activer dans votre navigateur.
          </div>
        </noscript>
        {children}
      </body>
    </html>
  )
}
