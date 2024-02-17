//Implemente uma função que verifique se uma pessoa é maior de idade.

function maiordeidade(nome, idade) {

    let rrs;
    if(idade > 17){
        rrs = 'Maior';
    }else if(idade < 18){
        rrs = 'Menor';
    }

    return `${nome} é ${rrs} idade!`;
}
let res = maiordeidade('Fabricio', 18);
console.log(res);