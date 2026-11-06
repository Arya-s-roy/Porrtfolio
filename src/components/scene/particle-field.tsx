"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sceneState } from "@/lib/scene-store";

type ParticleFieldProps = {
  count: number;
};

export function ParticleField({ count }: ParticleFieldProps) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const seeds = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      return {
        radius: 2.4 + Math.random() * 4.2,
        speed: 0.08 + Math.random() * 0.22,
        offset: Math.random() * Math.PI * 2,
        y: (Math.random() - 0.5) * 6,
        scale: 0.012 + Math.random() * 0.03,
        hue: i % 3,
      };
    });
  }, [count]);

  useFrame((state) => {
    const instanced = mesh.current;
    if (!instanced) return;
    const t = state.clock.elapsedTime;
    const burst = sceneState.progress;

    seeds.forEach((seed, i) => {
      const angle = seed.offset + t * seed.speed + burst * 1.8;
      dummy.position.set(
        Math.cos(angle) * seed.radius,
        seed.y + Math.sin(t * 0.3 + seed.offset) * 0.2 + burst * 0.6,
        Math.sin(angle) * seed.radius - burst * 1.2,
      );
      dummy.scale.setScalar(seed.scale * (1 + burst * 0.6));
      dummy.rotation.set(t * 0.2, angle, 0);
      dummy.updateMatrix();
      instanced.setMatrixAt(i, dummy.matrix);
    });
    instanced.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#9aa6ff"
        emissive="#4d5dff"
        emissiveIntensity={0.55}
        roughness={0.35}
        metalness={0.7}
        transparent
        opacity={0.7}
      />
    </instancedMesh>
  );
}
