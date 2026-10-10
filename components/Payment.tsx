import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

type Method = { label: string };

export function Payment() {
  const t = useTranslations("payment");
  const methods = t.raw("methods") as Method[];

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="flex flex-col gap-8 border border-line bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div className="max-w-xl">
          <p className="eyebrow-rule mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-red">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {t("text")}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          {methods.map((method) => (
            <span
              key={method.label}
              className="border border-ink px-4 py-2.5 text-sm font-semibold"
            >
              {method.label}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
