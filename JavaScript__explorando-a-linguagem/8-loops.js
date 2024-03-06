console.log(`\nTrabalhando com condicionais`);
const listaDeDestinos = ['Salvador', 'São Paulo', 'Rio de Janeiro'];

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = 'São Paulo';

console.log('\nDestinos possíveis: ');
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let i = 0;
let destinoExiste = false;
while(i < listaDeDestinos.length){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break;
    }
    i++
}
console.log(`Destino exite: ${destinoExiste}`);

if(podeComprar && destinoExiste){
    console.log('Boa viagem');
}else{
    console.log('Desculpe erro');
}

for(let c=0 ; c<listaDeDestinos.length ; c++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break;
    }
}
