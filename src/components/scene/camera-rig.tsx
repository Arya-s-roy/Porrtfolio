"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sceneState } from "@/lib/scene-store";

type CameraRigProps = {
  reduced: boolean;
};

export function CameraRig({ reduced }: CameraRigProps) {
  useFrame((state) => {
    const { progress, pointerX, pointerY } = sceneState;
    const z = 6.2 - progress * 2.1;
    const y = progress * 0.85;
    const x = pointerX * 0.35;
    if (reduced) {
      state.camera.position.set(0, 0, 6.2);
      state.camera.lookAt(0, 0, 0);
      return;
    }
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, y + pointerY * 0.12, 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, z, 0.05);
    state.camera.lookAt(0, 0.1, 0);
  });

  return null;
}
