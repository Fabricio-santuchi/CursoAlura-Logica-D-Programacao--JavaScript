// Desenvolva uma função que valide se uma string é vazia ou não.

function valideString(msg) {
    
    if(msg == ''){
        return 'String vazia!'
    }else{
        return 'String com algum valor!'
    }
}

let res = valideString('');
console.log(res);