export const metadata = {
  name: 'Arithmetic.sub',
  isEnabled: true
}

export function main() {
  const log = console.log
  log(sub(1, 2));
  log(sub(3, 2));
}

function sub(n1, n2) {
  return n1 - n2;
}
