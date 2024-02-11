alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 29;
let chute = parseInt(prompt('Escolha um número entre 1 e 30'));

if(chute == numeroSecreto){
    alert('Isso ai! Você descobriu o número secreto (5)');
}else{
    alert('Você errou tente de novo!');
}

