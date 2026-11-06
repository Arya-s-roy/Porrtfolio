"use client";

import { ArrowDown } from "lucide-react";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[100svh] flex-col justify-between px-6 pb-16 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050507] via-[#050507]/55 to-transparent" />
      <div className="relative w-full max-w-6xl">
        <p
          className="rise text-[11px] uppercase tracking-[0.42em] text-white/50"
          style={{ animationDelay: "80ms" }}
        >
          {site.name}
        </p>
        <h1 className="display mt-5 max-w-5xl text-5xl leading-[0.9] text-white sm:text-7xl md:text-8xl lg:text-[6.6rem]">
          {site.heroLine.split(" ").map((word, index) => (
            <span
              key={word}
              className="rise mr-[0.18em] inline-block"
              style={{ animationDelay: `${180 + index * 90}ms` }}
            >
              {word}
            </span>
          ))}
        </h1>
        <p
          className="rise mt-8 max-w-xl text-sm tracking-[0.08em] text-white/70 md:text-base"
          style={{ animationDelay: "720ms" }}
        >
          {site.title}
        </p>
      </div>
      <button
        type="button"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="rise relative z-10 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-white/55"
        style={{ animationDelay: "1s" }}
      >
        Scroll
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
          <ArrowDown size={14} className="animate-bounce" />
        </span>
      </button>
    </section>
  );
}
