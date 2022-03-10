export class Multiplication {
  name = 'Multiplication';

  main() {
    const a = 2;
    const b = 2;
    const result = this.multiply(a, b);
    console.log(`${a} * ${b} = ${result}`);
  }

  multiply(a, b) {
    return a * b;
  }
}
