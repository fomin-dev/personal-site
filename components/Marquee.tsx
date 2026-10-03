import { useTranslations } from "next-intl";

export function Marquee() {
  const t = useTranslations();
  const items = t.raw("marquee") as string[];
  const loop = [...items, ...items];

  return (
    <div className="group -mx-[3vw] w-[106vw] -rotate-1 overflow-hidden border-y-2 border-ink bg-ink py-3 sm:py-3.5">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap text-sm font-bold uppercase tracking-wide text-paper transition-[animation-play-state] group-hover:[animation-play-state:paused] sm:text-base">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{item}</span>
            <span className="text-red" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
