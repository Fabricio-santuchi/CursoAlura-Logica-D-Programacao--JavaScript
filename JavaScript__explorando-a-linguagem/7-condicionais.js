console.log(`Trabalhando com condicionais`);
const listaDeDestinos = ['Salvador', 'São Paulo', 'Rio de Janeiro'];

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log('Destinos possíveis: ');
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log('Comprador maior de idade!');
//     listaDeDestinos.splice(1, 1); //delata um item da lista, primeiro valor para posição segundo valor para quantidade que vai ser deletado 1 para ele 2 para ele e o proximo etc.
// } else if (estaAcompanhada) {
//     listaDeDestinos.splice(1, 1);
//     console.log('Pode comprar,Comprador está acompanhado!')
// } else {
//     console.log('Menor de idade, Não posso vender');
// }

console.log('Embarque: \n\n');
if((idadeComprador >= 18 || estaAcompanhada) && temPassagemComprada){
    console.log('Boa Viagem!');
    listaDeDestinos.splice(2, 1);
}else{
    console.log('Você não pode embarca');
}
console.log(listaDeDestinos)


// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);