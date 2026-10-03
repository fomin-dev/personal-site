"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CONTACTS } from "@/lib/contacts";

const SECTION_IDS = ["services", "why", "contacts"];

export function Header() {
  const t = useTranslations("nav");
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
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

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          <a href="#services" className={linkClass("services")}>
            {t("services")}
          </a>
          <a href="#why" className={linkClass("why")}>
            {t("why")}
          </a>
          <a href="#contacts" className={linkClass("contacts")}>
            {t("contacts")}
          </a>
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
      <div className="flex justify-center gap-1 border-t border-line py-2 sm:hidden">
        <LanguageSwitcher />
      </div>
    </header>
  );
}
