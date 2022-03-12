export class Substraction2 {
  isEnabled = true;
  name = 'Substraction2';

  main() {
    const a = 5;
    const b = 0;
    const result = this.substract(a, b);
    console.log(`${a} - ${b} = ${result}`);
  }

  substract(a, b) {
    return a - b;
  }
}
