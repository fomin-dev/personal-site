import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LABELS: Record<string, string> = {
  ru: "RU",
  uk: "UA",
  en: "EN",
};

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const activeLocale = useLocale();

  return (
    <div
      className={`flex items-center gap-1 text-xs font-semibold tracking-wide ${className}`}
    >
      {routing.locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-1">
          <Link
            href="/"
            locale={locale}
            aria-current={locale === activeLocale ? "true" : undefined}
            className={`px-1.5 py-1 transition-colors ${
              locale === activeLocale
                ? "text-red"
                : "text-muted hover:text-ink"
            }`}
          >
            {LABELS[locale]}
          </Link>
          {i < routing.locales.length - 1 && (
            <span className="text-line">/</span>
          )}
        </span>
      ))}
    </div>
  );
}
