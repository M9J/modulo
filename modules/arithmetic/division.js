export class Division {
  isEnabled = true;
  name = 'Division';

  main() {
    const a = 10;
    const b = 2;
    const result = this.divide(a, b);
    console.log(`${a} / ${b} = ${result}`);
  }

  divide(a, b) {
    return a / b;
  }
}
