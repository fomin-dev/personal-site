"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

const PROJECT_URL = "https://evnank.vercel.app/";

export function Projects() {
  const t = useTranslations("projects");
  const tags = t.raw("tags") as string[];

  return (
    <section
      id="portfolio"
      className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24"
    >
      <Reveal className="mb-10 max-w-2xl sm:mb-12">
        <p className="eyebrow-rule mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-red">
          {t("eyebrow")}
        </p>
        <h2 className="font-display balance text-3xl font-semibold leading-tight sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {t("intro")}
        </p>
      </Reveal>

      <Reveal className="overflow-hidden border border-line bg-card shadow-sm">
        <div className="flex items-center gap-2 border-b border-line bg-paper-2 px-4 py-3 sm:px-5">
          <span className="h-2.5 w-2.5 rounded-full bg-red/70" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" aria-hidden="true" />
          <span className="ml-2 min-w-0 flex-1 truncate rounded-sm border border-line bg-card px-3 py-1.5 font-mono text-[10px] text-muted sm:text-xs">
            evnank.vercel.app
          </span>
          <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-muted sm:block">
            {t("browserLabel")}
          </span>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col items-start p-6 sm:p-9 lg:p-10">
            <p className="mb-4 inline-flex items-center gap-2 border border-line px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              <span className="h-2 w-2 bg-red" aria-hidden="true" />
              {t("label")}
            </p>
            <h3 className="font-display balance text-2xl font-semibold leading-tight sm:text-3xl">
              {t("projectTitle")}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {t("projectText")}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label={t("detailsLabel")}>
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-line bg-paper px-2.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <a
              href={PROJECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-arrow mt-8 inline-flex items-center justify-center gap-2 bg-ink px-5 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-red"
            >
              {t("cta")}
              <span aria-hidden="true" className="arrow">↗</span>
            </a>
          </div>

          <div className="border-t border-line bg-paper-2 p-3 sm:p-5 lg:border-l lg:border-t-0 lg:p-6">
            <a
              href={PROJECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-[7/6] overflow-hidden border border-line bg-[#102034] shadow-sm"
              aria-label={`${t("screenshots.home")} — ${t("cta")}`}
            >
              <Image
                src="/portfolio/evnank-home.webp"
                alt={t("screenshots.home")}
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.015]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-ink/80 px-3 py-2.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-paper sm:px-4 sm:text-xs">
                {t("screenshots.home")}
              </span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
