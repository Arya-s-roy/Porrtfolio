"use client";

import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import { Suspense } from "react";
import { CameraRig } from "./camera-rig";
import { HeroSculpture } from "./hero-sculpture";
import { ParticleField } from "./particle-field";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function ExperienceCanvas() {
  const reduced = usePrefersReducedMotion();
  const particleCount = reduced ? 48 : 220;

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6.2], fov: 42, near: 0.1, far: 40 }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <fog attach="fog" args={["#050507", 9, 18]} />
      <hemisphereLight args={["#9aa6ff", "#050507", 0.7]} />
      <ambientLight intensity={0.55} />
      <spotLight
        position={[4, 6, 4]}
        intensity={80}
        angle={0.5}
        penumbra={0.85}
        color="#e8ecff"
      />
      <directionalLight position={[-3, 2, 4]} intensity={2.4} color="#4de4ff" />
      <Suspense fallback={null}>
        <HeroSculpture reduced={reduced} />
        <ParticleField count={particleCount} />
      </Suspense>
      <CameraRig reduced={reduced} />
      <AdaptiveDpr />
    </Canvas>
  );
}
