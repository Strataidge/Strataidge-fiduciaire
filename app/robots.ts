import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/", "/private/", "/404", "/500", "/_error"],
    },
    sitemap: "https://www.strataidge-fiduciaire.com/sitemap.xml",
    host: "https://www.strataidge-fiduciaire.com",
  }
}
