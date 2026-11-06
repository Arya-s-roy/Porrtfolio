"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setPointer, setSceneProgress } from "@/lib/scene-store";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

export function ScrollOrchestrator() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const onPointer = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      setPointer(x, y);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    const ctx = gsap.context(() => { // scroll-driven scene + reveals
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: reduced ? false : 0.6,
        onUpdate: (self) => setSceneProgress(self.progress),
      });

      if (!reduced) {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 36, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.05,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 86%",
              },
            },
          );
        });

        const track = document.querySelector<HTMLElement>("[data-project-track]");
        const pin = document.querySelector<HTMLElement>("[data-project-pin]");
        if (track && pin && window.innerWidth >= 900) {
          const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
          gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: pin,
              start: "top top",
              end: () => `+=${distance()}`,
              pin: true,
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          });
        }
      }
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const timeout = window.setTimeout(refresh, 400);

    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("load", refresh);
      window.clearTimeout(timeout);
      ctx.revert();
    };
  }, [reduced]);

  return null;
}
