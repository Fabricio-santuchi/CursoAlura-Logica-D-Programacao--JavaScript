//Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.

function test(listaN) {
  let soma = 0;
  let produtoImpares = 1;
  for (i = 0; i < listaN.length; i++) {
    if (listaN[i] % 2 == 0) {
      soma = soma + listaN[i];
    } else {
      produtoImpares *= listaN[i];
    }
  }
  return `A soma dos números pares ${soma} e o produto dos impares ${produtoImpares}.`;
}

let lista = [12, 41, 14, 10, 23, 43];
let res = test(lista);
console.log(res);
