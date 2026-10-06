import { routing } from "@/i18n/routing";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fomin-chi.vercel.app"
).replace(/\/$/, "");

/** OpenGraph locale codes, keyed by the app's own locale segments. */
export const OG_LOCALES: Record<string, string> = {
  ru: "ru_RU",
  uk: "uk_UA",
  en: "en_US",
};

/** `hreflang` map for `alternates.languages`, plus x-default on the root locale. */
export function languageAlternates(path = "") {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = `${SITE_URL}/${locale}${path}`;
  }
  languages["x-default"] = `${SITE_URL}/${routing.defaultLocale}${path}`;
  return languages;
}
