export class Palindrome {
  isEnabled = true;
  name = 'Palindrome';

  main() {
    let seq = [0, 1];
    const next = () => seq[seq.length - 1] + seq[seq.length - 2];
    while (next() < 1000) seq.push(next());
    console.log(seq);
  }
}
