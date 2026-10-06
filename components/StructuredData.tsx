import { getTranslations } from "next-intl/server";
import { CONTACTS } from "@/lib/contacts";
import { SITE_URL } from "@/lib/site";

type ServiceItem = {
  name: string;
  price: string;
  description: string;
};

type FaqItem = { q: string; a: string };

/** Minimal price in USD, parsed out of the human-readable label ("от $25" → 25). */
function minPrice(price: string) {
  const match = price.match(/\d+/);
  return match ? match[0] : undefined;
}

/**
 * schema.org graph for the landing page: who provides the service, what it
 * costs, and the FAQ block (eligible for rich results in search).
 */
export async function StructuredData({ locale }: { locale: string }) {
  const [tMeta, tServices, tFaq] = await Promise.all([
    getTranslations({ locale, namespace: "meta" }),
    getTranslations({ locale, namespace: "services" }),
    getTranslations({ locale, namespace: "faq" }),
  ]);

  const services = tServices.raw("items") as ServiceItem[];
  const faq = tFaq.raw("items") as FaqItem[];
  const pageUrl = `${SITE_URL}/${locale}`;

  const graph = [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Fomin",
      alternateName: "fomin()",
      url: pageUrl,
      description: tMeta("description"),
      image: `${SITE_URL}/og-image.png`,
      logo: `${SITE_URL}/icon-512.png`,
      priceRange: "$20–$200",
      telephone: CONTACTS.phoneDisplay,
      areaServed: { "@type": "Place", name: "Worldwide" },
      availableLanguage: ["ru", "uk", "en"],
      sameAs: [
        CONTACTS.telegramUrl,
        "https://www.instagram.com/fomin.developer/",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: CONTACTS.phoneDisplay,
          url: CONTACTS.telegramUrl,
          availableLanguage: ["ru", "uk", "en"],
        },
      ],
      knowsAbout: tMeta.raw("keywords") as string[],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: tServices("title"),
        itemListElement: services.map((item) => ({
          "@type": "Offer",
          name: item.name,
          description: item.description,
          priceCurrency: "USD",
          price: minPrice(item.price),
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: minPrice(item.price),
            priceCurrency: "USD",
          },
          itemOffered: {
            "@type": "Service",
            name: item.name,
            description: item.description,
            serviceType: item.name,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: pageUrl,
      name: "Fomin",
      description: tMeta("description"),
      inLanguage: locale,
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      inLanguage: locale,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // Static, locale-scoped JSON built above — no user input reaches it.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
