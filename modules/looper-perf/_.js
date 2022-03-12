import delay, { FPS100 } from '../../modulo/clock/delay.js';

export class LooperPerf {
  isEnabled = true;
  name = 'LooperPerf';

  async main() {
    for (let i = 0; i < 99; i++) {
      this.log(i);
      await delay(FPS100);
    }
  }

  async log(i) {
    console.log(i);
  }
}
