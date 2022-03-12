import delay from '../../modulo/clock/delay.js';

export class LooperPerf {
  isEnabled = false;
  name = 'LooperPerf';

  async main() {
    for (let i = 0; i < 99; i++) {
      this.log(i);
      await delay(10);
    }
  }

  async log(i) {
    console.log(i);
  }
}
