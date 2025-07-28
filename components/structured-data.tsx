export function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": "https://www.strataidge-fiduciaire.com/#organization",
    name: "Strataidge Fiduciaire & Conseils",
    alternateName: ["Strataidge", "Strataidge Fiduciaire"],
    description:
      "Expert-comptable et conseil fiscal en Belgique. Accompagnement comptable, fiscal et stratégique pour PME, indépendants et entreprises en Wallonie et Bruxelles.",
    url: "https://www.strataidge-fiduciaire.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.strataidge-fiduciaire.com/logo.png",
      width: 200,
      height: 200,
    },
    image: {
      "@type": "ImageObject",
      url: "https://www.strataidge-fiduciaire.com/hero-background.jpg",
      width: 1200,
      height: 630,
    },
    telephone: "+32 499 47 02 98",
    email: "contact@strataidge-fiduciaire.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BE",
      addressRegion: "Wallonie",
      addressLocality: "Belgique",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.8503",
      longitude: "4.3517",
    },
    serviceType: [
      "Expertise comptable",
      "Conseil fiscal",
      "Stratégie d'entreprise",
      "Accompagnement fiduciaire",
      "Création d'entreprise",
      "Transmission d'entreprise",
      "Optimisation fiscale",
      "Gestion comptable",
      "Déclarations fiscales",
      "Conseil en gestion",
    ],
    areaServed: [
      {
        "@type": "Place",
        name: "Belgique",
      },
      {
        "@type": "Place",
        name: "Wallonie",
      },
      {
        "@type": "Place",
        name: "Bruxelles",
      },
      {
        "@type": "Place",
        name: "Charleroi",
      },
      {
        "@type": "Place",
        name: "Namur",
      },
      {
        "@type": "Place",
        name: "Liège",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/strataidge",
      "https://www.instagram.com/strataidge",
      "https://www.facebook.com/strataidge",
    ],
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 5,
      maxValue: 20,
    },
    priceRange: "€€",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "EUR",
    openingHours: ["Mo-Fr 09:00-18:00"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services comptables et fiscaux",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Digital",
            description: "Gestion comptable et fiscale complète, 100% en ligne",
            provider: {
              "@id": "https://www.strataidge-fiduciaire.com/#organization",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Standard",
            description: "Équilibre entre autonomie digitale et accompagnement humain",
            provider: {
              "@id": "https://www.strataidge-fiduciaire.com/#organization",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Strataidge",
            description: "Immersion stratégique pour transformer votre business",
            provider: {
              "@id": "https://www.strataidge-fiduciaire.com/#organization",
            },
          },
        },
      ],
    },
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.strataidge-fiduciaire.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.strataidge-fiduciaire.com#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact",
        item: "https://www.strataidge-fiduciaire.com#contact",
      },
    ],
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quels sont les services proposés par Strataidge Fiduciaire ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Strataidge Fiduciaire propose des services d'expertise comptable, conseil fiscal, stratégie d'entreprise, création et transmission d'entreprise, optimisation fiscale et accompagnement digital pour les PME et indépendants en Belgique.",
        },
      },
      {
        "@type": "Question",
        name: "Dans quelles régions Strataidge intervient-elle ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Strataidge Fiduciaire intervient principalement en Wallonie et à Bruxelles, avec des services pour toute la Belgique. Nous accompagnons les entreprises de Charleroi, Namur, Liège et dans toute la région wallonne.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les tarifs des services comptables ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos tarifs commencent à partir de 50€/mois pour l'offre Full Digital, 250€/mois pour l'offre Standard et 500€/mois pour l'offre Strataidge. Nous proposons également des services à la carte sur devis.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
    </>
  )
}
