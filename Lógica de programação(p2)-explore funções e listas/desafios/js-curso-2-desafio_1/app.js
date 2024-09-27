let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function botaoClicado() {
  console.log("O botão foi clicado");
}

function botaoAlert() {
  alert("Eu amo JS");
}

function pCidade() {
  let cidade = prompt("Informe um nome de uma cidade do brasil");
  alert(`Estive em ${cidade} e lembrei de você.`);
}

function Soma() {
  let n1 = parseInt(prompt("Me informe um número"));
  let n2 = parseInt(prompt("Me informe outro número"));
  let soma = n1 + n2;
  alert(`A soma é ${n1} + ${n2} = ${soma}`);
}
