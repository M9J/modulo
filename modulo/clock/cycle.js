export default function cycle(ms = FPS1) {
  return new Promise((resolve) => {
    let tmr1 = setTimeout(() => {
      clearTimeout(tmr1);
      resolve(true);
    }, ms);
  });
}

export const FPS1 = 1000;
export const FPS10 = 100;
export const FPS60 = 16.66;
export const FPS100 = 10;
export const FPS120 = 8.33;
