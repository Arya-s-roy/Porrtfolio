"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { site } from "@/data/site";

function AnimatedStat({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 70, damping: 22 });
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const decimals = Number.isInteger(value) ? 0 : 2;

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${latest.toFixed(decimals)}${suffix}`;
    });
  }, [decimals, spring, suffix]);

  return <span ref={ref}>{`0${suffix}`}</span>;
}

export function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">About</p>
          <h2 data-reveal className="display mt-4 text-5xl text-white md:text-7xl">
            {site.aboutHeading}
          </h2>
          <div className="mt-10 space-y-5 text-base leading-8 text-white/70 md:text-lg">
            {site.biography.map((paragraph) => (
              <p data-reveal key={paragraph.slice(0, 24)}>
                {paragraph}
              </p>
            ))}
          </div>
          <p data-reveal className="mt-8 max-w-xl text-sm leading-7 text-white/50">
            {site.philosophy}
          </p>
        </div>
        <div className="space-y-8">
          <div data-reveal className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/40">
              Technical interests
            </p>
            <ul className="mt-5 space-y-3">
              {site.interests.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="h-px w-8 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {site.stats.map((stat) => (
              <div
                data-reveal
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-black/30 p-5"
              >
                <p className="display text-3xl text-white md:text-4xl">
                  <AnimatedStat value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/45">
                  {stat.label}
                </p>
                <p className="mt-2 text-xs leading-5 text-white/40">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
