"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CONTACTS } from "@/lib/contacts";
import { ViberIcon, WhatsAppIcon, TelegramIcon, CopyIcon, CheckIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Contacts() {
  const t = useTranslations("contacts");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const channels = [
    {
      key: "telegram",
      label: t("telegramLabel"),
      sub: CONTACTS.telegramHandle,
      copyValue: CONTACTS.telegramHandle,
      href: CONTACTS.telegramUrl,
      Icon: TelegramIcon,
    },
    {
      key: "viber",
      label: t("viberLabel"),
      sub: CONTACTS.phoneDisplay,
      copyValue: CONTACTS.phoneDisplay,
      href: CONTACTS.viberUrl,
      Icon: ViberIcon,
    },
    {
      key: "whatsapp",
      label: t("whatsappLabel"),
      sub: CONTACTS.phoneDisplay,
      copyValue: CONTACTS.phoneDisplay,
      href: CONTACTS.whatsappUrl,
      Icon: WhatsAppIcon,
    },
  ];

  const handleCopy = (
    event: React.MouseEvent<HTMLButtonElement>,
    key: string,
    value: string,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    navigator.clipboard?.writeText(value).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey((current) => (current === key ? null : current)), 1600);
    });
  };

  return (
    <section id="contacts" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="mb-10 max-w-2xl sm:mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-red">
          {t("eyebrow")}
        </p>
        <h2 className="font-display balance text-3xl font-semibold leading-tight sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {t("text")}
        </p>
      </Reveal>

      <Reveal className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
        {channels.map(({ key, label, sub, copyValue, href, Icon }) => {
          const isCopied = copiedKey === key;
          return (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col gap-5 bg-card p-6 transition-colors hover:bg-ink sm:p-8"
            >
              <div className="flex items-start justify-between gap-3">
                <Icon className="h-7 w-7 text-red transition-colors" />
                <button
                  type="button"
                  onClick={(e) => handleCopy(e, key, copyValue)}
                  aria-label={t("copyHint")}
                  title={t("copyHint")}
                  className="relative flex h-8 w-8 shrink-0 items-center justify-center border border-line text-muted opacity-0 transition-all hover:border-red hover:text-red group-hover:opacity-100 group-hover:border-paper/30 group-hover:text-paper/70 group-hover:hover:border-red group-hover:hover:text-red"
                >
                  {isCopied ? (
                    <CheckIcon className="h-4 w-4" />
                  ) : (
                    <CopyIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
              <div>
                <div className="text-base font-semibold transition-colors group-hover:text-paper">
                  {label}
                </div>
                <div className="text-sm text-muted transition-colors group-hover:text-paper/70">
                  {isCopied ? t("copied") : sub}
                </div>
              </div>
            </a>
          );
        })}
      </Reveal>
    </section>
  );
}
