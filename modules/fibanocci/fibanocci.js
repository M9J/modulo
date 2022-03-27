export class Fibanocci {
  isEnabled = true;
  name = 'Fibanocci';

  main() {
    let seq = [0, 1];
    const next = () => seq.at(-1) + seq.at(-2);
    while (next() < 100) seq.push(next());
    console.log(seq);
  }
}
