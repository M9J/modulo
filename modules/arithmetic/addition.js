export class Addition {
  isEnabled = true;
  name = 'Addition';

  main() {
    const a = 1;
    const b = 2;
    const result = this.add(a, b);
    console.log(`${a} + ${b} = ${result}`);
  }

  add(a, b) {
    return a + b;
  }
}
