"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sceneState } from "@/lib/scene-store";

type HeroSculptureProps = {
  reduced: boolean;
};

export function HeroSculpture({ reduced }: HeroSculptureProps) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);
  const coreMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#c5ccff",
        metalness: 1,
        roughness: 0.12,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        envMapIntensity: 1.4,
        iridescence: 0.35,
        iridescenceIOR: 1.3,
      }),
    [],
  );

  useFrame((state) => {
    const t = reduced ? 0 : state.clock.elapsedTime;
    const { progress, pointerX, pointerY } = sceneState;
    if (group.current) {
      const targetY = pointerX * 0.45 + progress * Math.PI * 1.25;
      const targetX = pointerY * 0.22 + Math.sin(t * 0.35) * 0.08;
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetY,
        reduced ? 1 : 0.045,
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetX,
        reduced ? 1 : 0.045,
      );
      group.current.position.x = 1.15;
      group.current.position.y = reduced ? 0 : Math.sin(t * 0.55) * 0.12;
      const scale = 1 + progress * 0.42;
      group.current.scale.setScalar(scale);
    }
    if (core.current) {
      core.current.rotation.z = t * 0.15 + progress;
    }
    if (ring.current) {
      ring.current.rotation.x = Math.PI / 2.4 + progress * 0.5;
      ring.current.rotation.z = t * 0.2;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={core} material={coreMaterial}>
        <icosahedronGeometry args={[1.15, 1]} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.18, 1]} />
        <meshBasicMaterial
          color="#8ea2ff"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>
      <mesh ref={ring}>
        <torusGeometry args={[1.85, 0.012, 16, 128]} />
        <meshBasicMaterial color="#4de4ff" transparent opacity={0.7} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0.4, 0.2]}>
        <torusGeometry args={[1.55, 0.008, 12, 96]} />
        <meshBasicMaterial color="#7c8cff" transparent opacity={0.45} />
      </mesh>
      <pointLight color="#7c8cff" intensity={18} distance={8} />
      <pointLight color="#4de4ff" intensity={10} distance={6} position={[1.4, -0.6, 1]} />
    </group>
  );
}
