export function StructuredData() {
  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.strataidge-fiduciaire.com/#organization",
            name: "Strataidge Fiduciaire & Conseils",
            url: "https://www.strataidge-fiduciaire.com",
            logo: {
              "@type": "ImageObject",
              "@id": "https://www.strataidge-fiduciaire.com/#logo",
              url: "https://www.strataidge-fiduciaire.com/logo.png",
              width: 200,
              height: 200,
            },
            image: {
              "@type": "ImageObject",
              "@id": "https://www.strataidge-fiduciaire.com/#logo",
              url: "https://www.strataidge-fiduciaire.com/logo.png",
              width: 200,
              height: 200,
            },
            description:
              "Expert-comptable et conseil fiscal en Belgique. Accompagnement comptable, fiscal et stratégique pour PME, indépendants et entreprises en Wallonie et Bruxelles.",
            address: {
              "@type": "PostalAddress",
              addressCountry: "BE",
              addressRegion: "Wallonie",
              addressLocality: "Belgique",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+32-499-47-02-98",
              contactType: "customer service",
              email: "contact@strataidge-fiduciaire.com",
              availableLanguage: ["French"],
              areaServed: ["BE"],
            },
            sameAs: ["https://www.linkedin.com/company/strataidge", "https://www.instagram.com/strataidge"],
            foundingDate: "2024",
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              value: "5-10",
            },
            slogan: "L'humain derrière les chiffres",
            knowsAbout: [
              "Expertise comptable",
              "Conseil fiscal",
              "Création d'entreprise",
              "Transmission d'entreprise",
              "Optimisation fiscale",
              "Gestion comptable",
              "Conseil stratégique",
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
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services comptables et fiscaux",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Pilotage comptable digitalisé",
                    description:
                      "Gestion continue et innovante de vos flux financiers pour une vision claire et anticipative.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Stratégies fiscales sur mesure",
                    description:
                      "Des stratégies adaptées à vos enjeux, alliant anticipation et rigueur pour une fiscalité optimisée.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Création d'entreprise",
                    description:
                      "De l'idée à la réalité, nous vous guidons pour lancer votre entreprise sur des bases solides.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Transmission & Acquisition",
                    description:
                      "Un accompagnement stratégique pour sécuriser et valoriser la vente ou l'acquisition d'une entreprise.",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.strataidge-fiduciaire.com/#website",
            url: "https://www.strataidge-fiduciaire.com",
            name: "Strataidge Fiduciaire & Conseils",
            description:
              "Expert-comptable et conseil fiscal en Belgique. Accompagnement comptable, fiscal et stratégique pour PME, indépendants et entreprises en Wallonie et Bruxelles.",
            publisher: {
              "@id": "https://www.strataidge-fiduciaire.com/#organization",
            },
            potentialAction: [
              {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.strataidge-fiduciaire.com/?s={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            ],
            inLanguage: "fr-BE",
          }),
        }}
      />

      {/* BreadcrumbList Schema - CORRIGÉ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://www.strataidge-fiduciaire.com/#breadcrumblist",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: {
                  "@type": "WebPage",
                  "@id": "https://www.strataidge-fiduciaire.com/",
                  url: "https://www.strataidge-fiduciaire.com/",
                  name: "Strataidge Fiduciaire - Expert-comptable en Belgique",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Vision",
                item: {
                  "@type": "WebPage",
                  "@id": "https://www.strataidge-fiduciaire.com/#about",
                  url: "https://www.strataidge-fiduciaire.com/#about",
                  name: "Notre vision - Strataidge Fiduciaire",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Solutions",
                item: {
                  "@type": "WebPage",
                  "@id": "https://www.strataidge-fiduciaire.com/#services",
                  url: "https://www.strataidge-fiduciaire.com/#services",
                  name: "Nos solutions comptables et fiscales",
                },
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Offres",
                item: {
                  "@type": "WebPage",
                  "@id": "https://www.strataidge-fiduciaire.com/#offers",
                  url: "https://www.strataidge-fiduciaire.com/#offers",
                  name: "Nos offres de services",
                },
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Contact",
                item: {
                  "@type": "WebPage",
                  "@id": "https://www.strataidge-fiduciaire.com/#contact",
                  url: "https://www.strataidge-fiduciaire.com/#contact",
                  name: "Contactez Strataidge Fiduciaire",
                },
              },
            ],
          }),
        }}
      />

      {/* Professional Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://www.strataidge-fiduciaire.com/#service",
            name: "Strataidge Fiduciaire & Conseils",
            image: "https://www.strataidge-fiduciaire.com/logo.png",
            description:
              "Expert-comptable et conseil fiscal en Belgique. Accompagnement comptable, fiscal et stratégique pour PME, indépendants et entreprises en Wallonie et Bruxelles.",
            provider: {
              "@id": "https://www.strataidge-fiduciaire.com/#organization",
            },
            areaServed: {
              "@type": "Country",
              name: "Belgique",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services de fiduciaire",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Expertise comptable",
                    serviceType: "Comptabilité",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Conseil fiscal",
                    serviceType: "Fiscalité",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Création d'entreprise",
                    serviceType: "Accompagnement",
                  },
                },
              ],
            },
            priceRange: "€€",
            telephone: "+32-499-47-02-98",
            email: "contact@strataidge-fiduciaire.com",
            url: "https://www.strataidge-fiduciaire.com",
            sameAs: ["https://www.linkedin.com/company/strataidge", "https://www.instagram.com/strataidge"],
          }),
        }}
      />
    </>
  )
}
