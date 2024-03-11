// Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
var bloco = 3;

if(1 > 0){
    var bloco1 = 2;
}

console.log(bloco1);

let bloco3 = 3;

if(1 > 0){
    let bloco4 = 2;
}

console.log(bloco4);