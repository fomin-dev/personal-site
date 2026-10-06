import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL, languageAlternates } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === routing.defaultLocale ? 1 : 0.8,
    alternates: { languages: languageAlternates() },
  }));
}
