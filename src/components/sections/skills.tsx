import { site } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="relative z-10 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">Capabilities</p>
        <h2 data-reveal className="display mt-4 max-w-3xl text-4xl text-white md:text-6xl">
          Languages, systems, and tools I am building with.
        </h2>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {site.skillCategories.map((category, index) => (
            <article
              data-reveal
              key={category.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <p className="font-mono text-[11px] tracking-[0.28em] text-accent">
                0{index + 1}
              </p>
              <h3 className="display mt-4 text-2xl text-white">{category.title}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/75 transition-colors hover:border-accent/50 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <svg className="mt-8 h-10 w-full text-white/15" viewBox="0 0 320 40" fill="none">
                <path
                  d="M0 28 C40 8, 80 32, 120 18 S200 6, 240 22 300 8, 320 16"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                {category.items.map((_, i) => (
                  <circle
                    key={i}
                    cx={40 + i * 48}
                    cy={18 + ((i % 2) * 8)}
                    r="3"
                    className="fill-accent/80"
                  />
                ))}
              </svg>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
