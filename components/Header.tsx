"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CONTACTS } from "@/lib/contacts";

const NAV_ITEMS = [
  { id: "services", key: "services" },
  { id: "process", key: "process" },
  { id: "why", key: "why" },
  { id: "faq", key: "faq" },
  { id: "contacts", key: "contacts" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `link-underline transition-colors ${active === id ? "text-red" : "hover:text-ink"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="shrink-0">
          <Logo className="text-lg sm:text-xl" />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex">
          {NAV_ITEMS.map(({ id, key }) => (
            <a key={id} href={`#${id}`} className={linkClass(id)}>
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-5">
          <LanguageSwitcher className="hidden sm:flex" />
          <a
            href={CONTACTS.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-ink px-3.5 py-2 text-xs font-semibold text-paper transition-colors hover:bg-red sm:px-4 sm:text-sm"
          >
            {t("cta")}
          </a>
        </div>
      </div>

      {/* Narrow screens: scrollable anchor rail, plus the switcher on phones */}
      <div className="flex items-center gap-3 border-t border-line px-5 py-2 sm:px-8 lg:hidden">
        <nav className="no-scrollbar -mx-1 flex flex-1 items-center gap-4 overflow-x-auto px-1 text-xs font-semibold uppercase tracking-wide text-muted">
          {NAV_ITEMS.map(({ id, key }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`whitespace-nowrap transition-colors ${
                active === id ? "text-red" : ""
              }`}
            >
              {t(key)}
            </a>
          ))}
        </nav>
        <LanguageSwitcher className="shrink-0 sm:hidden" />
      </div>
    </header>
  );
}
