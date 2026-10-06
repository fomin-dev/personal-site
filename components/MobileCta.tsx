"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { CONTACTS } from "@/lib/contacts";
import { TelegramIcon } from "./icons";

/** Sticky bottom bar on phones — appears once the hero is scrolled past. */
export function MobileCta() {
  const t = useTranslations("mobileCta");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };

    const onScroll = () => {
      if (raf === 0) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-300 ease-out md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={CONTACTS.telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 bg-red px-5 py-3.5 text-sm font-semibold text-paper"
      >
        <TelegramIcon className="h-5 w-5" />
        {t("label")}
      </a>
      <p className="mt-2 text-center text-[11px] text-muted">{t("hint")}</p>
    </div>
  );
}
