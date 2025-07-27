export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Strataidge Fiduciaire & Conseils",
    description:
      "Strataidge Fiduciaire : votre partenaire en stratégie d'entreprise et accompagnement fiduciaire, pour développer et optimiser votre business.",
    url: "https://www.strataidge-fiduciaire.com",
    logo: "https://www.strataidge-fiduciaire.com/favicon-48x48.png",
    image: "https://www.strataidge-fiduciaire.com/hero-background.jpg",
    telephone: "+32 499 47 02 98",
    email: "contact@strataidge-fiduciaire.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BE",
      addressRegion: "Wallonie",
    },
    serviceType: ["Expertise comptable", "Conseil fiscal", "Stratégie d'entreprise", "Accompagnement fiduciaire"],
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
    ],
    sameAs: ["https://www.linkedin.com/company/strataidge", "https://www.instagram.com/strataidge"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
