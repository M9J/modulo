export const metadata = {
  name: 'Arithmetic.mul',
  isEnabled: true
}

export function main() {
  const log = console.log
  log(mul(2, 3));
}

function mul(n1, n2) {
  return n1 * n2;
}