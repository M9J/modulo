export class Substraction1 {
  name = 'Substraction1';

  main() {
    const a = 1;
    const b = 3;
    const result = this.substract(a, b);
    console.log(`${a} - ${b} = ${result}`);
  }

  substract(a, b) {
    return a - b;
  }
}
