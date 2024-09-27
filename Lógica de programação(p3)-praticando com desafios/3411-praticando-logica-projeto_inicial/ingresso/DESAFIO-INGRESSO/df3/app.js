// 3) Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.
function adicao() {
  let n1 = Number(prompt("Digite um valor!"));
  let n2 = Number(prompt("Digite outro valor!"));
  let res = document.querySelector("#res");
  let resultado = 0;

  resultado = n1 + n2;
  res.textContent = ` ${resultado}`;
  console.log(resultado);
}

function subtracao() {
  let n1 = Number(prompt("Digite um valor!"));
  let n2 = Number(prompt("Digite outro valor!"));
  let res = document.querySelector("#res");
  let resultado = 0;
  if (n1 > n2) {
    resultado = n1 - n2;
  } else {
    resultado = n2 - n1;
  }
  res.textContent = ` ${resultado}`;
  console.log(resultado);
}

function multiplicacao() {
  let n1 = Number(prompt("Digite um valor!"));
  let n2 = Number(prompt("Digite outro valor!"));
  let res = document.querySelector("#res");
  let resultado = 0;
  resultado = n1 * n2;
  res.textContent = ` ${resultado.toFixed(2)}`;
  console.log(resultado);
}

function divisao() {
  let n1 = Number(prompt("Digite um valor!"));
  let n2 = Number(prompt("Digite outro valor!"));
  let res = document.querySelector("#res");
  let resultado = 0;
  resultado = n1 / n2;
  res.textContent = ` ${resultado.toFixed(2)}`;
  console.log(resultado);
}
