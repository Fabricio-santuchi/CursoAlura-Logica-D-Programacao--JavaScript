// 2) Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.

function stringP(msg) {
  let nInteiro = parseInt(msg);
  return nInteiro;
}

let numeroString = "123";
let numeroInteiro = stringP(numeroString);
console.log(numeroInteiro); // saida: 123
