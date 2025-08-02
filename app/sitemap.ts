import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.strataidge-fiduciaire.com"

  // Pages principales du site
  const routes = [
    "",
    "/solutions",
    "/approche",
    "/offres",
    "/contact",
    "/about",
    "/services",
    "/creation-entreprise",
    "/conseil-fiscal",
    "/expertise-comptable",
    "/optimisation-fiscale",
    "/digitalisation-comptable",
    "/accompagnement-pme",
    "/transmission-entreprise",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.includes("contact") || route.includes("offres") ? 0.9 : 0.8,
  }))
}
