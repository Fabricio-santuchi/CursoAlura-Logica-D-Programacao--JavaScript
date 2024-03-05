// 1-Crie uma variável chamada "nome" e atribua a ela o seu nome completo. Em seguida, exiba essa variável no console.

const nome = 'Fabricio Santuchi Da Cunha';
console.log('');
console.log(`\x1b[34m Meu nome completo é ${nome}.\x1b[0m`);
console.log('');

// 2-Crie uma variável chamada "idade" e atribua a ela a sua idade. Em seguida, exiba essa variável no console.

const idade = 24;
console.log(`\x1b[32m Minha idade é ${idade} anos.\x1b[0m`);
console.log('');

// 3-Crie uma variável chamada "numero1" e atribua a ela um número qualquer. Em seguida, crie uma variável chamada "numero2" e atribua a ela outro número qualquer. Realize a soma desses dois números e exiba o resultado no console.

const numero1 = 23;
const numero2 = 87;
const soma = numero1 + numero2;
console.log(`\x1b[31m A soma de ${numero1} e ${numero2} é igual a ${soma}.\x1b[0m`);
console.log('');

// 4-Crie uma variável chamada "frase" e atribua a ela uma frase qualquer. Em seguida, exiba no console o número de caracteres dessa frase.

const frase = 'Olá, Mundo!';
const numeroCaracteres = frase.length;
console.log(`\x1b[35m A frase "${frase}" tem ${numeroCaracteres} caracteres.\x1b[0m`);
console.log('');

// 5-Crie uma variável chamada "booleano" e atribua a ela o valor true ou false. Em seguida, exiba essa variável no console.

const booleanoT = true;
const booleanoF = false;
console.log(`\x1b[36m Valor da variavel T = ${booleanoT}.\x1b[0m`)
console.log(`\x1b[36m Valor da variavel F = ${booleanoF}.\x1b[0m`);
console.log('');

// 6-Crie uma variável chamada "numero" e atribua a ela um número qualquer. Em seguida, verifique se esse número é par ou ímpar e exiba essa informação no console.

const numero = 0;
function parOuImpar(numero){
    return numero % 2 == 0 ? 'Par!' : 'Impar!';
}
const res = parOuImpar(numero);
console.log(`\x1b[33m O número ${numero} é ${res}\x1b[0m`);
console.log('');

// 7-Crie uma variável chamada "lista" e atribua a ela um array com 5 elementos diferentes. Em seguida, exiba no console o primeiro e o último elemento desse array.

const lista = ['Fabricio','Joao','Dvanie','Pedro','Renan'];
console.log(`\x1b[32m O primeiro elemento do array é "${lista[0]}".\x1b[0m`);
console.log(`\x1b[32m O Ultimo elemento do array é "${lista[4]}".\x1b[0m`);
console.log('');

// 8-Crie uma função chamada "soma" que recebe dois parâmetros (números) e retorna a soma desses números. Em seguida, chame essa função passando dois números e exiba o resultado no console.

function somaR(n1,n2) {
    return n1 + n2;
}
rs = somaR(6,41);
console.log(`\x1b[35m A soma dos valores é ${rs}.\x1b[0m`);
console.log('');

// 9-Crie uma função chamada "maiorNumero" que recebe um array de números como parâmetro e retorna o maior número desse array. Em seguida, chame essa função passando um array de números e exiba o resultado no console.

const arrayL = [5,1,6,4,7,2,9,0];
function maiorNumero(lista){
    let maior = arrayL[0];
    let menor = arrayL[0];
    for(i=0;i<lista.length;i++){
        if(lista[i] > maior){
            maior = lista[i];
        }
        if(lista[i] < menor){
            menor = lista[i];
        }
    }

    return [maior, menor];
}
let externos = maiorNumero(arrayL)
console.log(`\x1b[31m O Número maior é ${externos[0]} e o numero menor é ${externos[1]}.\x1b[0m`);
console.log('');


// 10-Crie um loop que exiba no console os números de 1 a 10. 

function loop(inicio, fim){
    for(i=inicio;i<=fim;i++){
        console.log(`${i}`);
    }
}
loop(1,10);
console.log('');
