import { useTranslations } from "next-intl";
import { CONTACTS } from "@/lib/contacts";
import { Reveal } from "./Reveal";

export function PromoBanner() {
  const t = useTranslations("promo");

  return (
    <section className="mx-5 mb-16 sm:mx-8 sm:mb-24">
      <Reveal className="stripe-bg relative mx-auto flex max-w-6xl flex-col items-start gap-6 overflow-hidden border border-red bg-red px-6 py-8 text-paper sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-10">
        <div
          aria-hidden="true"
          className="absolute -right-6 -top-6 flex h-24 w-24 rotate-12 items-center justify-center rounded-full border-2 border-dashed border-paper/70 text-center text-[11px] font-bold uppercase leading-tight text-paper/90 sm:right-6 sm:top-6 sm:h-28 sm:w-28"
        >
          <span>
            x5
            <br />
            free
          </span>
        </div>

        <div className="relative max-w-xl pr-16 sm:pr-0">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-paper/80">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-paper/90 sm:text-base">
            {t("text")}
          </p>
        </div>
        <a
          href={CONTACTS.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex shrink-0 items-center justify-center bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-paper hover:text-ink"
        >
          {t("cta")}
        </a>
      </Reveal>
    </section>
  );
}
