import cycle, { FPS100 } from '../../modulo/clock/cycle.js';

export default class LooperPerf {
  isEnabled = true;
  name = 'LooperPerf';

  async main() {
    for (let i = 0; i < 99; i++) {
      this.log(i);
      await cycle(FPS100);
    }
  }

  async log(i) {
    console.log(i);
  }
}
