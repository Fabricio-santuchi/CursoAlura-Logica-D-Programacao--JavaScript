console.log("Boas-vindas.");

//-------------------------------------

let nome = "Fabricio";
console.log(`Olá, ${nome}!`);

//--------------------------------------

let nome1 = "Fabricio";
alert(`Olá, ${nome1}!`);

//--------------------------------------

let Lp = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(Lp);

//---------------------------------------

let valor1 = 5;
let valor2 = 7;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

//---------------------------------------

let valor11 = 9;
let valor22 = 8;
let resultado1 = valor11 - valor22;
console.log(
  `A diferença entre ${valor11} e ${valor22} é igual a ${resultado}.`
);

//---------------------------------------

let idade = prompt("Digite sua idade");
if (idade > 17) {
  console.log("É maior de idade!");
} else {
  console.log("É menor de idade!");
}

//---------------------------------------

var numero = prompt("Digite um valor");
if (numero > 0) {
  console.log("positivo");
} else if (numero < 0) {
  console.log("negativo");
} else {
  console.log("zero");
}

//-------------------------------------

let nm = 1;
while (nm <= 10) {
  console.log(nm);
  nm++;
}

//-------------------------------------

let nota = 7;

if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

//---------------------------------------

let rand = Math.random();
console.log(rand);

//-----------------------------------------

let rand2 = parseInt(Math.random() * 10) + 1;
console.log(rand2);

//------------------------------------------

let rand3 = parseInt(Math.random() * 1000) + 1;
console.log(rand3);
