import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

type Step = {
  title: string;
  text: string;
  meta: string;
};

export function Process() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as Step[];

  return (
    <section id="process" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
      <Reveal className="mb-10 max-w-2xl sm:mb-14">
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

      <ol className="relative grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-6">
        <span
          aria-hidden="true"
          className="absolute left-0 right-0 top-[18px] hidden h-px bg-line lg:block"
        />
        {steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.title}
            delay={i * 90}
            className="group relative flex flex-col gap-3"
          >
            <div className="relative flex items-center gap-3">
              <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-card font-mono text-xs font-bold transition-colors group-hover:border-red group-hover:bg-red group-hover:text-paper">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
                {step.meta}
              </span>
            </div>
            <h3 className="font-display text-xl font-semibold sm:text-2xl">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{step.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
