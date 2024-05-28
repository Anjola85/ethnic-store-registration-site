import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/admin",
                    "/api",
                    "/_next",
                    "/_app",
                    "/privacy-policy",
                    "/terms-and-conditions", 
                ],
            }
        ],
        sitemap: "https://www.quiikmart.com/sitemap.xml",
    }
}
