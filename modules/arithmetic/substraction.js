import { Substraction1 } from './substraction/substraction1.js';
import { Substraction2 } from './substraction/substraction2.js';

export class Substraction {
  isEnabled = false;
  name = 'Substraction';
  modules = [Substraction1, Substraction2];

  main() {
    const a = 3;
    const b = 2;
    const result = this.substract(a, b);
    console.log(`${a} - ${b} = ${result}`);
  }

  substract(a, b) {
    return a - b;
  }
}
