//Crie um array e utilize a função includes para verificar se um elemento específico está presente.

function verificarArray(nome) {
  let array0 = ["joao", "pedro", "fabricio", "jorge", "billy"];
  if (array0.includes(nome)) {
    return `Esse nome ${nome} já está atribuido!`;
  } else {
    return `Esse nome ${nome} ainda não foi atribuido!`;
  }
}
let res = verificarArray("");
console.log(res);
