import { useTranslations } from "next-intl";
import { CONTACTS } from "@/lib/contacts";
import { Reveal } from "./Reveal";

type FaqItem = { q: string; a: string };

export function Faq() {
  const t = useTranslations("faq");
  const tNav = useTranslations("nav");
  const items = t.raw("items") as FaqItem[];

  return (
    <section id="faq" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-red">
            {t("eyebrow")}
          </p>
          <h2 className="font-display balance text-3xl font-semibold leading-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {t("text")}
          </p>
          <a
            href={CONTACTS.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-5 inline-block text-sm font-semibold text-red"
          >
            {tNav("cta")} →
          </a>
        </Reveal>

        <div className="border-t border-line">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={i * 50}>
              <details className="faq-item group border-b border-line">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-left transition-colors hover:text-red">
                  <h3 className="text-sm font-semibold leading-snug sm:text-base">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="faq-plus mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-line text-sm font-bold transition-[transform,color,border-color] duration-300"
                  >
                    +
                  </span>
                </summary>
                <p className="faq-answer pb-5 pr-10 text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
