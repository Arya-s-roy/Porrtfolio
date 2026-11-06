"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/cn";

export function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5">
      <nav className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-black/25 px-4 py-2.5 backdrop-blur-xl">
        <button
          type="button"
          onClick={() => go("home")}
          className="display px-2 text-sm tracking-tight text-white"
        >
          {site.shortName}
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className={cn(
                "relative rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-white",
                active === item.id && "text-white",
              )}
            >
              {active === item.id && (
                <span className="absolute inset-0 rounded-full bg-white/10" />
              )}
              <span className="relative">{item.label}</span>
            </button>
          ))}
        </div>
        <button
          type="button"
          className="rounded-full p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute left-4 right-4 top-16 z-50 rounded-3xl border border-white/10 bg-[#07070c]/95 p-4 backdrop-blur-xl md:hidden"
          >
            {site.nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="block w-full rounded-2xl px-4 py-3 text-left text-sm uppercase tracking-[0.16em] text-white/80"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
