export const metadata = {
  name: 'Arithmetic.div',
  isEnabled: true
}

export function main() {
  const log = console.log
  log(div(10, 2));
}

function div(n1, n2) {
  return n1 / n2;
}