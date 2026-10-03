import { useTranslations } from "next-intl";
import { CONTACTS } from "@/lib/contacts";

export function Hero() {
  const t = useTranslations("hero");
  const lines = t("title").split("\n");

  return (
    <section
      id="top"
      className="relative mx-auto grid max-w-6xl gap-10 overflow-hidden px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16"
    >
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute -right-10 -top-24 select-none text-[16rem] font-semibold leading-none text-ink/5 sm:-right-6 sm:-top-28 sm:text-[22rem]"
      >
        ()
      </span>

      <div className="relative">
        <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red">
            {t("eyebrow")}
          </p>
          <span className="inline-flex items-center gap-2 border border-line bg-card px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-red" />
            {t("status")}
          </span>
        </div>
        <h1 className="font-display balance text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:mt-7 sm:text-lg">
          {t("subtitle")}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
          <a
            href={CONTACTS.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-red px-5 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-red-dim sm:px-6 sm:text-base"
          >
            {t("ctaPrimary")}
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border border-ink px-5 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-ink hover:text-paper sm:px-6 sm:text-base"
          >
            {t("ctaSecondary")}
          </a>
        </div>
      </div>

      <div className="relative flex shrink-0 gap-6 border-t border-line pt-6 font-display text-xl font-semibold leading-tight sm:gap-8 sm:pt-7 sm:text-2xl lg:flex-col lg:gap-2 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
        <span className="inline-block -rotate-2">Web</span>
        <span className="inline-block rotate-1">Bots</span>
        <span className="inline-block -rotate-1 text-red">Scripts</span>
      </div>
    </section>
  );
}
