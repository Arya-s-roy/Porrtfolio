"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function useActiveSection() {
  const [active, setActive] = useState<(typeof site.nav)[number]["id"]>(
    site.nav[0].id,
  );

  useEffect(() => {
    const ids = site.nav.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id as (typeof site.nav)[number]["id"] | undefined;
        if (id) setActive(id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}
