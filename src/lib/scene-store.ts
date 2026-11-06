export const sceneState = {
  progress: 0,
  pointerX: 0,
  pointerY: 0,
};

export function setSceneProgress(value: number) {
  sceneState.progress = Math.min(1, Math.max(0, value));
}

export function setPointer(x: number, y: number) {
  sceneState.pointerX = x;
  sceneState.pointerY = y;
}
