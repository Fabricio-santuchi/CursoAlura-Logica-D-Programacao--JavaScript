console.log(`Trabalhando com listas`);
const listaDeDestinos = ['Salvador','São Paulo','Rio de Janeiro'];

listaDeDestinos.push('Curitiba'); // adicionando um item na lista array.
console.log('Destinos possíveis: ')
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //delata um item da lista, primeiro valor para posição segundo valor para quantidade.
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);
