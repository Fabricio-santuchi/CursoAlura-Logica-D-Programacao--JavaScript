function ola() {
  console.log("Olá, mundo!");
}
ola();

function olaNome(nome) {
  console.log(`Olá, ${nome}`);
}
olaNome("Fabricio");

function dobro(n) {
  return n * 2;
}
console.log(dobro(5));

function media(n1, n2, n3) {
  return (n1 + n2 + n3) / 2;
}
console.log(media(4, 5, 2));

function maior(n1, n2) {
  return n1 > n2 ? n1 : n2;
}
console.log(maior(5, 9));

function mult(n1) {
  return n1 * n1;
}
console.log(mult(4));
