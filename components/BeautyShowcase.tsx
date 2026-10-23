"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

const BEAUTY_URL = "https://beauty-studio-fomin.vercel.app/";

export function BeautyShowcase() {
  const t = useTranslations("beautyShowcase");
  const features = t.raw("features") as string[];

  return (
    <section id="beauty-demo" className="mx-auto max-w-[1440px] px-5 pb-16 sm:px-8 sm:pb-24">
      <Reveal className="relative isolate overflow-hidden border border-[#56362c] bg-[#211512] text-[#fbf1e5]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-28 -z-10 h-80 w-80 rounded-full border border-[#d97a3a]/25 sm:-right-8 sm:-top-40 sm:h-[30rem] sm:w-[30rem]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-36 -left-20 -z-10 h-80 w-80 rounded-full bg-[#d97a3a]/10 blur-3xl"
        />

        <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
          <div className="group relative min-h-[300px] overflow-hidden border-b border-[#56362c] bg-[#2d201b] sm:min-h-[420px] lg:min-h-[560px] lg:border-b-0 lg:border-r">
            <a
              href={BEAUTY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 block"
              aria-label={`${t("imageAlt")} — ${t("cta")}`}
            >
              <Image
                src="/portfolio/beauty-studio-home.webp"
                alt={t("imageAlt")}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
              />
            </a>
            <span className="absolute inset-x-0 top-0 flex items-center gap-2 border-b border-white/15 bg-[#211512]/90 px-4 py-3 font-mono text-[10px] text-[#f2d9c2] sm:px-5 sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#e47d35]" aria-hidden="true" />
              beauty-studio-fomin.vercel.app
              <span className="ml-auto">↗</span>
            </span>
            <span className="absolute bottom-4 left-4 border border-[#f2d9c2]/50 bg-[#211512]/85 px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#fbf1e5] sm:bottom-6 sm:left-6 sm:text-[10px]">
              {t("imageCaption")}
            </span>
            <a
              href={BEAUTY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 z-10 block aspect-[4/3] w-[40%] overflow-hidden border-4 border-[#fbf1e5] shadow-2xl transition-transform duration-300 hover:-translate-y-1 sm:bottom-6 sm:right-6 sm:w-[34%]"
              aria-label={`${t("galleryAlt")} — ${t("cta")}`}
            >
              <Image
                src="/portfolio/beauty-studio-gallery.webp"
                alt={t("galleryAlt")}
                fill
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="object-cover object-top"
              />
              <span className="absolute inset-x-0 bottom-0 bg-[#211512]/85 px-2 py-1.5 font-mono text-[8px] font-semibold uppercase tracking-wide text-[#fbf1e5] sm:px-3 sm:py-2 sm:text-[9px]">
                {t("galleryCaption")}
              </span>
            </a>
          </div>

          <div className="flex flex-col items-start justify-center p-6 sm:p-10 lg:p-12 xl:p-14">
            <p className="mb-5 inline-flex items-center gap-2 border border-[#d97a3a]/55 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e7a56f]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e47d35]" aria-hidden="true" />
              {t("eyebrow")}
            </p>
            <h2 className="font-display balance max-w-xl text-3xl font-semibold leading-[1.08] sm:text-4xl xl:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#dac8b9] sm:text-base">
              {t("description")}
            </p>

            <ul className="mt-7 flex flex-wrap gap-2" aria-label={t("featuresLabel")}>
              {features.map((feature) => (
                <li
                  key={feature}
                  className="border border-[#6b4a3e] bg-white/[0.03] px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-wide text-[#f2d9c2]"
                >
                  {feature}
                </li>
              ))}
            </ul>

            <p className="mt-7 max-w-xl border-l-2 border-[#d97a3a] pl-4 text-xs leading-relaxed text-[#c8b2a2] sm:text-sm">
              {t("demoNote")}
            </p>

            <a
              href={BEAUTY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-[#e47d35] px-5 py-3.5 text-sm font-semibold text-[#211512] transition-transform hover:-translate-y-0.5 hover:bg-[#f19a58]"
            >
              {t("cta")}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
