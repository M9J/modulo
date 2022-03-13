export class Palindrome {
  isEnabled = true;
  name = 'Palindrome';

  main() {
    let seq = [0, 1];
    const next = () => seq.at(-1) + seq.at(-2);
    while (next() < 1000) seq.push(next());
    console.log(seq);
  }
}
