//Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.

function encontrarEstudante(estudantes, estudanteProcurado) {
  return estudantes.some((estudante) => {
    return JSON.stringify(estudante) === JSON.stringify(estudanteProcurado);
  });
}

let estudante = [
  { nome: "pedro", idade: 20 },
  { nome: "fabricio", idade: 24 },
  { nome: "renan", idade: 22 },
];
let estudanteProcurad = { nome: "fabricio", idade: 24 };

console.log(encontrarEstudante(estudante, estudanteProcurad));
