import { useTranslations } from "next-intl";
import { Reveal } from "./Reveal";

type Point = {
  title: string;
  text: string;
};

export function WhyMe() {
  const t = useTranslations("why");
  const points = t.raw("points") as Point[];

  return (
    <section
      id="why"
      className="relative overflow-hidden bg-ink py-16 text-paper sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-10 grid gap-6 sm:mb-14 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-red">
              {t("eyebrow")}
            </p>
            <h2 className="font-display balance text-3xl font-semibold leading-tight sm:text-4xl">
              {t("title")}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-paper/70 sm:text-base">
            {t("text")}
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-4">
          {points.map((point, i) => (
            <Reveal
              key={point.title}
              delay={i * 90}
              className="group flex flex-col gap-3 border-t border-paper/15 pt-5 transition-colors hover:border-red"
            >
              <span className="font-display text-3xl font-semibold text-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold">{point.title}</h3>
              <p className="text-sm leading-relaxed text-paper/70">
                {point.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
