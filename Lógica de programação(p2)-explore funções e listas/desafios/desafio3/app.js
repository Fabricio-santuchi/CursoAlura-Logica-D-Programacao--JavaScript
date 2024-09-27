function imc(peso, altura) {
  return peso / (altura * altura);
}
let Imc = parseInt(imc(93, 1.77));
console.log(Imc);

//--------------------------------------

function dolar(reais) {
  (reais = reais / 4), 80;
  return `R$${reais}`;
}

let dl = dolar(534);
console.log(dl);

function area(base, altura) {
  let area = base * altura;
  return area;
}
let Area = area(20, 40);
console.log(Area);

function tab(numero) {
  for (let i = 1; i >= 10; i++) {
    let res = parseInt(i) * parseInt(numero);
    return `${i} x ${numero} = ${res}`;
  }
}
tab(6);
