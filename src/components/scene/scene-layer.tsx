"use client";

import dynamic from "next/dynamic";
import { useWebGL } from "@/hooks/use-webgl";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const ExperienceCanvas = dynamic(
  () => import("./experience-canvas").then((mod) => mod.ExperienceCanvas),
  { ssr: false, loading: () => <div className="h-full w-full bg-[#050507]" /> },
);

export function SceneLayer() {
  const webgl = useWebGL();
  const reduced = usePrefersReducedMotion();

  if (!webgl) {
    return (
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        <div className="absolute left-1/2 top-[18%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,140,255,0.28),transparent_62%)]" />
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 [mask-image:linear-gradient(90deg,transparent_0%,#000_42%)]"
      aria-hidden
      style={{ opacity: reduced ? 0.55 : 1 }}
    >
      <ExperienceCanvas />
    </div>
  );
}
