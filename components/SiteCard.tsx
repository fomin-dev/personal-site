import { useTranslations } from "next-intl";
import { CONTACTS } from "@/lib/contacts";
import { SITE_URL } from "@/lib/site";
import { Reveal } from "./Reveal";

const DISPLAY_URL = SITE_URL.replace(/^https?:\/\//, "");

/**
 * "This very site is the work sample" block — the closest thing to a
 * portfolio case while there are no client projects to show yet.
 */
export function SiteCard() {
  const t = useTranslations("siteCard");

  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
      <Reveal className="grid items-center gap-8 border border-line bg-card p-6 sm:p-10 lg:grid-cols-[1.05fr_minmax(0,1fr)] lg:gap-14">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-red">
            {t("eyebrow")}
          </p>
          <h2 className="font-display balance text-2xl font-semibold leading-tight sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {t("text")}
          </p>
          <a
            href={CONTACTS.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center bg-ink px-5 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-red"
          >
            {t("cta")}
          </a>
        </div>

        {/* Browser chrome mock-up — decorative, hence hidden from a11y tree */}
        <div
          aria-hidden="true"
          className="group relative select-none overflow-hidden border border-line bg-paper shadow-sm transition-transform duration-500 ease-out hover:-translate-y-1"
        >
          <div className="flex items-center gap-2 border-b border-line bg-paper-2 px-3 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="ml-2 flex-1 truncate rounded-sm bg-card px-2.5 py-1 font-mono text-[10px] text-muted">
              {DISPLAY_URL}
            </span>
          </div>
          <div className="relative overflow-hidden px-5 py-7 sm:px-7 sm:py-9">
            <span className="font-display pointer-events-none absolute -right-4 -top-10 text-[9rem] font-semibold leading-none text-ink/[0.04]">
              ()
            </span>
            <p className="relative font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-red">
              fomin — web · bots · scripts
            </p>
            <p className="font-display relative mt-3 text-2xl font-semibold leading-[1.1] sm:text-3xl">
              RU
              <span className="mx-1.5 text-line">/</span>UA
              <span className="mx-1.5 text-line">/</span>
              <span className="text-red">EN</span>
            </p>
            <div className="relative mt-5 flex flex-wrap gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-wide">
              {["Next.js", "i18n", "SEO", "Vercel", "Responsive"].map((tag) => (
                <span key={tag} className="border border-line px-2 py-1 text-muted">
                  {tag}
                </span>
              ))}
            </div>
            <div className="relative mt-6 flex gap-2">
              <span className="bg-red px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-wide text-paper">
                Telegram →
              </span>
              <span className="border border-ink px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-wide">
                Pricing
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
