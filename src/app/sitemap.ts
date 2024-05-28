import { MetadataRoute } from "next";

const PUBLIC_BASE_URL = "https://www.quiikmart.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const sitelinks: string[] = [
        "/about-us",
        "/partner-with-us",
        "/how-it-works",
        "/contact-us",
    ];

    const entries: MetadataRoute.Sitemap = sitelinks.map((pageUrl) => {
        return {
            url: `${PUBLIC_BASE_URL}${pageUrl}`,
        };
    });

    return entries;
}
