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
              addressLocality: "Ham-sur-Heure",
              postalCode: "6120",
              streetAddress: "Rue Amérique 10",
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
              value: 7,
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

      {/* BreadcrumbList Schema - VERSION FINALE CORRIGÉE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "@id": "https://www.strataidge-fiduciaire.com/#breadcrumb",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: "https://www.strataidge-fiduciaire.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Vision",
                item: "https://www.strataidge-fiduciaire.com/#about",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Solutions",
                item: "https://www.strataidge-fiduciaire.com/#services",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Offres",
                item: "https://www.strataidge-fiduciaire.com/#offers",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Contact",
                item: "https://www.strataidge-fiduciaire.com/#contact",
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
            address: {
              "@type": "PostalAddress",
              addressCountry: "BE",
              addressRegion: "Wallonie",
              addressLocality: "Ham-sur-Heure",
              postalCode: "6120",
              streetAddress: "Rue Amérique 10",
            },
            numberOfEmployees: {
              "@type": "QuantitativeValue",
              value: 7,
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://www.strataidge-fiduciaire.com/#faq",
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
          }),
        }}
      />
    </>
  )
}
