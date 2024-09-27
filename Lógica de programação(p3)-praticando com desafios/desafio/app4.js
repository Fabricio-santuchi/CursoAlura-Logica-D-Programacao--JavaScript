//Implemente uma função que calcule a média de dois números,
//interrompendo a execução se algum dos números não for válido.

function media(n1, n2) {
  let rs;
  if (
    typeof n1 !== "number" ||
    typeof n2 !== "number" ||
    isNaN(n1) ||
    isNaN(n2) ||
    n1 < 0 ||
    n2 < 0
  ) {
    return "Os números fornecidos não são válidos.";
  } else {
    rs = (n1 + n2) / 2;
  }
  return `A media do valor ${n1} e ${n2} = ${rs}`;
}

let res = media(4, 7);
console.log(res);
