import type { Metadata, Viewport } from "next";
import { Alegreya, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StructuredData } from "@/components/StructuredData";
import { OG_LOCALES, SITE_URL, languageAlternates } from "@/lib/site";
import "../globals.css";

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ec" },
    { media: "(prefers-color-scheme: dark)", color: "#121009" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: t.raw("keywords") as string[],
    applicationName: "Fomin",
    authors: [{ name: "Fomin" }],
    creator: "Fomin",
    publisher: "Fomin",
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: languageAlternates(),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}`,
      siteName: "Fomin",
      locale: OG_LOCALES[locale] ?? locale,
      alternateLocale: routing.locales
        .filter((other) => other !== locale)
        .map((other) => OG_LOCALES[other] ?? other),
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    formatDetection: { telephone: false },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${alegreya.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <ScrollProgress />
          <CustomCursor />
          {children}
        </NextIntlClientProvider>
        <StructuredData locale={locale} />
      </body>
    </html>
  );
}
