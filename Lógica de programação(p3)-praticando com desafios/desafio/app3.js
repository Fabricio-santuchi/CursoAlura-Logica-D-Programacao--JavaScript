//Crie uma função que determine se um ano é bissexto.

function bissexto(ano) {
    if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0){
        return 'Ele é Bissexto';
    }else{
        return 'Ele não é Bissexto';
    }
}
let res = bissexto(2200);
console.log(res);