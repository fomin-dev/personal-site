import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CONTACTS } from "@/lib/contacts";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <Logo className="text-base" />
          <p className="mt-2 text-xs text-muted">{t("tagline")}</p>
        </div>

        <a
          href={CONTACTS.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-sm font-semibold text-muted transition-colors hover:text-red"
        >
          {CONTACTS.telegramHandle}
        </a>

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <LanguageSwitcher />
          <p className="text-xs text-muted">{t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
