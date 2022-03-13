export class Palindrome {
  isEnabled = true;
  name = "Palindrome";
  
  main() {
    let first = 0;
    let second = 1;
    console.log(first);
    console.log(second);
    let third = 0;
    for (let i = 0; i < 20; i++) {
      third = first + second;
      console.log(third);
      console.log(second + third);
    }
  }
}
