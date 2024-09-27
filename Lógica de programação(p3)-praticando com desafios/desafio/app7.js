//Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

function test(array, nm) {
  if (array.includes(nm)) {
    return `O nome ${nm} está presente na lista!`;
  } else {
    return `O nome ${nm} não está presente na lista!`;
  }
}
let lista = [
  "joao",
  "renan",
  "pedro",
  "fabricio",
  "dvanie",
  "jorge",
  "billy",
  "luna",
  "gabi",
];
let nome = "billy";
console.log(test(lista, nome));
