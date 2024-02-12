alert('Boas vindas ao jogo do número secreto');

let numeroMaxAleatorio = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaxAleatorio) + 1;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto
while(chute != numeroSecreto){

    chute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMaxAleatorio}`));

    if(chute == numeroSecreto){
        break;
    }else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que o ${chute}`);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


