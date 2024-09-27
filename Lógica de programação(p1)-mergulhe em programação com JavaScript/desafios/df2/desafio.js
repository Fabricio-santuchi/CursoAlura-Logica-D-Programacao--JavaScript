let diaDaSemana = prompt("Qual é o dia da semana");

if (diaDaSemana == "Sábado" || diaDaSemana == "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

//-----------------------------------

let numeroUser = prompt("Digite um número");

if (numeroUser > 0) {
  alert("Número positivo!");
} else {
  alert("Número negativo!");
}

//-----------------------------------

let pontuacao = prompt("Qual sua pontuação?");

if (pontuacao >= 100) {
  alert("Parabéns");
} else {
  alert("Tente novamente para ganhar.");
}

//----------------------------------

let saldoUser = prompt("Informe seu saldo?");

alert(`Seu saldo da conta é de R$${saldoUser}. Tenha um Ótimo dia!`);

//----------------------------------

let nomeUser = prompt("Digite seu nome");

alert(`Boas-vindas ${nomeUser}`);
