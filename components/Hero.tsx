import { useTranslations } from "next-intl";
import { CONTACTS } from "@/lib/contacts";

type Fact = { value: string; label: string };

export function Hero() {
  const t = useTranslations("hero");
  const tPromo = useTranslations("promo");
  const lines = t("title").split("\n");
  const facts = t.raw("facts") as Fact[];

  return (
    <section
      id="top"
      className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16"
    >
      <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute -right-10 -top-24 select-none text-[16rem] font-semibold leading-none text-ink/5 sm:-right-6 sm:-top-28 sm:text-[22rem]"
      >
        ()
      </span>

      {/* Promo seal — rotates slowly, jumps to the pricing block */}
      <a
        href="#services"
        aria-label={tPromo("title")}
        className="group absolute right-6 top-6 z-10 hidden h-28 w-28 items-center justify-center lg:flex"
      >
        <span
          aria-hidden="true"
          className="spin-slow absolute inset-0 rounded-full border-2 border-dashed border-red/60 transition-colors group-hover:border-red"
        />
        <span className="font-display text-center text-xl font-semibold leading-none text-red">
          ×5
          <span className="mt-1 block font-mono text-[10px] font-bold uppercase tracking-[0.18em]">
            free
          </span>
        </span>
      </a>

      <div className="relative">
        <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mb-6">
          <p className="eyebrow-rule text-xs font-semibold uppercase tracking-[0.18em] text-red">
            {t("eyebrow")}
          </p>
          <span className="inline-flex items-center gap-2 border border-line bg-card px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-red" />
            {t("status")}
          </span>
        </div>
        <h1 className="font-display balance text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {lines.map((line, i) => (
            <span
              key={i}
              className={`hero-line block ${i === lines.length - 1 ? "text-red" : ""}`}
            >
              {line}
            </span>
          ))}
        </h1>
        <p className="hero-fade mt-6 max-w-xl text-base leading-relaxed text-muted sm:mt-7 sm:text-lg">
          {t("subtitle")}
        </p>

        <div className="hero-fade hero-fade-late mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
          <a
            href={CONTACTS.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine btn-arrow inline-flex items-center justify-center gap-2 bg-red px-5 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-red-dim sm:px-6 sm:text-base"
          >
            {t("ctaPrimary")}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border border-ink px-5 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-ink hover:text-paper sm:px-6 sm:text-base"
          >
            {t("ctaSecondary")}
          </a>
        </div>

        <dl className="hero-fade hero-fade-late mt-10 flex flex-wrap gap-x-8 gap-y-5 sm:mt-12 sm:gap-x-12">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1">
              <span aria-hidden="true" className="h-0.5 w-7 bg-red" />
              <dt className="sr-only">{fact.label}</dt>
              <dd className="font-display mt-1 text-3xl font-semibold leading-none sm:text-4xl">
                {fact.value}
              </dd>
              <span
                aria-hidden="true"
                className="text-[11px] uppercase tracking-wide text-muted"
              >
                {fact.label}
              </span>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative flex shrink-0 gap-6 border-t border-line pt-6 font-display text-xl font-semibold leading-tight sm:gap-8 sm:pt-7 sm:text-2xl lg:flex-col lg:gap-2 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
        <span className="float-slow inline-block -rotate-2">Web</span>
        <span className="float-slow float-delay-1 inline-block rotate-1">
          Bots
        </span>
        <span className="float-slow float-delay-2 inline-block -rotate-1 text-red">
          Scripts
        </span>
      </div>
    </section>
  );
}
