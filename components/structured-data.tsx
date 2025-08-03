"use client"

import { usePathname } from "next/navigation"

export function StructuredData() {
  const pathname = usePathname()
  const siteUrl = "https://www.strataidge-fiduciaire.com"

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Strataidge Fiduciaire & Conseils",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: "Expert-comptable et conseil fiscal en Belgique",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+32-499-47-02-98",
      email: "contact@strataidge-fiduciaire.com",
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rue Amérique 10",
      addressLocality: "Ham-sur-Heure",
      postalCode: "6120",
      addressCountry: "BE",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
