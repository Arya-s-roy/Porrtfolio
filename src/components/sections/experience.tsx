import { site } from "@/data/site";

const kindLabel: Record<string, string> = {
  education: "Education",
  achievement: "Achievement",
  activity: "Activity",
  experience: "Experience",
};

export function Experience() {
  return (
    <section id="experience" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">Path</p>
        <h2 data-reveal className="display mt-4 text-4xl text-white md:text-6xl">
          Experience & education
        </h2>
        <p data-reveal className="mt-4 max-w-2xl text-sm leading-7 text-white/50">
          {site.timelineNote}
        </p>
        <div className="relative mt-16">
          <div className="absolute left-[11px] top-0 h-full w-px bg-gradient-to-b from-accent via-white/15 to-transparent md:left-1/2" />
          <div className="space-y-10">
            {site.timeline.map((item, index) => (
              <article
                data-reveal
                key={item.id}
                className={`relative md:flex md:items-start md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <span className="absolute left-0 top-2 h-[22px] w-[22px] rounded-full border border-accent bg-[#050507] shadow-[0_0_18px_rgba(124,140,255,0.7)] md:left-1/2 md:-translate-x-1/2" />
                <div className="ml-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:ml-0 md:w-1/2">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-accent">
                    {kindLabel[item.kind]} · {item.period}
                  </p>
                  <h3 className="display mt-3 text-2xl text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{item.org}</p>
                  <p className="mt-3 text-sm leading-6 text-white/50">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
