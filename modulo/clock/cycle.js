export default function cycle(ms = FPS1) {
  return new Promise((resolve) => {
    let tmr1 = setTimeout(() => {
      clearTimeout(tmr1);
      resolve(true);
    }, ms);
  });
}

const FPS = (fps = 1) => 1000 / fps;
export const FPS1 = FPS(1);
export const FPS10 = FPS(10);
export const FPS60 = FPS(60);
export const FPS100 = FPS(100);
export const FPS120 = FPS(120);
