"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

type ServiceItem = {
  name: string;
  price: string;
  description: string;
  extras: string[];
};

const ROTATIONS = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-1"];

export function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as ServiceItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24"
    >
      <Reveal className="mb-10 max-w-2xl sm:mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-red">
          {t("eyebrow")}
        </p>
        <h2 className="font-display balance text-3xl font-semibold leading-tight sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {t("note")}
        </p>
      </Reveal>

      <Reveal className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={item.name}
              className="group relative flex flex-col gap-4 overflow-hidden bg-card p-6 transition-colors hover:bg-paper-2 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="font-display pointer-events-none absolute -bottom-6 -right-2 select-none text-8xl font-semibold leading-none text-ink/5 transition-colors group-hover:text-red/10 sm:text-9xl"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative flex items-start justify-between gap-3">
                <h3 className="font-display max-w-[60%] text-xl font-semibold sm:text-2xl">
                  {item.name}
                </h3>
                <span
                  className={`shrink-0 whitespace-nowrap bg-red px-2.5 py-1 text-xs font-bold text-paper shadow-sm transition-transform group-hover:rotate-0 sm:text-sm ${ROTATIONS[i % ROTATIONS.length]}`}
                >
                  {item.price}
                </span>
              </div>
              <p className="relative max-w-[85%] text-sm leading-relaxed text-muted">
                {item.description}
              </p>

              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="relative flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:text-red"
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center border border-ink text-xs transition-transform duration-300 ${isOpen ? "rotate-45 border-red text-red" : ""}`}
                  aria-hidden="true"
                >
                  +
                </span>
                {isOpen ? t("collapseLabel") : t("expandLabel")}
              </button>

              <div
                className={`relative grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <ul className="flex flex-col gap-2 border-t border-line pt-4 text-sm text-muted">
                    {item.extras.map((extra) => (
                      <li key={extra} className="flex items-start gap-2">
                        <span className="mt-1 text-red" aria-hidden="true">
                          +
                        </span>
                        {extra}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
