export const metadata = {
  name: 'Arithmetic.sum',
  isEnabled: true
}

export function main() {
  const log = console.log
  log(sum(1, 2));
  log(sum(2, 3));
  log(sum(3, 4));
}

function sum(n1, n2) {
  return n1 + n2;
}