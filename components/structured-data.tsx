"use client"

import { usePathname } from "next/navigation"

export function StructuredData() {
  const pathname = usePathname()
  const siteUrl = "https://www.strataidge-fiduciaire.com"

  // Noms des pages pour le breadcrumb
  const pageNames = {
    "/solutions": "Solutions Comptables & Fiscales",
    "/approche": "Notre Approche Stratégique",
    "/offres": "Nos Offres sur Mesure",
    "/contact": "Contact & Devis",
    "/about": "À Propos de Strataidge",
    "/services": "Nos Services",
    "/blog": "Blog & Actualités",
    "/creation-entreprise": "Création d'Entreprise",
    "/conseil-fiscal": "Conseil Fiscal",
    "/expertise-comptable": "Expertise Comptable",
    "/optimisation-fiscale": "Optimisation Fiscale",
    "/digitalisation-comptable": "Digitalisation Comptable",
    "/accompagnement-pme": "Accompagnement PME",
    "/transmission-entreprise": "Transmission d'Entreprise",
  }

  // Breadcrumb dynamique enrichi selon la page
  const getBreadcrumbData = () => {
    const pathSegments = pathname.split("/").filter(Boolean)
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: siteUrl,
      },
    ]

    // Ajouter automatiquement la page actuelle si ce n'est pas la homepage
    if (pathname !== "/") {
      const cleanPath = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname
      const pageName =
        pageNames[cleanPath as keyof typeof pageNames] ||
        cleanPath
          .replace("/", "")
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")

      breadcrumbItems.push({
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: `${siteUrl}${cleanPath}`,
      })
    }

    // Pour les URLs avec plusieurs segments (ex: /blog/article-name)
    let currentPath = siteUrl
    pathSegments.forEach((segment, index) => {
      if (index > 0) {
        // Skip le premier segment déjà traité
        currentPath += `/${segment}`
        const segmentName =
          pageNames[`/${segment}` as keyof typeof pageNames] ||
          segment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")

        breadcrumbItems.push({
          "@type": "ListItem",
          position: index + 2,
          name: segmentName,
          item: currentPath,
        })
      }
    })

    return breadcrumbItems
  }

  // Service spécifique selon la page avec plus de détails
  const getServiceData = () => {
    const services = {
      "/solutions": {
        "@type": "Service",
        "@id": `${siteUrl}/solutions#service`,
        name: "Solutions Comptables et Fiscales Digitales",
        description:
          "Solutions humaines et digitales pour simplifier la comptabilité, optimiser la fiscalité et accompagner la croissance des entreprises et indépendants",
        serviceType: "Comptabilité et Fiscalité",
        category: "Professional Services",
        provider: {
          "@id": `${siteUrl}#organization`,
        },
        areaServed: [
          {
            "@type": "Country",
            name: "Belgique",
          },
          {
            "@type": "State",
            name: "Wallonie",
          },
          {
            "@type": "City",
            name: "Bruxelles",
          },
        ],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${siteUrl}/solutions`,
          serviceSmsNumber: "+32-499-47-02-98",
          servicePhone: "+32-499-47-02-98",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Solutions Comptables Digitales",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Digitalisation Comptable",
              description: "Transformation digitale complète de votre comptabilité avec outils modernes",
              category: "Digital Transformation",
              priceRange: "€€",
            },
            {
              "@type": "Offer",
              name: "Optimisation Fiscale",
              description: "Stratégies d'optimisation fiscale personnalisées pour réduire vos charges",
              category: "Tax Optimization",
              priceRange: "€€€",
            },
            {
              "@type": "Offer",
              name: "Accompagnement Stratégique",
              description: "Conseil stratégique pour le développement et la croissance d'entreprise",
              category: "Business Strategy",
              priceRange: "€€€",
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "34",
          bestRating: "5",
          worstRating: "1",
        },
      },
      "/offres": {
        "@type": "Service",
        "@id": `${siteUrl}/offres#service`,
        name: "Offres Comptables sur Mesure",
        description:
          "Formules flexibles et adaptées aux besoins spécifiques des indépendants, PME et grandes entreprises",
        serviceType: "Conseil Comptable",
        category: "Accounting Services",
        provider: {
          "@id": `${siteUrl}#organization`,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Catalogue des Services Comptables Strataidge",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Full Digital",
              description: "Solution comptable 100% digitale pour indépendants et petites entreprises",
              price: "50",
              priceCurrency: "EUR",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "50.00",
                priceCurrency: "EUR",
                billingIncrement: "1",
                unitText: "MONTH",
                billingDuration: "P1M",
              },
              itemOffered: {
                "@type": "Service",
                name: "Comptabilité Digitale",
                description: "Tenue de comptabilité, déclarations TVA, bilan annuel, support digital",
                serviceType: "Digital Accounting",
              },
              eligibleRegion: {
                "@type": "Country",
                name: "Belgique",
              },
              availability: "InStock",
              validFrom: "2024-01-01",
              validThrough: "2024-12-31",
            },
            {
              "@type": "Offer",
              name: "Standard",
              description: "Accompagnement comptable complet avec conseil personnalisé",
              price: "250",
              priceCurrency: "EUR",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "250.00",
                priceCurrency: "EUR",
                billingIncrement: "1",
                unitText: "MONTH",
                billingDuration: "P1M",
              },
              itemOffered: {
                "@type": "Service",
                name: "Comptabilité Standard",
                description: "Comptabilité complète, conseil fiscal, accompagnement personnalisé, reporting mensuel",
                serviceType: "Standard Accounting",
              },
              eligibleRegion: {
                "@type": "Country",
                name: "Belgique",
              },
              availability: "InStock",
              validFrom: "2024-01-01",
              validThrough: "2024-12-31",
            },
            {
              "@type": "Offer",
              name: "Strataidge Premium",
              description: "Solution premium avec conseil stratégique et accompagnement dédié",
              price: "500",
              priceCurrency: "EUR",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "500.00",
                priceCurrency: "EUR",
                billingIncrement: "1",
                unitText: "MONTH",
                billingDuration: "P1M",
              },
              itemOffered: {
                "@type": "Service",
                name: "Conseil Stratégique Premium",
                description: "Comptabilité, fiscalité, stratégie d'entreprise, accompagnement dédié, tableaux de bord",
                serviceType: "Premium Strategic Consulting",
              },
              eligibleRegion: {
                "@type": "Country",
                name: "Belgique",
              },
              availability: "InStock",
              validFrom: "2024-01-01",
              validThrough: "2024-12-31",
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "73",
          bestRating: "5",
          worstRating: "1",
        },
      },
      "/contact": {
        "@type": "ContactPage",
        "@id": `${siteUrl}/contact#contactpage`,
        name: "Contact Strataidge Fiduciaire",
        description:
          "Contactez-nous pour un accompagnement comptable et fiscal sur mesure. Devis gratuit et consultation personnalisée.",
        mainEntity: {
          "@id": `${siteUrl}#organization`,
        },
        significantLink: [
          `${siteUrl}/contact#contact-form`,
          `${siteUrl}/contact#phone`,
          `${siteUrl}/contact#email`,
          `${siteUrl}/contact#address`,
        ],
        breadcrumb: {
          "@id": `${siteUrl}/contact#breadcrumb`,
        },
        potentialAction: [
          {
            "@type": "CommunicateAction",
            name: "Appeler Strataidge",
            target: "tel:+32-499-47-02-98",
          },
          {
            "@type": "CommunicateAction",
            name: "Envoyer un email",
            target: "mailto:contact@strataidge-fiduciaire.com",
          },
        ],
      },
      "/approche": {
        "@type": "AboutPage",
        "@id": `${siteUrl}/approche#aboutpage`,
        name: "Notre Approche Stratégique",
        description:
          "Découvrez notre méthode unique qui allie expertise comptable, vision stratégique et outils digitaux pour accompagner votre entreprise",
        mainEntity: {
          "@id": `${siteUrl}#organization`,
        },
        significantLink: [`${siteUrl}/approche#methode`, `${siteUrl}/approche#valeurs`, `${siteUrl}/approche#equipe`],
        about: {
          "@type": "Thing",
          name: "Approche Comptable Humaine et Digitale",
          description: "Méthodologie unique combinant expertise traditionnelle et innovation digitale",
        },
      },
    }

    return services[pathname as keyof typeof services]
  }

  // FAQ Schema pour la page d'accueil
  const getFAQData = () => {
    if (pathname === "/") {
      return {
        "@type": "FAQPage",
        "@id": `${siteUrl}#faq`,
        name: "Questions Fréquentes - Strataidge Fiduciaire",
        description: "Réponses aux questions les plus fréquentes sur nos services comptables et fiscaux",
        mainEntity: [
          {
            "@type": "Question",
            name: "Quels sont les services proposés par Strataidge Fiduciaire ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Strataidge Fiduciaire propose des services d'expertise comptable, conseil fiscal, stratégie d'entreprise, création et transmission d'entreprise, optimisation fiscale et accompagnement digital pour les PME et indépendants en Belgique. Nos solutions vont de la comptabilité digitale (50€/mois) au conseil stratégique premium (500€/mois).",
            },
          },
          {
            "@type": "Question",
            name: "Dans quelles régions Strataidge intervient-elle ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Strataidge Fiduciaire intervient principalement en Wallonie et à Bruxelles, avec des services pour toute la Belgique. Nous accompagnons les entreprises de Charleroi, Namur, Liège, Ham-sur-Heure et dans toute la région wallonne. Notre approche digitale nous permet d'accompagner des clients dans toute la Belgique.",
            },
          },
          {
            "@type": "Question",
            name: "Quels sont les tarifs des services comptables ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nos tarifs commencent à partir de 50€/mois pour l'offre Full Digital (comptabilité 100% digitale), 250€/mois pour l'offre Standard (accompagnement complet) et 500€/mois pour l'offre Strataidge Premium (conseil stratégique). Nous proposons également des services à la carte sur devis personnalisé.",
            },
          },
          {
            "@type": "Question",
            name: "Comment fonctionne l'approche digitale de Strataidge ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Notre approche digitale combine outils technologiques avancés et accompagnement humain personnalisé. Nous utilisons des plateformes de comptabilité en ligne, l'automatisation des processus et des tableaux de bord en temps réel, tout en maintenant un contact direct avec nos experts comptables pour un conseil stratégique adapté.",
            },
          },
          {
            "@type": "Question",
            name: "Strataidge accompagne-t-elle la création d'entreprise ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui, nous accompagnons les entrepreneurs dans toutes les étapes de création d'entreprise : choix de la forme juridique, business plan, démarches administratives, optimisation fiscale dès le démarrage, et mise en place des outils comptables digitaux. Notre expertise couvre les spécificités belges et wallonnes.",
            },
          },
        ],
      }
    }
    return null
  }

  // Article Schema pour les pages de contenu
  const getArticleData = () => {
    const articles = {
      "/solutions": {
        "@type": "Article",
        "@id": `${siteUrl}/solutions#article`,
        headline: "Solutions Comptables et Fiscales Digitales pour Entreprises",
        description:
          "Découvrez nos solutions innovantes qui allient expertise comptable traditionnelle et outils digitaux modernes",
        author: {
          "@id": `${siteUrl}#organization`,
        },
        publisher: {
          "@id": `${siteUrl}#organization`,
        },
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString().split("T")[0],
        image: `${siteUrl}/og-image-strataidge.webp`,
        articleSection: "Services",
        wordCount: 800,
        inLanguage: "fr-BE",
        about: [
          {
            "@type": "Thing",
            name: "Comptabilité Digitale",
            description: "Solutions de comptabilité numérique pour entreprises modernes",
          },
          {
            "@type": "Thing",
            name: "Optimisation Fiscale",
            description: "Stratégies d'optimisation fiscale pour entreprises belges",
          },
        ],
      },
      "/approche": {
        "@type": "Article",
        "@id": `${siteUrl}/approche#article`,
        headline: "Notre Approche : L'Humain Derrière les Chiffres",
        description: "Découvrez notre méthode unique qui place l'humain au centre de l'expertise comptable et fiscale",
        author: {
          "@id": `${siteUrl}#organization`,
        },
        publisher: {
          "@id": `${siteUrl}#organization`,
        },
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString().split("T")[0],
        image: `${siteUrl}/og-image-strataidge.webp`,
        articleSection: "About",
        wordCount: 600,
        inLanguage: "fr-BE",
        about: [
          {
            "@type": "Thing",
            name: "Approche Humaine",
            description: "Méthodologie centrée sur l'accompagnement personnalisé",
          },
          {
            "@type": "Thing",
            name: "Innovation Comptable",
            description: "Intégration des nouvelles technologies dans l'expertise comptable",
          },
        ],
      },
      "/offres": {
        "@type": "Article",
        "@id": `${siteUrl}/offres#article`,
        headline: "Nos Offres Comptables sur Mesure",
        description: "Découvrez nos formules adaptées à chaque type d'entreprise et d'entrepreneur",
        author: {
          "@id": `${siteUrl}#organization`,
        },
        publisher: {
          "@id": `${siteUrl}#organization`,
        },
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString().split("T")[0],
        image: `${siteUrl}/og-image-strataidge.webp`,
        articleSection: "Pricing",
        wordCount: 700,
        inLanguage: "fr-BE",
        about: [
          {
            "@type": "Thing",
            name: "Tarification Comptable",
            description: "Grilles tarifaires transparentes pour services comptables",
          },
          {
            "@type": "Thing",
            name: "Services sur Mesure",
            description: "Solutions personnalisées selon les besoins d'entreprise",
          },
        ],
      },
    }

    return articles[pathname as keyof typeof articles]
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}${pathname}#breadcrumb`,
        itemListElement: getBreadcrumbData(),
      },
    ],
  }

  // Ajouter les données de service si disponibles
  const serviceData = getServiceData()
  if (serviceData) {
    structuredData["@graph"].push(serviceData)
  }

  // Ajouter FAQ pour la page d'accueil
  const faqData = getFAQData()
  if (faqData) {
    structuredData["@graph"].push(faqData)
  }

  // Ajouter Article pour les pages de contenu
  const articleData = getArticleData()
  if (articleData) {
    structuredData["@graph"].push(articleData)
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
